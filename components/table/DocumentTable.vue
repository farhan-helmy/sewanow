<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="documents"
      :search="search"
      sort-by="created_at"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title> Document </v-toolbar-title>
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
      <template v-slot:item.actions="{ item }">
        <v-icon medium @click="viewItem(item)"> mdi-eye </v-icon>
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
        text: 'File Name',
        align: 'start',
        sortable: false,
        value: 'filename',
      },

      {
        text: 'Created At',
        align: 'start',
        sortable: false,
        value: 'created_at',
      },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    documents: [],
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
        `/v1/tenant/${this.$route.params.id}/documents`
      )
      console.log(results)
      this.documents = results.data.documents
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
    async viewItem(item) {
      let res = await this.$axios.get(`/v1/documents/${item.id}`)
      if (res.status === 200) {
        window.open(`https://dev.sewanow.com/v1/documents/${item.id}`)
      }
    },
  },
}
</script>
