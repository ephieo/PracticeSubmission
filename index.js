let slideIndex = 0;
const slideShow () => {
const slides = document.getElementByClassName("myslides");
  console.log(slides);
for (let i =0; i < slides.length; i++){
slides[i].style.disply="none";
}
slideIndex++ 

};
slideShow();
