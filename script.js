//  Crear un formulario que permita agregar un producto
let productsAdministration = [];
// gregue estos datos en un array 
const newProduct = {
    "name": "",
    "price": "",
    "quantity": "",
    "category": "",
}

    ///Funcionamiento del boton eliminar 
const removeitem= (index) =>{
    if (index=0){
        const newProductTable = document.getElementById("section__table");
        newProductTable.deleteRow(index+1);
     /// Splice recive dos parámetros, 1.parametro= posicion desde la cual se va a eliminar
     /// 2. cuantas posiciones desde ahi queremos remover (=osea remover solo esa)
        productsAdministration.splice(index,1)
        console.log("index",index);
    } else if(index=1) {
        const newProductTable = document.getElementById("section__table");
        newProductTable.deleteRow(index);
        productsAdministration.splice(index,1)
        console.log("index",index);
    }else if(index>1) {
        const newProductTable = document.getElementById("section__table");
        newProductTable.deleteRow(index);
        productsAdministration.splice(index,1)
        console.log("index",index);
    }
    }
    ///Funcionamiento del boton modificar
const modifyitem= (index) =>{
    if (index=0){
        const newProductTable = document.getElementById("section__table");
        newProductTable.deleteRow(index+1);
        productsAdministration.splice(index,1)
        console.log("index",index);
    } else if(index=1) {
        const newProductTable = document.getElementById("section__table");
        newProductTable.deleteRow(index);
        productsAdministration.splice(index,1)
        console.log("index",index);
    }
     const newProductTable = document.getElementById("section__table");
     const newPorductRow = newProductTable.insertRow(-1);
    const newProductName = newPorductRow.insertCell(0);
    const newProductPrice = newPorductRow.insertCell(1);
    const newProductQuantity = newPorductRow.insertCell(2);
    const newProductCategory = newPorductRow.insertCell(3);
    const newProductoModify = newPorductRow.insertCell(4);
    const newProductNameText = document.createElement("input")
    newProductNameText.classList.add("form__table__input");
    const newProductPriceText = document.createElement("input")
    newProductPriceText.classList.add("form__table__input");
    const newProductQuantityText = document.createElement("input")
    newProductQuantityText.classList.add("form__table__input");
    const newProductCategoryText =document.createElement("input")
    newProductCategoryText.classList.add("form__table__input");
    const newProductModifyText2 = document.createElement("button");  
    newProductModifyText2.classList.add("form__button__cargar");
    newProductModifyText2.type = "button";
    newProductModifyText2.textContent= "Cargar";
    newProductName.appendChild(newProductNameText);
    newProductPrice.appendChild(newProductPriceText);
    newProductQuantity.appendChild(newProductQuantityText);
    newProductCategory.appendChild(newProductCategoryText);
    newProductoModify.appendChild(newProductModifyText2);
    }
    /// creando la función para agregar los datos del producto al array
const addProduct = (newProduct) => {
    const longitudArray= productsAdministration.push(newProduct);
    console.log(productsAdministration);
    console.log(newProduct);
//Muestre los elementos del array en una tabla 
    ///Agregando las nuevas filas y celdas de la tabla por producto
    const newProductTable = document.getElementById("section__table");
    const newPorductRow = newProductTable.insertRow(-1);
    const newProductName = newPorductRow.insertCell(0);
    newProductName.classList.add("form__cell__name");
    const newProductPrice = newPorductRow.insertCell(1);
    newProductPrice.classList.add("form__cell__price");
    const newProductQuantity = newPorductRow.insertCell(2);
    newProductQuantity.classList.add("form__cell__quantity");
    const newProductCategory = newPorductRow.insertCell(3);
    newProductCategory.classList.add("form__cell__category");
    const newProductoModify = newPorductRow.insertCell(4);
    newProductoModify.classList.add("form__cell_modify");
    ///Agregando el texto de las nuevas filas
    const newProductNameText = document.createTextNode(newProduct.name);
    const newProductPriceText = document.createTextNode(newProduct.price);
    const newProductQuantityText = document.createTextNode(newProduct.quantity);
    const newProductCategoryText = document.createTextNode(newProduct.category);
// Que la ultima columna de la tabla contenga unos botones con las acciones de eliminar y atualizar
    const newProductModifyText = document.createElement("button");
    newProductModifyText.classList.add("form__button__borrar");
    newProductModifyText.type = "button";
    newProductModifyText.textContent= "Borrar";
    newProductModifyText.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        removeitem (longitudArray-1);
        console.log("hola",productsAdministration);
      })
    const newProductModifyText1 = document.createElement("button"); //modificaciones 
    newProductModifyText1.classList.add("form__button__modificar")
    newProductModifyText1.type = "button";
    newProductModifyText1.textContent= "Modificar";
    newProductModifyText1.addEventListener('click', function handleClick(event) {
          event.preventDefault();
          modifyitem (longitudArray-1);
          console.log("hola1",productsAdministration);
        })

    /// pegar el nuevo texto a las nuevas filas 
    newProductName.appendChild(newProductNameText);
    newProductPrice.appendChild(newProductPriceText);
    newProductQuantity.appendChild(newProductQuantityText);
    newProductCategory.appendChild(newProductCategoryText);
    newProductoModify.appendChild(newProductModifyText);
    newProductoModify.appendChild(newProductModifyText1);

}

    ///para que no se cierre y se puedan ejecutar más cosas
///guardar la informacion para que no se pierda
///document.add
/// body__form
document.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    let nombreProducto = document.getElementById("ul__nombre").value;
    ///.value para que me traiga el valor registrado en el input
    console.log(nombreProducto)
    let precioProducto = document.getElementById("ul__precio").value;
    console.log(precioProducto)
    let cantidadProducto = document.getElementById("ul__cantidad").value;
    console.log(cantidadProducto)
    let categoriaProducto = document.querySelector("select").value;
    console.log(categoriaProducto)

    newProduct.name = nombreProducto
    newProduct.price = precioProducto
    newProduct.quantity = cantidadProducto
    newProduct.category = categoriaProducto
    addProduct(newProduct)
}
)



