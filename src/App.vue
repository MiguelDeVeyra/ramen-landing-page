<template>
  <div>
    <navbar @swtch-lang="switchLang"/>
    <fabLang/>
    <router-view />
    <footerCred/>
  </div>
  
</template>

<script>

import navbar from './components/navbar'
import footerCred from './components/footer'
import fabLang from './components/fabMobile'
import { computed } from 'vue'
import { useStore } from 'vuex'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  components:{
    navbar,
    footerCred,
    fabLang
  },

  created () {
    AOS.init({
      duration: 1000,
    })
  },

  setup(){

    const store = useStore();
    const language = computed(() => store.state.language);

    return{
      language,
    }
  }
}
</script>

<style lang="scss">

</style>
