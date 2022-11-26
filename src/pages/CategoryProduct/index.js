import styles from './CategoryProduct.module.scss'
import classNames from "classnames/bind";
import Product from "../../components/Product"
const cx = classNames.bind(styles);
function CategoryProduct() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx("grid")}>
        <div className={cx('body')}>
          <div className={cx('col1', '.grid__column-25')}>
            <div className={cx('list-item')}>
              <ul>
                <li><a>Nike</a></li>
                <li><a>Converse</a></li>
                <li><a>Puma</a></li>
                <li><a>Adidas</a></li>
              </ul>
            </div>
          </div>
          <div className={cx('col2', '.grid__column-75')}>
            <div className={cx('row')}>
              <div className={cx('grid__column-25')}>
                {<Product new={false} size={false} sale='30' URL_img='https://cf.shopee.vn/file/000519dcca77fb2c399bc1473b8ece60'
                  name='Dây giày Nike 1' price_new='70,000đ' price_old='100,000đ' />}
              </div>
              <div className={cx('grid__column-25')}>
                {<Product new={false} sale='30' size={false} URL_img='https://cf.shopee.vn/file/000519dcca77fb2c399bc1473b8ece60'
                  name='Dây giày Nike 1' price_new='70,000đ' price_old='100,000đ' />}
              </div>
              <div className={cx('grid__column-25')}>
                {<Product new={false} sale='30' size={false} URL_img='https://cf.shopee.vn/file/000519dcca77fb2c399bc1473b8ece60'
                  name='Dây giày Nike 1' price_new='70,000đ' price_old='100,000đ' />}
              </div>
              <div className={cx('grid__column-25')}>
                {<Product new={false} sale='30' size={false} URL_img='https://cf.shopee.vn/file/000519dcca77fb2c399bc1473b8ece60'
                  name='Dây giày Nike 1' price_new='70,000đ' price_old='100,000đ' />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CategoryProduct;