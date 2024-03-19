

function Button(){
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    /*
    

    const handleClick = () => console.log("Ouch!");

    const handleClick2 = (name) =>  console.log(`${name} stop click me`);

    count = 0;
    const handleClick3 = (name) => {
        if(count < 3 ){
            count++;
            console.log(`${name} you clicked me ${count} time/s`)
        }
        else{
            console.log(`${name} stop clicking me!`)
        }
    };
    */
    const handleClick4 = (e) => e.target.textContent = "Ouch!";

    return(<button onClick={(e) => handleClick4(e)} style={styles}>Click Me </button>);
    //return(<button onClick={() => handleClick3("Bro")} style={styles}>Click Me </button>);
    //return(<button onClick={() => handleClick2("Bro")} style={styles}>Click Me </button>);
}
export default Button 