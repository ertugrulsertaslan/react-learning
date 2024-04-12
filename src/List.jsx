import PropTypes from 'prop-types'
function List(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item =>   <li key={item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b>
                                            </li>);

    return (<>
                <div>
                    <h3 className="font-bold text-center mb-3 text-xl border-2 rounded-md border-gray-800 bg-red-600 text-white">{props.category}</h3>
                    <ol className="text-center text-amber-300">{listItems}</ol>
                </div>
            </>
    );
}
List.defaultProps= {
    category: "Category",
    items : [],
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories : PropTypes.number})),
}
export default List