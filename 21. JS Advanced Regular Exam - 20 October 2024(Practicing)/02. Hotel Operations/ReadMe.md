
**02. Hotel Operations**

class Hotel {

`    `//TODO...

}

Write a class **Hotel**, which implements the following functionality:

**Functionality**

**Constructor**

The Hotel class should have **3** properties:

- **initialBudget –** number (for running hotel operations)
- <a name="_hlk177376365"></a>**roomAvailability –** object (to track available rooms and amenities)
- **supplyStock –** object (to track the quantity of hotel supplies like cleaning materials or toiletries)

**At the initialization of the Hotel class,** the constructor accepts only the **initialBudget**! The rest of the properties must be empty or initialized accordingly.

**Hint:** You can add more properties to help you finish the task.

**restockSupplies(supplies)** -** This method adds supplies to the stock (**supplyStock**). The method accepts **1 argument (an array of strings)** and **returns an appropriate message** (all actions joined by a new line) after trying to restock each of the supplies**:**

- Every element in this array is information about a particular supply in the following format:

` `**"{supplyName} {supplyQuantity} {supplyTotalPrice}"** 

- They are separated by a single space. 

  **Example: ["Soap 100 50", "Towels 20 100", "Shampoo 50 75", ...]** 

- If the current supply's total price (**supplyTotalPrice**) is within the available budget (**initialBudget**), the supply is added to the **supplyStock** with its name (key) and quantity (value). The price of the supply is **deducted** from the hotel **budget**. If the supply already exists in **supplyStock**, just add the new quantity to the old one.
- If the supply was added successfully, add the following to the final message to be returned:

  **"Successfully stocked {supplyQuantity} {supplyName}"**

- If the supply could not be added due to budget constraints, add the following to the final message to be returned:

**"There was not enough money to restock {supplyQuantity} {supplyName}"** 

**addRoomType(roomType, neededSupplies, pricePerNight)** –** This method adds room types to the **roomAvailability**. The method accepts **3 arguments (string, array of strings and number):**

- Each element in **neededSupplies** is in the format:

  **"{supplyName} {supplyQuantity}"**

  They are separated by a single space.

- If the room type is **not** already available, add it to the **roomAvailability** object with its **neededSupplies** and **pricePerNight**.
- If the room type already exists, **return**:

  **"The {roomType} is already available in our hotel, try something different."**

- Else, **return**:

  **"Great idea! Now with the {roomType}, we have {number of room types} types of rooms available, any other ideas?"**

**showAvailableRooms()** - This method simply returns all room types from **roomAvailability** separated by a new line in the format:

**{roomType} - $ {pricePerNight}**

**{roomType} - $ {pricePerNight}**

**{roomType} - $ {pricePerNight}**

**…**

- If no room types are available, **return** the message:

  **"Our rooms are not ready yet, please come back later..."**

**bookRoom(roomType)** – This method accepts **1 argument (string).**

- This method checks if the given room type is available in **roomAvailability**:
  - If the room type does **not** exist, **return**:

**"There is no {roomType} available, would you like to book another room?"**

- If the room type exists, the method checks whether the required supplies are available in **supplyStock**. If not, **return**:

  **"We are currently unable to accommodate your request for {roomType}, sorry for the inconvenience."**

- If the room type exists and all necessary supplies are available, you don’t need to change the quantity of the supplies, just **return**:

**"Your booking for {roomType} has been confirmed! The price is ${pricePerNight} per night."**

**Example**

|**Input 1**|
| :-: |
|<p>let hotel = new Hotel(500);</p><p></p><p>console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));</p>|

|**Output 1**|
| :-: |
|<p>Successfully stocked 100 Soap</p><p>Successfully stocked 20 Towels</p><p>Successfully stocked 50 Shampoo</p>|

|**Input 2**|
| :-: |
|<p>let hotel = new Hotel(500);</p><p></p><p>console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));</p><p></p><p>console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));</p><p>console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));</p><p>console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));</p>|

|**Output 2**|
| :-: |
|<p>Successfully stocked 100 Soap</p><p>Successfully stocked 20 Towels</p><p>Successfully stocked 50 Shampoo</p><p>Great idea! Now with the Deluxe Suite, we have 1 types of rooms available, any other ideas?</p><p>Great idea! Now with the Standard Room, we have 2 types of rooms available, any other ideas?</p><p>The Standard Room is already available in our hotel, try something different.</p>|

|**Input 3**|
| :-: |
|<p>let hotel = new Hotel(500);</p><p></p><p>console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));</p><p></p><p>console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));</p><p>console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));</p><p>console.log(hotel.showAvailableRooms());</p>|

|**Output 3**|
| :-: |
|<p>Successfully stocked 100 Soap</p><p>Successfully stocked 20 Towels</p><p>Successfully stocked 50 Shampoo</p><p>Great idea! Now with the Deluxe Suite, we have 1 types of rooms available, any other ideas?</p><p>Great idea! Now with the Standard Room, we have 2 types of rooms available, any other ideas?</p><p>Deluxe Suite - $ 200</p><p>Standard Room - $ 100</p>|


|**Input 4**|
| :-: |
|<p>let hotel = new Hotel(500);</p><p></p><p>console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));</p><p></p><p>console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));</p><p>console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));</p><p>console.log(hotel.showAvailableRooms());</p><p>console.log(hotel.bookRoom("Apartment"));</p><p>console.log(hotel.bookRoom("Deluxe Suite"));</p>|

|**Output 4**|
| :-: |
|<p>Successfully stocked 100 Soap</p><p>Successfully stocked 20 Towels</p><p>Successfully stocked 50 Shampoo</p><p>Great idea! Now with the Deluxe Suite, we have 1 types of rooms available, any other ideas?</p><p>Great idea! Now with the Standard Room, we have 2 types of rooms available, any other ideas?</p><p>Deluxe Suite - $ 200</p><p>Standard Room - $ 100</p><p>There is no Apartment available, would you like to book another room?</p><p>Your booking for Deluxe Suite has been confirmed! The price is $200 per night.</p>|





![](Aspose.Words.da53ed61-172f-4dfa-80fe-2c6233f18b46.003.png)![](Aspose.Words.da53ed61-172f-4dfa-80fe-2c6233f18b46.004.png)![](Aspose.Words.da53ed61-172f-4dfa-80fe-2c6233f18b46.005.png)![](Aspose.Words.da53ed61-172f-4dfa-80fe-2c6233f18b46.006.png)![](Aspose.Words.da53ed61-172f-4dfa-80fe-2c6233f18b46.007.png)![](Aspose.Words.da53ed61-172f-4dfa-80fe-2c6233f18b46.008.png)![](Aspose.Words.da53ed61-172f-4dfa-80fe-2c6233f18b46.009.png)![](Aspose.Words.da53ed61-172f-4dfa-80fe-2c6233f18b46.010.png)![](Aspose.Words.da53ed61-172f-4dfa-80fe-2c6233f18b46.011.png)


![](Aspose.Words.da53ed61-172f-4dfa-80fe-2c6233f18b46.001.png)![](Aspose.Words.da53ed61-172f-4dfa-80fe-2c6233f18b46.002.png)![](Aspose.Words.da53ed61-172f-4dfa-80fe-2c6233f18b46.012.png)![](Aspose.Words.da53ed61-172f-4dfa-80fe-2c6233f18b46.013.png)![](Aspose.Words.da53ed61-172f-4dfa-80fe-2c6233f18b46.014.png)

