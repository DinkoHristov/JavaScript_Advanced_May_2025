function pieceOfPie(pieFlavors, targetFlavorOne, targetFlavorTwo) {
    let flavorOneIndex = pieFlavors.indexOf(targetFlavorOne);
    let flavorTwoIndex = pieFlavors.indexOf(targetFlavorTwo);

    pieFlavors = pieFlavors.slice(flavorOneIndex, flavorTwoIndex + 1);

    return pieFlavors;
}