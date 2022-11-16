import classNames from "classnames";
import styles from './DefaultLayout.module.scss';
import '../../base.module.scss';

import Header_KH from "../../Header_KH";
import Header from "../../Header";
import Footer from "../../Footer"
import { countLogin } from "../../../pages/Login";
const cx=classNames.bind(styles);

console.log(countLogin);
/* Layout has value = 0 */
function DefaultLayout({children})
{
    return(
        
        <div className={cx('wrapper')}>
            {
                countLogin==0?<Header></Header>:<Header_KH></Header_KH>
            }
            <div className={cx('content')}>
                {children}
            </div>
            <Footer/>
        </div>

    );
}

export default DefaultLayout;