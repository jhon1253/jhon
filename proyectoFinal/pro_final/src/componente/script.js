async function productos (){
    const api = await fetch ("https://fakestoreapi.com/products")
    const formato = await Resp.jason()
    return formato;

}
export default productos


