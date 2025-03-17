
**03. Streaming Service Selector**

**Your Task**

Using **Mocha** and **Chai** write **JS Unit Tests** to test a variable named **streamingServiceSelector**, which represents an object. You may use the following code as a template:

|<p>describe(**"*Tests* …"**, **function**() {</p><p>`    `describe(**"*TODO* …"**, **function**() {<br>`        `***it***(**"*TODO …*"**, **function**() {</p><p>`            `*// **TODO:*** …</p><p>`        `});</p><p>`     `});<br>`     `*// **TODO:*** …</p><p>});</p>|
| :- |

The object should have the following functionality:				

- **selectingContent(type, platform, genre) -** A function that accepts **three** parameters:
  - **type**: **string** (either "Movie" or "TV Show"),
  - **platform**: **string** (name of the streaming platform, e.g., "Netflix"),
  - **genre**: **string** (type of genre, e.g., "Action", "Comedy", etc.).

- If the value of **genre** is not in the list of supported genres (["Action", "Comedy", "Drama", "Thriller", "Horror", "Romance", "Sci-Fi"]), **throw** an error: 

  **"We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi."**

- If the value of **type** is different from "**Movie**" or "**TV Show**", **throw** an error:

  ` `**"We currently only support 'Movie' or 'TV Show' types."**

- If all inputs are **valid**, **return** the following message:

  **"You can watch this {genre} {type} on {platform}. Enjoy your {genre}-filled experience!"**

- **availablePlatforms(platforms, <a name="_hlk177392085"></a>selectedPlatformIndex) -** A function that accepts an **array** and **number**. The **platforms** array will store the brand names **(["Netflix", "HBO", "Disney+"])** and **selectedPlatformIndex** is an integer that specifies the index of the currently selected platform**.**
  - You must **remove** the **platform** located at the **selectedPlatformIndex** from the array.
  - Finally, **return** the following string:

**"Other available platforms are: {platform}, …, {platform}."**

- There is a **need for validation** of the input, the **array** and index may not always be valid. In case of submitted **invalid** parameters, **throw** an error **"Invalid platform selection."**
  - If passed **platforms** parameter** is **not** an array.
  - If the **selectedPlatformIndex** is not a number and is outside the limits of the array.

- **contentRating(runtimeInMinutes, viewerRating) -** A function that accepts two parameters: 
  - **runtimeInMinutes**: a **number** representing the runtime of the content in minutes.
  - **viewerRating**: a **number** representing the viewer's rating of the content (range: 0 to 10).
- Convert **runtimeInMinutes** to hours (formatted to two decimal places) and validate both inputs. 
- If **viewerRating** is **greater** than or **equal** to 7, **return** the following message:

  **"This content is highly rated ({viewerRating}/10) and has a runtime of {runtimeInHours} hours. Enjoy your watch!"**

- If **viewerRating** is **less** than 7, **return** the following message: 

  **"This content has a lower rating ({viewerRating}/10) and runs for {runtimeInHours} hours. You might want to check reviews first."**

- You **need to validate** the input, if **runtimeInMinutes** is **not** a positive number, or **viewerRating** is **not** a number between 0 and 10, **throw** an error: **"Invalid runtime or rating."**

**JS Code**

To ease you in the process, you are provided with an implementation that meets all of the specification requirements for the **streamingServiceSelector** object:

|**streamingServiceSelector.js**|
| :-: |
|<p>const streamingServiceSelector = {</p><p>`    `selectingContent(type, platform, genre) {</p><p>`        `const supportedGenres = ["Action", "Comedy", "Drama", "Thriller", "Horror", "Romance", "Sci-Fi"];</p><p>`        `if (!supportedGenres.includes(genre)) {</p><p>`            `throw new Error(`We currently support these genres: ${supportedGenres.join(", ")}.`);</p><p>`        `}</p><p>`        `if (type !== "Movie" && type !== "TV Show") {</p><p>`            `throw new Error(`We currently only support 'Movie' or 'TV Show' types.`);</p><p>`        `}</p><p>`        `return `You can watch this ${genre} ${type} on ${platform}. Enjoy your ${genre}-filled experience!`;</p><p>`    `},</p><p></p><p>`    `availablePlatforms(platforms, selectedPlatformIndex) {</p><p>`        `if (!Array.isArray(platforms) || !Number.isInteger(selectedPlatformIndex) ||</p><p>`            `selectedPlatformIndex < 0 || selectedPlatformIndex >= platforms.length) {</p><p>`            `throw new Error("Invalid platform selection.");</p><p>`        `}</p><p>`        `let available = platforms.filter((\_, index) => index !== selectedPlatformIndex);</p><p>`        `return `Other available platforms are: ${available.join(", ")}.`;</p><p>`    `},</p><p></p><p>`    `contentRating(runtimeInMinutes, viewerRating) {</p><p>`        `let runtimeInHours = (runtimeInMinutes / 60).toFixed(2);</p><p>`        `if (typeof runtimeInMinutes !== "number" || runtimeInMinutes <= 0 ||</p><p>`            `typeof viewerRating !== "number" || viewerRating < 0 || viewerRating > 10) {</p><p>`            `throw new Error("Invalid runtime or rating.");</p><p>`        `}</p><p>`        `if (viewerRating >= 7) {</p><p>`            `return `This content is highly rated (${viewerRating}/10) and has a runtime of ${runtimeInHours} hours. Enjoy your watch!`;</p><p>`        `} else {</p><p>`            `return `This content has a lower rating (${viewerRating}/10) and runs for ${runtimeInHours} hours. You might want to check reviews first.`;</p><p>`        `}</p><p>`    `}</p><p>}</p>|

**Submission**

Submit your tests inside a **describe()** statement, as shown above.




![](Aspose.Words.73fa0e06-afeb-44de-93ea-d2f6db8ac19a.003.png)![](Aspose.Words.73fa0e06-afeb-44de-93ea-d2f6db8ac19a.004.png)![](Aspose.Words.73fa0e06-afeb-44de-93ea-d2f6db8ac19a.005.png)![](Aspose.Words.73fa0e06-afeb-44de-93ea-d2f6db8ac19a.006.png)![](Aspose.Words.73fa0e06-afeb-44de-93ea-d2f6db8ac19a.007.png)![](Aspose.Words.73fa0e06-afeb-44de-93ea-d2f6db8ac19a.008.png)![](Aspose.Words.73fa0e06-afeb-44de-93ea-d2f6db8ac19a.009.png)![](Aspose.Words.73fa0e06-afeb-44de-93ea-d2f6db8ac19a.010.png)![](Aspose.Words.73fa0e06-afeb-44de-93ea-d2f6db8ac19a.011.png)


![](Aspose.Words.73fa0e06-afeb-44de-93ea-d2f6db8ac19a.001.png)![](Aspose.Words.73fa0e06-afeb-44de-93ea-d2f6db8ac19a.002.png)![](Aspose.Words.73fa0e06-afeb-44de-93ea-d2f6db8ac19a.012.png)![](Aspose.Words.73fa0e06-afeb-44de-93ea-d2f6db8ac19a.013.png)![](Aspose.Words.73fa0e06-afeb-44de-93ea-d2f6db8ac19a.014.png)

