<template>
  <div id="app">
    <Header appName="Course app"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/common/Header.vue';

@Component({
  components: {
    Header
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

</style>
