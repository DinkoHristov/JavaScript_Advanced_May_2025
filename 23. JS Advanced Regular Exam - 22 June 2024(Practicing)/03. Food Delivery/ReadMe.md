
**03. Food Delivery**

**Your Task**

Using **Mocha** and **Chai** write **JS Unit Tests** to test a variable named **foodDelivery**, which represents an object. You may use the following code as a template:

|<p>describe(**"*Tests* …"**, **function**() {</p><p>`    `describe(**"*TODO* …"**, **function**() {<br>`        `***it***(**"*TODO …*"**, **function**() {</p><p>`            `*// **TODO:*** …</p><p>`        `});</p><p>`     `});<br>`     `*// **TODO:*** …</p><p>});</p>|
| :- |

The object should have the following functionality: 

- **getCategory(category) -** A function that accepts one parameter: **string**.
- If the **category** is "**Vegan**" return the string:

  **"Dishes that contain no animal products."**

- If the **category** is "**Vegetarian**" return the string:

  **"Dishes that contain no meat or fish."**

- If the **category** is "**Gluten-Free**" return the string:

  **"Dishes that contain no gluten."**

- If the **category** is "**All**" return the string:

  **"All available dishes."**

- If the value of the string type is **different** from **"Vegan", "Vegetarian", "Gluten-Free", "All"**, **throw an error**:

  ` `**"Invalid Category!"**

- **addMenuItem(menuItem, maxPrice) -** A function that accepts an **array** of objects(**{name: Item name, price: item price}**) and **number**.
- You must **add** an element (**menuItem**) if the price is **less** or equal to **maxPrice** from the array to **availableItems** array.
- Finally, **return** the array **length** in the following string:
- **"There are {availableItems.length} available menu items matching your criteria!"**
- There is a need for validation for the input, as an **array** and

  **number** may not always be valid. In case of submitted invalid parameters, **throw an error**

  ` `**"Invalid Information!"**

- If passed **menuItem** or **maxPrice** parameters are not an **array** and **number**. 
- If the **menuItem** array has fewer than 1 item, and if **maxPrice** is **less** than 5.

- **calculateOrderCost(shipping, addons, discount) -** A function that accepts three parameters: **array**, **array**, and **boolean**.
  - Calculate the total **price** you are going to **pay** depending on the chosen **shipping** options and **addons**.
- The result must be formatted to the second digit after the decimal point.
- The available options for **shipping** are:
- **standard**, which costs $3
- **express**, which costs $5
- The available options for **addons** are:
- **sauce**, which costs $1
- **beverage**, which costs $3.5
- If the **discount** is **true**, a 15% discount should be applied. Then **return** the following message:

  ` `**"You spend ${totalPrice} for shipping and addons with a 15% discount!"**

- Else, **return** the following message: 
- **"You spend ${totalPrice} for shipping and addons!"**
- ` `You need to **validate** the input. If the **shipping**, **addons**, and **discount** are not an **array**, **array**, and **boolean**, **throw** an error:

  ` `**"Invalid Information!"**

- **Note**: Òhe **totalPrice** must be rounded to the **second** decimal

**JS Code**

To ease you in the process, you are provided with an implementation that meets all of the specification requirements for the **foodDelivery** object:

|**foodDelivery.js**|
| :-: |
|<p>const foodDelivery = {</p><p>`  `getCategory(category) {</p><p>`    `if (category === "Vegan") {</p><p>`      `return "Dishes that contain no animal products.";</p><p>`    `} else if (category === "Vegetarian") {</p><p>`      `return "Dishes that contain no meat or fish.";</p><p>`    `} else if (category === "Gluten-Free") {</p><p>`      `return "Dishes that contain no gluten.";</p><p>`    `} else if (category === "All") {</p><p>`      `return "All available dishes.";</p><p>`    `} else {</p><p>`      `throw new Error("Invalid Category!");</p><p>`    `}</p><p>`  `},</p><p>`  `addMenuItem(menuItem, maxPrice) {</p><p>`    `if (</p><p>`      `!Array.isArray(menuItem) ||</p><p>`      `typeof maxPrice !== "number" ||</p><p>`      `menuItem.length < 1 ||</p><p>`      `maxPrice < 5</p><p>`    `) {</p><p>`      `throw new Error("Invalid Information!");</p><p>`    `}</p><p>`    `let availableItems = [];</p><p>`    `menuItem.forEach((item) => {</p><p>`      `if (item.price <= maxPrice) {</p><p>`        `availableItems.push(item);</p><p>`      `}</p><p>`    `});</p><p>`    `return `There are ${availableItems.length} available menu items matching your criteria!`;</p><p>`  `},</p><p>`  `calculateOrderCost(shipping, addons, discount) {</p><p>`    `if (</p><p>`      `!Array.isArray(shipping) ||</p><p>`      `!Array.isArray(addons) ||</p><p>`      `typeof discount !== "boolean"</p><p>`    `) {</p><p>`      `throw new Error("Invalid Information!");</p><p>`    `}</p><p>`    `let totalPrice = 0;</p><p></p><p>`    `shipping.forEach((item) => {</p><p>`      `if (item === "standard") {</p><p>`        `totalPrice += 3;</p><p>`      `} else if (item === "express") {</p><p>`        `totalPrice += 5;</p><p>`      `}</p><p>`    `});</p><p>`    `addons.forEach((item) => {</p><p>`      `if (item === "sauce") {</p><p>`        `totalPrice += 1;</p><p>`      `} else if (item === "beverage") {</p><p>`        `totalPrice += 3.5;</p><p>`      `}</p><p>`    `});</p><p>`    `if (discount) {</p><p>`      `totalPrice = totalPrice \* 0.85;</p><p>`      `return `You spend $${totalPrice.toFixed(</p><p>`        `2</p><p>`      `)} for shipping and addons with a 15% discount!`;</p><p>`    `} else {</p><p>`      `return `You spend $${totalPrice.toFixed(2)} for shipping and addons!`;</p><p>`    `}</p><p>`  `},</p><p>};</p><p></p>|

**Submission**

Submit your tests inside a **describe()** statement, as shown above.






![](Aspose.Words.e4dfd2ae-bd16-406c-a7bc-e04470fd80d5.003.png)![](Aspose.Words.e4dfd2ae-bd16-406c-a7bc-e04470fd80d5.004.png)![](Aspose.Words.e4dfd2ae-bd16-406c-a7bc-e04470fd80d5.005.png)![](Aspose.Words.e4dfd2ae-bd16-406c-a7bc-e04470fd80d5.006.png)![](Aspose.Words.e4dfd2ae-bd16-406c-a7bc-e04470fd80d5.007.png)![](Aspose.Words.e4dfd2ae-bd16-406c-a7bc-e04470fd80d5.008.png)![](Aspose.Words.e4dfd2ae-bd16-406c-a7bc-e04470fd80d5.009.png)![](Aspose.Words.e4dfd2ae-bd16-406c-a7bc-e04470fd80d5.010.png)![](Aspose.Words.e4dfd2ae-bd16-406c-a7bc-e04470fd80d5.011.png)


![](Aspose.Words.e4dfd2ae-bd16-406c-a7bc-e04470fd80d5.001.png)![](Aspose.Words.e4dfd2ae-bd16-406c-a7bc-e04470fd80d5.002.png)![](Aspose.Words.e4dfd2ae-bd16-406c-a7bc-e04470fd80d5.012.png)![](Aspose.Words.e4dfd2ae-bd16-406c-a7bc-e04470fd80d5.013.png)![](Aspose.Words.e4dfd2ae-bd16-406c-a7bc-e04470fd80d5.014.png)

