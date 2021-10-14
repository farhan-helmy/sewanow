<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="properties"
      :search="search"
      sort-by="created_at"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title> Owned Property </v-toolbar-title>
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
      <template v-slot:item.status="{ item }">
        <v-chip :color="getColor(item.status)" dark>
          {{ item.status }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon medium @click="viewItem(item)"> mdi-eye </v-icon>
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
        text: 'Property type',
        align: 'start',
        sortable: false,
        value: 'building_type',
      },
      {
        text: 'Status',
        align: 'start',
        sortable: false,
        value: 'is_due',
      },
      {
        text: 'Address',
        align: 'start',
        sortable: false,
        value: 'street_address',
      },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    properties: [],
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
      console.log(results.data.properties)
      this.properties = results.data.properties
    },
    viewItem(item) {
      this.$router.push(`/admin/properties/${item.id}`)
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