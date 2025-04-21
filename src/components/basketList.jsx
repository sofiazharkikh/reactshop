import { BasketItem } from "./basketItem";

function BasketList(props) {
    const { order = [], handleBasketShow = Function.prototype, removeFromBasket = Function.prototype, incQuantity = Function.prototype, decQuantity = Function.prototype, } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + (el.price.finalPrice * el.quantity);
    }, 0);
    return (
        <ul className="collection">
            <li className="collection-item active red lighten-2">
                Корзина
                <i className="material-icons secondary-content basket-clear" 
                    onClick={handleBasketShow}>
                    clear
                </i>
            </li>
            {order.length ? (order.map((item) => (<BasketItem key={item.mainId} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity} {...item} price={item.price.finalPrice} />))
            ) : ( <li className="collection-item">Корзина пуста</li>)}
            <li className="collection-item active white-text red lighten-2">
                Общая стоимость заказа: {totalPrice} V-Bucks.
            </li>
        </ul>
    );
}
export { BasketList };