import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./preloader";
import { Goodslist } from "./goodsList";
import { Cart } from "./cart";
import { BasketList } from "./basketList";
import { Alert } from "./alert";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState("");
    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId);
        
        if (itemIndex < 0) {
            setOrder([...order, { ...item, quantity: 1 }]);
        } else {
            const newOrder = order.map((orderItem) => 
                orderItem.mainId === item.mainId 
                    ? { ...orderItem, quantity: orderItem.quantity + 1 } 
                    : orderItem
            );
            setOrder(newOrder);
        }
        setAlertName(item.displayName);
    };
    const incQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.mainId === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };
    const decQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.mainId === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };
    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((el) => el.mainId !== itemId);
        setOrder(newOrder);
    };
    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };
    const closeAlert = () => {
        setAlertName("");
    };
    useEffect(function getGoods(){
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            });
    }, []);
    
    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {loading ? (<div className="preloader-wrapper"><Preloader /></div>) : (<Goodslist goods={goods} addToBasket={addToBasket}/>)}
            {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity}/>}
            {alertName && <Alert displayName={alertName} closeAlert={closeAlert}/>}
        </main>
    );
}
export { Shop };