import Product from "./product.jsx"

function Producttab(){
    let style={
        display:"flex",
        flexwrap:"wrap",
        justifyContent:"center",
        alignIteams:"center"
    }
    return(
        <div style={style}>
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple Pencil" idx={1}/>
            <Product title="Zebronics Zeb-transformer" idx={2}/>
            <Product title="petronics" idx={3}/>
        </div>
    )
}
export default Producttab