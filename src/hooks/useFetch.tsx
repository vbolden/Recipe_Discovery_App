import { useState, useEffect } from "react";

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // USEEFFECT STATEMENT
    useEffect(() => {
        // API FETCH, TRY/CATCH BLOCK
        async function fetchData() {
            try {
                setLoading(true);

                const response = await fetch(url);

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