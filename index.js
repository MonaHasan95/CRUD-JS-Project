var btn = document.getElementById("btn");
var nameInput = document.getElementById("name");
var priceInput = document.getElementById("price");
var compInput = document.getElementById("comp");
var descInput = document.getElementById("desc");
var updateBtn = document.getElementById("updatebtn");
var searchInput = document.getElementById("searchInput");
var searchbtn = document.getElementById("searchbtn");


var product ={};
var products;

if(localStorage.getItem("products",JSON.parse(localStorage.getItem("products")))==null)
{
    products=[];
}
else
{
    products=JSON.parse(localStorage.getItem("products"));
    displayProducts();
    console.log(products);
}

btn.onclick = function()
{
    addProduct();
    displayProducts();
    clearInput();
}

function addProduct()
{
    if(!isNaN(Number(priceInput.value)))
    {
        product ={name: nameInput.value, price: priceInput.value , comp: compInput.value, desc: descInput.value}; 
        products.push(product);
        localStorage.setItem("products",JSON.stringify(products));
    }
    
    else
    {
        alert("Please enter a price.")
    }
}

function updateProduct(ind)
{
    if(sClick==1)
        {
             var cols="";
            cols=`
                <h3 class="w-100">Search Result </h3>
                <div class="col-3 py-3">
                <div id="product" style=" border-radius: 5px;" class="text-center table-bordered">
                    <img src="website-two-thumb.jpg" class="img-fluid" style=" border-top-right-radius: 5px; border-top-right-radius: 5px;">
                    <h6 class="m-2">`+products[ind].name+`</h6>
                    <p class="text-muted">`+products[ind].desc+`</p>
                    <p class="text-warning">`+products[ind].comp+`</p>
                    <p class="text-danger">`+products[ind].price+`</p>
                    <button onclick="deleteSearch(`+ind+`)" class="btn btn-danger ">Delete</button>
                    <button onclick="editInput(`+ind+`)" class="btn btn-primary id="editBtn">Edit</button>
                </div>
            </div>`
            
           document.getElementById("searchResults").innerHTML=cols; 
        }
    
    if(!isNaN(Number(priceInput.value)))
    {
        product ={name: nameInput.value, price: priceInput.value , comp: compInput.value, desc: descInput.value}; 
        products[ind].name=nameInput.value;
        products[ind].price=priceInput.value;
        products[ind].comp=compInput.value;
        products[ind].desc=descInput.value;
        localStorage.setItem("products",JSON.stringify(products));
    }
    
    else
    {
        alert("Please enter a price.")
    }
}

var sClick=0;
searchbtn.onclick= function()
{
    sClick=1;
    var p="";
    for(var i=0; i<products.length; i++)
    {
        if(searchInput.value==products[i].name)
        {
            p=products[i].name;
            console.log(products[i].name);
            var cols="";
            cols=`
                <h3 class="w-100">Search Result </h3>
                <div class="col-3 py-3">
                <div id="product" style=" border-radius: 5px;" class="text-center table-bordered">
                    <img src="website-two-thumb.jpg" class="img-fluid" style=" border-top-right-radius: 5px; border-top-right-radius: 5px;">
                    <h6 class="m-2">`+products[i].name+`</h6>
                    <p class="text-muted">`+products[i].desc+`</p>
                    <p class="text-warning">`+products[i].comp+`</p>
                    <p class="text-danger">`+products[i].price+`</p>
                    <button onclick="deleteSearch(`+i+`)" class="btn btn-danger ">Delete</button>
                    <button onclick="editInput(`+i+`)" class="btn btn-primary id="editBtn">Edit</button>
                </div>
            </div>`
            
           document.getElementById("searchResults").innerHTML=cols; 
        }
        
    }
    if(p=="")
    {
        alert("No product found")
    }
    
    searchInput.value="";
}

function displayProducts()
{
    var cols ="";

    for(var i=0; i<products.length; i++)
    {
        cols+=`<div class="col-3 py-3">
                <div id="product" style=" border-radius: 5px;" class="text-center table-bordered">
                    <img src="website-two-thumb.jpg" class="img-fluid" style=" border-top-right-radius: 5px; border-top-right-radius: 5px;">
                    <h6 class="m-2">`+products[i].name+`</h6>
                    <p class="text-muted">`+products[i].desc+`</p>
                    <p class="text-warning">`+products[i].comp+`</p>
                    <p class="text-danger">`+products[i].price+`</p>
                    <button onclick="deleteInput(`+i+`)" class="btn btn-danger ">Delete</button>
                    <button onclick="editInput(`+i+`)" class="btn btn-primary id="editBtn">Edit</button>
                </div>
            </div>`
    }
    
    document.getElementById("products").innerHTML=cols;
}

function clearInput()
{
    nameInput.value="";
    descInput.value="";
    compInput.value="";
    priceInput.value="";
}

function deleteInput(ind)
{
    console.log(ind);
    products.splice(ind,1);
    localStorage.setItem("products",JSON.stringify(products))
    displayProducts();
    document.getElementById("searchResults").innerHTML='';
    
}
function deleteSearch(ind)
{
    sClick=0;
    deleteInput(ind);
    document.getElementById("searchResults").innerHTML=''; 
    
}

function editInput(ind)
{
    nameInput.value=products[ind].name;
    descInput.value=products[ind].desc;
    priceInput.value=products[ind].price;
    compInput.value=products[ind].comp;
    
    updateBtn.onclick = function()
    {
        updateProduct(ind);
        displayProducts();
        clearInput();
    }
}
