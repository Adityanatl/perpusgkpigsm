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

    };
  },

};

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
     <header class="header-section">
        <div class="container">
            <div class="header-wrapper">
                <div class="logo">
                    <router-link tag="a" to="/">
                        <img src='@/assets/images/footer-gurukreator-logo.png' alt="logo">
                    </router-link>
                </div>
                <ul class="menu">
                    <li>
                        <router-link tag="a" to="/">Beranda</router-link>
                        <!-- <ul class="submenu">
                            <li>
                                <a href="#0">Home Apps</a>
                                <ul class="submenu">
                                    <li>
                                        <a href="index.html">Mobile App 1</a>
                                    </li>
                                    <li>
                                        <a href="index-2.html">Mobile App 2</a>
                                    </li>
                                    <li>
                                        <a href="index-3.html">Mobile App 3</a>
                                    </li>
                                    <li>
                                        <a href="index-4.html">Mobile App 4</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">Home Messenger</a>
                                <ul class="submenu">
                                    <li>
                                        <a href="index-5.html">Messenger 1</a>
                                    </li>
                                    <li>
                                        <a href="index-6.html">Messenger 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">Home Web</a>
                                <ul class="submenu">
                                    <li>
                                        <a href="index-7.html">Web 1</a>
                                    </li>
                                    <li>
                                        <a href="index-8.html">Web 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">Home Dextop</a>
                                <ul class="submenu">
                                    <li>
                                        <a href="index-9.html">Dextop 1</a>
                                    </li>
                                    <li>
                                        <a href="index-10.html">Dextop 2</a>
                                    </li>
                                    <li>
                                        <a href="index-11.html">Dextop 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">Home Watchapp</a>
                                <ul class="submenu">
                                    <li>
                                        <a href="index-12.html">Watchapp 1</a>
                                    </li>
                                    <li>
                                        <a href="index-13.html">Watchapp 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">Home Hero Video</a>
                                <ul class="submenu">
                                    <li>
                                        <a href="index-14.html">Hero Video 1</a>
                                    </li>
                                    <li>
                                        <a href="index-15.html">Hero Video 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="./index-16.html">Home 16 <span class="badge badge-primary align-self-center">New</span></a>
                            </li>
                        </ul> -->
                    </li>
                    <li>
                        <router-link tag="a" to="/features/features">Guru</router-link>
                        <!-- <ul class="submenu">
                            <li>
                                <a href="feature.html">Feature 1</a>
                            </li>
                            <li>
                                <a href="feature-2.html">Feature 2</a>
                            </li>
                            <li>
                                <a href="feature-3.html">Feature 3</a>
                            </li>
                        </ul> -->
                    </li>
                    <li>
                    <router-link tag="a" to="/donatur">
                      Donatur
                      <!-- <i class="mdi mdi-arrow-right ml-1"></i> -->
                    </router-link>                    </li>
                    <!-- <li>
                        <a href="#0">Pages</a>
                        <ul class="submenu">
                            <li>
                                <a href="about.html">about</a>
                            </li>
                            <li>
                                <a href="app-download.html">app download</a>
                            </li>
                            <li>
                                <a href="#0">Team</a>
                                <ul class="submenu">
                                    <li>
                                        <a href="team.html">Team</a>
                                    </li>
                                    <li>
                                        <a href="team-single.html">Team Single</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">Account</a>
                                <ul class="submenu">
                                    <li>
                                        <a href="sign-up.html">Sign Up</a>
                                    </li>
                                    <li>
                                        <a href="sign-in.html">Sign In</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="faqs.html">FAQs</a>
                            </li>
                            <li>
                                <a href="partners.html">Partners</a>
                            </li>
                            <li>
                                <a href="privacy-policy.html">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="coming-soon.html">Coming Soon</a>
                            </li>
                            <li>
                                <a href="change-password.html">Change Password</a>
                            </li>
                            <li>
                                <a href="reset-password.html">Password Reset</a>
                            </li>
                            <li>
                                <a href="reviews.html">review</a>
                            </li>
                            <li>
                                <a href="404.html">404</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#0">Blog</a>
                        <ul class="submenu">
                            <li>
                                <a href="blog.html">blog style 1</a>
                            </li>
                            <li>
                                <a href="blog-type-two.html">blog style 1</a>
                            </li>
                            <li>
                                <a href="blog-single-1.html">blog Single 1</a>
                            </li>
                            <li>
                                <a href="blog-single-2.html">blog Single 2</a>
                            </li>
                        </ul>
                    </li> -->
                    <li>
                        <a href="contact.html">Kontak</a>
                    </li>
                    <li class="d-sm-none">
                        <a href="#0" class="m-0 header-button">SIGN UP/LOGIN</a>
                    </li>
                </ul>
                <div class="header-bar d-lg-none">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="header-right">
                    <select class="select-bar">
                        <option value="en">En</option>
                        <option value="Bn">Bn</option>
                        <option value="pk">Pk</option>
                        <option value="Fr">Fr</option>
                    </select>
                </div>
                <router-link tag="a" to="/sign_in/sign-in" class="header-button d-none d-sm-inline-block">SIGN UP/LOGIN</router-link>
            </div>
        </div>
    </header>
    <!--============= Header Section Ends Here =============-->

    <!--============= Header Section Ends Here =============-->
    <section class="page-header bg_img_feature" data-background="./assets/images/page-header.png">
        <div class="bottom-shape d-none d-md-block">
            <img src='@/assets/images/page-header3.png' alt="css">
        </div>
        <div class="container">
            <div class="page-header-content cl-white">
                <h2 class="title">Guru Kreator</h2>
                <p class="mt-1">Sahabat Guru dalam berkreasi</p>
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
                                <p>Berkreasi tiada henti. Memudahkan Guru merancang apapun yang dibutuhkan</p>
                            </div>
                        </div>
                    </div>
                    <div class="cola-area">
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img src='@/assets/images/cube.png' alt="feature">
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
                                    <img src='@/assets/images/feat1.png' alt="feature">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img src='@/assets/images/cube.png' alt="feature">
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
                                    <img src='@/assets/images/feat2.png' alt="feature">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img src='@/assets/images/cube.png' alt="feature">
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
                                    <img src='@/assets/images/feat3.png' alt="feature">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img src='@/assets/images/cube.png' alt="feature">
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
                                    <img src='@/assets/images/feat4.png' alt="feature">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img src='@/assets/images/cube.png' alt="feature">
                                    </div>
                                    <span class="cate">Kreasiku</span>
                                    <h5 class="title">Stategi pembelajaran yang tepat sasaran</h5>
                                    <ul>
                                        <li>Beragam pendekatan dan sumber mengajar</li>
                                        <li>Mewadahi individual maupun komunal</li>
                                        <li>Terstruktur, sistematis dan terencana</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-7 col-xl-8">
                                <div class="cola-thumb">
                                    <img src='@/assets/images/feat5.png' alt="feature">
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
                                        <img src='@/assets/images/cube.png' alt="feature">
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
                                    <img src='@/assets/images/feat6.png' alt="feature">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img src='@/assets/images/cube.png' alt="feature">
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
                                    <img src='@/assets/images/feat7.png' alt="feature">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img src='@/assets/images/cube.png' alt="feature">
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
                                    <img src='@/assets/images/feat8.png' alt="feature">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img src='@/assets/images/cube.png' alt="feature">
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
                                    <img src='@/assets/images/feat9.png' alt="feature">
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
                                        <img src='@/assets/images/cube.png' alt="feature">
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
                                    <img src='@/assets/images/feat10.png' alt="feature">
                                </div>
                            </div>
                        </div>
                        <div class="cola-item">
                            <div class="col-md-6 col-lg-5 col-xl-4">
                                <div class="cola-content">
                                    <div class="thumb">
                                        <img src='@/assets/images/cube.png' alt="feature">
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
                                    <img src='@/assets/images/feat11.png' alt="feature">
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
                        <p>Saatnya berkreasi bersama ribuan guru lainnya.</p>
                    </div>
                </div>
            </div>
            <div class="comunity-wrapper">
                <div class="buttons"><a href="#0" class="button-3 active">Unduh SEKARANG <i class="flaticon-right"></i></a></div>
                <div class="comunity-area">
                    <div class="community-item"><img src='@/assets/images/comunity/c.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/g.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/3.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/4.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/5.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/1.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/d.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/3.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/4.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/5.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/1.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/2.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/3.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/4.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/e.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/1.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/2.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/3.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/4.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/a.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/b.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/f.png' alt="comunity"></div>
                </div>
                <div class="comunity-area two">
                    <div class="community-item"><img src='@/assets/images/comunity/c.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/g.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/3.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/4.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/5.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/1.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/d.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/3.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/4.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/5.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/1.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/2.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/3.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/4.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/e.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/1.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/2.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/3.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/4.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/a.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/b.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/f.png' alt="comunity"></div>
                </div>
                <div class="comunity-area three">
                    <div class="community-item"><img src='@/assets/images/comunity/c.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/g.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/3.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/4.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/5.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/1.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/d.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/3.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/4.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/5.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/1.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/2.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/3.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/4.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/e.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/1.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/2.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/3.png' alt="comunity"></div>
                    <div class="comunity-item"><img src='@/assets/images/comunity/4.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/a.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/b.png' alt="comunity"></div>
                    <div class="community-item"><img src='@/assets/images/comunity/f.png' alt="comunity"></div>
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
                    <img src="@/assets/images/logo/logo_wti.png" width="200vw" height="200vw" alt="">
                </div>
                <div class="col-md" data-aos="zoom-in-up" data-aos-duration="1500">
                    <img src="@/assets/images/logo/paideia-logo.png" style="margin-top:65px;" width="200vw" height="70vw" alt="">
                </div>
                <div class="col-md" data-aos="zoom-in-up" data-aos-duration="1500">
                    <img src="@/assets/images/logo/refo.png" width="200vw" height="200vw" alt="">
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
                        <img src='@/assets/images/footer-gurukreator-logo.png' alt="logo">
                    </router-link>
                </div>
                <ul class="social-icons">
                    <li>
                        <a href="https://www.facebook.com/gurukreator"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <!-- <li>
                        <a href="#0" class="active"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#0"><i class="fab fa-pinterest-p"></i></a>
                    </li>
                    <li>
                        <a href="#0"><i class="fab fa-google-plus-g"></i></a>
                    </li> -->
                    <li>
                        <a href="https://www.instagram.com/gurukreator/"><i class="fab fa-instagram"></i></a>
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
                    <li>
                        <a href="#0">Kontak</a>
                    </li>
                    <li>
                        <a href="#0">Kebijakan Privasi</a>
                    </li>
                </ul>
            </div>
            <div class="copyright">
                <p>
                    Copyright © 2020.All Rights Reserved By <a href="https://paideia.id/" style="color:#0b507d">PAIDEIA</a>
                </p>
            </div>
        </div>
    </footer>
    <!--============= Footer Section Ends Here =============-->
    </div>
    <!-- </div> -->
</template>