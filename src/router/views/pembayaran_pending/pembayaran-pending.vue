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
    title: "Pembayaran",
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
      title: "Dashboard",
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
                                  border-radius: 4px;
                                  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.10);
                                  margin: 6rem auto 8.1rem auto;
                                " 
                    >
                      <b-card-body
                          style= "
                                  padding: 55px 44px;
                                "
                      >
                        <div>
                          <p style="font-size:1em">Pesanan #GK0056</p>
                          <p style="font-size:1.7em">Rp<span class="blue-paideia"> 300.000</span></p><br>
                          <hr>
                        </div>
                        <div>
                          <p style="font-size:1em;">Virtual Account BCA</p>
                          <p style="color:#231f20; font-size:1.3em">Paideia</p>
                          <p style="font-size:1em">No. Virtual Account</p>
                          <p style="font-size:1.5em"><span>837 22 88 5555</span></p><br>
                          <hr>
                        </div>
                        <div>
                          <p style="font-size:1em;">Petunjuk Pembayaran</p>
                          <p style="color:#373334">Mohon melakukan pembayaran sebelum <b>3 November 2020, 14:15</b> (1x24 jam) melalui Virtual Account. Bila tidak, pesanan ini akan dibatalkan secara otomatis.</p>
                        </div><br><br>
                          <div class="text-center">
                            <p style="font-size:1em;"><snap class="blue-paideia"><a>Klik Disini</a></snap> untuk kembali ke aplikasi</p>
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