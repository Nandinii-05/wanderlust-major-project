import { useRecommendations } from "../hooks/useRecommendations";

export default function RecommendedListings({ listingId, location, title = "Recommended for you" }) {
    const { recommendations, loading } = useRecommendations({ listingId, location });

    if (loading) return (
        <p style={{ color: "var(--color-text-secondary)", fontSize: 14 }}>
            Loading recommendations...
        </p>
    );

    if (!recommendations.length) return null;

    return (
        <section style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: 18, fontWeight: 500, marginBottom: "1rem" }}>{title}</h2>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "1rem"
            }}>
                {recommendations.map((listing) => (
                    
                        key={listing._id}
                        href={`/listings/${listing._id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <div style={{
                            border: "1px solid #e0e0e0",
                            borderRadius: 12,
                            overflow: "hidden",
                        }}>
                            <img
                                src={listing.image?.url || "/placeholder.jpg"}
                                alt={listing.title}
                                style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                            />
                            <div style={{ padding: "0.75rem 1rem" }}>
                                <div style={{ fontWeight: 500, fontSize: 14 }}>{listing.title}</div>
                                <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>
                                    {listing.location}, {listing.country}
                                </div>
                                <div style={{ fontSize: 13, marginTop: 6 }}>
                                    <strong>₹{listing.price}</strong>
                                    <span style={{ color: "#888" }}> / night</span>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}