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
                    <!-- <li><router-link tag="a" to="/murid_kreatif">Murid Kreatif</router-link></li> -->
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
                        <router-link tag="a" to="/murid_kreatif" style="color:#ffffff">Murid Kreatif</router-link>
                        </li><hr> -->
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

        <!--============= Banner Section Starts Here =============-->
     <section class="banner-1 bg_img oh">
        <div class="dot-1 d-none d-lg-block">
            <img src='@/assets/images/dot-big.png' alt="banner_gurukreator">
        </div>
        <div class="dot-2 d-none d-lg-block">
            <img src='@/assets/images/dot-big.png' alt="banner_gurukreator">
        </div>
        <div class="dot-3">
            <img src='@/assets/images/dot-sm.png' alt="banner_gurukreator">
        </div>
        <div class="dot-4">
            <img src='@/assets/images/dot-sm.png' alt="banner_gurukreator">
        </div>
        <div class="banner-1-shape d-none d-lg-block">
            <img src='@/assets/images/banner1-shape.png' alt="css">
        </div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-content-1 cl-white">
                        <h1 class="title">Sudah saatnya jadi Guru Kreator!</h1>
                        <p>
                           Aplikasi Guru Kreator adalah aplikasi edukasi pertama yang dapat menjangkau hampir seluruh daerah terluar di Indonesia
                        </p>
                        <div class="banner-button-group">
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.paideia.id" class="button-4">UNDUH GRATIS</a>
                            <router-link tag="a" to="/features/features" class="button-4 active">JELAJAHI FITUR</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="banner-1-slider-wrapper">
                        <div class="banner-1-slider owl-carousel owl-theme">
                            <div class="banner-thumb">
                                <img :src="image_banner" alt="banner">
                            </div>

                        </div>
                        <div class="ban-click">
                            <div class="thumb">
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.paideia.id"><img src='@/assets/images/click.png' alt="banner_gurukreator"></a>
                            </div>
                            <span class="cl-white"><a a target="_blank" href="https://play.google.com/store/apps/details?id=com.paideia.id">Klik Disini</a></span>
                        </div>
                        <div class="arrow">
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.paideia.id"><img src='@/assets/images/arrow.png' alt="banner_gurukreator"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--============= Banner Section Ends Here =============-->

        <!--============= Sponsor Section Section Starts Here =============-->
     <div class="sponsor-section padding-bottom padding-top">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3">
                    <div class="spon-cont">
                        <p>By <a href="https://paideia.id/" style="color=#00afef">Paideia Educational Solutions</a></p>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="row sponsor-slider owl-theme owl-carousel">
                        <div class="sponsor-thumb">
                            <img :src="logo1" alt="sponsor_gurukreator">
                        </div>
                        <div class="sponsor-thumb">
                            <img :src="logo2" alt="sponsor_gurukreator">
                        </div>
                        <!-- <div class="sponsor-thumb">
                            <img src='@/assets/images/logo-mika.png' alt="sponsor">
                        </div> -->
                        <div class="sponsor-thumb">
                            <img :src="logo3" alt="sponsor_gurukreator">
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
     <!--============= Sponsor Section Section Ends Here =============-->

        <!--============= Amazing Feature Section Starts Here =============-->
     <section class="amazing-feature-section pos-rel" id="feature">
        <div class="shape-container oh">
            <div class="bg_img_feature feature-background" data-background='@/assets/images/amazing-feature-bg.jpg'></div>
            <div class="feature-top-shape d-none d-lg-block">
                <img src='@/assets/images/feature-shape.png' alt="gurukreator">
            </div>
        </div>
        <div class="topper-feature oh padding-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="section-header left-style mb-lg-0 white-lg-black pos-rel">
                            <h5 class="cate">Jelajah Keunikan Fiturnya</h5>
                            <h2 class="title">Teman guru dalam berkreasi</h2>
                            <p>Kreasiku, Kelasku, Relungku: 3 fitur utama Guru Kreator hadir
                            mendampingi guru dalam menciptakan rancangan pembelajaran,
                            menata dan mengelola kelas serta menjadi wadah berbagi karya</p>
                            <div class="downarrow d-none d-lg-block">
                                <img src='@/assets/images/downarrow.png' alt="feature_gurukreator">
                            </div>
                        </div>
                    </div>
                    <div class="videohome col-lg-6">
                        <a href="https://www.youtube.com/watch?v=cmzhtpuu6c0" class="feature-video-area popup">
                            <div class="thumb">
                                <img :src="video" alt="feature_gurukreator">
                            </div>
                            <div class="button-area">
                                <h4 class="title">
                                    Tonton Video
                                </h4>
                                <div class="video-button">
                                    <i class="flaticon-play"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="amazing-feature-bottom padding-top padding-bottom pb-lg-0 pt-lg-0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-xl-7">
                        <div class="section-header left-style cl-white">
                            <h5 class="cate">Keunggulan yang Unik</h5>
                            <h2 class="title">Karena kreativitas <br>tidak berbatas</h2>
                            <p>Dengan fleksibilitas memberikan keleluasaan dalam berkreasi
                            dan mengasah potensi</p>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row justify-content-center mb-30-none">
                            <div class="col-sm-6 col-lg-3">
                                <div class="am-item">
                                    <div class="am-thumb">
                                        <img :src="keunggulan1" alt="feature_gurukreator">
                                    </div>
                                    <div class="am-content">
                                        <h5 class="title">Low Bandwidth<br> 2G di 3T</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="am-item">
                                    <div class="am-thumb">
                                        <img :src="keunggulan2" alt="feature_gurukreator">
                                    </div>
                                    <div class="am-content">
                                        <h5 class="title">Solusi <br>Administrasi</h5>  
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="am-item">
                                    <div class="am-thumb">
                                        <img :src="keunggulan3" alt="feature_gurukreator">
                                    </div>
                                    <div class="am-content">
                                        <h5 class="title">Profil Pelajar Pancasila</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="am-item">
                                    <div class="am-thumb">
                                        <img :src="keunggulan4" alt="feature_gurukreator">
                                    </div>
                                    <div class="am-content">
                                        <h5 class="title">“Backward by Design”</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--============= Amazing Feature Section Ends Here =============-->

        <!--============= How Section Starts Here =============-->
     <section class="how-section padding-bottom padding-top" id="how">
        <div class="container">
            <div class="section-header">
                <h5 class="cate">Selalu tersedia di mana pun dan kapan pun</h5>
                <h2 class="title">Mengajar C.A.R.A. GU.E.</h2>
                <p>Mengajar dengan <b>C</b>erdas, ber<b>A</b>sas, <b>R</b>ingkas dan <b>A</b>ntusias <br>karena kamu adalah <b>GU</b>ru <b>E</b>fisien yang <b>E</b>fektif</p>
            </div>
            <div class="row justify-content-xl-between justify-content-center mb-40-none">
                <div class="col-lg-4 col-sm-6 col-xl-3">
                    <div class="how-item">
                        <div class="how-thumb">
                            <img :src="cara1" alt="how_gurukreator">
                        </div>
                        <div class="how-content">

                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.paideia.id" class="button-3 active">Download Aplikasi</a>
                            <ul class="download-options">
                                <!-- <li>
                                    <a href="#0"><i class="fab fa-windows"></i></a>
                                </li>
                                <li>
                                    <a href="#0" class="active"><i class="fab fa-apple"></i></a>
                                </li> -->
                                <li>
                                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.paideia.id"><i class="fab fa-android"></i></a>
                                </li>
                            </ul>
                            <p>Bagi pengguna Android, cukup unduh aplikasi di Playstore</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-xl-3">
                    <div class="how-item">
                        <div class="how-thumb">
                            <img :src="cara2" alt="how_gurukreator">
                        </div>
                        <div class="how-content">
                            <router-link tag="a" to="/sign_up/sign-up" class="button-3">BUAT AKUN</router-link>
                            <h5 class="title m">FREEMIUM</h5>
                            <p style="margin-top:45px;">Buat akun secara gratis<br> dan jelajahi setiap fiturnya</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-xl-3">
                    <div class="how-item">
                        <div class="how-thumb">
                            <img :src="cara3" alt="how_gurukreator">
                        </div>
                        <div class="how-content">
                            <router-link tag="a" to="/features/features" class="button-3">SAATNYA BERKREASI</router-link>
                            <h5 class="title">JADILAH KREATIF</h5>
                            <p style="margin-top:45px;">Nikmati beragam fitur yang memudahkan guru mengajar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--============= How Section Ends Here =============-->

        <!--============= Newslater Section Starts Here =============-->
     <section class="newslater-section oh bg_img_newslatter pos-rel" data-background='@/assets/images/newslater2.jpg'>
        <div class="top-shape d-none d-lg-block">
            <img src='@/assets/images/top-shape2.png' alt="css_gurukreator">
        </div>
        <div class="bottom-shape d-none d-lg-block">
            <img src='@/assets/images/bottom-shape2.png' alt="css_gurukreator">
        </div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="newslater-area padding-bottom padding-top">
                        <div class="section-header left-style cl-white">
                            <h5 class="cate">Jadilah bagian dari Guru Kreator</h5>
                            <h2 class="title">Komunitas <br>#KawanKreator</h2>
                            <p>#KawanKreator adalah <i style="color:#ffffff">problem solvers</i> dan <i style="color:#ffffff">team players</i> yang
                            berkumpul dan berelasi sebagai manusia Pancasila. Dengan
                            bertakwa kepada Tuhan dan berakhlak mulia terhadap sesama,
                            kita berkomitmen atas pertumbuhan setiap anggota dalam
                            komunitas pendidik ini.</p>
                        </div>
                        <div class="subscribe-form">
                            <input type="text" placeholder="Masukkan Email" v-model="join_telegram_email">
                            <button  @click="joinTelegram()">BERGABUNG</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-none d-lg-block">
                    <div class="subscribe-thumb-2">
                        <img :src="team" alt="newslater_gurukreator">
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--============= Newslater Section Ends Here =============-->

        <!--============= Feature Section Starts Here =============-->
     <section class="feature-section padding-top padding-bottom oh pos-rel">
        <div class="feature-shapes d-none d-lg-block">
            <img src='@/assets/images/feature-shape.png' alt="feature_gurukreator">
        </div>
        <div class="container">
            <div class="section-header mw-725">
                <h5 class="cate">Menjadi jawaban untuk banyak pertanyaan</h5>
                <h2 class="title">Fitur yang memahami kebutuhanmu</h2>
                <p>
                    Setiap fitur dirancang melalui sudut pandang guru secara komprehensif
                </p>
            </div>
            <div class="row">
                <div class="col-lg-5 rtl">
                    <div class="feature--thumb pr-xl-4 ltr">
                        <div class="feat-slider owl-carousel owl-theme" data-slider-id="1">
                            <div class="main-thumb">
                                <img v-if="gamification==1" :src="fitur_phone1" alt="feature_gurukreator">
                                <img v-else-if="gamification==2" :src="fitur_phone2" alt="feature_gurukreator">
                                <img v-else-if="gamification==3" :src="fitur_phone3" alt="feature_gurukreator">
                                <img v-else="" :src="fitur_phone4" alt="feature_gurukreator">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="feature-wrapper mb-30-none owl-thumbs" data-slider-id="1">
                        <div class="feature-item" @click="gamification=1">
                            <div class="feature-thumb">
                                <div class="thumb">
                                    <img class="img1" v-if="gamification==1" src='@/assets/images/pro-1.png' alt="feature_gurukreator">
                                    <img class="img2" v-else="" src='@/assets/images/pro1.png' alt="feature_gurukreator">
                                </div>
                            </div>
                            <div class="feature-content">
                                <h4 class="title">KREASIKU</h4>
                                <p>Rancang dan modifikasilah pembelajaran dengan beragam pendekatan dan strategi yang tersedia. Sudah saatnya administrasi menjadi teman.</p>
                            </div>
                        </div>
                        <div class="feature-item" @click="gamification=2">
                            <div class="feature-thumb">
                                <div class="thumb">
                                    <img class="img1" v-if="gamification==2" src='@/assets/images/pro-2.png' alt="feature_gurukreator">
                                    <img class="img2" v-else="" src='@/assets/images/pro2.png' alt="feature_gurukreator">
                                </div>
                            </div>
                            <div class="feature-content">
                                <h4 class="title">KELASKU</h4>
                                <p>Maksimalkan kegiatan rutin bermakna dalam ruang kolaboratif antara guru dan siswa dengan administrasi digital. Peroleh evaluasi lebih dini untuk menggali potensi diri.</p>
                            </div>
                        </div>
                        <div class="feature-item" @click="gamification=3">
                            <div class="feature-thumb">
                                <div class="thumb">
                                    <img class="img1" v-if="gamification==3" src='@/assets/images/pro-3.png' alt="feature_gurukreator">
                                    <img class="img2" v-else="" src='@/assets/images/pro3.png' alt="feature_gurukreator">
                                </div>
                            </div>
                            <div class="feature-content">
                                <h4 class="title">RELUNGKU</h4>
                                <p>Ruang kolaboratif bagi sesama pendidik. Bersama saling menunjang setiap pribadi lewat berbagi dan mengapresiasi setiap hasil kreasi.</p>
                            </div>
                        </div>
                        <div class="feature-item" @click="gamification=4">
                            <div class="feature-thumb">
                                <div class="thumb">
                                    <img class="img1" v-if="gamification==4" src='@/assets/images/pro-4.png' alt="feature_gurukreator">
                                    <img class="img2" v-else="" src='@/assets/images/pro4.png' alt="feature_gurukreator">
                                </div>
                            </div>
                            <div class="feature-content">
                                <h4 class="title">GAMIFIKASI</h4>
                                <p>Setiap tahapan merupakan pencapaian. Lihat seberapa gigih upayamu menjadi sumber inspirasi dalam berkreasi. Jadilah Guru Kreator! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--============= Feature Section Ends Here =============-->

        <!--============= Pricing Section Starts Here =============-->
     <section class="pricing-section padding-top oh padding-bottom pb-md-0 bg_img_pricing pos-rel" data-background="./assets/images/bg/pricing-bg.jpg" id="pricing">
        <div class="top-shape d-none d-md-block">
            <img src='@/assets/images/top-shape.png' alt="css_gurukreator">
        </div>
        <div class="bottom-shape d-none d-md-block">
            <img src='@/assets/images/bottom-shape.png' alt="css_gurukreator">
        </div>
        <div class="ball-2" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60"
        data-paroller-type="foreground" data-paroller-direction="horizontal">
            <img :src="ball1" alt="balls_gurukreator">
        </div>
        <div class="ball-3" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30"
        data-paroller-type="foreground" data-paroller-direction="horizontal">
            <img :src="ball2" alt="balls_gurukreator">
        </div>
        <div class="ball-4" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30"
        data-paroller-type="foreground" data-paroller-direction="horizontal">
            <img :src="ball3" alt="balls_gurukreator">
        </div>
        <div class="ball-5" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30"
        data-paroller-type="foreground" data-paroller-direction="vertical">
            <img :src="ball4" alt="balls_gurukreator">
        </div>
        <div class="ball-6" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60"
        data-paroller-type="foreground" data-paroller-direction="horizontal">
            <img :src="ball5" alt="balls_gurukreator">
        </div>
        <div class="ball-7" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60"
        data-paroller-type="foreground" data-paroller-direction="vertical">
            <img :src="ball6" alt="balls_gurukreator">
        </div>
        <div class="container">
            <div class="section-header pb-30 cl-white">
                <h5 class="cate">Pilih paket yang kamu inginkan</h5>
                <h2 class="title">Biaya langganan yang sangat menguntungkan</h2>
                <p>
                    Kami percaya, bahwa pendidikan adalah untuk semua. Untuk itu, dengan biaya yang sangat terjangkau, aplikasi ini dapat dinikmati oleh siapa saja dengan biaya berlangganan Rp20.000,- /bulan.
                </p>
            </div>
            <div class="range-wrapper-2">
                <div class="pricing-range pb-1">
                    <div class="col-sm-12 pricing-range-top pt-0">
                        <div class="tags-area">
                            <h3 class="tags">Saatnya berkreasi!</h3>
                        </div>
                        <!-- <div class="pricing-header">
                            <span class="cate">Pilihan berlanggan</span>
                            <div class="select-container">
                                <select class="select-bar">
                                    <option value="basic">Bulanan</option>
                                    <option value="standard">Semesteran</option>
                                    <option value="premium">Tahunan</option>
                                </select>
                            </div>
                        </div> -->
                        <div class="amount-area-price">
                            <!-- <div class="table-responsive">
                                <table class="item table table-centered mt-5">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h2 class="title"><sup>Rp</sup>20.000</h2>
                                                <span class="info">Per Bulan</span>
                                            </td>
                                            <td>
                                                <h2 class="title"><sup>Rp</sup>100.000</h2>
                                                <span class="info">Per Semester</span>
                                                <span class="info"><strike>Rp 120.000</strike></span>
                                                <span class="info"> Diskon 1 Bulan (Rp. 16.700/Bulan)</span>
                                            </td>
                                            <td>
                                                <h2 class="title"><sup>Rp</sup>200.000</h2>
                                                <span class="info">Per Tahun</span>
                                                <span class="info"><strike>Rp 240.000</strike></span>
                                                <span class="info"> Diskon 2 Bulan (Rp. 16.700/Bulan)</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input  type="radio"   name="methodePayment" style="width:25px; height:25px; margin-top:50px; margin-right:130px; margin-left:100px;" ></td>
                                            <td><input  type="radio"   name="methodePayment" style="width:25px; height:25px; margin-top:50px; margin-right:130px; margin-left:140px;" ></td>
                                            <td><input  type="radio"   name="methodePayment" style="width:25px; height:25px; margin-top:50px; margin-right:130px; margin-left:200px;" ></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> -->
                            <div class="item">
                                <h2 class="title"><sup>Rp</sup>20.000</h2>
                                <span class="info">Per Bulan</span>
                                
                            </div>
                            <div class="item" >
                                <h2 class="title"><sup>Rp</sup>100.000</h2>
                                <span class="info">Per Semester</span>
                                <span class="info"><strike>Rp 120.000</strike></span>
                                <span class="info"> Diskon 1 Bulan (Rp. 16.700/Bulan)</span>
                                
                            </div>
                            <div class="item">
                                <h2 class="title"><sup>Rp</sup>200.000</h2>
                                <span class="info">Per Tahun</span>
                                <span class="info"><strike>Rp 240.000</strike></span>
                                <span class="info"> Diskon 2 Bulan (Rp. 16.700/Bulan)</span>
                            </div>
                        </div>
                        <!-- <div v-for="(itemProduct,index) in listProducts" :key="index"> -->
                            <div class="radio-flex">
                                <input class="item" type="radio" name="some-radios" v-for="(itemProduct,index) in listProducts" :key="index" v-model="selectedProduct" v-bind:value="itemProduct" style="font-size:16px">
                            </div>
                        <!-- </div> -->
                        <div class="invest-range-area">
                            <div class="invest-amount" data-min="1.00 USD" data-max="1000 USD">
                                <!-- <div id="usd-range" class="invest-range-slider"></div> -->
                            </div>
                        </div>
                    </div>
                    <div class="text-center mb-3 mt-5">
                        <div class="right mb-4">
                            <!-- <router-link tag="a" to="/sign_up/sign-up" class="custom-button mb-3" @click="updateCart()">DAFTAR SEKARANG!</router-link> -->
                            <button class="custom-button3 mb-3" @click="updateCart()">DAFTAR SEKARANG!</button>
                            <ul class="download-options mt-4 mb-4">
                                <li>
                                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.paideia.id"><i class="fab fa-android"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
        <!--============= Pricing Section Ends Here =============-->

        <!--============= Coverage Section Starts Here =============-->
     <section class="coverage-section padding-top padding-bottom" id="coverage">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7">
                    <div class="section-header left-style coverage-header">
                        <h5 class="cate">Wujudkan 3T menjadi Terluar Tapi Terdepan!</h5>
                        <h2 class="title">Karena mereka tidak sendiri   </h2>
                        <p>
                            Kami sangat peduli atas hidup setiap insan dan bagaimana mereka berproses dalam keunikan keberadaan mereka. Mari bersama, wujudkan mereka menjadi Guru Kreator!
                        </p>
                        <div class="how-content">
                            <router-link tag="a" to="/donatur#pricing" class="button-3 active">Dukung Guru 3T</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="coverage-right-area text-lg-right">
                        <h2 class="amount">62 Kab*</h2>
                        <p>Daerah 3T</p>
                        <p>(Terdepan, Terluar, Tertinggal)</p>
                        <p style="color:#f0c900">*Perpres No. 63 Tahun 2020</p>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md">
                    <img :src="map" height="auto" width="100%"/> 
                </div>
            </div>  
        </div>
     </section>
     <!--============= Coverage Section Ends Here =============-->

     <!--============= Kominfo Starts Here =============-->
     <section class="kominfo padding-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mb-4">
                    <div class="section-header left-style coverage-header">
                        <h2 class="title">Terdaftar di Kominfo</h2>
                    </div>
                </div>
            </div>
            <div>
                <div class="card"
                    style= "
                            border-radius: 29px;
                            box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.10);
                            margin: 0rem 1rem 1rem 1rem;
                            text-align:center;
                            "
                >
                    <div class="card-body">
                        <div class="table-responsive">
                        <!-- <table class="table table-centered">
                            <tbody>
                                <tr> -->
                                    <div class="thumbnail">
                                        <div>
                                            <img class="kominfo" src="@/assets/images/kominfo-logo.svg" alt="">
                                            <p>Guru Kreator telah resmi terdaftar di KOMINFO</p>
                                        </div>
                                        <div>
                                            <img class="qrcode" src="@/assets/images/kominfo-qrcode.svg" alt="">
                                            <p><a target="_blank" href="https://pse.kominfo.go.id/tdpse-detail/1418">https://pse.kominfo.go.id/tdpse-detail/1418</a></p>
                                        </div>
                                    </div>
                                <!-- </tr>
                            </tbody>
                        </table> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--============= Kominfo Starts Here =============-->

     <!--============= Social Media Starts Here =============-->
     <section class="padding-top padding-bottom" id="coverage">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mb-4">
                    <div class="section-header left-style coverage-header">
                        <h2 class="title">Our Social Media Channel</h2>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-4 mt-3 ">
                    <div class="row mb-4 ml-2">
                        <div>
                            <img :src="logo_circle" height="62px" width="62px"/> 
                        </div>
                        <div style="margin-top:16px; margin-left:24px">
                            <h4>Guru Kreator</h4>
                            <p style="font-size:20px; color:#235897; padding-top:5px;"><img :src="facebook" alt=""> Facebook Page</p>
                        </div>
                    </div>
                    <div class="facebook">
                        <iframe name="f13901404aafe08" width="auto" height="650px" data-testid="fb:like_box Facebook Social Plugin" title="fb:like_box Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/plugins/like_box.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1411b4b9a242f4%26domain%3Dlocalhost%26origin%3Dhttp%253A%252F%252Flocalhost%253A9921%252Ff2075e56c632f3c%26relation%3Dparent.parent&amp;container_width=356&amp;header=false&amp;height=550&amp;href=https%3A%2F%2Fwww.facebook.com%2Fgurukreator%2F&amp;locale=id_ID&amp;sdk=joey&amp;show_border=true&amp;show_faces=true&amp;stream=true&amp;width=326" class="social-facebook"></iframe> 
                    </div>
                </div>
                <div class="col-md-4 mt-3">
                    <div class="row mb-4 ml-2">
                        <div>
                            <img :src="logo_circle" height="62px" width="62px"/> 
                        </div>
                        <div style="margin-top:16px; margin-left:24px">
                            <h4>Guru Kreator</h4>
                            <p style="font-size:20px; color:#235897; padding-top:5px;"><img src="@/assets/images/widget/ig.png" alt=""> Instagram Feed</p>
                        </div>
                    </div>
                    <div class="instagram">
                        <SliderFrame>
                            <div slot-scope="{ next, prev }">
                                <div>
                                    <SliderSlides>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CPnPi60r4j8/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CPky6sDLMCU/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CPjm3l1LCGw/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CPVKHerrs-_/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CPUUPGmLnoD/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CPSl5V_rXLy/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CPSlZ_Hr4Os/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CPH5fL-LD0B/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CPFWD05LTS4/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CO9lUJBrgsh/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CO2he4JLyGT/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/COzjZavLSs8/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/COyBEp0rUPi/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/COt9sFUrgM9/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/COrm5VinOLs/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/COj5DB2rsZn/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/COfI4DhL6_G/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/COckhoQrr0t/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/COXW2eNrQuI/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/COUuMBgr8sc/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/COKl782LHZC/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/COFf0twrRw7/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/COAO_QBLt4i/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CN9TzmxrSiR/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CN6IqY0LHrJ/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CNzfh6Bndgx/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CNuTLwzr-IW/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CNlnQ02rogE/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CNj5XkaLQPt/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CNRSmTeLVgd/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CNOWtJ1LRrq/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CNJVE61LwV_/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMzRYHgp6Va/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMrdF1CJ9ze/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMmOr1hJWlu/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMcHEVtreVv/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMYygHCFPku/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMREIyxFOvD/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMOiGmol9f_/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMOGDwcFmS5/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMJTpcfFyb2/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMCHzd9Fcw3/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CL_fmE2r4f9/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CL-zxpwFCXP/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CLrIP7eJU5X/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CLrILgmpkHH/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CLrHYwfJSiy/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CLV5_-YpLB_/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                    <!-- <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CLVzMOzJD3F/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CLLW02Bpcxc/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CLJkZqTJ90r/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CLJkBgwJkon/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CLJjY1Pphgw/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CLGrDt6JULo/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CLGqHEFpafO/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CK2xeMOpHWG/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CK2xX3cJ3Yj/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CK2xS5ppOfg/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKyYABypdcI/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKyWcwxJXB0/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKyCoBFJ0zg/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKvosnuB_cz/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKvomMRpK2R/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKvoDPgpKNn/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKqHVEyp9ZE/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKktwjQpqO5/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKktWt3Jx1V/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKaeDO1odeh/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKad7goIQ6z/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKad4LaLKuv/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CJ-cv3sJ6jM/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKGQMBBJRPi/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKGPnwIJyia/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKBYzx-p8mO/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CKBYDYwJh8C/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CJ-cv3sJ6jM/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CJ7wAZqpvHd/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CJ2_rASp-UJ/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CJu-xN7pOpi/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CJtLwRfpf6N/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CJtLtj2p5VD/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CJlCyuPJM3a/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" 
                                                    src="https://www.instagram.com/p/CJc0tOopH1D/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" 
                                                    src="https://www.instagram.com/p/CJc0gsVpAYc/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CJc0F0Dps5I/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CJNa5nEp865/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CJF8HFrpFZb/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CI4w2SCpcTg/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CIxI3dsJaXc/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CIxIuo-pFNu/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CIxIamhJkwR/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CIdCCpNJ_aN/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CIUt1HjpqVs/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CIUtuQxJ3vg/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CIUtXBXJ2s2/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CH_oI65p6lV/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CH-JV6FplEI/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>        
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CH290TJpwOo/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CH29vmjJiVZ/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CH29rsZpyGg/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CHuoimnpUn2/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CHununBJuCr/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CHunGRLJfJZ/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CHrh1FbhSl-/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CHrhKQZhdC_/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CHrgotqhpnB/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CHp9KcUBOW7/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>          
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CHp8eaohnbv/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>
                                        <SliderSlide class="o-vertical-spacing">
                                            <div>
                                                <div>
                                                    <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CHpoWZwJpr0/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                                </div>
                                            </div>
                                        </SliderSlide>                                                                                                                                                                                                                                                                                                               -->
                                        <a href="#0" @click="prev" class="testi-next-ig trigger-ig  ">
                                            <img src='@/assets/images/client/left.png' alt="client_gurukreator">
                                        </a>
                                        <a href="#0" @click="next" class="testi-prev-ig trigger-ig">
                                            <img src='@/assets/images/client/right.png' alt="client_gurukreator">
                                        </a>

                                    </SliderSlides>
                                </div>
                            </div>
                        </SliderFrame>
                    </div>
                </div>
                <div class="col-md-4 mt-3 youtube">
                    <div class="row mb-4 ml-2">
                        <div>
                            <img :src="logo_circle" height="62px" width="62px"/> 
                        </div>
                        <div style="margin-top:16px; margin-left:24px">
                            <h4>Guru Kreator</h4>
                            <p style="font-size:20px; color:#235897; padding-top:5px;"><img src="@/assets/images/widget/youtube-logo.png" alt=""> Youtube Channel</p>
                        </div>
                    </div>
                    <div>
                        <div class="row">
                            <iframe class="social-youtube" src="https://www.youtube.com/embed/SSatzZ1uA6g"> </iframe>
                        </div>
                        <div class="row">
                            <iframe class="social-youtube" src="https://www.youtube.com/embed/NaZ4xJEZX0Q"> </iframe>
                        </div>                        
                    </div>
                </div>
            </div>  
        </div>
     </section>
     <!--============= Social Media Ends Here =============-->

     <!-- <section>
         <div class="container">
             <div>
                <SliderFrame>
                    <div slot-scope="{ next, prev }">
                        <div>
                            <SliderSlides>
                                <SliderSlide class="o-vertical-spacing">
                                    <div class="col-md-4 mt-3">
                                        <div>
                                            <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMzRYHgp6Va/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                        </div>
                                    </div>
                                </SliderSlide>
                                <SliderSlide class="o-vertical-spacing">
                                    <div class="col-md-4 mt-3">
                                        <div>
                                            <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMrdF1CJ9ze/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                        </div>
                                    </div>
                                </SliderSlide>
                                <SliderSlide class="o-vertical-spacing">
                                    <div class="col-md-4 mt-3">
                                        <div>
                                            <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMmOr1hJWlu/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                        </div>
                                    </div>
                                </SliderSlide>
                                <SliderSlide class="o-vertical-spacing">
                                    <div class="col-md-4 mt-3">
                                        <div>
                                            <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMcHEVtreVv/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                        </div>
                                    </div>
                                </SliderSlide>
                                <SliderSlide class="o-vertical-spacing">
                                    <div class="col-md-4 mt-3">
                                        <div>
                                            <iframe class="social-ig instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CMYygHCFPku/embed/captioned/?cr=1&amp;v=13&amp;wp=588#%7B%22ci%22%3A0%2C%22os%22%3A13688.2199998945%7D" allowtransparency="true" frameborder="0" height="390" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no"></iframe>
                                        </div>
                                    </div>
                                </SliderSlide>
                                <a href="#0" @click="prev" class="testi-prev-ig trigger-ig">
                                    <img src='@/assets/images/client/right.png' alt="client_gurukreator">
                                </a>
                                <a href="#0" @click="next" class="testi-next-ig trigger-ig  ">
                                    <img src='@/assets/images/client/left.png' alt="client_gurukreator">
                                </a>
                            </SliderSlides>
                        </div>
                    </div>
                </SliderFrame>
            </div>
         </div>
     </section>

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