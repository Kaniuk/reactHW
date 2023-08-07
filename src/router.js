import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts/MainLayouts";
import {AlbumsPage, CommentsPage, NotFoundPage, PostPage, TodosPage} from "./pages";


const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayouts/>,
        children: [
            {
                index: true,
                element: <Navigate to={'todos'}/>
            },
            {
                path: 'todos',
                element: <TodosPage/>
            },
            {
                path: 'albums',
                element: <AlbumsPage/>
            },
            {
                path: 'todos',
                element: <TodosPage/>
            },
            {
                path: 'comments',
                element: <CommentsPage/>,
                children: [{
                    path: 'posts/:postId',
                    element: <PostPage/>
                }]
            }

        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]);

export {
    router
};