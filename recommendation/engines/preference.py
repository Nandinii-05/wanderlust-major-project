from db import listings_col
from bson import ObjectId

def filter_by_preferences(listing_ids, preferences):
    query = {"_id": {"$in": [ObjectId(lid) for lid in listing_ids]}}

    if preferences.get("location"):
        query["location"] = {"$regex": preferences["location"], "$options": "i"}
    if preferences.get("country"):
        query["country"] = {"$regex": preferences["country"], "$options": "i"}
    if preferences.get("max_price"):
        query["price"] = {"$lte": float(preferences["max_price"])}

    results = listings_col.find(query, {"_id": 1})
    matched_ids = {str(r["_id"]) for r in results}

    # preserve original ranking order
    return [lid for lid in listing_ids if lid in matched_ids]