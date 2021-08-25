<template>
    <div class="pagination">
        <button @click="previousPage" class="pagination-button">Previous</button>
        <span class="pagination-page-number">{{ $store.state.page }} / {{ pageNumber }}</span>
        <button @click="nextPage" class="pagination-button">Next</button>
    </div>
</template>

<script>
export default {
    methods : {
        nextPage() {
           // Method to change page state in store.js
           if(this.$store.state.page < this.pageNumber) {
            this.$store.commit('setPage', 1);
           }
        },
        previousPage() {
           // Method to change page state in store.js
           if(this.$store.state.page > 1) {
            this.$store.commit('setPage', -1);
           }
        }
    },
    props : ['pageNumber']
}
</script>

<style scoped>
    .pagination {
        margin-bottom: 20px;
    }

    .pagination-button {
        width: 100px;
        height: 35px;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
    }

    .pagination-page-number {
        color: red;
        font-weight: bold;
        margin: 0 3px;
    }
</style>