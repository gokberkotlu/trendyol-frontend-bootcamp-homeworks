//Custom Hook to Fetch Data
import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal }) // This associates the signal and controller with the fetch request
        .then(res => {
            if(!res.ok) {
                throw Error('COULD NOT FETCH THE DATA FOR THAT RESOURCE!');
            }
            return res.json();
        })
        .then(data => {
            setdata(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            // when catch error, there is still updating state. So system get error anyway inspite of abort. So;
            if(err.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                setIsPending(false);
                setError(err.message);
            }
        });
        return () => abortCont.abort(); // aborts what ever fetched with associated with { signal: abortCont.signal }
    }, [url]);
    return { data, isPending, error }
}

export default useFetch;