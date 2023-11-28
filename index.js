// const container = document.querySelector(".more-info-of-property");
// const content = document.querySelector(".slider-content");
// let position = 0;

// //  x[slideIndex-1].style.display = 'block';
// function slide(direction) {
//   if (contentWidth <= 1800) {
//   document.getElementById("slide-right").disabled = true;
//   }
//   else {
//     document.getElementById("slide-right").disabled = false;
//   }

//   console.log("slide",slide)
//   const contentWidth = container.offsetWidth;
//   position -= direction * contentWidth;
//   position -= Math.min(0, Math.max(-contentWidth * 1 , position)); // Limit sliding within the visible area
//   content.style.transform = `translateX(${position}px)`;
//   content.slidewidth = 1;
// }

// // Add event listeners to slide left and right
// document.getElementById("slide-left").addEventListener("click", () => slide(0));
// document.getElementById("slide-right").addEventListener("click", () => slide(1.17));

// const container = document.querySelector(".more-info-of-property");
// const content = document.querySelector(".slider-content");
// let position = 0;

// function slide(direction) {
//   const contentWidth = container.offsetWidth;

//   // Add a width condition to disable the "slide-right" button
//   if (contentWidth <= 100 ) {
//     document.getElementById("slide-right").disabled = true;
//   } else {
//     document.getElementById("slide-right").disabled = false;
//   }

//   position -= direction * contentWidth;
//   position -= Math.min(0, Math.max(-contentWidth * 1, position)); // Limit sliding within the visible area
//   content.style.transform = `translateX(${position}px)`;
// }

// // Add event listeners to slide left and right
// document.getElementById("slide-left").addEventListener("click", () => slide(0));
// document.getElementById("slide-right").addEventListener("click", () => slide(1.17));

// const container = document.querySelector(".more-info-of-property");
// const content = document.querySelector(".slider-content");
// const slideRightBtn = document.getElementById("slide-right");
// let position = 0;

// function slide(direction) {
//   console.log("slide", direction);
//   const contentWidth = container.offsetWidth;
//   position -= direction * contentWidth;
//   position = Math.max(-contentWidth, Math.min(0, position));
//   content.style.transform = `translateX(${position}px)`;

//   // Check if there is more content to the right
//   const hasMoreContent = position < 0;
//   slideRightBtn.disabled = !hasMoreContent;
// }

// document.getElementById("slide-left").addEventListener("click", () => slide(-1));
// document.getElementById("slide-right").addEventListener("click", () => slide(1.17));

// // Disable "slide-right" initially if there is no content to the right
// slideRightBtn.disabled = position === 0;

// const container = document.querySelector(".more-info-of-property");
// const content = document.querySelector(".slider-content");
// const slideLeftBtn = document.getElementById("slide-left");
// const slideRightBtn = document.getElementById("slide-right");
// let position = 0;

// function slide(direction) {
//   console.log("slide", direction);
//   const contentWidth = container.offsetWidth;
//   position -= direction * contentWidth;
//   position = Math.max(-contentWidth, Math.min(0, position));
//   content.style.transform = `translateX(${position}px)`;

//   // Check if there is more content to the right
//   if (position < 0) {
//     slideRightBtn.disabled = false; // Enable "slide-right" button
//   } else {
//     slideRightBtn.disabled = true; // Disable "slide-right" button
//   }
// }

// // Add event listeners to slide left and right
// slideLeftBtn.addEventListener("click", () => slide(-1));
// slideRightBtn.addEventListener("click", () => slide(1.17));

// // Disable "slide-right" initially if there is no content to the right
// slideRightBtn.disabled = position === 0;

// const container = document.querySelector(".more-info-of-property");
// const content = document.querySelector(".slider-content");
// const slideLeftBtn = document.getElementById("slide-left");
// const slideRightBtn = document.getElementById("slide-right");
// let position = 0;

// function updateButtonState() {
//   const contentWidth = container.offsetWidth;
//   const totalContentWidth = content.scrollWidth;

//   // Check if there is more content to the right
//   if (totalContentWidth - Math.abs(position) > contentWidth) {
//     slideRightBtn.disabled = false; // Enable "slide-right" button
//   } else {
//     slideRightBtn.disabled = true; // Disable "slide-right" button
//   }
// }

// function slide(direction) {
//   console.log("slide", direction);
//   const contentWidth = container.offsetWidth;
//   position -= direction * contentWidth;
//   position = Math.max(-contentWidth, Math.min(0, position));
//   content.style.transform = `translateX(${position}px)`;

//   updateButtonState();
// }

// // Add event listeners to slide left and right
// slideLeftBtn.addEventListener("click", () => slide(-1));
// slideRightBtn.addEventListener("click", () => slide(1.17));

// // Disable "slide-right" initially if there is no content to the right
// updateButtonState();

const container = document.querySelector(".more-info-of-property");
const content = document.querySelector(".slider-content");
let position = 0;
function slide(direction) {
  const contentWidth = container.offsetWidth;
  const totalContentWidth = content.scrollWidth;

  position -= direction * contentWidth;
  position = Math.max(
    Math.min(position, 0),
    -(totalContentWidth - contentWidth)
  );

  if (window.innerWidth > 768) {
    if (position !== 0) {
      position = position - 155;
    }
  } else if (window.innerWidth <= 768) {
    if (position !== 0) {
      position = position - 78;
    }
  }
  if (window.innerWidth <= 375) {
    if (position !== 0) {
      position = position - -55;
    }
  }
  content.style.transform = `translateX(${position}px)`;

  document.getElementById("slide-right").disabled =
    position === -(totalContentWidth - contentWidth);
}

document
  .getElementById("slide-left")
  .addEventListener("click", () => slide(-1));
document
  .getElementById("slide-right")
  .addEventListener("click", () => slide(0.57));
