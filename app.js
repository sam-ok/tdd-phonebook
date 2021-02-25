//Select DOM
const contactInput = document.querySelector(".contact-input");
const contactButton = document.querySelector(".contact-button");
const contactList = document.querySelector(".contact-list");

//Event Listeners
document.addEventListener("DOMContentLoaded", getcontacts);
contactButton.addEventListener("click", addcontact);
contactList.addEventListener("click", deletecontact);

//Functions
function addcontact(e) {
  //Prevent natural behaviour
  e.preventDefault();
  //Create contact div
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");
  //Create list
  const newcontact = document.createElement("li");
  newcontact.innerText = contactInput.value;
  //Save to local
  saveLocalcontacts(contactInput.value);

  newcontact.classList.add("contact-item");
  contactDiv.appendChild(newcontact);
  contactInput.value = "";

  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  contactDiv.appendChild(trashButton);
  //attach final contact
  contactList.appendChild(contactDiv);
}

function deletecontact(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const contact = item.parentElement;
    contact.classList.add("fall");
    //at the end
    removeLocalcontacts(contact);
    contact.addEventListener("transitionend", e => {
      contact.remove();
    });
  }
}

// Saving to local storage.
function saveLocalcontacts(contact) {
  let contacts;
  if (localStorage.getItem("contacts") === null) {
    contacts = [];
  } else {
    contacts = JSON.parse(localStorage.getItem("contacts"));
  }
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
}


function removeLocalcontacts(contact) {
  let contacts;
  if (localStorage.getItem("contacts") === null) {
    contacts = [];
  } else {
    contacts = JSON.parse(localStorage.getItem("contacts"));
  }
  const contactIndex = contact.children[0].innerText;
  contacts.splice(contacts.indexOf(contactIndex), 1);
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function getcontacts() {
  let contacts;
  if (localStorage.getItem("contacts") === null) {
    contacts = [];
  } else {
    contacts = JSON.parse(localStorage.getItem("contacts"));
  }
  contacts.forEach(function(contact) {
    //Create contact div
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");
    //Create list
    const newcontact = document.createElement("li");
    newcontact.innerText = contact;
    newcontact.classList.add("contact-item");
    contactDiv.appendChild(newcontact);
    contactInput.value = "";
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    contactDiv.appendChild(trashButton);
    //attach final contact
    contactList.appendChild(contactDiv);
  });
}
