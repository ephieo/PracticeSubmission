let slideIndex = 0;
const slideShow () => {
const slides = document.getElementByClassName("myslides");
  console.log(slides);
for (let i =0; i < slides.length; i++){
slides[i].style.disply="none";
}
slideIndex++ 
  if(slideIndex > slides.length){
  slideIndex = 1;
  }
  slides[slideIndex -1].style.display ="block";

};
slideShow();
