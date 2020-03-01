<template>
  <v-app>
    <v-app-bar absolute>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title @click="goToHome()">
        {{ appName }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon outlined color="pink" class="mr-2">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon outlined color="pink" class="mr-2">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu offset-y="">
        <template v-slot:activator="{ on }">
          <v-btn icon outlined color="pink" v-on="on">
            <v-icon color="pink">fas fa-user-graduate</v-icon>
          </v-btn>
        </template>
        <v-list class="mt-1">
          <v-list-item @click="goToLogin($event)">
            <v-list-item-title>
              Entrar
            </v-list-item-title>
            <v-icon class="mr-1">fas fa-sign-in-alt</v-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              Cadastrar
            </v-list-item-title>
            <v-icon class="ml-1">fas fa-sign-in-alt</v-icon>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
@Component({})
export default class Header extends Vue {
  @Prop({
    required: true,
    type: String
  })
  private appName!: string

  private goToLogin() {
    this.$router.push('login')
  }
  goToHome() : void {
    // redirect to home page
    this.$router.push('');
  }
}
</script>

<style></style>
