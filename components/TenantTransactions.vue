<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="transactions"
      :search="search"
      sort-by="created_at"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title> Transactions </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>

          <v-spacer></v-spacer>

        </v-toolbar>
      </template>
      <template v-slot:item.transaction_status="{ item }">
        <v-chip color="green" dark v-if="item.transaction_status === 'SUCCESS'">
          Success
        </v-chip>
         <v-chip color="red" dark v-if="item.transaction_status === 'FAILED'">
          Failed
        </v-chip>
      </template>
      
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    search: '',
    headers: [
      {
        text: 'ID',
        align: 'start',
        sortable: false,
        value: 'id',
      }, 
      
      {
        text: 'Status',
        align: 'start',
        sortable: false,
        value: 'transaction_status',
      },
      {
        text: 'Type',
        align: 'start',
        sortable: false,
        value: 'transaction_type',
      },
      {
        text: 'Amount',
        align: 'start',
        sortable: false,
        value: 'amount',
      },
      {
        text: 'Date',
        align: 'start',
        sortable: false,
        value: 'created_at',
      },
    ],
    transactions: [],
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    async initialize() {
      let results = await this.$axios.get( `/v1/tenant/${this.$route.params.id}`)
      //console.log(results.data.properties)
      this.transactions = results.data.transactions
      console.log(results.data.transactions)
    },
    viewItem(item) {
      this.$router.push(`/admin/properties/${item.id}`)
    },
    async deleteItem(item){
      let result = await this.$axios.post('')
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    getColor(status) {
      if (status === false) return 'green'
    },
  },
}
</script>