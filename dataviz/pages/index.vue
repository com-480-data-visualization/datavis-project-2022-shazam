<template>
<div class="bg-gray-800 h-screen w-screen">
  <navbar/> 
  <div class="grid place-items-center">
    <RightLineChart/>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import RightLineChart from '~/components/RightLineChart.vue'
import Navbar from '../components/navbar.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { 
      RightLineChart: RightLineChart,
      Navbar: Navbar,
    }
})
</script>