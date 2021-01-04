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
    title: "Add KD",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { vueDropzone: vue2Dropzone, Multiselect, Layout, PageHeader },
  data() {
    return {
      title: 'Add KD',
      items: [
        {
          text: 'KD',
          href: '/',
        },
        {
          text: 'Add KD',
          active: true,
        },
      ],

      value: null,
      value1: null,
      payload: { "code":"", "description": "", "tingkat":"", "rumpun_id": "", "mapel_id": "", "ki_id": "", "jenjang_id": "" },
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
                 'mapel/GET_MAPELS', {masterType: this.$route.meta.name, params: paramsTemp}
         ).then(() => {

           this.stillLoading = false
           // return tableData
           this.listMapel = (this.$store.getters['mapel/mapels']) ? this.$store.getters['mapel/mapels'] : []
         }).catch(function () {
           // this.stillLoading=false
           this.listMapel = []
         })
       }
    },
    saveData(){
      this.$store.dispatch(
              'kd/POST_KD', this.payload
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
                        <label for="kdname">Code</label>
                        <input id="kdname" v-model="payload.name" name="kdname" type="text" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label for="kddescription">Description</label>
                        <input id="kddescription" v-model="payload.description" name="kddescription" type="text" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label for="kdtingkat">Tingkat</label>
                        <input id="kdtingkat" v-model="payload.tingkat" name="kdtingkat" type="text" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label for="kdrumpun_id">Rumpun ID</label>
                        <input
                          id="kdrumpun_id"
                          v-model="payload.rumpun_id"
                          name="kdrumpun_id"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group">
                        <label for="kdmapelid">Mapel ID</label>
                        <input
                          id="kdmapelid"
                          v-model="payload.mapel_id"
                          name="kdmapelid"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group">
                        <label for="kdki_id">Kompetensi Inti ID</label>
                        <input
                          id="kdki_id"
                          v-model="payload.ki_id"
                          name="kdki_id"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group">
                        <label for="kdjenjang_id">Jenjang ID</label>
                        <input
                          id="kdjenjang_id"
                          v-model="payload.jenjang_id"
                          name="kdjenjang_id"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="card">
                    <div class="card-body">
                      <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                        <label  class="d-inline-flex align-items-center">

                          <b-form-input
                                  id="searchmapel"
                                  name="searchmapel"
                                  v-model="searchMapelName"
                                  type="search"
                                  placeholder="cari mapel ..."
                                  @change="searchMapel"
                                  class="form-control form-control-sm ml-6"
                          ></b-form-input>
                        </label>
                      </div>
                      <b-form-group>
                        <b-form-radio
                                v-model="payload.mapel_id"
                                v-for="data in listMapel" :key="data.id"
                                class="custom-radio mb-3"
                                :value="data.id"
                        >{{data.name}}</b-form-radio>

                      </b-form-group>
                      <div class="form-group">

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
