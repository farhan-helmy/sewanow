<template>
  <div>
    <v-alert v-if="success" icon="mdi-check" prominent type="info">
      <v-row align="center">
        <v-col class="grow font-weight-black"> Payment Added </v-col>
      </v-row>
    </v-alert>
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
                <v-list-item-content>
                  <v-list-item-title>
                    <h1>{{ properties.building_type }}</h1>
                  </v-list-item-title>
                  <v-list-item-title
                    >{{ properties.city }} | {{ properties.state }}
                  </v-list-item-title>
                  <v-list-item-title>
                    <span class="font-weight-bold"> Rent amount:</span> RM
                    {{ properties.rent_amount }}
                  </v-list-item-title>
                  <v-list-item-title> </v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-dialog
                    v-model="add_payment_form"
                    persistent
                    max-width="1000px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="green darken-1"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        class="mx-2"
                      >
                        Tambah Bayaran
                      </v-btn>
                    </template>
                    <v-btn
                      color="blue darken-1"
                      @click="add_payment_form = false"
                    >
                      Close
                    </v-btn>
                    <div>
                      <v-card>
                        <v-container>
                          <v-form ref="form" v-model="valid" lazy-validation>
                            <v-select
                              v-model="select"
                              :items="items"
                              :rules="[
                                (v) => !!v || 'Jenis bayaran diperlukan',
                              ]"
                              label="Jenis Bayaran"
                              required
                            ></v-select>
                            <v-text-field
                              v-model.number="bayaran"
                              label="Jumlah Bayaran"
                            ></v-text-field>

                            <v-btn
                              color="success"
                              class="mr-4"
                              @click="createTransaction"
                            >
                              Submit
                            </v-btn>
                          </v-form>
                        </v-container>
                      </v-card>
                    </div>
                  </v-dialog>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-container>
          <BillTable />
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BillTable from '~/components/table/BillTable.vue'
export default {
  data: () => ({
    properties: [],
    add_payment_form: false,
    valid: true,
    bayaran: null,
    select: null,
    success: false,
    items: ['Bayaran di kaunter'],
  }),
  async fetch() {
    const result = await this.$axios.$get(
      `/v1/property/${this.$route.params.id}`
    )
    //console.log(result)
    this.properties = result
    //this.tenantcount = result.tenant.properties.length
  },
  methods: {
    async createTransaction() {
      const data = {
        property_id: this.$route.params.id,
        amount: this.bayaran,
      }
      const result = await this.$axios.$post('/pay_counter', data)

      if (result) {
        this.success = true
        this.add_payment_form = false
      }
      //console.log(data)
      //console.log(result)
    },
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
  components: { BillTable },
}
</script>

<style>
</style>