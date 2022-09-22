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
          <v-toolbar-title> Tenant Table </v-toolbar-title>
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

          <v-dialog v-model="dialog" max-width="1000px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Add Tenant
              </v-btn>
              <v-btn @click="getExcel" color="primary" dark class="mb-2">
                Generate Excel
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Add Tenant</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="formData.name"
                        label="Tenant full name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="formData.email"
                        label="Email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="formData.phone_no"
                        label="Phone Number"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="formData.state"
                        :items="states"
                        append-outer-icon="mdi-map"
                        menu-props="auto"
                        hide-details
                        label="Select"
                        single-line
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="formData.street_address"
                        label="Street Address"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="formData.country"
                        label="Country"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="formData.city"
                        label="City"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model.number="formData.zip_code"
                        label="ZIP/Postal Code"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.last_login="{ item }">
        <v-chip v-if="item.last_login" color="black" dark>
          {{ item.last_login }}
        </v-chip>
        <v-chip v-else color="red" dark> Tidak pernah login </v-chip>
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
    text: 'Tenant created!',
    timeout: 2000,
    dialog: false,
    dialogDelete: false,
    search: '',
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      {
        text: 'Last Login',
        align: 'start',
        sortable: false,
        value: 'last_login',
      },
      {
        text: 'Phone Number',
        align: 'start',
        sortable: false,
        value: 'phone_no',
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
    this.fetchCities()
    this.getUser()
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
      let results = await this.$axios.get('/v1/tenant/all')
      //console.log(results.data)
      this.tenants = results.data
    },
    viewItem(item) {
      this.$router.push(`/admin/tenants/${item.id}`)
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save() {
      try {
        let response = await this.$axios.post(
          '/v1/tenant/register',
          this.formData
        )

        if (response.status === 201) {
          this.dialog = false
          this.snackbar = true
          this.$nuxt.refresh()
        }
      } catch (e) {
        console.log(e)
      }
      //this.close()
    },
    async getExcel() {
      try {
        window.open('https://dev.sewanow.com/v1/tenant/all/download')
      } catch (e) {
        console.log(e)
      }
    },
    getUser() {
      this.user = this.$store.getters.getUserInfo
      this.formData.user_id = this.user.id
    },
    getColor(status) {
      if (status === 'active') return 'green'
    },
  },
}
</script>