import { GoodsItem } from "./goodsItem";

function Goodslist(props) {
    const { goods = [], addToBasket = Function.prototype } = props;
    if (!goods.length) {
        return <h3>Not found</h3>;
    }
    return (
        <div className="goods-grid">
            {goods.map((item) => (
                <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}
export { Goodslist };