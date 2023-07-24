
// import Swiper JS
import Swiper, { Autoplay, Navigation, Pagination, Controller,  } from 'swiper';
// import Swiper styles
import 'swiper/css';

Swiper.use([Autoplay, Navigation, Pagination, Controller]);
export default defineNuxtPlugin(() => {
    return {
        provide: {
            Swiper: Swiper
        }
    }
})