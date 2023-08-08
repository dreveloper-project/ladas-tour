import { defineNuxtPlugin, onNuxtReady } from '#app';
import simpleParallax from 'simple-parallax-js';

export default defineNuxtPlugin(() => {
    onNuxtReady(() => {
        const images = document.querySelectorAll('.impar');
        const images2 = document.querySelectorAll('.impar2');

        new simpleParallax(images, {
            orientation: 'right'
        });

        new simpleParallax(images2, {
            orientation: 'up',
           
        });
    });
});
