let myfrom = document.querySelector("form");
let myTbala = document.querySelector("#myData");
addEventListener("DOMContentLoaded", async () => {
    let res = await (await fetch("https://6509d043f6553137159c1059.mockapi.io/tabla")).json();
    for (let i = 0; i < res.length; i++) {
        const newRow = document.createElement("tr");
        newRow.insertAdjacentElement = `
        <td>${res[i].id}</td>
        <td>${res[i].valor}</td>
        <td>${res[i].caja}</td>
    `;

        myTbala.appendChild (newRow);
    }
})

myfrom.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const { valor } = data
    data.valor = (typeof valor === "string") ? Number(valor) : null;
    let config = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
    };
    let res = await (await fetch("https://6509d043f6553137159c1059.mockapi.io/tabla", config)).json();
    console.log(res);
})




