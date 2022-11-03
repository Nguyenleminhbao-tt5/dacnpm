import styles from './PaymentAddress.module.scss';
import classNames from "classnames/bind";
import ProfileNav from "../../components/ProfileNav"

const cx = classNames.bind(styles);
function PaymentAddress() {
    return (
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
                        ĐỊA CHỈ GIAO HÀNG
                    </div>
                    <div className={cx("content__2-form")}>
                        <form>
                            <label>Tỉnh, thành</label>
                            <input type="" className={cx("content__2-form-text")} placeholder='Nhập địa chỉ' />
                            <label>Quận, huyện</label>
                            <input type="" className={cx("content__2-form-text")} placeholder='Nhập địa chỉ' />
                            <label>Xã, thị trấn</label>
                            <input type="" className={cx("content__2-form-text")} placeholder='Nhập địa chỉ' />
                            <label>Số nhà, tên đường</label>
                            <input type="" className={cx("content__2-form-text")} placeholder='Nhập địa chỉ' />
                            <div className={cx("content__2-form-submit")}>
                                <input type="submit" className={cx("content__2-form-submit-text")} value="Lưu thông tin"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentAddress;