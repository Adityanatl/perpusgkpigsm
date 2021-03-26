<script>
import { Carousel, Slide } from "vue-carousel";
import Vue from 'vue';
import { Tabs, Tab } from 'vue-tabs-component';


global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

/**
 * Crypto ICO-landing page
 */
export default {
//   components: { Carousel, Slide },

  data() {
    return {
        cube: 'https://api.paideia.id/api/files/public/4d2a158022484a43b2e6e805e9d85322cube.png',
        feat1: 'https://api.paideia.id/api/files/public/90207ade8fb247eeaad754eeff5735cbfeat1.png',
        feat2: 'https://api.paideia.id/api/files/public/c7547c5adf4f4077aa8fb02babc8da23feat2.png',
        feat3: 'https://api.paideia.id/api/files/public/44f0392b62f44c65834408e72399f527feat3.png',
        feat4: 'https://api.paideia.id/api/files/public/b0a98cf03b5d49909ea5949c090a5442feat4.png',
        feat5: 'https://api.paideia.id/api/files/public/d9bec11587cd4b439fd6d227b0c66795feat5.png',
        feat6: 'https://api.paideia.id/api/files/public/0b99860300f443279cea48a436eb1106feat6.png',
        feat7: 'https://api.paideia.id/api/files/public/0d04e7f3b19b4797b4e887111c409dc0feat7.png',
        feat8: 'https://api.paideia.id/api/files/public/fc40a19963ed406585a5f2a0e7c88daefeat8.png',
        feat9: 'https://api.paideia.id/api/files/public/e4ff362808d74d1197a99f8159959c79feat9.png',
        feat10: 'https://api.paideia.id/api/files/public/6107558357214e879d30be634da348c4feat10.png',
        feat11: 'https://api.paideia.id/api/files/public/925ce7d17f964cf988038e16888238dafeat11.png',
        kotak1: 'https://api.paideia.id/api/files/public/d45499e8c9924a429dd6b0dc10083f731.png',
        kotak2: 'https://api.paideia.id/api/files/public/27ef2561fdc149bbb0bb91047091533e2.png',
        kotak3: 'https://api.paideia.id/api/files/public/dcb46fec9b744c6fbd8f990680fdba513.png',
        kotak4: 'https://api.paideia.id/api/files/public/bab6c91be7bd4419babf20d6294b6f844.png',
        kotak5: 'https://api.paideia.id/api/files/public/03613c13da7c463ebef2d8cf85c186465.png',
        picA: 'https://api.paideia.id/api/files/public/e1d81069ea244138b6ea6204c0378fbda.png',
        picB: 'https://api.paideia.id/api/files/public/449c56877a5544edacc248e35d87403eb.png',
        picC: 'https://api.paideia.id/api/files/public/df69809b9a154df9aeb83998f3885b48c.png',
        picD: 'https://api.paideia.id/api/files/public/894cd50586004238ad32d7b25974e5b4d.png',
        picE: 'https://api.paideia.id/api/files/public/f5f71d0357a24aacbf669566f221092de.png',
        picF: 'https://api.paideia.id/api/files/public/50306ca5fb5f409891537b2465fc129af.png',
        picG: 'https://api.paideia.id/api/files/public/8ccf368f7d034e50a2b266dbaeb58718g.png',
        logo1: 'https://api.paideia.id/api/files/public/47063a1db9d043c8bb0e46eb74e7b892sponsor1.png',
        logo2: 'https://api.paideia.id/api/files/public/1f83e9810013448fbefd3a29c2e24d0elogowti.png',
        logo3: 'https://api.paideia.id/api/files/public/92081145a7324b5f8e8257200e6ab506logotechinspire.png',
        logo4: 'https://api.paideia.id/api/files/public/c11dd54bc575461dab061146564360f1paideialogo.png',
        logo5: 'https://api.paideia.id/api/files/public/6a2ce089de9f4ed0ad07744b6ba6a24asponsor2.png'
    };
  },
    methods: {
        // windowScroll() {
        // const navbar = document.getElementById("navbar");
        // if (
        //     document.body.scrollTop >= 50 ||
        //     document.documentElement.scrollTop >= 50
        // ) {
        //     navbar.classList.add("nav-sticky");
        // } else {
        //     navbar.classList.remove("nav-sticky");
        // }
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
        }
    }
};

    // $(document).ready(function () {
        // Nice Select
        // $('.select-bar').niceSelect();
        // PoPuP
    //     $('.popup').magnificPopup({
    //     disableOn: 700,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false,
    //     disableOn: 300 
    //     });
    // });

    $(window).on('scroll', function () {
        
        var header = $(".header-section");
      if ($(this).scrollTop() < 1) {
        header.removeClass("active");
      } else {
        header.addClass("active");
      }
    });

    
