<template>
  <div class="home-container">
    <app-search @newApiData="apiData = $event"></app-search>
    <h1 class="starships-header" v-if="apiData.count !== 0">Starships</h1>
    <app-pagination :pageNumber="pageNumber" v-if="apiData.count !== 0"></app-pagination>
    <!-- List of starships -->
    <div v-if="!error" class="starship-list">
      <!-- Loading message available if fetching api data is continues -->
      <p v-if="isPending" class="is-pending">Loading...</p>
      <!-- Starships are listed here with loop -->
      <starship-card
      class="starship-card"
        v-else
        v-for="(starship, index) in apiData.results"
        :key="'starship-' + index"
        :starship="starship">
      </starship-card>
    </div>
    <!-- If there is a error or no starships then show a message here -->
    <p v-if="error || apiData.count === 0" class="no-starships">{{ noListedData }}</p>
  </div>
</template>

<script>
import starshipCard from '../components/starshipCard.vue';
import Search from '../components/Search.vue';
import Pagination from '../components/Pagination.vue';
import { apiMixin } from '../apiMixin';
export default {
  components : {
      'starshipCard' : starshipCard,
      'appSearch' : Search,
      'appPagination' : Pagination
  },
  data() {
    return {
      url : this.$store.getters.getFilteredUrl,
      noListedData : 'No Starships Available for Search'
    }
  },
  mounted() {
      // Fetch the data with mounted hook
      this.fetchData();
  },
  watch : {
    // Watch filteredUrl state on store.js. If it changes, update url and fetch new datas with it
    '$store.state.filteredUrl' : function() {
      this.url = this.$store.getters.getFilteredUrl;
      this.fetchData();
    }
  },
  // apiMixin provides 'apiData', 'pageNumber', 'isPending' and 'error' datas
  mixins : [apiMixin]
}
</script>

<style>
  /* css root variables taken from style.css */
  .home-container {
    width: 85%;
    margin: 0 auto;
    color: var(--starship-card-color);
  }
  .starship-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--starship-card-gap);
    margin-bottom: 30px;
  }
  
  .starship-card {
    width: calc(50% - var(--starship-card-gap) * 0.5);
    height: 200px;
  }

  .starships-header {
    margin-bottom: 20px;
    text-align: center;
    font-size: 3rem;
  }

  .no-starships {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
  }
</style>