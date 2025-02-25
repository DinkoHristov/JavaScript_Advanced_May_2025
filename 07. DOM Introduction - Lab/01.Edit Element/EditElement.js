function editElement(element, elementToReplace, newElement) {
    element.textContent = element.textContent.replaceAll(elementToReplace, newElement);
}