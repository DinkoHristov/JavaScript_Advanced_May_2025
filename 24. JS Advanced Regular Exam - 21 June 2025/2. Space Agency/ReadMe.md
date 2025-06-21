
## **Problem 2. Space Agency**
**Your Task**

Write a class **SpaceAgency**, which supports the described functionality below:

class SpaceAgency {

Implement this class

}

<a name="_hlk197941388"></a>**Functionality**

**Constructor**

Should have these **3** properties:

- **agencyName – string**
- **mission – string**
- **candidates – empty array**

At the initialization of the **SpaceAgency** class, the constructor accepts the **agency name** and **mission name**.

**Hint:** You can add more properties to help you finish the task.
#### **acceptApplications(applications)**
This method adds people to the **candidates** list. 

The method takes one argument: **applications (array of strings)**

- **Each** element in the array is information about a person in the format:

**"{name}-{education}-{flightHours}"**

- They are **separated** by dash symbol **"-"**. 
  - **Example**: **["Neil Armstrong-Pilot-1200", "Valentina Tereshkova-Engineer-800", "Neil Armstrong-Pilot-1400"…]** 
- If the **name** of the current person is already present in the **candidates** array, update the old **flightHours** only if the current one is **higher**.
- Otherwise, should **add** the person with properties: **{name, education, flightHours}** to the **candidates** array.
- In **all cases**, you must **finally return a string** in the following format:

**"You successfully added candidates: {name1}, {name2}, …{name**N}**."**

`       `**Note**: When returning the **string**, keep in mind that the different **names** of **persons** **must** be:

- **Unique** -** for instance**:** 
  - **"You successfully added candidates: Neil Armstrong , Valentina Tereshkova , Buzz Aldrin"** - is a correctly returned string
  - **"You successfully added candidates: Neil Armstrong , Valentina Tereshkova , Neil Armstrong "** - is not a correctly returned string
- **Separated** by **comma** and **space (, )**
#### **chooseForMission(candidateInfo)**
With this method, the agency can choose a candidate for the mission. 

The method takes one argument: **candidateInfo** (**string)**

- Òhe string** about the selected candidate is in the format: 

**"{name}-{minimumFlightHours}"**

- Check:
  - If the **name** of the current person is not present in **candidates** array, an **error** with the following message should be **thrown**:

**"{name} is not in the candidates list!"**

- If the candidate's **flightHours** are less than the required value, **throw:**

**"{name} does not have enough flight hours for the {mission} mission, minimum required is {minimumFlightHours} hours."**

- Otherwise:
  - Replace **flightHours** with the string **"selected"**.
  - Finally, **return** the string in the following format:

    **"Congratulations, {name} will participate in the {mission} mission!"**
#### **trainingBonus(name)**
With this method, we check if the candidate qualifies for a training bonus. 

The method takes one argument: **name** (**string)**

- Check:
  - If the submitted name is not present in the **candidates** array, **throw**:

**"{name} is not in the candidates list!"**

- Depending on the **education** recorded:
  - If the candidate is a **"Pilot", return:**

    **"{name} will be trained by {agencyName} as part of the {mission} mission with a training bonus of $100,000!"**

  - If the candidate is an **"Engineer", return:**

    **"{name} will be trained by {agencyName} as part of the {mission} mission with a training bonus of $120,000!"**

  - If the candidate has a different background**:**

    **"{name} will be trained by {agencyName} as part of the {mission} mission with a training bonus of $80,000!"**
#### **candidatesReport()**
This method **returns** a list of all candidates.

- If there are no candidates in the list, **throw** an error:

`	`**"Candidate database is empty!"**

- Otherwise:
  - The first line shows:

**"Candidates list:"**

- On the next lines, show information about each candidate **sorted** in **ascending** order of name:

**"{name}-{flightHours}"**
### **Example**

|**Input 1**|
| :-: |
|<p>let agency = new SpaceAgency("NASA", "Mars Exploration");</p><p>console.log(agency.acceptApplications([</p><p>`  `"Neil Armstrong-Pilot-1200",</p><p>`  `"Margaret Hamilton-Engineer-800",</p><p>`  `"Neil Armstrong-Pilot-1400"</p><p>]));</p><p></p>|

|**Output 1**|
| :-: |
|You successfully added candidates: Neil Armstrong, Margaret Hamilton.|

