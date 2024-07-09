<script>
//import axios
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CharactersList.vue';
//import state management store
import { store } from './store';

export default {
  name: "App",
  components: {
    AppHeader,
    CharactersList,
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
