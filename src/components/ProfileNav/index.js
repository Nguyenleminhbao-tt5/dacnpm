import classNames from "classnames/bind";
import styles from './ProfileNav.module.scss';

const cx=classNames.bind(styles);

function ProductOrder()
{
    return (
        <div className={cx('wrapper')}>
            <div className={cx('listaddress')}>
                <h1 className={cx('listaddress__header')}>
                    Tài khoản
                </h1>
                <div className={cx('listaddress__1')}>
                    Thông tin cá nhân
                </div>
                <div className={cx('listaddress__2')}>
                    Địa chỉ giao hàng
                </div>
                <div className={cx('listaddress__3')}>
                    Danh sách đơn hàng
                </div>
                <div className={cx('listaddress__exit')}>
                    Đăng xuất
                </div>
            </div>
        </div>
    )
}

export default ProductOrder;