import React from 'react';
import {Outlet} from "react-router-dom";

import {Comments} from "../../components";
import css from './CommentsPage.module.css';

const CommentsPage = () => {
    return (
        <div className={css.Comments}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};