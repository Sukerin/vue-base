<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="gotoTurnTable">
          <v-list-tile-action>
            <v-icon>camera</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Turn Table</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="gotoToadGame">
          <v-list-tile-action>
            <v-icon>gamepad</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Toad Game</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Wave-Particle Duality</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="lighten-4">
        <v-fade-transition mode="out-in">
            <router-view>
            </router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2018 Sukerin</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    },
    methods: {
      gotoTurnTable: function () {
        this.$router.push("LuckyTurntableList");
      } ,
      gotoToadGame: function () {
        this.$router.push("ToadGame");
      },
    }
  }
</script>


