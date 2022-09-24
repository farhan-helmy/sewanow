<template>
  <v-app id="app">
    <v-main>
      <v-container class="back" fill-height fluid>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-dialog width="20%" v-model="alert">
              <v-card>
                <v-card-title> Login </v-card-title>
                <v-card-text>
                  {{ log }}
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" @click="alert = false" dark
                    >Ok</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col cols="5">
            <v-card class="card-login mx-a">
              <v-card-title>Login</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="pa-5">
                <v-form v-on:submit="sub" action="#" method="post">
                  <v-text-field
                    color="green darken-1"
                    v-model="login"
                    label="User"
                  ></v-text-field>
                  <v-text-field
                    color="green darken-1"
                    v-model="senha"
                    label="Password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'auth',
  data: () => ({
    loginData: {
      email: '',
      password: '',
    },
    login: '',
    senha: '',
    log: '',
    alert: false,
  }),
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith('local', {
          data: this.loginData,
        })
        this.$router.push('/admin/home')
        //console.log(response)
      } catch (err) {
        //console.log(err)
      }
    },
    sub: function (event) {
      if (this.login == '' || this.senha == '') {
        this.alert = true
        this.log = 'User and Password is required.'
        event.preventDefault()
      } else {
        this.log = 'Go'
      }
    },
  },
}
</script>

<style>
</style>