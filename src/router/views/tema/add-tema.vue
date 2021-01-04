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
      payload: { 
        name: "", 
        semester: 0, 
        tingkat_sekolah_id: "" },
      tingkat_sekolah:[
        {id:0, name:'TK'},
        {id:1, name:'SD-1'},
        {id:2, name:'SD-2'},
        {id:3, name:'SD-3'},
        {id:4, name:'SD-4'},
        {id:5, name:'SD-5'},
        {id:6, name:'SD-6'},
        {id:7, name:'SMP-7'},
        {id:8, name:'SMP-8'},
        {id:9, name:'SMP-9'},
        {id:10, name:'SMA-10'},
        {id:11, name:'SM-11'},
        {id:12, name:'SMA-12'}],
      selectedToogle: 0,
    }
  },
  methods:{
    saveData(){
      this.$store.dispatch(
              'tema/POST_TEMA', this.payload
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
                        <input id="name" v-model="payload.name" name="name" type="text" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label for="semester">Semester</label>
                        <input
                          id="semester"
                          v-model="payload.semester"
                          name="semester"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group">
                        <label class="control-label">Tingkat Sekolah</label>
                        <multiselect v-model="payload.tingkat_sekolah_id" 
                          :options="tingkat_sekolah.map(type => type.id)" 
                          :custom-label="opt => tingkat_sekolah.find(x => x.id == opt).name">
                        </multiselect>
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
