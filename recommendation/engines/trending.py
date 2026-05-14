from datetime import datetime, timedelta
from db import interactions_col, listings_col

def get_trending_listings(n=15, location=None):
    since = datetime.utcnow() - timedelta(days=7)

    match_stage = {"createdAt": {"$gte": since}}
    if location:
        match_stage["location"] = {"$regex": location, "$options": "i"}

    pipeline = [
        {"$match": match_stage},
        {"$group": {"_id": "$listingId", "score": {"$sum": "$weight"}}},
        {"$sort": {"score": -1}},
        {"$limit": n},
    ]

    results = list(interactions_col.aggregate(pipeline))
    trending_ids = [str(r["_id"]) for r in results]

    if not trending_ids:
        # cold start — return most recently added listings
        newest = listings_col.find({}, {"_id": 1}).sort("_id", -1).limit(n)
        return [str(l["_id"]) for l in newest]

    return trending_ids