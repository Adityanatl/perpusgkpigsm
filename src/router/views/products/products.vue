<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import backgroundUrl from '@/assets/images/background.png';

import Profile from "@/components/widgets/profile";
import Earning from "@/components/widgets/earning";
import Stat from "@/components/widgets/stat";
import Transaction from "@/components/widgets/transaction";
import Emailsent from "@/components/widgets/emailsent";

// import { tableData } from "./dataAdvancedtable";
import VueJwtDecode from 'vue-jwt-decode'
/**
 * Advanced table component
 */
export default {
  page: {
    title: "Products",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { PageHeader, VueJwtDecode },
  data() {
    return {
      tableData: [],
      title: "Pembelian ini ditujukan untuk :",
      aaa:'@/assets/images/domba.png',
      listProducts: [],
      monthly_price: [],
      selectedPrice: 0,
      backgroundUrl,
    };
  },
  computed: {
  },
  mounted() {
    if (this.$route.query.token != null) {
      let token = this.$route.query.token;
      window.axios.defaults.headers.common['Authorization'] = 'jwt ' + token
      let temp = VueJwtDecode.decode(token)
      temp['token'] = token
      localStorage.setItem('user', JSON.stringify(temp));
    }
    this.getListProduct();

  },
  methods: {
    getListProduct(){
      let paramsTemp = queryString.stringify({
        ...{
          name: null,
          limit: 17,
          sort: '-id',
        }
        , ...this.options}
      )
      this.$store.dispatch('product/GET_PRODUCTS',{params:paramsTemp}).then(()=>{
        this.listProducts = this.$store.getters['product/products']
      })
    },
    updateCart(itemProduct){
      if (itemProduct.product_type=='Donasi'){
        if(this.selectedPrice == 0) {
          alert("Mohon pilih Semester / Tahunan")
          return
        }
        itemProduct.price = this.selectedPrice
      }
      localStorage.setItem('cart', JSON.stringify(itemProduct))
      this.$store.dispatch('product/UPDATE_PRODUCT_CART',itemProduct)
      this.$router.push('/checkout')
    }

  },

};
</script>

<template>
  <Layout>
    <div class=" bg-no-repeat bg-white bg-cover relative" :style="{ backgroundImage: `url(${backgroundUrl})` }">

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


      <b-tabs pills align="center">
        <b-tab title="Personal" active color-tab><b-card-text>
          <div class="row mt-5">



            <div class="col-xl-4" v-for="(itemProduct,index) in listProducts" :key="index" v-if="itemProduct.product_type=='Personal'">
              <div class="card"
                   style= "
                          border-radius: 8px;
                          box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.10);
                          margin: 0rem 1rem 1rem 1rem;
                        "
              >
                <div class="card-body">
                  <tbody>
                    <tr>
                      <td>
                        <h5 style="margin-left:10px; color:#373334" class="ml-3 mt-3 mb-1">{{itemProduct.product_name}}</h5>
                      </td>
                      <td>
                        <div class="col" style="text-align: right" v-if="itemProduct.recommended" >
                        <p class="" style="font-size:15px;"><img src="@/assets/images/star.png" width="20px" height="20px">Recommended</p></div>
                      </td>
                    </tr>
                  </tbody>
                  <p style="color:#c6c6c6"><span class="blue-paideia ml-3 mt-1"><b style="color:#00AFEF">{{itemProduct.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</b></span> </p>

                  <div class="col">
                  <p style="color:#373334" class="ml-2">{{itemProduct.description}}.</p>
                  </div>

                  <div class="table-responsive mt-4">
                    <table class="table table-centered">
                      <tbody>
                        <tr>
                          <b-button @click="updateCart(itemProduct)" class="" style="background-color: #00AFEF; border-style:none;" variant="primary rounded-pill">Berlangganan Sekarang
                            <router-link tag="a" to="/checkout" class="header-button d-none d-sm-inline-block"></router-link>
                          </b-button>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>


            <!-- end col -->

          </div>
          <!-- end col -->
        </b-card-text></b-tab>

        <b-tab title="Kontribusi"><b-card-text>
          <div class="row mt-5">


            <div class="col-xl-4"  v-for="(itemProduct,index) in listProducts" :key="index" v-if="itemProduct.product_type=='Donasi'">
              <div class="card"
                   style= "
                          border-radius: 8px;
                          box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.10);
                          margin: 0rem 1rem 1rem 1rem;
                        "
              >
                <div class="card-body">
                  <tbody>
                    <tr>
                      <td>
                        <img class="mt-3 mr-4" :src="itemProduct.image_url" alt="" width="60px" height="60px" style="float:left">
                      </td>
                      <td>
                        <h5 class="mb-3" style="color:#373334">{{itemProduct.product_name}}</h5>
                        <p style="color:#707070">{{itemProduct.description}}</p>
                        <p v-if="itemProduct.recommended" class="blue-paideia"><img src="@/assets/images/star.png" width="20px" height="20px" style="margin-bottom:5px;">Recommended</p>
                        <p style="color:#c6c6c6"><span class="blue-paideia"><b style="color:#00AFEF">Rp {{itemProduct.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</b></span> / bulan</p>
                      </td>
                    </tr>
                  </tbody>


                  <div class="table-responsive mt-2">
                    <table class="table table-centered">
                      <tbody>
                        <tr>
                          <b-form-group style="margin-left:70px;" v-slot="{ ariaDescribedby }">
                            <b-form-radio class="mb-3" v-model="selectedPrice" :aria-describedby="ariaDescribedby" name="some-radios" :value="itemProduct.semester_price" style="font-size:16px">
                              Semester ({{itemProduct.semester_price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}} IDR)</b-form-radio>
                            <b-form-radio class="mb-3 mt-3" v-model="selectedPrice" :aria-describedby="ariaDescribedby" name="some-radios" :value="itemProduct.yearly_price" style="font-size:16px">
                              Tahunan ({{itemProduct.yearly_price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}} IDR)</b-form-radio>
                          </b-form-group>
                        </tr>
                        <tr>
                          <b-button @click="updateCart(itemProduct)" style="background-color: #00AFEF; border-style:none" variant="primary rounded-pill">Kontribusi Sekarang
                            <router-link tag="a" to="/checkout" class="header-button d-none d-sm-inline-block"></router-link>
                          </b-button>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </b-card-text></b-tab>
      </b-tabs>
    </div>
  </Layout>
</template>
