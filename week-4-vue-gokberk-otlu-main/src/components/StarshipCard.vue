<template>
    <!-- Starship cards for each starship data from fetched data -->
    <router-link
    tag="div"
    class="starship-card"
    v-if="starship"
    :to="'/starship/' + starship.url.split('starships/')[1]">
        <div class="starship-card-image">
            <img src="../assets/starship.jpg">
        </div>
        <div class="starship-card-detail">
            <h2>{{ starship.name }}</h2>
            <h3 class="starship-card-detail-header">Model</h3>
            <div>{{ starship.model }}</div>
            <h3 class="starship-card-detail-header">Hyperdrive Rating</h3>
            <div>{{ starship.hyperdrive_rating }}</div>
        </div>
    </router-link>
</template>

<script>
export default {
    props : ['starship']
}
</script>


<style scoped>
    .starship-card {
        background-color: var(--card-bg-color);
        margin-bottom: 5px;
        cursor: pointer;
        display: flex;
        border-radius: 10px;
        overflow: hidden;
    }

    .starship-card:hover {
        opacity: 0.8;
    }

    .starship-card:hover img {
        transform: scale(1.1);
    }

    .starship-card-image {
        width: 40%;
        overflow: hidden;
    }

    .starship-card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: transform .5s;
    }

    .starship-card-detail {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 20px;
    }

    .starship-card-detail-header {
        color: rgb(158, 158, 158);
    }
</style>