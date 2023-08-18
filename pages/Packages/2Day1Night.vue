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
            Paket 2 Hari 1 Malam adalah program trip dengan bermalam dikapal selama 2 hari 1
            malam dengan pilihan kapal sesui dengan pilihan anda. Paket wisata ini mewarkan
            kunjungan wisata ke dalam Taman Nasional Komodo, melakukan banyak aktivitas
            snorkeling, melihat dan menikmati bintang jatuh di malam hari, menikmati sunset dan
            sunrise yang menakjubkan dan masih banyak kegiatan lagi lainnya.

          </p>

        </div>

        <!-- Iternary Tabs -->
        <div v-if="activeTab === 'Iternary'">

          <h2>Day 01 : Labuan Bajo- Kelor – manjarite- Pulau kalong – Pulau Padar </h2>
          <p>
            Hari pertama kami akan menjemput anda di hotel pilihan anda di Labuan Bajo,
            dan lansung menuju pelabuhan kemudian menuju kapal dan akan diperkenalkan dengan
            team yang akan menemani anda selama trip. Setelah dikapal akan berlayar menuju pulau
            kelor untuk kegiatan trekking dan snorkeling, setelah menghabisi sekitar 2 jam lebih
            dikelor anda akan berlayar menuju Menjerite untuk snokeling lalu kemudian berlayar
            menuju pulau kalong untuk menikmati sunset dan melihat Kalong keluar dari goa
            kemudian setelah itu akan berlayar menuju pulau padar dan bermalam dikapal.

          </p>

          <h2>
            Day 02: Pulau Padar- Pulau Komodo - Pink Beach - manta point - Pulau kanawa .
          </h2>

          <p>Trekking menuju puncak pulau padar untuk menikmati sunrise dan berfoto
            kemudian kembali kekapal untuk sarapan lalu berlayar menuju pulau komodo untuk
            trekking dan melihat komodo, ada beberapa pilihan Trekking yang tersedia yaitu:
            Short track (1 jam), Medium (1,5 jam) dan long walk (2.5 jam). di pulau Komodo
            pengunjung akan dipandu oleh Ranger yang telah berpengalaman dan mempunyai
            pengetahuan mengenai kawasan tersebut. Para Rangers (Naturalist Guide) akan
            membuat anda aman dan nyaman dan akan mendampingi selama perjalanan Trekking
            dikawasan pulau komodo.
            setelah selesai di Pulau komodo anda akan berlayar menuju pink beach untuk
            snorkrlling lalu kemudian menuju manta point sebagai spot terakhir sebelum kembali ke
            Labuan Bajo .
            Note : Please, jangan mengambil karang,kerang atau pasir, jagalah alam dengan apa
            adanya selain dilarang anda akan mendapatkan masalah di airport.</p>
        </div>

        <!-- Get T Know Tabs -->
        <div v-if="activeTab === 'Good To Know'">

          <h2>Include</h2>

          <ul>
            <li>Kapal Ber AC , semi/ luxury phinisi</li>
            <li>Makan ( Breakfast ,Lunch ,Dinner)</li>
            <li>Air mineral</li>
            <li>Alat snorkelling</li>
            <li>Tour guide</li>
            <li>Kopi the dan snack</li>
          </ul>


          <h2>Exclude</h2>

          <ul>
            <li>Hotel</li>
            <li>Tiket Pesawat PP</li>
            <li>Seluruh entrance fee di TNK</li>
            <li>Asuransi perjalanan</li>
            <li>Minuman ringan dan beralkohol</li>
          </ul>


          <h2>Perlengkapan yang harus dibawa :</h2>
          <ul>
            <li>Sepatu treking, baju renang, handuk, tabir surya/kacamata hitam/topi, kamera/kamera video, uang tunai.
            </li>
          </ul>

          <h2>Catatan penting :</h2>
          <ul>
            <li>Tur ini hanya tersedia dari Labuan Bajo.</li>
            <li>Jika anda memilih tur dari Bali atau tempat lain, silahkan hubungi kami, maka kami akan mengatur tur ini
              berdasarkan kebutuhan anda.</li>
            <li>Silahkan kirim nama lengkap, nomor paspor, ukuran sepatu, dan nama hotel anda.</li>
            <li>Anda harus memesan sedini mungkin.</li>
            <li>Bersiaplah tepat waktu untuk mengambil berdasarkan jadwal waktu anda.</li>
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

