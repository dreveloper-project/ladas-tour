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

    <div class=" bg-[#01121a]">
            
        <Navbar-Static />
    
    <!-- Tabs component -->
    <div id="tabs" class=" mt-[6rem] px-[2rem] md:px-[8rem]">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              @click="activeTab = tab"
              :class="[
                  tab === activeTab
                      ? 'border-yellow-600 text-yellow-600 md:text-[1.6rem]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 md:text-[1.4rem]',
                  'whitespace-nowrap py-4 md:px-1 border-b-2 font-medium transition-all '
              ]"
            >
              {{ tab }}
            </button>
          </nav>
        </div>

        <div id="tabs-menu">
          <!-- Tab Content -->

          <!-- Overview Tabs -->
          <div v-if="activeTab === 'Overview'">
             <h2>Live On Board 3D/2N</h2>

             <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 my-5">
                <img src="/trip-photos/Trip (1).jpg" alt="Image 1" class="object-cover w-full h-full">
                <img src="/trip-photos/Trip (2).jpg" alt="Image 2" class="object-cover w-full h-full">
                <img src="/trip-photos/Trip (3).jpg" alt="Image 3" class="object-cover w-full h-full">
                
             </div>

             <p>
                Paket 3 hari 2 malam adalah program trip dengan bermalam dikapal selama dua malam dengan pilihan kapal terbaik sesui dengan pilihan anda.. Program trip ini juga adalah pilihan paket terbaik bagi anda yang ingin an ingin melihat komodo,menikmati sunset/sunrise,trekking, snorkelling. 
     Trip3 hari 2 malam akan mengunjungi 10 spot terbaik yang ada di dalam wilayah Taman Nasional Komodo. Spot tersebut seperti Pulau Kelor, Manjarite, Pulau Kalong, Pulau Padar,  Pulau Komodo, Pink Beach,Syaba Island,, Manta Point,Taka Makasar, dan Kanawa Island 

             </p>
             
          </div>

          <!-- Iternary Tabs -->
          <div v-if="activeTab === 'Iternary'"> 

            <h2>Day 01 : Penjemputan di hotel-Pulau kelor- Manjarite- Pulau Kalong-pulau padar.</h2>
            <ul>
                <li>Penjemputan di hotel/Bandara </li>
                 <li>Trekking ke puncak bukit untuk mengabadikan momen di puncak bukit Kelor</li>
                    <li>Melihat beberapa karya masyarakat lokal yang ditawarkan</li>
            </ul>
          </div>

          <!-- Get T Know Tabs -->
          <div v-if="activeTab === 'Good To Know'"> 

            <h2>Include</h2>

            <ul>

                <li>Biaya Hotel</li>
                <li>Tiket keberangkatan</li>
                <li>Seluruh entrance fee di Taman Nasional Komodo</li>
                <li>Asuransi perjalanan</li>
                <li>Minuman ringan dan beralkohol</li>

            </ul>


            <h2>Exclude</h2>

            <ul>
                
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

