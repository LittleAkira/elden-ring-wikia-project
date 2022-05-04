class Equipment {
    constructor(img, name, stat, scaling){
        this.img = img;
        this.name = name;
        this.stat = stat;
        this.scaling = scaling;
    }
}

const dagger1 = new Equipment ("img","Pugnale", 23, 28);
const dagger2 = new Equipment ("img", "Pugnale corto", 24, 30);


const daggerArray = [dagger1, dagger2];


function writeTable (array){
    const container = document.getElementById("menu-table");
    for (const element of array) {
        const row = document.createElement("tr");

        const col1 = document.createElement("td");
        const data1 = document.createElement("img");
        col1.appendChild(data1);
        row.appendChild(col1);

        const col2 = document.createElement("td");
        const data2 = document.createTextNode(element.name);
        col2.appendChild(data2);
        row.appendChild(col2);

        const col3 = document.createElement("td");
        const data3 = document.createTextNode(element.stat);
        col3.appendChild(data3);
        row.appendChild(col3);

        const col4 = document.createElement("td");
        const data4 = document.createTextNode(element.scaling);
        col4.appendChild(data4);
        row.appendChild(col4);


        container.appendChild(row);
    }
}


writeTable(daggerArray);