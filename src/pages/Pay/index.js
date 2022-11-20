import styles from './Pay.module.scss';
import classNames from "classnames/bind";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Pay() {
    const [buttonclass1, setbuttonclass1] = useState(false);
    const [buttonclass2, setbuttonclass2] = useState(false);
    const onClick1 = () => {
        setbuttonclass1(!buttonclass1);
    };
    const onClick2 = () => {
        setbuttonclass2(!buttonclass2);
    };
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('header')}>
                THANH TOÁN
            </h1>
            <div className={cx('content')}>
                <div className={cx('box-cont')}>
                    <div className={cx('content__1')} onClick={() => onClick1()} style={{ backgroundColor: buttonclass1 ? '#6699FF' : '' }}>
                        <div className={cx('img1')}>
                            <img className={cx('img-1')} src={require("../../assets/cash_logo.JPG")}></img>
                        </div>
                        <button className={cx('pay1')}>THANH TOÁN KHI NHẬN HÀNG</button>
                    </div>
                </div>
                <div className={cx('box-cont')}>
                    <div className={cx('content__2')} onClick={() => onClick2()} style={{ backgroundColor: buttonclass2 ? '#6699FF' : '' }}>
                        <div className={cx('img2')}>
                            <img className={cx('img-2')} src={require("../../assets/atm_logo.PNG")}></img>
                        </div>
                        <button className={cx('pay1')}>THANH TOÁN BẰNG ATM CARD/INTERNET BANKING</button>
                    </div>
                </div>
                <div className={cx('address_pay')} style={{ display: buttonclass2 ? 'block' : 'none' }} >
                    <div className={cx('address_list')}>
                        <div>CHUYỂN KHOẢN ĐỂ THANH TOÁN ĐƠN HÀNG</div>
                        <div>Tên tài khoản: CTY ABC</div>
                        <div>Số tài khoản: 123 4567 8900</div>
                        <div>Ngân hàng: MB BANK - HCM</div>
                        <div>Ghi chú: Thanh toán - Mã đơn hàng</div>
                        <div>Hot line: 1900 2722</div>
                    </div>
                </div>
                <div className={cx('content__3')}>
                    <Link to="/ProfileOrder"><button className={cx('button')}>Xác nhận</button></Link>
                </div>
            </div>
        </div >
    );
}

export default Pay;