import Item from "../Item"


const ItemList =()=>{

const productos=[
        {id:0, title:"Zapatillas Nike", price:"$10.000"},
        {id:1, title:"Zapatillas Adidas", price:"$6.000"},
        {id:2, title:"Zapatillas Reebok", price:"$9.000"},
        {id:3, title:"Zapatillas Vans", price:"$8.500"},
        {id:4, title:"Zapatillas Fallen", price:"$9.000"}
        ]

const getProducts = async ()=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(productos)},3000)
        
    }    
) 
}

const productsDelay = async()=>{
    console.log(await getProducts())
}

productsDelay()

        
return(
        <>
            
            <div>

                {productos.map(e=><Item key={e.id} title={e.title} price={e.price}/>)}
           
            </div>

        </>
    )
}

export default ItemList