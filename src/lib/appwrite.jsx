// src/lib/appwrite.js
import { Client, Account, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("694ea75900264a8de0e4");

export const account = new Account(client);
export const databases = new Databases(client);

// Helper for your specific database and table (Collection)
export const DATABASE_ID = "694ea7b80026d5e9f678";
export const COLLECTION_ID = "members";

export { ID } from "appwrite";
