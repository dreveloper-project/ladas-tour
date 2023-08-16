<script setup>

import 'swiper/css';
import { useNavigationStore } from "~~/stores/navigation";

const { $Swiper } = useNuxtApp()
var swipe = $Swiper;

onMounted(() => {

    var swiper = new swipe(".mySwiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


})


const getImage = function (params) {
     const baseUrl = '~/assets/';
    // Using template literals
    return `${baseUrl}${params}`;

}

const store = useNavigationStore();

// const slides = [
//     {
//         image: '/images/Banner.jpg',
//         description: 'Cute kitten 1',
//         story: `Labuan Bajo yang dikenal sebagai surga nusantara saat ini menjadi destinasi yang banyak diminati oleh seluruh kalangan. Kota kecil   ini menyuguhkan banyak keindahan alam; bahari  Tadan lautan  Taman Nasional Komodo yang menakjubkan dan wajib anda  nikmati. 
//  Paket wisata La Da's merupakan salah satu paket wisata open trip di Labuan Bajo yang menawarkan beragam program wisata alam Taman Nasional Komodo yang dapat anda pilih untuk mendapatkan pengalaman berharga bersama sahabat;keluarga ataupun kekasih selama di Labuan Bajo.`

//     },
//     {
//         image: '/images/Banner-2.jpg',
//         description: 'Cute kitten 2',
//         story: `Labuan Bajo yang dikenal sebagai surga nusantara saat ini menjadi destinasi yang banyak diminati oleh seluruh kalangan. Kota kecil   ini menyuguhkan banyak keindahan alam; bahari  Tadan lautan  Taman Nasional Komodo yang menakjubkan dan wajib anda  nikmati. 
//  Paket wisata La Da's merupakan salah satu paket wisata open trip di Labuan Bajo yang menawarkan beragam program wisata alam Taman Nasional Komodo yang dapat anda pilih untuk mendapatkan pengalaman berharga bersama sahabat;keluarga ataupun kekasih selama di Labuan Bajo.`

//     },
//     {
//         image: '/images/Banner-3.jpg',
//         description: 'Cute kitten 3',
//         story: `Labuan Bajo yang dikenal sebagai surga nusantara saat ini menjadi destinasi yang banyak diminati oleh seluruh kalangan. Kota kecil   ini menyuguhkan banyak keindahan alam; bahari  Tadan lautan  Taman Nasional Komodo yang menakjubkan dan wajib anda  nikmati. 
//  Paket wisata La Da's merupakan salah satu paket wisata open trip di Labuan Bajo yang menawarkan beragam program wisata alam Taman Nasional Komodo yang dapat anda pilih untuk mendapatkan pengalaman berharga bersama sahabat;keluarga ataupun kekasih selama di Labuan Bajo.`

//     }
// ];

// var story = {
// }

</script>
<template>
    <div class=" h-[60vh] z-20 md:h-[80vh] lg:h-[100vh] bg-center flex ">

        <!-- Aside Banner -->
        <div class=" hidden md:block md:w-[30%] bg-[#4d99c9] backdrop-blur-lg p-4 relative z-20 ">
            <transition name="fade">
                <div v-if="store.windowPosition < 100" class=" relative top-[45%] flex flex-col gap-[1rem] mx-auto ">
                    <img class=" " src="/images/logo.png" alt="">
                    <h2 class=" text-white text-[2rem] relative text-center ">Feels Nature and Culture Flores with Us</h2>
                    <button
                        class=" text-[#F2BE22] font-medium cursor-pointer hover:bg-[#F2BE22] hover:text-white p-2 transition-all duration-150 border-[#F2BE22] w-[50%] border-2 mx-auto">More
                        Info..</button>
                </div>
            </transition>
        </div>

        <!-- Bside Banner -->
       <div class=" z-20 w-[100%] md:w-[70%]">
        <video class="video-banner" src="/banner.mp4" autoplay loop muted></video>
       </div>
    </div>

    <!-- Description Extension For Mobile -->
    <div class=" bg-[#155F8C] rounded-t-2xl md:hidden z-30 mt-[-25px] h-[45vh] relative flex flex-col gap-[1rem] justify-center ">
        <img class=" scale-75 " src="/images/logo.png" alt="">
        <h2 class=" text-white text-[1.6rem] relative text-center mt-[-1rem] ">Feels Nature and Culture Flores with Us</h2>
        <button class=" text-[#F2BE22] font-medium cursor-pointer hover:scale-110 transition-all duration-150">More
            Info..</button>
    </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

h2 {
    font-family: bienetre;
}

.video-banner {
    @apply w-[100%] h-[100%];
    object-fit: cover;
    object-position: center;
}


p {
    font-family: Bienetre;
}
</style>