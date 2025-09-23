import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Calendar, Clock, Search, Building2, MapPin, Users, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import type { User, Business, Appointment } from '@/app/page';

interface CustomerDashboardProps {
  user?: User;
  businesses: Business[];
  appointments: Appointment[];
  onAppointmentBook: (appointment: Appointment) => void;
}

export function CustomerDashboard({ user, businesses, appointments, onAppointmentBook }: CustomerDashboardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [bookingForm, setBookingForm] = useState({
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || business.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(businesses.map(b => b.category)))];

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBusiness) return;

    // const newAppointment: Appointment = {
    //   id: `apt_${Date.now()}`,
    //   businessId: selectedBusiness.id,
    //   customerId: user?.id,
    //   businessName: selectedBusiness.name,
    //   customerName: user?.name,
    //   date: bookingForm.date,
    //   time: bookingForm.time,
    //   service: bookingForm.service,
    //   status: 'pending',
    //   notes: bookingForm.notes
    // };

    // onAppointmentBook(newAppointment);
    setBookingForm({ date: '', time: '', service: '', notes: '' });
    setSelectedBusiness(null);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4 text-red-600" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Customer Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user?.name}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
                <p className="text-2xl font-semibold">{appointments.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-semibold">
                  {appointments.filter(apt => apt.status === 'pending').length}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Confirmed</p>
                <p className="text-2xl font-semibold">
                  {appointments.filter(apt => apt.status === 'confirmed').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Browse Businesses */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Browse Businesses
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search businesses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Business Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBusinesses.map((business) => (
              <Card key={business.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">{business.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {business.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {business.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {business.workingHours}
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full" 
                          onClick={() => setSelectedBusiness(business)}
                        >
                          Book Appointment
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Book Appointment with {selectedBusiness?.name}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleBookAppointment} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="service">Service Required</Label>
                            <Input
                              id="service"
                              placeholder="e.g., Haircut, Consultation, Repair"
                              value={bookingForm.service}
                              onChange={(e) => setBookingForm(prev => ({ ...prev, service: e.target.value }))}
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="date">Date</Label>
                              <Input
                                id="date"
                                type="date"
                                value={bookingForm.date}
                                onChange={(e) => setBookingForm(prev => ({ ...prev, date: e.target.value }))}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="time">Time</Label>
                              <Select
                                value={bookingForm.time}
                                onValueChange={(value) => setBookingForm(prev => ({ ...prev, time: value }))}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select time" />
                                </SelectTrigger>
                                <SelectContent>
                                  {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'].map(time => (
                                    <SelectItem key={time} value={time}>{time}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="notes">Additional Notes (Optional)</Label>
                            <Textarea
                              id="notes"
                              placeholder="Any special requirements or notes..."
                              value={bookingForm.notes}
                              onChange={(e) => setBookingForm(prev => ({ ...prev, notes: e.target.value }))}
                            />
                          </div>
                          <Button type="submit" className="w-full">
                            Confirm Booking
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredBusinesses.length === 0 && (
            <div className="text-center py-8">
              <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No businesses found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* My Appointments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            My Appointments
          </CardTitle>
        </CardHeader>
        <CardContent>
          {appointments.length === 0 ? (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No appointments yet</h3>
              <p className="text-muted-foreground">
                Book your first appointment with a business above.
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Business</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.businessName}</TableCell>
                    <TableCell>{appointment.service}</TableCell>
                    <TableCell>{new Date(appointment.date).toLocaleDateString()}</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {appointment.time}
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(appointment.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(appointment.status)}
                          {appointment.status}
                        </span>
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}