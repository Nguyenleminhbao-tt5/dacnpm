import classNames from "classnames/bind";
import styles from './ProfileNav.module.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function ProductOrder() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('listaddress')}>
                <h1 className={cx('listaddress__header')}>
                    Tài khoản
                </h1>
                <div className={cx('listaddress__1')}>
                    <Link to="/ProfileIndividiual" className={cx('link')}>Thông tin cá nhân</Link>
                </div>
                <div className={cx('listaddress__2')}>
                    <Link to="/PaymentAddress" className={cx('link')}>Địa chỉ giao hàng</Link>
                </div>
                <div className={cx('listaddress__3')}>
                    <Link to="/ProfileOrder" className={cx('link')}>Danh sách đơn hàng</Link>
                </div>
                <div className={cx('listaddress__exit')}>
                    Đăng xuất
                </div>
            </div>
        </div>
    )
}

export default ProductOrder;