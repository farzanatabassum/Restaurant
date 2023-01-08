const filterItems = (foodCategory) => {
  console.log(foodCategory);
  fetch("./menu.json")
    .then((response) => response.json())
    .then((data) => {
      //   if (foodCategory === "all") {
      //     console.log(data);
      //     return data;
      //   }
      //   let modifydata = data.filter((foodItem) => {
      //     if (foodItem.category === foodCategory) {
      //       return foodItem;
      //     }
      //   });
      //   console.log(modifydata);
      //   return modifydata;

      addCards(data, foodCategory);
    });
};

const displayFoodItems = (food, foodCategory) => {
  console.log("food", food);
  const container = document.getElementById("fooditems");
  if (foodCategory === "all") {
    console.log("foodCategory", foodCategory);
    const foodCard = document.createElement("div");
    // foodCard.className = "food-card";

    // const foodImage = document.createElement("div");
    // foodImage.className = "food-image";
    // // foodImage.appendChild(img);

    // const foodname = document.createElement("div");
    // foodname.className = "food-name";

    // const foodprice = document.createElement("div");
    // foodprice.className = "food-price";

    // const fooddesc = document.createElement("div");
    // fooddesc.className = "food-description";

    // const foodpics = document.createElement("img");
    // const fooddetails = document.createElement("div");
    const foodTitle = document.createElement("h3");
    foodTitle.innerText = food.name;
    // const foodPrice = document.createElement("h4");

    // const cardTitle = document.createElement("div");
    // cardTitle.className = "card-title";
    // // cardTitle.appendChild(h3, h4);
    // foodTitle.className = "food-title";
    // foodTitle.className = "food-price";

    // <div class="food-card">
    //   {/* food image  */}
    //   <div class="food-image">
    //     <img src="${food.image}" alt="food image" />
    //   </div>

    //   {/* <!-- food details --> */}
    //   <div class="food-details">
    //     {/* <!-- card title --> */}
    //     <div class="card-title">
    //       <h3 class="food-title">${food.name}</h3>
    //       <h4 class="food-price">${food.price}</h4>
    //     </div>
    //     <hr />
    //     <div class="food-details">${food.description}</div>
    //   </div>
    // </div>;

    container.appendChild(foodTitle);
    console.log(container);
    return container;
  }

  //   let modifydata = data.filter((foodItem) => {
  //     if (foodItem.category === foodCategory) {
  //       return foodItem;
  //     }
  //   });
  //   console.log(modifydata);
  //   return modifydata;
};

let foodCategory = "all";
function init() {
  filterItems(foodCategory);
}

function addCards(data, foodCategory) {
  let categorygrid = document.getElementById("fooditems");
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(i);
    let carditem = displayFoodItems(data[i], foodCategory);
    console.log(carditem);
    categorygrid.appendChild(carditem);
  }
}
init();
