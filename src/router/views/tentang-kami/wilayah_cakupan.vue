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

    //   selectedPrice: 0,
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
        <!--============= Visi Misi Starts Here =============-->
        <section class="mt-5">
            <div class="container">
                <div class="section-header mb-5">
                    <h4 style="color:black;" class="psbfont text-center">WILAYAH CAKUPAN</h4>
                </div>
            </div>
        </section>
        <!--============= Visi Misi Ends Here =============-->     

        <!--============= Pimpinan Pictures Starts Here =============-->
        <section class="develop-teach">
            <div class="container">
            <div class="row thumbnail-icon-develop">
                    <img class="kiddy-people" style="width:120px; height:120px" src="@/assets/images/pimpinan-sinode/abdul-hutauruk.svg" alt="">
                    <div style="padding:50px 0px 50px 20px">
                    <h5 class="bold dark"><b>Pdt. Waldemar S. Simanjuntak, M.Th</b></h5>
                    <p class="mt-1">Koordinator Wilayah 1 (medan I - Langkat)</p>
                    </div>
            </div> 
            <div class="row">
            <div class="col-sm-6 mt-2">
                <p>1. Jemaat Khusus Sidorame</p>
                <p>2. Jemaat Khusus Gang Sado</p>
                <p>3. Jemaat Khusus Glugur Darat</p>
                <p>4. Jemaat Khusus Sentosa</p>
                <p>5. Jemaat Khusus Pulu Brayan</p>
                <p>6. Resort Belawan 1 – Belawan</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Belawan</li>
                    <li>- Jemaat Sei Mati Medan Labuhan </li>
                    <li>- Jemaat Sola Gratia Martubung</li>
                    <li>- Jemaat Estomihi Hamparan Perak</li>
                </ul>
                <p class="mt-1">7. Resort Belawan II – Pulau Sicanang</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Pulau Sicanang</li>
                    <li>- Jemaat Rengas Pulau</li>
                    <li>- Jemaat Batang Serei</li>
                </ul>
                <p class="mt-1">8. Jemaat Khusus Wahidin Baru</p>
                <p>9. Jemaat Khusus Cinta Damai</p>
                <p>10. Jemaat Khusus Sei Agul</p>
                <p>11. Jemaat Khusus Sei Putih</p>
                <p>12. Jemaat Khusus Teladan Helvetia</p>
                <p>13. Jemaat Khusus Perumnas Helvetia</p>
                <p>14. Jemaat Khusus Bromo</p>
                <p>15. Resort Tanjung Mulia</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Immanuel</li>
                    <li>- Jemaat Tanjung Mulia </li>
                    <li>- Jemaat Dame</li>
                </ul>
                <p class="mt-1">16. Jemaat Khusus Griya Martubung</p>
                <p>17. Resort Langkat – Marturia Binjai</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Marturia Binjei</li>
                    <li>- Jemaat Selayang </li>
                    <li>- Jemaat Tandem</li>
                    <li>- Jemaat Bassilam</li>
                    <li>- Jemaat Sawit Hulu/li>
                    <li>- Jemaat Sawit Seberang</li>
                </ul>
                <p class="mt-1">18. Resort Pangkalan Brandan</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Pangkalan Brandan</li>
                    <li>- Jemaat Pangkalan Susu </li>
                    <li>- Jemaat Besitang</li>
                </ul>
            </div>     
            <div class="col-sm-6 mt-2">
                <ul style="margin-top:-15px">
                    <li>- Jemaat Tungkam Jaya</li>
                    <li>- Jemaat Tungkam Jaya </li>
                    <li>- Jemaat Tungkam Getek</li>
                    <li>- Jemaat Sei Rambong</li>
                </ul>
                <p>19. Jemaat Khusus Binjai Kota</p>
                <p>20. Jemaat Khusus (Pers) Sei Semayang</p>
                <p>21. resort Immanuel – Muliorejo Sunggal</p>
                <ul>
                    <!-- <li>- </li> -->
                    <li>- Jemaat Pardomuan Nauli</li>
                    <li>- Jemaat Km 18 Binjei</li>
                    <li>- Jemaat Immanuel Muliorejo</li>
                    <li>- Jemaat Kampung Toba</li>
                    <li>- Jemaat Suka Maju</li>
                </ul>
                <p>22. GKPI Jemaat Khusus (Pers) Purwodadi</p>
                <p>23. GKPI Resort Estomihi</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Estomihi</li>
                    <li>- Jemaat Bulu Cina </li>
                    <li>- Jemaat Tani Asli</li>
                </ul>
                <p class="mt-1">24. GKPI Resort (Pers) Gebang</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Gebang</li>
                    <li>- Jemaat Bukit Mangkirai</li>
                    <li>- Jemaat Pelawi</li>
                    <li>- Jemaat Titi Lepan</li>
                    <li>- Jemaat Bukit Selamat</li>
                    <li>- Jemaat Limau Kapas</li>
                    <li>- Jemaat Khusus Percut Sei Tuan</li>
                </ul>
                <p class="mt-1">25. Resort Pertahanan</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Partahanan</li>
                    <li>- Jemaat P. Gelombang </li>
                    <li>- Jemaat Maranatha</li>
                </ul>
                <p>26. Jemaat Khusus Sampali</p>
                <p>27. Resort Agape Mandala</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Sei Tuan</li>
                    <li>- Jemaat Kenangan Baru </li>
                    <li>- Jemaat Mandala</li>
                    <li>- Jemaat Sei Rotan</li>
                </ul>
            </div> 
            </div>
    
            </div>
        </section>
        <!--============= Pimpinan Pictures Starts Here =============-->

        <!--============= Wilayah II Starts Here =============-->
        <section class="develop-teach">
            <div class="container">
            <div class="row thumbnail-icon-develop">
                    <img class="kiddy-people" style="width:120px; height:120px" src="@/assets/images/pimpinan-sinode/abdul-hutauruk.svg" alt="">
                    <div style="padding:50px 0px 50px 20px">
                    <h5 class="bold dark"><b>Pdt. Johny Ki Tov Silitonga</b></h5>
                    <p class="mt-1">Koordinator Wilayah 2 (Medan II - Deli Serdang)</p>
                    </div>
            </div> 
            <div class="row">
            <div class="col-sm-6 mt-2">
                <p>1. Resort Medan Barat – Medan Kota</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Medan Kota</li>
                    <li>- Jemaat Telaga Sari </li>
                    <li>- Jemaat Marturia Muliorejo</li>
                </ul>
                <p>2. Resort Medan Baru – Babura</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Babura</li>
                    <li>- Jemaat Babura Dua </li>
                    <li>- Jemaat Immanuel Sukamaju Indah</li>
                </ul>
                <p>3. Resort Padang Bulan 1</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Padang Bulan</li>
                    <li>- Jemaat Sari Rejo </li>
                    <li>- Jemaat Maranatha Sri Gunting</li>
                </ul>
                <p>4. Jemaat Khusus Koserna</p>
                <p>5. Resort Kwala Bekala</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Kwala Bekala</li>
                    <li>- Jemaat Immanuel </li>
                </ul>
                <p>6. Jemaat Khusus Teladan</p>
                <p>7. Jemaat Khusus Simpang Limun</p>
                <p>8. Jemaat Khusus Air Bersih</p>
                <p>9. Jemaat Khusus Horisan</p>
                <p>10. Jemaat Khusus Menteng Indah</p>
                <p>11. Jemaat Khusus Martoba Medan</p>
                <p>12. Jemaat Khusus Perumnas II Mandala</p>
                <p>13. Jemaat Khusus Parsaoran Nauli</p>
                <p>14. Jemaat Khusus Marindal</p>
                <p>15. Resort Patumbak</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Delitua</li>
                    <li>- Jemaat Patumbak </li>
                </ul>
                <p class="mt-1">16. Resort Rukun Damai</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Rukun Damai</li>
                    <li>- Jemaat Immanuel Sidomulyo </li>
                    <li>- Jemaat Tegalsan</li>
                    <li>- Jemaat Laut Dendang</li>
                </ul>
                <p class="mt-1">17. Resort Gloria Simalingkar</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Gloria Simalingkar</li>
                    <li>- Jemaat Pancur Batu </li>
                    <li>- Jemaat Lau Baken</li>
                </ul>
                <p>18. Resort Maranatha Simalingkar</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Maranatha Perum Simalingkar</li>
                    <li>- Jemaat Johor Indah </li>
                    <li>- Jemaat Tanjung Anom</li>
                </ul>
            </div>     
            <div class="col-sm-6 mt-2">

                <p>19. Resort Serdang I – Pagar Jati</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Pagar Jati</li>
                    <li>- Jemaat Kampung Baru </li>
                    <li>- Jemaat Petuaran Hulu</li>
                    <li>- Jemaat Perbaungan</li>
                    <li>- Jemaat Titi Kuning</li>
                    <li>- Jemaat Afdeling IX</li>
                    <li>- Jemaat Pulo Gambar</li>
                    <li>- Jemaat Pegajahan</li>
                </ul>
                <p>20. Resort Serdang II – Sei Karang</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Sei Karang</li>
                    <li>- Jemaat Jati Baru </li>
                    <li>- Jemaat Jaharun B</li>
                    <li>- Jemaat Pagar Manik</li>
                    <li>- Jemaat Tanjung Harap</li>
                    <li>- Jemaat Dalam Seribu</li>
                    <li>- Jemaat Maring Dolok</li>
                    <li>- Jemaat Galinda</li>
                    <li>- Jemaat Dagang Buluh</li>
                    <li>- Jemaat Bukit Satu</li>
                </ul>
                <p>21. Jemaat Khusus Lubuk Pakam Kota</p>
                <p>22. Resort Serdang III/Batang Kuis</p>
                <ul>
                    <!-- <li>- </li> -->
                    <li>- Jemaat Serdang</li>
                    <li>- Jemaat Sintanauli</li>
                    <li>- Jemaat Segitiga</li>
                    <li>- Jemaat Batang Kuis</li>
                </ul>
                <p>23. Resort Tanjung Morawa</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Tanjung Morawa</li>
                    <li>- Jemaat Bah Manumpak </li>
                    <li>- Jemaat Desa Negara</li>
                    <li>- Jemaat Cendana Asri Bendang</li>
                    <li>- Jemaat Cinta kasih Medan Sinembah</li>
                    <li>- Jemaat Sinar Kemenangan</li>
                    <li>- Jemaat Gang Darmo</li>
                </ul>
                <p class="mt-1">24. Jemaat Khusus Jalan Siantar – Lubuk Pakam</p>
            </div> 
            </div>
    
            </div>
        </section>
        <!--============= Wilayah II Starts Here =============-->

        <!--============= Wilayah III Starts Here =============-->
        <section class="develop-teach">
            <div class="container">
            <div class="row thumbnail-icon-develop">
                    <img class="kiddy-people" style="width:120px; height:120px" src="@/assets/images/pimpinan-sinode/abdul-hutauruk.svg" alt="">
                    <div style="padding:50px 0px 50px 20px">
                    <h5 class="bold dark"><b>Pdt. Ebed Nainggolan, S.Th., MM</b></h5>
                    <p class="mt-1">Koordinator Wilayah 3 (Siantar - Simalungun - Tebing - Sergai)</p>
                    </div>
            </div> 
            <div class="row">
            <div class="col-sm-6 mt-2">
                <p>1. Jemaat Khusus Suka Pardamean</p>
                <p>2. Resort Tanah Jawa 1 – Tanah Jawa Kota</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Tanah Jawa Kota</li>
                    <li>- Jemaat Mgs Tongah </li>
                    <li>- Jemaat Nagojor</li>
                    <li>- Jemaat Balimbingan</li>
                    <li>- Jemaat Waringin</li>
                    <li>- Jemaat Pulo Bayu</li>
                    <li>- Jemaat Simangonai</li>
                </ul>
                <p>3. Resort Laras – Perkebunan Laras</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Perkebunan Laras</li>
                    <li>- Jemaat Bandar Tonga </li>
                    <li>- Jemaat Perdagangan</li>
                    <li>- Jemaat Pematang Bandar</li>
                    <li>- Jemaat Padangan</li>
                    <li>- Jemaat Serbelawan</li>
                    <li>- Jemaat Bandar Betsy</li>
                    <li>- </li>
                    <li>- </li>
                    <li>- </li>
                </ul>
                <p>4. Jemaat Khusus Koserna</p>
                <p>5. Resort Kwala Bekala</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Kwala Bekala</li>
                    <li>- Jemaat Immanuel </li>
                </ul>
                <p>6. Jemaat Khusus Teladan</p>
                <p>7. Jemaat Khusus Simpang Limun</p>
                <p>8. Jemaat Khusus Air Bersih</p>
                <p>9. Jemaat Khusus Horisan</p>
                <p>10. Jemaat Khusus Menteng Indah</p>
                <p>11. Jemaat Khusus Martoba Medan</p>
                <p>12. Jemaat Khusus Perumnas II Mandala</p>
                <p>13. Jemaat Khusus Parsaoran Nauli</p>
                <p>14. Jemaat Khusus Marindal</p>
                <p>15. Resort Patumbak</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Delitua</li>
                    <li>- Jemaat Patumbak </li>
                </ul>
                <p class="mt-1">16. Resort Rukun Damai</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Rukun Damai</li>
                    <li>- Jemaat Immanuel Sidomulyo </li>
                    <li>- Jemaat Tegalsan</li>
                    <li>- Jemaat Laut Dendang</li>
                </ul>
                <p class="mt-1">17. Resort Gloria Simalingkar</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Gloria Simalingkar</li>
                    <li>- Jemaat Pancur Batu </li>
                    <li>- Jemaat Lau Baken</li>
                </ul>
                <p>18. Resort Maranatha Simalingkar</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Maranatha Perum Simalingkar</li>
                    <li>- Jemaat Johor Indah </li>
                    <li>- Jemaat Tanjung Anom</li>
                </ul>
            </div>     
            <div class="col-sm-6 mt-2">

                <p>19. Resort Serdang I – Pagar Jati</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Pagar Jati</li>
                    <li>- Jemaat Kampung Baru </li>
                    <li>- Jemaat Petuaran Hulu</li>
                    <li>- Jemaat Perbaungan</li>
                    <li>- Jemaat Titi Kuning</li>
                    <li>- Jemaat Afdeling IX</li>
                    <li>- Jemaat Pulo Gambar</li>
                    <li>- Jemaat Pegajahan</li>
                </ul>
                <p>20. Resort Serdang II – Sei Karang</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Sei Karang</li>
                    <li>- Jemaat Jati Baru </li>
                    <li>- Jemaat Jaharun B</li>
                    <li>- Jemaat Pagar Manik</li>
                    <li>- Jemaat Tanjung Harap</li>
                    <li>- Jemaat Dalam Seribu</li>
                    <li>- Jemaat Maring Dolok</li>
                    <li>- Jemaat Galinda</li>
                    <li>- Jemaat Dagang Buluh</li>
                    <li>- Jemaat Bukit Satu</li>
                </ul>
                <p>21. Jemaat Khusus Lubuk Pakam Kota</p>
                <p>22. Resort Serdang III/Batang Kuis</p>
                <ul>
                    <!-- <li>- </li> -->
                    <li>- Jemaat Serdang</li>
                    <li>- Jemaat Sintanauli</li>
                    <li>- Jemaat Segitiga</li>
                    <li>- Jemaat Batang Kuis</li>
                </ul>
                <p>23. Resort Tanjung Morawa</p>
                <ul style="margin-top:-15px">
                    <li>- Jemaat Tanjung Morawa</li>
                    <li>- Jemaat Bah Manumpak </li>
                    <li>- Jemaat Desa Negara</li>
                    <li>- Jemaat Cendana Asri Bendang</li>
                    <li>- Jemaat Cinta kasih Medan Sinembah</li>
                    <li>- Jemaat Sinar Kemenangan</li>
                    <li>- Jemaat Gang Darmo</li>
                </ul>
                <p class="mt-1">24. Jemaat Khusus Jalan Siantar – Lubuk Pakam</p>
            </div> 
            </div>
    
            </div>
        </section>
        <!--============= Wilayah III Starts Here =============-->
        
    </div>
