import {items} from "./data.js";

const formEle = document.getElementById("item-form");
const listEle = document.getElementById("list-container");
const placeInput = document.getElementById("place");
const imageInput = document.getElementById("image");
const locationInput = document.getElementById("location");
const linkInput = document.getElementById("link");
const dateInput = document.getElementById("date");

function addItem(e) {
    e.preventDefault();

    const place=placeInput.value;
    const image=imageInput.value;
    const location=locationInput.value;
    const link=linkInput.value;
    const plan=planInput.value;
    const date=dateInput.value;

    items.push({
        place: place,
        location: location,
        image: image,
        link: link,
        date: date,
        plan: plan,
    })


}

function renderList() {}
    listEle,innerHTML = items.map
        (item) =>
            <div class="card">
    <img src=${item.image} alt=${item.place} />
    <div class="card-content">
      <div class="card-header">
        <div class="card-header-text">
  
          <a target="_blank" 
          href=${item.link} ></a>
          <p>Paris</p>
        </div>
        <div class="card-header-action">
          <button><img src="./assets/edit-icon.svg" alt="edit button"></button>
          <button><img src="./assets/trash-icon.svg" alt="delete button"></button>
        </div>
      </div>
      <p>"Climbing up the Eiffel Tower is a must-do for me. Whether by elevator or stairs, 
        reaching the top for panoramic views of Paris is going to be unforgettable."
      </p>
      <p class="card-footer"> "09 September 2028"</p>
    </div>
  </div>

  renderList();
  formEle.addEventListener("submit " console.log("submit"))



    