class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {}; // { roomType: { neededSupplies: [], pricePerNight: number } }
        this.supplyStock = {}; // { supplyName: quantity }
    }

    restockSupplies(supplies) {
        let finalMessage = [];

        supplies.forEach(supply => {
            let [supplyName, supplyQuantity, supplyTotalPrice] = supply.split(' ');
            supplyQuantity = Number(supplyQuantity);
            supplyTotalPrice = Number(supplyTotalPrice);

            if (supplyTotalPrice <= this.initialBudget) {
                this.initialBudget -= supplyTotalPrice;

                if (this.supplyStock[supplyName]) {
                    this.supplyStock[supplyName] += supplyQuantity;
                } else {
                    this.supplyStock[supplyName] = supplyQuantity;
                }

                finalMessage.push(`Successfully stocked ${supplyQuantity} ${supplyName}`);
            } else {
                finalMessage.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`);
            }
        });

        return finalMessage.join("\n");
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (this.roomAvailability.hasOwnProperty(roomType)) {
            return `The ${roomType} is already available in our hotel, try something different.`;
        }

        this.roomAvailability[roomType] = {
            neededSupplies: neededSupplies.map(supply => {
                let [supplyName, supplyQuantity] = supply.split(' ');
                return { name: supplyName, quantity: Number(supplyQuantity) };
            }),
            pricePerNight: Number(pricePerNight)
        };

        return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`;
    }

    showAvailableRooms() {
        if (Object.keys(this.roomAvailability).length === 0) {
            return "Our rooms are not ready yet, please come back later...";
        }

        return Object.entries(this.roomAvailability)
            .map(([roomType, data]) => `${roomType} - $ ${data.pricePerNight}`)
            .join("\n");
    }

    bookRoom(roomType) {
        if (!this.roomAvailability.hasOwnProperty(roomType)) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        let { neededSupplies, pricePerNight } = this.roomAvailability[roomType];

        for (let supply of neededSupplies) {
            if (!this.supplyStock[supply.name] || this.supplyStock[supply.name] < supply.quantity) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }

        return `Your booking for ${roomType} has been confirmed! The price is $${pricePerNight} per night.`;
    }
}

// Test #1
// let hotel = new Hotel(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

// Output:
// Successfully stocked 100 Soap
// Successfully stocked 20 Towels
// Successfully stocked 50 Shampoo

// Test #2
// let hotel = new Hotel(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));

// Output:
// Successfully stocked 100 Soap
// Successfully stocked 20 Towels
// Successfully stocked 50 Shampoo
// Great idea! Now with the Deluxe Suite, we have 1 types of rooms available, any other ideas?
// Great idea! Now with the Standard Room, we have 2 types of rooms available, any other ideas?
// The Standard Room is already available in our hotel, try something different.


// Test #3
// let hotel = new Hotel(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.showAvailableRooms());

// Output: 
// Successfully stocked 100 Soap
// Successfully stocked 20 Towels
// Successfully stocked 50 Shampoo
// Great idea! Now with the Deluxe Suite, we have 1 types of rooms available, any other ideas?
// Great idea! Now with the Standard Room, we have 2 types of rooms available, any other ideas?
// Deluxe Suite - $ 200
// Standard Room - $ 100

// Test #4
let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));

// Output:
// Successfully stocked 100 Soap
// Successfully stocked 20 Towels
// Successfully stocked 50 Shampoo
// Great idea! Now with the Deluxe Suite, we have 1 types of rooms available, any other ideas?
// Great idea! Now with the Standard Room, we have 2 types of rooms available, any other ideas?
// Deluxe Suite - $ 200
// Standard Room - $ 100
// There is no Apartment available, would you like to book another room?
// Your booking for Deluxe Suite has been confirmed! The price is $200 per night.