import { useEffect, useState } from "react";

export function useRecommendations({ listingId, location, country, maxPrice } = {}) {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams();
        if (listingId) params.set("listing_id", listingId);
        if (location) params.set("location", location);
        if (country) params.set("country", country);
        if (maxPrice) params.set("max_price", maxPrice);

        setLoading(true);
        fetch(`/api/recommendations?${params}`)
            .then((r) => r.json())
            .then((data) => setRecommendations(data.recommendations ?? []))
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false));
    }, [listingId, location, country, maxPrice]);

    return { recommendations, loading, error };
}