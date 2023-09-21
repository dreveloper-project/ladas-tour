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
          <h2>Live On Board 4D/3N</h2>

          <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 my-5">
            <img src="/tripphotos/Trip1.jpg" alt="Image 1" class="object-cover w-full h-full">
            <img src="/tripphotos/Trip2.jpg" alt="Image 2" class="object-cover w-full h-full">
            <img src="/tripphotos/Trip3.jpg" alt="Image 3" class="object-cover w-full h-full">

          </div>

          

        </div>

        <!-- Iternary Tabs -->
        <div v-if="activeTab === 'Iternary'">

          <h2>Day 01 </h2>
          <ul>
            <p>Airport - Check in Hotel - Dinner</p>

          </ul>

          <h2>Day 02 </h2>
         <ul>
    <li>Breakfast at Hotel</li>
    <li>Check out hotel (08.30)</li>
    <li>Our guide will pick up at the hotel and drop to the harbor</li>
    <li>Start Sailing (10.30 wita)</li>
    <li>Trekking ke Pulau Kelor to see a beautiful view from the top</li>
    <li>Lunch on Board</li>
    <li>Continue to Manjarite Island, swimming and Snorkeling</li>
    <li>Sail to Kalong Island, Sunset view while seeing the millions of giant flying fox activities in the night</li>
    <li>Dinner and overnight on the boat</li>
    <li>Free time, Enjoy Milky way in the sky</li>
  </ul>


          <h2>Day 03 </h2>
          
           <ul>
    <li>Breakfast on the boat</li>
    <li>Start Tracking to Padar Island, we will hike to the top of the island and enjoy the best view.</li>
    <li>Back to the Boat</li>
    <li>Continue to Pink Beach, swimming and enjoy the beach with pink sand.</li>
    <li>Lunch will be served on the boat</li>
    <li>Sail to Komodo/Rinca Island to Explore the Komodo Dragon.</li>
    <li>Return to Labuan Bajo and drop off at the Hotel</li>
    <li>Dinner at a local restaurant</li>
    <li>Overnight at the Hotel</li>
  </ul>


  <h2>Day 04</h2>
          
         <ul>
    <li>Breakfast at Hotel</li>
    <li>Drop to Souvenir Shop</li>
    <li>Drop to Airport for flight to the next Destination</li>
  </ul>

      

        </div>

        <!-- Get T Know Tabs -->
        <div v-if="activeTab === 'Good To Know'">

          <h2>Include</h2>

          <ul>

              <li>Kapal Ber AC , semi/ luxury phinisi ;</li>
    <li>Makan ( Breakfast ,Lunch ,Dinner) selama trip;</li>
    <li>Air mineral</li>
    <li>Alat snorkelling</li>
    <li>Tour guide</li>
    <li>Kopi tea dan snack</li>
    <li>Dokumentasi</li>
          </ul>


          <h2>Exclude</h2>
          
          <ul>
                <li>Biaya Hotel</li>
      <li>Tiket keberangkatan</li>
      <li>Seluruh entrance fee di TNK</li>
      <li>Asuransi perjalanan</li>
      <li>Minuman ringan dan beralkohol</li>
          </ul>


          <h2>Perlengkapan Yang Harus DiBawa</h2>
  <ul>
    <li>Sepatu treking, baju renang, handuk, tabir surya/kaca mata hitam/topi, kamera/kamera video, uang tunai (IDR)</li>
  </ul>

  <p><strong>Catatan penting</strong></p>
  <ul>
    <li>Tur ini hanya tersedia dari Labuan Bajo</li>
    <li>Silahkan kirim nama lengkap, nomor paspor, ukuran sepatu, dan nama hotel yang anda pilih di Labuan Bajo;</li>
    <li>Anda harus memesan sedini mungkin</li>
    <li>Bersiaplah tepat waktu sesuai dengan waktu yang telah ditentukan.</li>
  </ul>

  <p><em>Note: Please, jangan mengambil karang, kerang atau pasir, jagalah alam dengan apa adanya selain dilarang anda akan mendapatkan masalah di airport.</em></p>

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

