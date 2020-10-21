<template>
  <div class="navbar">
    <!-- md nav and up -->
    <div class="desktopNav">
        <div class="logoContainer ">
            <!-- :height is the same as v-bind -->
            <router-link to="/">
                <navbarLogo :height="55"/>
            </router-link>
        </div>
        <div>
            <router-link to="/menu">
                <span v-if="defaultLanguage">Menu</span>
                <span v-if="!defaultLanguage">メ ニ ュ ー</span>
            </router-link>
        </div>
        <div>
            <router-link to="/aboutUs">
                <span v-if=" defaultLanguage">About Us</span>
                <span v-if="!defaultLanguage">約 我 ら</span>
            </router-link>
        </div>
        <div>
            <router-link to="/contact">
                <span v-if="defaultLanguage">Contact Us</span>
                <span v-if="!defaultLanguage">連 絡 先</span>
            </router-link>
        </div>
        <div>
            <router-link to="/makeOrder">
                <span v-if="defaultLanguage">Make Order</span>
                <span v-if="!defaultLanguage">作 る 注 文</span>
            </router-link>
        </div>
        <div class="languageSwticher" @click="switchLanguage">
            <span 
                :class=" {'active' : defaultLanguage  === true} " 
                >Eng </span> 
            <span class="langDivider">/ </span>  
            <span 
                :class=" {'active' : $store.state.defaultLanguage === false} "
            > Jap</span> 
        </div>
    </div>
    
    <!-- small screen nav -->
    <div class="mobileNav">
        <div class="logoContainer">
            <!-- :height is the same as v-bind -->
            <router-link to="/">
                <navbarLogo :height="55"/>
            </router-link>
        </div>
        <div 
            class="hamburgerMenu " 
            @click="openNav" 
            v-if="!state.mobileNav"
            >
            <svg 
            width="24" height="24" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z" fill="black"/>
            </svg>
        </div>
        <transition name="slide-fade">
            <div 
                class="fullScreenMenu"
                id="fullScreenMenu"
                v-if="state.mobileNav"
                >
                <div class="closeMobNav " >
                    <svg @click="closeNav" 
                        width="30" height="30" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3002 0.710001C12.9102 0.320001 12.2802 0.320001 11.8902 0.710001L7.00022 5.59L2.11022 0.700001C1.72022 0.310001 1.09021 0.310001 0.700215 0.700001C0.310215 1.09 0.310215 1.72 0.700215 2.11L5.59022 7L0.700215 11.89C0.310215 12.28 0.310215 12.91 0.700215 13.3C1.09021 13.69 1.72022 13.69 2.11022 13.3L7.00022 8.41L11.8902 13.3C12.2802 13.69 12.9102 13.69 13.3002 13.3C13.6902 12.91 13.6902 12.28 13.3002 11.89L8.41021 7L13.3002 2.11C13.6802 1.73 13.6802 1.09 13.3002 0.710001V0.710001Z" fill="black"/>
                    </svg>

                </div>
                
                <div class="menuText" v-if="defaultLanguage">
                    <p>Menu</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Make Order</p>
                </div>
                <div class="menuText" v-if="!defaultLanguage">
                    <p>メ ニ ュ ー</p>
                    <p>約 我 ら</p>
                    <p>連 絡 先</p>
                    <p>作 る 注 文</p>
                </div>    
            </div>
        </transition>
        
    </div>
  </div>
</template>

<script>

import navbarLogo from './../assets/svg/navbarLogo'
import { computed, reactive } from 'vue';
import store from '../store'

export default {
    name: 'navbar',

    setup(){

        const state = reactive({
            mobileNav: false,
        })

        const defaultLanguage = computed(()=>store.state.defaultLanguage)

        function switchLanguage(){
            store.commit('LANG_SWITCH', !defaultLanguage.value);
        }

        function openNav(){
            state.mobileNav = true
            console.log('sideNavOpened ' + state.mobileNav);
        }

        function closeNav(){
            state.mobileNav = false
            console.log('closeNav' + state.mobileNav);
        }

        return{
            state,
            defaultLanguage,
            switchLanguage,
            openNav,
            closeNav
        }
    },

    components : {
        navbarLogo
    },

    

}

</script>

<style lang="scss" scoped>
</style>
