export default function price({oldprice,newprice}){
    let style={
        textDecorationLine:"line-through"
    }
    let style2={
        fontWeight:"bold"
    }
    return(
        <>
        <span style={style}>{oldprice}</span>
        &nbsp; &nbsp;
        <span style={style2}>{newprice}</span>
        </>
    )
}