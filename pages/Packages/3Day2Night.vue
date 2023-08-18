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
            <img src="/tripphotos/Trip1.jpg" alt="Image 1" class="object-cover w-full h-full">
            <img src="/tripphotos/Trip2.jpg" alt="Image 2" class="object-cover w-full h-full">
            <img src="/tripphotos/Trip3.jpg" alt="Image 3" class="object-cover w-full h-full">

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

          <h2>Day 01 : Penjemputan di hotel-Pulau kelor- Manjarite- Pulau Kalong-pulau padar.</h2>
          <ul>
            <li>Penjemputan di hotel/Bandara</li>
            <li>Berlayar ke pulau kelor-trekking kepuncak bukit mengabadikan moment di puncak bukit kelor, dan melihat
              produk masyarakat pesisir yang bisa dibeli dan dibawa pulang sebagai oleh-oleh;</li>
            <li>Berlayar ke manjarite dengan menghabiskan waktu sekitar 20 menit untuk Snorkelling;</li>
            <li>Berlayar ke Pulau Kalong untuk menikmati sunset dan melihat kalong/kelelawar keluar dari Goa di atas Kapal
              ;</li>
            <li>Berlayar menuju padar makan malam dan bermalam di kapal sambil menikmati keindahan langit dimalam hari;
            </li>

          </ul>

          <h2>Day 02 : Penjemputan di hotel-Pulau kelor- Manjarite- Pulau Kalong-pulau padar.</h2>
          <p>Trekking menuju puncak pulau padar untuk menikmati sunrise dan berfoto kemudian kembali
            kekapal untuk sarapan lalu berlayar menuju pulau komodo untuk trekking dan melihat komodo,
            ada beberapa pilihan Trekking yang tersedia yaitu:
            Short track (1 jam), Medium (1,5 jam) dan long walk (2.5 jam). di pulau Komodo pengunjung
            akan dipandu oleh Ranger yang telah berpengalaman dan mempunyai pengetahuan mengenai
            kawasan tersebut. Para Rangers (Naturalist Guide) akan membuat anda aman dan nyaman dan
            akan mendampingi selama perjalanan Trekking dikawasan pulau komodo.
            Setelah selesai di Pulau komodo anda akan berlayar menuju pink beach untuk snorkelling lalu
            kemudian menuju manta point untuk snorkeling bersama kawanan manta, Setelah itu menuju
            pulau Siaba bermalam disana.
          </p>

          <h2>Day 03 : Syaba- Kanawa Island- Bidadari island- Hotel/Bandar/.</h2>
          <p>
            Hari ke-3 setelah Sarapan akan dimulai dengan mengunjungi Pulau Syaba untuk snorkeling
  melihat penyu dan keanekaragaman coral dan ikan didalam kawasan pulau tersebut dan
  dialnjutkan dengan meng
          </p>

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

