function switchClick(){
    if (document.getElementById('monthly').style.borderColor == "white") {
      document.getElementById('monthly').style.borderColor = "#2500F9";
      document.getElementById('monthly').style.backgroundColor = "#2500F9";
      document.getElementById('monthly').style.color = "white";
      document.getElementById('annually').style.borderColor = "white";
      document.getElementById('annually').style.backgroundColor = "white";
      document.getElementById('annually').style.color = "#898A8E";
    } else {
      document.getElementById('monthly').style.borderColor = "white";
      document.getElementById('monthly').style.backgroundColor = "white";
      document.getElementById('monthly').style.color = "#898A8E";
      document.getElementById('annually').style.borderColor = "#2500F9";
      document.getElementById('annually').style.backgroundColor = "#2500F9";
      document.getElementById('annually').style.color = "white";
    }
  }

function myFunction(){
  if (document.getElementsByClassName("fas fa-plus item-1") .classList[1] == "fa-plus") {
    document.getElementById("fontAwesomeItem").classList.replace("fa-plus", "fa-minus");
  } else {
    document.getElementById("fontAwesomeItem").classList.replace("fa-minus", "fa-plus");
  }
}



// function for accordion & slider
var acc = document.getElementsByClassName("page10-item-header");
var pan = document.getElementsByClassName("page10-item-text");
var testimonials = document.getElementsByClassName("testimonial");
var testimonialItem = document.getElementsByClassName("testimonial-item-image");
// testimonialItem[0].style.backgroundImage = 'url(images/guy.png)';
// testimonialItem[1].style.backgroundImage = 'url(images/testimonial-item-image-1.jpg)';
// testimonialItem[2].style.backgroundImage = 'url(images/testimonial-item-image-2.jpg)';
// testimonialItem[3].style.backgroundImage = 'url(images/testimonial-item-image-3.jpg)';
testimonials[0].style.maxHeight = "none";
testimonials[0].style.maxWidth = "none";
var leftArrow = document.getElementsByClassName("arrow-left");
var rightArrow = document.getElementsByClassName("arrow-right");
for (let index = 0; index < rightArrow.length; index++) {
  leftArrow[index].addEventListener("click", function(){

    var testimonial = this.parentElement.parentElement.parentElement;
    var chey;
    for (let pindex = 0; pindex < testimonials.length; pindex++) {
      if (testimonial == testimonials[pindex]) {
        chey = pindex;
      }
    }
    if (testimonials[chey - 1]) {
      chey = chey - 1;
    } else {
      chey = testimonials.length - 1;
    }
    var previousTestimonial = testimonials[chey];
    testimonial.style.maxHeight = null;
    testimonial.style.maxWidth = null;
    previousTestimonial.style.maxHeight = "none";
    previousTestimonial.style.maxWidth = "none";
  });
  rightArrow[index].addEventListener("click", function(){

    var testimonial = this.parentElement.parentElement.parentElement;
    var chey;
    for (let pindex = 0; pindex < testimonials.length; pindex++) {
      if (testimonial == testimonials[pindex]) {
        chey = pindex;
      }
    }
    if (testimonials[chey + 1]) {
      chey = chey + 1;
    } else {
      chey = 0;
    }
    var nextTestimonial = testimonials[chey];
    testimonial.style.maxHeight = null;
    testimonial.style.maxWidth = null;
    nextTestimonial.style.maxHeight = "none";
    nextTestimonial.style.maxWidth = "none";
  });
}

pan[0].style.maxHeight = pan[0].scrollHeight + "px";

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(){
    for (let index = 0; index < pan.length; index++) {
      acc[index].classList.remove("active");
      pan[index].style.maxHeight = null;
    }
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}