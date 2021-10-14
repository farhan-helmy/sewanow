<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="grey" dark v-bind="attrs" v-on="on"> Add Property </v-btn>
      </template>
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
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Postcode / ZIP"
                  required
                  v-model.number="property.zip_code"
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
  }),
  methods: {
    async addProperty() {
      this.property.tenant_id = this.$route.params.id

      console.log(this.property)
      let response = await this.$axios.post('/v1/property/add', this.property)
      console.log(response)
      if (response.status === 201) {
        this.dialog = false
        this.snackbar = true
      }
    },
  },
}
</script>
