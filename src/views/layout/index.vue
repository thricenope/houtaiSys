<template>
  <div class="">Layout 页面</div>
  <div class="app-wrapper">
    <Sidebar id="guide-sidebar" class="sidebar-container" :style="{ backgroundColor: variables.menuBg }"/>
    <div class="main-container">
      <div class="fixed-header">
        <navbar/>
      </div>
      <app-main/>
    </div>
  </div>

</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import AppMain from "./components/AppMain.vue";
import Sidebar from "./components/Sidebar/index.vue"

import variables from '@/styles/variables.scss'

</script>

<style scoped>

</style>
