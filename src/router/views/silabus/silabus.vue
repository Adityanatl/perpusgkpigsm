
<script>
  import Layout from "../../layouts/main";
  import PageHeader from "@/components/page-header";
  import appConfig from "@/app.config";
  import Vue from "vue";
  import Swal from "sweetalert2";

  // import { tableData } from "./dataAdvancedtable";

  /**
   * Advanced table component
   */
  export default {
    page: {
      title: "Advanced Table",
      meta: [{ name: "description", content: appConfig.description }]
    },
    components: { Layout, PageHeader },
    data() {
      return {
        // tableData: [],
        title: "Silabus",
        items: [
          {
            text: "Tables",
            href: "/"
          },
          {
            text: "Advanced",
            active: true
          }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        pageOptions: [10, 25, 50, 100],
        filter: null,
        filterOn: [],
        sortBy: "age",
        sortDesc: false,
        columns: [
          { field: "id", label: "ID" },
          { field: "name", label: "Name" },
          { field: "jenjang_name", label: "Jenjang Name" },
          { field: "tingkat_sekolah_name", label: "Tingkat Sekolah" },
          { field: "semester_name", label: "Semester" },
          { field: "mapel_name", label: "Mapel Names" },
          { field: "penilaian_keterampilan", label: "Penilaian Keterampilan" },

          { field: "penilaian_pengetahuan", label: "Penilaian Pengetahuan" },
          { field: "penilaian_sikap", label: "Penilaian Sikap" },
          { field: "profil_pembelajaran_name", label: "Profil Pembelajaran Name"},
          { field: "tema_name", label: "Tema" },
          { field: "subtema_name", label: "Sub Tema" },
          { field: "tanggal_mulai", label: "Tanggal Mulai" },
          { field: "tanggal_selesai", label: "Tanggal Selesai" },
          { field: "btn", label: "Action" }
        ],
        filters: [
          { field: 'id', label: 'Id' },
          { field: 'name', label: 'name' }
        ],
        options: {
          limit: 11,
          page: 1,
          sort: '-id',
          nama: '',
        },
      };
    },
    computed: {
      tableData: function() {
        return (this.$store.getters['silabus/silabuss']) ? this.$store.getters['silabus/silabuss'] : []
      },
      rows: function() {
        return (this.$store.getters['silabus/paginate'].total) ? this.$store.getters['silabus/paginate'].total : 0
      },


    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length;
      let paramsTemp = queryString.stringify({
        ...{
          name: null,
          sort: '-id',
        }
        , ...this.options}
      )

      this.$store.dispatch('silabus/GET_SILABUSS',{masterType: this.$route.meta.name,params:paramsTemp}).then(()=>{
        // this.showProgress=false
        // this.stillLoading=false
      })
    },
    methods: {
      /**
       * Search the table data with search input
       */
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length;
        this.currentPage = 1;
      },
      async providerData(ctx, callback) {
        let paramsTemp = queryString.stringify({
          ...{
            name: null,
            sort: (ctx.sortDesc ? '' : '-') + ctx.sortBy,
            page: ctx.currentPage,
            limit: ctx.perPage
          }
          , ...this.options}
        )
        // this.stillLoading=true
        this.$store.dispatch(
                'silabus/GET_SILABUSS',{masterType: this.$route.meta.name,params:paramsTemp}
        ).then(()=>{

          this.stillLoading=false
          // return tableData
          return (this.$store.getters['silabus/silabuss']) ? this.$store.getters['silabus/silabuss'] : []
        }) .catch(function() {
          // this.stillLoading=false
          return []
        })

      },
      onPageChange(params) {

        this.options.limit = params.currentPerPage;
        this.options.page = params.currentPage;
        let paramsTemp = queryString.stringify({
          ...{
            limit: params.currentPerPage,
            page: params.currentPage,
            name: this.filter,
            sort: '-id',
          },
          ...this.options,
        });
        this.$store.dispatch("silabus/GET_SILABUSS", {
          params: paramsTemp,

        });
      },
      deleteMaster(masterId, name) {
        Swal.fire({
          title: "Yakin, hapus data ini",
          text: name,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#34c38f",
          cancelButtonColor: "#f46a6a",
          confirmButtonText: "Iya, hapus!"
        }).then(result => {
          if (result.value) {
            this.$store.dispatch('silabus/DELETE_SILABUS', masterId).then((resp) => {
              if (resp.data.status == '200 OK') {
                Swal.fire("Deleted!", "Data telah terhapus.", "success");
                this.onSearch()
              } else {
                this.warningmsg(resp.data.message)
              }
            })
            // Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      },


      // let paramsTemp = queryString.stringify({
      //   ...{
      //     limit: null,
      //     page: null,
      //     nama: null,
      //     sort: '-id',
      //     testingName:this.$route.meta.testingName
      //   }
      //   , ...this.options}
      // )
      //
      // // this.$dialog.confirm("Anda yakin hapus ?", { okText: 'Ya', cancelText: 'Tidak', loader: true, animation: 'bounce'})
      // //         .then((dialog) => {
      // //           dialog.close()
      //           this.$store.dispatch('silabus/DELETE_SILABUS', masterId).then((resp)=>{
      //             if(resp.data.status=='200 OK'){
      //               this.successmsg(resp.data.message)
      //               this.onSearch()
      //             } else {
      //               this.warningmsg(resp.data.message)
      //             }
      //           })
      //         // })
      //         // .catch(function() {
      //         // })
      //
      // },
      downloadMaster(masterId) {
        let paramsTemp = queryString.stringify({
          ...{
            limit: null,
            page: null,
            nama: null,
            sort: '-id',
            testingName:this.$route.meta.testingName
          }
          , ...this.options}
        )

        this.$store.dispatch('silabus/DOWNLOAD_SILABUS', masterId)

      },

      onSearch() {
        this.options.page = 1;
        let paramsTemp = queryString.stringify({
          ...{
            limit: null,
            page: null,
            name: this.filter,
            sort: '-id',
          },
          ...this.options,
        });
        this.$store.dispatch("silabus/GET_SILABUSS", {
          params: paramsTemp,
        });
      },
      rowStyleClassFn(row) {
        let result = 'default';
        // if (row.id % 2 == 1 ){
        //     result='green'
        // } else if (row.id == 0 ){
        //     result='red'
        // }
        return result;
      },
      successmsg(text) {
        Vue.swal({
          position: "top-end",
          icon: "success",
          title: text,
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
      editMaster(masterId){
        this.$router.push('/silabus/edit/'+masterId)
      },


    },

  };
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Data Table</h4>
            <div class="row mt-4">
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show&nbsp;
                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
                  </label>
                </div>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                  <label class="d-inline-flex align-items-center">
                    Search:
                    <b-form-input
                            v-model="filter"
                            type="search"
                            placeholder="Search..."
                            class="form-control form-control-sm ml-2"
                            @change="onSearch"
                    ></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0">


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
                      :totalRows="rows"
                      :rows="tableData"
                      :columns="columns"
                      :sort-options="{
                                  enabled: false,
                                }"
                      @on-page-change="onPageChange"
                      @on-per-page-change="onPageChange"
                      :row-style-class="rowStyleClassFn"
              >
                <template slot="table-row" slot-scope="props">
                  <div v-if="props.column.field == 'checkbox'">
                    <b-form-checkbox
                            class="mt-2"
                            value="true"
                            unchecked-value="false"
                            @change="pembelajaranClicked($event, props.row.id)"
                    ></b-form-checkbox>

                  </div>
                  <div v-if="props.column.field == 'btn'">
                    <b-button variant="success" class="w-sm">
                      <i class="mdi mdi-pencil d-block font-size-8" @click="editMaster(props.row.id)"></i> Edit
                    </b-button>

                    <b-button variant="danger" class="w-sm">
                      <i class="mdi mdi-trash-can d-block font-size-8" @click="deleteMaster(props.row.id, props.row.name)"></i> Delete
                    </b-button>
                    <b-button variant="primary" class="w-sm">
                      <i class="mdi mdi-download d-block font-size-8" @click="downloadMaster(props.row.id)"></i> Download
                    </b-button>

                  </div>
                  <span v-else>
                              {{ props.formattedRow[props.column.field] }}
                            </span>
                </template>
              </vue-good-table>
            </div>
            <div class="row">
              <div class="col">
                <div class="dataTables_paginate paging_simple_numbers float-right">
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="text-sm-right">
        <router-link tag="a" to="/silabus/add" class="btn btn-success">
          <i class="mdi mdi-truck-fast mr-1"></i> Add Strategi
        </router-link>
      </div>
    </div>
  </Layout>
</template>
