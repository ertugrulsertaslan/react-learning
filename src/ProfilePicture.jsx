import { useState } from "react";
const imageUrl = './src/assets/ferrari_photo.png';

function ProfilePicture() {
    const [isClicked, setIsClicked] = useState(false);

    if (isClicked) {
        return <></>
    }
    return (<img onClick={() => setIsClicked(true)} src={imageUrl}></img>);
}

export default ProfilePicture