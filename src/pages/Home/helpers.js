export function setElementsToArrayById(array) {
    return array.map((element) => {
        return document.getElementById(element)
    })
}