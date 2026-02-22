import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
        title: 'Zill Technology | Enterprise IT Solutions',
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent),
        title: 'About Us | Zill Technology',
    },
    {
        path: 'services',
        loadComponent: () => import('./pages/services/services').then(m => m.ServicesComponent),
        title: 'Our Services | Zill Technology',
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.PortfolioComponent),
        title: 'Portfolio | Zill Technology',
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent),
        title: 'Contact Us | Zill Technology',
    },
    {
        path: '**',
        redirectTo: '',
    },
];
