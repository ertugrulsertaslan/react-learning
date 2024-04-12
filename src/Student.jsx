import PropTypes from 'prop-types'


function Student(props){
    return(
        <div className="font-sans p-2.5 border-2 border-stone-300">
            <p className='text-orange-500'>Name: {props.name}</p>
            <p className='text-purple-500'>Age: {props.age}</p>
            <p className='text-amber-300'>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name:"Guest",
    age:0,
    isStudent: false,
}
export default Student