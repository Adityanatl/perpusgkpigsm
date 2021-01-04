<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import Vue from "vue";

// import { tableData } from "./dataAdvancedtable";

/**
 * Advanced table component
 */
export default {
  page: {
    title: "Checkout",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      // tableData: [],
      title: "Donasi yang dapat Anda wujudkan...",
      token: '',
      aaa:'@/assets/images/domba.png',
      listPaymentMethodes: [],
      monthly_price: [],
      product:{},
      selectedKonter: null,
      payload:{
        "product_id":0,
        "qty":0,
        "payment_methode_id":0
      }
    };
  },
  computed: {
  },
  mounted() {
    this.token = this.$route.query.token;
    axios.defaults.headers.common['Authorization'] = 'jwt ' + this.token;
    this.product = this.$store.getters['product/cart']
    this.getListPaymentMethodes()

  },
  methods: {
    getListPaymentMethodes(){
      let paramsTemp = queryString.stringify({
        ...{
          name: null,
          active: false,
          limit: 27,
          sort: '-id',
        }
        , ...this.options}
      )
      this.$store.dispatch('paymentmethode/GET_PAYMENT_METHODES',{params:paramsTemp}).then(()=>{
        this.listPaymentMethodes = this.$store.getters['paymentmethode/payment_methodes']
      })
    },
    updateCart(itemProduct){
      this.$store.dispatch('product/GET_PRODUCTS',itemProduct)
    },
    postCheckout(){
      this.payload.product_id = this.product.id
      this.payload.qty = 1
      this.payload.payment_methode_id = this.selectedKonter.id

      this.$store.dispatch(
              'transaction/POST_TRANSACTION', this.payload
      ).then(() => {
        let resp = this.$store.getters['transaction/transaction']
        this.successmsg()
        window.location = resp.redirect_url
        // this.$router.go(resp.redirect_url)
      }).catch(function () {
        this.warningmessage('Failed to procces')
      })


    },
    warningmessage(text_data) {
      Vue.swal({
        position: "top-end",
        icon: "warning",
        title: text_data,
        showConfirmButton: false,
        timer: 1500
      });
    },
    successmsg() {
      Vue.swal({
        position: "top-end",
        icon: "success",
        title: "Your transaction has been procced",
        showConfirmButton: false,
        timer: 1500
      });
    },
  },

};
</script>

<template>
  <Layout >
    <PageHeader :title="title" />

<!--    <div class="row mt-5">-->
      <div class="col-xl-4" >
<!--        <div class="vertical-nav">-->
<!--          <b-card-text>-->
<!--            <div class="card">-->
<!--              <div class="card-body">-->

{{selectedKonter}}
                  <h4 class="card-title mb-4">Metode Pembayaran</h4>
        <hr>
        <b-card  class="custom-accordion shadow-none mb-3" style="margin-left: -20px; margin-right: -20px">
          <b-card-header style="background:white; margin-left: -20px; margin-right: -20px" role="tab" >

            <a
                    href="javascript: void(0);"
                    class="accordion-list collapsed"
                    v-b-toggle.accordion-1
                    style="background:white; "
            >
              <div>Pembayaran Konter</div>
              <i class="mdi accor-plus-icon mdi-chevron-down"></i>
            </a>
          </b-card-header>
          <b-collapse
                  id="accordion-1"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
          >

            <b-card-body style="margin-left: -20px; margin-right: -20px">
              <div class="row ">
                <div class="col-xl-5 col-sm-5" v-for="(itemPaymentMethode,index) in listPaymentMethodes" :key="index"
                     v-if="itemPaymentMethode.payment_type=='konter'"
                >
                  <b-form-radio class="mb-3 mt-3" v-model="selectedKonter"  name="some-radios" :value="itemPaymentMethode">
                    <img :src="itemPaymentMethode.image_url" alt="" width="100px" height="37px"></b-form-radio>
                </div>
              </div>

            </b-card-body>
          </b-collapse>
          <hr>
        </b-card>


        <b-card no-body class="custom-accordion shadow-none mb-3" style="border:none">
          <b-card-header header-tag="header" style="background:white;" role="tab">
            <a
                    href="javascript: void(0);"
                    class="accordion-list"
                    v-b-toggle.accordion-2
                    style="background:white;"
            >
              <div>Direct Debit</div>
              <i class="mdi mdi-minus accor-plus-icon"  style="background=white;"></i>
            </a>
          </b-card-header>
          <b-collapse
                  id="accordion-2"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
          >
            <b-card-body>
              <div class="row" >
                <div class="col-xl-5 col-sm-5" v-for="(itemPaymentMethode,index) in listPaymentMethodes" :key="index"
              v-if="itemPaymentMethode.payment_type=='debet'">
                <b-form-radio class="mb-3 mt-3" v-model="selectedKonter"  name="some-radios" :value="itemPaymentMethode">
                  <img :src="itemPaymentMethode.image_url" alt="" width="100px" height="20px"></b-form-radio>
                </div>
              </div>
            </b-card-body>
          </b-collapse>
          <hr>
        </b-card>
        <b-card no-body class="custom-accordion shadow-none mb-3" style="border:none">
          <b-card-header header-tag="header" style="background:white;" role="tab">
            <a
                    href="javascript: void(0);"
                    class="accordion-list"
                    v-b-toggle.accordion-3
                    style="background:white;"
            >
              <div>E-Wallet</div>
              <i class="mdi mdi-minus accor-plus-icon" style="background=white;"></i>
            </a>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <div class="row" >
                <div class="col-xl-5 col-sm-5" v-for="(itemPaymentMethode,index) in listPaymentMethodes" :key="index"
                     v-if="itemPaymentMethode.payment_type=='wallet'">
                  <b-form-radio class="mb-3 mt-3" v-model="selectedKonter"  name="some-radios" :value="itemPaymentMethode">
                    <img :src="itemPaymentMethode.image_url" alt="" width="100px" height="20px"></b-form-radio>
                </div>
              </div>
            </b-card-body>
          </b-collapse>
          <hr>
        </b-card>
        <b-card no-body class="custom-accordion shadow-none mb-3" style="border:none">
          <div class="col-md-8" v-for="(itemPaymentMethode,index) in listPaymentMethodes" :key="index"
               v-if="itemPaymentMethode.payment_type=='credit_card'">
            <b-form-radio class="mt-3" v-model="selectedKonter"  name="some-radios" :value="itemPaymentMethode">
              <img :src="itemPaymentMethode.image_url" alt="" width="35px" height="25px" class="mr-2">{{ itemPaymentMethode.payment_name}}</b-form-radio>
          </div>
        </b-card>




<!--            </div>-->
<!--          </b-card-text>-->
<!--        </div>-->
      </div>
      <!-- end col -->
      <div class="col-xl-4">
        <div class="card">
          <div class="row">
            <div class="col-md-7">
              <h5 class="mt-4 ml-4" style="color:#373334">{{product.product_name}}</h5>
            </div>
            <div class="col-sm-4" style="text-align:right">
              <p class="mt-4" style="color:#c6c6c6">Rp {{product.price}}</p>
            </div>
          </div>
          <div class="card-body">

            <div style="text-align:right">
              <hr>
              <p style="color:#373334">Subtotal</p>
              <h5 style="color:#00AFEF;"><b>Rp {{product.price}}</b></h5>
            </div>
            {{selectedKonter}}
            {{product}}
            <div class="text-center">
              <b-button @click="postCheckout" class="center-text" variant="primary rounded-pill" style="background-color:#12c45f; border-style:none; width:280px;">Bayar</b-button>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
<!--    </div>-->
    <!-- end row -->
  </Layout>
</template>
