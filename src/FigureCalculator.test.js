const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A FigureCalculator', () => {
  it('should contain calculateRectangleParimeter, calculateRectangleArea, calculateTriangleParimeter, and calculateTriangleArea', () => {
    const figureCalculator = new FigureCalculator();

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  describe('A calculateRectanglePerimeter Function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
    });

    it('should throw error when given non-number parameter', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectanglePerimeter('1', '2')).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(null, false)).toThrowError();
    });

    it('should return correct value based on recatngle perimeter formula', () => {
      // Arrange
      const length = 20;
      const width = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateRectanglePerimeter(length, width);

      // Assert
      expect(result).toEqual(60);
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, 30);
    });
  });

  describe('A calculateRectangleArea Function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
    });

    it('should throw error when given non-number parameter', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea('1', '2')).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(null, false)).toThrowError();
    });

    it('should return correct value based on rectangle area formula', () => {
      // Arrange
      const length = 20;
      const width = 10;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateRectangleArea(length, width);

      expect(result).toEqual(200);
      expect(spyMultiply).toHaveBeenCalledWith(length, width);
    });
  });

  describe('A calculateTrianglePerimeter', () => {
    it('should throw error when not given 3 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-number parameter', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter('1', '2', '3')).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter({}, null, true)).toThrowError();
    });

    it('should return correct value based on triangle perimeter formula', () => {
      // Arrange
      const sideA = 5;
      const sideB = 7;
      const base = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base);

      // Assert
      expect(result).toEqual(22); // (sideA + sideB + base)
      expect(spyAdd).toBeCalledWith(sideA, (sideB + base));
    });

    describe('A calculateTriangleArea function', () => {
      it('should throw error when not given 2 parameter', () => {
        const figureCalculator = new FigureCalculator({});

        expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
        expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
        expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError();
      });

      it('should throw error when given non-number parameter', () => {
        const figureCalculator = new FigureCalculator({});

        expect(() => figureCalculator.calculateTriangleArea('1', '2')).toThrowError();
        expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrowError();
        expect(() => figureCalculator.calculateTriangleArea(null, false)).toThrowError();
      });

      it('should return correct value based on triangle area formula', () => {
        // Arrange
        const height = 10;
        const base = 6;
        const spyMultiply = jest.spyOn(MathBasic, 'multiply');
        const spyDivide = jest.spyOn(MathBasic, 'divide');
        const figureCalculator = new FigureCalculator(MathBasic);

        // Action
        const result = figureCalculator.calculateTriangleArea(height, base);

        // Assert
        expect(result).toEqual(30);
        expect(spyMultiply).toBeCalledWith(height, base);
        expect(spyDivide).toBeCalledWith(60, 2);
      });
    });
  });
});
