<script>
import Vue from "vue";
// import vSelect from "vue-select";
import Multiselect from "vue-multiselect";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Datepicker from 'vuejs-datepicker';
import moment from "moment";

export default {
  components: {Multiselect, Datepicker },
  metaInfo: {
    meta: [
      {
        property: 'og:url',
        content: 'https://gurukreator.id/pingguru',
        vmid: 'og:url'
      },
      {
        property: 'og:title',
        content: 'Ping Guru by Paideia',
        vmid: 'og:title'
      },
    ],
  },
  data() {
    return {
      data_guru: {
        "first_name":"",
        "last_name":"",
        "birth_date":"",
        "hp":"",
        "email":"",
        "classroom_topic":"",
        "payment_method_id":0
      }
    };
  },
  created() {
    
  },
  destroyed() {
    
  },
  mounted() {

  },
  methods: {
    async postData(){ 
      const validate = this.validateOrder()
		  if (validate.length > 0) {
        this.raiseValidationError(validate)
        return
      }

      let date = moment(this.data_guru.birth_date).format('YYYY-MM-DD')
      this.data_guru.payment_method_id = Number(this.data_guru.payment_method_id)
      localStorage.setItem('payload', JSON.stringify(this.data_guru))
      const payload = {...this.data_guru, birth_date: date, }
      // const payload = this.data_guru
      await axios.post('api/account/ping-guru', payload)
      .then( r => {
        const resp = r.data.data
        if (resp.direct === true) {
          this.directHTML = resp.direct_value
          localStorage.removeItem('payload');
          setTimeout(()=> document.getElementById("paideiaForm").submit(),1000)
        } else {
          localStorage.removeItem('payload');
          window.location = resp.redirect_url
        }
      })
      .catch( x => {
        console.log('X Error', x.response)
        if (x.response.status === 500) {
          Vue.swal({
            position: "top-end",
            icon: "warning",
            title: 'Failed to process',
            showConfirmButton: false,
            timer: 1500
          });
        } else if (x.response.status === 423) {
          this.$router.push('limited_member')
        }
      })
    },

    validateOrder() {
		  const payload = this.data_guru
		  let result = []
      if (payload.first_name === '') {
        result.push('first name')
      }
      if (payload.last_name === '') {
        result.push('last name')
      }
      if(payload.birth_date === '') {
        result.push('birth_date')
      }
      if (payload.hp === '') {
        result.push('hp')
      }
      if(payload.email === '') {
        result.push('email')
      }
      if(payload.classroom_topic === '') {
        result.push('classroom topic')
      }
      if(payload.payment_method_id === '') {
        result.push('payment method id')
      }
      return result
    },

    raiseValidationError(field) {
		  const tagLi = field.map(x => '<li>Field '+ x.toUpperCase() +' belum diisi</li>').join('')
      Vue.swal({
          position: "top-end",
          icon: "warning",
          title: 'Field must not be empty',
          showConfirmButton: false,
          timer: 1500
      })
    },
  }
};
</script>

