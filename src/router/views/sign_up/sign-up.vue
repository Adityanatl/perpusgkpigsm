<script>
import appConfig from "@/app.config";
import SocialSignup from '@/components/SocialSignup'
import Layout from "../../layouts/auth";
import Vue from "vue";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Dashboard",
    meta: [{ name: "description", content: appConfig.description }]
  },
    components: { SocialSignup},
  data() {
    return {
      title: "Dashboard",
        payload: {email: ''}
    };
  },
    methods:{
        postSignup(){

            this.$store.dispatch(
                'account/SIGNUP', this.payload
            ).then(() => {
                this.successmsg()
            }).catch(function () {
                Vue.swal({
                    position: "top-end",
                    icon: "warning",
                    title: 'Failed to process',
                    showConfirmButton: false,
                    timer: 1500
                });
            })


        },
    }
};
</script>

<template>

    <!--============= Sign In Section Starts Here =============-->
    <div class="account-section bg_akun" data-background="./assets/images/akun-bg.png">
        <div class="container">
            <div class="account-title text-center">
                    <router-link tag="a" to="/" class="back-home"><i class="fas fa-angle-left"></i><span>Kembali <span class="d-none d-sm-inline-block">ke Beranda</span></span></router-link>
                <router-link class="nav-link" tag="a" to="/">
                    <img src='@/assets/images/new-gurukreator-logo.png' width="185vw" height="49vh" alt="logo">
                </router-link>
            </div>
            <div class="account-wrapper">

                <div class="account-header">
                    <h4 class="title">Yuk, jadi Guru Kreator!</h4>
                    <SocialSignup />
<!--                    <a href="#0" class="sign-in-with"><img src='@/assets/images/google.png' alt="icon"><span>Daftar dengan Google</span></a>-->
                </div>
                <div class="or">
                    <span style="color:#0b507d">Atau</span>
                </div>
                <div class="account-body">
                    <span class="d-block mb-20">Daftar dengan email yang kamu miliki</span>
                    <form class="account-form">
                        <div class="form-group">
                            <label for="sign-up">Email </label>
                            <input type="text"  v-model="payload.email" placeholder="Masukkan email disini " id="sign-up">
                        </div>
                        <div class="group active text-center">
                            <button @click="postSignup">Guru Kreator!</button>
                            <span class="d-block mt-15">Sudah punya akun? <a href="sign-in.html" style="color:#0b507d">Masuk</a></span>
                        </div>
                    </form>
                </div>
            </div>
            <div class="sponsor-slider-wrapper cl-white text-center mt-40">
                <h5 class="slider-heading mb-3">Aplikasi pendidikan pertama yang menjangkau hampir seluruh daerah terluar di Indonesia</h5>
<!--                 <div class="sponsor-slider-4 owl-theme owl-carousel">
                    <div class="sponsor-thumb">
                        <img src="./assets/images/sponsor/sponsor1.png" alt="sponsor">
                    </div>
                    <div class="sponsor-thumb">
                        <img src="./assets/images/sponsor/sponsor2.png" alt="sponsor">
                    </div>
                    <div class="sponsor-thumb">
                        <img src="./assets/images/sponsor/sponsor3.png" alt="sponsor">
                    </div>
                    <div class="sponsor-thumb">
                        <img src="./assets/images/sponsor/sponsor4.png" alt="sponsor">
                    </div>
                    <div class="sponsor-thumb">
                        <img src="./assets/images/sponsor/sponsor5.png" alt="sponsor">
                    </div>
                    <div class="sponsor-thumb">
                        <img src="./assets/images/sponsor/sponsor6.png" alt="sponsor">
                    </div>
                    <div class="sponsor-thumb">
                        <img src="./assets/images/sponsor/sponsor7.png" alt="sponsor">
                    </div>
                    <div class="sponsor-thumb">
                        <img src="./assets/images/sponsor/sponsor1.png" alt="sponsor">
                    </div>
                    <div class="sponsor-thumb">
                        <img src="./assets/images/sponsor/sponsor2.png" alt="sponsor">
                    </div>
                    <div class="sponsor-thumb">
                        <img src="./assets/images/sponsor/sponsor3.png" alt="sponsor">
                    </div>
                    <div class="sponsor-thumb">
                        <img src="./assets/images/sponsor/sponsor4.png" alt="sponsor">
                    </div>
                    <div class="sponsor-thumb">
                        <img src="./assets/images/sponsor/sponsor5.png" alt="sponsor">
                    </div>
                    <div class="sponsor-thumb">
                        <img src="./assets/images/sponsor/sponsor6.png" alt="sponsor">
                    </div>
                    <div class="sponsor-thumb">
                        <img src="./assets/images/sponsor/sponsor7.png" alt="sponsor">
                    </div>
                </div> -->
            </div>
        </div>
    </div>
    <!--============= Sign In Section Ends Here =============-->

</template>
