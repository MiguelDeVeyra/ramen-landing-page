<template>
  <div class="fabLang" @click="switchLanguage">
      <div class="content">
          <span v-if="defaultLanguage">JAP</span>
          <span v-if="!defaultLanguage">ENG</span>
      </div>
  </div>
</template>

<script>

import { computed } from 'vue';
import store from '../store'

export default {
    name: 'fab',

    setup(){
        const defaultLanguage = computed(()=>store.state.defaultLanguage)

        function switchLanguage(){
            store.commit('LANG_SWITCH', !defaultLanguage.value)
        }

        return{
            defaultLanguage,
            switchLanguage
        }
    },

    components : {
    },

    

}

</script>

<style lang="scss" scoped>
</style>