<style scoped>
    a {
      color: #0000ee;
      text-decoration: underline;
    }
    
    a:hover {
      color: #0000ee;
      text-decoration: underline;
    }
    
    #u_content_form_1 a:hover {
      color: #FFF !important;
      background-color: #3AAEE0 !important;
    }
    
    #u_content_form_1 input::placeholder {
      color: #000000;
      opacity: 0.5;
    }
    
    .u-row {
      display: flex;
      flex-wrap: nowrap;
      margin-left: 0;
      margin-right: 0;
    }
    
    .u-row .u-col {
      position: relative;
      width: 100%;
      padding-right: 0;
      padding-left: 0;
    }
    
    .u-row .u-col.u-col-100 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    
    @media (max-width: 767px) {
      .u-row:not(.no-stack) {
        flex-wrap: wrap;
      }
      .u-row:not(.no-stack) .u-col {
        flex: 0 0 100% !important;
        max-width: 100% !important;
      }
    }
    
    body,
    html {
      padding: 0;
      margin: 0
    }
    
    html {
      box-sizing: border-box
    }
    
    *,
    :after,
    :before {
      box-sizing: inherit
    }
    
    html {
      font-size: 14px;
      -ms-overflow-style: scrollbar;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    }
    
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
      line-height: 1.5;
      color: #373a3c;
      background-color: #fff
    }
    
    p {
      margin: 0
    }
    
    .error-field {
      -webkit-animation-name: shake;
      animation-name: shake;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }
    
    .error-field input,
    .error-field textarea {
      border-color: #a94442!important;
      color: #a94442!important
    }
    
    .field-error {
      padding: 5px 10px;
      font-size: 14px;
      font-weight: 700;
      position: absolute;
      top: -20px;
      right: 10px
    }
    
    .field-error:after {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(136, 183, 213, 0);
      border-top-color: #ebcccc;
      border-width: 5px;
      margin-left: -5px
    }
    
    .spinner {
      margin: 0 auto;
      width: 70px;
      text-align: center
    }
    
    .spinner>div {
      width: 12px;
      height: 12px;
      background-color: hsla(0, 0%, 100%, .5);
      margin: 0 2px;
      border-radius: 100%;
      display: inline-block;
      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      animation: sk-bouncedelay 1.4s infinite ease-in-out both
    }
    
    .spinner .bounce1 {
      -webkit-animation-delay: -.32s;
      animation-delay: -.32s
    }
    
    .spinner .bounce2 {
      -webkit-animation-delay: -.16s;
      animation-delay: -.16s
    }
    
    @-webkit-keyframes sk-bouncedelay {
      0%,
      80%,
      to {
        -webkit-transform: scale(0)
      }
      40% {
        -webkit-transform: scale(1)
      }
    }
    
    @keyframes sk-bouncedelay {
      0%,
      80%,
      to {
        -webkit-transform: scale(0);
        transform: scale(0)
      }
      40% {
        -webkit-transform: scale(1);
        transform: scale(1)
      }
    }
    
    @-webkit-keyframes shake {
      0%,
      to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
      }
      20%,
      40%,
      60%,
      80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
      }
    }
    
    @keyframes shake {
      0%,
      to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
      }
      20%,
      40%,
      60%,
      80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
      }
    }
    
    @media only screen and (max-width:480px) {
      .container {
        max-width: 100%!important
      }
    }
    
    .container {
      width: 100%;
      padding-right: 0;
      padding-left: 0;
      margin-right: auto;
      margin-left: auto
    }
    
    @media (min-width:576px) {
      .container {
        max-width: 540px
      }
    }
    
    @media (min-width:768px) {
      .container {
        max-width: 720px
      }
    }
    
    @media (min-width:992px) {
      .container {
        max-width: 960px
      }
    }
    
    @media (min-width:1200px) {
      .container {
        max-width: 1140px
      }
    }

    .b-form-datepicker {
      display: block;
      width: 100%;
      height: 54px;
      background-color: #E5E5E5;
      border: none;
      padding: 10px !important;
      font-size: 16px;
      color: #444;
      position: relative;
      -webkit-transition: 0.6s;
      transition: 0.6s;
      text-align: center;
    }
</style>

