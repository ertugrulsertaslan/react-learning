import React,{useState,useEffect} from "react"

function WidthHeight(){

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);
    
    useEffect( () => {
        window.addEventListener("resize",handleResize);

        return ()=> {
            window.removeEventListener("resize",handleResize);  
           
        }
    }, []);

    useEffect( () => {
        document.title = (`Size ${width} x ${height}`);

        return ()=> {
            
        }
    }, [width,height]);
    
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight); 
    }
    return(<>
        <p onChange={handleResize}>Window Width: {width}px</p>
        <p onChange={handleResize}>Window Height: {height}px</p>
    </>);
}
export default WidthHeight