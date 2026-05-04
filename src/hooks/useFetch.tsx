import { useState, useEffect } from "react";

function useFetch<T>(url: string | null) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // USEEFFECT STATEMENT
    useEffect(() => {
        if(!url) return;
        // STORED URL IN VARIABLE AFTER NULL CHECK
        const fetchUrl = url;

        // API FETCH, TRY/CATCH BLOCK
        async function fetchData() {
            try {
                setLoading(true);

                const response = await fetch(fetchUrl);

                if (!response.ok) {
                    throw new Error("Something went wrong...");
                }

                const result = await response.json();

                setData(result)
            } catch (error) {
                setError(error instanceof Error ? error.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);
    return { data, loading, error }
}

export default useFetch;