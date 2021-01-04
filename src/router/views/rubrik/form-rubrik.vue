<script>
  import Layout from '../../layouts/main'
  import PageHeader from '@/components/page-header'
  import appConfig from "@/app.config";
  import Vue from "vue";
  import p404 from '../utility/404.vue'
  import moment from 'moment'
  import Multiselect from 'vue-multiselect'
  import Swal from "sweetalert2";
  /**
   * Add-product component
   */
  export default {
    page: {
      title: "Add Rubrik",
      meta: [{ name: "description", content: appConfig.description }]
    },
    components: { Layout, PageHeader, p404 },
    data() {
      const modalData = {
        name: ''
      }
      return {
        title: 'Add Rubrik',
        items: [
          {
            text: 'Rubrik',
            href: '/',
          },
          {
            text: 'Add Rubrik',
            active: true,
          },
        ],

        value: null,
        value1: null,
        step: { id: 0, number: 0, name: "", duration: "", description: "", other_source: "" },
        payload: {
          id: 0,
          name: "",
          jenjang_id: "",
          tingkat_sekolah_id: null,
          description: "",
          jenis_id: null,
          mapel_id: "",
          mapel_name: "",
          tema: '',
          template_from: '',
          template_id: 0,
          kriterias: []
        },
        jenjang:[
          {id:0, name:'TK', checked:false},
          {id:1, name:'SD', checked:false},
          {id:2, name:'SMP', checked:false},
          {id:3, name:'SMA', checked:false}
        ],
        tingkat_sekolahs:[
          'TK', 'SD-1', 'SD-2', 'SD-3', 'SD-4', 'SD-5',  'SD-6', 'SMP-7', 'SMP-8', 'SMP-9', 'SMA-10', 'SMA-11', 'SMA-12'],
        jenis:['Holistik', 'Analitik'],
        searchName: '',
        selectedToogle: 0,
        selectedSearch: 'Cari Pendekatan Pembelajaran',
        listSearch:['Cari Pendekatan Pembelajaran', 'Cari Profil Pembelajaran', 'Cari Kunci Pembelajaran'],
        columns: [
            { field: 'checkbox', label: 'Action' },
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
        indexDetails : 0,
        modalData: modalData,
      }
    },
    mounted() {
      if ( this.$route.meta.mode=='edit' ){
        this.notFound = true
        this.loadData(this.$route.params.id)
      } else {
        this.stillLoading = false

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
                'rubrik/GET_RUBRIK', idForm
        ).then((resp) => {

          if (resp.data.code==200){
            this.notFound = false
            this.payload=this.$store.getters['rubrik/rubrik']
            this.payload.tanggal_mulai = moment(this.payload.tanggal_mulai,'DD-MM-YYYY').format('YYYY-MM-DD')
            this.payload.tanggal_selesai = moment(this.payload.tanggal_selesai,'DD-MM-YYYY').format('YYYY-MM-DD')
            for (var i = 0; i < this.payload.jenjang_id.split(",").length; i++) {
              this.jenjang[i].checked = true
            }
            this.notFound = false
          } else {
            this.warningmessage();
          }
        }).catch(function () {

        })
        this.stillLoading = false
      },
      viewSearch(selectedSearch, index){
        this.columns= [
          { field: 'checkbox', label: 'Action' },
          { field: 'id', label: 'Id' },
          { field: 'name', label: 'name' }
        ]
        this.indexDetails = index
        this.selectedSearch = selectedSearch
        if (this.selectedSearch === 'Cari Mata Pelajaran') {
          this.stringDispatch = 'mapel/GET_MAPELS'
          this.stringDispatchPaginate = 'mapel/paginate'
          this.stringDispatchData = 'mapel/mapels'
          this.tempPembelajaranId = this.payload.mapel_id
          this.tempPembelajaranName = this.payload.mapel_name
        } else if (this.selectedSearch === 'Cari Mata Pelajaran Detail') {
          this.stringDispatch = 'mapel/GET_MAPELS'
          this.stringDispatchPaginate = 'mapel/paginate'
          this.stringDispatchData = 'mapel/mapels'
          this.tempPembelajaranId = this.payload.kriterias[this.indexDetails].mapel_id
          this.tempPembelajaranName = this.payload.kriterias[this.indexDetails].mapel_name
        } else if (this.selectedSearch === 'Cari Materi') {
          this.stringDispatch = 'materi/GET_MATERIS'
          this.stringDispatchPaginate = 'materi/paginate'
          this.stringDispatchData = 'materi/materis'
          this.tempPembelajaranId = this.payload.kriterias[this.indexDetails].materi_id
          this.tempPembelajaranName = this.payload.kriterias[this.indexDetails].materi_name
        }

        this.onSearch()
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
      addKriteria(){
        const payload = this.payload
        if (payload.jenis_id != null) {
          let kriteria = {
            name: "",
            poin: "",
            description: "",
          }
          payload.kriterias.push(kriteria)
        } else {
          Swal.fire("Pilih Jenis!", "Pilih Jenis Rubrik terlebih dahulu.", "warning");
        }
      },
      addKriteriaAnalitik() {
        const payload = this.payload
        payload.kriterias.push({
          name: this.modalData.name,
          tingkatans: [{
            name: "",
            poin: "",
            description: "",
          }]
        })
      },
      addTingkatan(kriteria_index) {
        this.payload.kriterias[kriteria_index].tingkatans.push({
          name: "",
          poin: "",
          description: "",
        })
      },
      removeKriteria(index_kriteria){
        this.payload.kriterias.splice(index_kriteria, 1)
      },
      removeTingkatan(index_kriteria, index_tingkatan){
        const kriteria = this.payload.kriterias[index_kriteria]
        kriteria.tingkatans.splice(index_tingkatan, 1)
      },
      resetModal() {
        this.modalData.name = ""
      },
      onJenisRubrikChange() {
        const payload = this.payload
        console.log(payload.kriterias)
        if (payload.kriterias.length > 0) {
          Swal.fire({
            title: "Yakin merubah jenis?",
            text: "Data kriteria yang sudah ada akan terhapus",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#34c38f",
            cancelButtonColor: "#f46a6a",
            confirmButtonText: "Ya hapus"
          }).then(result => {
            if (result.value) {
              payload.kriterias = []
            }
          });
        }
      },
      saveData(){
        if ( this.$route.meta.mode=='edit' ){
          this.$store.dispatch(
                  'rubrik/PUT_RUBRIK', this.payload
          ).then(() => {
            this.successmsg()
            this.$router.push('/rubrik')
          }).catch(function () {
            this.warningmessage('Failed to save')
          })

        } else {
          this.$store.dispatch(
                  'rubrik/POST_RUBRIK', this.payload
          ).then(() => {
            this.successmsg()
            this.$router.push('/rubrik')
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
      },
      applyModal(){
        if (this.selectedSearch === 'Cari Mata Pelajaran') {
          this.payload.mapel_id = this.tempPembelajaranId
          this.payload.mapel_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Pendekatan Pembelajaran') {
          this.payload.kriterias[this.indexDetails].domain_pembelajaran_id = this.tempPembelajaranId
          this.payload.kriterias[this.indexDetails].domain_pembelajaran_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Profil Pembelajaran'){
          this.payload.profil_pembelajaran_id = this.tempPembelajaranId
          this.payload.profil_pembelajaran_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kunci Pembelajaran'){
          this.payload.kunci_pembelajaran_id = this.tempPembelajaranId
          this.payload.kunci_pembelajaran_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Mata Pelajaran Detail') {
          this.payload.kriterias[this.indexDetails].mapel_id = this.tempPembelajaranId
          this.payload.kriterias[this.indexDetails].mapel_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-1') {
          this.payload.kriterias[this.indexDetails].ki1 = this.tempPembelajaranId
          this.payload.kriterias[this.indexDetails].ki1_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-2') {
          this.payload.kriterias[this.indexDetails].ki2 = this.tempPembelajaranId
          this.payload.kriterias[this.indexDetails].ki2_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-3') {
          this.payload.kriterias[this.indexDetails].ki3 = this.tempPembelajaranId
          this.payload.kriterias[this.indexDetails].ki3_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-4') {
          this.payload.kriterias[this.indexDetails].ki4 = this.tempPembelajaranId
          this.payload.kriterias[this.indexDetails].ki4_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Materi') {
          this.payload.kriterias[this.indexDetails].materi_id = this.tempPembelajaranId
          this.payload.kriterias[this.indexDetails].materi_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Domain Pembelajaran') {
          this.payload.kriterias[this.indexDetails].domain_pembelajaran_id = this.tempPembelajaranId
          this.payload.kriterias[this.indexDetails].domain_pembelajaran_name = this.tempPembelajaranName
        }

      },
      pilihSearch(id,name){
          this.tempPembelajaranId = id
          this.tempPembelajaranName = name
      },
      pembelajaranChecked(id){
        for(let val of this.tempPembelajaranId.split(",")) {
          if ( val === id.toString()) {
            return true
          }
        }
        return false
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
                      <label >Name</label>
                      <input  v-model="payload.name" name="rubrikname" type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label>Tema/Topik</label>
                      <input v-model="payload.tema" type="text" class="form-control" />
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
                      <label class="control-label">Tingkat Sekolah</label>
                      <select v-model="payload.tingkat_sekolah_id" class="form-control" name="category">
                        <option
                                v-for="(option,index) in tingkat_sekolahs"
                                :key="index"
                                :value="index.toString()"
                        >{{ option }}</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label >Mata Pelajaran</label>
                      <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Mata Pelajaran',0)">
                        <i class="mdi mdi-table-search label-icon" ></i> Search
                      </b-button>
                      <input v-model="payload.mapel_id" type="text" class="form-control" />
                      <label >{{payload.mapel_name}}</label>
                    </div>
                    <div class="form-group">
                      <label class="control-label">Jenis</label>
                      <select v-model="payload.jenis_id" class="form-control" name="category" :disabled="this.$route.meta.mode=='edit'" @change="onJenisRubrikChange()">
                        <option
                                v-for="(option,index) in jenis"
                                :key="index"
                                :value="index"
                        >{{ option }}</option>
                      </select>
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
                  </div>
                </div>
                <div class="accordion" role="tablist">
                  <div v-if="payload.jenis_id === 1">
                    <b-button v-b-modal.modal-1 variant="success">Add Kriteria</b-button>
                    <b-modal
                        id="modal-1"
                        title="Kriteria"
                        @show="resetModal"
                        @hidden="resetModal"
                        @ok="addKriteriaAnalitik">
                      <div class="form-group">
                        <label>Nama Kriteria</label>
                        <input v-model="modalData.name" type="text" class="form-control" />
                      </div>
                    </b-modal>
                    <button class="btn btn-primary mr-1" @click="saveData">Save Changes</button>
                  </div>
                  <div v-else>
                    <button class="btn btn-success mr-2" @click="addKriteria">Add Kriteria</button>
                    <button class="btn btn-primary mr-1" @click="saveData">Save Changes</button>
                  </div>
                  <div class="panel panel-default" v-for="(kriteria, index) in payload.kriterias" :key="index">
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <h2 class="mb-0">
                          <b-button block v-b-toggle="'accordion-' + index" variant="info">#{{ index+1 }}-{{ kriteria.name }}</b-button>
                        </h2>
                      </b-card-header>
                      <b-collapse :id="'accordion-'+index" visible accordion="my-accordion" role="tabpanel">
                        <div v-if="payload.jenis_id === 1">
                          <div class="mt-3 ml-4">
                            <button class="btn btn-success mr-2" @click="addTingkatan(index)">Add Tingkatan</button>
                          </div>
                          <b-card-body v-for="(tingkatan, tingkatan_index) in kriteria.tingkatans" :key="tingkatan_index">
                            <div class="form-group">
                              <label >Name</label>
                              <input  v-model="tingkatan.name" name="kriteria_name" type="text" class="form-control" />
                            </div>
                            <div class="form-group">
                              <label>Poin</label>
                              <input  v-model="tingkatan.poin"  type="text" class="form-control" />
                            </div>
                            <div class="form-group">
                              <label class="control-label">Description</label>
                              <b-form-textarea
                                  v-model="tingkatan.description"
                                  id="billing-address"
                                  rows="7"
                                  placeholder="Description"
                              ></b-form-textarea>
                            </div>

                            <div class="form-group row">
                              <div class="col-md-12 text-center">
                                <button type="button" class="btn btn-danger" @click="removeTingkatan(index, tingkatan_index)">Hapus</button>
                              </div>
                            </div>
                          </b-card-body>
                        </div>
                        <div v-else>
                          <b-card-body>
                            <div class="form-group">
                              <label >Name</label>
                              <input  v-model="kriteria.name" name="kriteria_name" type="text" class="form-control" />
                            </div>
                            <div class="form-group">
                              <label>Poin</label>
                              <input  v-model="kriteria.poin"  type="number" class="form-control" />
                            </div>
                            <div class="form-group">
                              <label class="control-label">Description</label>
                              <b-form-textarea
                                  v-model="kriteria.description"
                                  id="billing-address"
                                  rows="7"
                                  placeholder="Description"
                              ></b-form-textarea>
                            </div>

                            <div class="form-group row">
                              <div class="col-md-12 text-center">
                                <button type="button" class="btn btn-danger" @click="removeKriteria(index)">Hapus</button>
                              </div>
                            </div>
                          </b-card-body>
                        </div>
                      </b-collapse>
                    </b-card>
                  </div>
                </div>
              </div>
            </div>
        </div>
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
      </vue-good-table>
    </b-modal>

    <!-- end row -->
  </Layout>
</template>