|**Input 2**|
| :-: |
|<p>let agency = new SpaceAgency("NASA", "Mars Exploration");</p><p>console.log(agency.acceptApplications([</p><p>`  `"Neil Armstrong-Pilot-1200",</p><p>`  `"Margaret Hamilton-Engineer-800"</p><p>]));</p><p>console.log(agency.chooseForMission("Neil Armstrong-1000"));</p><p>console.log(agency.chooseForMission("Margaret Hamilton-900"));</p>|



|**Output 2**|
| :-: |
|<p>You successfully added candidates: Neil Armstrong, Margaret Hamilton.</p><p>Congratulations, Neil Armstrong will participate in the Mars Exploration mission!</p><p>Uncaught Error Error: Margaret Hamilton does not have enough flight hours for the Mars Exploration mission, minimum required is 900 hours</p>|

|**Input 3**|
| :-: |
|<p>let agency = new SpaceAgency("NASA", "Mars Exploration");</p><p>console.log(agency.acceptApplications([</p><p>`  `"Neil Armstrong-Pilot-1200",</p><p>`  `"Margaret Hamilton-Engineer-800"</p><p>]));</p><p>console.log(agency.chooseForMission("Neil Armstrong-1000"));</p><p>console.log(agency.trainingBonus("Neil Armstrong"));</p><p>console.log(agency.trainingBonus("Margaret Hamilton"));</p><p></p>|

|**Output 3**|
| :-: |
|<p>You successfully added candidates: Neil Armstrong, Margaret Hamilton.</p><p>Congratulations, Neil Armstrong will participate in the Mars Exploration mission!</p><p>Neil Armstrong will be trained by NASA as part of the Mars Exploration mission with a training bonus of $100,000!</p><p>Margaret Hamilton will be trained by NASA as part of the Mars Exploration mission with a training bonus of $120,000!</p>|

|**Input 4**|
| :-: |
|<p>let agency = new SpaceAgency("NASA", "Mars Exploration");</p><p>console.log(agency.acceptApplications([</p><p>`  `"Neil Armstrong-Pilot-1200",</p><p>`  `"Margaret Hamilton-Engineer-800",</p><p>`  `"Mae Jemison-Biologist-700"</p><p>]));</p><p>console.log(agency.chooseForMission("Neil Armstrong-1000"));</p><p>console.log(agency.trainingBonus("Mae Jemison"));</p><p>console.log(agency.candidatesReport());</p><p></p>|




|**Output 4**|
| :-: |
|<p>You successfully added candidates: Neil Armstrong, Margaret Hamilton, Mae Jemison.</p><p>Congratulations, Neil Armstrong will participate in the Mars Exploration mission!</p><p>Mae Jemison will be trained by NASA as part of the Mars Exploration mission with a training bonus of $80,000!</p><p>Candidates list:</p><p>Mae Jemison-700</p><p>Margaret Hamilton-800</p><p>Neil Armstrong-selected</p>|






![](Aspose.Words.44a9fe11-2cb9-40f5-8581-97e1db3dbed6.003.png)![](Aspose.Words.44a9fe11-2cb9-40f5-8581-97e1db3dbed6.004.png)![](Aspose.Words.44a9fe11-2cb9-40f5-8581-97e1db3dbed6.005.png)![](Aspose.Words.44a9fe11-2cb9-40f5-8581-97e1db3dbed6.006.png)![](Aspose.Words.44a9fe11-2cb9-40f5-8581-97e1db3dbed6.007.png)![](Aspose.Words.44a9fe11-2cb9-40f5-8581-97e1db3dbed6.008.png)![](Aspose.Words.44a9fe11-2cb9-40f5-8581-97e1db3dbed6.009.png)![](Aspose.Words.44a9fe11-2cb9-40f5-8581-97e1db3dbed6.010.png)![](Aspose.Words.44a9fe11-2cb9-40f5-8581-97e1db3dbed6.011.png)


![](Aspose.Words.44a9fe11-2cb9-40f5-8581-97e1db3dbed6.001.png)![](Aspose.Words.44a9fe11-2cb9-40f5-8581-97e1db3dbed6.002.png)![](Aspose.Words.44a9fe11-2cb9-40f5-8581-97e1db3dbed6.012.png)![](Aspose.Words.44a9fe11-2cb9-40f5-8581-97e1db3dbed6.013.png)![](Aspose.Words.44a9fe11-2cb9-40f5-8581-97e1db3dbed6.014.png)

