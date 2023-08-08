
<script setup>

var linkTo = (link) => {
    window.location.href = link;
}

</script>

<template>
    <div class="h-[100vh] md:h-[60vh] lg:h-[60vh] relative mt-[2rem] ">
        <img id="bg-reviews" src="/images/package-2.jpg" class=" impar2 " alt="">
   

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 md:pt-14 pb-4 px-3">
      <!-- Review Card 1 -->
      <div class="bg-white shadow-lg rounded-lg overflow-hidden z-20">
        <div class="px-4 py-2">
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" src="/thumbs/1.png" alt="User Avatar">
            <div>
              <h2 class="text-lg font-semibold text-gray-800">Mia Kaban</h2>
              <p class="text-sm text-gray-600">5 stars &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </div>
          </div>
          <p class="text-gray-700 mt-4">"Servicenya oke tempatnya oke terima kasih gaaeesss… rekomen bangeeett"</p>
        </div>
        
      </div>

      <!-- Review Card 2 -->
      <div class="bg-white shadow-lg rounded-lg overflow-hidden  z-20">
        <div class="px-4 py-2">
              <div class="flex items-center">
                <img class="w-10 h-10 rounded-full mr-4" src="" alt="User Avatar">
                <div>
                  <h2 class="text-lg font-semibold text-gray-800">Fransica Meylani</h2>
                  <p class="text-sm text-gray-600">5 stars &#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <p class="text-gray-700 mt-4">"Went to Wae Rebo village with Ladas Tour. It was a great trip with affordable price. Felt a bit struggle with the hike, also im always the last in the line but thanks to Pak Wawan who always accompanied me and motivated me to reach the top of the village. He is skillful and helpful person....."</p>
            </div>
            
      </div>

      <!-- Review Card 3 -->
      <div class="bg-white shadow-lg rounded-lg overflow-hidden z-20">
        <div class="px-4 py-2">
              <div class="flex items-center">
                <img class="w-10 h-10 rounded-full mr-4" src="" alt="User Avatar">
                <div>
                  <h2 class="text-lg font-semibold text-gray-800">Indra Buana</h2>
                  <p class="text-sm text-gray-600">5 stars &#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
              <p class="text-gray-700 mt-4">"Fantastic 3-day 2-night unforgetable experiences in Labuan Bajo. The boat was so clean, with warm and friendly crews (especially Gerry - tour guide intern from Flores). The foods were also delicious. Overall, I would give 5 stars."</p>
            </div>
            
      </div>
    </div>


    <div class="flex justify-center"> 
      
        <button @click="linkTo('https://g.page/r/CRoO6h57hHV_EBM/review')" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold z-20 py-2 px-4 border border-gray-400 rounded shadow flex items-center">
      <img class="w-5 h-5 mr-2" src="/thumbs/google.jpg" alt="Google Icon">
      More In Google Reviews...
    </button>
    
    </div>

   </div>

   
</template>
<style scoped>
#bg-reviews {
    @apply absolute w-[100%] h-[100%];
    object-fit: cover;
    object-position: center;

}</style>