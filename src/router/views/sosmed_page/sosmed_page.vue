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
      listProducts: [
        {
            "id":1,
            "product_type":"Personal",
            "product_name":"Monthly",
            "price":20000,
            "semester_price":100000,
            "yearly_price":200000,
            "account_id":0,
            "reference_id":0,
            "month":0,
            "status":0,
            "viewed":0,
            "sold":2,
            "image_url":"",
            "description":"Akses semua fitur Guru Kreator (Kelasku, Kreasiku dan Relungku) untuk 1 jenjang pendidikan selama 1 bulan tanpa batasan eksport dokumen (pdf)",
            "narasi":"",
            "recommended":false
        },
        {
            "id":10,
            "product_type":"Personal",
            "product_name":"Semester",
            "price":100000,
            "semester_price":null,
            "yearly_price":null,
            "account_id":0,
            "reference_id":0,
            "month":0,
            "status":0,
            "viewed":0,
            "sold":0,
            "image_url":"",
            "description":"Akses semua fitur Guru Kreator (Kelasku, Kreasiku dan Relungku) untuk 1 jenjang pendidikan selama 6 bulan tanpa batasan eksport dokumen (pdf)",
            "narasi":"",
            "recommended":false
        },
        {
            "id":11,
            "product_type":"Personal",
            "product_name":"Yearly",
            "price":200000,
            "semester_price":null,
            "yearly_price":null,
            "account_id":0,
            "reference_id":0,
            "month":0,
            "status":0,
            "viewed":0,
            "sold":0,
            "image_url":"",
            "description":"Akses semua fitur Guru Kreator (Kelasku, Kreasiku dan Relungku) untuk 1 jenjang pendidikan selama 1 tahun tanpa batasan eksport dokumen (pdf)",
            "narasi":"",
            "recommended":true
        }
        ],
    //   selectedPrice: 0,
        join_telegram_email : "",
        image_banner: 'https://api.paideia.id/api/files/public/8bd80c80b396428ba575dcfec07a4b20banner11.png',
        video: 'https://api.paideia.id/api/files/public/91221555db7c4016996ca7dd0ccacb07faturevideo.png',
        arrow: 'https://api.paideia.id/api/files/public/fe97b2b5d8e94d76abd862c249282488downarrow.png',
        logo1: 'https://api.paideia.id/api/files/public/47063a1db9d043c8bb0e46eb74e7b892sponsor1.png',
        logo2: 'https://api.paideia.id/api/files/public/1f83e9810013448fbefd3a29c2e24d0elogowti.png',
        logo3: 'https://api.paideia.id/api/files/public/92081145a7324b5f8e8257200e6ab506logotechinspire.png',
        keunggulan1: 'https://api.paideia.id/api/files/public/b990ac5b68024205b2d78a186afb1961amfea1.png',
        keunggulan2: 'https://api.paideia.id/api/files/public/ed55e63df8cd41cd9d237792c5670eb9amfea2.png',
        keunggulan3: 'https://api.paideia.id/api/files/public/2d18a88db67343e0837e386fcc19d371amfea3.png',
        keunggulan4: 'https://api.paideia.id/api/files/public/6be81494673a4099b428c99ca67ee894amfea4.png',
        cara1: 'https://api.paideia.id/api/files/public/8f276db10ac14bbb9e0a8000315c1d6ehow1.png',
        cara2: 'https://api.paideia.id/api/files/public/fd5548f716ed4d7bb5401745d1698ca9how2.png',
        cara3: 'https://api.paideia.id/api/files/public/80b5fae731134a0aa8fa617d6103ba51how3.png',
        team: 'https://api.paideia.id/api/files/public/6840d747a21d499da0e090752f728fc3community.png',
        fitur_phone1: 'https://api.paideia.id/api/files/public/1361659da7de47e7bca82941bc17c818promain.png',
        fitur_phone2: 'https://api.paideia.id/api/files/public/48f29261ce0342f9ab153cc8fc152e36promain2.png',
        fitur_phone3: 'https://api.paideia.id/api/files/public/7b26760fd8fd439daab738abc6e834d6promain3.png',
        fitur_phone4: 'https://api.paideia.id/api/files/public/62995e07977e4a799358d712dc392864promain4.png',
        map: 'https://api.paideia.id/api/files/public/06d98a7e50a24fea99aba7c17a69bfbbmap.png',
        ball1: 'https://api.paideia.id/api/files/public/f63dc8cb5e644bc8af6421e23cc139d41.png',
        ball2: 'https://api.paideia.id/api/files/public/76f044c80b354d70971b1d2a8c680b262.png',
        ball3: 'https://api.paideia.id/api/files/public/ea1da180c8e64662a8bfc3c440d61b8b3.png',
        ball4: 'https://api.paideia.id/api/files/public/6f1a4977a9674a0a9fdeca56a9457e4a4.png',
        ball5: 'https://api.paideia.id/api/files/public/2279e5b755494b4988cd3336fbed18af5.png',
        ball6: 'https://api.paideia.id/api/files/public/451555d44d474631afdc658fa49d5cd26.png',
        logo_circle: 'https://api.paideia.id/api/files/public/f412ade9b34346b7acca7d511dc37eafLogoGuruKreatoricononly1.png',
        facebook: 'https://api.paideia.id/api/files/public/4415b0b2e46e41ad8593006a63e4890dfaceboklogo.png'
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

    $(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/id_ID/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

</script>

<template>
    <div>
     <header class="navigation header-section">
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
     <section class="kominfo padding-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mb-4 text-center">
                    <div class="">
                        <h2 style="font-size:34px;">Guru dan Murid sebagai satu Komunitas</h2>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <img src="@/assets/images/mkgk.png" alt="">
            </div>
            <div class="col-lg-12 text-center">
                <p style="font-size:16px">Murid Kreatif hadir sebagai aplikasi pendamping murid. Integrasi ini membuat aplikasi Guru Kreator lebih maksimal.</p>
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
                        <img style="padding:0px 0px 10px 0px" src="@/assets/images/thumbnail/Group-1.png" alt="">
                        <h5 style="padding:0px 0px 10px 0px">Bahan Belajarku</h5>
                        <p style="font-size:12px; color:#235897; line-height:15px; padding: 0px 15px 0px 15px;">Bahan-bahan belajar dari guru dalam satu wadah terintegrasi.</p>
                    </div>
                    <div>
                        <img style="padding:0px 0px 15px 0px" src="@/assets/images/thumbnail/Group-2.svg" alt="">
                        <h5 style="padding:0px 0px 10px 0px">Bahan Belajarku</h5>
                        <p style="font-size:12px; color:#235897; line-height:15px; padding: 0px 60px 0px 60px;">Mengumpulkan tugas tidak akan terlewatkan lagi, semua dalam satu tempat yang terintegrasi.</p>
                    </div>
                    <div>
                        <img style="padding:0px 0px 15px 0px" src="@/assets/images/thumbnail/Group-3.svg" alt="">
                        <h5 style="padding:0px 0px 10px 0px">Ruang Diskusiku</h5>
                        <p style="font-size:12px; color:#235897; line-height:15px; padding: 0px 60px 0px 60px;">Menjadi komunitas digital yang sehat, serta menjadi sarana dalam berkolaborasi.</p>
                    </div>
                    <div>
                        <img style="padding:0px 0px 15px 0px" src="@/assets/images/thumbnail/Group-4.svg" alt="">
                        <h5 style="padding:0px 0px 10px 0px">Pencapaianku</h5>
                        <p style="font-size:12px; color:#235897; line-height:15px; padding: 0px 30px 0px 30px;">Berfokus pada proses untuk mendapatkan hasil yang maksimal.</p>
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