
**3. Art Gallery**

**Your Task**

Using **Mocha** and **Chai** write **JS Unit Tests** to test a variable named **artGallery**, which represents an object. You may use the following code as a template:

|<p>describe(**"*Tests* …"**, **function**() {</p><p>`    `describe(**"*TODO* …"**, **function**() {<br>`        `***it***(**"*TODO …*"**, **function**() {</p><p>`            `*// **TODO:*** …</p><p>`        `});</p><p>`     `});<br>`     `*// **TODO:*** …</p><p>});</p>|
| :- |

The object should have the following functionality:				

- **addArtwork** **(title, dimensions, artist) -** A function that accepts **three** parameters, all of them must be **strings.**
- There is a **need for validation** for the input.
- **title** and **artist** should be **non-empty** strings. 
- If any parameter is invalid, **throw an error**:

**"Invalid Information!"**

- **dimensions** should be a **string** in the format **"width x height"**, where both width and height are positive numbers (e.g., "30 x 40"). 
- If dimensions does not match the required format, **throw an error**: 

**"Invalid Dimensions!"**

- If the **artist** is not one of** ["Van Gogh", "Picasso", "Monet"]**, throw an error**:

**"This artist is not allowed in the gallery!"**

- If the input is valid, **return** the message:

**"Artwork added successfully: '{title}' by {artist} with dimensions {dimensions}."**

- **calculateCosts (exhibitionCosts, insuranceCosts, sponsor) -** A function that accepts three parameters: **number, number,** and **boolean**.
- There is a **need for validation** for the input.
- **exhibitionCosts** and **insuranceCosts** should be positive **numbers**.
- **sponsor** should be a **boolean**.
- If any parameter is invalid, **throw an error**: 

**"Invalid Information!".**

- Calculate the **total cost** by summing **exhibitionCosts** and **insuranceCosts.**
- If sponsor is **true**, apply a **10%** discount to the total cost. **Return**: 

  **"Exhibition and insurance costs are {totalPrice}$, reduced by 10% with the help of a donation from your sponsor."**

- If sponsor is **false**, **return**: 

  **"Exhibition and insurance costs are {totalPrice}$."**

- **organizeExhibits (artworksCount, displaySpacesCount) -** A function that accepts two parameters: **number, number**.
- There is a **need for validation** for the input.
- Both **artworksCount** and **displaySpacesCount** should be positive **numbers**.
- If any parameter is **not** a number or is **negative**, **throw an error**:

  **"Invalid Information!"**

- Calculate the **artworksPerSpace** by divide **artworksCount** by **displaySpacesCount** and rounded down**.**
- If the number of artworks per display space is **less** than 5, **return**: 

**"There are only {artworksPerSpace} artworks in each display space, you can add more artworks."**

- Otherwise, **return**: 

**"You have {displaySpacesCount} display spaces with {artworksPerSpace} artworks in each space."**

**JS Code**

To ease you in the process, you are provided with an implementation that meets all of the specification requirements for the **artGallery** object:

|**artGallery.js**|
| :-: |
|<p>const artGallery = {</p><p>`  `addArtwork(title, dimensions, artist) {</p><p>`    `if (typeof title !== "string" || typeof artist !== "string") {</p><p>`      `throw new Error("Invalid Information!");</p><p>`    `}</p><p>`    `if (!/^\d+ x \d+$/.test(dimensions)) {</p><p>`      `throw new Error("Invalid Dimensions!");</p><p>`    `}</p><p>`    `const validArtists = ["Van Gogh", "Picasso", "Monet"];</p><p>`    `if (!validArtists.includes(artist)) {</p><p>`      `throw new Error("This artist is not allowed in the gallery!");</p><p>`    `}</p><p></p><p>`    `return `Artwork added successfully: '${title}' by ${artist} with dimensions ${dimensions}.`;</p><p>`  `},</p><p></p><p>`  `calculateCosts(exhibitionCosts, insuranceCosts, sponsor) {</p><p>`    `if (</p><p>`      `typeof exhibitionCosts !== "number" ||</p><p>`      `typeof insuranceCosts !== "number" ||</p><p>`      `typeof sponsor !== "boolean" ||</p><p>`      `exhibitionCosts < 0 ||</p><p>`      `insuranceCosts < 0</p><p>`    `) {</p><p>`      `throw new Error("Invalid Information!");</p><p>`    `}</p><p>`    `let totalPrice = exhibitionCosts + insuranceCosts;</p><p>`    `if (sponsor) {</p><p>`      `totalPrice \*= 0.9;</p><p>`      `return `Exhibition and insurance costs are ${totalPrice}$, reduced by 10% with the help of a donation from your sponsor.`;</p><p>`    `} else {</p><p>`      `return `Exhibition and insurance costs are ${totalPrice}$.`;</p><p>`    `}</p><p>`  `},</p><p></p><p>`  `organizeExhibits(artworksCount, displaySpacesCount) {</p><p>`    `if (</p><p>`      `typeof artworksCount !== "number" ||</p><p>`      `typeof displaySpacesCount !== "number" ||</p><p>`      `artworksCount <= 0 ||</p><p>`      `displaySpacesCount <= 0</p><p>`    `) {</p><p>`      `throw new Error("Invalid Information!");</p><p>`    `}</p><p></p><p>`    `let artworksPerSpace = Math.floor(artworksCount / displaySpacesCount);</p><p></p><p>`    `if (artworksPerSpace < 5) {</p><p>`      `return `There are only ${artworksPerSpace} artworks in each display space, you can add more artworks.`;</p><p>`    `} else {</p><p>`      `return `You have ${displaySpacesCount} display spaces with ${artworksPerSpace} artworks in each space.`;</p><p>`    `}</p><p>`  `},</p><p>};</p><p> </p>|

**Submission**

Submit your tests inside a **describe()** statement, as shown above.




![](Aspose.Words.90214f16-c3ba-4843-8106-b0407bb91bb1.003.png)![](Aspose.Words.90214f16-c3ba-4843-8106-b0407bb91bb1.004.png)![](Aspose.Words.90214f16-c3ba-4843-8106-b0407bb91bb1.005.png)![](Aspose.Words.90214f16-c3ba-4843-8106-b0407bb91bb1.006.png)![](Aspose.Words.90214f16-c3ba-4843-8106-b0407bb91bb1.007.png)![](Aspose.Words.90214f16-c3ba-4843-8106-b0407bb91bb1.008.png)![](Aspose.Words.90214f16-c3ba-4843-8106-b0407bb91bb1.009.png)![](Aspose.Words.90214f16-c3ba-4843-8106-b0407bb91bb1.010.png)![](Aspose.Words.90214f16-c3ba-4843-8106-b0407bb91bb1.011.png)


![](Aspose.Words.90214f16-c3ba-4843-8106-b0407bb91bb1.001.png)![](Aspose.Words.90214f16-c3ba-4843-8106-b0407bb91bb1.002.png)![](Aspose.Words.90214f16-c3ba-4843-8106-b0407bb91bb1.012.png)![](Aspose.Words.90214f16-c3ba-4843-8106-b0407bb91bb1.013.png)![](Aspose.Words.90214f16-c3ba-4843-8106-b0407bb91bb1.014.png)

