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
            <v-text-field type="hidden" v-model="signed" label=""></v-text-field>
          </v-col>
          <v-col class="d-flex" cols="12" sm="6">
            <v-btn @click="getSign()">submit</v-btn>
            <v-btn v-if="signed" @click="topupSecurePay()"> topup</v-btn>
          </v-col>
        </div>
      </v-expand-transition>
    </v-card>
    <div>
      <form
        method="POST"
        action="https://sandbox.securepay.my/api/v1/payments"
        ref="form"
      >
        <input type="hidden" name="buyer_name" :value="tenant.name" />
        <input type="hidden" name="buyer_email" :value="tenant.email" />
        <input type="hidden" name="token" :value="tenant.token" />
        <input type="hidden" name="transaction_amount" :value="amount" />
        <input type="hidden" name="checksum" :value="tenant.checksum" />
        <input type="hidden" name="callback_url" :value="tenant.callback_url" />
        <input type="hidden" name="redirect_url" :value="tenant.redirect_url" />
        <input type="hidden" name="order_number" :value="tenant.order_number" />
        <input type="hidden" name="buyer_phone" :value="tenant.buyer_phone" />
        <input
          type="hidden"
          name="product_description"
          :value="tenant.product_description"
        />
        <input
          type="hidden"
          name="redirect_post"
          :value="tenant.redirect_post"
        />
      </form>
    </div>
  </div>
</template>

<script>
import securepay from '../../../config/config_securepay'
import signChecksum from '../../../helpers/securepaysign'
import {v4 as uuidv4} from 'uuid'

export default {
  layout: 'tenant',
  data: () => ({
    show: false,
    amount: null,
    signed: null,
    tenant: [],
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

    async getSign() {
      var order_num = uuidv4()
      this.tenant.amount = this.amount
      this.tenant.order_number = order_num

      this.signed = await signChecksum(this.tenant)
      this.tenant.checksum = this.signed
      this.tenant.callback_url =
        'https://dev.sewanow.com/transaction_securepay/callback'
      this.tenant.redirect_url =
        'https://sewanow.com/tenant/wallet'
      this.tenant.order_number = order_num
      this.tenant.buyer_phone = ''
      this.tenant.product_description = 'topup'
      this.tenant.token = securepay.AUTH_TOKEN
    },

    async topupSecurePay() {
      this.$refs.form.submit()
    },
  },
}
</script>

<style>
</style>