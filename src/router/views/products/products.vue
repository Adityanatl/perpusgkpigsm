<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

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
      token: '',
      aaa:'@/assets/images/domba.png',
      listProducts: [],
      monthly_price: [],
    };
  },
  computed: {
  },
  mounted() {
    this.token = this.$route.query.token;
    window.axios.defaults.headers.common['Authorization'] = 'jwt ' + this.token
    let temp = VueJwtDecode.decode(this.token)
    temp['token'] = this.token
    localStorage.setItem('user', JSON.stringify(temp));
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

    <div >
      <b-tabs pills align="center">
        <b-tab title="Personal" active color-tab><b-card-text>
          <div class="row mt-5">
            <div class="col-xl-4" v-for="(itemProduct,index) in listProducts" :key="index" v-if="itemProduct.product_type=='Personal'">
              <div class="card"
                   style= "
                          border-radius: 8px;
                          box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.10);
                          margin: 0rem 1rem 1rem 1rem;
                          height: 280px;
                        "
              >
                <div class="card-body">
                  <!-- <div class="row"> -->
                    <!-- <div class="col"> -->
                      <h5 style="margin-left:10px; color:#373334" class="ml-4">{{itemProduct.product_name}}
                      <p style="color:#c6c6c6"><span class="blue-paideia"><b style="color:#00AFEF">{{itemProduct.price}}</b></span> / bulan</p>
                      </h5>
                    <!-- </div> -->
                    <div class="col" v-if="itemProduct.recommended" >
                      <p class="ml-4"><img src="@/assets/images/star.png" width="20px" height="20px">Recommended</p>
                    </div>
                  <!-- </div> -->
<!--                  <p style="color:#c6c6c6" class="ml-4"><strike>Rp 240.000</strike> Diskon 2 bulan (Rp 16.700/bulan)</p>-->
                    <p style="color:#373334" class="ml-4">Akses semua fitur Guru Kreator (Kelasku, Kreasiku dan Relungku) untuk 1 jenjang pendidikan selama 1 tahun tanpa batasan eksport dokumen (pdf).</p> 
                </div>
                  <b-button @click="updateCart(itemProduct)" class="" style="background-color: #00AFEF; border-style:none;" variant="primary rounded-pill">Berlangganan Sekarang
                    <router-link tag="a" to="/checkout" class="header-button d-none d-sm-inline-block"></router-link>
                  </b-button>
              </div>
            </div>


            <!-- end col -->

          </div>
          <!-- end col -->
        </b-card-text></b-tab>

        <b-tab title="Kontribusi"><b-card-text>
          <div class="row mt-5">

            <div class="col-xl-4"  v-for="(itemProduct,index) in listProducts" :key="index" v-if="itemProduct.product_type=='Kontribusi'">
              <div class="card"
                   style= "
                          border-radius: 8px;
                          box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.10);
                          margin: 0rem 1rem 1rem 1rem;
                          height: 280px;
                        "
              >
                <div class="card-body">
                  <h5 style="margin-left:10px; color:#373334"><img class="mt-3 mr-4" :src="itemProduct.image_url" alt="" width="60px" height="60px" style="float:left">{{itemProduct.product_name}}</h5>
                  <p style="color:#707070">{{itemProduct.description}}</p>
                  <p v-if="itemProduct.recommended" class="blue-paideia" style="margin-top:0px; margin-left:90px; margin-bottom:100px;"><img src="@/assets/images/star.png" width="20px" height="20px" style="margin-bottom:5px;">Recommended</p>
                  <p style="color:#c6c6c6"><span class="blue-paideia"><b style="color:#00AFEF">{{itemProduct.price}}</b></span> / bulan</p>
                </div>

                <div class="row">
                  <b-form-group v-slot="{ ariaDescribedby }">
                    <b-form-radio class="mb-3 mt-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                      {{itemProduct.semester_price}}</b-form-radio>
                    <b-form-radio class="mb-3 mt-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                      {{itemProduct.yearly_price}}</b-form-radio>
                  </b-form-group>
                </div>
                
                <b-button @click="updateCart(itemProduct)" class="mb-3" style="background-color: #00AFEF; border-style:none" variant="primary rounded-pill">Berlangganan Sekarang
                  <router-link tag="a" to="/checkout" class="header-button d-none d-sm-inline-block"></router-link>
                </b-button>
              </div>
            </div>

          </div>

        </b-card-text></b-tab>
      </b-tabs>
    </div>
  </Layout>
</template>
