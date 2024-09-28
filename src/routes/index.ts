import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";


export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/login',
        page: LoginPage,
        isShowHeader: true
    },
    {
        path: '/register',
        page: RegisterPage,
        isShowHeader: true
    },
    {
        path: '/forgot-password',
        page: ForgotPasswordPage,
        isShowHeader: true
    },
    {
        path: '/reset-password',
        page: ResetPasswordPage,
        isShowHeader: true
    }
    
]