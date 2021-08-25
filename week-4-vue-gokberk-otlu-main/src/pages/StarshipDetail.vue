<template>
    <div class="starship-detail-wrap">
        <h1 class="starship-detail-header">Starship Detail</h1>
        <div v-if="!error">
            <p v-if="isPending" class="is-pending">Loading...</p>
            <div v-else class="starship-detail-container">
                <div class="starship-detail-image">
                    <img src="../assets/starship.jpg" alt="">
                </div>
                <!-- Starship details are showed here -->
                <div class="starship-detail-info">
                    <ul class="starship-detail-info-list">
                        <li><span>Name : </span>{{ apiData.name }}</li>
                        <li><span>Model : </span>{{ apiData.model }}</li>
                        <li><span>Hyperdrive Rating : </span>{{ apiData.hyperdrive_rating }}</li>
                        <li><span>Passengers : </span>{{ apiData.passengers }}</li>
                        <li><span>Max Atmosphering Speed : </span>{{ apiData.max_atmosphering_speed }}</li>
                        <li><span>Manufacturer : </span>{{ apiData.manufacturer }}</li>
                        <li><span>Crew : </span>{{ apiData.crew }}</li>
                        <li><span>Cargo Capacity : </span>{{ apiData.cargo_capacity }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <p v-else>{{ error }}</p>
        <!-- Back button to go back to home -->
        <router-link class="back-button"
        to="/"
        tag="div">
            <i class="far fa-4x fa-arrow-alt-circle-left"></i>
        </router-link>
    </div>
</template>

<script>
import starshipCard from '../components/starshipCard.vue';
import { apiMixin } from '../apiMixin';
import '../styles/back-button.css'
    export default {
        components : {
            'starshipCard' : starshipCard
        },
        data() {
            return {
                url : 'https://swapi.dev/api/starships/' + this.$route.params.id // Set url with id parameter obtained by route
            }
        },
        mounted() {
            // Fetch the data with mounted hook
            this.fetchData();
        },
        // apiMixin provides 'apiData', 'pageNumber', 'isPending' and 'error' datas
        mixins : [apiMixin]
    }
</script>

<style scoped>
    /* css root variables taken from style.css */
    .starship-detail-wrap {
        color: var(--starship-card-color);
    }
    .starship-detail-container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 70%;
        height: 500px;
        max-height: 60vh;
        margin: 0 auto;
        border-radius: 15px;
        overflow: hidden;
        background-color: var(--card-bg-color);
    }

    .starship-detail-image {
        width: 300px;
        height: 200px;
        overflow: hidden;
    }

    .starship-detail-info-list li {
        margin: 7px 0;
        font-size: 1.2rem;
    }

    .starship-detail-info-list span {
        color: rgb(158, 158, 158);
    }

    .starship-detail-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 15px;
    }

    .starship-detail-header {
        text-align: center;
        margin: 15px 0;
    }
</style>
