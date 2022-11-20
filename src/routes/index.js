/* Lưu đường dẫn chuyển trang */
import CategoryProduct from '../pages/CategoryProduct';
import ForgetPassword from '../pages/ForgetPassword';
import Homepage from '../pages/Homepage';
import Homepage_Ad from '../pages/Homepage_Ad';
import Homepage_Kh from '../pages/Homepage_Kh';
import InsertProduct from '../pages/InsertProduct';
import ListProduct from '../pages/ListProduct';
import Login from '../pages/Login';
import ModifiedProduct from '../pages/ModifiedProduct';
import PageOrder from '../pages/PageOrder';
import Pay from '../pages/Pay';
import PaymentAddress from '../pages/PaymentAddress';
import ProfileIndividiual from '../pages/ProfileIndividiual';
import ProfileOrder from '../pages/ProfileOrder';
import Register from '../pages/Register';
import Chitietsp from '../pages/ProfileProduct/chitietsp';
import Giohang from '../pages/Cart/cart';

const publicRoutes = [
    {
        path: '/Cart',
        component: Giohang,
        layout: 0
    },
    {
        path: '/CategoryProduct',
        component: CategoryProduct,
        layout: 0
    },
    {
        path: '/ForgetPassword',
        component: ForgetPassword,
        layout: 2
    },
    {
        path: '/',
        component: Homepage,
        layout: 0
    },
    {
        path: '/',
        component: Homepage_Ad,
        layout: 0
    },
    {
        path: '/',
        component: Homepage_Kh,
        layout: 0
    },
    {
        path: '/InsertProduct',
        component: InsertProduct,
        layout: 0
    },
    {
        path: '/ListProduct',
        component: ListProduct,
        layout: 0
    },
    {
        path: '/Login',
        component: Login,
        layout: 2 // layout này kh có header và footer
    },
    {
        path: '/ModifiedProduct',
        component: ModifiedProduct,
        layout: 0
    },
    {
        path: '/PageOrder',
        component: PageOrder,
        layout: 0
    },
    {
        path: '/PaymentAddress',
        component: PaymentAddress,
        layout: 0
    },
    {
        path: '/ProfileIndividiual',
        component: ProfileIndividiual,
        layout: 0
    },
    {
        path: '/ProfileOrder',
        component: ProfileOrder,
        layout: 0
    },
    {
        path: '/Cart/Pay',
        component: Pay,
        layout: 0
    },
    {
        path: '/Register',
        component: Register,
        layout: 2 // layout này kh có header và footer
    },
    {
        path: '/ProfileProduct',
        component: Chitietsp,
        layout: 0
    }
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };