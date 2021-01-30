<script>
import { Carousel, Slide } from "vue-carousel";
import Vue from "vue";

// import magnific from "magnific-popup";
import '@/assets/js/magnific-popup.min.js';
// import '@/assets/js/jquery-3.3.1.min.js';
// import '@/assets/js/modernizr-3.6.0.min.js';
// import '@/assets/js/plugins.js';
// import '@/assets/js/bootstrap.min.js';
// import '@/assets/js/jquery-ui.min.js';
// import '@/assets/js/wow.min.js';
// import '@/assets/js/waypoints.js';
// import '@/assets/js/nice-select.js';
// import '@/assets/js/owl.min.js';
// import '@/assets/js/counterup.min.js';
// import '@/assets/js/canvasjs.min.js';
// import '@/assets/js/paroller.js';
// import '@/assets/js/main.js';
// import jquery from 'jQuery';

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

/**
 * Crypto ICO-landing page
 */
export default {
  components: { Carousel, Slide },
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
        join_telegram_email : ""
    };
  },
  created() {
    // var scripts = [
    //   "@/assets/js/magnific-popup.min.js"
    // ];
    // scripts.forEach(script => {
    //   let tag = document.createElement("script");
    //   tag.setAttribute("src", script);
    //   document.head.appendChild(tag);
    // });
    // window.addEventListener("scroll", this.windowScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    // this.timerCount(this.start, this.end);
    // this.interval = setInterval(() => {
    //   this.timerCount(this.start, this.end);
    // }, 1000);
  },
  methods: {
    // windowScroll() {
    //   const navbar = document.getElementById("navbar");
    //   if (
    //     document.body.scrollTop >= 50 ||
    //     document.documentElement.scrollTop >= 50
    //   ) {
    //     navbar.classList.add("nav-sticky");
    //   } else {
    //     navbar.classList.remove("nav-sticky");
    //   }
    // },
    /**
     * Toggle menu
     */
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

    //Menu Dropdown Icon Adding
    // $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    // $('.submenu').parent('li').hover(function () {
    //   var menu = $(this).find("ul");
    //   var menupos = $(menu).offset();
    //   if (menupos.left + menu.width() > $(window).width()) {
    //     var newpos = -$(menu).width();
    //     menu.css({
    //       left: newpos
    //     });
    //   }
    // });

    // $('.menu li a').on('click', function (e) {
    //   var element = $(this).parent('li');
    //   if (element.hasClass('open')) {
    //     element.removeClass('open');
    //     element.find('li').removeClass('open');
    //     element.find('ul').slideUp(300, "swing");
    //   } else {
    //     element.addClass('open');
    //     element.children('ul').slideDown(300, "swing");
    //     element.siblings('li').children('ul').slideUp(300, "swing");
    //     element.siblings('li').removeClass('open');
    //     element.siblings('li').find('li').removeClass('open');
    //     element.siblings('li').find('ul').slideUp(300, "swing");
    //   }
    // });

    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

        // PoPuP
    // $('.popup').magnificPopup({
    //   disableOn: 700,
    //   type: 'iframe',
    //   mainClass: 'mfp-fade',
    //   removalDelay: 160,
    //   preloader: false,
    //   fixedContentPos: false,
    //   disableOn: 300
    // });
    // $("body").each(function () {
    //   $(this).find(".img-pop").magnificPopup({
    //     type: "image",
    //     gallery: {
    //       enabled: true
    //     }
    //   });
    // });

    // aos js active
    // new WOW().init();

</script>

<template>
    <div>
     <header class="navigation header-section">
        <div class="container">
            <div class="header-wrapper">
            <div class="logo">
                <router-link tag="a" to="/">
                    <img src='@/assets/images/footer-gurukreator-logo.png' alt="logo">
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
                    <li>
                        <router-link tag="a" to="/">Beranda</router-link>
                    </li>
                    <li><router-link tag="a" to="/features/features">Guru</router-link></li>
                    <li><router-link tag="a" to="/donatur">Donatur</router-link></li>
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
                    <!-- <div class="ml-lg-2">
                        <a href="javascript: void(0);" class="btn btn-outline-success w-xs">Sign in</a>
                    </div> -->



                <!-- <div class="header-right header-bar d-lg-none">
                    <select class="select-bar">
                        <option value="en">En</option>
                        <option value="Bn">Bn</option>
                        <option value="pk">Pk</option>
                        <option value="Fr">Fr</option>
                    </select>
                </div> -->
                <!-- <button
                    type="button"
                    class="btn btn-sm px-3 font-size-16 d-lg-none header-item"
                    data-toggle="collapse"
                    data-target="#topnav-menu-content"
                    @click="toggleMenu()"
                    >
                    <i class="fa fa-fw fa-bars"></i>    
                </button> -->
                <router-link tag="a" to="/sign_in/sign-in" class="header-button d-none d-sm-inline-block">SIGN UP/LOGIN</router-link>
            </div>
        </div>
     </header>
     <!--============= Header Section Ends Here =============-->

        <!--============= Banner Section Starts Here =============-->
     <section class="banner-1 bg_img oh">
        <div class="dot-1 d-none d-lg-block">
            <img src='@/assets/images/dot-big.png' alt="banner">
        </div>
        <div class="dot-2 d-none d-lg-block">
            <img src='@/assets/images/dot-big.png' alt="banner">
        </div>
        <div class="dot-3">
            <img src='@/assets/images/dot-sm.png' alt="banner">
        </div>
        <div class="dot-4">
            <img src='@/assets/images/dot-sm.png' alt="banner">
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
                                <img src='@/assets/images/banner1-1.png' alt="banner">
                            </div>
                            <!-- <div class="banner-thumb">
                                <img src='@/assets/images/banner/banner1-2.png' alt="banner">
                            </div>
                            <div class="banner-thumb">
                                <img src='@/assets/images/banner/banner1-3.png' alt="banner">
                            </div>
                            <div class="banner-thumb">
                                <img src='@/assets/images/banner/banner1-1.png' alt="banner">
                            </div>
                            <div class="banner-thumb">
                                <img src='@/assets/images/banner/banner1-2.png' alt="banner">
                            </div>
                            <div class="banner-thumb">
                                <img src='@/assets/images/banner/banner1-3.png' alt="banner">
                            </div> -->
                        </div>
                        <div class="ban-click">
                            <div class="thumb">
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.paideia.id"><img src='@/assets/images/click.png' alt="banner"></a>
                            </div>
                            <span class="cl-white"><a a target="_blank" href="https://play.google.com/store/apps/details?id=com.paideia.id">Klik Disini</a></span>
                        </div>
                        <div class="arrow">
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.paideia.id"><img src='@/assets/images/arrow.png' alt="banner"></a>
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
                            <img src='@/assets/images/sponsor1.png' alt="sponsor">
                        </div>
                        <div class="sponsor-thumb">
                            <img src='@/assets/images/logo/logo_wti.png' alt="sponsor">
                        </div>
                        <!-- <div class="sponsor-thumb">
                            <img src='@/assets/images/logo-mika.png' alt="sponsor">
                        </div> -->
                        <div class="sponsor-thumb">
                            <img src='@/assets/images/logo-techinspire.png' alt="sponsor">
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
                <img src='@/assets/images/feature-shape.png' alt="css">
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
                                <img src='@/assets/images/downarrow.png' alt="feature">
                            </div>
                        </div>
                    </div>
                    <div class="videohome col-lg-6">
                        <a href="https://www.youtube.com/watch?v=cmzhtpuu6c0" class="feature-video-area popup">
                            <div class="thumb">
                                <img src='@/assets/images/fature-video.png' alt="feature">
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
                            <h2 class="title">Karena kreatifitas <br>tidak berbatas</h2>
                            <p>Dengan fleksibilitas memberikan keleluasaan dalam berkreasi
                            dan mengasah potensi</p>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row justify-content-center mb-30-none">
                            <div class="col-sm-6 col-lg-3">
                                <div class="am-item">
                                    <div class="am-thumb">
                                        <img src='@/assets/images/am-fea1.png' alt="feature">
                                    </div>
                                    <div class="am-content">
                                        <h5 class="title">Low Bandwidth<br> 2G di 3T</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="am-item">
                                    <div class="am-thumb">
                                        <img src='@/assets/images/am-fea2.png' alt="feature">
                                    </div>
                                    <div class="am-content">
                                        <h5 class="title">Solusi <br>Administrasi</h5>  
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="am-item">
                                    <div class="am-thumb">
                                        <img src='@/assets/images/am-fea3.png' alt="feature">
                                    </div>
                                    <div class="am-content">
                                        <h5 class="title">Profil Pelajar Pancasila</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="am-item">
                                    <div class="am-thumb">
                                        <img src='@/assets/images/am-fea4.png' alt="feature">
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
                            <img src='@/assets/images/how1.png' alt="how">
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
                            <img src='@/assets/images/how2.png' alt="how">
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
                            <img src='@/assets/images/how3.png' alt="how">
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
            <img src='@/assets/images/top-shape2.png' alt="css">
        </div>
        <div class="bottom-shape d-none d-lg-block">
            <img src='@/assets/images/bottom-shape2.png' alt="css">
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
                        <img src='@/assets/images/community.png' alt="newslater">
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--============= Newslater Section Ends Here =============-->

        <!--============= Feature Section Starts Here =============-->
     <section class="feature-section padding-top padding-bottom oh pos-rel">
        <div class="feature-shapes d-none d-lg-block">
            <img src='@/assets/images/feature-shape.png' alt="feature">
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
                                <img v-if="gamification==1" src='@/assets/images/pro-main.png' alt="feature">
                                <img v-else-if="gamification==2" src='@/assets/images/pro-main2.png' alt="feature">
                                <img v-else-if="gamification==3" src='@/assets/images/pro-main3.png' alt="feature">
                                <img v-else="" src='@/assets/images/pro-main4.png' alt="feature">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="feature-wrapper mb-30-none owl-thumbs" data-slider-id="1">
                        <div class="feature-item" @click="gamification=1">
                            <div class="feature-thumb">
                                <div class="thumb">
                                    <img src='@/assets/images/pro1.png' alt="feature">
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
                                    <img src='@/assets/images/pro2.png' alt="feature">
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
                                    <img src='@/assets/images/pro3.png' alt="feature">
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
                                    <img src='@/assets/images/pro4.png' alt="feature">
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
            <img src='@/assets/images/top-shape.png' alt="css">
        </div>
        <div class="bottom-shape d-none d-md-block">
            <img src='@/assets/images/bottom-shape.png' alt="css">
        </div>
        <div class="ball-2" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60"
        data-paroller-type="foreground" data-paroller-direction="horizontal">
            <img src='@/assets/images/1.png' alt="balls">
        </div>
        <div class="ball-3" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30"
        data-paroller-type="foreground" data-paroller-direction="horizontal">
            <img src='@/assets/images/2.png' alt="balls">
        </div>
        <div class="ball-4" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30"
        data-paroller-type="foreground" data-paroller-direction="horizontal">
            <img src='@/assets/images/3.png' alt="balls">
        </div>
        <div class="ball-5" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30"
        data-paroller-type="foreground" data-paroller-direction="vertical">
            <img src='@/assets/images/4.png' alt="balls">
        </div>
        <div class="ball-6" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60"
        data-paroller-type="foreground" data-paroller-direction="horizontal">
            <img src='@/assets/images/5.png' alt="balls">
        </div>
        <div class="ball-7" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60"
        data-paroller-type="foreground" data-paroller-direction="vertical">
            <img src='@/assets/images/6.png' alt="balls">
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
                         <div class="radio-flex">
                                <input class="item" type="radio" name="methodePayment">
                                <input class="item" type="radio" name="methodePayment">
                                <input class="item" type="radio" name="methodePayment">
                        </div>
                        <div class="invest-range-area">
                            <div class="invest-amount" data-min="1.00 USD" data-max="1000 USD">
                                <!-- <div id="usd-range" class="invest-range-slider"></div> -->
                            </div>
                        </div>
                    </div>
                    <div class="text-center mb-3 mt-5">
                        <div class="right mb-4">
                            <router-link tag="a" to="/sign_up/sign-up" class="custom-button mb-3">DAFTAR SEKARANG!</router-link>
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
                        <!-- <div class="rating-area">
                            <div class="ratings">
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                            </div>
                            <span class="average">5.0 / 5.0</span>
                        </div> -->
                        <h2 class="amount">62 Kab*</h2>
                        <p>Daerah 3T</p>
                        <p>(Terdepan, Terluar, Tertinggal)</p>
                        <p style="color:#f0c900">*Perpres No. 63 Tahun 2020</p>
                    </div>
                </div>
            </div>
            <!-- <div class="coverage-wrapper coverage_img">
                <div class="border-item-1 text-center">
                    <span class="name">Sumatera Utara</span><br>
                    <h4 class="title">4</h4>
                </div>
                <div class="border-item-2 text-center">
                    <span class="name">Sumatera Barat</span>
                    <h4 class="title">1</h4>
                </div>
                <div class="border-item-3 text-center">
                    <span class="name">Sumatera Selatan</span><br>
                    <h4 class="title">1</h4> -->
                    <!-- <span class="name">Sumatera Selatan<br><h2 style="font-size:20px; line-height:35px">1</h2></span><br> -->
                <!-- </div>
                <div class="border-item-4 text-center"> -->
                    <!-- <p class="name">Lampung</p><br>
                    <h4 class="title">1</h4> -->
                    <!-- <span class="name mt-3">Lampung <br><h2 style="font-size:20px; line-height:35px">1</h2></span><br>
                </div>
                <div class="border-item-5 text-center">
                    <span class="name">Sulawesi Tengah</span>
                    <h4 class="title">1</h4>
                </div>
                <div class="border-item-6 text-center"> -->
                    <!-- <span class="name">Maluku Utara</span>
                    <h4 class="title">2</h4> -->
                    <!-- <span class="name">Maluku Utara <br><h2 style="font-size:15px; line-height:25px">1</h2></span><br>
                </div>
                <div class="border-item-7 text-center"> -->
                    <!-- <span class="name">Nusa Tenggara Barat</span>
                    <h2 class="title">1</h2> -->
                    <!-- <span class="name">Nusa Tenggara Barat<br><h2 style="font-size:15px; line-height:15px">1</h2></span><br>
                </div>
                <div class="border-item-8 text-center"> -->
                    <!-- <span class="name">Nusa Tenggara Timur</span><br>
                    <h2 class="title">13</h2> -->
                    <!-- <span class="name mt-2">Nusa Tenggara Timur<br><h2 style="font-size:20px; line-height:35px">13</h2></span><br>
                </div>
                <div class="border-item-9 text-center"> -->
                    <!-- <span class="name">Maluku</span>
                    <h2 class="title">6</h2> -->
                    <!-- <span class="name mt-2">Maluku <br><h2 style="font-size:20px; line-height:20px">1</h2></span><br>
                </div>
                <div class="border-item-10 text-center"> -->
                    <!-- <span class="name">Papua Barat</span>
                    <h2 class="title">8</h2> -->
                    <!-- <span class="name mt-2">Papua Barat<br><h2 style="font-size:20px; line-height:35px">8</h2></span><br>
                </div>
                <div class="border-item-11 text-center">
                    <span class="name">Papua <br><h2 style="line-height:35px; font-size:30px">22</h2></span><br>
                </div>
            </div> -->
            <div class="row mt-5">
                <div class="col-md">
                    <img src="@/assets/images/map.png" height="auto" width="100%"/> 
                </div>
            </div>  
        </div>
     </section>
     <!--============= Coverage Section Ends Here =============-->

        <!--============= Footer Section Starts Here =============-->
     <footer class="footer-section bg_img_footer" data-background='@/assets/images/footer-bg.jpg'>
        <div class="container">
            <div class="footer-top padding-top padding-bottom">
                <div class="logo">
                    <a href="#0">
                        <img src='@/assets/images/footer-gurukreator-logo.png' alt="logo">
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
