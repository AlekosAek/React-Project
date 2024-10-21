/* import { useState, useEffect } from "react";

// Generic type T allows flexibility in the data type fetched
export default function useFetch<T = any>(url: string) {
  const [data, setData] = useState<T | null>(null); // data can be of type T or null
  const [error, setError] = useState<Error | null>(null); // error will be an Error or null
  const [loading, setLoading] = useState<boolean>(true); // loading is a boolean

  useEffect(() => {
    async function init() {
      try {
        console.log('Fetching data from:', url);
        const response = await fetch(url); // Use the provided URL
        if (response.ok) {
          const json = await response.json();
          setData(json as T); // Cast fetched data to the expected type T
        } else {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
      } catch (e) {
        setError(e as Error); // Cast error to Error type
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]); // Re-run effect if URL changes

  return { data, error, loading };
}

 */