function heloo(event){
    event.preventDefault();
    console.log("Submitted")
}
export default function Form(){
    return(
        <div>
            <form>
                <input placeholder="Enter Something"></input>
                <button onClick={heloo}>Submit</button>
            </form>
        </div>
    )
}