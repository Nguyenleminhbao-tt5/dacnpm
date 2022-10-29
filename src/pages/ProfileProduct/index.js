import styles from './ProfileProduct.module.scss';
import classNames from "classnames/bind";
import ProfileNav from "../../components/ProfileNav"
import ProductOrder from '../../components/ProductOrder';
const cx=classNames.bind(styles);


/* 
props là đối tượng sẽ chưa các thuộc tính của
một ProductOrder gồm URL_img(string), name(string), price_new(float), price_old(float),
number(int), size(int)
*/

function ProfileProduct ()
{
    return (
        <div className={cx('wrapper')}>
            <div className={cx('address')}>
               <span>Trang chủ {'>'} Hồ sơ {'>'} </span>
               <span className={cx('address_current')}>Danh sách đơn hàng</span>
            </div>
            <div className={cx('content')}>
                <div className={cx('content__1')}>
                    <div className={cx('content__1-nav')}>
                        <ProfileNav />
                    </div>
                </div>
                <div className={cx('content__2')}>
                    <div className={cx('list_order')}>
                        <h1 className={cx('list_header')}>
                            Danh sách đơn hàng
                        </h1>
                        <div className={cx('order1')}>
                            <h2 className={cx('order1__header')}>{'#'}Order001</h2>
                            <span className={cx('order1__state')}>Hoàn thành</span>
                            <div className={cx('order1__list')}>
                                <div className={cx('order1__list-1')}>
                                    {<ProductOrder number='1' new sale='30' size='39' URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                                        name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
                                </div>
                                <div className={cx('order1__list-2')}>
                                    {<ProductOrder number='1' new sale='30' size='39' URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                                        name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
                                </div>
                            </div>
                            <div className={cx('order1__calculate')}>
                                <div>
                                    <span className={cx('calculate')}>Tổng giá trị: </span>
                                    <span className={cx('calculate_price')}> 1,088,600đ</span>
                                </div>
                                <div>
                                    <span className={cx('calculate')}>Phí vận chuyển: </span>
                                    <span className={cx('calculate_price')}> 30,000đ</span>
                                </div>
                                <div>
                                    <span className={cx('calculate')}>Tổng: </span>
                                    <span className={cx('calculate_price')}> 1,118,600đ</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('order2')}>
                            <h2 className={cx('order2__header')}>{'#'}Order002</h2>
                            <span className={cx('order2__state')}>Hoàn thành</span>
                            <div className={cx('order2__list')}>
                                <div className={cx('order2__list-t1')}>
                                    {<ProductOrder number='1' new sale='30' size='39' URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                                        name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
                                </div>
                                <div className={cx('order2__list-2')}>
                                    {<ProductOrder number='1' new sale='30' size='39' URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                                        name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
                                </div>
                            </div>
                            <div className={cx('order2__calculate')}>
                                <div>
                                    <span className={cx('calculate')}>Tổng giá trị: </span>
                                    <span className={cx('calculate_price')}> 1,088,600đ</span>
                                </div>
                                <div>
                                    <span className={cx('calculate')}>Phí vận chuyển: </span>
                                    <span className={cx('calculate_price')}> 30,000đ</span>
                                </div>
                                <div>
                                    <span className={cx('calculate')}>Tổng: </span>
                                    <span className={cx('calculate_price')}> 1,118,600đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileProduct;