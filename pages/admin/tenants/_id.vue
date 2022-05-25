<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="1000" tile>
            <v-img
              height="200"
              src="https://www.w3schools.com/howto/img_nature_wide.jpg"
            ></v-img>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar size="100">
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="John"
                  />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>
                    <h1>{{ user.name }}</h1>
                  </v-list-item-title>
                  <v-list-item-title
                    >{{ user.city }} | {{ user.state }}
                  </v-list-item-title>
                  <v-list-item-title>
                    <v-chip color="green" dark class="my-4">{{
                      user.status
                    }}</v-chip>
                  </v-list-item-title>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <PropertyForm />
                  

                  <v-dialog
                    v-model="transaction_table"
                    persistent
                    max-width="1000px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="indigo"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        class="mx-2"
                      >
                        Transactions
                      </v-btn>
                    </template>
                    <v-btn
                      color="blue darken-1"
                      @click="transaction_table = false"
                    >
                      Close
                    </v-btn>
                    <tenant-transactions-table />
                  </v-dialog>
                  <v-dialog v-model="upload_form" persistent max-width="1000px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="green darken-1"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        class="mx-2"
                      >
                        Upload Document
                      </v-btn>
                    </template>
                    <v-btn color="blue darken-1" @click="upload_form = false">
                      Close
                    </v-btn>
                    <div>
                      <v-card>
                        <v-file-input
                          chips
                          filled
                          label="Upload Here"
                          @change="selectFile"
                        ></v-file-input>
                        <v-col cols="4" class="pl-2">
                          <v-btn color="success" dark small @click="upload">
                            Upload
                            <v-icon right dark>mdi-cloud-upload</v-icon>
                          </v-btn>
                        </v-col>
                      </v-card>
                    </div>
                  </v-dialog>

                  <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="red"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        class="mx-2"
                      >
                        Edit
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">Edit User</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="6">
                              <v-text-field
                                label="Name"
                                required
                                v-model="user.name"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                              <v-text-field
                                label="Email"
                                required
                                v-model="user.email"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="Address"
                                required
                                v-model="user.street_address"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                label="City"
                                required
                                v-model="user.city"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                label="Phone Number"
                                required
                                v-model="user.phone_no"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-autocomplete
                                v-model="user.state"
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
                              <v-autocomplete
                                v-model="user.status"
                                :items="['active', 'inactive']"
                                label="Status"
                              ></v-autocomplete>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog = false"
                        >
                          Close
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="updateUser">
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-dialog v-model="table" persistent max-width="1000px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="indigo" dark v-bind="attrs" v-on="on" class="mx-2">
              Show Properties
            </v-btn>
          </template>
          <v-btn color="blue darken-1" @click="table = false"> Close </v-btn>
          <tenant-property-table />
        </v-dialog>
         <v-dialog v-model="change_password" persistent max-width="1000px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="indigo" dark v-bind="attrs" v-on="on" class="mx-2">
              Tukar Password
            </v-btn>
          </template>
          <v-btn color="blue darken-1" @click="change_password = false"> Close </v-btn>
         <ChangePassword :password="password" :confirm_password="confirm_password" :change_password="change_password"/>
        </v-dialog>
      </v-row>
    </v-container>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="deep-purple accent-4"
      elevation="24"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="snackbarDeactive" :timeout="timeoutDeactive">
      {{ textDeactive }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbarDeactive = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import TenantPropertyTable from '~/components/TenantPropertyTable.vue'
import TenantTransactionsTable from '~/components/TenantTransactions.vue'
import ChangePassword from '~/components/forms/ChangePassword.vue'

export default {
  components: { TenantPropertyTable, TenantTransactionsTable, ChangePassword},
  data: () => ({
    table: false,
    transaction_table: false,
    upload_form: false,
    user: [],
    send: [],
    properties: [],
    currentFile: undefined,
    progress: 0,
    message: '',
    fileInfos: [],
    dialog: false,
    snackbar: false,
    snackbarDeactive: false,
    text: 'Tenant updated!',
    textDeactive: 'Tenant deactivated!',
    timeout: 2000,
    timeoutDeactive: 2000,
    change_password: false,
    password: null,
    confirm_password: null
  }),
  mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      const tenant = await this.$axios.get(
        `/v1/tenant/${this.$route.params.id}`
      )

      this.user = tenant.data
      //console.log(tenant.data.properties)
    },
    async updateUser() {
      this.send = {
        name: this.user.name,
        email: this.user.email,
        street_address: this.user.street_address,
        city: this.user.city,
        phone_no: this.user.phone_no,
        state: this.user.state,
        status: this.user.status,
      }
      try {
        const tenant = await this.$axios.patch(
          `/v1/tenant/${this.$route.params.id}`,
          this.send
        )
        if (tenant.status === 200) {
          ;(this.dialog = false), (this.snackbar = true)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async deactivate() {
      this.send = {
        status: 'inactive',
      }

      try {
        const tenant = await this.$axios.patch(
          `/v1/tenant/${this.$route.params.id}`,
          this.send
        )
        if (tenant.status === 200) {
          this.snackbarDeactive = true
        }
      } catch (e) {
        console.log(e)
      }
    },
    async activate() {
      this.send = {
        status: 'active',
      }

      try {
        const tenant = await this.$axios.patch(
          `/v1/tenant/${this.$route.params.id}`,
          this.send
        )
        if (tenant.status === 200) {
          this.snackbarDeactive = true
        }
      } catch (e) {
        console.log(e)
      }
    },
    selectFile(file) {
      this.progress = 0
      this.currentFile = file
      console.log(this.currentFile)
    },
    async upload() {
      if (!this.currentFile) {
        this.message = 'Please select a file!'
        return
      }
      this.message = ''

      let formData = new FormData()

      formData.append('file', this.currentFile)
      formData.append('tenant_id', this.$route.params.id)

      console.log(this.currentFile)

      let res = await this.$axios.post('/v1/multiple-upload', formData, {
        headers: {
          'Content-Type':
            'multipart/form-data; boundary=---011000010111000001101001',
        },
      })
      console.log(res)

      if (res.status === 200) {
        this.text = 'Document uploaded!'
        this.upload_form = false
        this.snackbar = true
      }
    },
  },
}
</script>

<style>
</style>