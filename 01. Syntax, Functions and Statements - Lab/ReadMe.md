
# **Lab: Syntax, Functions and Statements**
Submit your solutions in the SoftUni judge system at:

` `<https://judge.softuni.org/Contests/2749/Syntax-Functions-and-Statements-Lab>
1. ## **Echo Function**
Write a JS function that takes **one string parameter** and **prints** on two lines the **length** of the parameter and then the **unchanged parameter** itself.
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|'Hello, JavaScript!'|<p>18</p><p>Hello, JavaScript!</p>|
|'strings are easy'|<p>16</p><p>strings are easy</p>|
### **Hints**
- Write a function that receives a single **parameter**.
- Use the console.log function to print text on the console. Each call prints a newline automatically.
- The string's **length property** is used to determine how many characters are in a given string
1. ## **String Length**
Write a JS function that takes **three** **string arguments** as an input. Calculate the **sum** of the **length** of the **strings** and the **average length** of the strings **rounded** **down** to the nearest integer.

The **input** comes as **three string arguments** passed to your function.

The **output** should be printed on the console in two lines.
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|'chocolate', 'ice cream', 'cake'|<p>22</p><p>7</p>|
|'pasta', '5', '22.3'|<p>10</p><p>3</p>|
### **Hints**
- Write a function that receives three string arguments.
- Declare two variables named **sumLength** and **averageLength** that will keep the mathematical results.
- Calculate the length of the strings using the **length property**.

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.001.png)

- Calculate the sum of the three lengths. ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.002.png)
- Calculate the **average length** of the strings **rounded** **down** to the nearest integer. Use the **Math.floor()** function.

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.003.png)

- Print the results on the console.

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.004.png)
1. ## **Largest Number**
Write a function that takes **three number arguments** as input and finds the **largest** of them. Print the following text on the console:  **`The largest number is {number}.`**.

The **input** comes as **three number arguments** passed to your function.

The **output** should be printed to the console.
### **Example**

|**Input**|**Output**|
| :-: | :-: |
|5, -3, 16|The largest number is 16.|
|-3, -5, -22.5|The largest number is -3.|
### **Hints**
- Write a function that receives three number arguments.
- Declare a variable named **result** that will keep the result.

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.005.png)

- Make several checks to find out the largest of the three numbers. Start with num1.

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.006.png)

- Do the same for the others.

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.007.png)

- Print the result on the console.

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.008.png)
1. ## **Circle Area**
Write a function that takes **a single argument** as an input. **Check the type** of input argument. If it is a **number**, assume it is the radius of a circle and **calculate the circle area**. Print the **area** **rounded** to **two decimal places**.

If the argument type is **NOT** a number, print the following text on the console: 
**`We can not calculate the circle area, because we receive a {type of argument}.`**

The **input** comes as a **single argument** passed to your function.

The **output** should be printed on the console.
### **Example**

|**Input**|**Output**|
| :-: | :-: |
|5|78\.54|
|'name'|We can not calculate the circle area, because we receive a string.|
### **Hints**
- Write a function that receives a single argument.
- Declare a variable named **result** that will keep your result.

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.009.png)

- Check the type of the input argument with the **typeof** operator.

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.010.png)

- If the type is equal to **'number'**, calculate the circle area and print it on the console rounded to two decimal places. To do this, use the method **toFixed().**
  The **Math.pow()** function returns the base to the exponent power, that is, base exponent. You can find more information about the area [here](https://en.wikipedia.org/wiki/Circle):

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.011.png)

- If the type is **NOT** a **'number'**, print the following text on the console:

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.012.png)
1. ## **Math Operations**
Write a JS function that takes **two** **numbers** and **a string** as an input. 

The string may be one of the following: '**+**', '**-**', '**\***', '**/**', '**%**', '**\*\***'.

Print on the console the result of the mathematical **operation** between **both numbers** and the **operator** you receive as a string.

The **input** comes as **two numbers** and **a string argument** passed to your function.

The **output** should be printed on the console.
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|5, 6, '+'|11|
|3, 5.5, '\*'|16\.5|
### **Hints**
- Write a function which receives **three** arguments:

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.013.png)

- Declare a variable named **result** that will keep your mathematical result. 
- Write down the **switch** command that will take the string from your input and depending on it, perform the mathematical logic between the two numbers.

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.014.png)

- Print the result on the console.

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.015.png)
1. ## **Sum of Numbers N…M**
Write a JS function that takes two numbers **n** and **m** as an input and **prints the sum** of all numbers from **n** to **m**.

The **input** comes as **two string elements** that need to be **parsed** as numbers.

