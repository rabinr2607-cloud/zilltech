import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

interface Office {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  flag: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {
  formSubmitted = signal(false);
  isLoading = signal(false);

  formData = {
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  };

  services = [
    'IT Consulting',
    'Cloud Solutions',
    'Cybersecurity',
    'Software Development',
    'AI & Machine Learning',
    'Managed IT Services',
    'Other',
  ];

  offices: Office[] = [
    {
      city: 'Bangalore',
      country: 'India',
      address: '123 Tech Park, Innovation Hub, Bangalore, KA 560001',
      phone: '+91 98765 43210',
      email: 'india@zilltechnology.com',
      flag: '🇮🇳',
    },
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'Level 14, Emirates Tower, Sheikh Zayed Road, Dubai, UAE',
      phone: '+971 4 123 4567',
      email: 'uae@zilltechnology.com',
      flag: '🇦🇪',
    },
    {
      city: 'London',
      country: 'UK',
      address: '5th Floor, 30 St Mary Axe, London, EC3A 8BF, UK',
      phone: '+44 20 7123 4567',
      email: 'uk@zilltechnology.com',
      flag: '🇬🇧',
    },
  ];

  onSubmit(): void {
    this.isLoading.set(true);
    // Simulated form submission
    setTimeout(() => {
      this.isLoading.set(false);
      this.formSubmitted.set(true);
    }, 1500);
  }

  resetForm(): void {
    this.formSubmitted.set(false);
    this.formData = { name: '', email: '', company: '', phone: '', service: '', message: '' };
  }
}
