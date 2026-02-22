import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  services = [
    'IT Consulting',
    'Cloud Solutions',
    'Cybersecurity',
    'Software Development',
    'AI & Machine Learning',
    'Managed IT Services',
  ];

  quickLinks = [
    { label: 'Home', route: '/' },
    { label: 'About Us', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Portfolio', route: '/portfolio' },
    { label: 'Contact', route: '/contact' },
  ];

  socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/company/zilltechnology' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/zilltechnology' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/zilltechnology' },
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://facebook.com/zilltechnology' },
  ];
}
