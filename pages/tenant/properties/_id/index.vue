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
                </v-list-item-content>
              </v-list-item>
              
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-container>
          <TenantBillTable />
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TenantBillTable from "~/components/table/TenantBillTable.vue"
export default {
    layout: "tenant",
    data: () => ({
        properties: [],
    }),
    async fetch() {
        const result = await this.$axios.$get("/v1/tenant/me");
        //console.log(result)
        this.properties = result.tenant.properties.find(({ id }) => id === this.$route.params.id);
        //console.log(this.properties)
        //this.tenantcount = result.tenant.properties.length
    },
    methods: {},
    components: { TenantBillTable }
}
</script>

<style>
</style>