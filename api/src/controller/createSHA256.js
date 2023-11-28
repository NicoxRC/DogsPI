const crypto = require('crypto');

module.exports = async (req, res) => {
  const { firma } = req.body;
  try {
    const encondedText = new TextEncoder().encode(firma);
    const hashBuffer = await crypto.subtle.digest('SHA-256', encondedText);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    res.status(201).json(hashHex);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
