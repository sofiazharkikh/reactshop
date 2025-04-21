function BasketItem(props) {
    const { mainId, displayName, price, quantity, removeFromBasket = Function.prototype, incQuantity = Function.prototype, decQuantity = Function.prototype, } = props;
    return (
        <ul className="collection">
            <li className="collection-item">
                {displayName} <i className="material-icons basket-quantity red-text text-lighten-2" onClick={() => decQuantity(mainId)}>remove</i> x {quantity}<i className="material-icons basket-quantity red-text text-lighten-2" onClick={() => incQuantity(mainId)}>add</i> = {price * quantity} V-Bucks
                <span className="secondary-content" onClick={() => removeFromBasket(mainId)}>
                    <i className="material-icons basket-delete red-text text-lighten-2">clear</i>
                </span>
            </li>
        </ul>
    );
}
export { BasketItem };