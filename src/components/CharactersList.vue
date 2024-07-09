<script>
import SingleCharacters from './SingleCharacters.vue';
import AppLoader from './AppLoader.vue';

//import state management store
import { store } from '../store';

export default {
  name: "CharactersList",
  components: {
    SingleCharacters,
    AppLoader,
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>

</template>

<style lang="scss" scoped></style>