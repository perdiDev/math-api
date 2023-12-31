const MathBasic = require('./MathBasic');

describe('A mathbasic', () => {
  it('Should contains add, substract, multiply, divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('substract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.substract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });

  describe('A add function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrowError();
      expect(() => MathBasic.add(1)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
    });

    it('should return error when given non-number parameter', () => {
      expect(() => MathBasic.add('1', '2')).toThrowError();
      expect(() => MathBasic.add(true, {})).toThrowError();
      expect(() => MathBasic.add(null, false)).toThrowError();
    });

    it('should return a + b when given two number parameters', () => {
      expect(MathBasic.add(2, 2)).toEqual(4);
      expect(MathBasic.add(203, 5)).toEqual(208);
      expect(MathBasic.add(3, 7)).toEqual(10);
    });
  });

  describe('A substract function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.substract()).toThrowError();
      expect(() => MathBasic.substract(1)).toThrowError();
      expect(() => MathBasic.substract(1, 2, 3)).toThrowError();
      expect(() => MathBasic.substract(1, 2, 3, 4)).toThrowError();
    });

    it('should return error when given non-number parametera', () => {
      expect(() => MathBasic.substract('1', '2')).toThrowError();
      expect(() => MathBasic.substract(true, {})).toThrowError();
      expect(() => MathBasic.substract(null, false)).toThrowError();
    });

    it('should return a - b when given two number parameters', () => {
      expect(MathBasic.substract(2, 2)).toEqual(0);
      expect(MathBasic.substract(203, 5)).toEqual(198);
      expect(MathBasic.substract(3, 7)).toEqual(-4);
    });
  });

  describe('A multiply function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.multiply()).toThrowError();
      expect(() => MathBasic.multiply(1)).toThrowError();
      expect(() => MathBasic.multiply(1, 2, 3)).toThrowError();
      expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrowError();
    });

    it('should return error when given non-number parametera', () => {
      expect(() => MathBasic.multiply('1', '2')).toThrowError();
      expect(() => MathBasic.multiply(true, {})).toThrowError();
      expect(() => MathBasic.multiply(null, false)).toThrowError();
    });

    it('should return a * b when given two number parameters', () => {
      expect(MathBasic.multiply(2, 2)).toEqual(4);
      expect(MathBasic.multiply(10, 5)).toEqual(50);
      expect(MathBasic.multiply(3, 7)).toEqual(21);
    });
  });

  describe('A divide function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.divide()).toThrowError();
      expect(() => MathBasic.divide(1)).toThrowError();
      expect(() => MathBasic.divide(1, 2, 3)).toThrowError();
      expect(() => MathBasic.divide(1, 2, 3, 4)).toThrowError();
    });

    it('should return error when given non-number parametera', () => {
      expect(() => MathBasic.divide('1', '2')).toThrowError();
      expect(() => MathBasic.divide(true, {})).toThrowError();
      expect(() => MathBasic.divide(null, false)).toThrowError();
    });

    it('should return a * b when given two number parameters', () => {
      expect(MathBasic.divide(2, 2)).toEqual(1);
      expect(MathBasic.divide(10, 5)).toEqual(2);
      expect(MathBasic.divide(81, 9)).toEqual(9);
    });
  });
});
