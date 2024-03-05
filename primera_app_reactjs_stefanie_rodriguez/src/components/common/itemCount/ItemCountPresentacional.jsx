import React from "react";

export const ItemCountPresentacional = ({sumar, restar, counter}) => {
    return (
    <div>
        <button onClick={restar}>-</button>
        <h4> {counter} </h4>
        <button onClick={sumar}>+</button>
    </div>
    )
};


export default ItemCountPresentacional;