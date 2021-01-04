<script>
  import Multiselect from 'vue-multiselect'

  import Layout from '../../layouts/main'
  import PageHeader from '@/components/page-header'
  import appConfig from "@/app.config";
  import Vue from "vue";
  import p404 from '../utility/404.vue'
  /**
   * Add-product component
   */
  export default {
    page: {
      title: "Add Strategic",
      meta: [{ name: "description", content: appConfig.description }]
    },
    components: { Multiselect, Layout, PageHeader, p404 },
    data() {
      return {
        title: 'Add Strategic',
        items: [
          {
            text: 'Strategic',
            href: '/',
          },
          {
            text: 'Add Strategic',
            active: true,
          },
        ],

        value: null,
        value1: null,
        step: { id: 0, number: 0, name: "", duration: "", description: "", other_source: "" },
        payload: {
          name:"",
          jenjang_id: "",
          domain_pembelajaran_id:"",
          domain_pembelajaran_name:"",
          profil_pembelajaran_id:"",
          profil_pembelajaran_name:"",
          kunci_pembelajaran_id:"",
          kunci_pembelajaran_name:"",
          description:"",steps:[]},
        jenjang:[
          {id:0, name:'TK', checked:false}, {id:1, name:'SD', checked:false}, {id:2, name:'SMP', checked:false},
          {id:3, name:'SMA', checked:false}],
        searchName: '',
        selectedToogle: 0,
        // listPembelajaran: [],
        // totalRecordsPembelajaran: 0,
        selectedSearch: 'Cari Pendekatan Pembelajaran',
        listSearch:['Cari Pendekatan Pembelajaran', 'Cari Profil Pembelajaran', 'Cari Kunci Pembelajaran'],
        columns: [
            { field: 'checkbox', label: 'Check' },
            { field: 'id', label: 'Id' },
            { field: 'name', label: 'name' }
            ],
        filters: [
          { field: 'id', label: 'Id' },
          { field: 'name', label: 'name' }
        ],
        perPage: 10,
        options: {
          limit: 11,
          page: 1,
          sort: '-id',
          name: '',
        },
        stringDispatch : 'domainpembelajaran/GET_DOMAIN_PEMBELAJARANS',
        stringDispatchPaginate: 'domainpembelajaran/paginate',
        stringDispatchData : 'domainpembelajaran/domain_pembelajarans',
        idForm: 0,
        stillLoading: true,
        notFound: false,
        tempPembelajaranId: '',
        tempPembelajaranName: '',
      }
    },
    mounted() {
      if ( this.$route.meta.mode=='edit' ){
        this.notFound = true
        this.loadData(this.$route.params.id)
      } else {
        this.stillLoading = false
        this.payload.steps.push({ id: 0, number: 0, name: "", duration: "", description: "", other_source: "" })
      }
      this.selectedSearchChanged()


    },
    computed: {
      listPembelajaran: function() {
        let aaa = (this.$store.getters['domainpembelajaran/domain_pembelajarans']) ? this.$store.getters['domainpembelajaran/GET_DOMAIN_PEMBELAJARANS'] : []
        return  (this.$store.getters[this.stringDispatchData]) ? this.$store.getters[this.stringDispatchData] : []
      },
      totalRecordsPembelajaran: function() {
        return (this.$store.getters[this.stringDispatchPaginate].total) ? this.$store.getters[this.stringDispatchPaginate].total : 0
      }
    },
    methods:{
      loadData(idForm){
        this.stillLoading = true
        this.$store.dispatch(
                'strategic/GET_STRATEGIC', idForm
        ).then((resp) => {

          if (resp.data.code==200){
            this.notFound = false
            this.payload=this.$store.getters['strategic/strategic']
            var jenjang_array = this.payload.jenjang_id.split(",")
            for (var i = 0; i < jenjang_array.length; i++) {
              if (jenjang_array[i] !== '') {
                this.jenjang[jenjang_array[i]].checked = true
              }
            }
            this.notFound = false
          } else {
            this.warningmessage();
          }
        }).catch(function () {

        })
        this.stillLoading = false
      },
      viewSearch(selectedSearch){
        this.selectedSearch = selectedSearch
        if (this.selectedSearch === 'Cari Pendekatan Pembelajaran') {
          this.stringDispatch = 'domainpembelajaran/GET_DOMAIN_PEMBELAJARANS'
          this.stringDispatchPaginate = 'domainpembelajaran/paginate'
          this.stringDispatchData = 'domainpembelajaran/domain_pembelajarans'
          this.tempPembelajaranId = this.payload.domain_pembelajaran_id
          this.tempPembelajaranName = this.payload.domain_pembelajaran_name
        } else if (this.selectedSearch === 'Cari Profil Pembelajaran'){
          this.stringDispatch = 'profilpembelajaran/GET_PROFIL_PEMBELAJARANS'
          this.stringDispatchPaginate = 'profilpembelajaran/paginate'
          this.stringDispatchData = 'profilpembelajaran/profil_pembelajarans'
          this.tempPembelajaranId = this.payload.profil_pembelajaran_id
          this.tempPembelajaranName = this.payload.profil_pembelajaran_name
        } else if (this.selectedSearch === 'Cari Kunci Pembelajaran'){
          this.stringDispatch = 'kuncipembelajaran/GET_KUNCI_PEMBELAJARANS'
          this.stringDispatchPaginate = 'kuncipembelajaran/paginate'
          this.stringDispatchData = 'kuncipembelajaran/kunci_pembelajarans'
          this.tempPembelajaranId = this.payload.kunci_pembelajaran_id
          this.tempPembelajaranName = this.payload.kunci_pembelajaran_name
        }
        this.onSearch()
      },
      selectedSearchChanged(){
        if (this.selectedSearch === 'Cari Pendekatan Pembelajaran') {
          this.stringDispatch = 'domainpembelajaran/GET_DOMAIN_PEMBELAJARANS'
          this.stringDispatchPaginate = 'domainpembelajaran/paginate'
          this.stringDispatchData = 'domainpembelajaran/domain_pembelajarans'
        } else if (this.selectedSearch === 'Cari Profil Pembelajaran'){
          this.stringDispatch = 'profilpembelajaran/GET_PROFIL_PEMBELAJARANS'
          this.stringDispatchPaginate = 'profilpembelajaran/paginate'
          this.stringDispatchData = 'profilpembelajaran/profil_pembelajarans'
        } else if (this.selectedSearch === 'Cari Kunci Pembelajaran'){
          this.stringDispatch = 'kuncipembelajaran/GET_KUNCI_PEMBELAJARANS'
          this.stringDispatchPaginate = 'kuncipembelajaran/paginate'
          this.stringDispatchData = 'kuncipembelajaran/kunci_pembelajarans'
        }
        this.onSearch()
      },
      addStep(){
        this.payload.steps.push({ id: 0, number: 0, name: "", duration: "", description: "", other_source: "" })
      },
      removeStep(indexStep){
        let temp = []
        for (var i = 0; i < this.payload.steps.length; i++) {
          if (i != indexStep) temp.push(this.payload.steps[i])
        }
        this.payload.steps = temp

      },
      saveData(){
        if ( this.$route.meta.mode=='edit' ){
          this.$store.dispatch(
                  'strategic/PUT_STRATEGIC', this.payload
          ).then(() => {
            this.successmsg()
            this.$router.push('/strategic')
          }).catch(function () {
            this.warningmessage('Failed to save')
          })

        } else {
          this.$store.dispatch(
                  'strategic/POST_STRATEGIC', this.payload
          ).then(() => {
            this.successmsg()
            this.$router.push('/strategic')
          }).catch(function () {
            this.warningmessage()
          })
        }
      },
      warningmessage(text_data) {
        Vue.swal({
          position: "top-end",
          icon: "warning",
          title: text_data,
          showConfirmButton: false,
          timer: 1500
        });
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
      jenjangClicked(e, id){
        if (e==="true") {
          this.jenjang[id].checked = true
        } else {
          this.jenjang[id].checked = false
        }
        this.formatJenjangId()

      },
      formatJenjangId(){
        this.payload.jenjang_id = ""
        for (var i = 0; i < this.jenjang.length; i++) {
          if (this.jenjang[i].checked){
            this.payload.jenjang_id = this.payload.jenjang_id + i + ","
          }
        }
      },
      pembelajaranClicked(e, id, name){
        this.tempPembelajaranId = this.tempPembelajaranId.replace(id + ',','')
        this.tempPembelajaranName= this.tempPembelajaranName.replace(name + ';','')
        if (e==="true") {
          this.tempPembelajaranId = this.tempPembelajaranId + id + ','
          this.tempPembelajaranName = this.tempPembelajaranName + name + ';'
        }
      },
      applyModal(){
        if (this.selectedSearch === 'Cari Pendekatan Pembelajaran') {
          this.payload.domain_pembelajaran_id = this.tempPembelajaranId
          this.payload.domain_pembelajaran_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Profil Pembelajaran'){
          this.payload.profil_pembelajaran_id = this.tempPembelajaranId
          this.payload.profil_pembelajaran_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kunci Pembelajaran'){
          this.payload.kunci_pembelajaran_id = this.tempPembelajaranId
          this.payload.kunci_pembelajaran_name = this.tempPembelajaranName
        }
      },
      pembelajaranChecked(id){
        for(let val of this.tempPembelajaranId.split(",")) {
          if ( val === id.toString()) {
            return true
          }
        }
        return false
        // if (this.selectedSearch === 'Cari Pendekatan Pembelajaran') {
        //   for(let val of this.tempPembelajaranId.split(",")) {
        //     if ( val === id.toString()) {
        //       return true
        //     }
        //   }
        // } else if (this.selectedSearch === 'Cari Kunci Pembelajaran') {
        //   for(let val of this.payload.kunci_pembelajaran_id.split(",")) {
        //     if ( val === id.toString()) {
        //       return true
        //     }
        //   }
        // } else if (this.selectedSearch === 'Cari Profil Pembelajaran') {
        //   for(let val of this.payload.profil_pembelajaran_id.split(",")) {
        //     if ( val === id.toString()) {
        //       return true
        //     }
        //   }
        // }
        // return false
      },
      onPageChange(params) {

        this.options.limit = params.currentPerPage;
        this.options.page = params.currentPage;
        let paramsTemp = queryString.stringify({
          ...{
            limit: params.currentPerPage,
            page: params.currentPage,
            sort: '-id',
          },
          ...this.options,
        });
        this.$store.dispatch(this.stringDispatch, {
          params: paramsTemp,

        });
      },

      onSearch() {
        this.options.page = 1;
        let paramsTemp = queryString.stringify({
          ...{
            limit: null,
            page: null,
            name: null,
            sort: '-id',
          },
          ...this.options,
        });
        this.$store.dispatch(this.stringDispatch, {
          params: paramsTemp,
        });
      },

    }


  }
</script>

<template>
  <Layout>
    <div v-if="this.stillLoading == true">
      <i class="bx bx-loader bx-spin font-size-72 align-middle mr-12" ></i> Loading
    </div>
    <div v-else>
      <PageHeader :title="title" :items="items" />
      <p404 class="account-pages my-5 pt-5" v-if="this.notFound == true"/>
      <div class="row" v-else>
        <div class="col-12">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="strategicname">Name</label>
                          <input id="strategicname" v-model="payload.name" name="strategicname" type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label class="control-label" >Jenjang</label>
                            <b-form-checkbox
                                    v-for="data in jenjang" :key="data.id"
                                    class="mt-2"
                                    :checked="data.checked"
                                    value="true"
                                    unchecked-value="false"
                                    @change="jenjangClicked($event, data.id)"
                            >{{data.name}}</b-form-checkbox>
                        </div>
                        <div class="form-group">
                          <label class="control-label">Description</label>
                          <b-form-textarea
                                  v-model="payload.description"
                                    id="billing-address"
                                    rows="7"
                                    placeholder="Description"
                            ></b-form-textarea>

                        </div>
                        <div class="form-group">
                          <label for="strategic_domain_pembelajaran_id">Pendekatan Pembelajaran ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Pendekatan Pembelajaran')">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input id="strategic_domain_pembelajaran_id" v-model="payload.domain_pembelajaran_id" name="strategic_domain_pembelajaran_id" type="text" class="form-control" />
                          <label >{{payload.domain_pembelajaran_name}}</label>
                        </div>
                        <div class="form-group">
                          <label for="strategic_profil_pembelajaran_id">Profil Pembelajaran ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Profil Pembelajaran')">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input id="strategic_profil_pembelajaran_id" v-model="payload.profil_pembelajaran_id" name="strategic_profil_pembelajaran_id" type="text" class="form-control" />
                          <label >{{payload.profil_pembelajaran_name}}</label>
                        </div>
                        <div class="form-group">
                          <label for="strategic_kunci_pembelajaran_id">Kunci Pembelajaran ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Kunci Pembelajaran')">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input id="strategic_kunci_pembelajaran_id" v-model="payload.kunci_pembelajaran_id" name="strategic_kunci_pembelajaran_id" type="text" class="form-control" />
                          <label >{{payload.kunci_pembelajaran_name}}</label>
                        </div>

                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body" v-for="(step,index) in payload.steps" :key="index">

                        <div class="form-group" >

                          <label >Number</label>
                          <button class="btn btn-warning mr-2" @click="removeStep(index)">Remove</button>
                          <input v-model="step.number" type="text" class="form-control" />
                        </div>

                        <div class="form-group">
                          <label >Name</label>
                          <input v-model="step.name" type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label >Duration</label>
                          <input v-model="step.duration" type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label >Other Source</label>
                          <input v-model="step.other_source" type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label class="control-label">Description</label>
                          <b-form-textarea
                                  v-model="step.description"
                                  rows="3"
                                  placeholder="Description"
                          ></b-form-textarea>

                        </div>
                      </div>
                    </div>

                  </div>


                  </div>
                </div>
                <button class="btn btn-success mr-2" @click="addStep">Add Step</button>
                <button class="btn btn-primary mr-1" @click="saveData">Save Changes</button>


        </div>

    </div>
    <b-modal id="modal-pembelajaran" size="xl" :title="selectedSearch" title-class="font-18" @ok="applyModal">
      <h1>{{ tempPembelajaranId}}</h1>
      <h5>{{ tempPembelajaranName}}</h5>
      <div class="row align-items-left">
        <div class="col-xl-12 order-2 order-xl-1">
          <div class="form-group m-form__group row align-items-center">
            <div
                    class="col-md-4"
                    v-for="item in filters"
                    v-bind:key="item.id"
            >

              <div
                      v-if="item.field != 'btn'"
                      class="m-input-icon m-input-icon--left"
              >
                <input
                        @change="onSearch"
                        v-model="options[item.field]"
                        class="form-control m-input"
                        :placeholder="item.label"
                />
                <span
                        class="m-input-icon__icon m-input-icon__icon--left"
                >
                            <span>
                              <i class="la la-search"></i>
                            </span>
                          </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <vue-good-table
              mode="remote"
              :pagination-options="{
                                    enabled: true,
                                    mode: 'pages',
                                    perPage: perPage,
                                    position: 'bottom',
                                    perPageDropdown: [5, 10],
                                    dropdownAllowAll: false,
                                    nextLabel: 'next',
                                    prevLabel: 'prev',
                                    rowsPerPageLabel: 'Rows per page',
                                    ofLabel: 'of',
                                    pageLabel: 'page', // for 'pages' mode
                                    allLabel: 'All',
                                  }"
              :totalRows="totalRecordsPembelajaran"
              :rows="listPembelajaran"
              :columns="columns"
              :sort-options="{
                                    enabled: false,
                                  }"
              @on-page-change="onPageChange"
              @on-per-page-change="onPageChange"
      >
        <template slot="table-row" slot-scope="props">
          <div v-if="props.column.field == 'checkbox'">
            <b-form-checkbox
                    class="mt-2"
                    value="true"
                    unchecked-value="false"
                    :checked="pembelajaranChecked(props.row.id)"
                    @change="pembelajaranClicked($event, props.row.id, props.row.name)"
            ></b-form-checkbox>

          </div>
          <span v-else>
                                {{ props.formattedRow[props.column.field] }}
                              </span>
        </template>
      </vue-good-table>
    </b-modal>

    <!-- end row -->
  </Layout>
</template>
