import PropTypes from 'prop-types';

function UserGreeting(props){
    const welcomeMessage =  <h2 className="font-bold text-lg text-red-600">
                                Welcome {props.username}
                            </h2>
    const loginPrompt =     <h2 className="font-bold text-lg text-red-600">
                                Please Log In To Continue
                            </h2>


    return(props.isLoggedIn ?  welcomeMessage : loginPrompt);
}
UserGreeting.proptypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting