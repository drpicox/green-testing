module.exports = function getSymbolParam(req, res, paramName) {
  const paramValue = req.params[paramName];
  if (!paramValue || !/^[a-zA-Z_]+[a-zA-Z0-9_]*$/.test(paramValue)) {
    throw new Error(`Illegal param "${paramName}"`);
  }
  return paramValue;
};
