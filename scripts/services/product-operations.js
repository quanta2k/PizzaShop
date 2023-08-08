//contains the logic for fetching.
//adding,sorting,searching
//Deletion,updation
/*
It talks to Network layer to Bring the Json, and 
conver JSON into object vice-versa
*/
import Product from '../models/product.js';
import makeNetworkCall from './api-client.js';

const productOperations={
    products:[], //key:value
    search(pizzaId){
        const product=this.products.find(currentProduct=>currentProduct.id==pizzaId)
        console.log('Product found',product);
        product.isAddedInCart = true;
        console.log('Array', this.products);
    },
    getProductsInCart(){
        const productInBasket=this.products.filter(product=>product.isAddedInCart)
        return productInBasket;
    },
    async loadProducts(){
        const pizzas = await makeNetworkCall();
        const pizzaArray= pizzas['Vegetarian'];
        const productArray=pizzaArray.map(pizza=>{
            const currentPizza = new Product(pizza.id,pizza.name,pizza.menu_description,pizza.price,pizza.assets.product_details_page[0].url)
    
            return currentPizza;
        })
        console.log('Product array',productArray);
        this.products= productArray;
        return productArray; //wrap in promise
    }

}
export default productOperations;