import styles from './ListProduct.module.scss';
import classNames from "classnames/bind";

const cx=classNames.bind(styles);

function ListProduct ()
{
    return (
        <div className={cx('wrapper')}>
        </div>
    );
}

export default ListProduct;