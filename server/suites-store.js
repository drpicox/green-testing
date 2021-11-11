module.exports = {
  async list() {
    return [{ name: "primes" }, { name: "factorial" }];
  },

  async get(name) {
    switch (name) {
      case "factorial":
        return require("./data/factorial");
      case "primes":
        return require("./data/primes");
      default:
        throw new Error(`Unkown suite: ${name}`);
    }
  }
};
