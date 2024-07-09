<script>
export default {
    name: "SingleCharacters",
    props: ['info'],
}
</script>

<template>
    <div class="character text-center">
        <img class="img-fluid mb-3" :src="info.card_images[0].image_url" alt="info.name">
        <h4>{{ info.name }}</h4>
        <div>{{ info.archetype }}</div>
    </div>
</template>

<style lang="scss" scoped>
img {
    display: block;
    object-fit: cover;
    max-width: 100%;
}

h4 {
    color: white;
    font-size: 1em;
}

.character {
    background-color: #D48F38;
    padding-bottom: 10px;
}
</style>