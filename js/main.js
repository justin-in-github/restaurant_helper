const restaurants = [
    {
    name: "Perle",
    distance: "<2km",
    price: "Günstig",
    veggy: "Sehr",
    adress: "Spitalerstraße 22, 20095 Hamburg",
    category: "Alles",
    imgSrc: "https://images.unsplash.com/photo-1601306483417-134e652e544f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
    name: "Europapassage",
    distance: "<2km",
    price: "Mittel",
    veggy: "Sehr",
    adress: "Ballindamm 40 EG2, 20095 Hamburg",
    category: "Alles",
    imgSrc: "https://images.unsplash.com/photo-1572103900992-23b4bb92e6e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
    name: "Max & Consorten",
    distance: ">5km",
    price: "Günstig",
    veggy: "Mittel",
    adress: "Spadenteich 1, 20099 Hamburg",
    category: "Hausmannskost",
    imgSrc: "https://images.unsplash.com/photo-1558013891-da4959724894?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
    name: "Luigi's",
    distance: ">5km",
    price: "Mittel",
    veggy: "Sehr",
    adress: "Ditmar-Koel-Straße 21, 20459 Hamburg",
    category: "Pizza/Pasta",
    imgSrc: "https://images.unsplash.com/photo-1584536286788-78ae81c2c54e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2000&q=80"
    },
    {
    name: "Bella Italia",
    distance: "2-5km",
    price: "Günstig",
    veggy: "Mittel",
    adress: "Brandstwiete 58, 20457 Hamburg",
    category: "Pizza/Pasta",
    imgSrc: "https://images.unsplash.com/photo-1601306483417-134e652e544f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
    name: "Restaurant Kabul",
    distance: ">5km",
    price: "Günstig",
    veggy: "Mittel",
    adress: "Steindamm 53, 20099 Hamburg",
    category: "Sonstiges",
    imgSrc: "https://images.unsplash.com/photo-1572103900992-23b4bb92e6e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
    name: "Goot",
    distance: "2-5km",
    price: "Teuer",
    veggy: "Schlecht",
    adress: "Depenau 10, 20095 Hamburg",
    category: "Hausmannskost",
    imgSrc: "https://images.unsplash.com/photo-1558013891-da4959724894?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
    name: "O-ren Ishii",
    distance: "2-5km",
    price: "Teuer",
    veggy: "Sehr",
    adress: "Kleine Reichenstraße 18, 20457 Hamburg",
    category: "Asiatisch",
    imgSrc: "https://images.unsplash.com/photo-1584536286788-78ae81c2c54e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2000&q=80"
    },
    {
    name: "Better Burger Company",
    distance: "<2km",
    price: "Mittel",
    veggy: "Sehr",
    adress: "Rosenstraße Ecke, Gertrudenkirchhof, 20095 Hamburg",
    category: "Burger",
    imgSrc: "https://images.unsplash.com/photo-1601306483417-134e652e544f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
    name: "Bucks Burgers",
    distance: "2-5km",
    price: "Mittel",
    veggy: "Sehr",
    adress: "Kurze Mühren 13, 20095 Hamburg",
    category: "Burger",
    imgSrc: "https://images.unsplash.com/photo-1572103900992-23b4bb92e6e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
    name: "Mr. Cherng",
    distance: "2-5km",
    price: "Teuer",
    veggy: "Sehr",
    adress: "Speersort 1, 20095 Hamburg",
    category: "Asiatisch",
    imgSrc: "https://images.unsplash.com/photo-1558013891-da4959724894?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
    name: "Franco Rathauspassage",
    distance: "2-5km",
    price: "Mittel",
    veggy: "Sehr",
    adress: "Rathausmarkt 7, 20095 Hamburg",
    category: "Pizza/Pasta",
    imgSrc: "https://images.unsplash.com/photo-1584536286788-78ae81c2c54e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2000&q=80"
    }
]

const buttonsFilter = document.querySelectorAll(".filterBtn")
const buttonRandomize = document.querySelector(".btnRandomize")
const buttonReset = document.querySelector(".btnReset")
const resultDiv = document.querySelector(".results")

let selectedCategory = []
let selectedDistance = []
let selectedPrice = []
let selectedVeggy = []

const selectedFilters = (event) => {
    if(event.target.classList.contains("category")){
        event.target.classList.add("btnActive")
        if (event.target.dataset.cat === "Alles") {
            selectedCategory.push("Alles", "Burger", "Pizza/Pasta", "Asiatisch", "Hausmannskost", "Sonstiges")
        } else {
            selectedCategory.push(event.target.dataset.cat)
        }
    } else if (event.target.classList.contains("distance")){
        event.target.classList.add("btnActive")
        console.log(event.target.dataset.dist)
        if (event.target.dataset.dist === ">5km") {
            selectedDistance.push("2-5km", "<2km", ">5km")
        } else {
            selectedDistance.push(event.target.dataset.dist)
        }
    } else if (event.target.classList.contains("price")){
        event.target.classList.add("btnActive")
        if (event.target.dataset.price === "Teuer") {
            selectedPrice.push("Teuer", "Mittel", "Günstig")
        } else {
            selectedPrice.push(event.target.dataset.price)
        }
    } else if (event.target.classList.contains("veggy")){
        event.target.classList.add("btnActive")

        if (event.target.dataset.veggy === "Schlecht") {
            selectedVeggy.push("Schlecht", "Mittel", "Sehr")
        } else {
            selectedVeggy.push(event.target.dataset.veggy)
        }
    } else {
        return null;
    }
}
buttonsFilter.forEach(b => b.addEventListener("click", selectedFilters))

const filteredRestaurants = () => {
    removeResults()
    let results = restaurants.filter(r => (
            selectedCategory.includes(r.category) &&
            selectedDistance.includes(r.distance.toString()) &&
            selectedPrice.includes(r.price.toString()) &&
            selectedVeggy.includes(r.veggy.toString())
        ))

    shuffleArray(results)

    results.map(result => {
        const restaurant = document.createElement("div")
        restaurant.classList.add("results_restaurant")
        restaurant.innerHTML = `
            <h3 class="results_restaurant_name">${result.name}</h3>
            <p class="results_restaurant_adress">${result.adress}</p>
            <p class="results_restaurant_distance">Entfernung: ${result.distance}</p>
            <p class="results_restaurant_price">Preis: ${result.price}</p>
            <p class="results_restaurant_veggy">Vegantauglich: ${result.veggy}</p>
            <img class="results_restaurant_img" src="${result.imgSrc}" alt="#">
            `
        resultDiv.append(restaurant)
    }) 
}
buttonRandomize.addEventListener("click", filteredRestaurants)

const resetFilters = () => {
    selectedCategory = []
    selectedDistance = []
    selectedPrice = []
    selectedVeggy = []
    results = []
    
    removeResults()

    buttonsFilter.forEach(button => {
        if (button.classList.contains("btnActive")) {
            button.classList.remove("btnActive")
        }
    })
}
buttonReset.addEventListener("click", resetFilters)

const removeResults = () => {
    for (let i = 0; i < resultDiv.children.length; i++) {
        while(resultDiv.children.length) {
            resultDiv.children[i].remove()
        }
    }
}

//Durstenfeld shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

