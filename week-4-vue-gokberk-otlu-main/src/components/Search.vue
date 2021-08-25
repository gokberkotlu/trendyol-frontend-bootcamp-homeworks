<template>
    <div class="search-box">
        <input type="text" v-model="value" placeholder="Search...">
    </div>
</template>

<script>
export default {
    computed : {
        // Two-way data binding process of search state in store.js
        value : {
            get() {
                return this.$store.getters.getSearch;
            },
            set(val) {
                // Input value updates the url for searching
                this.$store.dispatch('filterUrl', val);
            }
        }
    }
}
</script>

<style scoped>
    .search-box {
        width: 500px;
        margin: 30px auto;
    }

    .search-box input {
        width: inherit;
        height: 60px;
        padding: 8px 10px;
        font-size: 25px;
    }
</style>
