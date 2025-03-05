// import path from "path";
// import { readFile, writeFile } from "fs/promises";

// const DATA_FILE = path.join("data", "links.json");



// export const loadLinks = async () => {
//   try {
//     const data = await readFile(DATA_FILE, "utf-8");
//     if (data.trim() === "") {
//       return {};
//     }
//     return JSON.parse(data);
//   } catch (error) {
//     if (error.code === "ENOENT") {
//       await writeFile(DATA_FILE, JSON.stringify({}), "utf-8");
//       return {};
//     } else if (error instanceof SyntaxError) {
//       console.error("Error parsing JSON:", error);
//       return {};
//     } else {
//       throw error;
//     }
//   }
// };

// export const saveLinks = async (links) => {
//   await writeFile(DATA_FILE, JSON.stringify(links));
// };




import { dbClinet } from '../config/db-client.js';

const db = dbClinet.db('URL_Project');
const shortenerCollection = db.collection("shorteners")


export const loadLinks = async () => {
  return shortenerCollection.find().toArray()
}


export const saveLinks = async (link) => {
  return shortenerCollection.insertOne(link);
}

export const getLinkByShortCode = async (shortcode) => {
  return shortenerCollection.find({shortcode: shortcode })
}