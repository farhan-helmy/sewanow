<template>
  <div>
    <v-alert
      v-if="latestamt"
      icon="mdi-shield-lock-outline"
      prominent
      type="info"
    >
      <v-row align="center">
        <v-col class="grow font-weight-black"> Pay RM {{ latestamt }} ? </v-col>
        <v-col class="shrink">
          <v-btn @click="pay">Pay</v-btn>
        </v-col>
      </v-row>
    </v-alert>
    <v-data-table
      :headers="headers"
      :items="bills"
      :search="search"
      sort-by="created_at"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title> Bills </v-toolbar-title>
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
        </v-toolbar>
      </template>
      <template v-slot:item.created_at="{ item }">
        <p class="">{{ item.created_at.substring(0, 10) }}</p>
      </template>
      <template v-slot:item.amount="{ item }">
        <p class="font-weight-black">RM {{ item.amount }}</p>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          v-if="item.status === 'DUE'"
          color="primary"
          @click="getSign(item)"
        >
          pay
        </v-btn>

        <v-btn v-else color="primary" @click="viewBill(item)">
          View Bill
        </v-btn>
      </template>
    </v-data-table>
    <div>
      <form
        method="POST"
        action="https://sandbox.securepay.my/api/v1/payments"
        ref="form"
      >
        <input type="hidden" name="buyer_name" :value="tenant.name" />
        <input type="hidden" name="buyer_email" :value="tenant.email" />
        <input type="hidden" name="token" :value="tenant.token" />
        <input type="hidden" name="transaction_amount" :value="tenant.amount" />
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
        <input type="hidden" name="params" :value="tenant.params" />
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
import { v4 as uuidv4 } from 'uuid'
import signChecksum from '~/helpers/securepaysign'
import securepay from '~/config/config_securepay'

export default {
  data: () => ({
    search: '',
    tenant: [],
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },

      {
        text: 'Status',
        align: 'start',
        sortable: false,
        value: 'status',
      },
      {
        text: 'Date',
        align: 'start',
        sortable: false,
        value: 'created_at',
      },
      {
        text: 'Amount',
        align: 'start',
        sortable: false,
        value: 'amount',
      },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    bills: [],
    latestamt: null,
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
  },

  methods: {
    async initialize() {
      let results = await this.$axios.get(
        `/v1/tenant-property/${this.$route.params.id}`
      )

      let tenant = await this.$axios.get('/v1/tenant/me')

      this.tenant = tenant.data.tenant
      const date = new Date()
      //this.tenant.product_description = `Rent payment for ${date.toLocaleString()}`
      this.bills = results.data.bills
      //console.log(this.bills)
    },
    viewItem(item) {
      this.$router.push(`/admin/properties/${item.id}`)
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    getColor(status) {
      if (status === false) return 'green'
    },
    viewBill(item) {
      //console.log(item)
      window.open(item.receipt_url)
    },

    getSign(item) {
      var params
      this.latestamt = item.amount
      var order_num = uuidv4()
      this.tenant.product_description = item.id
      this.tenant.amount = item.amount
      this.tenant.order_number = order_num
      this.signed = signChecksum(this.tenant)
      //console.log(this.signed)
      this.tenant.checksum = this.signed
      this.tenant.callback_url =
        'https://dev.sewanow.com/transaction_securepay/callback'
      this.tenant.redirect_url = 'https://sewanow.com/tenant/bills'
      this.tenant.buyer_phone = ''
      this.tenant.token = securepay.AUTH_TOKEN
      //console.log(item.id)
      this.tenant.params = `{'reference1_label':'bill_id', 'reference1': '${item.id}'}`

      //console.log(securepay.AUTH_TOKEN)
    },

    async pay() {
      await this.$refs.form.submit()
    },
  },
}
</script>