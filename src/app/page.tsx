"use client"
import Link from 'next/link';
import { useState } from 'react';

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'business' | 'customer';
  businessInfo?: {
    businessName: string;
    category: string;
    description: string;
    workingHours: string;
  };
};

export type Business = {
  id: string;
  name: string;
  category: string;
  description: string;
  workingHours: string;
  ownerId: string;
};

export type Appointment = {
  id: string;
  businessId: string;
  customerId: string;
  businessName: string;
  customerName: string;
  date: string;
  time: string;
  service: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  notes?: string;
};

// Mock data
const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'Elite Hair Salon',
    category: 'Beauty & Wellness',
    description: 'Professional hair styling and beauty services',
    workingHours: '9:00 AM - 7:00 PM',
    ownerId: 'business1'
  },
  {
    id: '2',
    name: 'TechFix Solutions',
    category: 'Technology',
    description: 'Computer and phone repair services',
    workingHours: '10:00 AM - 6:00 PM',
    ownerId: 'business2'
  },
  {
    id: '3',
    name: 'Wellness Clinic',
    category: 'Healthcare',
    description: 'General healthcare and wellness consultations',
    workingHours: '8:00 AM - 5:00 PM',
    ownerId: 'business3'
  }
];

const mockAppointments: Appointment[] = [
  {
    id: '1',
    businessId: '1',
    customerId: 'customer1',
    businessName: 'Elite Hair Salon',
    customerName: 'John Doe',
    date: '2025-01-15',
    time: '10:00',
    service: 'Haircut',
    status: 'confirmed'
  },
  {
    id: '2',
    businessId: '2',
    customerId: 'customer1',
    businessName: 'TechFix Solutions',
    customerName: 'John Doe',
    date: '2025-01-16',
    time: '14:00',
    service: 'Laptop Repair',
    status: 'pending'
  }
];

export default function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
// const {data: session} = useSession();
// console.log(session);
  // if (!user) {
  //   return (
  //     <div className="min-h-screen bg-background">
  //       <AuthPage />
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-background">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        Home Page <Link href="/login">Login first to see your Dashboard</Link>
      </main>
    </div>
  );
}