import crypto from "crypto";
import { getLinkByShortCode, loadLinks } from "../models/shortner.modles.js";

export const getShortenedPage = ("/", async (req, res) => {
    try {
      // const file = await readFile("views/index.html", "utf-8");
      const links = await loadLinks();

      return res.render("index", { links, host: req.host });
    } catch (error) {
      console.log(error);
      return res.status(500).send("Internal Server Error...");
    }
  });

export const postUrlShortener = (loadLinks, saveLinks) => async (req, res) => {
  try {
    const { url, shortCode } = req.body;
    const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

    const links = await loadLinks();

    if (links[finalShortCode]) {
      return res
        .status(400)
        .send("Short code already exists. Please choose another.");
    }

    // links[finalShortCode] = url;
    // await saveLinks(links);

    await saveLinks({ url, shortCode });

    return res.redirect("/");
    res.status(200).json({ success: true, shortCode: finalShortCode });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

export const redirectToShortLink = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const links = await loadLinks();

    const link = await getLinkByShortCode(shortCode)

    // if (!links[shortCode]) return res.status(404).send("404 code not found");
    if (!link) return res.redirect("/404")

    return res.redirect(link.url);
    // return res.redirect(links)

  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
