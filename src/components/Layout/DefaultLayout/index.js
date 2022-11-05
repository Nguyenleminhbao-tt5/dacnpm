import classNames from "classnames";
import styles from './DefaultLayout.module.scss';
import '../../base.module.scss';

import Header from "../../Header";
import Footer from "../../Footer"

const cx=classNames.bind(styles);

/* Layout has value = 0 */
function DefaultLayout({children})
{
    return(
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('content')}>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;