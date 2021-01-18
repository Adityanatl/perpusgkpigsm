<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

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
  components: { Layout, PageHeader, VueJwtDecode },
  data() {
    return {
      tableData: [],
      title: "Pembelian ini ditujukan untuk :",
      aaa:'@/assets/images/domba.png',
      listProducts: [],
      monthly_price: [],
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
      localStorage.setItem('cart', JSON.stringify(itemProduct))
      this.$store.dispatch('product/UPDATE_PRODUCT_CART',itemProduct)
      this.$router.push('/checkout')
    }

  },

};
</script>

<template>
  <Layout>
    <PageHeader :title="title" />

    <div>
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
                        <div class="col" v-if="itemProduct.recommended" >
                        <p class="" style="font-size:10px; float: right"><img src="@/assets/images/star.png" width="20px" height="20px">Recommended</p></div>
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



            <div class="col-xl-4"  v-for="(itemProduct,index) in listProducts" :key="index" v-if="itemProduct.product_type=='donasi'">
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
                        <img class="mt-1 mr-4" :src="itemProduct.image_url" alt="" width="60px" height="60px" style="float:left">
                      </td>
                      <td>
                        <h5 style="margin-left:10px; color:#373334">{{itemProduct.product_name}}</h5>
                        <p v-if="itemProduct.recommended" class="blue-paideia mt-5" style="margin-top:0px; margin-left:90px; margin-bottom:100px;"><img src="@/assets/images/star.png" width="20px" height="20px" style="margin-bottom:5px;">Recommended</p>
                        <p style="color:#707070">{{itemProduct.description}}</p>
                        <p class="mt-2" style="color:#c6c6c6"><span class="blue-paideia"><b style="color:#00AFEF">{{itemProduct.price}}</b></span> / bulan</p>
                      </td>
                    </tr>
                  </tbody>


                  <div class="table-responsive mt-2">
                    <table class="table table-centered">
                      <tbody>
                        <tr>
                          <b-form-group style="margin-left:70px;" v-slot="{ ariaDescribedby }">
                            <b-form-radio class="mb-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                              {{itemProduct.semester_price}}</b-form-radio>
                            <b-form-radio class="mb-3 mt-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                              {{itemProduct.yearly_price}}</b-form-radio>
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
