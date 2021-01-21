<script>
import { Carousel, Slide } from "vue-carousel";

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
        listProducts: [],
        selectedPrice: 'semester_price',
        picked: null
    };
  },
  created() {
    window.addEventListener("scroll", this.windowScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  },
  mounted() {
      this.getListProduct();
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
    methods: {
        getListProduct(){
            let paramsTemp = queryString.stringify({
                ...{
                    name: null,
                    limit: 17,
                    sort: '-id',
                }
                , ...this.options}
            )
            this.$store.dispatch('product/GET_PRODUCTS',{params:paramsTemp}).then(()=>{
                this.listProducts = this.$store.getters['product/products']
                console.log('this.listProducts ',this.listProducts)
            })
        },
        displayPrice(itemProduct){
            let price = this.selectedPrice=='semester_price'? itemProduct.semester_price: itemProduct.yearly_price / 1000
            if (price < 1000){
                return price + ' k'
            } else {
                return price/1000 + ' m'
            }
        }



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
                        <router-link tag="a" to="/">Home</router-link>
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
                        <router-link tag="a" to="/features/features">Teacher</router-link>
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
                      Supporters
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
                        <a href="contact.html">Contact</a>
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
                <h2 class="title">Supporting Guru Kreator</h2>
                <p class="mt-1">Our contribution for their creation!</p>
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
    <section class="about-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6">
                   <!-- <a href="https://www.youtube.com/watch?v=ObZwFExwzOo" class="feature-video-about popup"> -->
	                <div class="about-thumb rtl pr-xl-15">
	                    <img src='@/assets/images/fature-video.png' alt="feature">
                        <div class="button-area-about">
                            <h4 class="title-about-donatur">
                                Watch Video
                            </h4>
                            <div class="video-button-donatur">
                                <i class="flaticon-play"></i>
                            </div>
                        </div>
	                </div>
	               <!-- </a> -->
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
                <div class="col-xl-6 pl-xl-0">
                    <div class="about-content">

                        <div class="section-header left-style">
                            <h5 class="cate">Our huge homework</h5>
                            <h2 class="title">The accessibility gap for teachers to create must be resolved</h2>
                            <p>With Indonesia’s vast lands and wide-arrayed diversities on the grounds, those at the most forefront and remote are often the most left behind. </p>
                        </div>
                        <div class="counter-area-5">
                            <div class="counter-item-5">
                                <div class="counter-thumb">
                                    <img src='@/assets/images/counter/counter1.png' alt="counter">
                                </div>
                                <div class="counter-content">
                                    <h3 class="title"><span class="counter">120</span><span>k</span></h3>
                                    <p>3T Teacher</p>
                                </div>
                            </div>
                            <div class="counter-item-5">
                                <div class="counter-thumb">
                                    <img src='@/assets/images/counter/counter2.png' alt="counter">
                                </div>
                                <div class="counter-content">
                                    <h3 class="title"><span class="counter">62</span><span>+</span></h3>
                                    <p>Regions</p>
                                </div>
                            </div>
                            <div class="counter-item-5">
                                <div class="counter-thumb">
                                    <img src='@/assets/images/counter/counter3.png' alt="counter">
                                </div>
                                <div class="counter-content">
                                    <h3 class="title"><span class="counter">11</span><span>%</span></h3>
                                    <p>Provinces</p>
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
                        <h5 class="cate">3T should be Turning into Transformative Teachers</h5>
                        <h2 class="title">For they are not alone</h2>
                        <p>
                            We deeply care for people and the processes involved in each of their unique places. Together, supporting them to become Guru Kreator!
                        </p>
                        <div class="how-content">
                            <router-link tag="a" to="/products" class="button-3 active">COUNT ME IN</router-link>
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
                        <h2 class="amount">62 Regions</h2>
                        <p>3T Areas</p>
                        <p>The most outskirt<br>
                        The most forefront<br>
                        The most behind
                        </p>
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
                <h5 class="cate">Ready, set.... collaborate!</h5>
                <h2 class="title">Hand in hand for Guru Kreator</h2>
                <p>
                    Connectivity limitations, administrative burdens, and connection costs can easily be
                    resolved when we work together. Innovations in this digitalization era must be
                    maximized; after all, obstacles are opportunities.
                </p>
            </div>
            <div class="range-wrapper-2">
                <div class="pricing-range pb-1">
                    <div class="pricing-range-top pt-0">
                        <div class="tags-area">
                            <h3 class="tags">We’re in this together</h3>
                        </div>
                        <div class="pricing-header">
                            <span class="cate">Available packages:</span>    
                            <div class="select-container">
                                <select class="select-bar" v-model="selectedPrice">
                                    <option value="semester_price">Semester-based</option>
                                    <option value="yearly_price">Yearly-based</option>
                                </select>
                            </div>
                        </div>
                        <div class="amount-area" id="semester">
                            <div class="row">
                                <div class="col-sm-6" v-for="(itemProduct,index) in listProducts" :key="index" v-if="itemProduct.product_type=='Donasi'">
                                    <div class="item" >
                                        <tr>
                                            <td>
                                                <input  type="radio" name="donaturPrice" :value="itemProduct"  style="width:25px; height:25px; margin-right:10px;" v-model="picked"></td>
                                            <td>
                                                <h2 class="title"><sup>Rp</sup>
                                                    {{ (selectedPrice=='semester_price'? itemProduct.semester_price: itemProduct.yearly_price) < 1000000 ?
                                                    (selectedPrice=='semester_price'? itemProduct.semester_price: itemProduct.yearly_price)/1000+' k': (selectedPrice=='semester_price'? itemProduct.semester_price: itemProduct.yearly_price)/1000000 + ' Mio' }}
                                                </h2>
                                                <span class="info">{{itemProduct.product_name}} -> {{itemProduct.description}}</span></td>
                                        </tr>
                                    </div>


                                </div>

                            </div>

                        </div>


                        <div class="invest-range-area">
                            <div class="invest-amount" data-min="1.00 USD" data-max="1000 USD">
                                <!-- <div id="usd-range" class="invest-range-slider"></div> -->
                            </div>
                        </div>
                    </div>
                    <div class="pricing-range-top pb-3 pt-0">
                        <div class="amount-area">
                            <div class="text-center mt-3">
                                <span class="cate"><b>Payment Method</b></span>
                                <div class="text-center row mt-3">
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" id="one" value="One" name="A" style="width:25px; height:25px; margin-right:10px;" v-model="picked">
                                        <img src="@/assets/images/BCAva.png" width="210vw" height="100vw" alt="">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" id="one" value="One" name="A" style="width:25px; height:25px; margin-right:10px;" v-model="picked">
                                        <img src="@/assets/images/briva.png" width="210vw" height="75vw" alt="">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" id="one" value="One" name="A" style="width:25px; height:25px; margin-right:10px;" v-model="picked">
                                        <img src="@/assets/images/CCAmerican.png" width="180vw" height="70vw" alt="">
                                    </div>
                                </div>
                                <div class="text-center row mt-3">
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" id="one" value="One" name="A" style="width:25px; height:25px; margin-right:10px;" v-model="picked">
                                        <img src="@/assets/images/CCVISA.png" width="180vw" height="80vw" alt="">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" id="one" value="One" name="A" style="width:25px; height:25px; margin-right:10px;" v-model="picked">
                                        <img src="@/assets/images/CCMaster.png" width="180vw" height="70vw" alt="">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" id="one" value="One" name="A" style="width:25px; height:25px; margin-right:10px;" v-model="picked">
                                        <img src="@/assets/images/CCJCB.png" width="180vw" height="75vw" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pricing-range-top pb-3 pt-0">
                        <div class="amount-area">
                            <div class="text-center mt-3">
                                <span class="cate"><b>Personal Information</b></span>
                                <form class="donatur-form">
                                    <div class="mt-3">
                                        <input type="text" placeholder="Nama Lengkap">
                                    </div>
                                    <div class="mt-2">
                                        <input type="text" placeholder="Alamat Email">
                                    </div>
                                    <div class="mt-2 mb-3">
                                        <input type="text" placeholder="Nomor Telepon">
                                    </div>
                                    <i class="mt-2 mb-2">*NOTE: Your contribution will be chanelled to the teachers on the first day of the following month.</i>
                                </form>
                                <div class="right mt-5 mb-5">

                                    <router-link type="submit" tag="a" to="/sign_up/sign-up" class="custom-button mb-3">CONTRIBUTE NOW</router-link>                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
        <!--============= Pricing Section Ends Here =============-->


    <!--============= Creativity Section Starts Here =============-->
    <section class="oh creativity-section padding-bottom bg-max-lg-ash bg_img_testimony top_center" >
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-6 padding-top">
                    <div class="section-header left-style mb-0">

                    </div>
                </div>
<!--                 <div class="col-lg-6 col-xl-4 d-none d-lg-block">
                    <img src="./assets/images/feature/experience.png" alt="feature">
                </div> -->
            </div>
        </div>
    </section>
    <!--============= Creativity Section Ends Here =============-->


     <!--============= History Section Starts Here =============-->
     <section class="history-section padding-top pt-lg-0 padding-bottom-2">
         <div class="container">
             <div class="section-header">

             </div>
             <div class="history-slider owl-theme owl-carousel">

             </div>
         </div>
     </section>
     <!--============= History Section Ends Here =============-->

     <!--============= Testimonial Section Starts Here =============-->
     <section class="testimonial-section padding-top-6 padding-bottom bg-max-lg-ash bg_img_testimony padding-bottom-2">
        <div class="container">
            <div class="section-header">
                <h5 class="cate">Testimonies from the field</h5>
                <h2 class="title">Continuously creating with 
                    innovative technology</h2>
            </div>
            <div class="testimonial-wrapper mb-5">
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
                                <img src='@/assets/images/donatur/mintarsih_circle_img.png' alt="client">
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
                                Guru Kreator is an innovation that helps teachers in this digital era.
                                Its engaging content makes it easier for teachers
                                to create lesson dan unit plans.
                            </p>
                            <h5 class="title" style="line-height:35px"><a href="#0">Mintarsih<br><p style="font-size:15px">Semarang, Central Java</p></a></h5>
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
                        <router-link tag="a" to="/">Home
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/features/features">Teacher
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/">Supporters
                        </router-link>
                    </li>
                    <li>
                        <a href="#0">Contacts</a>
                    </li>
                    <li>
                        <a href="#0">Privacy Policy</a>
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
