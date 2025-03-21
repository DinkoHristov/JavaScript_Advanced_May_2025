
## **02. Home Renovation**

class HomeRenovation {

//TODO...

}

Write a **class** **HomeRenovation**, which implements the following functionality.

**Functionality**

**Constructor**

Should have these **3** properties:

- **budget – Number**
- **tasks – Array (empty)**
- **completedTasks – Array (empty)**

**At the initialization** of the **HomeRenovation** class, the constructor accepts the budget.

**Hint:** You can add more properties to help you finish the task.
#### **addTask(description, cost, priority)**
The description is of type **string**, while the cost and priority are of type **number**.

- If the cost of the task exceeds the available budget, **return**:

` `**"Not enough budget to add '{description}' task."**

- Otherwise, this function should add the task with the properties: description, cost, and priority to the **tasks** **array**, **reduce** the budget by the task cost, and return: 

  **"The task '{description}' has been successfully added to the renovation plan."**
#### **markTaskAsCompleted(description)**
The description is of type **string**.

- If the task is not found, **throw an Error**:

  **"Task '{description}' not found in the renovation plan."**

- Otherwise, this function should **remove** the task from the **tasks array**, add it to the **completedTasks** array, and **return**: 

  **"The task '{description}' has been successfully completed."**
**

#### **getPriorityTasksCount (minimalPriority)**
The **minimalPriority** is of type **number**.

- If the received **minimalPriority** is less than or equal to 0, **return**:

  ` `**"The priority cannot be zero or negative."**

- This function should **return** number of tasks that have a priority greater than or equal to **minimalPriority** in format:

  **"You have {tasksCount} tasks to prioritize."**

- ` `If no such tasks are found, **return**: 

  **"No tasks found with priority {minimalPriority} or higher."**
#### **renovationSummary()**
This method should **return** the complete information about the renovation:

- If no tasks have been completed, **throw an Error**:

  ` `**"No tasks have been completed yet!"**

- Otherwise, **return** budget left:

  ` `**"Budget left ${budget}."**

- On **second line**, **return** how many tasks have been completed:

  ` `**"You have completed {completedTasks.length} tasks."**

- On the **third line**:

  ` `**"Pending tasks in the renovation plan:"**

- On the **new line**, display information about each task in the tasks array: 

  **"{description} - Cost: {cost}, Priority: {priority}"**
### **Example**

|**Input 1**|
| :-: |
|<p>const renovation = new HomeRenovation(10000);</p><p>console.log(renovation.addTask("Paint walls", 1500, 2)); </p><p>console.log(renovation.addTask("Install new windows", 5000, 1)); </p><p>console.log(renovation.addTask("New Roof", 5000, 1)); </p><p></p>|

|**Output 1**|
| :-: |
|<p>The task 'Paint walls' has been successfully added to the renovation plan.</p><p>The task 'Install new windows' has been successfully added to the renovation plan.</p><p>Not enough budget to add 'New Roof' task.</p><p></p>|

|**Input 2**|
| :-: |
|<p>const renovation = new HomeRenovation(10000);</p><p>console.log(renovation.addTask("Paint walls", 1500, 2)); </p><p>console.log(renovation.addTask("Install new windows", 5000, 1)); </p><p>console.log(renovation.markTaskAsCompleted("Paint walls")); </p><p>console.log(renovation.markTaskAsCompleted("Change doors")); </p><p></p>|

|**Output 2**|
| :-: |
|<p>The task 'Paint walls' has been successfully added to the renovation plan.</p><p>The task 'Install new windows' has been successfully added to the renovation plan.</p><p>The task 'Paint walls' has been successfully completed.</p><p>Error: Task 'Change doors' not found in the renovation plan.</p><p></p>|

|**Input 3**|
| :-: |
|<p>const renovation = new HomeRenovation(10000);</p><p>console.log(renovation.addTask("Paint walls", 1500, 2)); </p><p>console.log(renovation.addTask("Install new windows", 5000, 1)); </p><p>console.log(renovation.markTaskAsCompleted("Paint walls")); </p><p>console.log(renovation.getPriorityTasksCount(1)); </p><p></p>|

|**Output 3**|
| :-: |
|<p>The task 'Paint walls' has been successfully added to the renovation plan.</p><p>The task 'Install new windows' has been successfully added to the renovation plan.</p><p>The task 'Paint walls' has been successfully completed. </p><p>You have 1 tasks to prioritize.</p><p></p>|

|**Input 4**|
| :-: |
|<p>const renovation = new HomeRenovation(10000);</p><p>console.log(renovation.addTask("Paint walls", 1500, 2)); </p><p>console.log(renovation.addTask("Install new windows", 5000, 1)); </p><p>console.log(renovation.markTaskAsCompleted("Paint walls")); </p><p>console.log(renovation.renovationSummary());</p><p></p>|

|**Output 4**|
| :-: |
|<p>The task 'Paint walls' has been successfully added to the renovation plan. </p><p>The task 'Install new windows' has been successfully added to the renovation plan. </p><p>The task 'Paint walls' has been successfully completed.</p><p>Budget left $3500.</p><p>You have completed 1 tasks.</p><p>Pending tasks in the renovation plan:</p><p>Install new windows - Cost: 5000, Priority: 1</p>|






![](Aspose.Words.34964d41-16d8-4041-88af-d8e1f598a9eb.003.png)![](Aspose.Words.34964d41-16d8-4041-88af-d8e1f598a9eb.004.png)![](Aspose.Words.34964d41-16d8-4041-88af-d8e1f598a9eb.005.png)![](Aspose.Words.34964d41-16d8-4041-88af-d8e1f598a9eb.006.png)![](Aspose.Words.34964d41-16d8-4041-88af-d8e1f598a9eb.007.png)![](Aspose.Words.34964d41-16d8-4041-88af-d8e1f598a9eb.008.png)![](Aspose.Words.34964d41-16d8-4041-88af-d8e1f598a9eb.009.png)![](Aspose.Words.34964d41-16d8-4041-88af-d8e1f598a9eb.010.png)![](Aspose.Words.34964d41-16d8-4041-88af-d8e1f598a9eb.011.png)


![](Aspose.Words.34964d41-16d8-4041-88af-d8e1f598a9eb.001.png)![](Aspose.Words.34964d41-16d8-4041-88af-d8e1f598a9eb.002.png)![](Aspose.Words.34964d41-16d8-4041-88af-d8e1f598a9eb.012.png)![](Aspose.Words.34964d41-16d8-4041-88af-d8e1f598a9eb.013.png)![](Aspose.Words.34964d41-16d8-4041-88af-d8e1f598a9eb.014.png)

