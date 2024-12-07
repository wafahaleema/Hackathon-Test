// let image = document.getElementById("retrievedImage");
// console.log(image.src);  
// let displayimage = document.getElementById("afterClick");
// let box = document.getElementById("box");

// box.style.display = "none";

console.log(new Date().getDate());



// image.addEventListener("click", function() {
 
//     if (box.style.display === "none") {
//         box.style.display = "flex";  
//         displayimage.src = image.src;  
//     } else {
//         box.style.display = "none";  
//         displayimage.src = "";  
//     }
// })

// displayimage.src = image.src;


// const cardData = [
//     {
//         date: new Date().getDate(),
//         day: new Date().getDay()
//     }
// ]
// document.getElementById("h1").innerText = 

// Array of objects with data for each card
const cardData = [
    {
      heading: "Powerful Trading Tools and Features for Experienced Investors",
      paragraph: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world.Then, I try to find reasons why it wouldn’t work...",
      bottom: {
        name: "By Mark Tuchel",
        date: new Date().toLocaleDateString()
      },
      button:"TOOLs"

    },
    {
      heading: "We are implementing AI and Technology",
      paragraph: "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
      bottom: {
        name: "By Harry Oland",
        date: new Date().toLocaleDateString()
      },
      button:"AI"
    }
  ];
  

  const cardContainer = document.getElementById("card");
  
  
  cardContainer.innerHTML = cardData
    .map(
      (data) => `
        <div class="card p-4 mb-4">
          <h1 class="text-xl font-bold mb-2">${data.heading}</h1>
          <p class="text-gray-600 mb-4">${data.paragraph}</p>
          <div class="flex justify-between items-center mt-4">
            <button class="bg-white-500 text-[#797979] border border-[#797979] px-2 py-1 rounded-[10px]">${data.button}</button>
            <span class="text-sm text-gray-500">${data.bottom.name} - ${data.bottom.date}</span>
          </div>
        </div>
      `
    )
    .join("");
  





    