class CoffeeShop{
    constructor(){
        this.name = "Maran_Andy's coffee shop";
        this.menu = [ 
            {
               food:{
                  
                   matookeAndBeans: 7000,
                   RiceAndMeat: 9000,
                   chicken: 15000,
                   friedChicken: 30000,
                   AmericanPie: 10000,
                   porkPlane: 34000,
                   sandWich:5000,
                   BaconAndEgg :6000,
                   cinnamon: 15000,
               
               }
            
            },

            {
                drinks:{
                    soda: 1500,
                    water: 1000,
                    IcedCoffee: 10000,
                    PineAppleJuice:6000,
                    lemonade:8000,
                    craneBerry:10000,
                    orangeJuice: 3500,
                }
            }
        ];

        this.orders = []
    }

    addOrder(item){
        if(this.menu[0].food.hasOwnProperty(item) || this.menu[1].drinks.hasOwnProperty(item)){
           return this.orders.push(item)
        }else{
            return "This item is currently unavailable"
        }
    }

    fulfillOrder(){
        if(!this.orders===0){
            return "This {item} is ready!"
        }else{
            return "All orders have been fulfilled!"
        }
    }

    listOrders(){
        
    }

    dueAmount(){

    }

    cheapestItem(){
        return this.menu[1].drinks.water
    }

    drinksOnly(){
        return this.menu[1].drinks
    }

    foodOnly(){
        return this.menu[0].food
    }
    
}

let instanceClass = new CoffeeShop()

console.log(instanceClass.addOrder("sandWich"));
console.log(instanceClass.addOrder("water"));
console.log(instanceClass.addOrder("sandWich"));
console.log(instanceClass.addOrder(" BaconAndEgg"));
console.log(instanceClass.fulfillOrder());
console.log(instanceClass.cheapestItem());
console.log(instanceClass.foodOnly());
console.log(instanceClass.drinksOnly());
console.log(instanceClass.listOrders());

