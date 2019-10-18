import Home from './components/home';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Service from './components/Service';
import Detail from './components/Detail';

export const routes = [
    { path: '/', name: 'home', component: Home},
    { path: '/blog', name: 'blog', component: Blog},
    { path: '/contact', name: 'contact', component: Contact},
    { path: '/services', name: 'service', component: Service},
    { path: '/details/:pId', name: 'details', component: Detail}
];