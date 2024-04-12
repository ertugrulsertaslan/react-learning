function Food () {
    const food1 = "Orange";
    const food2 = "Banana";

    return (
        <div>
            <h2 className="text-red-600 m-5 font-bold">UpperCase</h2>
            <ul className="justify-center text-center">
                <li className="text-white">Apple</li>
                <li className="text-white">{food1}</li>
                <li className="text-orange-500 font-bold">{food2.toUpperCase()}</li>
            </ul>
        </div>
        
    );
}
export default Food