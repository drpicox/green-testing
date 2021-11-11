module.exports = function wrap(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (e) {
      console.error(e);
      res.status(500);
      res.json({ error: e.message });
    }
  };
};
