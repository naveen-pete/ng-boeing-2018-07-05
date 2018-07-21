import { compute } from './compute';

// hold all the related tests
describe('compute', () => {
  // Pass 0 or positive number, check if the return value is an increment of input parameter
  it('should return an incremented value when 0 or a postive number is passed', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });

  // Pass a negative number, check if the return value is zero
  it('should return 0 when a negative number is passed', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
});
