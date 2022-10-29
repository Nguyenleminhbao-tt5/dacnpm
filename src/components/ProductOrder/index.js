import classNames from "classnames/bind";
import styles from './ProductOrder.module.scss';

const cx=classNames.bind(styles);

/* 
props là đối tượng sẽ chưa các thuộc tính của
một ProductOrder gồm URL_img(string), name(string), price_new(float), price_old(float),
number(int), size(int)
*/


function ProductOrder(props)
{
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content1')}>
                <div className={cx('img')}>
                    <img className={cx('product_img')} src={props.URL_img} align='middle'></img>
                </div>
            </div>
            <div className={cx('content2')}>
                <div className={cx('product_name')}>
                    {props.name}
                </div>
                <div className={cx('product_price')}>
                    <span>Đơn giá: </span>
                    <span className={cx('product_newprice')}>{props.price_new}</span>
                    <span className={cx('product_oldprice')}>{props.price_old}</span>
                </div>
                <div className={cx('product_number')}>
                    <span>Số lượng: </span>
                    <span className={cx('number')}>{props.number}</span>
                </div>
            </div>
            <div className={cx('content3')}>
                <div className={cx('product_current_price')}>
                    {props.price_new}
                </div>
            </div>
        </div>
    )
}

export default ProductOrder;