<template>
<div>
  <navbar/> 
  <div class="grid place-items-center w-screen h-screen">
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