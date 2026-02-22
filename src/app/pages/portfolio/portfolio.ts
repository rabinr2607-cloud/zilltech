import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Project {
  title: string;
  category: string;
  tag: string;
  description: string;
  tech: string[];
  icon: string;
  color: string;
  result: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss'],
})
export class PortfolioComponent {
  activeFilter = signal('all');

  filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Cloud', value: 'cloud' },
    { label: 'AI/ML', value: 'ai' },
    { label: 'Security', value: 'security' },
    { label: 'Development', value: 'dev' },
    { label: 'Managed', value: 'managed' },
  ];

  projects: Project[] = [
    {
      title: 'FinSecure Cloud Migration',
      category: 'Cloud Solutions',
      tag: 'cloud',
      description: 'Migrated a 500-user financial firm from on-premise infrastructure to a secure, multi-cloud AWS + Azure architecture, achieving 40% cost reduction and zero downtime.',
      tech: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'PostgreSQL'],
      icon: '☁️',
      color: '#2E7DD4',
      result: '40% cost reduction',
    },
    {
      title: 'HealthBridge AI Analytics',
      category: 'AI & Machine Learning',
      tag: 'ai',
      description: 'Built a real-time patient data analytics platform using ML models that predicts readmission risk with 91% accuracy, enabling proactive clinical interventions.',
      tech: ['Python', 'TensorFlow', 'Azure ML', 'Spark', 'Power BI'],
      icon: '🤖',
      color: '#5B9FE0',
      result: '91% prediction accuracy',
    },
    {
      title: 'LogiTrack Security Overhaul',
      category: 'Cybersecurity',
      tag: 'security',
      description: 'Conducted comprehensive security audit and implemented SOC infrastructure for a global logistics company, reducing security incidents by 85% in the first 6 months.',
      tech: ['SIEM', 'CrowdStrike', 'Zero Trust', 'ISO 27001', 'SOAR'],
      icon: '🛡️',
      color: '#143F72',
      result: '85% fewer incidents',
    },
    {
      title: 'RetailNow E-Commerce Platform',
      category: 'Software Development',
      tag: 'dev',
      description: 'Designed and built a high-performance omnichannel e-commerce platform handling 50,000+ concurrent users, with real-time inventory and AI-driven recommendations.',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Redis', 'Docker'],
      icon: '⚙️',
      color: '#1E5FA8',
      result: '300% throughput increase',
    },
    {
      title: 'SmartMfg IoT Automation',
      category: 'AI & Machine Learning',
      tag: 'ai',
      description: 'Implemented predictive maintenance AI for a manufacturing plant, analysing IoT sensor data to prevent equipment failures — saving $2M in annual maintenance costs.',
      tech: ['Python', 'Azure IoT', 'Power Platform', 'SQL', 'Grafana'],
      icon: '🏭',
      color: '#8C9FB0',
      result: '$2M annual savings',
    },
    {
      title: 'EduNext Cloud Platform',
      category: 'Cloud Solutions',
      tag: 'cloud',
      description: 'Built a cloud-native LMS for 200,000+ students across 15 countries. Architected for 99.99% availability with automatic scaling and GDPR compliance.',
      tech: ['GCP', 'Kubernetes', 'React', 'PostgreSQL', 'Redis'],
      icon: '🎓',
      color: '#0D5FA8',
      result: '99.99% uptime',
    },
    {
      title: 'BankCore Managed Services',
      category: 'Managed IT Services',
      tag: 'managed',
      description: 'Provided end-to-end managed IT for a regional bank — 24/7 monitoring, helpdesk, patch management, and DR — achieving 99.97% system availability over 3 years.',
      tech: ['ServiceNow', 'Datadog', 'Ansible', 'Veeam', 'VMware'],
      icon: '🏦',
      color: '#3A6AA8',
      result: '99.97% availability',
    },
    {
      title: 'GoSecure Zero Trust Implementation',
      category: 'Cybersecurity',
      tag: 'security',
      description: 'Designed and deployed a complete Zero Trust network architecture for a SaaS company, eliminating lateral movement risks and achieving FedRAMP readiness.',
      tech: ['Zscaler', 'Okta', 'CrowdStrike', 'Palo Alto', 'HashiCorp'],
      icon: '🔐',
      color: '#143F72',
      result: 'FedRAMP ready',
    },
    {
      title: 'TelcoNext OSS/BSS Modernization',
      category: 'Software Development',
      tag: 'dev',
      description: 'Modernized legacy telecom billing and operations systems into a cloud-native microservices architecture, reducing time-to-market for new products by 60%.',
      tech: ['Java Spring', 'Kafka', 'PostgreSQL', 'Kubernetes', 'Istio'],
      icon: '📡',
      color: '#2E7DD4',
      result: '60% faster launches',
    },
  ];

  get filteredProjects(): Project[] {
    const f = this.activeFilter();
    return f === 'all' ? this.projects : this.projects.filter(p => p.tag === f);
  }

  setFilter(value: string): void {
    this.activeFilter.set(value);
  }
}
