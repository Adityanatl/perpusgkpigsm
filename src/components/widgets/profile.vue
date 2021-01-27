<script>
/**
 * Profile component
 */

export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user'))
    };
  },
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
          <img :src="user.picture" alt class="img-fluid" />
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-5 colavatar-md profile-user-wid mb-4">
              <img src="@/assets/images/users/Avatar-1.jpg" alt class="img-thumbnail rounded-circle" />
            </div>
            <!-- <h5 class="font-size-15 text-truncate">{{user.name}}</h5> -->
            <!-- <p class="text-muted mb-0 text-truncate">UI/UX Designer</p> -->
            <div class="pt-3 pl-4">
              <ul>
                <li>0 XP</li>
                <li>Guru Inspirator</li>
                <li>Kelas</li>
                <li>SMA Setia</li>
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
                <li>Tanggal Pembayaran: 14-01-2021</li>
                <li>Tanggal Berakhir: 16-02-2021</li>
                <li>Produk: Monthly</li>
              </ul>
            </div>
            <div class="row pt-5 mb-3">
              <div class="mt-4 ml-1 mr-1">
                <a href class="btn btn-primary btn-sm">
                  Berhenti
                  <i class="mdi mdi-arrow-right ml-1"></i>
                </a>
              </div>
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
