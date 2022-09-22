<template>
  <div>
    <v-app>
      <v-app-bar app color="red" dark>
        <div class="d-flex align-center">
          <h1>SewaNow</h1>
        </div>

        <v-spacer></v-spacer>

        <v-btn href="https://sewanow.com/tenant/login" target="_blank" text>
          <span class="mr-2">TENANT</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-img class="my-3" contain height="200"></v-img>
        <v-alert
          v-if="this.error"
          dismissible
          border="right"
          color="red"
          type="success"
          >Wrong username / password!</v-alert
        >
        <v-card
          class="mx-auto"
          color="#A9A9A9"
          dark
          max-width="400"
          elevation="7"
        >
          <v-card-title>
            <v-icon color="black">mdi-account</v-icon>
            <span class="title font-weight-bold text--primary"
              >Admin Login Here</span
            >
          </v-card-title>

          <v-card-text>
            <form @submit.prevent="login">
              <v-text-field
                v-model="loginData.email"
                label="Username"
                prepend-icon="mdi-account-circle"
                hint="Masukkan username anda"
              />
              <v-text-field
                v-if="showPassword"
                v-model="loginData.password"
                label="Password"
                type="text"
                prepend-icon="mdi-lock"
                append-icon="mdi-eye"
                @click:append="showPassword = !showPassword"
              />
              <v-text-field
                v-else
                v-model="loginData.password"
                label="Password"
                type="password"
                prepend-icon="mdi-lock"
                append-icon="mdi-eye"
                @click:append="showPassword = !showPassword"
              />
              <v-row justify="center">
                <v-btn type="submit">Login</v-btn>
              </v-row>
            </form>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
        <v-row align="center" justify="center">
          <!--<v-img
        contain
        lazy-src="../assets/logo.png"
      ></v-img> -->
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data: () => ({
    links: [''],
    loginData: {
      email: '',
      password: '',
    },
    showPassword: false,
    error: false,
  }),
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith('local', {
          data: this.loginData,
        })

        if (response.status === 201) {
          this.$router.push('/admin/home')
        }

        console.log(response)
      } catch (err) {
        //console.log(err)
        this.error = true
      }
    },
  },
}
</script>

<style>
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}

a {
  list-style: none;
}
</style>