import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";

const UseFetchExample = ({url}) => {
    const response = useFetch(url);
    return (
        <div>
            {response.data ? response.data.results.id : ''}
        </div>
    );
}
 
export default UseFetchExample;