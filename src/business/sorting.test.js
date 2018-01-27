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

    it("should return 0", function() {
      const a = {};
      const b = {};
      const result = Sorting.returnMoreUsed(a, b);

      expect(result).toEqual(0);
    });
  });

  describe("#sortMostUsed", function() {
    it("should sort by usedCount", function() {
      const start = [
        { usedCount: 12 },
        { usedCount: 3 },
        { usedCount: 100 },
        { usedCount: 45 }
      ]
      const expected = [
        { usedCount: 100 },
        { usedCount: 45 },
        { usedCount: 12 },
        { usedCount: 3 }
      ]
      const results = Sorting.sortMostUsed(start);

      expect(results).toEqual(expected);
    });
  });

  describe("#compareLastUsed", function() {
    it("should return less than 0", function() {
      const a = { lastUsed: 100 };
      const b = { lastUsed: 50 };
      const result = Sorting.compareLastUsed(a, b);

      expect(result).toBeLessThan(0);
    });

    it("should return greater than 0", function() {
      const a = { lastUsed: 50 };
      const b = { lastUsed: 100 };
      const result = Sorting.compareLastUsed(a, b);

      expect(result).toBeGreaterThan(0);
    });

    it("should return 0", function() {
      const a = { lastUsed: 0 };
      const b = { lastUsed: 0 };
      const result = Sorting.compareLastUsed(a, b);

      expect(result).toEqual(0);
    });

    it("should return 0", function() {
      const a = {};
      const b = {};
      const result = Sorting.compareLastUsed(a, b);

      expect(result).toEqual(0);
    });
  })
});
