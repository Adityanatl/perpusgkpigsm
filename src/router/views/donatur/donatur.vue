<script>
import { Carousel, Slide } from "vue-carousel";

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
      endtime: "Dec 31, 2020 16:37:25"
    };
  },
  created() {
    window.addEventListener("scroll", this.windowScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  }
};
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
                        <a href="#0">Guru</a>
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
                <router-link tag="a" to="/login" class="header-button d-none d-sm-inline-block">SIGN UP/LOGIN</router-link>
            </div>
        </div>
    </header>
    <!--============= Header Section Ends Here =============-->

    <!--============= Header Section Ends Here =============-->
    <section class="page-header bg_img" data-background="./assets/images/page-header.png">
        <div class="bottom-shape d-none d-md-block">
            <img src='@/assets/images/page-header.png' alt="css">
        </div>
        <div class="container">
            <div class="page-header-content cl-white">
                <h2 class="title">Dukung Guru Kreator</h2>
                <p class="mt-1 mb-3">Berkolaborasi mewujudnyatakan mereka untuk berkreasi</p>
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

    <!--============= About Section Starts Here =============-->
    <section class="about-section padding-top padding-bottom oh">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-7">
                   <a href="https://www.youtube.com/watch?v=ObZwFExwzOo" class="feature-video-about popup">
	                <div class="about-thumb rtl pr-xl-15">
	                    <img src='@/assets/images/feature/fature-video.png' alt="feature">
	                </div>
	                <div class="button-area-about">
	                    <h4 class="title-about">
	                        Watch Videos
	                    </h4>
	                    <div class="video-button">
	                        <i class="flaticon-play"></i>
	                    </div>
	                </div>
	               </a>
                </div>
