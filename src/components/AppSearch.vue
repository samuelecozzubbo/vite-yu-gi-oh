<script>
//importazione store per v-model
import { store } from '../store.js';

export default {
    name: 'AppSearch',
    data(){
        return{
        store,
        }
    },
}
</script>

<template>
<div class="container">
    <select name="Archetype" v-model="store.archetypeSelect" @change="$emit('search')">
        <option value="">All cards</option>
        <option v-for="archetype in store.archetypes" :key="archetype" :value="archetype.archetype_name">
            {{ archetype.archetype_name }}
        </option>

    </select>
</div>
</template>

<style lang="scss" scoped>
</style>