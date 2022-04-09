import isURL from './isURL'

describe('isURL', () => {
  test('should return true when passing url string', () => {
    expect(isURL('https://jestjs.io/docs/expect')).toBeTruthy();
  });
  test('should return false when passing non-url string', () => {
    expect(isURL('hello-world')).toBeFalsy();
  });
})