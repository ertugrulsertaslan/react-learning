import React, {useState, useEffect, useRef} from "react"

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime( Date.now() - startTimeRef.current);
            },10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    },[isRunning]);

    function start(){
        console.log("started");
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setIsRunning(false);
        setElapsedTime(0);
    }
    function formatTime(){
        let hours = Math.floor( elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor( elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor( elapsedTime / (1000) % 60 );
        let milliseconds = Math.floor( (elapsedTime % 1000) /10 );

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milliseconds = String(milliseconds).padStart(2,"0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }
    
    return(
        <div className="items-center">
            <div className="text-bold text-5xl font-mono mb-10 mt-4 text-amber-600">{formatTime()}</div>
            <div className="flex text-center justify-between items-center p-5">
                {<button onClick={start} className="" disabled={isRunning}><img src="/src/assets/play-32.png" alt="" /></button>}
                <button onClick={stop}><img src="/src/assets/pause-32.png" alt="" /></button>
                <button onClick={reset}><img src="/src/assets/reset-32.png" alt="" /></button>
            </div>
        </div>
    );
}
export default StopWatch