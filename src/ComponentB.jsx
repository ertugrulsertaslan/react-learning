import ComponentC from './ComponentC.jsx';

function ComponentB(){
    return(
        <div className="p-1 m-1 border border-2 border-amber-400">
            <h1 className='text-rose-500'>ComponentB</h1>
            <ComponentC />
        </div>
    );
}
export default ComponentB