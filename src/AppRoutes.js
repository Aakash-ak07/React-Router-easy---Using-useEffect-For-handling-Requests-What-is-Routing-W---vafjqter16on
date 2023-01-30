import React from 'react';
import { Route, Routes, Switch } from "react-router";
import {Home} from './Pages/Home'
import { Index } from "./Pages/Index";
import { NotFound } from "./Pages/NotFound";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" exect element={<Index />} />
            <Route path="/home" exect element={<Home />} />
            <Route path="*" exect element={<NotFound />} />
        </Routes>
    );
};