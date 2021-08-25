import { memo } from "react";
import useFetch from "../hooks/useFetch";

// Episode Names for Each Character on CharDetails
const Episodes = ({episodeURL}) => {
    const fetchData = useFetch(episodeURL).data;
    return (
        <>
            { fetchData && (<span>({fetchData.name})</span>) }
        </>
    );
}

export default memo(Episodes);