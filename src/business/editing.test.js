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

  describe("#unIdentifyMeal", function() {
    it("should remove an id property from an object.", function() {
      let obj = {id: 1};
      let result = Editing.unIdentifyMeal(obj);

      expect(result).not.toHaveProperty("id");
    });

    it("should return a new object.", function() {
      let obj = {id: 1};
      let result = Editing.unIdentifyMeal(obj);

      expect(result).not.toBe(obj);
    });

    it("should not do anything if the object has no id.", function() {
      let obj = {};
      let result = Editing.unIdentifyMeal(obj);

      expect(result).not.toHaveProperty("id");
    });
  })

  describe("#unIdentifyMealsList", function() {
    it("should remove an id property from each meal in a list.", function() {
      const expected = [
        {obj: 1},
        {obj: 2},
        {obj: 3},
        {obj: 4},
        {obj: 5},
        {obj: 6}
      ];
      const start = [
        {obj: 1, id: 0},
        {obj: 2, id: 1},
        {obj: 3, id: 2},
        {obj: 4, id: 3},
        {obj: 5, id: 4},
        {obj: 6, id: 5}
      ];
      const results = Editing.unIdentifyMealsList(start);

      expect(results).toEqual(expected);
    });
  });

  describe("#mealMatchesId", function() {
    it("should return true when the meal id matches the given id.", function() {
      const meal = {id: 1};

      expect(Editing.mealMatchesId(1, meal)).toBeTruthy();
    });

    it("should return false when the meal id doesn't match the given id.", function() {
      const meal = {id: 5};

      expect(Editing.mealMatchesId(1, meal)).toBeFalsy();
    })
  });
});
