import { Navigate } from 'react-router-dom';
import { useGetUserQuery } from 'redux/authUser/userSlice';


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isSuccess } = useGetUserQuery();

    const shouldRedirect = !isSuccess;


    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};