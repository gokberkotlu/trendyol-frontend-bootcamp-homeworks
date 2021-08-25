import axios from 'axios';
export const apiMixin = {
    data() {
        return {
            apiData : {},
            pageNumber : 1,
            isPending : true,
            error: null
        }
    },
    methods : {
        // Fetch data from api and set 'pageNumber', 'isPending' and 'error' variables
        fetchData() {
            const abortCont = new AbortController();
            this.isPending = true;
            this.error = null;
            this.apiData = {};
            axios.get(this.url, { signal: abortCont.signal })
            .then(response => {
                this.apiData = response.data;
                this.pageNumber = Math.ceil(response.data.count / 10);
                this.isPending = false;
            })
            .catch(() => {
                this.error = "Could not fetch the data!"
                this.isPending = false;
            });
            return () => abortCont.abort();
        }
    }
}