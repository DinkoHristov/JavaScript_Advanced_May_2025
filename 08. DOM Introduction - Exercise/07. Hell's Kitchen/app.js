function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      class Worker {
         constructor(name, salary) {
            this.name = name;
            this.salary = salary;
         }
      }

      class Restaurant {
         constructor(name) {
            this.name = name;
            this.workers = [];
         }
      }
      let textInputElement = document.querySelector('textarea');
      let inputArray = JSON.parse(textInputElement.value);

      let bestRestaurantElement = document.getElementById('bestRestaurant').querySelector('p');
      bestRestaurantElement.textContent = '';

      let workersElement = document.getElementById('workers').querySelector('p');
      workersElement.textContent = '';

      let restaurants = [];
      inputArray.forEach(input => {
         let currentRestaurantInfo = input.split(' - ');
         let restaurantName = currentRestaurantInfo[0];
         let workers = currentRestaurantInfo[1].split(', ');

         if (!restaurants.some(r => r.name === restaurantName)) {
            let newRestaurant = new Restaurant(restaurantName);

            workers.forEach(worker => {
               let workerInfo = worker.split(' ');
               let workerName = workerInfo[0];
               let salary = Number(workerInfo[1]);

               let newWorker = new Worker(workerName, salary);
               newRestaurant.workers.push(newWorker);
            });

            restaurants.push(newRestaurant);
         } else {
            let existingRestaurant = restaurants.find(r => r.name === restaurantName);

            if (existingRestaurant !== null) {
               workers.forEach(worker => {
                  let workerInfo = worker.split(' ');
                  let workerName = workerInfo[0];
                  let salary = Number(workerInfo[1]);
   
                  let newWorker = new Worker(workerName, salary);
                  existingRestaurant.workers.push(newWorker);
               });
            }
         }
      });

      let maxAverageSalary = Number.MIN_SAFE_INTEGER;
      let bestRestaurant = null;
      restaurants.forEach(restaurant => {
         let allWorkers = restaurant.workers;
         let averageSalary = allWorkers.map(x => x.salary).reduce( (acc, el) => acc += el) / allWorkers.length;

         if (averageSalary > maxAverageSalary) {
            maxAverageSalary = averageSalary;
            bestRestaurant = restaurant;
         }
      });

      let bestSalary = Math.max(...bestRestaurant.workers.map(x => x.salary));
      bestRestaurantElement.textContent = `Name: ${bestRestaurant.name} Average Salary: ${maxAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

      workersElement.textContent = bestRestaurant.workers.sort( (a, b) => b.salary - a.salary).map(x => `Name: ${x.name} With Salary: ${x.salary}`).join(' ');

      textInputElement.value = '';
   }
}