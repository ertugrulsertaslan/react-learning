import PropTypes from "prop-types";

function Student({ name = "Guest", age = 0, isStudent = false }) {
  return (
    <div className="font-sans p-2.5 border-2 border-stone-300">
      <p className="text-orange-500">Name: {name}</p>
      <p className="text-purple-500">Age: {age}</p>
      <p className="text-amber-300">Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Student;
