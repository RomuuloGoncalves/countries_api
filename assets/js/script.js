const urlDefault = `https://restcountries.com/v3.1/all`
const countries = document.querySelector(".countries")
const select = document.querySelector("#select")
const input = document.querySelector("#input")


async function API(url) {
    return fetch(url)
        .then(response => response.json())


}

async function createLayout(url = urlDefault) {
    let dados = await API(url)
    console.log(dados)
    countries.innerHTML = ""
    let contador = 0
    dados.forEach((element, index) => {
        if (contador % 4 == 0) {
            row = document.createElement("div")
            row.classList.add("row", "d-flex", "justify-content-around", "flex-wrap", "my-5");
            countries.appendChild(row)

        }

        let card = document.createElement("div")
        card.classList.add("card", "shadow")
        card.style.width = "18rem"

        card.innerHTML = `
        <img src="${element.flags.png}" class="card-img-top flags" alt="${element.name.common}">
        <div class="card-body">
          <h5 class="card-title">${element.name.common}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><b>Population:</b> ${element.population}</li>
          <li class="list-group-item"><b>Reegion:</b> ${element.region}</li>
          <li class="list-group-item"><b>Capital:</b> ${element.capital}</li>

        </ul>
      `;
        contador++
        row.appendChild(card)
    });
}

select.addEventListener("change", ()=>{
    let selected = select.value
    filterSelect(selected)
})

input.addEventListener("input", ()=>{
    let value = input.value
    filterInput(value)
})

function filterSelect(region){
    let options = {
        0: "all",
        1: "africa",
        2: "america",
        3: "asia",
        4: "europe",
        5: "oceania"
    }
    console.log(options[region])
    region != 0 ?  createLayout(`https://restcountries.com/v3.1/region/${options[region]}`) : createLayout(urlDefault)
    
}

function filterInput(name){
    let nameCountrie = name.trim()
    let newUrl = `https://restcountries.com/v3.1/name/${nameCountrie}`
    nameCountrie != "" ? createLayout(newUrl) : createLayout(urlDefault)
}