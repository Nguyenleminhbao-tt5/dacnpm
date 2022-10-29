import styles from './PaymentAddress.module.scss';
import classNames from "classnames/bind";
import ProfileNav from "../../components/ProfileNav"
import Address from '../../components/Address';

const cx = classNames.bind(styles);
/* 
    props là đối tượng sẽ chưa các thuộc tính của
    một Address gồm: name, address1, address2, address3, address4, phonenumber
*/
function PaymentAddress() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper')}>
                <div className={cx('address')}>
                    <span>Trang chủ {'>'} Hồ sơ {'>'} </span>
                    <span className={cx('address_current')}>Địa chỉ giao hàng</span>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content__1')}>
                        <div className={cx('content__1-nav')}>
                            <ProfileNav />
                        </div>
                    </div>
                    <div className={cx('content__2')}>
                        <div className={cx('content__2-header')}>
                            <h1>Địa chỉ giao hàng</h1>
                            <button>Thêm địa chỉ</button>
                        </div>
                        <div className={cx('address__row1')}>
                            <div className={cx('address__row1-col1')}>
                                <Address name='NGUYỄN VĂN A' address1='268 Lý Thường Kiệt' address2='Phường 14' address3='Quận 10' address4='Thành phố Hồ Chí Minh' phonenumber='123456789' />
                            </div>
                            <div className={cx('address__row1-col2')}>
                                <Address name='NGUYỄN VĂN A' address1='268 Lý Thường Kiệt' address2='Phường 14' address3='Quận 10' address4='Thành phố Hồ Chí Minh' phonenumber='123456789' />
                            </div>
                        </div>
                        <div className={cx('address__row2')}>
                            <div className={cx('address__row2-col1')}>
                                <Address name='NGUYỄN VĂN A' address1='268 Lý Thường Kiệt' address2='Phường 14' address3='Quận 10' address4='Thành phố Hồ Chí Minh' phonenumber='123456789' />
                            </div>
                            <div className={cx('address__row2-col2')}>
                                <Address name='NGUYỄN VĂN A' address1='268 Lý Thường Kiệt' address2='Phường 14' address3='Quận 10' address4='Thành phố Hồ Chí Minh' phonenumber='123456789' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentAddress;