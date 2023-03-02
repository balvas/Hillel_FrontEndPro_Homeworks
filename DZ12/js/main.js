function switchPicture() {
    let pictureSrc = "images/" + (Math.floor(Math.random() * 9) + 1) + ".jpg";
    console.log(`${pictureSrc}`);
    document.getElementById("img").src = pictureSrc;
}
const switcherButton = document.getElementById('randomPicture');
switcherButton.addEventListener('click', switchPicture);