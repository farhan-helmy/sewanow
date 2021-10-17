<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="tenants"
      :search="search"
      sort-by="created_at"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title> Property Table </v-toolbar-title>
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
        text: 'Building Type',
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
        text: 'Due Date',
        align: 'start',
        sortable: false,
        value: 'rent_due',
      },
      {
        text: 'Amount',
        align: 'start',
        sortable: false,
        value: 'rent_amount',
      },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    tenants: [],
    states: [],
    formData: {
      name: '',
      email: '',
      phone_no: '',
      zip_code: '',
      state: '',
      city: '',
      street_address: '',
      user_id: '',
    },
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
    fetchCities() {
      const states = [
        'Selangor',
        'Perak',
        'Kelantan',
        'Kuala Lumpur',
        'Putrajaya',
        'Negeri Sembilan',
        'Terengganu',
        'Johor',
        'Kedah',
        'Penang',
        'Perlis',
        'Sabah',
        'Sarawak',
        'Labuan',
        'Melaka',
      ]
      this.states = states
    },
    async initialize() {
      let results = await this.$axios.get('/v1/property/all')
      console.log(results.data)
      this.tenants = results.data
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
      if (status === 'active') return 'green'
    },
  },
}
</script>