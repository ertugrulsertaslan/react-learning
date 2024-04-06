import ComponentC from './ComponentC.jsx';

function ComponentB(){
    return(
        <div className="p-1 m-1 border border-2 border-zinc-950">
            <h1>ComponentB</h1>
            <ComponentC />
        </div>
    );
}
export default ComponentB