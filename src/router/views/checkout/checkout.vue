<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import Vue from "vue";
import VueJwtDecode from "vue-jwt-decode";

// import { tableData } from "./dataAdvancedtable";

/**
 * Advanced table component
 */
export default {
  page: {
    title: "Checkout",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { PageHeader },
  data() {
    return {
      // tableData: [],
      title: "Checkout",
      token: '',
      aaa:'@/assets/images/domba.png',
      listPaymentMethodes: [],
      monthly_price: [],
      product:{ "id": 0, "product_type": "", "product_name": "", "price": 0, "account_id": 0, "reference_id": 0, "month": 0, "image_url": "", "description": "", "recommended": false },
      selectedKonter: null,
      transactionId: null,
      payload:{
        "product_id":0,
        "qty":0,
        "payment_methode_id":0,
        "transaction_id":null,
      }
    };
  },
  computed: {
  },
  mounted() {
    //this.product = this.$store.getters['product/cart']
    if (this.$route.query.token != null) {
      let token = this.$route.query.token;
      window.axios.defaults.headers.common['Authorization'] = 'jwt ' + token
      let temp = VueJwtDecode.decode(token)
      temp['token'] = token
      localStorage.setItem('user', JSON.stringify(temp));
    }
    if (this.$route.query.transaction_id != null) {
      this.transactionId = this.$route.query.transaction_id;
      this.$store.dispatch('transaction/GET_TRANSACTION',this.transactionId).then(()=>{
        let transaction = this.$store.getters['transaction/transaction']
        this.product.id = transaction.product_id
        this.product.price = transaction.gross_amount
      })
    } else {
      this.product = JSON.parse(localStorage.getItem('cart'))
    }
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
      if (this.selectedKonter == null){
        alert("Silahkan pilih metode pembayaran")
        return
      }
      this.payload.product_id = this.product.id
      this.payload.qty = 1
      this.payload.payment_methode_id = this.selectedKonter.id
      this.payload.transaction_id = this.transactionId

      this.$store.dispatch(
              'transaction/POST_TRANSACTION', this.payload
      ).then(() => {
        let resp = this.$store.getters['transaction/transaction']
        this.successmsg()
        localStorage.removeItem('cart');
        window.location = resp.redirect_url
      }).catch(function () {
        Vue.swal({
          position: "top-end",
          icon: "warning",
          title: 'Failed to procces',
          showConfirmButton: false,
          timer: 1500
        });
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

    <b-navbar toggleable type="dark" variant="transparent">
      <b-navbar-brand href="#"><img src="@/assets/images/logo-light.svg" alt height="22" /></b-navbar-brand>

      <!-- <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle> -->

      <!-- <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Link 1</b-nav-item>
          <b-nav-item href="#">Link 2</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
      </b-collapse> -->
    </b-navbar><br>

    <PageHeader :title="title" />

    <div class="container valign">
      <div class="row no-gutters">
        <!-- <div class="col-md-12"> -->
          <div class="col-xl-8" >
            <div class="vertical-nav">
              <b-card-text>
                <div class="card mr-2">
                    <div class="card-body">


                      <h4 class="card-title mb-4">Metode Pembayaran</h4><hr>
                      <b-card  class="custom-accordion shadow-none mb-3" style="border:none">
                        <b-card-header style="background:white; margin-left: -20px; margin-right: -20px" role="tab" >

                            <a
                                    href="javascript: void(0);"
                                    class="accordion-list collapsed"
                                    v-b-toggle.accordion-1
                                    style="background:white; "
                            >
                              <div>Pembayaran Konter</div>
                              <i class="mdi chevron-up chevron-down" style="background=white;"></i>
                            </a>
                          </b-card-header>

                        <b-collapse
                                id="accordion-1"
                                visible
                                accordion="my-accordion"
                                role="tabpanel"
                        >

                          <b-card-body style="margin-left: -20px; margin-right: -20px">
                            <div class="table-responsive">
                              <table class="table table-centered">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div class="col-xl-5 col-sm-5" v-for="(itemPaymentMethode,index) in listPaymentMethodes" :key="index"
                                          v-if="itemPaymentMethode.payment_type=='konter'">
                                        <b-form-radio class="mb-3 mt-3" v-model="selectedKonter"  name="some-radios" :value="itemPaymentMethode">
                                          <img :src="itemPaymentMethode.image_url" alt="" width="100px" height="37px"></b-form-radio>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div class="col-xl-5 col-sm-5" v-for="(itemPaymentMethode,index) in listPaymentMethodes" :key="index"
                                          v-if="itemPaymentMethode.payment_type=='konter'">
                                        <b-form-radio class="mb-3 mt-3" v-model="selectedKonter"  name="some-radios" :value="itemPaymentMethode">
                                          <img :src="itemPaymentMethode.image_url" alt="" width="100px" height="37px"></b-form-radio>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </b-card-body>
                        </b-collapse><hr>
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
                            <i class="mdi chevron-up mdi-chevron-down"  style="background=white;"></i>
                          </a>
                        </b-card-header>
                        <b-collapse
                                id="accordion-2"
                                visible
                                accordion="my-accordion"
                                role="tabpanel"
                        >
                          <b-card-body>
                            <div class="table-responsive">
                              <table class="table table-centered">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div class="col-xl-5 col-sm-5" v-for="(itemPaymentMethode,index) in listPaymentMethodes" :key="index"
                                        v-if="itemPaymentMethode.payment_type=='debet'">
                                      <b-form-radio class="mb-3 mt-3" v-model="selectedKonter"  name="some-radios" :value="itemPaymentMethode">
                                        <img :src="itemPaymentMethode.image_url" alt="" width="100px" height="20px"></b-form-radio>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
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
                            <i class="mdi chevron-up mdi-chevron-down" style="background=white;"></i>
                          </a>
                        </b-card-header>
                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                          <b-card-body>
                            <div class="table-responsive">
                              <table class="table table-centered">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div class="col-xl-5 col-sm-5" v-for="(itemPaymentMethode,index) in listPaymentMethodes" :key="index"
                                          v-if="itemPaymentMethode.payment_type=='wallet'">
                                        <b-form-radio class="mb-3 mt-3" v-model="selectedKonter"  name="some-radios" :value="itemPaymentMethode">
                                          <img :src="itemPaymentMethode.image_url" alt="" width="100px" height="20px"></b-form-radio>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
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
                    </div>
                  </div>
              </b-card-text>
            </div>
          </div>
          <!-- end col -->
          <div class="col-xl-4">
            <div class="card">
              <div class="row">
                <div class="col-md-12">
                  <div class="table-responsive">
                    <table class="table table-centered">
                      <td>
                        <tr><h5 class="mt-4 ml-1" style="color:#373334">{{product.product_name}}</h5></tr>
                      </td>
                      <td>
                        <tr style="float:right;"><p class="mt-4 mr-2" style="color:#c6c6c6">Rp {{product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</p></tr>
                      </td>
                    </table>
                  </div>
                </div>
              </div>
              
              <div class="card-body">

                <div style="text-align:right">
                  <hr>
                  <p style="color:#373334">Subtotal</p>
                  <h5 style="color:#00AFEF;"><b>Rp {{product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</b></h5>
                </div>
                <div class="text-center">
                  <b-button @click="postCheckout" class="center-text" variant="primary rounded-pill" style="background-color:#12c45f; border-style:none; width:280px;">Bayar</b-button>
                </div>
              </div>
            </div>
          </div>
          <!-- end col -->
      </div>
    </div>
    <!-- </div> -->
    <!-- end row -->
  </Layout>
</template>