<!--                 <div class="col-xl-6">
                    <a href="https://www.youtube.com/watch?v=ObZwFExwzOo" class="feature-video-area popup">
                        <div class="about-thumb rtl pr-xl-15">
                            <img src="./assets/images/feature/fature-video.png" alt="feature">
                        </div>
                        <div class="button-area">
                            <h4 class="title">
                                Watch Videos
                            </h4>
                            <div class="video-button">
                                <i class="flaticon-play"></i>
                            </div>
                        </div>
                    </a>
                </div> -->
                <div class="col-xl-5 pl-xl-0">
                    <div class="about-content">

                        <div class="section-header left-style">
                            <h5 class="cate">Paideia Rumah Bersama</h5>
                            <h2 class="title">Kesenjangan akses guru dalam berkreasi adalah sesuatu yang perlu diatasi</h2>
                            <p>Dengan wilayah yang begitu luas dan keberagaman di lapangan, para guru di garda terdepan dan terluar yang kerap
                            kali justru jadi yang tertinggal.</p>
                        </div>
                        <div class="counter-area-5">
                            <div class="counter-item-5">
                                <div class="counter-thumb">
                                    <img src='@/assets/images/counter/counter1.png' alt="counter">
                                </div>
                                <div class="counter-content">
                                    <h3 class="title"><span class="counter">120</span><span>k</span></h3>
                                    <p>Guru 3T</p>
                                </div>
                            </div>
                            <div class="counter-item-5">
                                <div class="counter-thumb">
                                    <img src='@/assets/images/counter/counter2.png' alt="counter">
                                </div>
                                <div class="counter-content">
                                    <h3 class="title"><span class="counter">62</span><span>+</span></h3>
                                    <p>Kabupaten</p>
                                </div>
                            </div>
                            <div class="counter-item-5">
                                <div class="counter-thumb">
                                    <img src='@/assets/images/counter/counter3.png' alt="counter">
                                </div>
                                <div class="counter-content">
                                    <h3 class="title"><span class="counter">11</span><span>%</span></h3>
                                    <p>Provinsi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--============= About Section Ends Here =============-->

        <!--============= Coverage Section Starts Here =============-->
     <section class="coverage-section padding-top padding-bottom" id="coverage">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7">
                    <div class="section-header left-style coverage-header">
                        <h5 class="cate">Wujudkan 3T menjadi Terluar Tapi Terdepan!</h5>
                        <h2 class="title">Karena mereka tidak sendiri   </h2>
                        <p>
                            Kami sangat peduli atas hidup setiap insan dan bagaimana mereka berproses dalam keunikan keberadaan mereka. Mari bersama, wujudkan mereka menjadi Guru Kreator! Jadilah donatur:
                        </p>
                        <div class="how-content">
                            <router-link tag="a" to="/products" class="button-3 active">Dukung Guru 3T</router-link>
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
                        <h2 class="amount">62 Kab</h2>
                        <p>Daerah 3T</p>
                        <p>(Tertinggal, Terdepan, Terluar)</p>
                    </div>
                </div>
            </div>
            <div class="coverage-wrapper coverage_img">
                <div class="border-item-1 text-center">
                    <span class="name">Sumatera Utara</span><br>
                    <h4 class="title">4</h4>
                </div>
                <div class="border-item-2 text-center">
                    <span class="name">Sumatera Barat</span>
                    <h4 class="title">1</h4>
                </div>
                <div class="border-item-3 text-center">
                    <span class="name">Sumatera Selatan</span>
                    <h4 class="title">1</h4>
                </div>
                <div class="border-item-4 text-center">
                    <span class="name">Lampung</span>
                    <h4 class="title">1</h4>
                </div>
                <div class="border-item-5 text-center">
                    <span class="name">Sulawesi Tengah</span>
                    <h4 class="title">1</h4>
                </div>
                <div class="border-item-6 text-center">
                    <span class="name">Maluku Utara</span>
                    <h4 class="title">2</h4>
                </div>
                <div class="border-item-7">
                    <span class="name">Nusa Tenggara Barat</span>
                    <h2 class="title">1</h2>
                </div>
                <div class="border-item-8">
                    <span class="name">Nusa Tenggara Timur</span>
                    <h2 class="title">13</h2>
                </div>
                <div class="border-item-9">
                    <span class="name">Maluku</span>
                    <h2 class="title">6</h2>
                </div>
                <div class="border-item-10">
                    <span class="name">Papua Barat</span>
                    <h2 class="title">8</h2>
                </div>
                <div class="border-item-11">
                    <span class="name">Papua</span>
                    <h2 class="title">22</h2>
                </div>
            </div>
        </div>
     </section>
     <!--============= Coverage Section Ends Here =============-->

        <!--============= Pricing Section Starts Here =============-->
     <section class="pricing-section padding-top oh padding-bottom pb-md-0 bg_img pos-rel" data-background="./assets/images/bg/pricing-bg.jpg" id="pricing">
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
                <h2 class="title">Biaya langgan yang sangat menguntungkan</h2>
                <p>
                    Kami percaya, bahwa pendidikan adalah untuk semua. Untuk itu, dengan biaya yang sangat terjangkau, aplikasi ini dapat dinikmati oleh siapa saja dengan biaya berlanggann Rp. 20.000/bulannya
                </p>
            </div>
            <div class="range-wrapper-2">
                <div class="pricing-range">
                    <div class="pricing-range-top pt-0">
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
                        <div class="amount-area">
                            <div class="item">
                                <h2 class="title"><sup>Rp</sup>20.000</h2>
                                <span class="info">Per Bulan</span>
                            </div>
                            <div class="item">
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
                        <div class="invest-range-area">
                            <div class="invest-amount" data-min="1.00 USD" data-max="1000 USD">
                                <!-- <div id="usd-range" class="invest-range-slider"></div> -->
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-3">
                        <div class="right mb-4">
                            <router-link tag="a" to="/sign_up/sign-up" class="custom-button mb-3">DAFTAR SEKARANG!</router-link>
                            <ul class="download-options mb-4">
                                <li>
                                    <a href="#0"><i class="fab fa-android"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
        <!--============= Pricing Section Ends Here =============-->

     <!--============= Testimonial Section Starts Here =============-->
     <section class="testimonial-section padding-top-6 padding-bottom bg-max-lg-ash bg_img padding-bottom-2" data-background='@/assets/images/feature/creative-bg.png'>
        <div class="container">
            <div class="section-header">
                <h5 class="cate">Kesan Guru Kreator</h5>
                <h2 class="title">Aplikasi dengan low bandwith connectivity, berkreasi tanpa berhenti...</h2>
            </div>
            <div class="testimonial-wrapper">
                <a href="#0" class="testi-next trigger">
                    <img src='@/assets/images/client/left.png' alt="client">
                </a>
                <a href="#0" class="testi-prev trigger">
                    <img src='@/assets/images/client/right.png' alt="client">
                </a>
                <div class="testimonial-area testimonial-slider owl-carousel owl-theme">
                    <div class="testimonial-item">
                        <div class="testimonial-thumb">
                            <div class="thumb">
                                <img src='@/assets/images/client/client1.jpg' alt="client">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="ratings">
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                            </div>
                            <p>
                                Guru Kreator merupakan inovasi yang dapat membantu guru di era digital. Kontennya menarik dan memudahkan
                                bagi para guru dalam membuat perangkat pembelajaran.
                            </p>
                            <h5 class="title"><a href="#0">Mintarsih - Semarang</a></h5>
                        </div>
                    </div>
                </div>
<!--                 <div class="button-area">
                    <a href="#0" class="button-2">Leave a review <i class="flaticon-right"></i></a>
                </div> -->
            </div>
        </div>
    </section>
    <!--============= Testimonial Section Ends Here =============-->
      
        <!--============= Footer Section Starts Here =============-->
     <footer class="footer-section bg_img" data-background='@/assets/images/footer-bg.jpg'>
        <div class="container">
            <div class="footer-top padding-top padding-bottom">
                <div class="logo">
                    <a href="#0">
                        <img src='@/assets/images/footer-gurukreator-logo.png' alt="logo">
                    </a>
                </div>
                <ul class="social-icons">
                    <li>
                        <a href="#0"><i class="fab fa-facebook-f"></i></a>
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
                        <a href="#0"><i class="fab fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
            <div class="footer-bottom">
                <ul class="footer-link">
                    <li>
                        <router-link tag="a" to="/">Beranda
                        </router-link>
                    </li>
                    <li>
                        <a href="#0">Guru</a>
                    </li>
                    <li>
                        <router-link tag="a" to="/">Donatur
                        </router-link>
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
</template>