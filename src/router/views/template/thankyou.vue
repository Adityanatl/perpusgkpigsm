<script>
import { Carousel, Slide } from "vue-carousel";

/**
 * Crypto ICO-landing page
 */
export default {
  components: { Carousel, Slide },
  data() {
    return {
      completed: false
    };
  },
  created() {
    const urlParams = this.$route.query
    if ('status' in urlParams && urlParams.status !== '2') {
      this.$router.push("/")
      return
    } else if ('TXN_STATUS' in urlParams && urlParams.TXN_STATUS !== 'S') {
      this.$router.push("/")
      return
    }

    this.completed = true
  },
  destroyed() {
    
  },  
  mounted() {
    
  },
  methods: {

  }
};
</script>

<template>

  <div v-if="completed" id="u_body" class="u_body" style="min-height: 100vh; background-color: #ffffff; font-family: arial,helvetica,sans-serif;">

    <div id="u_row_2" class="u_row v-row-background-color" style="padding: 0px;">
      <div class="container" style="max-width: 500px;margin: 0 auto;">
        <div class="u-row">

          <div id="u_column_2" class="u-col u-col-100 u_column">
            <div class="v-col-background-color" style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_1" class="u_row v-row-background-color" style="padding: 17px;">
      <div class="container" style="max-width: 500px;margin: 0 auto;">
        <div class="u-row">

          <div id="u_column_1" class="u-col u-col-100 u_column">
            <div class="v-col-background-color" style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

              <div id="u_content_image_1" class="u_content_image" style="overflow-wrap: break-word;padding: 10px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="Image" src="https://s3.amazonaws.com/unroll-images-production/projects%2F12163%2F1613743445529-Main+Logo+Guru+Kreator+%281%29.png" style="width: 33%;max-width: 33%;" title="Image" />

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_3" class="u_row v-row-background-color" style="padding: 0px;">
      <div class="container" style="max-width: 500px;margin: 0 auto;">
        <div class="u-row">

          <div id="u_column_3" class="u-col u-col-100 u_column">
            <div class="v-col-background-color" style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

              <div id="u_content_heading_1" class="u_content_heading" style="overflow-wrap: break-word;padding: 0px;">

                <h1 style="margin: 0px; color: #14547e; line-height: 150%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: impact,chicago; font-size: 49px;">
                  Thank You!
                </h1>

              </div>

              <div id="u_content_image_2" class="u_content_image" style="overflow-wrap: break-word;padding: 10px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="Image" src="https://s3.amazonaws.com/unroll-images-production/projects%2F12163%2F1613743666758-check.png" style="width: 18%;max-width: 18%;" title="Image" />

                </div>

              </div>

              <div id="u_content_text_1" class="u_content_text" style="overflow-wrap: break-word;padding: 10px;">

                <div style="color: #000000; line-height: 140%; text-align: left; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 16px; line-height: 22.4px;">Terima kasih atas pembayaran yang Anda lakukan.</span></p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_4" class="u_row v-row-background-color" style="padding: 0px;">
      <div class="container" style="max-width: 500px;margin: 0 auto;">
        <div class="u-row">

          <div id="u_column_4" class="u-col u-col-100 u_column">
            <div class="v-col-background-color" style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

              <div id="u_content_text_2" class="u_content_text" style="overflow-wrap: break-word;padding: 10px;">

                <div style="color: #000000; line-height: 140%; text-align: left; word-wrap: break-word;">
                  <p style="font-size: 14px; line-height: 140%; text-align: center;"><a href="https://gurukreator.id/" target="_self">Kembali ke Halaman Utama</a></p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

</template>