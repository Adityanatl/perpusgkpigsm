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
  components: { Layout, PageHeader },
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
        title: "Your transaction has been procced",
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
                      <div class="text-center">
                        <h4 class="mb-5">{{this.payment_status}}</h4>
                        <img v-if="payment_status == 'Pembayaran Berhasil!'" src="@/assets/images/checklist.png" alt="" width="100px" height="100px">
                        <p style="font-size:1em;" class="mt-5">Pesanan #{{this.transaction.invoice_number}}</p><br><br>
                        <hr>
                      </div>
                      <div>
                        <p style="font-size:1em;">Receipt</p>
                        <p style="font-size:1em;">
                            Akun : {{transaction.account_email}}
                        </p>
                        <p style="font-size:1em;">
                            Pembayaran : {{transaction.payment_methode_name}}
                        </p>
                        <hr>
                      </div>
                      <div>
                        <p style="font-size:1.1em"><b>
                            {{transaction.product_name}} : {{transaction.gross_amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}
                        </b></p><br>
                      </div>
                      <div>
                        <p style="font-size:1em;">
                            Subtotal : {{transaction.gross_amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}
                        </p>
                      </div><br><br>
                      <div class="text-center">
                        <p style="font-size:1em;">
<!--                          <snap class="blue-paideia"><a>Klik Disini</a></snap> -->
                          untuk kembali ke aplikasi</p>
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
