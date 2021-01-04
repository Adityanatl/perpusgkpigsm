<script>
  import Layout from '../../layouts/main'
  import PageHeader from '@/components/page-header'
  import appConfig from "@/app.config";
  import Vue from "vue";
  import p404 from '../utility/404.vue'
  import moment from 'moment'
  import Multiselect from 'vue-multiselect'
  /**
   * Add-product component
   */
  export default {
    page: {
      title: "Add Silabus",
      meta: [{ name: "description", content: appConfig.description }]
    },
    components: { Layout, PageHeader, p404, Multiselect },
    data() {
      return {
        title: 'Add Silabus',
        items: [
          {
            text: 'Silabus',
            href: '/',
          },
          {
            text: 'Add Silabus',
            active: true,
          },
        ],

        value: null,
        value1: null,
        step: { id: 0, number: 0, name: "", duration: "", description: "", other_source: "" },
        payload: {
          id: 0,
          name: "",
          jenjang_id: null,
          semester: null,
          tingkat_sekolah_id: null,
          description: "",
          alokasi_waktu: 0,
          tanggal_mulai: "",
          tanggal_selesai: "",
          jenis_id: null,
          mapel_id: "",
          mapel_name: "",
          penilaian_pengetahuan: "",
          penilaian_keterampilan: "",
          penilaian_sikap: "",
          tema_id: 0,
          tema_name: '',
          subtema_id: 0,
          subtema_name: '',
          profil_pembelajaran_id: "",
          profil_pembelajaran_name: "",
          topik: "",
          details: [
            {
              id: 0,
              mapel_id: 0,
              mapel_name: '',
              ki1: "",
              ki2: "",
              ki3: "",
              ki4: "",
              materi_id: "",
              materi_name: "",
              domain_pembelajaran_id: "",
              domain_pembelajaran_name: "",
              iman: "",
              other_source: "",
              ki1_name: "",
              ki2_name: "",
              ki3_name: "",
              ki4_name: ""
            }
          ]},
        jenjang:['TK', 'SD', 'SMP', 'SMA'],
        semester:['Genap', 'Ganjil'],
        tingkat_sekolahs:[
          'TK', 'SD-1', 'SD-2', 'SD-3', 'SD-4', 'SD-5',  'SD-6', 'SMP-7', 'SMP-8', 'SMP-9', 'SMA-10', 'SMA-11', 'SMA-12'],
        jenis:['Tematik', 'Khusus Terpadu'],
        searchName: '',
        selectedToogle: 0,
        // listPembelajaran: [],
        // totalRecordsPembelajaran: 0,
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
        nilai_pengetahuans:['Tes Tertulis', 'Tes Lisan', 'Tes Penugasan'],
        nilai_keterampilans:['Portfolio', 'Proyek', 'Kinerja'],
        nilai_sikaps:['Observasi', 'Penilaian Diri', 'Antar Teman'],
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
                'silabus/GET_SILABUS', idForm
        ).then((resp) => {

          if (resp.data.code==200){
            this.notFound = false
            this.payload=this.$store.getters['silabus/silabus']
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
        if (this.selectedSearch === 'Cari Tema') {
          this.stringDispatch = 'tema/GET_TEMAS'
          this.stringDispatchPaginate = 'tema/paginate'
          this.stringDispatchData = 'tema/temas'
          this.tempPembelajaranId = this.payload.tema_id
          this.tempPembelajaranName = this.payload.tema_name
        }else if (this.selectedSearch === 'Cari Sub Tema') {
          this.stringDispatch = 'subtema/GET_SUBTEMAS'
          this.stringDispatchPaginate = 'subtema/paginate'
          this.stringDispatchData = 'subtema/subtemas'
          this.tempPembelajaranId = this.payload.subtema_id
          this.tempPembelajaranName = this.payload.subtema_name
        } else if (this.selectedSearch === 'Cari Mata Pelajaran') {
          this.stringDispatch = 'mapel/GET_MAPELS'
          this.stringDispatchPaginate = 'mapel/paginate'
          this.stringDispatchData = 'mapel/mapels'
          this.tempPembelajaranId = this.payload.mapel_id
          this.tempPembelajaranName = this.payload.mapel_name
        } else if (this.selectedSearch === 'Cari Pendekatan Pembelajaran') {
          this.stringDispatch = 'domainpembelajaran/GET_DOMAIN_PEMBELAJARANS'
          this.stringDispatchPaginate = 'domainpembelajaran/paginate'
          this.stringDispatchData = 'domainpembelajaran/domain_pembelajarans'
          this.tempPembelajaranId = this.payload.details[this.indexDetails].domain_pembelajaran_id
          // console.log('-1- ',len(this.tempPembelajaranId))
          // console.log('---- ',this.tempPembelajaranId.substring(len(this.tempPembelajaranId)-2, len(this.tempPembelajaranId)-1))
          // if (this.tempPembelajaranId.substring(len(this.tempPembelajaranId)-2, len(this.tempPembelajaranId)-1) != ',') {
          //   this.tempPembelajaranId = this.tempPembelajaranId + ','
          // };
          this.tempPembelajaranName = this.payload.details[this.indexDetails].domain_pembelajaran_name
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
        } else if (this.selectedSearch === 'Cari Mata Pelajaran Detail') {
          this.stringDispatch = 'mapel/GET_MAPELS'
          this.stringDispatchPaginate = 'mapel/paginate'
          this.stringDispatchData = 'mapel/mapels'
          this.tempPembelajaranId = this.payload.details[this.indexDetails].mapel_id
          this.tempPembelajaranName = this.payload.details[this.indexDetails].mapel_name
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-1'){
          this.stringDispatch = 'kd/GET_KDS'
          this.stringDispatchPaginate = 'kd/paginate'
          this.stringDispatchData = 'kd/kds'
          this.tempPembelajaranId = this.payload.details[this.indexDetails].ki1
          this.tempPembelajaranName = this.payload.details[this.indexDetails].ki1_name
          this.columns= [
            { field: 'checkbox', label: 'Action' },
            { field: 'id', label: 'Id' },
            { field: 'code', label: 'code' },
            { field: 'description', label: 'Description' }
          ]
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-2'){
          this.stringDispatch = 'kd/GET_KDS'
          this.stringDispatchPaginate = 'kd/paginate'
          this.stringDispatchData = 'kd/kds'
          this.tempPembelajaranId = this.payload.details[this.indexDetails].ki2
          this.tempPembelajaranName = this.payload.details[this.indexDetails].ki2_name
          this.columns= [
            { field: 'checkbox', label: 'Action' },
            { field: 'id', label: 'Id' },
            { field: 'code', label: 'code' },
            { field: 'description', label: 'Description' }
          ]
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-3'){
          this.stringDispatch = 'kd/GET_KDS'
          this.stringDispatchPaginate = 'kd/paginate'
          this.stringDispatchData = 'kd/kds'
          this.tempPembelajaranId = this.payload.details[this.indexDetails].ki3
          this.tempPembelajaranName = this.payload.details[this.indexDetails].ki3_name
          this.columns= [
            { field: 'checkbox', label: 'Action' },
            { field: 'id', label: 'Id' },
            { field: 'code', label: 'code' },
            { field: 'description', label: 'Description' }
          ]
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-4'){
          this.stringDispatch = 'kd/GET_KDS'
          this.stringDispatchPaginate = 'kd/paginate'
          this.stringDispatchData = 'kd/kds'
          this.tempPembelajaranId = this.payload.details[this.indexDetails].ki4
          this.tempPembelajaranName = this.payload.details[this.indexDetails].ki4_name
          this.columns= [
            { field: 'checkbox', label: 'Action' },
            { field: 'id', label: 'Id' },
            { field: 'code', label: 'code' },
            { field: 'description', label: 'Description' }
          ]
        } else if (this.selectedSearch === 'Cari Materi') {
          this.stringDispatch = 'materi/GET_MATERIS'
          this.stringDispatchPaginate = 'materi/paginate'
          this.stringDispatchData = 'materi/materis'
          this.tempPembelajaranId = this.payload.details[this.indexDetails].materi_id
          this.tempPembelajaranName = this.payload.details[this.indexDetails].materi_name
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
      addDetail(){
        this.payload.details.push({
          id: 0,
          mapel_id: 0,
          ki1: "",
          ki2: "",
          ki3: "",
          ki4: "",
          materi_id: "",
          domain_pembelajaran_id: "",
          iman: "",
          other_source: "",
          ki1_name: "",
          ki2_name: "",
          ki3_name: "",
          ki4_name: ""
        })
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
                  'silabus/PUT_SILABUS', this.payload
          ).then(() => {
            this.successmsg()
            this.$router.push('/silabus')
          }).catch(function () {
            this.warningmessage('Failed to save')
          })

        } else {
          this.$store.dispatch(
                  'silabus/POST_SILABUS', this.payload
          ).then(() => {
            this.successmsg()
            this.$router.push('/silabus')
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
      pembelajaranClicked(e, rowData){
      if (this.selectedSearch === 'Cari Kompetensi Dasar KI-1' || this.selectedSearch === 'Cari Kompetensi Dasar KI-2' ||
              this.selectedSearch === 'Cari Kompetensi Dasar KI-3' || this.selectedSearch === 'Cari Kompetensi Dasar KI-4') {
        this.tempPembelajaranId = this.tempPembelajaranId.replace(rowData.id + ',', '')
        this.tempPembelajaranName = this.tempPembelajaranName.replace(rowData.code + ' ' +rowData.description + ';', '')
        if (e === "true") {
          this.tempPembelajaranId = this.tempPembelajaranId + rowData.id + ','
          this.tempPembelajaranName = this.tempPembelajaranName + rowData.code + ' ' + rowData.description + ';'
        }

      } else {
        this.tempPembelajaranId = this.tempPembelajaranId.replace(rowData.id + ',', '')
        this.tempPembelajaranName = this.tempPembelajaranName.replace(rowData.name + ';', '')
        if (e === "true") {
          this.tempPembelajaranId = this.tempPembelajaranId + rowData.id + ','
          this.tempPembelajaranName = this.tempPembelajaranName + rowData.name + ';'
        }
      }
      },
      applyModal(){
        if (this.selectedSearch === 'Cari Tema') {
          this.payload.tema_id = this.tempPembelajaranId
          this.payload.tema_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Sub Tema') {
          this.payload.subtema_id = this.tempPembelajaranId
          this.payload.subtema_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Mata Pelajaran') {
          this.payload.mapel_id = this.tempPembelajaranId
          this.payload.mapel_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Pendekatan Pembelajaran') {
          this.payload.details[this.indexDetails].domain_pembelajaran_id = this.tempPembelajaranId
          this.payload.details[this.indexDetails].domain_pembelajaran_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Profil Pembelajaran'){
          this.payload.profil_pembelajaran_id = this.tempPembelajaranId
          this.payload.profil_pembelajaran_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kunci Pembelajaran'){
          this.payload.kunci_pembelajaran_id = this.tempPembelajaranId
          this.payload.kunci_pembelajaran_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Mata Pelajaran Detail') {
          this.payload.details[this.indexDetails].mapel_id = this.tempPembelajaranId
          this.payload.details[this.indexDetails].mapel_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-1') {
          this.payload.details[this.indexDetails].ki1 = this.tempPembelajaranId
          this.payload.details[this.indexDetails].ki1_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-2') {
          this.payload.details[this.indexDetails].ki2 = this.tempPembelajaranId
          this.payload.details[this.indexDetails].ki2_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-3') {
          this.payload.details[this.indexDetails].ki3 = this.tempPembelajaranId
          this.payload.details[this.indexDetails].ki3_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-4') {
          this.payload.details[this.indexDetails].ki4 = this.tempPembelajaranId
          this.payload.details[this.indexDetails].ki4_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Materi') {
          this.payload.details[this.indexDetails].materi_id = this.tempPembelajaranId
          this.payload.details[this.indexDetails].materi_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Domain Pembelajaran') {
          this.payload.details[this.indexDetails].domain_pembelajaran_id = this.tempPembelajaranId
          this.payload.details[this.indexDetails].domain_pembelajaran_name = this.tempPembelajaranName
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
                          <label >Name</label>
                          <input  v-model="payload.name" name="silabusname" type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label class="control-label">Jenjang</label>
                          <select v-model="payload.jenjang_id" class="form-control" name="category">
                            <option
                                    v-for="(option,index) in jenjang"
                                    :key="index"
                                    :value="index"
                            >{{ option }}</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label class="control-label">Tingkat Sekolah</label>
                          <select v-model="payload.tingkat_sekolah_id" class="form-control" name="category">
                            <option
                                    v-for="(option,index) in tingkat_sekolahs"
                                    :key="index"
                                    :value="index"
                            >{{ option }}</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label class="control-label">Semester</label>
                          <select v-model="payload.semester" class="form-control" name="category">
                            <option
                                    v-for="(option,index) in semester"
                                    :key="index"
                                    :value="index"
                            >{{ option }}</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label class="control-label">Jenis</label>
                          <select v-model="payload.jenis_id" class="form-control" name="category">
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
                        <div class="form-group">
                          <label >Alokasi Waktu</label>
                          <input  v-model="payload.alokasi_waktu" type="number" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label >Tanggal Mulai</label>
                          <input  v-model="payload.tanggal_mulai"   type="date" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label >Tanggal Selesai</label>
                          <input  v-model="payload.tanggal_selesai"  type="date" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label >Penilaian Pengetahuan</label>
                          <multiselect v-model="payload.penilaian_pengetahuan" :options="nilai_pengetahuans"></multiselect>
                        </div>
                        <div class="form-group">
                          <label >Penilaian Keterampilan</label>
                          <multiselect v-model="payload.penilaian_keterampilan" :options="nilai_keterampilans"></multiselect>
                        </div>
                        <div class="form-group">
                          <label >Penilaian Sikap</label>
                          <multiselect v-model="payload.penilaian_sikap" :options="nilai_sikaps"></multiselect>
                        </div>
                        <div class="form-group">
                          <label >Topik</label>
                          <input  v-model="payload.topik"  type="text" class="form-control" />
                        </div>


                        <div class="form-group">
                          <label >Mapel ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Mata Pelajaran',0)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="payload.mapel_id" type="text" class="form-control" />
                          <label >{{payload.mapel_name}}</label>
                        </div>

                        <div class="form-group">
                          <label for="silabus_profil_pembelajaran_id">Profil Pembelajaran ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Profil Pembelajaran', 0)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input id="silabus_profil_pembelajaran_id" v-model="payload.profil_pembelajaran_id" name="silabus_profil_pembelajaran_id" type="text" class="form-control" />
                          <label >{{payload.profil_pembelajaran_name}}</label>
                        </div>

                        <div class="form-group">
                          <label >Tema ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Tema',0)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="payload.tema_id" type="text" class="form-control" />
                          <label >{{payload.tema_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Sub Tema ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Sub Tema',0)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="payload.subtema_id" type="text" class="form-control" />
                          <label >{{payload.subtema_name}}</label>
                        </div>

                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body" v-for="(detail,index) in payload.details" :key="index">
                        <div class="form-group">
                          <label >Mapel ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Mata Pelajaran Detail', index)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="detail.mapel_id" type="text" class="form-control" />
                          <label >{{detail.mapel_name}}</label>
                        </div>
                        <div class="form-group">
                          <label for="silabus_kunci_pembelajaran_id">Kompetensi Dasar KI-1</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Kompetensi Dasar KI-1',index)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="detail.ki1"  type="text" class="form-control" />
                          <label >{{detail.ki1_name}}</label>
                        </div>
                        <div class="form-group">
                          <label for="silabus_kunci_pembelajaran_id">Kompetensi Dasar KI-2</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Kompetensi Dasar KI-2',index)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="detail.ki2"  type="text" class="form-control" />
                          <label >{{detail.ki2_name}}</label>
                        </div>
                        <div class="form-group">
                          <label for="silabus_kunci_pembelajaran_id">Kompetensi Dasar KI-3</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Kompetensi Dasar KI-3',index)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="detail.ki3"  type="text" class="form-control" />
                          <label >{{detail.ki3_name}}</label>
                        </div>
                        <div class="form-group">
                          <label for="silabus_kunci_pembelajaran_id">Kompetensi Dasar KI-4</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Kompetensi Dasar KI-4',index)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="detail.ki4"  type="text" class="form-control" />
                          <label >{{detail.ki4_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Materi ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Materi',index)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="detail.materi_id"  type="text" class="form-control" />
                          <label >{{detail.materi_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Pendekatan Pembelajaran</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Pendekatan Pembelajaran',index)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="detail.domain_pembelajaran_id"  type="text" class="form-control" />
                          <label >{{detail.domain_pembelajaran_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Iman</label>
                          <input v-model="detail.iman"  type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label >Other Source</label>
                          <input v-model="detail.other_source"  type="text" class="form-control" />
                        </div>

                      </div>
                    </div>

                  </div>


                  </div>
                </div>
                <button class="btn btn-success mr-2" @click="addDetail">Add Detail</button>
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
<!--            //selectedSearch-->
            <b-button variant="success" class="btn-label"
                      v-if="selectedSearch === 'Cari Tema' || selectedSearch === 'Cari Sub Tema' || selectedSearch === 'Cari Mata Pelajaran Detail'"
                      @click="pilihSearch(props.row.id, props.row.name)">
              Pilih
            </b-button>
            <b-form-checkbox
                    v-else
                    class="mt-2"
                    value="true"
                    unchecked-value="false"
                    :checked="pembelajaranChecked(props.row.id)"
                    @change="pembelajaranClicked($event, props.row)"
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
