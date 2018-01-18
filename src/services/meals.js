const MealService = {
  async get() {
    console.log(fetch);
    return await fetch("http://localhost:3090/meals", {
      method: "GET",
      headers: new Headers({
        'Content-Type': 'text/plain'
      })})
      .then(JSON.parse);

  }
};


export default MealService
