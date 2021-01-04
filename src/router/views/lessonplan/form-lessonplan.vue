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
      title: "Add Lessonplan",
      meta: [{ name: "description", content: appConfig.description }]
    },
    components: { Layout, PageHeader, p404, Multiselect },
    data() {
      return {
        title: 'Add Lessonplan',
        items: [
          {
            text: 'Lessonplan',
            href: '/',
          },
          {
            text: 'Add Lessonplan',
            active: true,
          },
        ],

        value: null,
        value1: null,
        step: { id: 0, number: 0, name: "", duration: "", description: "", other_source: "" },
        payload: {
           id: null,
           jenjang_id: "",
           jenjang_name: "",
           semester_id: null,
           semester_name: "",
           tingkat_sekolah_id: "",
           tingkat_sekolah_name: "",
           tema_id: null,
           tema_name: "",
           subtema_id: null,
           subtema_name: "",
           mapel_id: "",
           mapel_name: "",
           jenis_id: null,
           jenis_name: "",
           tgl_mulai: null,
           tgl_selesai: null,
           alokasi_waktu: null,
           description: "",
           tujuan_pembelajaran_id: "",
           tujuan_pembelajaran_name: "",
           strategic_id: null,
           strategic_name: "",
           domain_pembelajaran_id: "",
           domain_pembelajaran_name: "",
           kunci_pembelajaran_id: "",
           kunci_pembelajaran_name: "",
           profil_pembelajaran_id: "",
           profil_pembelajaran_name: "",
           kompetensi_dasar: [
            {
               id: 0,
               mapel_id: null,
               mapel_name: "",
               materi_id: "",
               materi_name: "",
               ki1_id: "",
               ki2_id: "",
               ki3_id: "",
               ki4_id: "",
               ki1_name: "",
               ki2_name: "",
               ki3_name: "",
               ki4_name: ""
            }
          ],
           pengetahuan_id: "",
           pengetahuan_name: "",
           keterampilan_id: "",
           keterampilan_name: "",
           sikap_id: "",
           sikap_name: "",
           iman: "",
           other_source: "",
           pendahuluan: [
            {
               id: 0,
               name: "",
               type: "",
               duration: 0,
               description: "",
               other_source: "",
               strategic_id: null,
               strategic_name: ""
            },
          ],
           kegiatan_inti: [
            {
               id: 0,
               name: "",
               type: "",
               duration: 0,
               description: "",
               other_source: "",
               strategic_id: null,
               strategic_name: ""
            },
          ],
           penutup: [
            {
               id: 0,
               name: "",
               type: "",
               duration: 0,
               description: "",
               other_source: "",
               strategic_id: null,
               strategic_name: ""
            },
          ],
           silabus_id: 0,
          silabus_name: '',
        },
        jenjang:[
          {id:0, name:'TK', checked:false}, {id:1, name:'SD', checked:false}, {id:2, name:'SMP', checked:false},
          {id:3, name:'SMA', checked:false}],
        semester:['Genap', 'Ganjil'],
        tingkat_sekolahs:[
          'TK', 'SD-1', 'SD-2', 'SD-3', 'SD-4', 'SD-5',  'SD-6', 'SMP-7', 'SMP-8', 'SMP-9', 'SMA-10', 'SMA-11', 'SMA-12'],
        jenis:['Tematik', 'Khusus Terpadu'],
        searchName: '',
        selectedToogle: 0,
        selectedSearch: 'Cari Pendekatan Pembelajaran',
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
      // this.selectedSearchChanged()


    },
    computed: {
      listPembelajaran: function() {
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
                'lessonplan/GET_LESSONPLAN', idForm
        ).then((resp) => {

          if (resp.data.code==200){
            this.notFound = false
            let temp=this.$store.getters['lessonplan/lessonplan']
            temp.tgl_mulai = moment(temp.tgl_mulai,'DD-MM-YYYY').format('YYYY-MM-DD')
            temp.tgl_selesai = moment(temp.tgl_selesai,'DD-MM-YYYY').format('YYYY-MM-DD')
            this.payload = temp
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
          this.tempPembelajaranId = this.payload.domain_pembelajaran_id
          this.tempPembelajaranName = this.payload.domain_pembelajaran_name
        } else if (this.selectedSearch === 'Cari Silabus') {
          this.stringDispatch = 'silabus/GET_SILABUSS'
          this.stringDispatchPaginate = 'silabus/paginate'
          this.stringDispatchData = 'silabus/silabuss'
          this.tempPembelajaranId = this.payload.silabus_id
          this.tempPembelajaranName = this.payload.silabus_name
        } else if (this.selectedSearch === 'Cari Tujuan Pembelajaran') {
          this.stringDispatch = 'tujuanpembelajaran/GET_TUJUAN_PEMBELAJARANS'
          this.stringDispatchPaginate = 'tujuanpembelajaran/paginate'
          this.stringDispatchData = 'tujuanpembelajaran/tujuan_pembelajarans'
          this.tempPembelajaranId = this.payload.tujuan_pembelajaran_id
          this.tempPembelajaranName = this.payload.tujuan_pembelajaran_name
        } else if (this.selectedSearch === 'Cari Strategi'){
          this.stringDispatch = 'strategic/GET_STRATEGICS'
          this.stringDispatchPaginate = 'strategic/paginate'
          this.stringDispatchData = 'strategic/strategics'
          this.tempPembelajaranId = this.payload.strategic_id
          this.tempPembelajaranName = this.payload.strategic_name
        } else if (this.selectedSearch === 'Cari Strategi Pendahuluan'){
          this.stringDispatch = 'strategic/GET_STRATEGICS'
          this.stringDispatchPaginate = 'strategic/paginate'
          this.stringDispatchData = 'strategic/strategics'
          this.tempPembelajaranId = this.payload.pendahuluan[this.indexDetails].strategic_id
          this.tempPembelajaranName = this.payload.pendahuluan[this.indexDetails].strategic_name
        } else if (this.selectedSearch === 'Cari Strategi Kegiatan Inti'){
          this.stringDispatch = 'strategic/GET_STRATEGICS'
          this.stringDispatchPaginate = 'strategic/paginate'
          this.stringDispatchData = 'strategic/strategics'
          this.tempPembelajaranId = this.payload.kegiatan_inti[this.indexDetails].strategic_id
          this.tempPembelajaranName = this.payload.kegiatan_inti[this.indexDetails].strategic_name
        } else if (this.selectedSearch === 'Cari Strategi Penutup'){
          this.stringDispatch = 'strategic/GET_STRATEGICS'
          this.stringDispatchPaginate = 'strategic/paginate'
          this.stringDispatchData = 'strategic/strategics'
          this.tempPembelajaranId = this.payload.penutup[this.indexDetails].strategic_id
          this.tempPembelajaranName = this.payload.penutup[this.indexDetails].strategic_name
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
          this.tempPembelajaranId = this.payload.kompetensi_dasar[this.indexDetails].mapel_id
          this.tempPembelajaranName = this.payload.kompetensi_dasar[this.indexDetails].mapel_name
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-1'){
          this.stringDispatch = 'kd/GET_KDS'
          this.stringDispatchPaginate = 'kd/paginate'
          this.stringDispatchData = 'kd/kds'
          this.tempPembelajaranId = this.payload.kompetensi_dasar[this.indexDetails].ki1_id
          this.tempPembelajaranName = this.payload.kompetensi_dasar[this.indexDetails].ki1_name
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
          this.tempPembelajaranId = this.payload.kompetensi_dasar[this.indexDetails].ki2_id
          this.tempPembelajaranName = this.payload.kompetensi_dasar[this.indexDetails].ki2_name
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
          this.tempPembelajaranId = this.payload.kompetensi_dasar[this.indexDetails].ki3_id
          this.tempPembelajaranName = this.payload.kompetensi_dasar[this.indexDetails].ki3_name
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
          this.tempPembelajaranId = this.payload.kompetensi_dasar[this.indexDetails].ki4_id
          this.tempPembelajaranName = this.payload.kompetensi_dasar[this.indexDetails].ki4_name
          this.columns= [
            { field: 'checkbox', label: 'Action' },
            { field: 'id', label: 'Id' },
            { field: 'code', label: 'code' },
            { field: 'description', label: 'Description' }
          ]
        } else if (this.selectedSearch === 'Cari Materi Kompetensi Dasar') {
          this.stringDispatch = 'materi/GET_MATERIS'
          this.stringDispatchPaginate = 'materi/paginate'
          this.stringDispatchData = 'materi/materis'
          this.tempPembelajaranId = this.payload.kompetensi_dasar[this.indexDetails].materi_id
          this.tempPembelajaranName = this.payload.kompetensi_dasar[this.indexDetails].materi_name
        }

        this.onSearch()
      },
      addKompetensiDasar(){
        this.payload.kompetensi_dasar.push({
          id: 0,
          mapel_id: null,
          mapel_name: null,
          ki1_id: "",
          ki2_id: "",
          ki3_id: "",
          ki4_id: "",
          materi_id: "",
          materi_name: "",
          ki1_name: "",
          ki2_name: "",
          ki3_name: "",
          ki4_name: ""
        })
      },
      addPendahuluan(){
        this.payload.pendahuluan.push({
          id: 0,
          name: "",
          type: "Pendahuluan",
          duration: 0,
          description: "",
          other_source: "",
          strategic_id: "",
          strategic_name: "",
        })
      },
      addKegiatanInti(){
        this.payload.kegiatan_inti.push({
          id: 0,
          name: "",
          type: "Kegiatan Inti",
          duration: 0,
          description: "",
          other_source: "",
          strategic_id: "",
          strategic_name: "",
        })
      },
      addPenutup(){
        this.payload.penutup.push({
          id: 0,
          name: "",
          type: "Penutup",
          duration: 0,
          description: "",
          other_source: "",
          strategic_id: "",
          strategic_name: "",
        })
      },
      removeKompetensiDasar(indexStep){
        let temp = []
        for (var i = 0; i < this.payload.kompetensi_dasar.length; i++) {
          if (i != indexStep) temp.push(this.payload.kompetensi_dasar[i])
        }
        this.payload.kompetensi_dasar = temp
      },
      removePendahuluan(indexStep){
        let temp = []
        for (var i = 0; i < this.payload.pendahuluan.length; i++) {
          if (i != indexStep) temp.push(this.payload.pendahuluan[i])
        }
        this.payload.pendahuluan = temp
      },
      removeKegiatanInti(indexStep){
        let temp = []
        for (var i = 0; i < this.payload.kegiatan_inti.length; i++) {
          if (i != indexStep) temp.push(this.payload.kegiatan_inti[i])
        }
        this.payload.kegiatan_inti = temp
      },
      removePenutup(indexStep){
        let temp = []
        for (var i = 0; i < this.payload.Penutup.length; i++) {
          if (i != indexStep) temp.push(this.payload.Penutup[i])
        }
        this.payload.Penutup = temp
      },
      saveData(){
        if ( this.$route.meta.mode=='edit' ){
          this.$store.dispatch(
                  'lessonplan/PUT_LESSONPLAN', this.payload
          ).then(() => {
            this.successmsg()
            this.$router.push('/lessonplan')
          }).catch(function () {
            this.warningmessage('Failed to save')
          })

        } else {
          this.$store.dispatch(
                  'lessonplan/POST_LESSONPLAN', this.payload
          ).then(() => {
            this.successmsg()
            this.$router.push('/lessonplan')
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
        console.log('selectedSearch ',this.selectedSearch, this.indexDetails)
        if (this.selectedSearch === 'Cari Tema') {
          this.payload.tema_id = this.tempPembelajaranId
          this.payload.tema_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Sub Tema') {
          this.payload.subtema_id = this.tempPembelajaranId
          this.payload.subtema_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Mata Pelajaran') {
          this.payload.mapel_id = this.tempPembelajaranId
          this.payload.mapel_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Silabus') {
          this.payload.silabus_id = this.tempPembelajaranId
          this.payload.silabus_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Pendekatan Pembelajaran') {
          this.payload.domain_pembelajaran_id = this.tempPembelajaranId
          this.payload.domain_pembelajaran_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Profil Pembelajaran'){
          this.payload.profil_pembelajaran_id = this.tempPembelajaranId
          this.payload.profil_pembelajaran_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kunci Pembelajaran'){
          this.payload.kunci_pembelajaran_id = this.tempPembelajaranId
          this.payload.kunci_pembelajaran_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Tujuan Pembelajaran'){
          this.payload.tujuan_pembelajaran_id = this.tempPembelajaranId
          this.payload.tujuan_pembelajaran_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Mata Pelajaran Detail') {
          this.payload.kompetensi_dasar[this.indexDetails].mapel_id = this.tempPembelajaranId
          this.payload.kompetensi_dasar[this.indexDetails].mapel_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-1') {
          this.payload.kompetensi_dasar[this.indexDetails].ki1_id = this.tempPembelajaranId
          this.payload.kompetensi_dasar[this.indexDetails].ki1_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-2') {
          this.payload.kompetensi_dasar[this.indexDetails].ki2_id = this.tempPembelajaranId
          this.payload.kompetensi_dasar[this.indexDetails].ki2_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-3') {
          this.payload.kompetensi_dasar[this.indexDetails].ki3_id = this.tempPembelajaranId
          this.payload.kompetensi_dasar[this.indexDetails].ki3_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Kompetensi Dasar KI-4') {
          this.payload.kompetensi_dasar[this.indexDetails].ki4_id = this.tempPembelajaranId
          this.payload.kompetensi_dasar[this.indexDetails].ki4_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Materi Kompetensi Dasar') {
          this.payload.kompetensi_dasar[this.indexDetails].materi_id = this.tempPembelajaranId.toString()
          this.payload.kompetensi_dasar[this.indexDetails].materi_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Domain Pembelajaran') {
          this.payload.kompetensi_dasar[this.indexDetails].domain_pembelajaran_id = this.tempPembelajaranId
          this.payload.kompetensi_dasar[this.indexDetails].domain_pembelajaran_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Strategi Pendahuluan') {
          this.payload.pendahuluan[this.indexDetails].strategic_id = this.tempPembelajaranId
          this.payload.pendahuluan[this.indexDetails].strategic_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Strategi Kegiatan Inti') {
          this.payload.kegiatan_inti[this.indexDetails].strategic_id = this.tempPembelajaranId
          this.payload.kegiatan_inti[this.indexDetails].strategic_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Strategi Penutup') {
          this.payload.penutup[this.indexDetails].strategic_id = this.tempPembelajaranId
          this.payload.penutup[this.indexDetails].strategic_name = this.tempPembelajaranName
        } else if (this.selectedSearch === 'Cari Strategi') {
          this.payload.strategic_id = this.tempPembelajaranId
          this.payload.strategic_name = this.tempPembelajaranName
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
<!--                        <div class="form-group">-->
<!--                          <label >Name</label>-->
<!--                          <input  v-model="payload.name" name="lessonplanname" type="text" class="form-control" />-->
<!--                        </div>-->
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
                          <label class="control-label">Semester</label>
                          <select v-model="payload.semester_id" class="form-control" name="category">
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
                          <input  v-model="payload.tgl_mulai"   type="date" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label >Tanggal Selesai</label>
                          <input  v-model="payload.tgl_selesai"  type="date" class="form-control" />
                        </div>
<!--                        <div class="form-group">-->
<!--                          <label >Topik</label>-->
<!--                          <input  v-model="payload.topik"  type="text" class="form-control" />-->
<!--                        </div>-->
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
                        <div class="form-group">
                          <label >Mapel ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Mata Pelajaran',0)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="payload.mapel_id" type="text" class="form-control" />
                          <label >{{payload.mapel_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Tujuan Pembelajaran ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Tujuan Pembelajaran', 0)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="payload.tujuan_pembelajaran_id" type="text" class="form-control" />
                          <label >{{payload.tujuan_pembelajaran_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Strategi ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Strategi', 0)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="payload.strategic_id" type="text" class="form-control" />
                          <label >{{payload.strategic_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Silabus ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Silabus', 0)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="payload.silabus_id" type="text" class="form-control" />
                          <label >{{payload.silabus_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Pendekatan Pembelajaran</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Pendekatan Pembelajaran',0)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="payload.domain_pembelajaran_id"  type="text" class="form-control" />
                          <label >{{payload.domain_pembelajaran_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Kunci Pembelajaran ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Kunci Pembelajaran', 0)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="payload.kunci_pembelajaran_id" type="text" class="form-control" />
                          <label >{{payload.kunci_pembelajaran_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Profil Pembelajaran ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Profil Pembelajaran', 0)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="payload.profil_pembelajaran_id" type="text" class="form-control" />
                          <label >{{payload.profil_pembelajaran_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Penilaian Pengetahuan </label>
                          <multiselect v-model="payload.pengetahuan_id" :options="nilai_pengetahuans"></multiselect>
                        </div>
                        <div class="form-group">
                          <label >Penilaian Keterampilan</label>
                          <multiselect v-model="payload.keterampilan_id" :options="nilai_keterampilans"></multiselect>
                        </div>
                        <div class="form-group">
                          <label >Penilaian Sikap</label>
                          <multiselect v-model="payload.ssikap_id" :options="nilai_sikaps"></multiselect>
                        </div>
                        <div class="form-group">
                          <label >Other Source</label>
                          <input v-model="payload.other_source" type="text" class="form-control" />
                        </div>














                      </div>
                    </div>
                    <div class="card" >
                      <div class="card" v-for="(detail,index) in payload.kompetensi_dasar" :key="index" style="background-color: #dbf7ff">
                        <button class="btn btn-warning mr-2 " style="alignment: right" @click="removeKompetensiDasar(index)">#{{ index + 1}} Remove Kompetensi Dasar</button>
                        <div class="card-body" >

                        <div class="form-group">
                          <label >Mapel ID</label>

                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Mata Pelajaran Detail', index)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="detail.mapel_id" type="text" class="form-control" />
                          <label >{{detail.mapel_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Kompetensi Dasar KI-1</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Kompetensi Dasar KI-1',index)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="detail.ki1_id"  type="text" class="form-control" />
                          <label >{{detail.ki1_name_id}}</label>
                        </div>
                        <div class="form-group">
                          <label >Kompetensi Dasar KI-2</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Kompetensi Dasar KI-2',index)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="detail.ki2_id"  type="text" class="form-control" />
                          <label >{{detail.ki2_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Kompetensi Dasar KI-3</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Kompetensi Dasar KI-3',index)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="detail.ki3_id"  type="text" class="form-control" />
                          <label >{{detail.ki3_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Kompetensi Dasar KI-4</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Kompetensi Dasar KI-4',index)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="detail.ki4_id"  type="text" class="form-control" />
                          <label >{{detail.ki4_name}}</label>
                        </div>
                        <div class="form-group">
                          <label >Materi ID</label>
                          <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Materi Kompetensi Dasar',index)">
                            <i class="mdi mdi-table-search label-icon" ></i> Search
                          </b-button>
                          <input v-model="detail.materi_id"  type="text" class="form-control" />
                          <label >{{detail.materi_name}}</label>
                        </div>
                      </div>
                      </div>
                    </div>



                    <div class="card" >
                      <div class="card" v-for="(detail,index) in payload.pendahuluan" :key="index" style="background-color: #d2d6ff">
                        <button class="btn btn-warning mr-2 " style="alignment: right" @click="removePendahuluan(index)">#{{ index + 1}} Remove Pendahuluan</button>
                        <div class="card-body" >
                          <div class="form-group">
                            <label >Type : {{detail.type }}</label>
                          </div>

                          <div class="form-group">
                            <label >Name</label>
                            <input v-model="detail.name" type="text" class="form-control" />
                          </div>
                          <div class="form-group">
                            <label >Duration</label>
                            <input v-model="detail.duration" type="number" class="form-control" />
                          </div>
                          <div class="form-group">
                            <label class="control-label">Description</label>
                            <b-form-textarea
                                    v-model="detail.description"
                                    id="billing-address"
                                    rows="7"
                                    placeholder="Description"
                            ></b-form-textarea>
                          </div>
                          <div class="form-group">
                            <label >Other Source</label>
                            <input v-model="detail.other_source" type="text" class="form-control" />
                          </div>
                          <div class="form-group">
                            <label >Strategi ID</label>
                            <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Strategi Pendahuluan', index)">
                              <i class="mdi mdi-table-search label-icon" ></i> Search
                            </b-button>
                            <input v-model="detail.strategic_id" type="text" class="form-control" />
                            <label >{{detail.strategic_name}}</label>
                          </div>

                        </div>
                      </div>
                    </div>



                    <div class="card" >
                      <div class="card" v-for="(detail,index) in payload.kegiatan_inti" :key="index" style="background-color: #ffe2ee">
                        <button class="btn btn-warning mr-2 " style="alignment: right" @click="removeKegiatanInti(index)">#{{ index + 1}} Remove Kegiatan Inti</button>
                        <div class="card-body" >
                          <div class="form-group">
                            <label >Type : {{detail.type }}</label>
                          </div>

                          <div class="form-group">
                            <label >Name</label>
                            <input v-model="detail.name" type="text" class="form-control" />
                          </div>
                          <div class="form-group">
                            <label >Duration</label>
                            <input v-model="detail.duration" type="number" class="form-control" />
                          </div>
                          <div class="form-group">
                            <label class="control-label">Description</label>
                            <b-form-textarea
                                    v-model="detail.description"
                                    id="billing-address"
                                    rows="7"
                                    placeholder="Description"
                            ></b-form-textarea>
                          </div>
                          <div class="form-group">
                            <label >Other Source</label>
                            <input v-model="detail.other_source" type="text" class="form-control" />
                          </div>
                          <div class="form-group">
                            <label >Strategi ID</label>
                            <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Strategi Kegiatan Inti', index)">
                              <i class="mdi mdi-table-search label-icon" ></i> Search
                            </b-button>
                            <input v-model="detail.strategic_id" type="text" class="form-control" />
                            <label >{{detail.strategic_name}}</label>
                          </div>

                        </div>
                      </div>
                    </div>



                    <div class="card" >
                      <div class="card" v-for="(detail,index) in payload.penutup" :key="index" style="background-color: #ecd7ff">
                        <button class="btn btn-warning mr-2 " style="alignment: right" @click="removePenutup(index)">#{{ index + 1}} Remove Penutup</button>
                        <div class="card-body" >
                          <div class="form-group">
                            <label >Type : {{detail.type }}</label>
                          </div>

                          <div class="form-group">
                            <label >Name</label>
                            <input v-model="detail.name" type="text" class="form-control" />
                          </div>
                          <div class="form-group">
                            <label >Duration</label>
                            <input v-model="detail.duration" type="number" class="form-control" />
                          </div>
                          <div class="form-group">
                            <label class="control-label">Description</label>
                            <b-form-textarea
                                    v-model="detail.description"
                                    id="billing-address"
                                    rows="7"
                                    placeholder="Description"
                            ></b-form-textarea>
                          </div>
                          <div class="form-group">
                            <label >Other Source</label>
                            <input v-model="detail.other_source" type="text" class="form-control" />
                          </div>
                          <div class="form-group">
                            <label >Strategi ID</label>
                            <b-button variant="success" class="btn-label" v-b-modal.modal-pembelajaran @click="viewSearch('Cari Strategi Penutup', index)">
                              <i class="mdi mdi-table-search label-icon" ></i> Search
                            </b-button>
                            <input v-model="detail.strategic_id" type="text" class="form-control" />
                            <label >{{detail.strategic_name}}</label>
                          </div>

                        </div>
                      </div>
                    </div>




                  </div>


                  </div>
                </div>
        <button class="btn btn-success mr-2" @click="addKompetensiDasar">Add Kompetensi Dasar</button>
        <button class="btn btn-success mr-2" @click="addPendahuluan">Add Pendahuluan</button>
        <button class="btn btn-success mr-2" @click="addKegiatanInti">Add Kegiatan Inti</button>
        <button class="btn btn-success mr-2" @click="addPenutup">Add Penutup</button>
        <button class="btn btn-primary mr-1" @click="saveData">Save Changes</button>


        </div>

    </div>
    <b-modal id="modal-pembelajaran" size="xl" :title="selectedSearch" title-class="font-18" @ok="applyModal">
      <h1>{{ tempPembelajaranId}}</h1>
      <h5>{{ tempPembelajaranName}}</h5>{{this.stringDispatchData}}
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
            <b-button variant="success" class="btn-label"
                      v-if="selectedSearch === 'Cari Tema' || selectedSearch === 'Cari Sub Tema' ||
                      selectedSearch === 'Cari Mata Pelajaran Detail' || selectedSearch === 'Cari Strategi Pendahuluan' ||
                      selectedSearch === 'Cari Strategi Kegiatan Inti' || selectedSearch === 'Cari Strategi Penutup' ||
                      selectedSearch === 'Cari Silabus' || selectedSearch === 'Cari Strategi'"
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
