import Swal from "sweetalert2";
<script>
import vue2Dropzone from 'vue2-dropzone'
import Multiselect from 'vue-multiselect'

import Layout from '../../layouts/main'
import PageHeader from '@/components/page-header'
import appConfig from "@/app.config";
import Vue from "vue";
import Swal from "sweetalert2";
/**
 * Add-product component
 */
export default {
   page: {
    title: "Add TEMA",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { vueDropzone: vue2Dropzone, Multiselect, Layout, PageHeader },
  data() {
    return {
      title: 'Add TEMA',
      items: [
        {
          text: 'TEMA',
          href: '/',
        },
        {
          text: 'Add TEMA',
          active: true,
        },
      ],

      value: null,
      value1: null,
      payload: { "name": "", "semester": 0, "tingkat_sekolah": "" },
      tingkat_sekolahs:[
        'TK', 'SD-1', 'SD-2', 'SD-3', 'SD-4', 'SD-5',  'SD-6', 'SMP-7', 'SMP-8', 'SMP-9', 'SMA-10', 'SMA-11', 'SMA-12'],
      searchMapelName: '',
      selectedToogle: 0,
      listMapel: []
    }
  },
  methods:{
     searchMapel(){
       if (this.searchMapelName==''){
         this.listMapel = []
       } else {
         let paramsTemp = queryString.stringify({
                   ...{
                     name: this.searchMapelName,
                     sort: 'name',
                     page: 1,
                     limit: 100
                   }
                   , ...this.options
                 }
         )
         // this.stillLoading=true
         this.$store.dispatch(
                 'mapel/GET_TEMAS', {masterType: this.$route.meta.name, params: paramsTemp}
         ).then(() => {

           this.stillLoading = false
           // return tableData
           this.listMapel = (this.$store.getters['tema/temas']) ? this.$store.getters['tema/temas'] : []
         }).catch(function () {
           // this.stillLoading=false
           this.listMapel = []
         })
       }
    },
    saveData(){
      this.$store.dispatch(
              'tema/POST_TEMAS', this.payload
      ).then(() => {
        this.successmsg()
      }).catch(function () {
        // this.stillLoading=false
        // this.listMapel = []
        this.warningmsg('Failed to save')
      })
    },
    successmsg() {
      Vue.swal({
        position: "top-end",
        icon: "success",
        title: "Your data has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    },
    warningmsg(text) {
      Vue.swal({
        position: "top-end",
        icon: "warning",
        title: text,
        showConfirmButton: false,
        timer: 1500
      });
    },

  }
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
              <div class="row">
                <div class="col-lg-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="form-group">
                        <label for="materiname">Name</label>
                        <input id="materiname" v-model="payload.name" name="materiname" type="text" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label for="materimapelid">Semester</label>
                        <input
                          id="materimapelid"
                          v-model="payload.semester"
                          name="materimapelid"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group">
                        <label class="control-label">Tingkat Sekolah</label>
                        <multiselect v-model="payload.tingkat_sekolah" :options="tingkat_sekolah"></multiselect>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              <button class="btn btn-primary mr-1" @click="saveData">Save Changes</button>


      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
