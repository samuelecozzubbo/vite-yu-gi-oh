<script>
export default {
    name: 'AppHeader',
    props: {
        message: String,
    }
}
</script>

<template>
    <header>
        <div class="container p-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/1200px-Yu-Gi-Oh%21_%28Logo%29.jpg"
                alt="logo">
            <h1>{{ message }}</h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: white;
}

img {
    max-width: 150px;
    float: left;
}
</style>