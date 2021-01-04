<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";
import Vue from 'vue';
import Model from 'v-model';
import Profile from "@/components/widgets/profile";
import Earning from "@/components/widgets/earning";
import Stat from "@/components/widgets/stat";
import Transaction from "@/components/widgets/transaction";
import Emailsent from "@/components/widgets/emailsent";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Checkout",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout,
    PageHeader,
    Profile,
    Stat,
    Transaction,
    Earning,
    Emailsent
  },
  data() {
    return {
      title: "Checkout",
      items: [
        {
          text: "Dashboards",
          href: "/"
        },
        {
          text: "Default",
          active: true
        }
      ],
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" />

    <div class="row mt-5">
      <div class="col-xl-8">
        <div class="vertical-nav">
          <b-card-text>
            <div class="card">
              <div class="card-body">
                <div role="tablist">
                      <b-card-body>
                        <div>
                          <b-form-group v-slot="{ ariaDescribedby }">
                            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">
                              <b>Semester</b><span> (Lebih hemat 20.000/1 Bulan)</span></b-form-radio>
                            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                              <b>Tahun</b><span> (Lebih hemat 40.000/2 Bulan)</span></b-form-radio>
                          </b-form-group>
                        </div>
                      </b-card-body>
                  <h4 class="card-title mb-4">Metode Pembayaran</h4>
                  <b-card no-body class="custom-accordion shadow-none mb-3" style="border:none">
                    <b-card-header style="background:white;" role="tab">
                      <a
                        href="javascript: void(0);"
                        class="accordion-list collapsed"
                        v-b-toggle.accordion-1
                        style="background:white;"
                      >
                        <div>Pembayaran Counter</div>
                        <i class="mdi mdi-minus accor-plus-icon"></i>
                      </a>
                    </b-card-header>
                    <b-collapse
                      id="accordion-1"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div>
                            <b-form-radio class="mb-3 mt-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                             <img src="@/assets/images/indomaret.png" alt="" width="100px" height="37px"></b-form-radio>
                            <b-form-radio class="mb-3 mt-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                              <img src="@/assets/images/alfamart.png" alt="" width="100px" height="30px"></b-form-radio>                        
                        </div>

                        <div>
                            <b-form-radio class="mb-3 mt-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                             <img src="@/assets/images/dandan.png" alt="" width="85px" height="37px"></b-form-radio>
                            <b-form-radio class="mb-3 mt-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                              <img src="@/assets/images/alfamidi.png" alt="" width="100px" height="20px"></b-form-radio>                        
                        </div>

                      </b-card-body>
                    </b-collapse>
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
                        <i class="mdi mdi-minus accor-plus-icon"></i>
                      </a>
                    </b-card-header>
                    <b-collapse
                      id="accordion-2"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div>
                          <b-form-radio class="mb-3 mt-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">
                            <img src="@/assets/images/bcaklikpay.png" alt="" width="100px" height="20px"></b-form-radio>
                          <b-form-radio class="mb-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                            <img src="@/assets/images/e-paybri.png" alt="" width="100px" height="25px"></b-form-radio>
                        </div>
                        <div>
                          <b-form-radio class="mb-3 mt-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                            <img src="@/assets/images/octoclicks.png" alt="" width="85px" height="27px"></b-form-radio>
                          <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                            <img src="@/assets/images/danamon.png" alt="" width="100px" height="35px"></b-form-radio>
                        </div>
                      </b-card-body>
                    </b-collapse>
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
                      <b-form-group v-slot="{ ariaDescribedby }">
                        <b-form-radio class="mb-3 mt-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">
                          <img src="@/assets/images/gopay.png" alt="" width="95px" height="20px"></b-form-radio>
                        <b-form-radio class="mb-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                          <img src="@/assets/images/qris.png" alt="" width="90px" height="25px"></b-form-radio>
                        <b-form-radio class="mb-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                          <img src="@/assets/images/shopeepay.png" alt="" width="80px" height="30px"></b-form-radio>
                      </b-form-group>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="custom-accordion shadow-none mb-3" style="border:none">
                      <div class="col-md-8">
                    <b-form-radio class="mt-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">
                     <img src="@/assets/images/credit_card.png" alt="" width="35px" height="25px" class="mr-2"></b-form-radio>
                      </div>
                  </b-card>

                  <b-card no-body class="custom-accordion shadow-none mb-3" style="border:none">
                    <div class="col-md-8">
                    <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">
                     <img src="@/assets/images/transfer.png" alt="" width="35px" height="25px" class="mr-2"></b-form-radio>
                    </div>
                  </b-card>

                  <b-card no-body class="custom-accordion shadow-none mb-3" style="border:none">
                    <div class="col-md-8">
                    <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">
                     <img src="@/assets/images/akulaku.png" alt="" width="80px" height="20px" ></b-form-radio>
                    </div>
                  </b-card>
                </div>
              </div>
            </div>
          </b-card-text>
        </div>
      </div>
      <!-- end col -->
      <div class="col-xl-4">
        <div class="card">
          <div class="row">
            <div class="col-md-7">              
              <h5 class="mt-4 ml-4" style="color:#373334">DOMBA</h5>
            </div>
            <div class="col-sm-4" style="text-align:right">
              <p class="mt-4" style="color:#c6c6c6">Rp 300.000</p>
            </div>
          </div>
          <div class="card-body">
            
            <div style="text-align:right">
              <hr>
              <p style="color:#373334">Subtotal</p> 
              <h5 style="color:#00AFEF;"><b>Rp 300.000</b></h5>
            </div>
            <div class="text-center">
              <b-button class="center-text" variant="primary rounded-pill" style="background-color:#12c45f; border-style:none; width:280px;">Bayar</b-button> 
            </div>
          </div>
        </div>
      </div>
      <!-- end col --> 
    </div>
    <!-- end row -->  
  </Layout>
</template>