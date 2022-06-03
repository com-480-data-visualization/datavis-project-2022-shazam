<script>

const all_singers = "https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-shazam/main/dataset/crawler/data/singers/all_singers.json"

export default {
  name: 'ArtistComponent',

  methods: {
    async fetchData() {
      this.all_singers = null
      this.tableData = []

      {
        const res = await fetch(
            all_singers
        )
        this.all_singers = await res.json()

      }
        this.processData(this.all_singers)
    }, processData(singers) {      
        this.tableData = singers  
    }
  },

  data() {
    return {
      text: '',
      all_singers: [],
      tableData: [],
    }
  },

  watch: {
      text() {
        var ret = []
          if(this.text.length > 0) {
               ret = this.all_singers.filter(value => {
                //    console.log(value, this.text, value.includes(this.text))
                   return value.toLowerCase().includes(this.text.toLowerCase())
               })
          } else {
                ret = this.all_singers           
          }

          this.processData(ret)      
      },
  },

  mounted() {
      this.fetchData()
  },
}
</script>

<template>

    <div class="bg-gray-900 container">
        <div class="container grid grid-cols-3 mt-6">
            <div></div>
            <div>
                <form class="flex items-center">   
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input v-model="text" type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                    </div>
                </form>
            </div>
            <div></div>
        </div>

        <div class="container grid grid-cols-3 mt-6">
            <div></div>
                <p class="text-white">{{ this.text }}</p>
            <div></div>
        </div>

        <div class="bg-gray-900 container justify-center">
            <div class="container justify-center shadow-md sm:rounded-lg">
            <template v-for="singer in tableData">
                
                <NuxtLink :to="`/singer/${encodeURIComponent(singer)}`">
                    <span class="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800">
                        {{ singer }}
                    </span>
                </NuxtLink>
                
            </template>
            
            </div>
        </div>
    
</div>

</template>