function updateCount(element) {
    //finding parent of the element
    var parent = element.parentNode
    //setting countNum variable to select the element with the userLikes class within the div's parent
    var countNum = parent.querySelector(".userLikes")
    countNum.innerText++
}
