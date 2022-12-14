import classNames from "classnames/bind";
import styles from './Footer.module.scss';
import '../base.module.scss';
const cx=classNames.bind(styles);

function Footer()
{
    return(
        <footer className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('grid__row')}>
                    <div className={cx('grid__column-3-1_4')}>
                        <h3 className={cx('footer__heading')}>Về Web Shoes</h3>
                        <ul className={cx('footer__list')}>
                            <li className={cx('footer__list-item')}>
                                <a href="" className={cx('footer__list-item_link')} >Giới thiệu chung</a>
                            </li>
                            <li className={cx('footer__list-item')}>
                                <a href="" className={cx('footer__list-item_link')} >Tuyển dụng</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('grid__column-3-1_4')}>
                    <h3 className={cx('footer__heading')}>Liên Hệ</h3>
                        <ul className={cx('footer__list')}>
                            <li className={cx('footer__list-item')}>
                                <i className={cx('footer__list-icon','fa-solid fa-phone')}></i>
                                <span className={cx('footer__list-item_link')} >0398841276</span>
                            </li>
                            <li className={cx('footer__list-item')}>
                                <i className={cx('footer__list-icon','fa-regular fa-envelope')}> </i>
                                <span className={cx('footer__list-item_link')} >bao.nguyenminhbaott5@hcmut<br/>.edu.vn</span>
                            </li>
                            <li className={cx('footer__list-item')}>
                                <i className={cx('footer__list-icon','fa-solid fa-location-dot')}></i>
                                <span className={cx('footer__list-item_link')} >268 Lý Thường Kiệt, Phường 14<br/>, Quận 10, Tp Hồ Chí Minh</span>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('grid__column-3-1_4')}>
                        <h3 className={cx('footer__heading')}>Hỗ Trợ Khách Hàng</h3>
                        <ul className={cx('footer__list')}>
                            <li className={cx('footer__list-item')}>
                                <a href="" className={cx('footer__list-item_link')} >Mua hàng từ xa</a>
                            </li>
                            <li className={cx('footer__list-item')}>
                                <a href="" className={cx('footer__list-item_link')} >Quy định đổi trả</a>
                            </li>
                        </ul>
                        <div className={cx('footer__wrap')}>
                            <div className={cx('transportation')}>
                                <h3 className={cx('transportation__heading')}>Vận Chuyển</h3>
                                <div className={cx('transportation__img')}></div>
                            </div>
                            <div className={cx('payment')}>
                                <h3 className={cx('payment__heading')}>Thanh Toán</h3>
                                <div className={cx('payment__img')}></div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('grid__column-3-1_4')}>
                        <h3 className={cx('footer__heading')}>Dịch Vụ Cung Cấp</h3>
                        <ul className={cx('footer__list')}>
                            <li className={cx('footer__list-item')}>
                                <a href="" className={cx('footer__list-item_link')} >Dịch vụ sửa chữa</a>
                            </li>
                            <li className={cx('footer__list-item')}>
                                <a href="" className={cx('footer__list-item_link')} >Nâng cấp phần cứng</a>
                            </li>
                            <li className={cx('footer__list-item')}>
                                <a href="" className={cx('footer__list-item_link')} >Bảo hành sản phẩm</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('footer__copy')}>Copyright 2022 </div>
        </footer>
    );
}

export default Footer;