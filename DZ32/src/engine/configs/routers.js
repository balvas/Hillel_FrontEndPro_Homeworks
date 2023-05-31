// Pages
import Main from '../../ui/pages/Main';
import About from '../../ui/pages/About';
import Contact from '../../ui/pages/Contact';

export const links = {
    'main': '/',
    'about': '/about',
    'contact': '/contact'
}

const routes = [
    {
        path: links.main,
        element: <Main />
    },
    {
        path: links.about,
        element: <About />
    },
    {
        path: links.contact,
        element: <Contact />
    }
];

export default routes;