function calorieObject(input) {
    class Food {
        constructor(name, calories) {
            this.name = name;
            this.calories = calories;
        }
    }

    let foods = [];
    for (let i = 0; i < input.length; i += 2) {
        let foodName = '';
        let foodCalories = 0;

        foodName = input[i];
        foodCalories = Number(input[i + 1]);

        if (foods.some(x => x.Food === foodName)) {
            let foundFood = foods.find(x => x.Food === foodName);

            foundFood[foodName] += foodCalories;
        } else {
            let newFood = new Food(foodName, foodCalories);
            foods.push(newFood);
        }
    }

    let result = foods.map(x => `${x.name}: ${x.calories}`).join(', ');

    console.log(`{ ${result} }`);
}