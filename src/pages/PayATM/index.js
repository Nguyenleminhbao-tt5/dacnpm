import {Link} from 'react-router-dom'; 
import styles from './PayATM.module.scss';
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function PayATM() {
    return (
        <div className={cx('wrapper')}>
            <h1>THANH TOÁN</h1>
            <div class={cx('content')}>
                <span>CHUYỂN KHOẢN ĐỂ THANH TOÁN ĐƠN HÀNG</span>
                <span>Tên tài khoản: CTY ABC</span>
                <span>Số tài khoản: 123 4567 8900</span>
                <span>Ngân hàng: MB BANK - HCM</span>
                <span>Ghi chú: Thanh toán {"<Mã đơn hàng>"}</span>
                <span>Hot line: 1900 2722</span>
            </div>
            <div className={cx('sumbit')}>
                    <Link to="../../ProfileOrder"><button className={cx('button')}>Xác nhận</button></Link>
            </div>
        </div>
    );
}

export default PayATM;