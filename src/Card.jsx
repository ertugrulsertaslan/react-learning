import profilePic from './assets/ferrari_photo.png'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Ferrari</h2>
            <p className='card-text'>A Luxury Sports Car</p>
        </div>
    );
}
export default Card