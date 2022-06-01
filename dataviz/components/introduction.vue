<script>
export default {
  name: 'Introduction'
}
</script>

<template>

<div class="mx-auto grid grid-cols-1 place-content-center mt-40">
    <div class="rounded-xl p-6">
        <div class="text-center">
            <p class="text-6xl font-medium text-gray-50">The evolution of music</p>
            <p class="text-2xl p-6 text-gray-50">Through the BillBoard weekly data since 2018, we can see a lot of different music trends.</p>
            <p class="text-2xl p-6 text-gray-50">Shall the journey of discoverying new music, and exploring the musical changes in the past 4 year with us begins!</p>
        </div>
    </div>

    <div class="mx-auto grid grid-cols-3 place-content-center">
        <div></div>
        <div class="rounded-xl content-center">
            <NuxtLink to="/timeline">
                <button class="border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2">
                    Let's explore!
                </button>
            </NuxtLink>
        </div>
        <div></div>
    </div>
</div>

</template>