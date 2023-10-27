const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('Fungsi add haru menerima dua parameter');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi hanya menerima parameter number');
    }

    return a + b;
  },

  substract: (...args) => {
    if (args.length !== 2) {
      throw new Error('Fungsi add haru menerima dua parameter');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi hanya menerima parameter number');
    }

    return a - b;
  },

  multiply: (...args) => {
    if (args.length !== 2) {
      throw new Error('Fungsi add haru menerima dua parameter');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi hanya menerima parameter number');
    }

    return a * b;
  },

  divide: (...args) => {
    if (args.length !== 2) {
      throw new Error('Fungsi add haru menerima dua parameter');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi hanya menerima parameter number');
    }

    return a / b;
  },
};

module.exports = MathBasic;
