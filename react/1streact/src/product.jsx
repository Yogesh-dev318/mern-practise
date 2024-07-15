import "./product.css"
import Price from "./price.jsx"
function Product({title,idx}){
    // let list=features.map((feature)=> <li>{feature}</li>)
    // let style={ backgroundColor:price>30000 ? "yellow" : ""}
    let oldprice=["12000","1299","999","599"]
    let newprice=["5999","1000","500","300"]
    let description=["100 dpi","intutive surface","designed for ipad pro","wireless"]
    return(
        <div className="product" >
           <p>{title}</p>
           <p>{description[idx]}</p>
           <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
        </div>
    )
}

export default Product