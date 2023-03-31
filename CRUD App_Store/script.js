var title = document.getElementById("title")
var price = document.getElementById("price")
var taxes = document.getElementById("taxes")
var ads = document.getElementById("ads")
var discount = document.getElementById("discount")
var count = document.getElementById("count")
var category = document.getElementById("category")
var total = document.getElementById("total")
var search = document.getElementById("search")
var createbtn = document.getElementById("submit")

let mode = "create";
let editIndex;

function getTotal(){
    var result;
    if (price.value != ""){
        result = (+price.value + +taxes.value + +ads.value) - +discount.value 
        total.innerHTML = result
        total.style.backgroundColor = "green"
    }  else {
        total.style.backgroundColor = "brown"
        total.innerHTML = ""
    }  
}
let dataProducts;

if (localStorage.product != null){
    dataProducts = JSON.parse(localStorage.product)
}else{
    dataProducts = []
}

createbtn.onclick = function (){
    if( title.value != ""){

        let product = {
            title : title.value.toLowerCase(),
            price: price.value,
            taxes:taxes.value,
            ads: ads.value,
            discount: discount.value,
            category: category.value.toLowerCase(),
            total : total.innerHTML
        }
        if (mode === "create"){
            if(+count.value > 1){
                for (let index = 0; index < +count.value; index++) {
                    dataProducts.push(product)  
                }
            }else{
                dataProducts.push(product)
            }
        }else{
            dataProducts[editIndex].title = title.value
            dataProducts[editIndex].price = price.value
            dataProducts[editIndex].taxes = taxes.value
            dataProducts[editIndex].ads = ads.value
            dataProducts[editIndex].discount = discount.value
            dataProducts[editIndex].category = category.value
            dataProducts[editIndex].total = total.innerHTML
            mode = "create"
            createbtn.style.backgroundColor = "rgb(36, 60, 86)"
            createbtn.innerHTML = "Create"
            count.style.display = "block"
        }
        
        localStorage.setItem("product", JSON.stringify(dataProducts))
        clearInputs()
        displayTable()
        showDeleteAllbtn()
        getTotal()
    }

}

function showDeleteAllbtn(){
    let delAllPart = document.getElementById("deleteAll")
    if ( dataProducts.length > 0){
        delAllPart.innerHTML = `<button onclick="deleteAllProducts()">Delete All (${dataProducts.length})</button>`
    }
    else{
        delAllPart.innerHTML = ""
    }
}


function clearInputs(){
    title.value = ""
    price.value = ""
    taxes.value = ""
    ads.value = ""
    discount.value = ""
    category.value = ""
    total.innerHTML = ""
    count.value=""
}

function displayTable(){
    var tbody = document.getElementById("tbody")
    let table = []
    for (let i = 0; i < dataProducts.length; i++) 
    {
        table += `<tr>
                    <th>${i}</th>
                    <th>${dataProducts[i].title}</th>
                    <th>${dataProducts[i].price}</th>
                    <th>${dataProducts[i].taxes}</th>
                    <th>${dataProducts[i].ads}</th>
                    <th>${dataProducts[i].discount}</th>
                    <th>${dataProducts[i].total}</th>
                    <th>${dataProducts[i].category}</th>
                    <th><button id="updatebtn" onclick="updateProduct(${i})">update</button></th>
                    <th><button id="delbtn" onclick="deleteProduct(${i})">delete</button></th>
                </tr>`
        
    }
    tbody.innerHTML = table
}

displayTable()
showDeleteAllbtn()

function deleteProduct(i){
    // console.log(index)
    dataProducts.splice(i, 1);
    localStorage.product = JSON.stringify(dataProducts)
    displayTable()
    showDeleteAllbtn()
}

function deleteAllProducts(){
    dataProducts = []
    localStorage.clear()
    displayTable()
    showDeleteAllbtn()
}

function updateProduct(i){
    title.value = dataProducts[i].title
    price.value = dataProducts[i].price
    taxes.value = dataProducts[i].taxes
    ads.value = dataProducts[i].ads
    discount.value = dataProducts[i].discount
    category.value = dataProducts[i].category
    total.innerHTML = dataProducts[i].total
    createbtn.innerText = "Update"
    createbtn.style.backgroundColor = "#B3497F"
    getTotal()
    count.style.display = "none"
    mode = "update"
    editIndex = i
    scroll ({
        top:0,
        behavior: "smooth"
    })
    getTotal()
}

let searchMode = "title"
function searchProduct(id){
    if(id === "searchTitle"){
        searchMode = "title"
    }
    else{
        searchMode = "category"
    }
    search.setAttribute("placeholder", `Search by ${searchMode}`)
    // console.log(id)
    search.focus()
    search.value = ""
    displayTable()
}

function searchData(value){
    let table = [];
    if (searchMode == "title"){
        for (let i = 0; i < dataProducts.length; i++) {
            if(dataProducts[i].title.includes(value)){
                table += `<tr>
                    <th>${i}</th>
                    <th>${dataProducts[i].title}</th>
                    <th>${dataProducts[i].price}</th>
                    <th>${dataProducts[i].taxes}</th>
                    <th>${dataProducts[i].ads}</th>
                    <th>${dataProducts[i].discount}</th>
                    <th>${dataProducts[i].total}</th>
                    <th>${dataProducts[i].category}</th>
                    <th><button id="updatebtn" onclick="updateProduct(${i})">update</button></th>
                    <th><button id="delbtn" onclick="deleteProduct(${i})">delete</button></th>
                </tr>`
            }
        }
    } // end of title search
    else{
        for (let i = 0; i < dataProducts.length; i++) {
            if(dataProducts[i].category.includes(value.toLowerCase())){
                table += `<tr>
                    <th>${i}</th>
                    <th>${dataProducts[i].title}</th>
                    <th>${dataProducts[i].price}</th>
                    <th>${dataProducts[i].taxes}</th>
                    <th>${dataProducts[i].ads}</th>
                    <th>${dataProducts[i].discount}</th>
                    <th>${dataProducts[i].total}</th>
                    <th>${dataProducts[i].category}</th>
                    <th><button id="updatebtn" onclick="updateProduct(${i})">update</button></th>
                    <th><button id="delbtn" onclick="deleteProduct(${i})">delete</button></th>
                </tr>`
            }
        }
    }
    document.getElementById("tbody").innerHTML = table
}
    
