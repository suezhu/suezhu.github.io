var middleRightText = "<p><b><a href='" + rootPath + "2020/ToDoNotToDo/index.html'>To Do Or Not To Do</a></b></p>" + 
"<p><b><a href='" + rootPath + "2020/Neowise/index.html'>Neowise</a></b></p>" ;

document.getElementById("topLeft").innerHTML = "<a href='" + rootPath + "index.html'><img src='" + rootPath + "SueZhuSmall.gif' width='213' height='120'></a>";
document.getElementById("topRight").innerHTML = "<b><i><a href='mailto:admin@suezhu.com'>Email Me</a></i></b>";
document.getElementById("middleLeft").innerHTML = middleRightText;
//document.getElementById("middleRight").innerHTML = "<img src='IMG_0306.jpg' alt='I am Sue Zhu' width='324' height='403'>";



//Slide Show Functions
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (0 >= slides.length) {return;}   
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


//Image Modal Functions
function modalImgClick(img){
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt; 
}

function modalCloseClick(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}