
**Problem 3. Medical Checkup**

**Your Task**

Using **Mocha** and **Chai** write **JS Unit Tests** to test a variable named **medicalCheckup**, which represents an object. You may use the following code as a template:

|<p>describe(**"*Tests* …"**, **function**() {</p><p>`    `describe(**"*TODO* …"**, **function**() {<br>`        `***it***(**"*TODO …*"**, **function**() {</p><p>`            `*// **TODO:*** …</p><p>`        `});</p><p>`     `});<br>`     `*// **TODO:*** …</p><p>});</p>|
| :- |

**Functionality**

The object should have the following functionality:				

- **scheduleAppointment(patientsCount, costPerPatient, clinicLocation) -** A function that accepts **three** parameters: **number**, **number**, and **string**.
- There is a **need for validation** for the input, in case of submitted **invalid** parameters or empty **string**, **throw** an error:

  **"Invalid Information!"**

  - If **clinicLocation** is different from "**Sofia**", **throw** an error:

**"The location of this clinic is not in the correct city!"**

- To be accepted, the **appointment** must meet these **requirements**:
  - **patientsCount** must be **greater** or **equal** to 30
  - **costPerPatient** must be **less** or **equal** to 50
- If the above conditions are met, **return**:

**"This clinic meets the requirements, with capacity for {patientsCount} patients at {costPerPatient}$ per checkup."**

- Otherwise, if the above conditions are **not** met, **return** the following message:

  **"This clinic does not meet your requirements!"**

- **additionalServices(labTests, consultations, hasInsurance) -** A function that accepts three parameters: **array, array,** and **boolean**.
- Calculate the total cost based on services used:
  - **labTests** options:
    - "**blood**" ? **$20**
    - "**urine**" ? $**15**
  - **consultations** options:
    - " **general**" ? **$100**
    - " **specialist**" ? $**200**
- If the **hasInsurance** is **true,** a **20%** discount** should** be** applied**.** Then **return** the following message:

**"You spend {totalCost}$ for lab tests and consultations with 20% insurance discount!"**

- Else, **return** the following message:  

  **"You spend {totalCost}$ for lab tests and consultations!"**

- You need to validate the input, if the **labTests, consultations** and **hasInsurance** are not an **array, array** and **Boolean, throw** an error: "**Invalid Information!**"

- **roomDistribution(patients, rooms) -** A function that accepts two parameters: **number, number**.
- You need to calculate how many **patients per room**.
- If the **patientsPerRoom** are  **less** than **4**. **return** the following message: 

**"There is only {patientsPerRoom} patient in every room, consider rearranging."**

- Else, **return** the following message:  

  **"You have {rooms} rooms with {patientsPerRoom} patients in each room."**

- You **need to validate** the input, if the **patients** and **rooms** are not a **numbers**,** or are a **negative** numbers, **throw** an error: 

  **"Invalid Information!"**.

**JS Code**

To ease you in the process, you are provided with an implementation that meets all of the specification requirements for the **medicalCheckup** object:

|**medicalCheckup.js**|
| :-: |
|<p>const medicalCheckup = {</p><p>`    `scheduleAppointment(patientsCount, costPerPatient, clinicLocation) {</p><p>`        `if (typeof patientsCount !== 'number' || typeof costPerPatient !== 'number' || typeof clinicLocation !== 'string' || clinicLocation.trim() === '') {</p><p>`            `throw new Error("Invalid Information!");</p><p>`        `}</p><p></p><p>`        `if (clinicLocation === "Sofia") {</p><p>`            `if (patientsCount >= 30 && costPerPatient <= 50) {</p><p>`                `return `This clinic meets the requirements, with capacity for ${patientsCount} patients at ${costPerPatient}$ per checkup.`;</p><p>`            `} else {</p><p>`                `return `This clinic does not meet your requirements!`;</p><p>`            `}</p><p>`        `} else {</p><p>`            `throw new Error(`The location of this clinic is not in the correct city!`);</p><p>`        `}</p><p>`    `},</p><p></p><p>`    `additionalServices(labTests, consultations, hasInsurance) {</p><p>`        `if (!Array.isArray(labTests) || !Array.isArray(consultations) || typeof hasInsurance !== "boolean") {</p><p>`            `throw new Error("Invalid Information!");</p><p>`        `}</p><p></p><p>`        `let totalCost = 0;</p><p></p><p>`        `labTests.forEach(test => {</p><p>`            `if (test === "blood") totalCost += 20;</p><p>`            `else if (test === "urine") totalCost += 15;</p><p>`        `});</p><p></p><p>`        `consultations.forEach(type => {</p><p>`            `if (type === "general") totalCost += 100;</p><p>`            `else if (type === "specialist") totalCost += 200;</p><p>`        `});</p><p></p><p>`        `if (hasInsurance) {</p><p>`            `totalCost \*= 0.80;</p><p>`            `return `You spend ${totalCost}$ for lab tests and consultations with 20% insurance discount!`;</p><p>`        `} else {</p><p>`            `return `You spend ${totalCost}$ for lab tests and consultations!`;</p><p>`        `}</p><p>`    `},</p><p></p><p>`    `roomDistribution(patients, rooms) {</p><p>`        `if (typeof patients !== "number" || patients <= 0 || typeof rooms !== "number" || rooms <= 0) {</p><p>`            `throw new Error("Invalid Information!");</p><p>`        `}</p><p></p><p>`        `let patientsPerRoom = Math.round(patients / rooms);</p><p></p><p>`        `if (patientsPerRoom < 4) {</p><p>`            `return `There is only ${patientsPerRoom} patient in every room, consider rearranging.`;</p><p>`        `} else {</p><p>`            `return `You have ${rooms} rooms with ${patientsPerRoom} patients in each room.`;</p><p>`        `}</p><p>`    `}</p><p>};</p><p></p>|
**Submission**

Submit your tests inside a **describe()** statement, as shown above.




![](Aspose.Words.b784a9e9-5fe2-411d-a28f-1451106179cb.003.png)![](Aspose.Words.b784a9e9-5fe2-411d-a28f-1451106179cb.004.png)![](Aspose.Words.b784a9e9-5fe2-411d-a28f-1451106179cb.005.png)![](Aspose.Words.b784a9e9-5fe2-411d-a28f-1451106179cb.006.png)![](Aspose.Words.b784a9e9-5fe2-411d-a28f-1451106179cb.007.png)![](Aspose.Words.b784a9e9-5fe2-411d-a28f-1451106179cb.008.png)![](Aspose.Words.b784a9e9-5fe2-411d-a28f-1451106179cb.009.png)![](Aspose.Words.b784a9e9-5fe2-411d-a28f-1451106179cb.010.png)![](Aspose.Words.b784a9e9-5fe2-411d-a28f-1451106179cb.011.png)


![](Aspose.Words.b784a9e9-5fe2-411d-a28f-1451106179cb.001.png)![](Aspose.Words.b784a9e9-5fe2-411d-a28f-1451106179cb.002.png)![](Aspose.Words.b784a9e9-5fe2-411d-a28f-1451106179cb.012.png)![](Aspose.Words.b784a9e9-5fe2-411d-a28f-1451106179cb.013.png)![](Aspose.Words.b784a9e9-5fe2-411d-a28f-1451106179cb.014.png)

