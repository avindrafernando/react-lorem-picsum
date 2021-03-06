// this adds jest-dom's custom assertions
import "@testing-library/jest-dom/extend-expect";

// https://github.com/testing-library/react-testing-library/issues/281#issuecomment-480349256
// this is just a little hack to silence a warning that we'll get until react
// fixes this: https://github.com/facebook/react/pull/14853
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
