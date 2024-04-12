import profilePic from './assets/ferrari_photo.png'

function Card() {
    return (
        <div className="border-2 border-orange-500 rounded m-1 p-5 text-center inline shadow-lg shadow-red-600 text-white">
            <img src={profilePic} alt="profile picture" />
            <h2 className="font-sans m-1">Ferrari</h2>
            <p className='font-sans'>A Luxury Sports Car</p>
        </div>
    );
}
export default Card