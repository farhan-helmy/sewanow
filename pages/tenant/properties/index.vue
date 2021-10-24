<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="tenants"
      :search="search"
      sort-by="created_at"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title> Property Lists </v-toolbar-title>
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
      <template v-slot:item.rent_amount="{ item }">
        <span class="font-weight-bold"> RM {{ item.rent_amount }}</span> 
      </template>
      <template v-slot:item.is_due="{ item }">
        <v-chip color="green" dark v-if="!item.is_due">
          Not Due
        </v-chip>
         <v-chip color="red" dark v-if="item.is_due">
          Due
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon medium @click="viewItem(item)"> mdi-eye </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  layout: 'tenant',
  data: () => ({
    search: '',
    headers: [
      {
        text: 'Building Type',
        align: 'start',
        sortable: false,
        value: 'building_type',
      },
      {
        text: 'Status',
        align: 'start',
        sortable: false,
        value: 'is_due',
      },
      {
        text: 'Due Date',
        align: 'start',
        sortable: false,
        value: 'rent_due',
      },
      {
        text: 'Amount',
        align: 'start',
        sortable: false,
        value: 'rent_amount',
      },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    tenants: [],
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
      try {
        let results = await this.$axios.get('/v1/tenant/me')
        //console.log(results.data.tenant)
        this.tenants = results.data.tenant.properties
      } catch (e) {
        //console.log(e)
      }
    },
    viewItem(item) {
      this.$router.push(`/tenant/properties/${item.id}`)
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    getColor(status) {
      console.log('test' + status)
      if (status === false) return 'green'
    },
  },
}
</script>