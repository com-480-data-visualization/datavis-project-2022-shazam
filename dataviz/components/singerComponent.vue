<script>
export default {
  name: 'Singer'
}
</script>

<template>

<div>
    <!-- Button group -->
    <div class="mx-auto grid grid-cols-2 place-content-center m-6">
        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4" role="group">
                <p class="text-2xl p-6 text-gray-50">Singer Profile Image</p>
            </div>
        </div>
        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4" role="group">
                <p class="text-2xl p-6 text-gray-50">Singer name</p>
                <p class="text-2xl p-6 text-gray-50">Singer top songs</p>
            </div>
        </div>
    </div>

    <!-- word cloud -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Top songs word cloud</p>
        </div>
        <div></div>
    </div>

    <!-- radar graph -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Top songs audio feature radar graph</p>
        </div>
        <div></div>
    </div>

    <!-- scatter graph -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Audio feature over time scatter graph</p>
        </div>
        <div></div>
    </div>

    <!-- back button -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">            
            <a href="" @click.prevent="$router.back()">      
                <button class="max-w-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Go Back
                </button>
            </a>
        </div>
        <div></div>
    </div>
</div>

</template>