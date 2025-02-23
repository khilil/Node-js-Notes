import { Router } from "express";
import { postUrlShortener, getShortenedPage, redirectToShortLink } from "../controllers/postShortener.controller.js";
import { saveLinks } from "../models/shortner.modles.js";
import { loadLinks } from "../models/shortner.modles.js";

const router = Router();


router.get("/", getShortenedPage)

router.post("/", postUrlShortener(loadLinks, saveLinks))

router.get("/:shortCode", redirectToShortLink)

// export default router;

export const ShortenedRouter = router;