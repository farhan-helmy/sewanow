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
          <v-btn color="primary" dark @click="propertyForm = true">
            Add Property
          </v-btn>
        </v-toolbar>
        <v-dialog v-model="propertyForm">
          <v-card>
            <v-card-title>
              <span class="text-h5">Add Property</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-autocomplete
                      v-model="property.building_type"
                      :items="['Landed', 'High Rise', 'Land']"
                      label="Property Type"
                    ></v-autocomplete>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      label="Address"
                      required
                      v-model="property.street_address"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="City"
                      required
                      v-model="property.city"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="property.house_number"
                      label="House Number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-autocomplete
                      v-model="property.state"
                      :items="[
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
                      ]"
                      label="State"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="Rent Amount"
                      required
                      v-model.number="property.rent_amount"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="propertyForm = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="addProperty">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
     
      <template v-slot:item.actions="{ item }">
        <v-icon medium @click="viewItem(item)"> mdi-eye </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    text: 'Property created!',
    timeout: 2000,
    propertyForm: false,
    search: '',
    headers: [
      {
        text: 'Building Type',
        align: 'start',
        sortable: false,
        value: 'building_type',
      },
      {
        text: 'House Number',
        align: 'start',
        sortable: false,
        value: 'house_number',
      },
      {
        text: 'Area',
        align: 'start',
        sortable: false,
        value: 'area',
      },
      {
        text: 'Address',
        align: 'start',
        sortable: false,
        value: 'street_address',
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
    property: {
      building_type: '',
      house_number: '',
      city:'',
      street_address: '',
      state: '',
      rent_amount: ''
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
    async addProperty() {
      console.log(this.property)
      let response = await this.$axios.post('/v1/property/add', this.property)
      console.log(response)
      if (response.status === 201) {
        this.propertyForm = false
        this.snackbar = true
      }
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