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
    // title: "Profile",
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
      // title: "Account Info",
      user: JSON.parse(localStorage.getItem('user')),
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <h3 class="mb-3">Account Info</h3>

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-2 mt-5">
                <div class="avatar-md profile-user-wid ml-2 mb-4 text-center">
                    <!-- <img src="@/assets/images/users/avatar-1.jpg" alt class="img-thumbnail rounded-circle" /> -->
                </div>
              </div>
              <div class="col-sm-10">
                  <h4 class="mt-3">Detail Account</h4>
                  <hr>
                  <div class="col-5">
                    <td>
                      <tr><b>Nama</b></tr>
                      <tr>{{user.name}}</tr>
                    </td><br>
                    <td>
                      <tr><b>Email</b></tr>
                      <tr>{{user.email}}</tr>                
                    </td><br>
                    <td>
                      <tr><b>No. Telephone</b></tr>
                      <tr>{{user.hp}}</tr>                      
                    </td>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

  </Layout>
</template>
