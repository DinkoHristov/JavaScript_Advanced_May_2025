
# **Lab: DOM Introduction**
Submit your solutions in the SoftUni judge system at:

<https://judge.softuni.org/Contests/2759/Objects-and-Composition-Exercise>

**Environment Specifics**

Please, be aware that every JS environment may **behave differently** when executing code. Certain things that work in the browser are not supported in **Node.js**, which is the environment used by **Judge**.

The following actions are **NOT** supported:

- **.forEach()** with **NodeList** (returned by **querySelector()** and **querySelectorAll()**)
- **.forEach()** with **HTMLCollection** (returned by **getElementsByClassName()** and **element.children**)
- Using the **spread-operator** (**...**) to convert a **NodeList** into an array
- **append()** in Judge (use only **appendChild()**)
- **prepend()**
- **replaceWith()**
- **replaceAll()**
- **closest()**
- **replaceChildren()**
- Always turn the collection into a **JS array** (forEach, forOf, et.)

If you want to perform these operations, you may use **Array.from()** to first convert the collection into an array. 
1. ## **Edit Element** 
Create function **edit()** that takes **three** parameters.
### **Input / Output**
**The first** parameter is a **reference** to an **HTML** element, the other two parameters are string–**match** and **replacer.**

You have to **replace** all occurrences of the **match** inside the **text content** of the given element with a **replacer.**
### **Examples**
![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.001.png)

**?**

![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.002.png)
1. ## **Collect List Items**
Write a JS function that scans a given **HTML list** and **appends** all collected list items’ text to a **textarea** on the same page when the user **clicks** on a button.
### **Input / Output**
There will be no Input / Output, your program should instead **modify** the DOM of the given HTML document.
### **Examples**
![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.003.png) ? ![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.004.png)

1. **Sum Numbers**

Write a JS function that **reads** two numbers from input fields in a **web page** and puts their **sum in another field** when the user **clicks** on a button.

**Input / Output**

There will be no Input / Output, your program should instead **modify** the DOM of the given HTML document.

**Examples**

![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.005.png) 
1. ## **Show More**
Write a JS function that **expands** a hidden section of text when a link is **clicked**. The link should **disappear** as the rest of the text shows up.
### **Input / Output**
There will be no Input / Output, your program should instead **modify** the DOM of the given HTML document.
### **Examples**
![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.006.png)

**?**

![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.007.png)
1. ## **Colorize Table**
Write a JS function that **changes the color** of all **even** rows when the user **clicks** a button. Apply the color "**Teal**" to the target rows.
### **Input / Output**
There will be no Input / Output, your program should instead **modify** the DOM of the given HTML document.
### **Examples**
` `![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.008.png) ? ![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.009.png)
1. ## **Sum Table**
Write a JS function that finds the first table in a document and sums the values in the last column. The result is then displayed in an element with ID "**sum**".
### **Input / Output**
There will be no Input / Output, your program should instead **modify** the DOM of the given HTML document.
### **Examples**
`  `![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.010.png)   **?**   ![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.011.png)
1. ## **Extract Parenthesis**
Write a JS function that when **executed**, extracts all parenthesized text from a target paragraph by given element ID. The result is a string, joined by "; " (semicolon, space).
### **Input**
Your function will receive a **string parameter**, representing the target element ID, from which text must be extracted. The text should be extracted from the DOM.
### **Output**
**Return a string** with all matched text, separated by "; " (semicolon, space).
### **Examples**
![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.012.png)

|**Sample call**|
| :-: |
|let text = extract("content");|
|**Result (stored in variable text)**|
|Bulgaria; Kazanlak; Rosa demascena Mill|





![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.015.png)![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.016.png)![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.017.png)![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.018.png)![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.019.png)![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.020.png)![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.021.png)![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.022.png)![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.023.png)


![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.013.png)![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.014.png)![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.024.png)![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.025.png)![](Aspose.Words.d41316d2-dfab-4443-aa79-f2d3c8d8b082.026.png)

