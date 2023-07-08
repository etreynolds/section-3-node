import React from "react";

const ShoppingCart = ({ items }) => {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <div>
                {items.map(i => (
                    <div>
                        <h4>{i.name}</h4>
                        <ul>
                            <li>Price: ${i.price}</li>
                            <li>Quantity: {i.quantity}</li>
                            <li>Total Spent: ${i.price * i.quantity}</li>

                        </ul>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default ShoppingCart;