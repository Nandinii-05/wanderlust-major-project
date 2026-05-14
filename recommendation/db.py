from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

client = MongoClient(os.getenv("MONGO_URI"))
db = client[os.getenv("MONGO_DB_NAME", "wanderlust")]

listings_col = db["listings"]        # mongoose lowercases + pluralizes → "listings"
interactions_col = db["interactions"]