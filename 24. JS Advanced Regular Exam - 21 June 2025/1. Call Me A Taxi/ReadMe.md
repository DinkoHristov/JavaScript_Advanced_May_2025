
# **01. Call Me A Taxi**
**Environment Specifics**

Please be aware that every JS environment may **behave differently** when executing code. Certain things that work in the browser are not supported in **Node.js**, which is the environment used by **Judge**.

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
# **Your Task**
**Use the provided skeleton to solve this problem.**
# **Functionality**
![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.001.png)**Write the missing functionality** of this user interface. The functionality is divided in the following steps: 

**Write the missing JavaScript code** to make the **Taxi Order** work as expected:

All fields **(Pick-up Location, Drop-off Location, Number of Passengers, What time for** and **Type of Taxi)** are **filled with the correct input**

- **Pick-up Location, Drop-off Location, Number of Passengers, What time for** and **Type of Taxi** are **non**-**empty** **strings**. If any of them is empty, the program should not do anything.
1. **Getting the information from the form![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.002.png)**
- On clicking the **["Order"]** button the information from the input fields is listed in the **"Order info"** section. For the input fields a **list item** is **added** to the **"order-info-list"** unordered list. 
- The text format and order for the list item should be the same as on the picture below.  
- When the button is clicked, the input fields must be cleared and the **["Order"]** button must be **disabled**. At the same time the **["Edit"]** and the **["Continue"]** buttons must be **added**. 

  The HTML structure looks like this:  

![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.003.png)

1. **Edit**

The functionality here is the following: 

- When the **"Edit"** button is clicked, all of the **information** is **loaded** in the **input fields** from step 1 and all buttons in preview section are **removed** while the **["Order"]** button is **enabled** again.

![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.004.png)

- The **list items** must be **removed** from the **"order-info-list" and** all of the **information** must go back to the **input fields** again**.** 

![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.005.png)

1. **Continue**
- When the **["Continue"]** button is clicked, the information from **"order-info-list"** unordered list must be transferred to **"confirm-list"** in the **same** HTML structure. For you, this means **removing everything** inside of the **ul** with class = **"order-info-list"** and **adding** in **"confirm-order-list"**, the list item with same information and **["Confirm"]** and the **[**"**Cancel"]** buttons must be **added**.

![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.006.png)

- This is HTML structure of **"confirm-order-list"** unordered list:

![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.007.png)

1. **Confirm/Cancel**
- When the **["Confirm"]** or **["Cancel"]** button is clicked, the **list item** must be **removed,**  from the **"confirm-order-list",** the **["Order"]** button is **enabled** again** you must add** new **class** and add **text** to **<h1>** element with** id=**"status"**.If **["Confirm"]** button is clicked **class** must be **"** **taxi-ordered"** and **text** is **"Taxi has been successfully ordered.".** If **["Cancel"]** button is clicked **class** must be **"taxi-not-complete"** and **text** is **"Taxi request was not completed.".**

  **["Confirm"]** button**:**

  ![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.008.png)

**["Cancel"]** button**:**

![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.009.png)

1. **Reload**
- On clicking the **<h1>** element with** id=**"status",** you must **reload** the page.
# **Submission**
Submit only yours **solve()** function.


*GOOD LUCK� J*



![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.011.png)![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.012.png)![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.013.png)![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.014.png)![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.015.png)![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.016.png)![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.017.png)![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.018.png)![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.019.png)




![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.010.png)![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.020.png)![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.021.png)![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.022.png)![](Aspose.Words.3b5c9f51-d4fe-4af5-87c3-6acbdf526fb6.023.png)
