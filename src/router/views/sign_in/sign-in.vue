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
    <div class="account-section bg_akun" data-background="./assets/images/akun-bg.png">
        <div class="container">
            <div class="account-title text-center">
                <a href="index.html" class="back-home"><i class="fas fa-angle-left"></i><span>Kembali <span class="d-none d-sm-inline-block">ke Beranda</span></span></a>
                <a href="#0" class="logo">
                    <img src='@/assets/images/new-gurukreator-logo.png' alt="logo">
                </a>
            </div>
            <div class="account-wrapper">
                <div class="account-body">
                    <h4 class="title mb-20">Selamat Datang Guru Kreator!</h4>
                    <form class="account-form">
                        <div class="form-group">
                            <label for="sign-up">Email </label>
                            <input type="text" placeholder="Masukkan email disini" id="sign-up">
                        </div>
                        <div class="form-group">
                            <label for="pass">Password</label>
                            <input type="text" placeholder="Masukkan password disini" id="pass">
                            <span class="sign-in-recovery">Lupa password ? <a href="reset-password.html">Pulihkan password</a></span>
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="mt-2 mb-2">Masuk</button>
                        </div>
                    </form>
                </div>
                <div class="or">
                    <span>Atau</span>
                </div>
                <div class="account-header pb-0">
                    <span class="d-block mb-30 mt-2">Daftar dengan email yang kamu miliki</span>
                    <a href="#0" class="sign-in-with"><img src='@/assets/images/google.png' alt="icon"><span>Sign Up with Google</span></a>
                    <span class="d-block mt-15">Tidak memiliki akun? <a href="sign-up.html">DAFTAR disini</a></span>
                </div>
            </div>
        </div>
    </div>
    <!--============= Sign In Section Ends Here =============-->

</template>
