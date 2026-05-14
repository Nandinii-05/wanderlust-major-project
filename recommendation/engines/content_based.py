import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from db import listings_col

def build_feature_string(listing):
    price = listing.get("price", 0)
    tier = "budget" if price < 50 else "mid" if price < 150 else "luxury"
    parts = [
        listing.get("location", ""),
        listing.get("country", ""),
        listing.get("description", ""),
        tier,
    ]
    return " ".join(p for p in parts if p)

def get_similar_listings(listing_id, n=15):
    listings = list(listings_col.find(
        {},
        {"_id": 1, "location": 1, "country": 1, "description": 1, "price": 1}
    ))
    if not listings:
        return []

    id_to_idx = {str(l["_id"]): i for i, l in enumerate(listings)}
    if listing_id not in id_to_idx:
        return []

    features = [build_feature_string(l) for l in listings]
    tfidf = TfidfVectorizer(stop_words="english")
    matrix = tfidf.fit_transform(features)

    idx = id_to_idx[listing_id]
    scores = cosine_similarity(matrix[idx], matrix).flatten()
    scores[idx] = 0  # exclude self

    top_indices = np.argsort(scores)[::-1][:n]
    return [str(listings[i]["_id"]) for i in top_indices if scores[i] > 0]