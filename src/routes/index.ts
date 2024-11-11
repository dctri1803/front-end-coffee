import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import BlogDetailPage from "../pages/BlogDetail/BlogDetailPage";
import BlogListPage from "../pages/BlogListPage/BlogListPage";


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
        path: '/product/:productId',
        page: ProductDetailPage,
        isShowFooterAndHeader: true,
    },
    {
        path: '/blog',
        page: BlogListPage,
        isShowFooterAndHeader: true,
    },
    {
        path: '/blog/:id',
        page: BlogDetailPage,
        isShowFooterAndHeader: true,
    },
    {
        path: '*',
        page: NotFoundPage,
        isShowFooterAndHeader: false
    }
    
]