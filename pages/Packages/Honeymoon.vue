<script>
export default {
  data() {
    return {
      tabs: ['Overview', 'Iternary', 'Good To Know'],
      activeTab: 'Overview'
    };
  }
};
</script>
<template>
  <div class=" bg-[#4d99c9]">

    <Navbar-Static />

    <!-- Tabs component -->
    <div id="tabs" class=" mt-[6rem] px-[2rem] md:px-[8rem]">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = tab" :class="[
            tab === activeTab
              ? 'border-[#fcd616] text-[#fcd616] md:text-[1.6rem]'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 md:text-[1.4rem]',
            'whitespace-nowrap py-4 md:px-1 border-b-2 font-medium transition-all '
          ]">
            {{ tab }}
          </button>
        </nav>
      </div>

      <div id="tabs-menu">
        <!-- Tab Content -->

        <!-- Overview Tabs -->
        <div v-if="activeTab === 'Overview'">
          <h2>Honeymoon</h2>

          <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 my-5">
            <img src="/tripphotos/Trip1.jpg" alt="Image 1" class="object-cover w-full h-full">
            <img src="/tripphotos/Trip2.jpg" alt="Image 2" class="object-cover w-full h-full">
            <img src="/tripphotos/Trip3.jpg" alt="Image 3" class="object-cover w-full h-full">

          </div>

          

        </div>

        <!-- Iternary Tabs -->
        <div v-if="activeTab === 'Iternary'">

          <h2>Day 01  </h2>
          <p>
           On arrival at Komodo Airport and will be welcomed by Local guide

  Drop to Hotel and Check in
  Pick up for Photo couples in Sunset time  Labuan Bajo
  Free Time


          </p>

          <h2>
            Day 02
          </h2>

          <p>Breakfast at Hotel
  Start Sailing Komodo National Park  by Speedboat
  Back to Labuan Bajo and drop to Hotel
  Romantic Dinner at beach front with decoration 
  </p>


  

            <p><h2>
              Day 03
            </h2>

            <p>Breakfast at Hotel
    Start Sailing Komodo National Park  by Speedboat
    Back to Labuan Bajo and drop to Hotel
    Romantic Dinner at beach front with decoration 
    </p>
    </p>
        </div>


        

        <!-- Get T Know Tabs -->
        <div v-if="activeTab === 'Good To Know'">

          <h2>Include</h2>

          <ul>
            <li>Three (3) Days 2 Night stay at Ocean View Room</li>
            <li>Free honeymoon decoration</li>
            <li>Daily Breakfast at Beachfront Restaurant</li>
            <li>Private Photo couples Session with Mirrorless and Drone (Sunset time)</li>
            <li>One (1) time Romantic Dinner at Beach Front Restaurant</li>
            <li>One (1) Time Full Day Trip by Speedboat to Komodo National Park</li>
            <li>Free Lunch box upon trip to Komodo Island</li>
            <li>Free snorkeling gear upon to Komodo Island</li>
            <li>Free return airport transfer for upon trip for 2 persons.</li>
            <li>Entry Ticket to Komodo National Park</li>
          </ul>



          <h2>Exclude</h2>

        <ul>
    <li>Return Air Ticket</li>
    <li>Personal expenses</li>
    <li>Meals and beverages out of the trip</li>
  </ul>



        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
#tabs {
  font-family: Bienetre;
}

#tabs-menu div {
  @apply text-white;
}

#tabs-menu div h2 {
  @apply text-[1.3rem] md:text-[1.7rem];
}

ul {
  @apply list-disc list-inside text-yellow-500;
}
</style>

