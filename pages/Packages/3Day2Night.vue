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
          <h2>Live On Board 3D/2N</h2>

          <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 my-5">
            <img src="/lalunia/lalunia1.jpg" alt="Image 1" class="object-cover w-full h-full">
            <img src="/lalunia/lalunia2.jpg" alt="Image 2" class="object-cover w-full h-full">
            <img src="/lalunia/lalunia3.jpg" alt="Image 3" class="object-cover w-full h-full">

          </div>

          <p>
            Paket 3 hari 2 malam adalah program trip dengan bermalam dikapal selama dua malam
            dengan pilihan kapal terbaik sesuai dengan pilihan keinginan anda. Program trip ini juga adalah
            pilihan paket terbaik bagi anda yang ingin melihat komodo,menikmati sunset/sunrise,trekking,
            snorkelling di dalam wilayah Taman Nasional Komodo.
            Trip3 hari 2 malam akan mengunjungi 10 spot terbaik yang ada di dalam wilayah Taman
            Nasional Komodo. Spot tersebut seperti Pulau Kelor, Manjarite, Pulau Kalong, Pulau Padar,
            Pulau Komodo, Pink Beach,Syaba Island,, Manta Point,Taka Makasar, dan Kanawa Island
          </p>

        </div>

        <!-- Iternary Tabs -->
        <div v-if="activeTab === 'Iternary'">

          <h2>Day 01 : Airport - Check in Hotel - Dinner </h2>
          <p>On arrival at Komodo Airport and will be welcomed by out local
            guide
            Drop to hotel and check in
            Pick up for Dinner and Sunset on the boat/Restaurant</p>

          <h2>Day 02 : Penjemputan di hotel-Pulau kelor- Manjarite- Pulau Kalong-pulau padar.</h2>
          <ul class="list-disc list-inside">
            <li>Breakfast at Hotel</li>
            <li>Guide will pick you up at the hotel and drop you off at the harbor</li>
            <li>Start sailing at 07.30 am</li>
            <li>Start tracking to Pulau Padar to enjoy the view and take pictures</li>
            <li>Continue to Pink Beach: Swimming and taking pictures with pink sand</li>
            <li>Lunch will be served on the boat</li>
            <li>Sail to Komodo Island, track the Komodo route to explore the Komodo dragon</li>
            <li>Sail to Kanawa Island for snorkeling and enjoying the island</li>
            <li>Back to Labuan Bajo</li>
            <li>Drop off at the hotel</li>
            <li>Free time</li>
          </ul>


          <h2>Day 03 : Sailing Taman Nasional Komodo ONE DAY TOUR.</h2>
          <ul class="list-disc list-inside">
    <li>Breakfast at Hotel</li>
    <li>Drop to Souvenir Shop</li>
    <li>Drop to Airport for flight to the next Destination</li>
  </ul>


        </div>

        <!-- Get T Know Tabs -->
        <div v-if="activeTab === 'Good To Know'">

          <h2>Include</h2>

          <ul class="list-disc list-inside">
    <li>Transportation by car in and out of Labuan Bajo</li>
    <li>Dinner at sunset on the boat or at a local restaurant (Day 1)</li>
    <li>Entrance Fee to Komodo National Park for Foreigners</li>
    <li>English Speaking Guide</li>
    <li>2-Night stay at Silvia Resort Hotel 3*</li>
    <li>1-Day Trip by Speedboat</li>
    <ul class="list-disc list-inside ml-4">
      <li>Meals: Lunch on the speedboat</li>
      <li>Coffee and Snacks</li>
      <li>Mineral Water</li>
      <li>Snorkeling Gear</li>
      <li>Life Jacket</li>
      <li>Towel</li>
    </ul>
    <li>12-Seat Hi-Ace Van</li>
    <li>Innova Reborn for groups of less than 5 people</li>
    <li>Private Photographer on the trip to Komodo National Park (Go-Pro, Drone, and Mirrorless Camera)</li>
  </ul>



          <h2>Exclude</h2>

          <ul class="list-disc list-inside">
    <li>Return flight ticket</li>
    <li>Soft drinks & alcohol</li>
    <li>Tipping</li>
  </ul>


          <h2>Note :</h2>
          <ul class="list-disc list-inside">
    <li>Itinerary Program may change according to conditions or situations while on the trip, in case of FORCE MAJEURE. Force Majeure refers to a state of coercion beyond the limits of the capabilities of both parties, which can disrupt or even thwart the implementation of activities, such as natural disasters, wars, strikes, sabotage, a community blockade, government actions, especially due to circumstances beyond human capabilities.</li>
    <li>The Availability of the boat and rooms at the hotel used in this quotation will be subject to availability when the guest confirms.</li>
    <li>Transportation used in this quotation as follows:
      <ul class="list-disc list-inside ml-4">
        <li>2 - 5 Paxs: Innova</li>
        <li>5 - 12 Paxs: Elf 12 seat/Hiace</li>
      </ul>
    </li>
    <li>Flight Information:
      <ul class="list-disc list-inside ml-4">
        <li>Estimated time of Arrival (ETA): 15:15 PM</li>
        <li>Estimated time of Departure (ETD): 10:10 PM</li>
      </ul>
    </li>
    <li>Prices can change at any time considering that government regulations regarding the entrance fees of tourist destinations change every year.</li>
    <li>Prices can change at any time if there is an increase in fuel rates.</li>
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