<template>
  <div id="u_body" class="u_body" style="min-height: 100vh; color: #000000; background-color: #e7e7e7; font-family: arial,helvetica,sans-serif; background-image: url('https://s3.amazonaws.com/unroll-images-production/projects%2F22974%2F1623378455354-luke-chesser-pJadQetzTkI-unsplash.jpg'); background-repeat: no-repeat; background-position: center top;">

    <div id="u_row_2" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 500px;margin: 0 auto;">
        <div class="u-row">

          <div id="u_column_2" class="u-col u-col-100 u_column">
            <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

              <div id="u_content_image_1" class="u_content_image" style="overflow-wrap: break-word;padding: 10px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="Image" src="https://s3.amazonaws.com/unroll-images-production/projects%2F22974%2F1623378826533-Main+Logo+dark+theme.png" style="width: 100%;max-width: 6291px;" title="Image" />

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_1" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 500px;margin: 0 auto;">
        <div class="u-row">

          <div id="u_column_1" class="u-col u-col-100 u_column">
            <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

              <div id="u_content_divider_1" class="u_content_divider" style="overflow-wrap: break-word;padding: 10px;">
                <div style="text-align:center;line-height:0">
                  <div style="border-top-width:1px;border-top-style:solid;border-top-color:#ffffff;width:100%;display:inline-block;line-height:1px;height:0px;vertical-align:middle"> </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_4" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 500px;margin: 0 auto;">
        <div class="u-row">

          <div id="u_column_5" class="u-col u-col-100 u_column">
            <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

              <div id="u_content_text_1" class="u_content_text" style="overflow-wrap: break-word;padding: 10px;">

                <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%;"><span style="color: #ffffff; font-size: 14px; line-height: 19.6px;">Saya mendaftarkan diri untuk mengikuti Kelas <strong><b>P</b></strong>endampingan <strong><b>IN</b></strong>ovatif yang ber<strong><b>G</b></strong>una bagi <strong><b>GURU</b></strong> 32 JP yang diadakan oleh Guru Kreator (Paideia). Untuk itu, di bawah ini saya telah mengisi informasi pendaftaran dan melakukan registrasi pembayaran.</span></p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_3" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 500px;margin: 0 auto;">
        <div class="u-row">

          <div id="u_column_3" class="u-col u-col-100 u_column">
            <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

              <div id="u_content_heading_1" class="u_content_heading" style="overflow-wrap: break-word;padding: 10px;">

                <h1 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: helvetica,sans-serif; font-size: 22px;">
                  <strong>Form Pendaftaran PING GURU</strong>
                </h1>

              </div>

              <div id="u_content_form_1" class="u_content_form" style="overflow-wrap: break-word;padding: 10px;">
                <div style="text-align:center">

                    <div color="#000000" class="sc-crrsfI goXqGd">
                      <div style="padding-bottom:10px">
                        <div style="text-align:left;color:#fdfdfd;font-size:14px;padding:0px 0px 3px"><label>Nama Depan *</label></div>
                        <div style="position:relative"><input v-model="data_guru.first_name" type="text" required="" name="nama_guru" placeholder="" style="border-top-width:1px;border-top-style:solid;border-top-color:#CCC;border-left-width:1px;border-left-style:solid;border-left-color:#CCC;border-right-width:1px;border-right-style:solid;border-right-color:#CCC;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#CCC;padding:10px;color:#000000;background-color:#FFF;font-size:12px;width:100%;border-radius:0px"
                          /></div>
                      </div>
                    </div>
                    <div color="#000000" class="sc-crrsfI goXqGd">
                      <div style="padding-bottom:10px">
                        <div style="text-align:left;color:#fdfdfd;font-size:14px;padding:0px 0px 3px"><label>Nama Belakang</label></div>
                        <div style="position:relative"><input v-model="data_guru.last_name" type="text" name="name" placeholder="" style="border-top-width:1px;border-top-style:solid;border-top-color:#CCC;border-left-width:1px;border-left-style:solid;border-left-color:#CCC;border-right-width:1px;border-right-style:solid;border-right-color:#CCC;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#CCC;padding:10px;color:#000000;background-color:#FFF;font-size:12px;width:100%;border-radius:0px"
                          /></div>
                      </div>
                    </div>
                    <div color="#000000" class="sc-crrsfI goXqGd">
                      <div style="padding-bottom:10px">
                        <div style="text-align:left;color:#fdfdfd;font-size:14px;padding:0px 0px 3px"><label>Tanggal Lahir *</label></div>
                        <div style="position:relative">
                          <datepicker v-model="data_guru.birth_date" name="birthday" placeholder="" locale="id" style="font-size:12px; color:#000"></datepicker>
                        </div>
                      </div>
                    </div>
                    <div color="#000000" class="sc-crrsfI goXqGd">
                      <div style="padding-bottom:10px">
                        <div style="text-align:left;color:#fdfdfd;font-size:14px;padding:0px 0px 3px"><label>Nomor Handphone *</label></div>
                        <div style="position:relative"><input v-model="data_guru.hp" type="tel" required="" name="phone_number" placeholder="" style="border-top-width:1px;border-top-style:solid;border-top-color:#CCC;border-left-width:1px;border-left-style:solid;border-left-color:#CCC;border-right-width:1px;border-right-style:solid;border-right-color:#CCC;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#CCC;padding:10px;color:#000000;background-color:#FFF;font-size:12px;width:100%;border-radius:0px"
                          /></div>
                      </div>
                    </div>
                    <div color="#000000" class="sc-crrsfI goXqGd">
                      <div style="padding-bottom:10px">
                        <div style="text-align:left;color:#fdfdfd;font-size:14px;padding:0px 0px 3px"><label>Alamat Email *</label></div>
                        <div style="position:relative"><input v-model="data_guru.email" type="email" required="" name="email" placeholder="" style="border-top-width:1px;border-top-style:solid;border-top-color:#CCC;border-left-width:1px;border-left-style:solid;border-left-color:#CCC;border-right-width:1px;border-right-style:solid;border-right-color:#CCC;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#CCC;padding:10px;color:#000000;background-color:#FFF;font-size:12px;width:100%;border-radius:0px"
                          /></div>
                      </div>
                    </div>
                    <div color="#000000" class="sc-crrsfI goXqGd">
                      <div style="padding-bottom:10px">
                        <div style="text-align:left;color:#fdfdfd;font-size:14px;padding:0px 0px 3px"><label>Topik Kelas *</label></div>
                        <div style="position:relative">
                          <select v-model="data_guru.classroom_topic" name="pilihanseminar" style="border-top-width:1px;border-top-style:solid;border-top-color:#CCC;border-left-width:1px;border-left-style:solid;border-left-color:#CCC;border-right-width:1px;border-right-style:solid;border-right-color:#CCC;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#CCC;padding:10px;color:#000000;background-color:#FFF;font-size:12px;width:100%;border-radius:0px">
                            <option value= menjadi-guru-digital-handal>Menjadi Guru Handal Digital</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div color="#000000" class="sc-crrsfI goXqGd">
                      <div style="padding-bottom:10px">
                        <div style="text-align:left;color:#fdfdfd;font-size:14px;padding:0px 0px 3px"><label>Metode Pembayaran *</label></div>
                        <div style="position:relative">
                          <select v-model="data_guru.payment_method_id" name="payment_method" style="border-top-width:1px;border-top-style:solid;border-top-color:#CCC;border-left-width:1px;border-left-style:solid;border-left-color:#CCC;border-right-width:1px;border-right-style:solid;border-right-color:#CCC;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#CCC;padding:10px;color:#000000;background-color:#FFF;font-size:12px;width:100%;border-radius:0px">
                            <option value= 2>Bank BRI</option>
                            <option value= 13>Bank BNI</option>
                            <option value= 17>Bank BCA</option>
                            <option value= 11>Bank CIMB</option>
                            <option value= 18>Bank Mandiri</option>
                            <option value= 12>Bank Permata</option>
                            <option value= 33>OVO</option>
                            <option value= 34>Dana</option>
                            <option value= 29>LinkAja</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div style="text-align:center"><button type="submit" @click="postData" style="border:none;display:inline-block;text-align:center;overflow:hidden;cursor:pointer;text-decoration:none;padding:10px;margin:5px 0px 0px;font-size:14px;width:100%;border-radius:4px;color:#FFF;background-color:#3AAEE0">DAFTAR</button></div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_5" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 500px;margin: 0 auto;">
        <div class="u-row">

          <div id="u_column_6" class="u-col u-col-100 u_column">
            <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

              <div id="u_content_text_2" class="u_content_text" style="overflow-wrap: break-word;padding: 10px;">

                <div style="color: #ffffff; line-height: 140%; text-align: left; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%;">Pertanyaan dan info lebih lanjut, silahkan menghubungi kami melalui nomor WA berikut:<span style="color: #fbeeb8; font-size: 14px; line-height: 19.6px;"> <span style="font-size: 14px; line-height: 19.6px;"><a style="color: #fbeeb8;" href="https://api.whatsapp.com/send/?phone=6282112140240&text=Hi+Paideia%21+Saya+mendapatkan+e-busines+card+Anda.+Saya+ingin+mengetahui+lebih+lanjut+mengenai+layanan+jasa+konsultasi+dan+produk+yang+ditawarkan+oleh+Paideia.+Terima+kasih&app_absent=0" target="_blank" rel="noopener">+62 821-1214-0240</a></span></span>
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>