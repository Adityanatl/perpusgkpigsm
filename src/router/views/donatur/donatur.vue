<script>
import { Carousel, Slide } from "vue-carousel";
import Vue from "vue";
import '@/assets/js/magnific-popup.min.js';
// import '@/assets/js/intlTelInput-jquery.min.js'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';


global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

/**
 * Crypto ICO-landing page
 */
export default {
  components: { Carousel, Slide, VuePhoneNumberInput },
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
        }
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
                window.location = resp.redirect_url
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
    <section class="about-section mt-5">
        <div class="container">
            <div class="row ">
                <!-- <div class="col-xl-12"> -->
                    <div class="video-donatur col-xl-6">
                        <a href="https://www.youtube.com/watch?v=kkpuq3m0Em4" class="features-video-area popup">
                            <div class="thumb rtl pr-xl-15">
                                <img src='@/assets/images/fature-video.png' alt="feature">
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
                                        <img src='@/assets/images/counter/counter1.png' alt="counter">
                                    </div>
                                    <div class="counter-content">
                                        <h3 class="title"><span class="counter">120</span><span>k</span></h3>
                                        <p>3T Teachers</p>
                                    </div>
                                </div>
                                <div class="counter-item-5">
                                    <div class="counter-thumb">
                                        <img src='@/assets/images/counter/counter2.png' alt="counter">
                                    </div>
                                    <div class="counter-content">
                                        <h3 class="title"><span class="counter">62</span><span></span></h3>
                                        <p>Regions</p>
                                    </div>
                                </div>
                                <div class="counter-item-5">
                                    <div class="counter-thumb">
                                        <img src='@/assets/images/counter/counter3.png' alt="counter">
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
                    <img src="@/assets/images/map.png" height="auto" width="100%"/>
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
            </div> -->
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
                                            <td><img class="" :src="itemProduct.image_url" alt="" width="65px" height="65px" style="float:left"></td>

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
                                    <div class="mt-5">
                                        <p class="mt-2 mb-2" style="font-size:18px;">Mohon maaf atas ketidaknyaman ini. <b>Mitra provider pembayaran</b> kami sedang mengalami kendala teknis.</p>
                                        <p class="mt-2 mb-2" style="font-size:18px;">Untuk sementara waktu, mohon dapat menyalurkan dana secara langsung ke akun BCA a/n <b>PT Cahaya Mitra Harapan 7613838777</b> dengan isi berita <b>"Guru 3T"</b>.</p><br>
                                        <p><i>To our overseas supporters, our apology for this inconvenience. Once our payment partner resolves the technical issues on their end, our Credit Card payment methods will be available. Your kind understanding and continuous support are much appreciated!</i></p>
                                    </div><br><br>

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
                                <!-- <div class="counter-area-5">
                                    <div class="counter-item-5">
                                        <div class="counter-thumb">
                                        <input  type="radio"  :value="10" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;" >
                                        </div>
                                        <div class="counter-content">
                                        <img src="@/assets/images/payment/BCA.png" style="margin-top:30px;" alt="">
                                        </div>
                                    </div>
                                </div> -->
                                <div class="text-center row mt-3">
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio"  :value="13" v-model="payload.payment_methode_id" name="bni" style="width:25px; height:25px; margin-right:10px;" disabled>
                                        <img src="@/assets/images/payment/BankBni.png" style="margin-top:0px;" alt="">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio"  :value="2" v-model="payload.payment_methode_id" name="briva" style="width:25px; height:25px; margin-right:10px;" disabled>
                                        <img src="@/assets/images/payment/Briva.png" style="margin-top:0px;" alt="">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="12" v-model="payload.payment_methode_id" name="permatabank" style="width:25px; height:25px; margin-right:10px;" disabled>
                                        <img src="@/assets/images/payment/permatabank.png" style="margin-top:0px;" alt="">
                                    </div>
                                </div>
                                <div class="text-center row">
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="18" v-model="payload.payment_methode_id" name="mandiri" style="width:25px; height:25px; margin-right:10px;" disabled>
                                        <img src="@/assets/images/payment/mandiri.png" style="margin-top:0px;" alt="">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="4" v-model="payload.payment_methode_id" name="gopay" style="width:25px; height:25px; margin-right:10px;" disabled>
                                        <img src="@/assets/images/payment/gopay.png" style="margin-top:0px;" alt="">
                                    </div>
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="15" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;" disabled>
                                        <img src="@/assets/images/payment/JCB.png" style="margin-top:0px;" alt="">
                                    </div>
                                </div>
                                <div class="text-center row">
                                    <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
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
                                    <!-- <div class="col-md mt-2" data-aos="zoom-in-up" data-aos-duration="1500">
                                        <input  type="radio" :value="15" v-model="payload.payment_methode_id" name="methodePayment" style="width:25px; height:25px; margin-right:10px;" >
                                        <img src="@/assets/images/payment/MasterCard.png" style="margin-top:30px;" alt="">
                                    </div> -->
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
                                    <i class="mt-2 mb-2">NOTE: For this pioneer effort, any contribution received by <b>Friday, February 5, 2021</b> will be channeled to the pioneer recipients <b>immediately after our Grand Launching event on Saturday, February 6, 2021</b></i>

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
                                to create lesson and unit plans.
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
     <!--============= Footer Section Ends Here =============-->
    </div>
</template>
