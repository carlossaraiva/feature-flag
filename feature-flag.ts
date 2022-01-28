export default function featureFlag(req, res) {
  res.statusCode = 200;
  res.json({ REBRADING: process.env.REBRADING });
}
