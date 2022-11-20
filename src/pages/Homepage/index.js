import { useState,useRef,useEffect } from "react";
import classNames from "classnames/bind";
import styles from './Homepage.module.scss';
import '../../components/base.module.scss';
import Product from "../../components/Product";
import { arr_commercial,beside_img} from "../../components/arr";

const cx=classNames.bind(styles);

function Homepage ()
{
    
    const len_arr=arr_commercial.length;
    const indexRef=useRef(0);
    const [index,setIndex]=useState(0);

    useEffect(()=>{
        setTimeout(()=>setIndex(index+1),3000);
        indexRef.current++;
        if(indexRef.current===len_arr) indexRef.current=0;
    },[index])
 
    return (
       <div className={cx('wrapper')}>
            <div className={cx('content-main')}>
                <div className={cx('grid')}>
                    <div className={cx('grid__row')}>
                        <div className={cx('grid__column-65')}>
                            <div className={cx('main__commercial')}>                  
                                <img className={cx('commercial-img')} src={arr_commercial[indexRef.current].URL_img}></img>
                            </div>
                        </div>
                        <div className={cx('grid__column-35')}>
                            <div className={cx('main__beside')}>
                                <div className={cx('main__beside-1')}>
                                    <img className={cx('beside-1-img')} src={arr_commercial[0].URL_img}></img>
                                </div>
                                <div className={cx('main__beside-2')}>
                                    <img className={cx('beside-2-img')} src={arr_commercial[1].URL_img}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('content-product')}>
                <div className={cx('grid')}>
                    <div className={cx('product__heading')}>SẢN PHẨM NỔI BẬT</div>
                    <div className={cx('grid__row')}>
                        <div className={cx('grid__column-25')}>
                            {<Product new sale='30' size={true} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg' 
                            name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ'/>}
                        </div>
                        <div className={cx('grid__column-25')}>
                            {<Product new sale='30' size={true} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg' 
                            name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ'/>}
                        </div>
                        <div className={cx('grid__column-25')}>
                            {<Product new sale='30' size={true} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg' 
                            name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ'/>}
                        </div>
                        <div className={cx('grid__column-25')}>
                            {<Product new sale='30' size={true} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg' 
                            name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ'/>}
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div className={cx('content-accessory')}>
                <div className={cx('grid')}>
                    <div className={cx('accessory__heading')}>PHỤ KIỆN KÈM THEO</div>
                    <div className={cx('grid__row')}>
                        <div className={cx('grid__column-25')}>
                            {<Product new={false} size={false} sale='30' URL_img='https://cf.shopee.vn/file/000519dcca77fb2c399bc1473b8ece60' 
                            name='Dây giày Nike 1' price_new='70,000đ' price_old='100,000đ'/>}
                        </div>
                        <div className={cx('grid__column-25')}>
                        {<Product new={false} sale='30' size={false} URL_img='https://cf.shopee.vn/file/000519dcca77fb2c399bc1473b8ece60' 
                            name='Dây giày Nike 1' price_new='70,000đ' price_old='100,000đ'/>}
                        </div>
                        <div className={cx('grid__column-25')}>
                        {<Product new={false} sale='30' size={false} URL_img='https://cf.shopee.vn/file/000519dcca77fb2c399bc1473b8ece60' 
                            name='Dây giày Nike 1' price_new='70,000đ' price_old='100,000đ'/>}
                        </div>
                        <div className={cx('grid__column-25')}>
                        {<Product new={false} sale='30' size={false} URL_img='https://cf.shopee.vn/file/000519dcca77fb2c399bc1473b8ece60' 
                            name='Dây giày Nike 1' price_new='70,000đ' price_old='100,000đ'/>}
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default Homepage;