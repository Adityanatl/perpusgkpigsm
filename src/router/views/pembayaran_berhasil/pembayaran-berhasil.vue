<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

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
    title: "Dashboard",
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
      title: "Pembayaran",
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
      statData: [
        {
          icon: "bx bx-copy-alt",
          title: "Orders",
          value: "1,235"
        },
        {
          icon: "bx bx-archive-in",
          title: "Revenue",
          value: "$35, 723"
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "Average Price",
          value: "$16.2"
        }
      ],
      transactions: [
        {
          id: "#SK2540",
          name: "Neal Matthews",
          date: "07 Oct, 2019",
          total: "$400",
          status: "Paid",
          payment: ["fa-cc-mastercard", "Mastercard"],
          index: 1
        },
        {
          id: "#SK2541",
          name: "Jamal Burnett",
          date: "07 Oct, 2019",
          total: "$380",
          status: "Chargeback",
          payment: ["fa-cc-visa", "Visa"],
          index: 2
        },
        {
          id: "#SK2542",
          name: "Juan Mitchell",
          date: "06 Oct, 2019",
          total: "$384",
          status: "Paid",
          payment: ["fab fa-cc-paypal", "Paypal"],
          index: 3
        },
        {
          id: "#SK2543",
          name: "Barry Dick",
          date: "05 Oct, 2019",
          total: "$412",
          status: "Paid",
          payment: ["fa-cc-mastercard", "Mastercard"],
          index: 4
        },
        {
          id: "#SK2544",
          name: "Ronald Taylor",
          date: "04 Oct, 2019",
          total: "$404",
          status: "Refund",
          payment: ["fa-cc-visa", "Visa"],
          index: 5
        },
        {
          id: "#SK2545",
          name: "Jacob Hunter",
          date: "04 Oct, 2019",
          total: "$392",
          status: "Paid",
          payment: ["fab fa-cc-paypal", "Paypal"],
          index: 6
        }
      ]
    };
  }
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
                          <h4 class="mb-5">Pembayaran Berhasil!</h4>
                          <img src="@/assets/images/checklist.png" alt="" width="100px" height="100px">
                          <p style="font-size:1em;" class="mt-5">Pesanan #GK0056</p><br><br>
                          <hr>
                        </div>
                        <div class="row">
                          <div class="col-sm-4 mt-4">
                            <p style="font-size:1em;">Receipt</p>
                          </div>
                          <div class="col-sm-8 mt-4">
                            <p style="color:#373334;"><b>Test</b></p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4 mt-4">
                            <p style="font-size:1em;">Akun</p>
                          </div>
                          <div class="col-sm-8 mt-4">
                            <p style="color:#373334;"><b>Test</b></p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4 mt-4">
                            <p style="font-size:1em;">Pembayaran</p>
                          </div>
                          <div class="col-sm-8 mt-4">
                            <p style="color:#373334;"><b>Test</b></p>
                          </div>
                        </div>
                        <hr>
                        <div class="row">
                          <div class="col-sm-12 mt-3">
                            <p><b>Monthly</b><span class="total">IDR 20,000,00</span></p><br>
                            <p style="font-size:1em;">Subtotal<span class="total"><b>IDR 20,000,00</b></span></p>
                          </div>
                        </div><br><br><br>

                        <div class="text-center">
                          <!-- <p style="font-size:1em;"><snap class="blue-paideia"><a>Klik Disini</a></snap> untuk kembali ke aplikasi</p> -->
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