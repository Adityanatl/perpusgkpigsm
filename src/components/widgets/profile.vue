<script>
/**
 * Profile component
 */

export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
        activeMemberName: '',
        teaching_history:{
            "instinstitution_name": "",
            "mapel_id": "1",
            "mapel_name": "",
            "jenjang_id": "",
            "jenjang_name": "",
            "tingkat_kelas_id": "",
            "tingkat_kelas_name": "",
            "account_id": 0
        },
        membership:{
            "expired_date": "",
            "product_name": "",
            "transaction_history": [],
            "transaction_date": ""
        },
        more:{
            "member": [],
            "badges": [],
            "level": 0,
            "xp": 0,
            "ap": 0,
            "gp": 0,
            "message": ""
        }
    };
  },
    mounted() {
      this.getAccountMore()
        this.getTeachingHistoryOnlyOne()
        this.getAccountMembership()
    },
    methods:{
        getAccountMore(){
            this.$store.dispatch('account/GET_MORE','').then(()=>{
                this.more = this.$store.getters['account/more']
                this.getActiveMemberName()
            })
        },
        getAccountMembership(){
            this.$store.dispatch('account/GET_MEMBERSHIP','').then(()=>{
                this.membership = this.$store.getters['account/membership']
            })
        },
        getActiveMemberName(){
            for (let i = 0; i < this.more.member.length; i++) {
                if (this.more.member[i].active === true) this.activeMemberName = this.more.member[i].name
            }
        },
        getTeachingHistoryOnlyOne(){
            console.log(1)
            this.$store.dispatch('teachinghistory/GET_TEACHING_HISTORY_ONLYONE','').then(()=>{
                console.log(2)
                this.teaching_history = this.$store.getters['teachinghistory/teaching_history']
            })
        },
    }
};
</script>
<template>
  <div class="card overflow-hidden">
    <div class="bg-soft-primary">
      <div class="row">
        <div class="col-8">
          <div class="text-primary p-4">
            <h5 class="text-primary">Selamat Datang!</h5><br>
            <p>{{user.name}}</p>
          </div>
        </div>
        <div class="col-5 align-self-end">
<!--          <img :src="" alt class="img-fluid" />-->
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-5 colavatar-md profile-user-wid mb-4">
              <img v-if="user.picture !== ''" :src="user.picture" alt class="img-thumbnail rounded-circle" />
              <img v-else src="@/assets/images/users/avatar-1.jpg" alt class="img-thumbnail rounded-circle" />

            </div>
            <!-- <h5 class="font-size-15 text-truncate">{{user.name}}</h5> -->
            <!-- <p class="text-muted mb-0 text-truncate">UI/UX Designer</p> -->
            <div class="pt-3 pl-4">
              <ul>
                <li>{{more.xp}} XP</li>
                <li>{{ activeMemberName }}</li>
                <li>{{teaching_history.jenjang_name}}</li>
                <li>{{teaching_history.instinstitution_name}}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-sm-12">
          <div class="pt-5">
            <div class="row">
              <!-- <div class="col-6">
                <h5 class="font-size-15">125</h5>
                <p class="text-muted mb-0">Projects</p>
              </div>
              <div class="col-6">
                <h5 class="font-size-15">$1245</h5>
                <p class="text-muted mb-0">Revenue</p>
              </div> -->
              <p><b>Status Berlangganan</b></p>
              <ul>
                <li>Tanggal Pembayaran: {{membership.transaction_date}}</li>
                <li>Tanggal Berakhir: {{membership.expired_date}}</li>
                <li>Produk: {{membership.product_name}}</li>
              </ul>
            </div>
            <div class="row pt-5 mb-3">
<!--              <div class="mt-4 ml-1 mr-1">-->
<!--                <a href class="btn btn-primary btn-sm">-->
<!--                  Berhenti-->
<!--                  <i class="mdi mdi-arrow-right ml-1"></i>-->
<!--                </a>-->
<!--              </div>-->
              <div class="mt-4">
                <router-link tag="a" to="/products" class="btn btn-primary btn-sm">
                  Perpanjangan/ Tingkatkan
                  <i class="mdi mdi-arrow-right ml-1"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end card-body -->
  </div>
  <!-- end card -->
</template>
