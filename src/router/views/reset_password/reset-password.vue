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
                    <router-link tag="a" to="/" class="back-home"><i class="fas fa-angle-left"></i><span>Kembali <span class="d-none d-sm-inline-block">ke Beranda</span></span></router-link>
                <a href="#0" class="logo">
                    <!-- <img src='@/assets/images/new-gurukreator-logo.png' alt="logo"> -->
                </a>
            </div>
            <div class="account-wrapper top-gap">
                <div class="account-body">
                    <div class="form-head">
                        <h4 class="title mb-20">Pulihkan Password</h4>
                        <p>Mohon masukkan email Anda di bawah ini. Kami akan mengirimkan panduan ke email Anda.</p>
                    </div>
                    <form class="account-form">
                        <div class="form-group">
                            <label for="new-pass">Email</label>
                            <input type="text" placeholder="Masukkan Email" id="new-pass">
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="mt-40 mb-2">Kirim petunjuk</button>
                        </div>
                    </form>
                    <span class="d-block mt-15">Ingat password Anda? <a href="sign-in.html" style="color:#0b507d">Masuk.</a></span>
                </div>
            </div>
        </div>
    </div>
    <!--============= Sign In Section Ends Here =============-->
</template>
