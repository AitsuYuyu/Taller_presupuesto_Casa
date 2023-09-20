let myfrom = document.querySelector("form");
let myTbala = document.querySelector("#myData");
addEventListener("DOMContentLoaded", async()=>{
    let res = await (await fetch("https://6509d043f6553137159c1059.mockapi.io/tabla")).json();
    for (let i = 0; i < res.length; i++){
        myTbala.insertAdjacentElement("beforeendd", ` 
        <tr>
            <td>${res[i].id}</td>
            <td>${res[i].valor}</td>
            <td>${res[i].caja}</td>
        </tr>
        `);
    }
})

myfrom.addEventListener("submit", (e) => {
    e.preventDefault();
    const data =Object.fromEntries(new FormData(e.target));
    const {valor} = data
    data.valor = (typeof valor === "string") ? Number(valor) : null;
    let config = {
        method: "POST",
        headers:{"content-type": "applicarion/json"},
        body: JSON.stringify(data)
    };
    let res = await (fetch ("https://6509d043f6553137159c1059.mockapi.io/tabla", config)).json();
    console.log(res);
})
