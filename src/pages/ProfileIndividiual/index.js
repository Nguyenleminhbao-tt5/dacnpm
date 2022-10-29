import styles from './ProfileIndividiual.module.scss';
import classNames from "classnames/bind";
import ProfileNav from "../../components/ProfileNav"
import React from 'react';
const cx = classNames.bind(styles);


function ProfileAIndividiual() {
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
                            THÔNG TIN CÁ NHÂN
                        </div>
                        <div className={cx("content__2-form")}>
                            <form>
                                <label>Họ và tên</label>
                                <input type="" className={cx("content__2-form-text")} placeholder='Nhập từ khóa tìm kiếm' />
                                <label>Ngày sinh</label>
                                <input type="" className={cx("content__2-form-text")} placeholder='Nhập từ khóa tìm kiếm' />
                                <label>Số điện thoại</label>
                                <input type="" className={cx("content__2-form-text")} placeholder='Nhập từ khóa tìm kiếm' />
                                <label>Email</label>
                                <input type="" className={cx("content__2-form-text")} placeholder='Nhập từ khóa tìm kiếm' />
                                <div className={cx("content__2-form-submit")}>
                                    <input type="submit" className={cx("content__2-form-submit-text")} value="Lưu thông tin"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileAIndividiual;