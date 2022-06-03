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
        this.tableData = []  
        var cached = []
        var row = []
        for(var i = 0; i < singers.length; i++) {
            if(i != 0 && i % 10 == 0) {
                cached.push(row)
                row = []
            }
            row.push(singers[i])
        }
        cached.push(row)

        // console.log(cached)

        this.tableData = cached
    }, refresh() {
            var ret = []
          if(this.text.length > 0) {
               ret = this.all_singers.filter(value => {
                   console.log(value, this.text)
                   return value.includes(this.text)
               })
          } else {
                ret = this.all_singers           
          }

          this.processData(ret)     
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
                   console.log(value, this.text, value.includes(this.text))
                   return value.includes(this.text)
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

    <div class="bg-gray-900 container min-h-screen">
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
                    <button type="submit" @click="refresh" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                </form>
            </div>
            <div></div>
        </div>

        <div class="container grid grid-cols-3 mt-6">
            <div></div>
                <p class="text-white">{{ this.text }}</p>
            <div></div>
        </div>

        <div class="bg-gray-900 container min-h-screen">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full table-fixed text-sm text-center text-gray-400">
                <!-- <thead class="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead> -->
                <tbody>
                    <!-- <component :is="`b-dropdown-item`" href="#" @click="updateWeek($event)" v-for="(option, index) in weekOptions" :key="index">{{ option.value }}</component> -->
                    <template v-for="singers in tableData">
                        <tr class="border-b bg-gray-800 border-gray-700">
                            <!-- {{ singers }} -->
                            <template v-for="singer in singers">
                                <td class="px-2 py-2">
                                    {{ singer }}
                                </td>
                            </template>
                        </tr>
                    </template>

                    <!-- <tr class="border-b bg-gray-800 border-gray-700">
                        <td scope="row" class="px-6 py-4">
                            Apple MacBook Pro 17"
                        </td>
                        <td class="px-6 py-4">
                            Sliver
                        </td>
                        <td class="px-6 py-4">
                            Laptop
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                    </tr> -->
                </tbody>
            </table>
        </div>
    </div>
    
</div>

</template>