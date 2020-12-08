/* Add any JavaScript you need to this file. */
cars = [


{
    category: ["two-door", "in stock"],
    name: "2020 Mercedes-Benz AMG GT",
    description: "This F1 featured safety car is powered by a 550-hp, twin-turbo 4.0-litre V8 mated to a seven-speed dual-clutch transmission.",
    price: "$100,000", 
    image: "pics/amg gt.jpg"
},

{
    category: ["two-door", "in stock"],
    name: "2020 BMW M8",
    description: "The M8 is powered by a twin-turbocharged 4.4-liter V-8, which makes 600 horsepower and 553 lb-ft of torque.",
    price: "$158,000", 
    image: "pics/bmw m8.jpg"
},

{
    category: ["sedan", "in stock"],
    name: "2020 Audi S8",
    description: "With its 4.0-liter twin-turbo V-8, the S8 puts out 563 horsepower and 590 lb-ft of torque.",
    price: "$153,200", 
    image: "pics/audi s8.jpg"
},

{
    category: ["two-door", "in stock"],
    name: "2020 Lexus LC",
    description: "The same 5.0L V8 found in the beloved RC F. A 10-speed automatic gearbox outputs the 471 horsepower to the rear wheels. ",
    price: "$118,600", 
    image: "pics/lexus lc.jpg"
},

{
    category: ["SUV", "in stock"],
    name: "2020 Audi Q8",
    description: "The turbocharged TFSI® V6 engine delivers a breath-taking 335 horsepower straight to its AWD Quattro® system.",
    price: "$82,550", 
    image: "pics/q8.jpg"
},


{
    category: ["two-door", "in stock"],
    name: "2020 Porsche Taycan",
    description: "The Taycan 4S, Turbo and Turbo S drive all four wheels with two electric motors. The peak outputs of 522 horsepower (4S with base battery).",
    price: "$119,400", 
    image: "pics/porsche taycan.jpg"
},

{
    category: ["SUV", "in stock"],
    name: "2021 Land Rover Velar",
    description: "A great choice for a family sport car, the Velar comes with a super-charged V8 engine. The engine is capabile of pumping out 557HP.",
    price: "$63,500", 
    image: "pics/land rover velar.jpg"

},

{
    category: ["SUV", "electric", "in stock"],
    name: "2020 Tesla Model X",
    description: "Just because you drive a SUV doesn't mean you can't go fast, and just because you can go fast doesn't mean you can't be safe. The Model X comes with active collison detection",
    price: "$111,600", 
    image: "pics/model x.jpeg"

},

{
    category: ["two-door", "in stock"],
    name: "2020 Bently Continental",
    description: "The 2020 Bentley Continental GT is a four-passenger premium luxury coupe that is also available as a convertible.",
    price: "$227,290", 
    image: "pics/bently continental.jpg"

},

{
    category: ["SUV", "electric", "in stock"],
    name: "Audi E-tron",
    description: "The Audi e-tron is the first full-electrical model from the brand with the four rings. The sporty SUV combines the space and comfort of a typical luxury class automobile.",
    price: "$90,000", 
    image: "pics/audi e tron.jpeg"

},

{
    category: ["electric", "sedan", "in stock"],
    name: "2018 Tesla Model S",
    description: "Tesla's all-electric powertrain delivers unparalleled performance in all weather conditions – with Dual Motor All-Wheel Drive, adaptive air suspension and ludicrous acceleration.",
    price: "$100,600", 
    image: "pics/model s.jpg"

},

{
    category: ["electric", "two-door", "in stock"],
    name:  "2019 BMW i8",
    description: "BMWs iconic electric sports car. The 2015 BMW i8 accelerates from 0 to 100 km/h (62 mph) in 4.4 seconds and has an electronic limited top speed of 250 km/h",
    price: "$149,900",
    image: "pics/i8.jpg"
},

{
    category: ["SUV", "in stock"],
    name:  "2019 Lamborghini Urus",
    description: "Emphasizes the S in SUV. Powered by a 4.0-liter twin-turbo V8 engine producing 650 CV and 850 Nm of torque, Urus accelerates from 0 to 62 mph in 3.6 seconds and reaches a top speed of 190 mph.",
    price: "$252,695",
    image: "pics/lamborghini-urus.jpg"

},

{
    category: ["two-door", "in stock"],
    name:  "2019 Porshce Cayman",
    description: "Rarer than the 911, this mid-engine Porsche is capible of reaching speeds up to 170mph. This car makes for a great daily driver and is offered at a price which is lower than what the car provides.",
    price: "$59,900",
    image: "pics/cayman.jpg"

}

];


function displayCars(cars, category){

    clearCars();
    
    let cards = document.createElement('div');
    cards.classList = "row";

    cards.id = "cards";


let i = 0;
    for (i = 0; i < cars.length; i++){

        let x = 0;
        for (x = 0; x <= cars[i].category.length; x++){

            if(cars[i].category[x] == category){

                let card = document.createElement('div');
                card.classList = "col";
        
                card.classList.add("col-md-6");
                card.classList.add("col-lg-4");
                card.classList.add("d-flex");
                card.classList.add("align-tmes-stretch");
        
        
                let div = document.createElement('div');
        
                
                div.classList = "card";
                div.style = "width: 18rem"
        
                let carImg = document.createElement('img')
                carImg.classList="card-img-top"
                carImg.src=cars[i].image;
                carImg.style = "width: 17.9rem"
                carImg.style = "object-fit: contain"
        
                let bodyDiv = document.createElement('div');
                bodyDiv.classList = "card-body";
        
                let headerFive = document.createElement('h5')
                headerFive.classList="card-title"
                headerFive.innerHTML = cars[i].name;
        
                let lineOne = document.createElement('hr')
                lineOne.style = "border-top: 1px solid black;"
        
                let lineTwo = document.createElement('hr')
                lineTwo.style = "border-top: 1px solid black;"
        
                let price = document.createElement('h5');
                price.innerHTML = cars[i].price;
        
                let p = document.createElement('p');
                p.classList = "card-text";
                p.innerHTML = cars[i].description;
                
                bodyDiv.appendChild(headerFive);
                bodyDiv.appendChild(lineOne)
                bodyDiv.appendChild(p);
                bodyDiv.appendChild(lineTwo)
                bodyDiv.appendChild(price)
        
                div.appendChild(carImg);
                div.appendChild(bodyDiv);
                div.classList.add("bg-info", "mb-3", "text-black")
        
                card.style = "padding-top: 100px;"
                card.style = "padding-left: 100px; padding-top: 100px;"
        
                card.appendChild(div);

                cards.appendChild(card);
                cards.classList="row"
            }
        }
    }

    document.body.append(cards)
}


function clearCars(){
    try {
    document.getElementById("cards").remove();
    }
    catch{};

    try {
        document.getElementById("hQuan").remove();
        document.getElementById("largebtn").remove();

        }
        catch{};


}


