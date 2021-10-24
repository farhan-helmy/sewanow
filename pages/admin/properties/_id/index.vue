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
                    <h1>{{ properties.building_type }}</h1>
                  </v-list-item-title>
                  <v-list-item-title
                    >{{ properties.city }} | {{ properties.state }}
                  </v-list-item-title>
                  <v-list-item-title>
                    <v-chip color="red" dark class="my-4" v-if="properties.is_due">Due</v-chip>
                    <v-chip color="green" dark class="my-4" v-if="!properties.is_due">Not Due</v-chip>
                  </v-list-item-title>
                  <v-list-item-title>
                    <span class="font-weight-bold"> Rent amount:</span> RM {{
                      properties.rent_amount
                    }}
                  </v-list-item-title>
                   <v-list-item-title>
                    <span class="font-weight-bold"> Rent pay date: </span>on {{
                      properties.rent_due
                    }}th every month
                  </v-list-item-title>
                </v-list-item-content>
                <v-row align="center" justify="end">
                   <v-dialog v-model="dialog" persistent max-width="600px">
                   <v-btn
                        color="black"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        class="mx-2"
                      >
                        Add Tenant
                      </v-btn>
                   </v-dialog>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    properties: [],
  }),
  async fetch() {
    const result = await this.$axios.$get(`/v1/property/${this.$route.params.id}`)
    console.log(result)
    this.properties = result
    //this.tenantcount = result.tenant.properties.length
  },
  methods: {},
}
</script>

<style>
</style>