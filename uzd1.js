// Sukurti  atsitiktinių grupių kūrimo aplikaciją.
// Formoje įvedama mokymų dalyvių duomenys: vardas ir pavardė.
// Tai pat  nurodoma kiek grupių sukurti.
// Mažiausias dalyvių skaičius   5, o didžiausias  20.
// Reikia užtikrinti duomenų validavimą, kad būtu pateikti teisingi duomenys ir neleistų kurti grupių jeigu yra įvesta mažiau, kaip 5 dalyviai.
// Paspaudžiamas mygtukas: Formuoti grupes.
// Mokymo dalyviai sumaišomi ir suformuojamos grupes pagal formoje nurodytą grupių skaičių.
// Grupės išvedamos ul listuose.

let form = document.querySelector(".persons");
createForm = document.querySelector(".createForm");
let fNames = [];
let lNames = [];
let names = []
let submitButton = document.createElement("button");
var groupNr
var personNr

createForm.addEventListener("click", () => {
    groupNr = Number(document.querySelector(".groupNr").value);
    personNr = Number(document.querySelector(".personNr").value);
    if (personNr >= 5 && personNr <= 20 && groupNr > 0 && personNr >= groupNr){
        for (let i = 0; i < personNr; i++){
            let newElement = document.createElement("fieldset");
            newElement.appendChild(document.createElement("label")).innerHTML = `${i + 1} Vardas `;
            let fName = document.createElement("input");
            fNames.push(fName);
            newElement.appendChild(fName);
            newElement.appendChild(document.createElement("label")).innerHTML = " Pavarde ";
            let lName = document.createElement("input")
            lNames.push(lName);
            newElement.appendChild(lName);
            newElement.appendChild(lName);
            form.appendChild(newElement);
        }
        form.appendChild(submitButton).innerHTML = "Isskirstyti i grupes";
        createForm.disabled = "true";
    }
})

submitButton.addEventListener("click", () => {
    event.preventDefault();
    for (name in fNames){
        names.push(`${fNames[name].value} ${lNames[name].value}`);
    }
    let index = names.length;
    while (index != 0){
        let rIndex = Math.floor(Math.random() * index);
        index--;
        [names[index], names[rIndex]] = [names[rIndex], names[index]];
    }
    let groups = document.querySelector(".groups");
    for (let i = 0; i < groupNr; i++){
        let group = document.createElement("ul");
        group.classList.add(`group${i + 1}`);
        groups.appendChild(group).innerHTML = `Group ${i + 1}`
    }
    let groupId = 0
    for (name of names){
        groupId ++;
        document.querySelector(`.group${groupId}`).appendChild(document.createElement("li")).innerHTML = name;
        if (groupId == groupNr){
            groupId = 0;
        }
    }
    submitButton.disabled = "true";
})

