<template>
  <div class="navbar">
    <!-- md nav and up -->
    <div class="desktopNav">
        <div class="logoContainer">
            <!-- :height is the same as v-bind -->
            <router-link to="/">
                <navbarLogo :height="55"/>
            </router-link>
        </div>
        <div>
            <router-link to="/menu">
                <span v-if=" defaultLanguage">Menu</span>
                <span v-if="! defaultLanguage">メ ニ ュ ー</span>
            </router-link>
        </div>
        <div>
            <router-link to="/aboutUs">
                <span v-if=" defaultLanguage">About Us</span>
                <span v-if="! defaultLanguage">約 我 ら</span>
            </router-link>
        </div>
        <div>
            <router-link to="/contact">
                <span v-if="defaultLanguage">Contact</span>
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
    </div>
  </div>
</template>

<script>

import navbarLogo from './../assets/svg/navbarLogo'
import { computed } from 'vue';
import store from '../store'

export default {
    name: 'navbar',

    setup(){
        const message = computed(()=>store.state.message)
        const defaultLanguage = computed(()=>store.state.defaultLanguage)

        function switchLanguage(){
            store.commit('LANG_SWITCH', !defaultLanguage.value)
        }

        return{
            message,
            defaultLanguage,
            switchLanguage
        }
    },

    components : {
        navbarLogo
    },

    

}

</script>

<style lang="scss" scoped>
</style>
