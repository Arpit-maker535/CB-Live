import Link from "../models/link.js";

export const createShortLink = async (req, res) => {
  const { originalUrl } = req.body;
  const link = new Link({ originalUrl });
  await link.save();
  res.status(201).send(link);
};

export const getOriginalUrl = async (req, res) => {
  const { shortUrl } = req.params;
  const link = await Link.findOne({ shortUrl });
  if (link) {
    link.clicks += 1;
    await link.save();
    res.redirect(link.originalUrl);
  } else {
    res.status(404).send("Link not Found");
  }
};

export const getAnalytics = async (req, res) => {
  const { shortUrl } = req.params;
  const link = await Link.findOne({ shortUrl });

  if (link) {
    res.status(200).send({
      originalUrl: link.originalUrl,
      clicks: link.clicks,
    });
  } else {
    res.status(404).send("Link not found");
  }
};
