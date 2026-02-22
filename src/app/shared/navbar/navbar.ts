import { Component, OnInit, OnDestroy, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = signal(false);
  isMobileOpen = signal(false);

  navLinks: NavLink[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Portfolio', route: '/portfolio' },
    { label: 'Contact', route: '/contact' },
  ];

  ngOnInit(): void {
    this.checkScroll();
  }

  ngOnDestroy(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  toggleMobile(): void {
    this.isMobileOpen.update(v => !v);
  }

  closeMobile(): void {
    this.isMobileOpen.set(false);
  }
}
