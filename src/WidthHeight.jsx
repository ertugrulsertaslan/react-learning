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
    <div className="text-center">
        <p className="bg-red-500 p-3 m-3 text-white" onChange={handleResize}>Window Width: {width}px</p>
        <p className="bg-red-500 p-3 m-3 text-white" onChange={handleResize}>Window Height: {height}px</p>
    </div>
        
    </>);
}
export default WidthHeight