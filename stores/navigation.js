import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
    state: () => ({ windowPosition: 0, isMenuOpen: false }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        setBannerDesc(params) {
         this.bannerDesc = params;
        },
    },
})