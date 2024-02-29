
export const ItemCountPresentacional = ({sumar, restar, counter}) => {
    return (
    <div>
        <button onClick={sumar}>+</button>
    <h4> {counter} </h4>
    <button onClick={restar}>-</button>
    </div>
    )
};


export default ItemCountPresentacional;