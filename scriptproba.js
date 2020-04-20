// Create a "close" button and append it to each list item
function addLi() {
    var txtVal = document.getElementById('myInput').value;
    listNode = document.getElementById('list');
    liNode = document.createElement('LI');
    txtNode = document.createTextNode(txtVal);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);

}