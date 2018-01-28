import * as Editing from './editing';

describe("#editing", function() {
  describe("#identifyMeal", function() {
    it("should add an id property to an object.", function() {
      let obj = {};
      let result = Editing.identifyMeal(obj, 1);

      expect(result).toHaveProperty("id", 1);
    });

    it("should return a new object.", function() {
      let obj = {};
      let result = Editing.identifyMeal(obj, 1);

      expect(result).not.toBe(obj);
    });

    it("should not overwrite an existing id.", function() {
      let obj = {id: 2};
      let result = Editing.identifyMeal(obj, 1);

      expect(result.id).toEqual(2);
    });
  })

  describe("#identifyMealsList", function() {
    it("should add an id property to each meal in a list based on it's index.", function() {
      const start = [
        {obj: 1},
        {obj: 2},
        {obj: 3},
        {obj: 4},
        {obj: 5},
        {obj: 6},
      ];
      const expected = [
        {obj: 1, id: 0},
        {obj: 2, id: 1},
        {obj: 3, id: 2},
        {obj: 4, id: 3},
        {obj: 5, id: 4},
        {obj: 6, id: 5},
      ];
      const results = Editing.identifyMealsList(start);

      expect(results).toEqual(expected);
    });
  });
});
