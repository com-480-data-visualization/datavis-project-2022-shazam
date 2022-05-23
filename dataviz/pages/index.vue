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
import Tutorial from '~/components/Tutorial.vue'
import RightLineChart from '~/components/RightLineChart.vue'
import Navbar from '../components/navbar.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { 
      Tutorial: Tutorial,
      RightLineChart: RightLineChart,
      Navbar: Navbar,
    }
})
</script>