</template>

<style scoped>
  .develop-teach .text-wrapper h2 {
      font-size: 45px;
      color: #000000;
      font-family: 'PoppinsBold';
      font-style: Bold;
      line-height: 80px;
  }

  .develop-teach .text-wrapper p {
      font-family: 'PoppinsRegular';
      color: #000000;
      font-size: 25px;
      line-height: 40px;
  }

  .thumbnail-age p {
    font-size: 16px;
    margin-top: -10px;
    color: #000000;
  }

  @media only screen and (max-width: 700px){
    .develop-teach .text-wrapper{
      margin: 0px 10px 0px 10px;
    }

    .develop-teach .text-wrapper h2 {
        font-size: 35px;
        line-height: 40px;
    }

    .develop-teach .text-wrapper p {
        font-size: 18px;
    }
  }

.thumbnail-icon-develop {
    display: flex;
    justify-content: center;
    margin: 10px 0px 80px 0px;
  }

.thumbnail-age {
   margin: 0px 40px 0px 40px;
 }

.thumbnail-age p {
    font-size: 16px;
    margin-top: -10px;
    color: #000000;
}

@media (max-width: 991px) { 
.kiddy-people {
    margin: 95px 0px 0px 15px !important;
}

.junior-people {
    margin: 56px 0px 0px 0px !important;
}

.upper-people {
    margin: 32px 0px 0px 0px !important;
}

.thumbnail-age {
    margin: 0px 15px 0px 10px;
}
}

.detail-wrapper {
   text-align: center;
 }
</style>