The **output** should **return** the **sum**.
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|'1', '5' |15|
|'-8', '20'|174|
### **Hints**
- Write a function that receives two string arguments and parse them as numbers. Use **Number(string)** function to parse the input. 

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.016.png)

- Declare a variable named **result** that will keep the mathematical results.
- Write a **for** loop from **num1** to **num2** and every turn of the cycle, until it’s completed, add the current value.

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.017.png)

- Finally, return the result.

  ![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.018.png)
1. ## **Day of Week**
Write a function that prints a number between 1 and 7 when a **day of the week** is passed to it as a string and an **error message** if the string is **not recognized**.

The **input** comes as a single-string argument.

The **output** should be returned as a result.
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|'Monday'|1|
|'Friday'|5|
|'Invalid'|error|

1. ## **Days in a month**
Write a JavaScript function to get the number of days in a month.

The input comes as two numeric parameters. The first element is the month, the second is the year.

The output must return the number of days in a month for a given year.
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|1, 2012|31|
|2, 2021|28|
### **Hints**
- Use **Date()**
1. ## **Square of Stars**
Write a function that **prints a rectangle** made of **stars** with variable **size**, depending on an input parameter. If there is **no parameter** specified, the rectangle should **always** be of **size 5**. Look at the examples to get an idea.

The **input** comes as a single **number** argument.

The **output** is a series of lines printed on the console, forming a rectangle of variable size.
### **Examples**

<table><tr><th colspan="1" valign="top"><b>Input</b></th><th colspan="1" valign="top"><b>Output</b></th><th colspan="1" rowspan="2" valign="top"></th><th colspan="1" valign="top"><b>Input</b></th><th colspan="1" valign="top"><b>Output</b></th><th colspan="1" rowspan="2" valign="top"></th><th colspan="1" valign="top"><b>Input</b></th><th colspan="1" valign="top"><b>Output</b></th><th colspan="1" rowspan="2" valign="top"></th><th colspan="1" valign="top"><b>Input</b></th><th colspan="1" valign="top"><b>Output</b></th></tr>
<tr><td colspan="1" valign="top"><b>1</b></td><td colspan="1" valign="top"><b>*</b></td><td colspan="1" valign="top"><b>2</b></td><td colspan="1" valign="top"><p><b>* *</b></p><p><b>* *</b></p></td><td colspan="1" valign="top"><b>5</b></td><td colspan="1" valign="top"><p><b>* * * * *</b></p><p><b>* * * * *</b></p><p><b>* * * * *</b></p><p><b>* * * * *</b></p><p><b>* * * * *</b></p></td><td colspan="1" valign="top"><b>7</b></td><td colspan="1" valign="top"><p><b>* * * * * * *</b></p><p><b>* * * * * * *</b></p><p><b>* * * * * * *</b></p><p><b>* * * * * * *</b></p><p><b>* * * * * * *</b></p><p><b>* * * * * * *</b></p><p><b>* * * * * * *</b></p></td></tr>
</table>
1. ## **Aggregate Elements**
Write a program that performs different operations on an array of elements. Implement the following operations:

- <b>Sum(a<sub>i</sub>)</b> - calculates the sum of all elements from the input array
- <b>Sum(1/a<sub>i</sub>)</b> - calculates the sum of the inverse values (1/a<sub>i</sub>) of all elements from the array
- <b>Concat(a<sub>i</sub>)</b> - concatenates the string representations of all elements from the array

The **input** comes as an array of number elements.

The **output** should be printed on the console on a new line for each of the operations.
### **Examples**

<table><tr><th colspan="1" valign="top"><b>Input</b></th><th colspan="1" valign="top"><b>Output</b></th><th colspan="1" rowspan="2" valign="top"></th><th colspan="1" valign="top"><b>Input</b></th><th colspan="1" valign="top"><b>Output</b></th></tr>
<tr><td colspan="1" valign="top">[1, 2, 3]</td><td colspan="1" valign="top"><p>6</p><p>1\.8333333333333333</p><p>123</p></td><td colspan="1" valign="top">[2, 4, 8, 16]</td><td colspan="1" valign="top"><p>30</p><p>0\.9375</p><p>24816</p></td></tr>
</table>







![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.021.png)![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.022.png)![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.023.png)![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.024.png)![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.025.png)![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.026.png)![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.027.png)![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.028.png)![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.029.png)


![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.019.png)![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.020.png)![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.030.png)![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.031.png)![](Aspose.Words.c63b1c0a-90b9-42bb-af60-b02c39912581.032.png)

