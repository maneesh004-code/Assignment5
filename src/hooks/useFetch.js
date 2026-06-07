// src/hooks/useFetch.js
import { useState, useEffect, useCallback } from "react";

/**
 * Re‑usable data‑fetching hook.
 *
 * @param {string} url - API endpoint.
 * @param {object} [options] - Optional fetch options.
 * @returns {{ data: any, loading: boolean, error: string|null, refetch: Function }}
 */
export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} – ${response.statusText}`);
      }
      const json = await response.json();
      setData(json);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(options)]); // stringify for stable dependency

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, error, refetch };
};
