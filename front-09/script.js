const cars = [
    {
        brand: "Toyota",
        model: "corolla",
        year: 2020
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2019
    },
    {
        brand: "Ford",
        model: "Fiesta",
        year: 2014
    },
    {
        brand: "Ford",
        model: "Focus",
        year: 2018
    },
    {
        brand: "Fiat",
        model: "Uno",
        year: 2013
    }
];

/* Criando uma função */
function displayCars() {
    // Variável 
    const cardList = document.querySelector("#card-list");

    cars.forEach((car) => {
        console.log(car);
        // Criamos um elemento div pelo JavaScript
        const cardDiv = document.createElement("div");
        // criando uma classe css car
        cardDiv.classList.add("car");

        // Criando o modelo
        const cardModel = document.createElement("h2");
        cardModel.textContent = `${car.brand} ${car.model}`;

        // Criando o Ano
        const cardYear = document.createElement("p");
        cardYear.textContent = `Ano: ${car.year}`;

        cardDiv.appendChild(cardModel);
        cardDiv.appendChild(cardYear);

        cardList.appendChild(cardDiv);
        
    });
    
}

// Chamar a função
displayCars();
