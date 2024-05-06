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

function numValue(output, input){
    // Returns a numeric value of an input field
    output = Number(document.querySelector(input).value);
    return output;
}

function fieldMaker(input1, input2, name1, name2){
    // Creates a specified amount of fieldsets with 2 input fields, creates an array for each input type .
    if (input1 >= 5 && input1 <= 20 && input2 > 0 && input1 >= input2){
        for (let i = 0; i < input1; i++){
            let field = document.createElement("fieldset");
            let label1 = document.createElement("label");
            let label2 = document.createElement("label");
            let output1 = document.createElement("input");
            let output2 = document.createElement("input");
            field.appendChild(label1).innerHTML = `${i + 1} ${name1}`;
            fNames.push(output1);
            field.appendChild(output1);
            field.appendChild(label2).innerHTML = `${name2} `;
            lNames.push(output2);
            field.appendChild(output2);
            form.appendChild(field);
        }
    }
}

function merge(list1, list2, newList){
    // Merges the sames indexes of two arrays and adds them into a new array.
    for (index in list1){
        newList.push(`${list1[index].value} ${list2[index].value}`);
    }
    return newList;
}

function scramble(array) {
    // Randomizes the order of array elements.
    let index = array.length;
    while (index != 0){
        let rIndex = Math.floor(Math.random() * index);
        index--;
        [array[index], array[rIndex]] = [array[rIndex], array[index]];
    }
    return array;
}

function listMaker(section, listNr, listName, list){
    // Creates a list.
    let groups = document.querySelector(section);
    for (let i = 0; i < listNr; i++){
        let group = document.createElement("ul");
        group.classList.add(`group${i + 1}`);
        groups.appendChild(group).innerHTML = `${listName} ${i + 1}`;
    }
    let groupId = 0;
    for (index of list){
        groupId ++;
        document.querySelector(`.group${groupId}`).appendChild(document.createElement("li")).innerHTML = index;
        if (groupId == listNr){
            groupId = 0;
        }
    }
}

createForm.addEventListener("click", () => {
    groupNr = numValue(groupNr, ".groupNr");
    personNr = numValue(personNr, ".personNr");
    fieldMaker(personNr, groupNr, "Vardas", "Pavarde");
    form.appendChild(submitButton).innerHTML = "Isskirstyti i grupes";
    createForm.disabled = "true";
})

submitButton.addEventListener("click", () => {
    merge(fNames, lNames, names);
    scramble(names);
    listMaker(".groups", groupNr, "Group", names);
    submitButton.disabled = "true";
})