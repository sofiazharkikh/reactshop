function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div className="cart red lighten-2" onClick={handleBasketShow}>
            <i className="material-icons white-text">shopping_basket</i>
            {quantity ? (
                <span className="cart-quantity white-text">{quantity}</span>
            ) : null}
        </div>
    );
}
export { Cart };