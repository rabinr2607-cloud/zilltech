import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
  color: string;
}

interface WhyUs {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('countEl') counterEls!: QueryList<ElementRef>;

  activeTestimonial = signal(0);
  private testimonialInterval: ReturnType<typeof setInterval> | null = null;

  services: Service[] = [
    { icon: '💡', title: 'IT Consulting', description: 'Strategic technology guidance to align your IT infrastructure with business goals and drive operational efficiency.', color: '#1E5FA8' },
    { icon: '☁️', title: 'Cloud Solutions', description: 'Scalable, secure cloud architecture on AWS, Azure, and GCP. Migration, optimization, and management.', color: '#2E7DD4' },
    { icon: '🛡️', title: 'Cybersecurity', description: 'End-to-end security protocols, vulnerability assessments, and compliance management for total data protection.', color: '#143F72' },
    { icon: '⚙️', title: 'Software Development', description: 'Custom enterprise applications, APIs, and microservices built with modern tech stacks and agile methodology.', color: '#0D5FA8' },
    { icon: '🤖', title: 'AI & Machine Learning', description: 'Intelligent automation, predictive analytics, and AI-driven insights that transform your data into value.', color: '#5B9FE0' },
    { icon: '🖥️', title: 'Managed IT Services', description: '24/7 monitoring, proactive maintenance, and helpdesk support to keep your systems running at peak performance.', color: '#8C9FB0' },
  ];

  stats: Stat[] = [
    { value: 250, suffix: '+', label: 'Projects Delivered', icon: '🏆' },
    { value: 120, suffix: '+', label: 'Enterprise Clients', icon: '🤝' },
    { value: 15, suffix: '+', label: 'Years of Experience', icon: '📅' },
    { value: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Rajesh Kumar',
      title: 'CTO',
      company: 'FinSecure Corp',
      quote: 'Zill Technology transformed our outdated infrastructure into a cutting-edge cloud platform. Their expertise in cybersecurity gave us the confidence to operate at scale. Exceptional team, exceptional results.',
      rating: 5,
      initials: 'RK',
      color: '#1E5FA8',
    },
    {
      name: 'Sarah Mitchell',
      title: 'VP Engineering',
      company: 'HealthBridge Systems',
      quote: 'The AI/ML solution they built for us cut our data processing time by 70%. The team\'s domain knowledge and technical depth are unmatched. I would recommend Zill Technology to any enterprise looking for real transformation.',
      rating: 5,
      initials: 'SM',
      color: '#143F72',
    },
    {
      name: 'Amar Patel',
      title: 'Director IT',
      company: 'LogiTrack Global',
      quote: 'From day one, the Zill team felt like an extension of our own. Their managed IT services have given us 99.9% uptime and our staff now focuses on innovation rather than firefighting. Truly a strategic partner.',
      rating: 5,
      initials: 'AP',
      color: '#2E7DD4',
    },
  ];

  whyUs: WhyUs[] = [
    { icon: '🏅', title: 'Enterprise-Grade Quality', description: 'Every solution is built to enterprise standards with robust architecture, security, and scalability at its core.' },
    { icon: '⚡', title: 'Agile Delivery', description: 'Iterative, sprint-based delivery that ensures you see tangible results fast and can adapt as requirements evolve.' },
    { icon: '🔒', title: 'Security-First Approach', description: 'Security is baked in from the ground up — not an afterthought — ensuring your data and operations are always protected.' },
    { icon: '📞', title: '24/7 Support', description: 'Our dedicated support team is available around the clock to ensure your systems remain operational at all times.' },
    { icon: '🌍', title: 'Global Expertise', description: 'With clients across 20+ countries, we bring a global perspective combined with local market understanding.' },
    { icon: '📈', title: 'ROI-Focused', description: 'We measure success by your success — every engagement is tied to measurable business outcomes and ROI targets.' },
  ];

  clients = ['TechCorp', 'FinSecure', 'HealthBridge', 'LogiTrack', 'SmartMfg', 'RetailNow', 'EduNext', 'CloudFirst'];

  ngOnInit(): void {
    this.startTestimonialRotation();
  }

  ngAfterViewInit(): void {
    this.initCounterObserver();
  }

  private startTestimonialRotation(): void {
    this.testimonialInterval = setInterval(() => {
      this.activeTestimonial.update(i => (i + 1) % this.testimonials.length);
    }, 5000);
  }

  setTestimonial(index: number): void {
    this.activeTestimonial.set(index);
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
    this.startTestimonialRotation();
  }

  private initCounterObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.getAttribute('data-target') || '0', 10);
            this.animateCounter(el, target);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    this.counterEls.forEach(el => observer.observe(el.nativeElement));
  }

  private animateCounter(el: HTMLElement, target: number): void {
    const duration = 2000;
    const step = 16;
    const steps = duration / step;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toString();
    }, step);
  }

  get stars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  ngOnDestroy(): void {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }
}
