<template>
  <!-- Code block starts -->
  <v-item-group>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-item>
            <v-card
              @click="pushTenant"
              color="active"
              class="d-flex align-center"
              dark
              height="200"
            >
              <v-scroll-y-transition>
                <div class="text-h2 flex-grow-1 text-center">
                  {{ this.tenantcount }}
                  <p class="text-h5">Tenants</p>
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>

        <!-- <v-col cols="12" md="4">
          <v-item>
            <v-card
              color="active"
              class="d-flex align-center"
              dark
              height="200"
            >
              <v-scroll-y-transition>
                <div class="text-h2 flex-grow-1 text-center">
                  RM {{ this.revenue }}
                  <p class="text-h5">Revenue</p>
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
                   {{ this.rentoverdue }}
                  <p class="text-h5">Pending Payment</p>
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
                   {{ this.rentpaid }}
                  <p class="text-h5">Paid</p>
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col> -->
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
    rentpaid: ''
  }),
  async fetch() {
    var total = 0
    const result = await this.$axios.$get('/v1/user/me')
    const res = await this.$axios.get('/v1/tenant/all')
    const tenants = res.data

    tenants.forEach((tenant) => {
      //console.log(tenant.wallet_bal)
      total += tenant.wallet_bal
    })

    const filterOverdue = (tenant) => {
      return tenant.wallet_bal < 0
    }

    const filterPaid = (tenant) => {
      return tenant.wallet_bal > 0
    }
    //console.log(tenants.filter(filterOverdue).length)
    this.rentoverdue = tenants.filter(filterOverdue).length
    this.rentpaid = tenants.filter(filterPaid).length
    //console.log(total)
    this.revenue = total
    //console.log(result.user.tenants.length)
    this.tenantcount = result.user.tenants.length
  },
  methods: {
    pushTenant() {
      this.$router.push('/admin/tenants')
    },
  },
}
</script>
