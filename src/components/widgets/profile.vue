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
        <div class="col-7">
          <div class="text-primary p-3">
            <h5 class="text-primary mt-1 mb-1">Welcome Back !</h5>
            <!-- <p>Skote Dashboard</p> -->
          </div>
        </div>
        <div class="col-5 align-self-end">
          <img :src="user.picture" alt class="img-fluid" />
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-sm-4">
          <div class="avatar-md profile-user-wid mb-4">
            <img src="@/assets/images/users/avatar-1.jpg" alt class="img-thumbnail rounded-circle" />
          </div>
          <h5 class="font-size-15 text-truncate">{{user.name}}</h5>
          <p class="text-muted mb-0 text-truncate">UI/UX Designer</p>
        </div>

        <div class="col-sm-8">
          <div class="pt-4">
            <div class="row">
              <div class="col-6">
                <h5 class="font-size-15">125</h5>
                <p class="text-muted mb-0">Projects</p>
              </div>
              <div class="col-6">
                <h5 class="font-size-15">$1245</h5>
                <p class="text-muted mb-0">Revenue</p>
              </div>
            </div><br><br><br>
            <div class="mt-4" style="float:right">
              <router-link tag="a" to="/user" class="btn btn-primary btn-sm">
                View Profile
                <i class="mdi mdi-arrow-right ml-1"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end card-body -->
  </div>
  <!-- end card -->
</template>
