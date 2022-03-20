import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Calendar from '../pages/Calendar';
import Login from '../pages/Login';
import { privateRoutes, publicRoutes, RouteNames } from '../router/routes';

const AppRouter = () => {
    const isAuth = false

    return (
        isAuth ? 
        <Routes>
                {privateRoutes.map((route) => {
                    return (
                        <Route key={route.path} path={route.path} element={<Calendar />} />
                    )
                })}
                <Route path="*" element={<Navigate to={RouteNames.CALENDAR} replace />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route) => {
                    return (
                        <Route key={route.path} path={route.path} element={<Login />} />
                    )
                })}
                <Route path="*" element={<Navigate to={RouteNames.LOGIN} replace />} />
            </Routes>
    );
};

export default AppRouter;