import Home from './pages/Home';
import StarshipDetail from './pages/StarshipDetail';

export const routes = [
    { path : '/', component : Home },
    { path : '/starship/:id', component : StarshipDetail },
    { path : '*', redirect : '/' }
];