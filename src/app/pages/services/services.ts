import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  tag: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrls: ['./services.scss'],
})
export class ServicesComponent {
  activeFilter = signal('all');

  services: Service[] = [
    {
      icon: '💡',
      title: 'IT Consulting',
      description: 'Strategic technology advisory that aligns your IT roadmap with business objectives, helping you make smarter investments and faster decisions.',
      features: ['IT Strategy & Roadmap', 'Technology Assessment', 'Digital Transformation', 'Vendor Management', 'IT Governance', 'Cost Optimization'],
      color: '#1E5FA8',
      tag: 'consulting',
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'End-to-end cloud services — from migration planning to ongoing management — on AWS, Azure, and Google Cloud Platform.',
      features: ['Cloud Migration', 'Multi-Cloud Architecture', 'Cloud Security', 'Cost Management', 'Disaster Recovery', 'Cloud Native Apps'],
      color: '#2E7DD4',
      tag: 'cloud',
    },
    {
      icon: '🛡️',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions that protect your business assets, ensure compliance, and build cyber resilience from the ground up.',
      features: ['Security Assessment', 'SOC-as-a-Service', 'Penetration Testing', 'SIEM & Monitoring', 'Compliance (ISO, GDPR)', 'Incident Response'],
      color: '#143F72',
      tag: 'security',
    },
    {
      icon: '⚙️',
      title: 'Software Development',
      description: 'Custom enterprise software, APIs, and microservices tailored to your exact requirements using modern architectures and agile processes.',
      features: ['Enterprise Applications', 'API Development', 'Microservices', 'DevOps & CI/CD', 'Quality Assurance', 'Technical Support'],
      color: '#0D5FA8',
      tag: 'development',
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Transform your data into competitive advantage with AI-powered automation, predictive analytics, and intelligent decision-support systems.',
      features: ['Predictive Analytics', 'NLP & Chatbots', 'Computer Vision', 'Process Automation', 'Data Engineering', 'MLOps'],
      color: '#5B9FE0',
      tag: 'ai',
    },
    {
      icon: '🖥️',
      title: 'Managed IT Services',
      description: '24/7 proactive monitoring, helpdesk support, and infrastructure management — so your team can focus on innovation, not operations.',
      features: ['24/7 Monitoring', 'Helpdesk Support', 'Infrastructure Mgmt', 'Patch Management', 'Backup & Recovery', 'SLA Guarantee'],
      color: '#8C9FB0',
      tag: 'managed',
    },
  ];

  process = [
    { step: '01', title: 'Discovery', description: 'We deeply understand your business needs, existing infrastructure, and goals.' },
    { step: '02', title: 'Strategy', description: 'Our experts design a tailored technology strategy aligned to your objectives.' },
    { step: '03', title: 'Execution', description: 'Agile implementation with transparent progress reporting and quality checkpoints.' },
    { step: '04', title: 'Support', description: 'Ongoing optimization, monitoring, and 24/7 support to ensure lasting success.' },
  ];
}
