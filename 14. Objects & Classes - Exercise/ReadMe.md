
# **Exercises: Objects & Classes**
Problems for exercises and homework for the ["JavaScript Advanced" course @ SoftUni](https://softuni.bg/courses/js-advanced). Submit your solutions in the SoftUni judge system at <https://judge.softuni.bg/Contests/2371/Exercise-Objects-Classes>.
1. ## ` `**Heroic Inventory**
In the era of heroes, every hero has his own items which make him unique. Create a function which creates a **register for the heroes**, with their **names**, **level**, and **items**, if they have such. The register should accept data in a specified format, and return it presented in a specified format. 
### **Input**
The **input** comes as array of strings. Each element holds data for a hero, in the following format:

“**{heroName} / {heroLevel} / {item1}, {item2}, {item3}...**” 

You must store the data about every hero. The **name** is a **string**, the **level** is a **number** and the items are all **strings.**
### **Output**
The **output** is a **JSON representation** of the data for all the heroes you’ve stored. The data must be an **array of all the heroes**. Check the examples for more info.
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|<p>['Isacc / 25 / Apple, GravityGun',</p><p>'Derek / 12 / BarrelVest, DestructionSword',</p><p>'Hes / 1 / Desolator, Sentinel, Antara']</p>|[{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]|
|['Jake / 1000 / Gauss, HolidayGrenade']|[{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]|
### **Hints**
- We need an array that will hold our hero data. That is the first thing we create.

  ![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.001.png)

- Next, we need to loop over the whole input, and process it. Let’s do that with a simple **for** loop.

  ![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.002.png)

- Every element from the input holds data about a hero, however the **elements from the data** we need are **separated by some delimiter**, so we just split each string with that **delimiter**.
- Next, we need to take the elements from the **string array**, which is a result of the **string split**, and by [destructuring assignment syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) we assign the array properties. Don’t forget to parse the number.

- However, here we remember there is something special about the items, so read the problem definition again, you will notice that there might be a **case** where the hero **has** **no items**; in that case, using **destructuring** is ok and when there are no items, our property items will be undefined and trying to spit it will throw an error.  That is why we need to perform a simple check using the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

  ![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.003.png)

- If **there are any items** in the **input**, the **variable** will be set to the **split version of them**. If not, it will just be set to an **empty array**.
- We have now extracted the needed data – we have stored the **input name** in a **variable**, we have parsed the **given level** to a **number**, and we have also **split** the **items** that the **hero holds** by their **delimiter**, which would result in a **string array** of elements. By definition, the **items** are **strings**, so we don’t need to process the array we’ve made anymore. 
- Now what is left is to add that data into **an object** and **add** that object to the **array**.  

  ![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.004.png)

- Lastly, we need to turn the array of objects we have made, into a JSON string, which is done by the **JSON.stringify()** function

  ![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.005.png)

1. ## **JSON’s Table**
JSON’s Table is a magical table which turns JSON data into an HTML table. You will be given **JSON strings** holding data about employees, including their **name**, **position** and **salary**. You need to **parse that data** into **objects**, and create an **HTML table** which holds the data for each **employee on a different row**, as **columns**. 

The **name** and **position** of the employee are **strings**, the **salary** is a **number**.
### **Input**
The **input** comes as array of strings. Each element is a JSON string which represents the data for a certain employee.
### **Output**
The **output** is the HTML code of a table which holds the data exactly as explained above. Check the examples for more info.

### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|<p>['{"name":"Pesho","position":"Promenliva","salary":100000}',</p><p>'{"name":"Teo","position":"Lecturer","salary":1000}',</p><p>'{"name":"Georgi","position":"Lecturer","salary":1000}']</p>|<p><table></p><p>`	`<tr></p><p>`		`<td>Pesho</td></p><p>`		`<td>Promenliva</td></p><p>`		`<td>100000</td></p><p>`	`</tr></p><p>`	`<tr></p><p>`		`<td>Teo</td></p><p>`		`<td>Lecturer</td></p><p>`		`<td>1000</td></p><p>`	`</tr></p><p>`	`<tr></p><p>`		`<td>Georgi</td></p><p>`		`<td>Lecturer</td></p><p>`		`<td>1000</td></p><p>`	`</tr></p><p></table></p>|
### **Hints**
- You might want to **escape the HTML**. Otherwise you might find yourself victim to vicious JavaScript **code in the input**.
1. ## **Cappy Juice**
You will be given different juices, as **strings**. You will also **receive quantity** as a **number**. If you receive a juice, you already have, **you must sum** the **current quantity** of that juice, with the **given one**. When a juice reaches **1000 quantity**, it produces a bottle. You must **store all produced bottles** and you must **print them** at the end.

**Note:** **1000 quantity** of juice is **one bottle**. If you happen to have **more than 1000**, you must make **as much bottles as you can**, and store **what** **is** **left** from the juice.

**Example:** **You have 2643 quantity** of Orange Juice – this is **2 bottles** of Orange Juice and **643 quantity left**.
### **Input**
The **input** comes as array of strings. Each element holds data about a juice and quantity in the following format:

“**{juiceName} => {juiceQuantity}**”

### **Output**
The **output** is the produced bottles. The bottles are to be printed in **order of obtaining the bottles**. Check the second example bellow - even though we receive the Kiwi juice first, we don’t form a bottle of Kiwi juice until the 4<sup>th</sup> line, at which point we have already create Pear and Watermelon juice bottles, thus the Kiwi bottles appear last in the output.

### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|<p>['Orange => 2000',</p><p>'Peach => 1432',</p><p>'Banana => 450',</p><p>'Peach => 600',</p><p>'Strawberry => 549']</p>|<p>Orange => 2</p><p>Peach => 2</p>|
|<p>['Kiwi => 234',</p><p>'Pear => 2345',</p><p>'Watermelon => 3456',</p><p>'Kiwi => 4567',</p><p>'Pear => 5678',</p><p>'Watermelon => 6789']</p>|<p>Pear => 8</p><p>Watermelon => 10</p><p>Kiwi => 4</p>|

1. ## **Store Catalogue**
You have to create a sorted catalogue of store products. You will be given the products’ names and prices. You need to order them by **alphabetical order**. 
### **Input**
The **input** comes as array of strings. Each element holds info about a product in the following format:

“**{productName} : {productPrice}**”

The **product’s name** will be a **string**, which will **always** **start with a capital letter**, and the **price** will be **a number**. You can safely assume there will be **NO duplicate product input**. The comparison for alphabetical order is **case-insensitive**.
### **Output**
As **output** you must print all the products in a specified format. They must be ordered **exactly as specified above**. The products must be **divided into groups**, by the **initial of their name**. The **group’s initial should be printed**, and after that the products should be printed with **2 spaces before their names**. For more info check the examples.
### **Examples**

|**Input**|**Output**||**Input**|**Output**|
| :-: | :-: | :-: | :-: | :-: |
|<p>['Appricot : 20.4',</p><p>'Fridge : 1500',</p><p>'TV : 1499',</p><p>'Deodorant : 10',</p><p>'Boiler : 300',</p><p>'Apple : 1.25',</p><p>'Anti-Bug Spray : 15',</p><p>'T-Shirt : 10']</p><p></p><p></p>|<p>A</p><p>`  `Anti-Bug Spray: 15</p><p>`  `Apple: 1.25</p><p>`  `Appricot: 20.4</p><p>B</p><p>`  `Boiler: 300</p><p>D</p><p>`  `Deodorant: 10</p><p>F</p><p>`  `Fridge: 1500</p><p>T</p><p>`  `T-Shirt: 10</p><p>`  `TV: 1499</p>||<p>['Banana : 2',</p><p>'Rubic's Cube : 5',</p><p>'Raspberry P : 4999',</p><p>'Rolex : 100000',</p><p>'Rollon : 10',</p><p>'Rali Car : 2000000',</p><p>'Pesho : 0.000001',</p><p>'Barrel : 10']</p>|<p>B</p><p>`  `Banana: 2</p><p>`  `Barrel: 10</p><p>P</p><p>`  `Pesho: 0.000001</p><p>R</p><p>`  `Rali Car: 2000000</p><p>`  `Raspberry P: 4999</p><p>`  `Rolex: 100000</p><p>`  `Rollon: 10</p><p>`  `Rubic's Cube: 5</p>|
1. ## **Auto-Engineering Company**
You are tasked to create a register for a company that produces cars. You need to store **how many cars** have been produced from a **specified model** of a **specified brand**.
### **Input**
The **input** comes as array of strings. Each element holds information in the following format:

“**{carBrand} | {carModel} | {producedCars}**”

The car **brands** and **models** are **strings**, the **produced cars** are **numbers**. If the **car brand** you’ve received **already exists**, just add the **new** **car model** to it with the **produced cars** **as its value**. If even the car model exists, just **add** the **given value** to the **current one**.
### **Output**
As **output** you need to print - **for every car brand**, the **car models**, and **number of cars produced** from that model. The output format is:

**“{carBrand}**

`  `**###{carModel} -> {producedCars}**

`  `**###{carModel2} -> {producedCars}**

`  `**...”**

The order of printing is the **order in which the brands and models first appear in the input**. The first brand in the input should be the first printed and so on. For each brand, the first model received from that brand, should be the first printed and so on. 
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|<p>['Audi | Q7 | 1000',</p><p>'Audi | Q6 | 100',</p><p>'BMW | X5 | 1000',</p><p>'BMW | X6 | 100',</p><p>'Citroen | C4 | 123',</p><p>'Volga | GAZ-24 | 1000000',</p><p>'Lada | Niva | 1000000',</p><p>'Lada | Jigula | 1000000',</p><p>'Citroen | C4 | 22',</p><p>'Citroen | C5 | 10']</p>|<p>Audi</p><p>###Q7 -> 1000</p><p>###Q6 -> 100</p><p>BMW</p><p>###X5 -> 1000</p><p>###X6 -> 100</p><p>Citroen</p><p>###C4 -> 145</p><p>###C5 -> 10</p><p>Volga</p><p>###GAZ-24 -> 1000000</p><p>Lada</p><p>###Niva -> 1000000</p><p>###Jigula -> 1000000</p>|
1. ## **System Components**
You will be given a register of systems with components and subcomponents. You need to build an ordered database of all the elements that have been given to you.

The elements are registered in a very simple way. When you have processed all of the input data, you must print them in a specific order. For every System you must print its components in a specified order, and for every Component, you must print its Subcomponents in a specified order.

The **Systems** you’ve stored must be ordered by **amount of components**, in **descending order**, as **first criteria**, and by **alphabetical order** as **second criteria**. The **Components** must be ordered by **amount of Subcomponents**, in **descending order**.
### **Input**
The **input** comes as array of strings. Each element holds **data** about a **system**, a **component** in that **system**, and a **subcomponent** in that **component**. If the given **system already exists**, you should just **add the new component** to it. If even the **component exists**, you should just **add** the **new subcomponent** to it. The **subcomponents** will **always be** **unique**. The input format is:

“**{systemName} | {componentName} | {subcomponentName}**” 

All of the elements are strings, and can contain **any ASCII character**. The **string comparison** for the alphabetical order is **case-insensitive**.
### **Output**
As **output** you need to print all of the elements, ordered exactly in the way specified above. The format is:

**“{systemName}**

` `**|||{componentName}**

` `**|||{component2Name}**

` `**||||||{subcomponentName}**

` `**||||||{subcomponent2Name}**

` `**{system2Name}** 

` `**...”**
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|['SULS | Main Site | Home Page',<br>'SULS | Main Site | Login Page',<br>'SULS | Main Site | Register Page',<br>'SULS | Judge Site | Login Page',<br>'SULS | Judge Site | Submittion Page',<br>'Lambda | CoreA | A23',<br>'SULS | Digital Site | Login Page',<br>'Lambda | CoreB | B24',<br>'Lambda | CoreA | A24',<br>'Lambda | CoreA | A25',<br>'Lambda | CoreC | C4',<br>'Indice | Session | Default Storage',<br>'Indice | Session | Default Security']|<p>Lambda<br>|||CoreA<br>||||||A23<br>||||||A24<br>||||||A25<br>|||CoreB<br>||||||B24<br>|||CoreC<br>||||||C4<br>SULS<br>|||Main Site<br>||||||Home Page<br>||||||Login Page<br>||||||Register Page<br>|||Judge Site<br>||||||Login Page<br>||||||Submittion Page</p><p>|||Digital Site</p><p>||||||Login Page<br>Indice</p><p>|||Session</p><p>||||||Default Storage</p><p>||||||Default Security</p>|
### **Hints**
- Creating a sorting function with two criteria might seem a bit daunting at first, but it can be simplified to the following:
  - If elements **a** and **b** are different based on the **first criteria**, then that result is the result of the sorting function, checking the second criteria is not required.
  - If elements **a** and **b** are **equal** based on the **first criteria**, then the result of comparing **a** and **b** on the **second criteria** is the result of the sorting.
1. ## **Data Class**
Write a **class** that holds data about an HTTP **Request**. It has the following properties:

- **method** (String)
- **uri** (String)
- **version** (String)
- **message** (String)
- **response** (String)
- **fulfilled** (Boolean)

The first four properties (**method**, **uri**, **version**, **message**) are set trough the **constructor**, in the listed order. The **response** property is initialized to **undefined** and the **fulfilled** property is initially set to **false**.
### **Constraints**
- The constructor of your class will receive **valid parameters**. 
- Submit the class definition as is, **without** wrapping it in any function.
### **Examples**

|**Sample Input**|**Resulting object**|
| :-: | :-: |
|<p>**let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')**</p><p>**console.log(myData);**</p>|<p>**Request {**</p><p>`  `**method: 'GET',**</p><p>`  `**uri: 'http://google.com',**</p><p>`  `**version: 'HTTP/1.1',**</p><p>`  `**message: '',**</p><p>`  `**response: undefined,**</p><p>`  `**fulfilled: false**</p><p>**}**</p>|
### **Hints**
Using ES6 syntax, a class can be defined similar to a function, using the **class** keyword:

![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.006.png)

At this point, the **class** can already **be instantiated**, but it won’t hold anything useful, since it doesn’t have a constructor. A **constructor** is a function that **initializes** the object’s **context** and attaches **values** to it. It is defined with the keyword **constructor** inside the body of the class definition and it follows the syntax of regular JS functions - it can take **arguments** and execute **logic**. Any variables we want to be attached to the **instance** must be prefixed with the **this** identifier:

![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.007.png)

The description mentions some of the properties need to be set via the constructor - this means the constructor must receive them as parameters. We modify it to take four named parameters that we then assign to the local variables:

![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.008.png)

Note the input parameters have the same names as the instance variables - this isn’t necessary, but it’s easier to read. There will be no name collision, because the **this** identifier tells the interpreter to look for a variable in a different context, so **this.method** is not the same as **method**.

Our class is complete and can be submitted in [Judge](https://judge.softuni.bg/Contests/Practice/Index/1534#0).
1. ## **Tickets**
Write a program that manages a database of tickets. A ticket has a **destination,** a **price** and a **status**. Your program will receive **two arguments** - the first is an **array of strings** for ticket descriptions and the second is a **string**, representing a **sorting criterion**. The ticket descriptions have the following format:

**<destinationName>|<price>|<status>**

Store each ticket and at the end of execution **return** a sorted summary of all tickets, sorted by either **destination**, **price** or **status**, depending on the **second parameter** that your program received. Always sort in ascending order (default behavior for **alphabetical** sort). If two tickets compare the same, use order of appearance. See the examples for more information.
### **Input**
Your program will receive two parameters - an **array of strings** and a **single string**.
### **Output**
**Return** a **sorted array** of all the tickets that where registered.
### **Examples**

|**Sample Input**|**Output Array**|
| :-: | :-: |
|<p>**['Philadelphia|94.20|available',**</p><p>` `**'New York City|95.99|available',**</p><p>` `**'New York City|95.99|sold',**</p><p>` `**'Boston|126.20|departed'],**</p><p>**'destination'**</p>|<p>**[ Ticket { destination: 'Boston',**</p><p>`    `**price: 126.20,**</p><p>`    `**status: 'departed' },** </p><p>`  `**Ticket { destination: 'New York City',**</p><p>`    `**price: 95.99,**</p><p>`    `**status: 'available' },** </p><p>`  `**Ticket { destination: 'New York City',**</p><p>`    `**price: 95.99,**</p><p>`    `**status: 'sold' },** </p><p>`  `**Ticket { destination: 'Philadelphia',**</p><p>`    `**price: 94.20,**</p><p>`    `**status: 'available' } ]**</p>|
|<p>**['Philadelphia|94.20|available',**</p><p>` `**'New York City|95.99|available',**</p><p>` `**'New York City|95.99|sold',**</p><p>` `**'Boston|126.20|departed'],**</p><p>**'status'**</p>|<p>**[ Ticket { destination: 'Philadelphia',**</p><p>`    `**price: 94.20,**</p><p>`    `**status: 'available' },**</p><p>`  `**Ticket { destination: 'New York City',**</p><p>`    `**price: 95.99,**</p><p>`    `**status: 'available' },**</p><p>`  `**Ticket { destination: 'Boston',**</p><p>`    `**price: 126.20,**</p><p>`    `**status: 'departed' },**</p><p>`  `**Ticket { destination: 'New York City',**</p><p>`    `**price: 95.99,**</p><p>`    `**status: 'sold' } ]**</p>|
1. ## **Sorted List**
Implement a **class**, which **keeps** a list of numbers, sorted in **ascending order**. It must support the following functionality:

- **add(elemenent)** - adds a new element to the collection
- **remove(index)** - removes the element at position **index**
- **get(index)** - returns the value of the element at position **index**
- **size** - number of elements stored in the collection

The **correct order** of the elements must be kept **at all times**, regardless of which operation is called. **Removing** and **retrieving** elements **shouldn’t** **work** if the provided index points **outside the length** of the collection (either throw an error or do nothing). Note the **size** of the collection is **not** a function.
### **Input / Output**
All function that expect **input** will receive data as **parameters**. Functions that have **validation** will be tested with both **valid and invalid** data. Any result expected from a function should be **returned** as it’s result.
Your **add** and **remove** **functions** should **return** an **class** **instance** with the required functionality as it’s result. 

Submit the class definition as is, **without** wrapping it in any function.
### **Examples**

|**Sample Input**|**Output**|
| :-: | :-: |
|<p>**let list = new List();**</p><p>**list.add(5);**</p><p>**list.add(6);**</p><p>**list.add(7);**</p><p>**console.log(list.get(1));** </p><p>**list.remove(1);**</p><p>**console.log(list.get(1));**</p>|<p>**6**</p><p>**7**</p>|
1. ## **Length Limit**
Create a class **Stringer**, which holds **single string** and a **length** property. The class should be initialized with a **string**, and an **initial length.** The class should always keep the **initial state** of its **given** **string**.

Name the two properties **innerString** and **innerLength**.

There should also be functionality for increasing and decreasing the initial **length** property.
Implement function **increase(length)** and **decrease(length)**, which manipulate the length property with the **given value**.

The length property is **a numeric value** and should not fall below **0**. It should not throw any errors, but if an attempt to decrease it below 0 is done, it should be automatically set to **0**.

You should also implement functionality for **toString()** function, which returns the string, the object was initialized with. If the length of the string is greater than the **length property**, the string should be cut to from right to left, so that it has the **same length** as the **length property**, and you should add **3 dots** after it, if such **truncation** was **done**.

If the length property is **0**, just return **3 dots.**
### **Examples**

|**lengthLimit.js**|
| :-: |
|**let *test*** = **new** Stringer(**"Test"**, 5);<br>***console***.log(***test***.toString()); *// Test<br><br>**test***.decrease(3);<br>***console***.log(***test***.toString()); *// Te...<br><br>**test***.decrease(5);<br>***console***.log(***test***.toString()); *// ...<br><br>**test***.increase(4); <br>***console***.log(***test***.toString()); *// Test*|
### **Hints**
Store the initial string in a property, and do not change it. Upon calling the **toString()** function, truncate it to the **desired value** and return it.

Submit your solution as a class representation only! No need for IIFEs or wrapping of classes.




![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.011.png)![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.012.png)![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.013.png)![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.014.png)![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.015.png)![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.016.png)![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.017.png)![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.018.png)![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.019.png)


![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.009.png)![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.010.png)![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.020.png)![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.021.png)![](Aspose.Words.7f38687f-8a26-422a-8a7b-43d14d993500.022.png)

