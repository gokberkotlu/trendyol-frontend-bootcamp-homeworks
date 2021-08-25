<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import './styles/style.css'
import './styles/pending.css'
export default {
  components : {
    'appHeader' : Header
  }
}
</script>

<style>
</style>
