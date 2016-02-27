function changeButton() {
    var buttonText = document.getElementById("like-unlike").innerHTML;
 
    if (buttonText === 'Like') {
        buttonText = 'Unlike';
    } else {
        buttonText = 'Like';
    }
 
    document.getElementById("like-unlike").innerHTML = buttonText;
}
/*var likeButton = document.getElementById("like-unlike");*/
document.getElementById("like-unlike").addEventListener("click", changeButton, false);