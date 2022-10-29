import classNames from "classnames/bind";
import styles from './Address.module.scss';

const cx = classNames.bind(styles);

/* 
    props là đối tượng sẽ chưa các thuộc tính của
    một Address gồm: name, address1, address2, address3, address4, phonenumber
*/


function Address(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('name')}>
                {props.name}
            </div>
            <div className={cx('address')}>
                <div className={cx('address_1')}>
                    {props.address1}
                </div>
                <div className={cx('address_2')}>
                    {props.address2}
                </div>
                <div className={cx('address_3')}>
                    {props.address3}
                </div>
                <div className={cx('address_4')}>
                    {props.address4}
                </div>
            </div>
            <div className={cx('phonenumber')}>
                Phone:
                {props.phonenumber}
            </div>
        </div>
    )
}

export default Address;