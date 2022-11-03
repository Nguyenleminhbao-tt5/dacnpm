import styles from './Pay.module.scss';
import classNames from "classnames/bind";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Pay() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('header')}>
                THANH TOÁN
            </h1>
            <div className={cx('content')}>
                <div className={cx('content__1')}>
                    <div className={cx('img1')}>
                        <img src={require("../../assets/cash_logo.JPG")}></img>
                    </div>
                    <div className={cx('pay1')}>THANH TOÁN KHI NHẬN HÀNG</div>
                </div>
                <div className={cx('content__2')}>
                    <div className={cx('img2')}>
                        <img src={require("../../assets/atm_logo.PNG")}></img>
                    </div>
                    <div className={cx('pay2')}>THANH TOÁN BẰNG ATM CARD/INTERNET BANKING</div>
                </div>
                <div className={cx('content__3')}>
                    <Link to="/PayATM"><button className={cx('button')}>Xác nhận</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Pay;