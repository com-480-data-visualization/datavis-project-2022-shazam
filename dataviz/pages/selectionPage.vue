<script lang="ts">
import Vue from 'vue'
import navbarVue from '~/components/navbar.vue'
import selectionComponent from '~/components/selectionComponent.vue'


export default Vue.extend({
  name: "SelectionPage",
  components: {
    Navbar: navbarVue,
    SelectionComponent: selectionComponent,
},

  data() {
    return {
      
    }
  },
})
</script>

<template>

<div class="bg-gray-900 min-h-screen">

    <navbar/> 
    
    <SelectionComponent/>
</div>

</template>