from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from engines.content_based import get_similar_listings
from engines.trending import get_trending_listings
from engines.preference import filter_by_preferences
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("MERN_BACKEND_URL", "*")],
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/recommendations")
def recommendations(
    listing_id: str = Query(None),
    location: str = Query(None),
    country: str = Query(None),
    max_price: float = Query(None),
    limit: int = Query(20),
):
    similar = get_similar_listings(listing_id) if listing_id else []
    trending = get_trending_listings(location=location)

    seen, merged = set(), []
    for lid in similar + trending:
        if lid not in seen:
            seen.add(lid)
            merged.append(lid)

    preferences = {"location": location, "country": country, "max_price": max_price}
    if any(v for v in preferences.values()):
        merged = filter_by_preferences(merged, preferences)

    return {"listing_ids": merged[:limit]}