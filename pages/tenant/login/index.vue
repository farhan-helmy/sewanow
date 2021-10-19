<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="black darken-1">
        <v-tab> <NuxtLink to="/"> Admin </NuxtLink> </v-tab>
        <v-tab> <NuxtLink to="/tenant/login" > Tenant </NuxtLink> </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-card
              dark
              color="dark"
              elevation-24
              style="padding: 20px; border: 1px; border-radius: 50px"
            >
              <v-card-text>
                <h2 class="font-weight-bold">Tenant Login</h2>
                <hr />
                <br />
                <v-form>
                  <v-text-field
                    clearable
                    v-model="username"
                    label="Username"
                    prepend-icon="mdi-human"
                    type="text"
                    color="white"
                    
                  >
                  </v-text-field>
                  <v-text-field
                    clearable
                    v-model="password"
                    label="Password"
                    prepend-icon="mdi-lock"
                    type="password"
                    color="white"
                  >
                  </v-text-field>
                </v-form>
                <br />
                <v-btn color="grey darken-2" large>Login</v-btn>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
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
    links: [''],
    password: "",
    username: ""
  }),
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