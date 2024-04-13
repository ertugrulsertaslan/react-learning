import { useState } from "react";


function Button() {
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    const [isClicked, setIsClicked] = useState(false);
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
    return (

        <button onClick={() => setIsClicked(true)} style={styles}>
            {isClicked ? 'Ouch!' : 'Click Me'}
        </button>
    );
    //return(<button onClick={() => handleClick3("Bro")} style={styles}>Click Me </button>);
    //return(<button onClick={() => handleClick2("Bro")} style={styles}>Click Me </button>);
}
export default Button 