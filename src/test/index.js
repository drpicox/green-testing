import expect from "jest-matchers";
import jestMock from "jest-mock";

function test(m, cb) {
  cb();
}

export function parseAndRunTests(code, tests) {
  const template = `'use strict';return function(expect, jest, test) {${code};\n${tests}}`;

  let failure = null;
  try {
    // eslint-disable-next-line no-new-func
    const runTests = Function(template)();
    runTests(expect, jestMock, test);
  } catch (e) {
    failure = e;
  }
  return failure;
}
