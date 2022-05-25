<template>
  <v-card>
    <v-alert border="top" color="green lighten-2" dark v-if="success">
      Password berjaya ditukar.
    </v-alert>
    <v-alert border="top" color="green lighten-2" dark v-if="warning">
      Password tidak sama.
    </v-alert>
    <v-alert border="top" color="green lighten-2" dark v-if="problem">
      Server bermasalah.
    </v-alert>
    <v-card-title>
      <span class="text-h5">Change Password</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Password"
              required
              v-model="password"
              type="password"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Confirm Password"
              required
              v-model="confirm_password"
              type="password"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" @click="submit"> Hantar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    password: null,
    confirm_password: null,
    warning: false,
    success: false,
    problem: false,
  }),
  props: {
    change_password: Boolean,
  },
  methods: {
    async submit() {
      if (this.password === this.confirm_password) {
        const data = { password: this.password }
        const res = await this.$axios.patch(
          `/v1/tenant/${this.$route.params.id}/changepass`,
          data
        )
        if (res.status == 200) {
          this.change_password = false
          this.success = true
        } else {
          this.problem = true
        }
      }
      this.warning = true
    },
  },
}
</script>

<style>
</style>