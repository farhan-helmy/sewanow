<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="bills"
      :search="search"
      sort-by="created_at"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title> Bills </v-toolbar-title>
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
      <template v-slot:item.amount="{ item }">
        <p class="font-weight-black">RM {{ item.amount }}</p>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn color="primary" @click="goPay(item)"> pay </v-btn>
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
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },

      {
        text: 'Status',
        align: 'start',
        sortable: false,
        value: 'status',
      },
      {
        text: 'Date Created',
        align: 'start',
        sortable: false,
        value: 'created_at',
      },
      {
        text: 'Amount',
        align: 'start',
        sortable: false,
        value: 'amount',
      },
    ],
    bills: [],
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
      let results = await this.$axios.get(
        `/v1/property/${this.$route.params.id}`
      )
      
      this.bills = results.data.bills
      
    },
    viewItem(item) {
      this.$router.push(`/admin/properties/${item.id}`)
    },
    async deleteItem(item) {
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