import styles from './Pay.module.scss';
import classNames from "classnames/bind";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Pay() {
    // const [buttonclass1, setbuttonclass1] = useState(false);
    // const [buttonclass2, setbuttonclass2] = useState(false);
    // const onClick1 = () => {
    //     setbuttonclass1(!buttonclass1);
    // };
    // const onClick2 = () => {
    //     setbuttonclass2(!buttonclass2);
    // };
    return (
        <div className={cx('wrapper')}>
            {/* <h1 className={cx('header')}>
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
            </div> */}
            <div className={cx('col1')}>
                <form className={cx('cus-infor')}>
                    <div className={cx('section-header')}>
                        <h2 className={cx('section-title')}>Thông tin giao hàng</h2>
                    </div>
                    <div className={cx('customer-name')}>
                        <label className={cx('cus-name-label')}>Họ và tên</label>
                        <input className={cx('cus-name')} placeholder='VD: Nguyễn Văn A' type='text'></input>
                    </div>
                    <div className={cx('customer-mail-phone')}>
                        <div className={cx('customer-mail')}>
                            <label className={cx('cus-mail-label')}>Email</label>
                            <input className={cx('cus-mail')} placeholder='VD: nguyenvana@gmail.com' type='text'></input>
                        </div>
                        <div className={cx('space-mail-phone')}></div>
                        <div className={cx('customer-phone')}>
                            <label className={cx('cus-phone-label')}>Số điện thoại</label>
                            <input className={cx('cus-phone')} placeholder='VD: 0xxxxxxxxx' type='text'></input>
                        </div>
                    </div>
                    <div className={cx('customer-address')}>
                        <label className={cx('cus-address-label')}>Địa chỉ</label>
                        <input className={cx('cus-address')} placeholder='Số nhà, Tên đường, xã, quận/huyện, tỉnh/thành phố ' type='text'></input>
                    </div>
                    <div className={cx('customer-note')}>
                        <label className={cx('cus-mail-label')}>Địa chỉ</label>
                        <textarea className={cx('cus-note')} placeholder='Ghi chú'></textarea>
                    </div>
                    <div className={cx('customer-pay-type')}>
                        <h3>Phương thức thanh toán</h3>
                        <div className={cx('customer-pay')}>
                            <div className={cx('customer-radio1')}>
                                <div className={cx('radio-input')}>
                                    <input type='radio' name='paymethod'></input>
                                </div>
                                <div className={cx('radio-title')}>Thanh toán khi nhận hàng</div>
                            </div>
                            <div className={cx('customer-radio2')}>
                                <div className={cx('cus-radio2')}>
                                    <div className={cx('radio-input')} id='radio2'>
                                        <input className={cx('radio2')} type='radio' name='paymethod' value='ATM'></input>
                                    </div>
                                    <div className={cx('radio-title')}>ATM Card/ Internet Banking</div>
                                </div>
                                <div className={cx('ATM-infor')}>
                                    <div className={cx('ATM')}>
                                        <h2><strong>CHUYỂN KHOẢN ĐỂ THANH TOÁN ĐƠN HÀNG</strong></h2>
                                        <h3>Tên tài khoản: <strong>CÔNG TY TNHH SHAT</strong></h3>
                                        <h3>Số tài khoản:&nbsp;<strong>4994 9666 6868</strong></h3>
                                        <h3>Ngân hàng: <strong>MB BANK - HCM</strong></h3>
                                        <h3><strong>Ghi chú: </strong>Thanh toán &lt;Mã ĐH&gt; - SĐT</h3>
                                        <h3><strong>Hotline: </strong>1900 0270</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content__3')}>
                        <Link to="/ProfileOrder"><input className={cx('button')} type='submit' value='Xác nhận'></input></Link>
                    </div>
                </form>
            </div>
            <div className={cx('col2')}>
                <div className={cx('ship-fee')}>
                    <h2>Phí vận chuyển</h2>
                    <span className={cx('ship')}>504,000</span>
                    <span>đ</span>
                </div>
                <div className={cx('total-fee')}>
                    <h2>Tổng cộng</h2>
                    <span className={cx('total')}>504,000</span>
                    <span>đ</span>
                </div>
            </div>
        </div >
    );
}

export default Pay;