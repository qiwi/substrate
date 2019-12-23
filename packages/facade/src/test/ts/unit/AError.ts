import { AbstractError } from './index';

describe('AbstractError', () => {
  describe('constructor', () => {
    it('constructs by message', () => {
      const message = 'foo';
      const instance = new AbstractError(message);

      expect(instance.message).toBe(message);
    });
  });
});
