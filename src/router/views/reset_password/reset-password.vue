<script>
import appConfig from "@/app.config";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Dashboard",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      title: "Dashboard",
    };
  }
};
</script>

<template>

    <!--============= Sign In Section Starts Here =============-->
    <div class="account-section bg_akun">
        <div class="container">
            <div class="account-title text-center mb-120">
                <a href="index.html" class="back-home"><i class="fas fa-angle-left"></i><span>Kembali <span class="d-none d-sm-inline-block">ke Beranda</span></span></a>
                <a href="#0" class="logo">
                    <img src='@/assets/images/new-gurukreator-logo.png' alt="logo">
                </a>
            </div>
            <div class="account-wrapper top-gap">
                <div class="account-body">
                    <div class="form-head">
                        <h4 class="title mb-20">Ubah Password</h4>
                        <p>Kamu dapat mengubah password untuk alasan keamanan atau mengubahnya jika lupa</p>
                    </div>
                    <form class="account-form">
                        <div class="form-group">
                            <label for="new-pass">Password Baru</label>
                            <input type="password" placeholder="Password Baru" id="new-pass">
                        </div>
                        <div class="form-group">
                            <label for="confirm-pass">Konfirmasi Password</label>
                            <input type="password" placeholder="Konfirmasi Password" id="confirm-pass">
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="mt-40 mb-2">Ubah Password</button>
                        </div>
                    </form>
                    <span class="d-block mt-15">Remember your password? <a href="sign-in.html"> Log In</a></span>
                </div>
            </div>
        </div>
    </div>
    <!--============= Sign In Section Ends Here =============-->
</template>
