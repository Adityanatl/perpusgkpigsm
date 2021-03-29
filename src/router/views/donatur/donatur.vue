<script>
import { Carousel, Slide } from "vue-carousel";
import Vue from "vue";
import '@/assets/js/magnific-popup.min.js';
import SliderFrame from '@/components/SliderFrame';
import SliderSlide from '@/components/SliderSlide.vue';
import SliderSlides from '@/components/SliderSlides.vue';
// import '@/assets/js/intlTelInput-jquery.min.js'
// import VuePhoneNumberInput from 'vue-phone-number-input';
// import 'vue-phone-number-input/dist/vue-phone-number-input.css';


global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

/**
 * Crypto ICO-landing page
 */
export default {
  components: { Carousel, Slide, SliderFrame, SliderSlide, SliderSlides, },
//   script: [{
//         src: "https://code.jquery.com/jquery-latest.min.js"
//     }
//   ],
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
        listProducts: [{"id": 1, "product_type": "Personal", "product_name": "Monthly", "price": 20000, "semester_price": 100000, "yearly_price": 200000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 2, "image_url": "", "description": "Akses semua fitur Guru Kreator (Kelasku, Kreasiku dan Relungku) untuk 1 jenjang pendidikan selama 1 bulan tanpa batasan eksport dokumen (pdf)", "narasi": "", "recommended": false}, {"id": 2, "product_type": "Donasi", "product_name": "Kakaktua Putih", "price": 50000, "semester_price": 300000, "yearly_price": 600000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 1, "image_url": "https://api.paideia.id/api/files/public/7fe51049c6be40ffadc00ac914db9372Kakatua.png", "description": "3 Guru Kreator", "narasi": "indigenous of Maluku", "recommended": false}, {"id": 3, "product_type": "Donasi", "product_name": "Cendrawasih", "price": 84000, "semester_price": 500000, "yearly_price": 1000000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "https://api.paideia.id/api/files/public/9932dd7df8ed4e808100bd2ae6c2fcc8cendrawasih.png", "description": "5 Guru Kreator", "narasi": "indigenous of Papua", "recommended": false}, {"id": 10, "product_type": "Personal", "product_name": "Semester", "price": 100000, "semester_price": null, "yearly_price": null, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "", "description": "Akses semua fitur Guru Kreator (Kelasku, Kreasiku dan Relungku) untuk 1 jenjang pendidikan selama 6 bulan tanpa batasan eksport dokumen (pdf)", "narasi": "", "recommended": false}, {"id": 4, "product_type": "Donasi", "product_name": "Kucing Merah", "price": 167000, "semester_price": 1000000, "yearly_price": 2000000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "https://api.paideia.id/api/files/public/85fef261d9d44c28aeb54180e7ff0605kucingmerah.png", "description": "10 Guru Kreator", "narasi": "indigenous of Kalimantan", "recommended": false}, {"id": 11, "product_type": "Personal", "product_name": "Yearly", "price": 200000, "semester_price": null, "yearly_price": null, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "", "description": "Akses semua fitur Guru Kreator (Kelasku, Kreasiku dan Relungku) untuk 1 jenjang pendidikan selama 1 tahun tanpa batasan eksport dokumen (pdf)", "narasi": "", "recommended": true}, {"id": 5, "product_type": "Donasi", "product_name": "Anoa", "price": 833000, "semester_price": 5000000, "yearly_price": 10000000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "https://api.paideia.id/api/files/public/f5bf7c071be147609a942e34b256b588anoa.png", "description": "50 Guru Kreator", "narasi": "indigenous of Sulawesi", "recommended": false}, {"id": 6, "product_type": "Donasi", "product_name": "Macan", "price": 1670000, "semester_price": 10000000, "yearly_price": 20000000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "https://api.paideia.id/api/files/public/03046e0d5e944541800832f51984a58bmacan.png", "description": "100 Guru Kreator", "narasi": " indigenous of Sumatera", "recommended": false}, {"id": 7, "product_type": "Donasi", "product_name": "Badak", "price": 4170000, "semester_price": 25000000, "yearly_price": 50000000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "https://api.paideia.id/api/files/public/4f616ec1bcd64a7ba756b6b8e11080bdbadak.png", "description": "250 Guru Kreator", "narasi": " indigenous of Jawa", "recommended": false}, {"id": 8, "product_type": "Donasi", "product_name": "Gajah", "price": 8300000, "semester_price": 50000000, "yearly_price": 100000000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "https://api.paideia.id/api/files/public/d2e15973a771410d95017adad4526aa1gajah.png", "description": "500 Guru Kreator", "narasi": " indigenous of Sumatera", "recommended": false}, {"id": 9, "product_type": "Donasi", "product_name": "Komodo", "price": 16700000, "semester_price": 100000000, "yearly_price": 200000000, "account_id": 0, "reference_id": 0, "month": 0, "status": 0, "viewed": 0, "sold": 0, "image_url": "https://api.paideia.id/api/files/public/a29cafbf74704c1eb2c65c9144bb44fekomodo.png", "description": "1000 Guru Kreator", "narasi": " indigenous of NTT", "recommended": true} ],
        selectedPrice: 'semester_price',
        pickedProduct: null,

        payload:{
            "product_id":0,
            "qty":0,
            "price":0,
            "payment_methode_id":0,
            "transaction_id":null,
            "name":"",
            "email":"",
            "hp":"",
            "country":"ID"
        },
        directHTML:'',
      video: 'https://api.paideia.id/api/files/public/91221555db7c4016996ca7dd0ccacb07faturevideo.png',
      counter1: 'https://api.paideia.id/api/files/public/90dbd00c7c664fa3829aabc3d36fb920counter1.png',
      counter2: 'https://api.paideia.id/api/files/public/c48acd1fcb6f45ceac7f74b3498e7379counter2.png',
      counter3: 'https://api.paideia.id/api/files/public/768429f490404c33b1d85f24493be7d8counter3.png',
      map: 'https://api.paideia.id/api/files/public/06d98a7e50a24fea99aba7c17a69bfbbmap.png',
      map_donatur: 'https://api.paideia.id/api/files/public/951d6a143f3f481ba2d9e3a864558fa2mappingdonatur.png',
      payment1: 'https://api.paideia.id/api/files/public/172626a2f93e4fce8f456a3c001956d9BankBni.png',
      payment2: 'https://api.paideia.id/api/files/public/64961531bc184d1bb87df106ba9611f0mandiri.png',
      payment3: 'https://api.paideia.id/api/files/public/3bf55d02650644b39db4646ae5a91177permatabank.png',
      payment4: 'https://api.paideia.id/api/files/public/e2a5197b6d7a4898874f19d9643f95bcBankBCA.png',
      payment5: 'https://api.paideia.id/api/files/public/68e4fe640ace46ea808a1dbaaf24d22cdanamondonatur.png',
      payment6: 'https://api.paideia.id/api/files/public/ed8a5458a3cf4f3fab5a4d09de6e0223cimbdonatur.png',
      payment7: 'https://api.paideia.id/api/files/public/4a4032a5fdd14c538f00a41dc3c9b39bmaybankdonatur.png',
      payment8: 'https://api.paideia.id/api/files/public/a854cb8750ea45449b25d4dee3b8ab4bsinarmasdonatur.png',
      payment9: 'https://api.paideia.id/api/files/public/b00b613c02bf4a0bb4b08a6556e733c3creditCard.png',
      payment10: 'https://api.paideia.id/api/files/public/7ff4644fa2274bf0811487d61f0531e9ovo.png',
      payment11: 'https://api.paideia.id/api/files/public/7874bb85bac04615a466e4ec6a0a0367dana.png',
      payment12: 'https://api.paideia.id/api/files/public/40ae9df91750480382944d0a295ec9fblinkaja.png',
      ball1: 'https://api.paideia.id/api/files/public/f63dc8cb5e644bc8af6421e23cc139d41.png',
      ball2: 'https://api.paideia.id/api/files/public/76f044c80b354d70971b1d2a8c680b262.png',
      ball3: 'https://api.paideia.id/api/files/public/ea1da180c8e64662a8bfc3c440d61b8b3.png',
      ball4: 'https://api.paideia.id/api/files/public/6f1a4977a9674a0a9fdeca56a9457e4a4.png',
      ball5: 'https://api.paideia.id/api/files/public/2279e5b755494b4988cd3336fbed18af5.png',
      ball6: 'https://api.paideia.id/api/files/public/451555d44d474631afdc658fa49d5cd26.png'
    };
  },
  created() {
    window.addEventListener("scroll", this.windowScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  },
  mounted() {
      // this.getListProduct();
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
                    sort: '1',
                }
                , ...this.options}
            )
            this.$store.dispatch('product/GET_PRODUCTS',{params:paramsTemp}).then(()=>{
                this.listProducts = this.$store.getters['product/products']
            })
        },
        displayPrice(itemProduct){
            let price = this.selectedPrice=='semester_price'? itemProduct.semester_price: itemProduct.yearly_price / 1000
            if (price < 1000){
                return price + ' k'
            } else {
                return price/1000 + ' m'
            }
        },
        successmsg() {
            Vue.swal({
                position: "top-end",
                icon: "success",
                title: "Your transaction has been proceed",
                showConfirmButton: false,
                timer: 1500
            });
        },
        postCheckout(){
            if (this.pickedProduct == null){
                alert("Silahkan pilih Berkontribusi")
                return
            }
            this.payload.product_id = this.pickedProduct.id
            this.payload.qty = 1

            if (this.selectedPrice=='semester_price') {
                this.payload.price = this.pickedProduct.semester_price
            } else {
                this.payload.price = this.pickedProduct.yearly_price
            }

            this.$store.dispatch(
                'transaction/POST_TRANSACTION', this.payload
            ).then(() => {
                let resp = this.$store.getters['transaction/transaction']
                this.successmsg()
                // window.location = resp.redirect_url
                if (resp.direct === true) {
                    this.directHTML = resp.direct_value

                    setTimeout(()=> document.getElementById("paideiaForm").submit(),1000)

                } else {

                    window.location = resp.redirect_url
                }
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
        timerCount: function(start, end) {
            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = start - now;
            var passTime = end - now;

            if (distance < 0 && passTime < 0) {
                clearInterval(this.interval);
                return;
            } else if (distance < 0 && passTime > 0) {
                this.calcTime(passTime);
            } else if (distance > 0 && passTime > 0) {
                this.calcTime(distance);
            }
        },

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
        },
        countryChanged(country) {
            this.payload.country = country.iso2
        },
    },

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
    // jQuery
//     $("#telephone").intlTelInput({
//     allowDropdown:true,
//     initialCountry:"",
//     utilsScript:""
//     });

//     input.addEventListener("countrychange",function() {
//   // do something with iti.getSelectedCountryData()
//     });

//     input.addEventListener("open:countrydropdown",function() {
//     // triggered when the user opens the dropdown
//     });

//     input.addEventListener("close:countrydropdown",function() {
//     // triggered when the user closes the dropdown
//     });

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
                        <router-link tag="a" to="/">Home</router-link>
                    </li>
                    <li><router-link tag="a" to="/features/features">Teacher</router-link></li>
                    <li><router-link tag="a" to="/donatur">Supporter</router-link></li>
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
                        <router-link tag="a" to="/" style="color:#ffffff">Home</router-link>
                        </li><hr>
                        <li class="nav-item">
                        <router-link tag="a" to="/features/features" style="color:#ffffff">Teacher</router-link>
                        </li><hr>
                        <li class="nav-item">
                        <router-link tag="a" to="/donatur" style="color:#ffffff">Supporter</router-link>
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
    <section class="about-section mt-5">
        <div class="container">
            <div class="row ">
                <!-- <div class="col-xl-12"> -->
                    <div class="video-donatur col-xl-6">
                        <a href="https://www.youtube.com/watch?v=kkpuq3m0Em4" class="features-video-area popup">
                            <div class="thumb rtl pr-xl-15">
                                <img :src="video" alt="feature_gurukreator">
                            </div>
                            <div class="button-area">
                                <h4 class="title-about-donatur">
                                    Watch Video
                                </h4>
                                <div class="video-button-donatur">
                                    <i class="flaticon-play"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <!-- <div class="col-xl-6">
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
                    <div class="col-xl-6">
                        <div class="about-content">

                            <div class="section-header left-style">
                                <h5 class="cate">Our Huge Homework</h5>
                                <h2 class="title">The accessibility gap for teachers to create must be resolved</h2>
                                <p>With Indonesia’s vast lands and wide-arrayed diversities on the grounds, those at the most forefront and remote are often the most left behind. </p>
                            </div>
                            <div class="counter-area-5">
                                <div class="counter-item-5">
                                    <div class="counter-thumb">
                                        <img :src="counter1" alt="counter_gurukreator">
                                    </div>
                                    <div class="counter-content">
                                        <h3 class="title"><span class="counter">120</span><span>k</span></h3>
                                        <p>3T Teachers</p>
                                    </div>
                                </div>
                                <div class="counter-item-5">
                                    <div class="counter-thumb">
                                        <img :src="counter2" alt="counter_gurukreator">
                                    </div>
                                    <div class="counter-content">
                                        <h3 class="title"><span class="counter">62</span><span></span></h3>
                                        <p>Regions</p>
                                    </div>
                                </div>
                                <div class="counter-item-5">
                                    <div class="counter-thumb">
                                        <img :src="counter3" alt="counter_gurukreator">
                                    </div>
                                    <div class="counter-content">
                                        <h3 class="title"><span class="counter">11</span></h3>
                                        <p>Provinces</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
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
                        <h5 class="cate">When 3T . . . Turns into Transformative Teachers</h5>
                        <h2 class="title">For they are not alone</h2>
                        <p>
                            We deeply care for people and the processes involved in each of their unique places. Together, supporting them to become Guru Kreator!
                        </p>
                        <div class="how-content" style="margin-top:40px;">
                            <a href="#weare" class="button-3 active">COUNT ME IN!</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="coverage-right-area text-lg-right">
                        <h2 class="amount">62 Regions*</h2>
                        <p>3T Areas</p>
                        <p>The most forefront<br>
                        The most outskirt<br>
                        The most behind
                        </p>
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

        <!--============= Pricing Section Starts Here =============-->
     <section class="pricing-section padding-top oh padding-bottom pb-md-0 bg_img pos-rel" data-background="./assets/images/bg/pricing-bg.jpg" id="pricing">
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
                <h5 class="cate">Ready, set.... collaborate!</h5>
                <h2 class="title">Hand in hand for</h2>
                <h2>Guru Kreator</h2><br>
                <p>
                    Connectivity limitations, administrative burdens, and connection costs can easily be
                    resolved when we work together. Innovations in this digitalization era must be
                    maximized; after all, obstacles are opportunities.
                </p>
            </div>
            <div class="range-wrapper-2" id="weare">
                <div class="pricing-range pb-1">
                    <div class="pricing-range-top pt-0">
                        <div class="tags-area">
                            <h3 class="tags">We’re in this together</h3>
                        </div>
                        <div class="pricing-header">
                            <span class="cate">Available Packages:</span>
                            <div class="select-container">
                                <select class="select-bar" v-model="selectedPrice">
                                    <option value="semester_price">Semester-based</option>
                                    <option value="yearly_price">Yearly-based</option>
                                </select>
                            </div>
                            <div class="text-center mt-2">
                                <p class="mt-2 mb-2" style="font-size:15px;">The animal icons are only for illustration purpose; NOT to refer to the recipients' location.</p><br><br>
                            </div>
                        </div>
                        <div class="amount-area" id="semester">
                            <div class="row">
                                <div class="col-sm-6" v-for="(itemProduct,index) in listProducts" :key="index" v-if="itemProduct.product_type=='Donasi'">
                                    <div class="item" >
                                        <tbody>
                                        <tr>
                                            <td>
                                                <input  type="radio" name="donaturPrice" :value="itemProduct"  style="width:25px; height:25px; margin-right:10px;" v-model="pickedProduct"></td>
                                            <td><img class="" :src="itemProduct.image_url" alt="gurukreator" width="65px" height="65px" style="float:left"></td>

                                            <!-- <td> -->
                                                <h2 class="title mt-3"><sup>IDR</sup>
                                                    {{ (selectedPrice=='semester_price'? itemProduct.semester_price: itemProduct.yearly_price) < 1000000 ?
                                                    (selectedPrice=='semester_price'? itemProduct.semester_price: itemProduct.yearly_price)/1000+' k': (selectedPrice=='semester_price'? itemProduct.semester_price: itemProduct.yearly_price)/1000000 + ' mio' }}
                                                </h2>
                                            <!-- </td> -->
                                        </tr>
                                        </tbody>
                                        <span class="info"><p style="font-size:23px; margin-top:2px; margin-left:40px;">{{itemProduct.product_name}} &xrarr; {{itemProduct.description}}</p></span>
                                        <span class="info"><p style="font-size:18px; margin-top:10px; margin-left:40px;">{{itemProduct.narasi}}</p></span>
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
                                <span class="cate"><b>Payment Methods</b></span>
                                <div class="text-center row mt-3">
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio"  :value="13" v-model="payload.payment_methode_id" name="bni" style="width:25px; height:25px; margin-right:10px;" >
                                        <img :src="payment1" style="margin-top:0px;" alt="gurukreator">
                                    </div>
                                    <!-- <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio"  :value="2" v-model="payload.payment_methode_id" name="briva" style="width:25px; height:25px; margin-right:10px;" disabled>
                                        <img src="@/assets/images/payment/Briva.png" style="margin-top:0px;" alt="">
                                    </div> -->
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="18" v-model="payload.payment_methode_id" name="mandiri" style="width:25px; height:25px; margin-right:10px;" >
                                        <img :src="payment2" style="margin-top:0px;" alt="gurukreator">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="12" v-model="payload.payment_methode_id" name="permatabank" style="width:25px; height:25px; margin-right:10px;" >
                                        <img :src="payment3" style="margin-top:0px;" alt="gurukreator">
                                    </div>
                                </div>
                                <div class="text-center row">
                                    <!-- <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="18" v-model="payload.payment_methode_id" name="mandiri" style="width:25px; height:25px; margin-right:10px;" >
                                        <img src="@/assets/images/payment/mandiri.png" style="margin-top:0px;" alt="">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="4" v-model="payload.payment_methode_id" name="gopay" style="width:25px; height:25px; margin-right:10px;" disabled>
                                        <img src="@/assets/images/payment/gopay.png" style="margin-top:0px;" alt="">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="15" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;" disabled>
                                        <img src="@/assets/images/payment/JCB.png" style="margin-top:0px;" alt="">
                                    </div> -->
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="17" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;">
                                        <img :src="payment4" style="margin-top:0px;" alt="gurukreator">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="16" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;">
                                        <img :src="payment5" style="margin-top:0px;" alt="gurukreator">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="11" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;">
                                        <img :src="payment6" style="margin-top:0px;" alt="gurukreator">
                                    </div>
                                </div>
                                <div class="text-center row">
                                    <!-- <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="15" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;" disabled>
                                        <img src="@/assets/images/payment/Visa.png" style="margin-top:0px;" alt="">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="15" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;" disabled>
                                        <img src="@/assets/images/payment/AmericanExpress.png" style="margin-top:0px;" alt="">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="15" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;" disabled>
                                        <img src="@/assets/images/payment/MasterCard.png" style="margin-top:0px;" alt="">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="15" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;" >
                                        <img src="@/assets/images/payment/MasterCard.png" style="margin-top:30px;" alt="">
                                    </div> -->
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="19" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;">
                                        <img :src="payment7" style="margin-top:0px;" alt="gurukreator">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="20" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;">
                                        <img :src="payment8" style="margin-top:0px;" alt="gurukreator">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="15" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;">
                                        <img :src="payment9" style="margin-top:0px;" alt="gurukreator">
                                    </div>
                                </div>
                                <div class="text-center row">
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="33" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;">
                                        <img :src="payment10" style="margin-top:0px;" alt="gurukreator">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="34" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;">
                                        <img :src="payment11" style="margin-top:0px;" alt="gurukreator">
                                    </div>                                 
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="29" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;">
                                        <img :src="payment12" style="margin-top:0px;" alt="_gurukreator">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pricing-range-top pb-3 pt-0">
                        <div class="amount-area">
                            <div class="row text-center mt-3">
                                <div class="col-sm-12">
                                    <span class="cate"><b>Personal Information</b></span>
                                    <form class="donatur-form" >
                                        <div class="mt-3">
                                            <input type="text" placeholder="Full Name" v-model="payload.name" style="width: 60%">
                                        </div>
                                        <div class="mt-2">
                                            <input type="text" placeholder="Email" v-model="payload.email" style="width: 60%">
                                        </div>
                                        <div class="mt-2 " style="display: flex; justify-content: center;">
                                        <vue-tel-input
                                                defaultCountry="ID"
                                                v-model="payload.hp"
                                                style="width: 60%"
                                                v-on:country-changed="countryChanged"
                                        >

                                        </vue-tel-input>
                                        </div>
                                    </form>
                                    <!-- <i class="mt-2 mb-2">NOTE: For this pioneer effort, any contribution received by <b>Friday, February 5, 2021</b> will be channeled to the pioneer recipients <b>immediately after our Grand Launching event on Saturday, February 6, 2021</b></i> -->

                                    <div class="right mt-5 mb-5">
                                        <b-button tag="a" @click="postCheckout" class="custom-button mb-3">CONTRIBUTE NOW</b-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
        <!--============= Pricing Section Ends Here =============-->


    <!--============= Creativity Section Starts Here =============-->
    <!-- <section class="oh creativity-section padding-bottom bg-max-lg-ash bg_img_testimony top_center" >
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-6 padding-top">
                    <div class="section-header left-style mb-0">

                    </div>
                </div> -->
<!--                 <div class="col-lg-6 col-xl-4 d-none d-lg-block">
                    <img src="./assets/images/feature/experience.png" alt="feature">
                </div> -->
            <!-- </div>
        </div>
    </section> -->
    <!--============= Creativity Section Ends Here =============-->


     <!--============= History Section Starts Here =============-->
     <!-- <section class="history-section padding-top pt-lg-0 padding-bottom-2">
         <div class="container">
             <div class="section-header">

             </div>
             <div class="history-slider owl-theme owl-carousel">

             </div>
         </div>
     </section> -->
     <!--============= History Section Ends Here =============-->

     <!--============= Testimonial Section Starts Here =============-->
    <section class="testimonial-section padding-top-6 padding-bottom bg-max-lg-ash bg_img_testimony padding-bottom-2">
        <div class="container">
            <div class="section-header p-3">
                <h5 class="cate mt-3">Testimonies from the field</h5>
                <h2 class="title">Continuously creating with
                    innovative technology</h2>
            </div>
            <SliderFrame>
                <div slot-scope="{ next, prev }">
                    <div class="testimonial-wrapper mb-5">
                        <SliderSlides>
                            <SliderSlide class="o-vertical-spacing">
                                <div class="testimonial-area testimonial-slider owl-carousel owl-theme">
                                    <div class="testimonial-item">
                                        <div class="testimonial-thumb">
                                            <div class="thumb">
                                                <img src='@/assets/images/donatur/mintarsih_circle_img.png' alt="client_gurukreator">
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
                                                to create lesson and unit plans.
                                            </p>
                                            <h5 class="title" style="line-height:35px"><a href="#0">Mintarsih<br><p style="font-size:15px">Semarang, Central Java</p></a></h5>
                                        </div>
                                    </div>
                                </div>
                            </SliderSlide>
                            <SliderSlide class="o-vertical-spacing">
                                <div class="testimonial-area testimonial-slider owl-carousel owl-theme">
                                    <div class="testimonial-item">
                                        <div class="testimonial-thumb">
                                            <div class="thumb">
                                                <img src='@/assets/images/donatur/eirene.png' alt="client_gurukreator">
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
                                                I am so glad for the presence of Guru Kreator! This app helps me design meaningful lessons with intentional learning transfer so that my students may grow to be life-long learners.
                                            </p>
                                            <h5 class="title" style="line-height:35px"><a href="#0">Eirene Christa Luturmas<br><p style="font-size:15px">Kupang, NTT</p></a></h5>
                                        </div>
                                    </div>
                                </div>
                            </SliderSlide>
                            <SliderSlide class="o-vertical-spacing">
                                <div class="testimonial-area testimonial-slider owl-carousel owl-theme">
                                    <div class="testimonial-item">
                                        <div class="testimonial-thumb">
                                            <div class="thumb">
                                                <img src='@/assets/images/donatur/sri.png' alt="client_gurukreator">
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
                                                Wow! This tool is highly useful, effective, creative, and efficient! Also, teachers can track student's progress on Profil Pelajar Pancasila and 21st century skills. What are you waiting for? Download the app now!
                                            </p>
                                            <h5 class="title" style="line-height:35px"><a href="#0">Sri Restianingsi<br><p style="font-size:15px">Sentani, Papua</p></a></h5>
                                        </div>
                                    </div>
                                </div>
                            </SliderSlide>
                            <SliderSlide class="o-vertical-spacing">
                                <div class="testimonial-area testimonial-slider owl-carousel owl-theme">
                                    <div class="testimonial-item">
                                        <div class="testimonial-thumb">
                                            <div class="thumb">
                                                <img src='@/assets/images/donatur/hannah.png' alt="client_gurukreator">
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
                                                So impressed with the app's accessibility that can reach even the most remote areas in Indonesia including Papua. I hope this app can support all teachers to share knowledge and resources without being limited by connectivity issues.
                                            </p>
                                            <h5 class="title" style="line-height:35px"><a href="#0">Hannah Desriana<br><p style="font-size:15px">Sentani, Papua</p></a></h5>
                                        </div>
                                    </div>
                                </div>
                            </SliderSlide>
                            <SliderSlide class="o-vertical-spacing">
                                <div class="testimonial-area testimonial-slider owl-carousel owl-theme">
                                    <div class="testimonial-item">
                                        <div class="testimonial-thumb">
                                            <div class="thumb">
                                                <img src='@/assets/images/donatur/sugihono.png' alt="client_gurukreator">
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
                                                To help, support, and equip others, especially teachers in the most forefront, outskirts, and behind areas is a noble cause.
                                            </p>
                                            <h5 class="title" style="line-height:35px"><a href="#0">Sugihino Subeno<br><p style="font-size:15px">Ngabang, West Kalimantan</p></a></h5>
                                        </div>
                                    </div>
                                </div>
                            </SliderSlide>
                        </SliderSlides>
                        <a href="#0" @click="prev" class="testi-next trigger">
                            <img src='@/assets/images/client/left.png' alt="client_gurukreator">
                        </a>
                        <a href="#0" @click="next" class="testi-prev trigger">
                            <img src='@/assets/images/client/right.png' alt="client_gurukreator">
                        </a>
                    </div>
                </div>
            </SliderFrame>
        </div>
    </section> 
    <!--============= Testimonial Section Ends Here =============-->

        <!--============= Donatur Mapping Starts Here =============-->
     <section class="coverage-section padding-top padding-bottom" id="coverage">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-9">
                    <div class="section-header left-style coverage-header">
                        <!-- <h5 class="cate">Wujudkan 3T menjadi Terluar Tapi Terdepan!</h5> -->
                        <h2 class="title">Thank you, Cheerful Givers   </h2>
                        <!-- <p>
                            Kami sangat peduli atas hidup setiap insan dan bagaimana mereka berproses dalam keunikan keberadaan mereka. Mari bersama, wujudkan mereka menjadi Guru Kreator!
                        </p>
                        <div class="how-content">
                            <router-link tag="a" to="/donatur#pricing" class="button-3 active">Dukung Guru 3T</router-link>
                        </div> -->
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="coverage-right-area text-lg-right">
                        <!-- <h2 class="amount">62 Kab*</h2>
                        <p>Daerah 3T</p>
                        <p>(Terdepan, Terluar, Tertinggal)</p>
                        <p style="color:#f0c900">*Perpres No. 63 Tahun 2020</p> -->
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md">
                    <img :src="map_donatur" height="auto" width="100%"/> 
                </div>
            </div>  
        </div>
     </section>
     <!--=============Donatur Mapping Ends Here =============-->

        <!--============= Footer Section Starts Here =============-->
     <footer class="footer-section bg_img" data-background='@/assets/images/footer-bg.jpg'>
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
                        <router-link tag="a" to="/">Supporter
                        </router-link>
                    </li>
                    <!-- <li>
                        <a href="#0">Contacts</a>
                    </li> -->
                    <li>
                        <router-link tag="a" to="/privasi-persyaratan">Privacy and Policy</router-link>
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
        <div v-html="directHTML"></div>
     <!--============= Footer Section Ends Here =============-->
    </div>
</template>
