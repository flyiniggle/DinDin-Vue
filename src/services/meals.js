const MealService = {
  async get() {
    return await fetch("http://localhost:3090/meals", {
      method: "GET",
      headers: new Headers({
        'Content-Type': 'text/plain'
      })})
      .then((response) => response.json())
      .catch(err => console.log(`Error: ${err}`));

  }
};


export default MealService
