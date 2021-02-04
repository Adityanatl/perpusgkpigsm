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
    title: "Transaction",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {  },
  data() {
    return {
      // tableData: [],
      title: "Transaction",
      transaction:{"id": 0, "account_id": 0, "invoice_number": "", "transaction_time": "", "order_id": 0,
        "product_id": 0, "qty": 0, "price": 0, "discount": 0.0, "gross_amount": 0.0, "payment_methode_id": 0,
        "va_number": "", "transaction_status": "", "price_type": "", "redirect_url": ""},
      payment_status:""
    };
  },
  computed: {
  },
  mounted() {
    this.loadData(this.$route.params.id)
  },
  methods: {
    loadData(idForm){
      this.stillLoading = true
      this.$store.dispatch(
              'transaction/GET_TRANSACTION', idForm
      ).then((resp) => {
        if (resp.data.code==200){
          this.transaction = this.$store.getters['transaction/transaction']
          if (this.transaction.transaction_status=='paid'){
            this.payment_status = 'Pembayaran Berhasil!'
          }
          else if (this.transaction.transaction_status=='') {
                this.payment_status = 'Menunggu!'
            }  else {
            this.payment_status = this.transaction.transaction_status
          }
        } else {
          Vue.swal({
            position: "top-end",
            icon: "warning",
            title: resp.data.message,
            showConfirmButton: false,
            timer: 1500
          });
        }
      }).catch(function () {
        Vue.swal({
          position: "top-end",
          icon: "warning",
          title: "Someting went wrong",
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
        title: "Your transaction has been proceed",
        showConfirmButton: false,
        timer: 1500
      });
    },
  },

};
</script>

<template>
  <Layout>
    <PageHeader :title="title" />

    <div class="container valign">
      <div class="row no-gutters">
        <div class="col-md-1 mt-2 pr-3"></div>

        <div class="col-md-10 p-5 pt-0">
          <div class="row">
            <div class="col-xl-12">
              <div class="vertical-nav">
                <b-card-text>
                  <div class="card"
                       style= "
                                    border-radius: 8px;
                                    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.10);
                                    margin: 6rem auto 8.1rem auto;
                                  "
                  >
                    <b-card-body
                        style= "
                                padding: 55px 44px;
                               "
                    >
                      <div v-if="payment_status == 'Pembayaran Berhasil!'" >
                        <div class="text-center">
                          <h4 class="mb-5">{{this.payment_status}}</h4>
                          <img src="@/assets/images/checklist.png" alt="" width="100px" height="100px">
                          <!-- <img v-else-if="payment_status == 'Menunggu'" src="" alt="" width="100px" height="100px"> -->
                          <p style="font-size:1em;" class="mt-5">Pesanan #{{this.transaction.invoice_number}}</p><br><br>
                          <hr>
                        </div>
                        <div class="row">
                          <div class="col-sm-4 mt-4">
                            <p style="font-size:1em;">Receipt</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4 mt-4">
                            <p style="font-size:1em;">Akun</p>
                          </div>
                          <div class="col-sm-8 mt-4">
                            <p style="color:#373334;"><b>{{transaction.account_email}}</b></p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4 mt-4">
                            <p style="font-size:1em;">Pembayaran</p>
                          </div>
                          <div class="col-sm-8 mt-4">
                            <p style="color:#373334;"><b>{{transaction.payment_methode_name}}</b></p>
                          </div>
                        </div>
                        <hr>
                        <div class="row">
                          <div class="col-sm-12 mt-3">
                            <p><b>{{transaction.product_name}}</b><span class="total"><span>IDR</span>{{transaction.gross_amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</span></p><br>
                            <p style="font-size:1em;">Subtotal<span class="total"><b><span>IDR</span>{{transaction.gross_amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</b></span></p>
                          </div>
                        </div><br><br><br>
                      </div>

                      <div v-else>
                        <div>
                          <p style="font-size:1em; color:#a0a0a0;">Pesanan #{{this.transaction.invoice_number}}</p>
                          <p style="font-size:1.7em; color:#a0a0a0;"><b><span>IDR</span>{{transaction.gross_amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</b></p><br>
                          <hr>
                        </div><br>
                        <!-- <div>
                          <p style="font-size:1em; color:#a0a0a0;">{{ transaction.payment_methode_name}}</p>
                          <p style="color:#231f20; font-size:1.3em"><b>Paideia</b></p>
                          <p style="font-size:1em; color:#a0a0a0;">No. Virtual Account</p>
                          <p style="font-size:1.5em; color:#00afef;"><b><span class="total">{{transaction.va_number}}</span></b></p><br>
                          <hr>
                        </div> -->
                        <div class="text-centercol-sm-8 mt-2 mb-2">
                          <p class="text-center" style="font-size:1em;">Mohon cek email anda. Kami telah mengirimkan petunjuk pembayaran.</p>
                        </div><br><hr><br>
                        <div>
                          <p style="font-size:1em; color:#a0a0a0">Petunjuk Pembayaran</p><br>
                          <p style="color:#a0a0a0">Mohon melakukan pembayaran sebelum <span style="color:#0a0a0a"><b>{{transaction.transaction_time}}</b></span> (1x24 jam) melalui Virtual Account. Bila tidak, pesanan ini akan dibatalkan secara otomatis.</p>
                        </div><br><br>
                      </div>


                      <div class="text-center">
                        <!-- <p style="font-size:1em;"> untuk kembali ke aplikasi</p> -->
                      </div>
                    </b-card-body>
                  </div>
                </b-card-text>
              </div>
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->
        </div>
        <div class="col-md-1 mt-2 pr-3 pt-4"></div>
      </div>
    </div>
  </Layout>
</template>
