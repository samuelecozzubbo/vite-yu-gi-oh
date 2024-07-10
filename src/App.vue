<script>
//import axios
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CharactersList.vue';
import AppSearch from './components/AppSearch.vue';
//import state management store
import { store } from './store';


export default {
  name: "App",
  components: {
    AppHeader,
    CharactersList,
    AppSearch,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {
      let endPoint = store.apiUrl;
      store.loading = true;
      //Ricerca personalizzata per archetipi
      if(store.archetypeSelect){
        endPoint += `archetype=${store.archetypeSelect}`;
        console.log(endPoint);
      }
      axios.
        get(endPoint)
        .then(results => {
          console.log(results.data.data);
          store.charactersList = results.data.data;
          store.loading = false;
        })
        .catch(err => {
          console.log(err);
          store.loading=false;
          //svuoto array
          store.charactersList = [];
        })
    }
  },
  created() {
    this.getCharacters();
  }
}
</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api" />
  <main>
    <AppSearch @search="getCharacters"/>
    <CharactersList />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';

main {
  padding-top: 30px;
}
</style>
