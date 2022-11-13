<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import LeftLIst from "./components/LeftList.vue";
import TableHeader from "./components/TableHeader.vue";
import MainTable from "./components/MainTable.vue";
</script>

<template>
  <div class="wrapper">
    <div class="sider"><LeftLIst /></div>
    <div class="main">
      <TableHeader />
      <MainTable />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  height: 100vh;
}
.sider {
  width: 240px;
}
.main {
  flex: 1;
  width: 0;
  display: flex;
  flex-direction: column;
}
</style>
