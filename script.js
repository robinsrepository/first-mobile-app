import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
import { getDatabase,
         ref,
         push,
        onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-94ead-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads");

// console.log(app)
// console.log(database)
// console.log(firebaseConfig.databaseURL);

let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>`;
     }
    ulEl.innerHTML = listItems;
}

onValue(referenceInDB, function(snapshot) {
    console.log(snapshot.val());
})

deleteBtn.addEventListener("dblclick", function() {

})

inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value);
    inputEl.value = "";
});