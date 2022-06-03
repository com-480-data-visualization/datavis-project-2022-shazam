<script>
export default {
  name: 'Navbar'
}
</script>

<style>
#nav1 {
  color: #A4D938;
}

#nav2 {
  color: #EB65B4;
}

#nav3 {
  color: #FBD330;
}

#nav4 {
  color: #4bbede;
}

#navbarBG {
  background-color: #0b1838;
}
</style>

<template>
<nav id="navbarBG" class="sticky top-0 z-50 bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <!-- <img class="hidden lg:block h-6 w-auto" src="~/assets/EPFL.svg" alt="EPFL">  -->
          <img class="hidden lg:block h-10 w-auto" src="~/assets/icon.jpg" alt="EPFL"> 
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <!-- <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a> -->

            <NuxtLink id="nav1" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/">Home</NuxtLink>

            <NuxtLink id="nav2" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/weekly">Weekly Analysis</NuxtLink>

            <NuxtLink id="nav3" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/yearly">Yearly Analysis</NuxtLink>

            <NuxtLink id="nav4" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/artist">Artists</NuxtLink>

            <!-- <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>