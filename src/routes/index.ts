import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";


export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowFooterAndHeader: true,
    },
    {
        path: '/login',
        page: LoginPage,
        isShowFooterAndHeader: false,
    },
    {
        path: '/register',
        page: RegisterPage,
        isShowFooterAndHeader: false,
    },
    {
        path: '/forgot-password',
        page: ForgotPasswordPage,
        isShowFooterAndHeader: false,
    },
    {
        path: '/reset-password',
        page: ResetPasswordPage,
        isShowFooterAndHeader: false,
    },
    {
        path: '/product-details',
        page: ProductDetailPage,
        isShowFooterAndHeader: true,
    }
    
]