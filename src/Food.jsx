function Food () {
    const food1 = "Orange";
    const food2 = "Banana";

    return (
        <div>
            <h2 className="text-red-600 m-5 font-bold">UpperCase</h2>
            <ul className="justify-center text-center">
                <li>Apple</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
        </div>
        
    );
}
export default Food