import * as Sorting from './sorting';

describe("#business/sorting", function() {
  describe("#returnMoreUsed", function() {
    it("should return less than 0", function() {
      const a = { usedCount: 1 };
      const b = { usedCount: 0 };
      const result = Sorting.returnMoreUsed(a, b);

      expect(result).toBeLessThan(0);
    });

    it("should return greater than 0", function() {
      const a = { usedCount: 0 };
      const b = { usedCount: 1 };
      const result = Sorting.returnMoreUsed(a, b);

      expect(result).toBeGreaterThan(0);
    });

    it("should return 0", function() {
      const a = { usedCount: 0 };
      const b = { usedCount: 0 };
      const result = Sorting.returnMoreUsed(a, b);

      expect(result).toEqual(0);
    });

    it("should return greater than 0", function() {
      const a = {};
      const b = {};
      const result = Sorting.returnMoreUsed(a, b);

      expect(result).toEqual(0);
    });
  });
});
