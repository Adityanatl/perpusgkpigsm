<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

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
      title: "Penilaian",
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
      fields: [
        { key: "id", sortable: true },
        { key: "name", sortable: true },
        { key: "bentuk_penilaian", sortable: false },
        { key: "type_bentuk_penilaian", sortable: false },
        { key: "jenis_penilaian", sortable: false },
        { key: "profil_pembelajaran", sortable: false },
        { key: "kelas_id", sortable: false },
        { key: "topik", sortable: false },
        { key: "mapel_id", sortable: false },
        { key: "jenjang_name", sortable: false },
      ]
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    // rows() {
    //   return this.tableData.length;
    // },
    tableData: function() {
      return (this.$store.getters['penilaian/penilaians']) ? this.$store.getters['penilaian/penilaians'] : []
    },
    rows: function() {
      return (this.$store.getters['penilaian/paginate'].total) ? this.$store.getters['penilaian/paginate'].total : 0
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

    this.$store.dispatch('penilaian/GET_PENILAIANS',{masterType: this.$route.meta.name,params:paramsTemp}).then(()=>{
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
      console.log('ctx ',ctx)
      let paramsTemp = queryString.stringify({
        ...{
          name: null,
          sort: (ctx.sortDesc ? '' : '-') + ctx.sortBy,
          page: ctx.currentPage,
          limit: ctx.perPage
        }
        , ...this.options}
      )
      console.log('paramsTemp ',paramsTemp)
      // this.stillLoading=true
      this.$store.dispatch(
              'penilaian/GET_PENILAIANS',{masterType: this.$route.meta.name,params:paramsTemp}
      ).then(()=>{

        this.stillLoading=false
        console.log('berhasil bos')
        // return tableData
        return (this.$store.getters['penilaian/penilaians']) ? this.$store.getters['penilaian/penilaians'] : []
      }) .catch(function() {
        // this.stillLoading=false
        return []
      })

    }

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
                    ></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0">
              <b-table
                :items="tableData"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filteredk="onFiltered"

              ></b-table>
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
  </Layout>
</template>
