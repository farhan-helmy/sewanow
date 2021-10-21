<template>
  <!-- Code block starts -->
  <v-item-group>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-item>
            <v-card
              color="active"
              class="d-flex align-center"
              dark
              height="200"
            >
              <v-scroll-y-transition>
                <div class="text-h2 flex-grow-1 text-center">
                  {{ this.tenantcount }}
                  <p class="text-h5">Property</p>
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
        <v-col cols="12" md="6">
          <v-item>
            <v-card
              color="active"
              class="d-flex align-center"
              dark
              height="200"
            >
              <v-scroll-y-transition>
                <div class="text-h2 flex-grow-1 text-center">
                  0
                  <p class="text-h5">Rent Overdue</p>
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  <!-- Code block ends -->
</template>

<script>
export default {
  name: 'SimpleWithButtons',
  layout: 'tenant',
  data: () => ({
    tenantcount: '',
    rentoverdue: '',
    revenue: '',
  }),
  async fetch() {
    const result = await this.$axios.$get('/v1/tenant/me')
    console.log(result)
    this.tenantcount = result.tenant.properties.length
  },
}
</script>
