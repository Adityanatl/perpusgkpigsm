<script>
import { Carousel, Slide } from "vue-carousel";
import Vue from "vue";
import '@/assets/js/magnific-popup.min.js';
import SliderFrame from '@/components/SliderFrame';
import SliderSlide from '@/components/SliderSlide.vue';
import SliderSlides from '@/components/SliderSlides.vue';


global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

/**
 * Crypto ICO-landing page
 */
export default {
  components: { Carousel, Slide, SliderFrame, SliderSlide, SliderSlides, },
  data() {
    return {
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      starttime: "Nov 5, 2018 15:37:25",
      endtime: "Dec 31, 2020 16:37:25",
      gamification: 1,
      selectedProduct: null,
    };
  },

  destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
  },
  methods: {
      getListProduct(){
      let paramsTemp = queryString.stringify({
        ...{
          name: null,
          limit: 17,
          sort: 1,
        }
        , ...this.options}
      )
      this.$store.dispatch('product/GET_PRODUCTS',{params:paramsTemp}).then(()=>{
        this.listProducts = this.$store.getters['product/products']
      })
    },
    updateCart(){  
        console.log(this.selectedProduct)
      if(!this.selectedProduct  || this.selectedProduct == {}) {
        alert("Mohon pilih Produk terlebih dahulu")
        return false
      }

      localStorage.setItem('cart', JSON.stringify(this.selectedProduct))
    //   this.$store.dispatch('product/UPDATE_PRODUCT_CART', itemProduct)
      this.$router.push('/sign_up/sign-up')
    },  

    toggleMenu() {
      document.getElementById("topnav-menu-content").classList.toggle("show");
    },
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    },
    
      joinTelegram() {
        if (this.join_telegram_email == ""){
            alert("Mohon masukan email terlebih dahulu")
            return
        }
          let payload = {"email" : this.join_telegram_email}
          this.$store.dispatch('jointelegram/POST_JOIN_TELEGRAM', payload)
          window.open('https://t.me/gurukreatorgroup', '_blank');
      },

      analyticHome() {
          this.$gtag.event('beranda-click', {
              'event_category': 'home',
              'event_label': 'Beranda Page Click',
              'value': 1
          })
      },

      analyticGuru() {
          this.$gtag.event('guru-click', {
              'event_category': 'guru',
              'event_label': 'Guru Page Click',
              'value': 1
          })
      },

      analyticDonatur() {
          this.$gtag.event('donatur-click', {
              'event_category': 'donatur',
              'event_label': 'Donatur Page Click',
              'value': 1
          })
      }
  }
};

    $(document).ready(function () {
        // Nice Select
        // $('.select-bar').niceSelect();
        // PoPuP
        $('.popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        disableOn: 300 
        });
    });

    $(window).on('scroll', function () {

        var header = $(".header-section");
      if ($(this).scrollTop() < 1) {
        header.removeClass("active");
      } else {
        header.addClass("active");
      }
    });

    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

</script>

