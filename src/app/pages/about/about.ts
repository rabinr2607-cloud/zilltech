import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  initials: string;
  color: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class AboutComponent {
  timeline: TimelineItem[] = [
    { year: '2009', title: 'Founded', description: 'Zill Technology was founded with a vision to democratize enterprise IT for growing businesses.' },
    { year: '2012', title: 'Cloud Practice Launch', description: 'Launched our cloud division, helping 30+ clients migrate to modern cloud infrastructure in the first year.' },
    { year: '2015', title: 'Global Expansion', description: 'Expanded operations to serve clients across 10+ countries, establishing our international delivery model.' },
    { year: '2018', title: 'AI & ML Division', description: 'Established our AI/ML center of excellence, delivering intelligent automation and analytics solutions.' },
    { year: '2021', title: 'Cybersecurity Practice', description: 'Launched dedicated cybersecurity practice with ISO 27001 certification and a team of 40+ security experts.' },
    { year: '2024', title: '250+ Projects Milestone', description: 'Celebrated delivering over 250 enterprise projects across 20+ countries, serving 120+ clients worldwide.' },
  ];

  team: TeamMember[] = [
    { name: 'Vikram Shah', role: 'CEO & Founder', expertise: 'Enterprise Strategy', initials: 'VS', color: '#1E5FA8' },
    { name: 'Dr. Priya Nair', role: 'CTO', expertise: 'Cloud Architecture & AI', initials: 'PN', color: '#143F72' },
    { name: 'Marcus Chen', role: 'VP Cybersecurity', expertise: 'Security & Compliance', initials: 'MC', color: '#2E7DD4' },
    { name: 'Anita Rodrigues', role: 'Head of Delivery', expertise: 'Project Management', initials: 'AR', color: '#5B9FE0' },
    { name: 'James O\'Brien', role: 'VP Cloud Services', expertise: 'AWS, Azure, GCP', initials: 'JO', color: '#8C9FB0' },
    { name: 'Sonia Mehta', role: 'Director, AI/ML', expertise: 'Machine Learning & Data', initials: 'SM', color: '#1A4A8A' },
    { name: 'Rafael Torres', role: 'Client Success Lead', expertise: 'Enterprise Relationships', initials: 'RT', color: '#0D5FA8' },
    { name: 'Nina Kapoor', role: 'Engineering Lead', expertise: 'Software Architecture', initials: 'NK', color: '#3A6AA8' },
  ];

  values: Value[] = [
    { icon: '💎', title: 'Excellence', description: 'We pursue the highest standards in everything we deliver, constantly raising the bar for quality.' },
    { icon: '🤝', title: 'Integrity', description: 'We build relationships on transparency, honesty, and a commitment to doing what we say.' },
    { icon: '🔬', title: 'Innovation', description: 'We embrace emerging technologies and creative thinking to solve complex business challenges.' },
    { icon: '🌱', title: 'Sustainability', description: 'We design solutions with long-term value, helping clients build resilient, future-ready technology.' },
  ];
}