// new Vue({
//     el : '#app',
//     data : {
//         currentView : 'kreasiku'
//     }
// });

</script>

<template>
    <div>
     <header class=" navigation header-section">
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

    <!--============= Header Section Ends Here =============-->
    <section class="page-header bg_img_feature" data-background="./assets/images/page-header.png">
        <div class="bottom-shape d-none d-md-block">
            <img src='@/assets/images/page-header3.png' alt="css_gurukreator">
        </div>
        <div class="container">
            <div class="page-header-content cl-white">
                <h2 class="title">Guru Kreator</h2>
                <p class="mt-1">Sahabat guru dalam berkreasi</p>
<!--                 <ul class="breadcrumb">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="#0">Pages</a>
                    </li>
                    <li>
                        Features
                    </li>
                </ul> -->
            </div>
        </div>
    </section>
    <!--============= Header Section Ends Here =============-->

    <!--============= Feature Section Starts Here =============-->
    <section class="feature-section padding-top padding-bottom oh">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 col-xl-8">
                    <div class="section-header mw-100">
                        <h5 class="cate">Aplikasi yang memahami kebutuhan Guru</h5>
                        <h2 class="title">Saatnya mewujudkan kreativitas menjadi nyata </h2>
                        <p class="mw-500">Aplikasi yang mengintegrasikan rancangan pembelajaran yang dibangun oleh guru melalui beragam fitur otentik dan menyeluruh (hulu ke hilir).</p>
                    </div>
                </div>
            </div>
            
            <!-- <ul class="nav nav-tabs feature-tab-menu">
                <li>
                    <a  data-toggle="tab" href="#collaboration" class="active">Kreasiku</a>
                </li>
                <li>
                    <a  data-toggle="tab" href="#productivity">Kelasku</a>
                </li>
                <li>
                    <a  data-toggle="tab" href="#integrations">Relungku</a>
                </li>
            </ul> -->

                <!-- <div id="app">
                    <ul class="nav nav-tabs feature-tab-menu">
                        <li><a href="#" @click="currentView='kreasiku'"> Kreasiku </a></li>
                        <li><a href="#" @click="currentView='kelasku'"> Kelasku </a></li>
                        <li><a href="#" @click="currentView='relungku'"> Relungku </a></li>
                    </ul>
                    <component :is="currentView" keep-alive></component>
                </div> -->
            
            <!-- <div class="tab-content"> -->
            <b-tabs pills align="center">
                <b-tab title="Kreasiku"><b-card-text>
                <!-- <div class="tab-pane fade show active" id="collaboration"> -->
                <!-- <template id="kreasiku"> -->
                    <div class="row">
                        <div class="col-lg-6 col-md-10" style="margin-top:100px;">
                            <div class="feature-tab-header">
                                <h3 class="title">Kreasiku</h3>
                                <p>Berkreasi tiada henti. Memudahkan guru merancang apapun yang dibutuhkan.</p>
                            </div>
                        </div>
                    </div>
                    <div class="cola-area">
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img :src="cube" alt="feature_gurukreator">
                                    </div>
                                    <span class="cate">Kreasiku</span>
                                    <h5 class="title">Silabus yang ringkas dan menyeluruh</h5>
                                    <ul>
                                        <li>Rancang dari awal</li>
                                        <li>Gunakan database yang tersedia</li>
                                        <li>Modifikasi format</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-7 col-xl-8">
                                <div class="cola-thumb">
                                    <img :src="feat1" alt="feature_gurukreator">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img :src="cube" alt="feature">
                                    </div>
                                    <span class="cate">Kreasiku</span>
                                    <h5 class="title">Fleksibitas RPP yang melampaui batas</h5>
                                    <ul>
                                        <li>Pilih dan gunakan</li>
                                        <li>Kostumisasi</li>
                                        <li>Ringkas dan praktis</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-7 col-xl-8">
                                <div class="cola-thumb">
                                    <img :src="feat2" alt="feature_gurukreator">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img :src="cube" alt="feature">
                                    </div>
                                    <span class="cate">Kreasiku</span>
                                    <h5 class="title">Penilaian yang memiliki tujuan dan kaya akan pilihan</h5>
                                    <ul>
                                        <li>Penilaian sikap</li>
                                        <li>Penilaian pengetahuan</li>
                                        <li>Penilaian keterampilan</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-7 col-xl-8">
                                <div class="cola-thumb">
                                    <img :src="feat3" alt="feature_gurukreator">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img :src="cube" alt="feature_gurukreator">
                                    </div>
                                    <span class="cate">Kreasiku</span>
                                    <h5 class="title">Bentuk penilaian yang variatif sesuai AKM</h5>
                                    <ul>
                                        <li>Pilihan ganda dan kompleks</li>
                                        <li>Menjodohkan</li>
                                        <li>Isian singkat dan uraian</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-7 col-xl-8">
                                <div class="cola-thumb">
                                    <img :src="feat4" alt="feature_gurukreator">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img :src="cube" alt="feature_gurukreator">
                                    </div>
                                    <span class="cate">Kreasiku</span>
                                    <h5 class="title">Stategi pembelajaran yang tepat sasaran</h5>
                                    <ul>
                                        <li>Beragam pendekatan dan sumber mengajar</li>
                                        <li>Mewadahi individual maupun komunal</li>
                                        <li>Terstruktur, sistematis, dan terencana</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-7 col-xl-8">
                                <div class="cola-thumb">
                                    <img :src="feat5" alt="feature_gurukreator">
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- </template> -->
                </b-card-text></b-tab>
                <!-- </div> -->
                <!-- <div class="tab-pane fade" id="productivity"> -->
                <b-tab title="Kelasku"><b-card-text>


                <!-- <template id="kelasku"> -->
                    <div class="row">
                        <div class="col-lg-6 col-md-10" style="margin-top:100px;">
                            <div class="feature-tab-header">
                                <h3 class="title">Kelasku</h3>
                                <p>Ruang interaksi Guru dan Murid dalam sebuah sistem pembelajaran yang terbuka dan terencana</p>
                            </div>
                        </div>
                    </div>
                    <div class="cola-area">
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img :src="cube" alt="feature_gurukreator">
                                    </div>
                                    <span class="cate">Kelasku</span>
                                    <h5 class="title">Perangkat Ajar</h5>
                                    <ul>
                                        <li>Integerasi Kreasiku dan Kelasku</li>
                                        <li>Administrasi pembelajaran yang terstruktur</li>
                                        <li>Bahan ajar dan sumber belajar</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-7 col-xl-8">
                                <div class="cola-thumb">
                                    <img :src="feat6" alt="feature_gurukreator">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img :src="cube" alt="feature_gurukreator">
                                    </div>
                                    <span class="cate">Kelasku</span>
                                    <h5 class="title">Bahan Ajar</h5>
                                    <ul>
                                        <li>Materi ajar yang terkonsep</li>
                                        <li>Penilaian yang menyeluruh dan real time</li>
                                        <li>Ruang diskusi guru dan siswa</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-7 col-xl-8">
                                <div class="cola-thumb">
                                    <img :src="feat7" alt="feature_gurukreator">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img :src="cube" alt="feature_gurukreator">
                                    </div>
                                    <span class="cate">Kelasku</span>
                                    <h5 class="title">Pelajar</h5>
                                    <ul>
                                        <li>Undang dan tambahkan siswa</li>
                                        <li>Kehadiran dan status</li>
                                        <li>Komunikasi dua arah</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-7 col-xl-8">
                                <div class="cola-thumb">
                                    <img :src="feat8" alt="feature_gurukreator">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img :src="cube" alt="feature_gurukreator">
                                    </div>
                                    <span class="cate">Kelasku</span>
                                    <h5 class="title">Hasil Ajar</h5>
                                    <ul>
                                        <li>Profil Pelajar Pancasila</li>
                                        <li>Analitik individual dan komunal</li>
                                        <li>Format laporan menyeluruh</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-7 col-xl-8">
                                <div class="cola-thumb">
                                    <img :src="feat9" alt="feature_gurukreator">
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- </template> -->
                </b-card-text></b-tab>
                <!-- </div> -->
                <!-- <div class="tab-pane fade" id="integrations"> -->
                <b-tab title="Relungku"><b-card-text>
                <!-- <template id="relungu"> -->
                    <div class="row">
                        <div class="col-lg-6 col-md-10" style="margin-top:100px;">
                            <div class="feature-tab-header">
                                <h3 class="title">Relungku</h3>
                                <p>Ruang berbagi dan kolaborasi sesama guru untuk keberlanjutan kreativitas dan pengembangan potensi diri</p>
                            </div>
                        </div>
                    </div>
                    <div class="cola-area">
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img :src="cube" alt="feature_gurukreator">
                                    </div>
                                    <span class="cate">Relungku</span>
                                    <h5 class="title">3 kemudahan bagi Guru</h5>
                                    <ul>
                                        <li>Bagikan hasil kreasi</li>
                                        <li>Hargai dengan membeli karya Guru lainnya</li>
                                        <li>Bentuk ulang hasil karya yang telah dibeli</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-7 col-xl-8">
                                <div class="cola-thumb">
                                    <img :src="feat10" alt="feature_gurukreator">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img :src="cube" alt="feature_gurukreator">
                                    </div>
                                    <span class="cate">Relungku</span>
                                    <h5 class="title">Kurasi yang teruji</h5>
                                    <ul>
                                        <li>Rancang dan berkreasi</li>
                                        <li>Ajukan untuk dikurasi</li>
                                        <li>Saatnya berbagi dan menikmati hasil</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-7 col-xl-8">
                                <div class="cola-thumb">
                                    <img :src="feat11" alt="feature_gurukreator">
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- </template> -->
                </b-card-text></b-tab>
                <!-- </div> -->
            </b-tabs>
            <!-- </div> -->
        </div>
    </section>
    <!--============= Feature Section Ends Here =============-->


    <!--============= Comunity Section Starts Here =============-->
    <section class="comunity-section padding-top padding-bottom oh pos-rel">
        <div class="comunity-bg bg_img"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-header cl-white">
                        <h5 class="cate">Dapatkan sekarang juga</h5>
                        <h2 class="title">Jadilah Guru Kreator!</h2>
                        <p>Saatnya berkreasi bersama ribuan guru lainnya</p>
                    </div>
                </div>
            </div>
            <div class="comunity-wrapper">
                <div class="buttons"><a target="_blank" href="https://play.google.com/store/apps/details?id=com.paideia.id" class="button-3 active">Unduh SEKARANG <i class="flaticon-right"></i></a></div>
                <div class="comunity-area">
                    <div class="community-item"><img :src="picC" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picG" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak3" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak4" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak5" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak1" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picD" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak3" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak4" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak5" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak1" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak2" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak3" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak4" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picE" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak1" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak2" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak3" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak4" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picA" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picB" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picF" alt="comunity_gurukreator"></div>
                </div>
                <div class="comunity-area two">
                    <div class="community-item"><img :src="picC" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picG" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak3" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak4" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak5" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak1" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picD" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak3" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak4" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak5" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak1" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak2" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak3" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak4" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picE" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak1" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak2" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak3" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak4" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picA" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picB" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picF" alt="comunity_gurukreator"></div>
                </div>
                <div class="comunity-area three">
                    <div class="community-item"><img :src="picC" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picG" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak3" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak4" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak5" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak1" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picD" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak3" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak4" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak5" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak1" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak2" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak3" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak4" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picE" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak1" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak2" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak3" alt="comunity_gurukreator"></div>
                    <div class="comunity-item"><img :src="kotak4" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picA" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picB" alt="comunity_gurukreator"></div>
                    <div class="community-item"><img :src="picF" alt="comunity_gurukreator"></div>
                </div>
            </div>
        </div>
    </section>
    <!--============= Comunity Section Ends Here =============-->

    <!--============= Sponsor Section Section Here =============-->
    <section class="sponsor-section padding-bottom">
        <div class="container">
            <div class="section-header mw-100">
                <h5 class="cate">Aplikasi pendidikan pertama yang menjangkau<br> hampir seluruh wilayah terluar Indonesia</h5>
                <h2 class="title">Sobat Kreator</h2>
            </div>
            <!-- <div class="sponsor-slider-4 owl-theme owl-carousel">
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
            <div class="text-center row">
                <div class="col-md" data-aos="zoom-in-up" data-aos-duration="1500">
                    <img :src="logo2" height="200vw" alt="gurukreator">
                </div>
                <div class="col-md" data-aos="zoom-in-up" data-aos-duration="1500">
                    <img :src="logo4" style="margin-top:65px;" width="200vw" height="55vw" alt="gurukreator">
                </div>
                <div class="col-md" data-aos="zoom-in-up" data-aos-duration="1500">
                    <img :src="logo1" width="200vw" height="200vw" alt="gurukreator">
                </div>
            </div>
            <div class="text-center row">
                <div class="col-md" data-aos="zoom-in-up" data-aos-duration="1500">
                    <img :src="logo5" width="200vw" height="200vw" alt="sponsor_gurukreator">
                </div>
                <!-- <div class="col-md" data-aos="zoom-in-up" data-aos-duration="1500">
                    <img src='@/assets/images/logo-mika.png' width="200vw" height="200vw" alt="sponsor">
                </div> -->
                <div class="col-md" data-aos="zoom-in-up" data-aos-duration="1500">
                    <img :src="logo3" width="200vw" height="200vw" alt="sponsor_gurukreator">
                </div>
            </div>
        </div>
    </section>
    <!--============= Sponsor Section Ends Here =============-->

        <!--============= Footer Section Starts Here =============-->
    <footer class="footer-section bg_img_footer" data-background='@/assets/images/footer-bg.jpg'>
        <div class="container">
            <div class="footer-top padding-top padding-bottom">
                <div class="logo">
                    <router-link tag="a" to="/">
                        <img src='@/assets/images/footer-gurukreator-logo.png' alt="logo_gurukreator">
                    </router-link>
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
                        <router-link tag="a" to="/">Beranda</router-link>
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
    <!-- </div> -->
</template>