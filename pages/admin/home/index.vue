<template>
  <!-- Code block starts -->
  <v-item-group>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-item>
            <v-card
              color="active"
              class="d-flex align-center"
              dark
              height="200"
            >
              <v-scroll-y-transition>
                <div class="text-h2 flex-grow-1 text-center">
                  {{this.tenantcount}}
                  <p class="text-h5">Tenants</p>
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
        <v-col cols="12" md="4">
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
        <v-col cols="12" md="4">
          <v-item>
            <v-card
              color="active"
              class="d-flex align-center"
              dark
              height="200"
            >
              <v-scroll-y-transition>
                <div class="text-h2 flex-grow-1 text-center">
                  RM 4000
                  <p class="text-h5">Revenue</p>
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
  data: () => ({
    tenantcount: '',
    rentoverdue: '',
    revenue: '',
  }),
  async fetch() {
    const result = await this.$axios.$get('/v1/user/me')
    console.log(result.user.tenants.length)
    this.tenantcount = result.user.tenants.length
  },
}
</script>
