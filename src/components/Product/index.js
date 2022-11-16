import {Link} from 'react-router-dom';
import classNames from "classnames/bind";
import styles from './Product.module.scss';
import '../base.module.scss';

const cx=classNames.bind(styles);

/* props là đối tượng sẽ chưa các thuộc tính của
một Product gồm new(true), sale(int), URL_img(string), name(string),
price_new(float), price_old(float) */


function Product(props)
{
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product__top')} >
                <Link to='/ProfileProduct' className={cx('product__top-link')}>
                    <img className={cx('product__top-img')} src={props.URL_img} align='middle'/>
                </Link>
                
                <div className={cx('product__top-sale')}>
                    {props.new && <span className={cx('new')}>NEW</span>}
                    <span className={cx('sale')}>- {props.sale} %</span>
                </div>
                <div className={cx('product__top-move')}>
                    <div className={cx('move-left')}>
                        <i className={cx('move-left_icon',"fa-solid fa-angle-left")}></i>
                    </div>
                    <div className={cx('move-right')}>
                        <i className={cx('move-right_icon',"fa-solid fa-angle-right")}></i>
                    </div>
                </div>
                {props.size && <div className={cx('product__top-size')}>
                    <a href="" className={cx('size-item','active')}>
                        <span style={{top: '10px', position: 'relative'}}>36</span>
                    </a>
                    <a href="" className={cx('size-item')}>
                        <span style={{top: '10px', position: 'relative'}}>37</span>
                    </a>
                    <a href="" className={cx('size-item')}>
                        <span style={{top: '10px', position: 'relative'}}>38</span>
                    </a>
                    <a href="" className={cx('size-item')}>
                        <span style={{top: '10px', position: 'relative'}}>39</span>
                    </a>
                    <a href="" className={cx('size-item')}>
                        <span style={{top: '10px', position: 'relative'}}>40</span>
                    </a>
                    <a href="" className={cx('size-item')}>
                        <span style={{top: '10px', position: 'relative'}}>41</span>
                    </a>
                    <a href="" className={cx('size-item')}>
                        <span style={{top: '10px', position: 'relative'}}>42</span>
                    </a>
                    <a href="" className={cx('size-item')}>
                        <span style={{top: '10px', position: 'relative'}}>43</span>
                    </a>

                    
                </div>}
            </div>
            <div className={cx('product__bot')}>
                <div className={cx('product__bot-name')}>
                    {props.name}
                </div>
                <div className={cx('product__bot-price')}>
                    <button className={cx('price-new')}>{props.price_new}</button>
                    <button className={cx('price-old')}>{props.price_old}</button>
                </div>
                <div className={cx('product__bot-detail')}>
                    <Link to='./Cart' className={cx('cart')}>
                        <i className={cx('cart-icon',"fa-solid fa-cart-shopping")}></i>
                        <span className={cx('cart-text')}>Thêm giỏ hàng</span>
                    </Link>
                    <span className={cx('arow')}></span>
                    <Link to='./Homepage/ProfileProduct' className={cx('detail')}>
                        <i className={cx('detail-icon',"fa-solid fa-eye")}></i>
                        <span className={cx('detail-text')}>Xem chi tiết</span>
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default Product;