import index from '../view/index'
import about from '../view/about'
import comment from '../view/comment'

import Router from 'vue-router'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/comment',
            name: 'comment',
            component: comment
        }
    ]
})
