<script>
export default {
  name: 'Introduction'
}
</script>

<style>
#introTopic {
  color: #A4D938;
}
</style>

<template>

<div class="mx-auto grid grid-cols-1 w-3/4 place-content-center mt-40">
    <div class="rounded-xl p-6">
        <div class="text-center">
            <p id="introTopic" class="text-6xl font-medium">DISCOVERY OF POP MUSIC</p>
            <p class="text-xl p-6 text-gray-50">
                Everyone can be a massive fan of music once their own style is found. Because music is within us, around us and everywhere. Like any other effectively advancing field, the music industry evolves and produces new trends from time to time, affected by the shifting preferences of the audience or artists.
            </p>
            <p class="text-xl p-6 text-gray-50">
                Who are the trending singers during the past four years?<br>Which are their musical characteristics and emotional expression?<br>How does the trend evolve?<br>Let's explore the data from BillBoard to get the answers to these questions!
            </p>
        </div>
    </div>

    <div class="mx-auto grid grid-cols-3 place-content-center">
        <div></div>
        <div class="rounded-xl content-center">
            <NuxtLink to="/selectionPage">
                <button class="border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2">
                    Let's explore!
                </button>
            </NuxtLink>
        </div>
        <div></div>
    </div>
</div>

</template>