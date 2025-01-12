// appwrite.js
import { Client, Storage } from 'appwrite';

// Initialize Appwrite client
const client = new Client();
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Change this to your Appwrite endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your project ID

// Initialize storage
const storage = new Storage(client);

export { storage };