<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-card-title> Wallet balance </v-card-title>

      <v-card-subtitle>
        <h1>RM {{ tenant.wallet_bal }}</h1>
      </v-card-subtitle>

      <v-card-actions>
        <v-btn @click="show = !show" color="orange lighten-2"> Topup </v-btn>
        <v-btn color="black lighten-2" text> See Transactions </v-btn>

        <v-spacer></v-spacer>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-col class="d-flex" cols="12" sm="6">
            <div>Insert amount that you want to topup</div>
          </v-col>
          <v-col class="d-flex" cols="12" sm="6">
            <v-text-field v-model.number="amount" label="RM"></v-text-field>
          </v-col>
          <v-col class="d-flex" cols="12" sm="6">
            <v-btn @click="topupSecurePay()">submit</v-btn>
          </v-col>
        </div>
      </v-expand-transition>
    </v-card>
    <div v-html="securepay"></div>
  </div>
</template>

<script>
import securepay from '../../../config/config_securepay'
import signChecksum from '../../../helpers/securepaysign'

export default {
  layout: 'tenant',
  data: () => ({
    show: false,
    amount: null,
    tenant: [],
    securepay: '',
  }),
  created() {
    this.initialize()
  },

  methods: {
    async initialize() {
      try {
        let results = await this.$axios.get('/v1/tenant/me')
        //console.log(results.data.tenant)
        this.tenant = results.data.tenant
        console.log(this.$route.params)
      } catch (e) {
        //console.log(e)
      }
    },

    async topupWallet() {
      const payApi = await this.$axios.create({
        headers: {
          Authorization: billplz.BILLPLZ_TOKEN,
        },
      })
      console.log(billplz.BILLPLZ_TOKEN)
      const data = {
        collection_id: 'q956ius8',
        description: 'topup',
        email: this.tenant.email,
        name: this.tenant.name,
        amount: this.amount * 100,
        callback_url: `${billplz.BASE_URL}/transaction/callback`,
        redirect_url:
          'https://webhook.site/ae3aa520-70ba-49ea-952c-b9db12f775ad',
      }

      const res = await payApi.post(
        'https://sandbox.securepay.my/api/v1/payments',
        data
      )
      console.log(res.status)

      if (res.status === 200) {
        window.open(res.data.url)
      }
    },

    async topupSecurePay() {
      this.tenant.amount = this.amount

      const resz = await signChecksum(this.tenant)
      console.log(resz)
      const postBackend = await this.$axios.post(
        '/securepay',
        this.tenant
      )
      console.log(postBackend)
      // if (resz) {
      //   const data = {
      //     buyer_name: this.tenant.name,
      //     token: securepay.AUTH_TOKEN,
      //     callback_url:
      //       'https://webhook.site/ae3aa520-70ba-49ea-952c-b9db12f775ad',
      //     redirect_url:
      //       'https://webhook.site/ae3aa520-70ba-49ea-952c-b9db12f775ad',
      //     order_number: '1234',
      //     buyer_email: this.tenant.email,
      //     buyer_phone: '',
      //     transaction_amount: this.tenant.amount,
      //     product_description: 'topup',
      //     redirect_post:
      //       'https://webhook.site/ae3aa520-70ba-49ea-952c-b9db12f775ad',
      //     checksum: resz,
      //   }
      //   console.log(data)

      //   const securePayApi = await this.$axios.create({
      //     headers: {
      //       Authorization: securepay.AUTH_TOKEN,
      //     },
      //   })
      //   const res = await securePayApi.post(
      //     'https://sandbox.securepay.my/api/v1/payments',
      //     data
      //   )
      //   const html = res.data
      //   console.log(res)
      //   this.securepay = html

      //   const sendBackend = await this.$axios.post('/securepay', { data: html })

      //   //window.open(res.data)
      // }
    },
  },
}
</script>

<style>
</style>