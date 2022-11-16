import styles from './CategoryProduct.module.scss'
import classNames from "classnames/bind";
import Product from "../../components/Product"
const cx = classNames.bind(styles);
function CategoryProduct() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('body')}>
        <div className={cx('col1')}>
          <div className={cx('list-item')}>
            <ul>
              <li><a>Nike</a></li>
              <li><a>Converse</a></li>
              <li><a>Puma</a></li>
              <li><a>Adidas</a></li>
            </ul>
          </div>
        </div>
        <div className={cx('col2')}>
          <div className={cx('row')}>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
          </div>
          <div className={cx('row')}>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
          </div>
          <div className={cx('row')}>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
          </div>
          <div className={cx('row')}>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
            <div className={cx('item')}>
              {<Product new sale='30' size={false} URL_img='https://ordixi.com/wp-content/uploads/2020/10/0eb4c83d.jpg'
                name='Sneaker class 1 ' price_new='594,300đ' price_old='849,000đ' />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CategoryProduct;