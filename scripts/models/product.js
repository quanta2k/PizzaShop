//Product JS contain the structure of a pizza object
//Pizza Object-id,Name,Desc,Price,Rating,Image



class Product{
    constructor(id,name,description,price,url){
        //this - keyword (Contains current calling object reference)
        this.id= id;
        this.name=name;
        this.description= description;
        this.price=price;
        this.url=url;
        this.isAddedInCart= false;
    }
}
export default Product;
