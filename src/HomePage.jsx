import { Link } from "react-router-dom";

function HomePage(){
    return(
        <div>
            <Link to={`/profiles`} >
                Profile
            </Link>
            <a href="/profiles">Profile SSR</a>
            <h1>HomePage</h1>
        </div>
    );
}
export default HomePage