<template>
    <div>
     <header class="navigation header-section" style="background:#09a3f2;">
        <div class="container">
            <div class="header-wrapper">
            <div class="logo">
                <router-link tag="a" to="/">
                    <img src='@/assets/images/footer-gurukreator-logo.png' alt="logo_gurukreator">
                </router-link>
            </div>
                <div 
                type="button"
                class="header-bar d-lg-none"
                data-toggle="collapse"
                data-target="#topnav-menu-content"
                @click="toggleMenu()"
                >
                <span></span>
                <span></span>
                <span></span>
                </div>
                <ul class="menu">
                    <li @click="analyticHome()">
                        <router-link tag="a" to="/">Beranda</router-link>
                    </li>
                    <li @click="analyticGuru()"><router-link tag="a" to="/features/features">Guru</router-link></li>
                    <li @click="analyticDonatur()"><router-link tag="a" to="/donatur">Donatur</router-link></li>
                    <li><router-link tag="a" to="/murid_kreatif">Murid Kreatif</router-link></li>
                    <!-- <li><a href="contact.html">Kontak</a></li> -->
                    <li class="d-sm-none">
                        <router-link tag="a" to="/sign_in/sign-in" class="header-button d-sm-inline-block">SIGN UP/LOGIN</router-link>
                    </li>
                </ul>

                <div class="collapse navbar-collapse" id="topnav-menu-content">
                    <ul
                        class="navbar-nav ml-auto"
                        id="topnav-menu"
                        v-scroll-spy-active="{ selector: 'a.nav-link' }"
                    >
                        <li class="nav-item">
                        <router-link tag="a" to="/" style="color:#ffffff">Beranda</router-link>
                        </li><hr>
                        <li class="nav-item">
                        <router-link tag="a" to="/features/features" style="color:#ffffff">Guru</router-link>
                        </li><hr>
                        <li class="nav-item">
                        <router-link tag="a" to="/donatur" style="color:#ffffff">Donatur</router-link>
                        </li><hr>
                        <li class="nav-item">
                        <router-link tag="a" to="/murid_kreatif" style="color:#ffffff">Murid Kreatif</router-link>
                        </li><hr>
                        <!-- <li class="nav-item">
                        <router-link tag="a" to="#kontak">Kontak</router-link>
                        </li> -->
                        <li class="d-sm-none">
                            <router-link tag="a" to="/sign_in/sign-in" class="header-button d-sm-inline-block">SIGN UP/LOGIN</router-link>
                        </li>
                    </ul>
                </div>
                <router-link tag="a" to="/sign_in/sign-in" class="header-button d-none d-sm-inline-block">SIGN UP/LOGIN</router-link>
            </div>
        </div>
     </header>
     <!--============= Header Section Ends Here =============-->

    <!--============= Kominfo Starts Here =============-->
     <section class="kominfo" style="padding-top:200px;">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mb-4 text-center">
                    <div class="">
                        <h2>Guru dan Murid sebagai satu Komunitas</h2>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <img src="@/assets/images/mkgk.png" alt="" >
            </div>
            <div class="col-lg-12 text-center">
                <p>Murid Kreatif hadir sebagai aplikasi pendamping murid. Integrasi ini membuat aplikasi Guru Kreator lebih maksimal.</p>
            </div>
        </div>
     </section>
    <!--============= Kominfo Starts Here =============-->

    <!--============= Kominfo Starts Here =============-->
     <section class="kominfo padding-bottom" style="padding-top:70px">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mb-4 text-center">
                    <div class="">
                        <h5 class="title">Fitur Murid Kreatif</h5>
                    </div>
                </div>
            </div>
            <div>
                <div class="thumbnail-1">
                    <div>
                        <img src="@/assets/images/thumbnail/Group-1.png" alt="">
                        <h5>Bahan Belajarku</h5>
                        <p class="p-1">Bahan-bahan belajar dari guru dalam satu wadah terintegrasi.</p>
                    </div>
                    <div>
                        <img src="@/assets/images/thumbnail/Group-2.svg" alt="">
                        <h5>Bahan Belajarku</h5>
                        <p class="p-2">Mengumpulkan tugas tidak akan terlewatkan lagi, semua dalam satu tempat yang terintegrasi.</p>
                    </div>
                    <div>
                        <img src="@/assets/images/thumbnail/Group-3.svg" alt="">
                        <h5>Ruang Diskusiku</h5>
                        <p class="p-2">Menjadi komunitas digital yang sehat, serta menjadi sarana dalam berkolaborasi.</p>
                    </div>
                    <div>
                        <img src="@/assets/images/thumbnail/Group-4.svg" alt="">
                        <h5>Pencapaianku</h5>
                        <p class="p-1">Berfokus pada proses untuk mendapatkan hasil yang maksimal.</p>
                    </div>
                </div>
            </div>
        </div>
     </section>
    <!--============= Kominfo Starts Here =============-->

     <!--============= Footer Section Starts Here =============-->
     <footer class="footer-section bg_img_footer" data-background='@/assets/images/footer-bg.jpg'>
        <div class="container">
            <div class="footer-top padding-top padding-bottom">
                <div class="logo">
                    <a href="#0">
                        <img src='@/assets/images/footer-gurukreator-logo.png' alt="logo_gurukreator">
                    </a>
                </div>
                <ul class="social-icons">
                    <li>
                        <a target="_blank" href="https://www.facebook.com/gurukreator"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <!-- <li>
                        <a href="#0" class="active"><i class="fab fa-twitter"></i></a>
                    </li> -->

                    <!-- <li>
                        <a href="#0"><i class="fab fa-google-plus-g"></i></a>
                    </li> -->
                    <li>
                        <a target="_blank" href="https://www.instagram.com/gurukreator/"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://t.me/gurukreatorgroup"><i class="fab fa-telegram"></i></a>
                    </li>
                </ul>
            </div>
            <!-- <div class="fb-like-box" data-href="https://www.facebook.com/gurukreator/" data-width="300" data-height="570" data-show-faces="true" data-header="false" data-stream="true" data-show-border="false"></div>
            <div id="instafeed-container"></div> -->
            <!-- <div class="fb-like-box" data-href="https://www.instagram.com/gurukreator/" data-width="300" data-height="570" data-show-faces="true" data-header="false" data-stream="true" data-show-border="false"></div> -->
        
            <!-- <div id="curator-feed-instagram-layout"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.id</a></div> -->
            <div class="footer-bottom">
                <ul class="footer-link">
                    <li>
                    <router-link tag="a" to="/donatur">Beranda</router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/features/features">Guru</router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/donatur">Donatur</router-link>
                    </li>
                    <!-- <li>
                        <a href="#0">Kontak</a>
                    </li> -->
                    <li>
                        <router-link tag="a" to="/privasi-persyaratan">Kebijakan Privasi</router-link>
                    </li>
                </ul>
            </div>
            <div class="copyright">
                <p style="font-size:12px;">Illustration by storyset.com</p>
                <p style="font-size:12px;">
                    Copyright © 2020. All Rights Reserved By <a href="https://paideia.id/" style="color:#ffffff">PAIDEIA Educational Solutions</a>
                </p>
            </div>
        </div>
     </footer>
     <!--============= Footer Section Ends Here =============-->
    </div>
</template>