<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="grey" dark v-bind="attrs" v-on="on"> Add Property </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add Property</span>
          <v-row align="center" justify="end">
            <v-btn color="primary" @click="dialogExisting = true"
              >Add Existing Property</v-btn
            >
            <v-dialog
              v-model="dialogExisting"
              transition="dialog-bottom-transition"
              max-width="600"
            >
              <v-card>
                <v-toolbar color="primary" dark
                  >Choose Existing Property</v-toolbar
                >
                <v-card-text>
                  <v-autocomplete
                    v-model="select"
                    :loading="loading"
                    :items="items"
                    :search-input.sync="search"
                    cache-items
                    class="mx-4 my-4"
                    flat
                    hide-no-data
                    hide-details
                    label="Search here"
                    solo-inverted
                  ></v-autocomplete>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="submitProperty">Submit</v-btn>
                  <v-btn text @click="dialogExisting = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
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
                  v-model.number="property.house_number"
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
                  label="Rent due"
                  required
                  v-model.number="property.rent_due"
                ></v-text-field>
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
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="addProperty"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  name: 'FormCardWithInputs',
  data: () => ({
    dialog: false,
    property: {},
    snackbar: false,
    text: 'Property added!',
    timeout: 2000,
    dialogExisting: false,
    loading: false,
    items: [],
    search: null,
    select: null,
    properties: [],
    assignproperty: {},
  }),
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  async fetch() {
    const results = await this.$axios.$get('/v1/property/all')
    //console.log(results)
    results.forEach((result) => {
      this.properties.push(result.full_address)
    })
    //console.log(this.properties)
  },
  methods: {
    async addProperty() {
      this.property.tenant_id = this.$route.params.id

      console.log(this.property)
      let response = await this.$axios.post(
        '/v1/property/adduser',
        this.property
      )
      //console.log(response)
      if (response.status === 201) {
        this.dialog = false
        this.snackbar = true
      }
    },
    async submitProperty() {
      // console.log(this.select)
      // let response = await this.$axios.post()
      this.assignproperty.tenant_id = this.$route.params.id
      this.assignproperty.full_address = this.select
      let response = await this.$axios.post(
        '/v1/property/addexistinguser',
        this.assignproperty
      )
      if (response.status === 201) {
        this.dialog = false
        this.snackbar = true
      }
    },
    querySelections(v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.properties.filter((e) => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
  },
}
</script>
