"use client"
import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { UserPlus, Users } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
// import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { cn } from '@/lib/utils';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { registerBusiness } from '@/services/httpServices';

function RegisterBusiness() {

  const [registerForm, setRegisterForm] = useState({
    ownerName: '',
    email: '',
    phone: '',
    password: '',
    businessName: '',
    category: '',
    openingHours: '10:00',
    closingHours: '19:00',
  });

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    await registerBusiness(registerForm);
  }

  return (
    <div><Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
          Register Your Business
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="owner-name">Your Name</Label>
            <Input
              id="owner-name"
              placeholder="Enter your full name"
              value={registerForm.ownerName}
              onChange={(e) => setRegisterForm(prev => ({ ...prev, ownerName: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              value={registerForm.phone}
              onChange={(e) => setRegisterForm(prev => ({ ...prev, phone: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="owner-email">Email</Label>
            <Input
              id="owner-email"
              type="email"
              placeholder="Enter your email"
              value={registerForm.email}
              onChange={(e) => setRegisterForm(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="owner-password">Password</Label>
            <Input
              id="owner-password"
              type="password"
              placeholder="Create a password"
              value={registerForm.password}
              onChange={(e) => setRegisterForm(prev => ({ ...prev, password: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="business-name">Business Name</Label>
            <Input
              id="business-name"
              placeholder="Enter your business name"
              value={registerForm.businessName}
              onChange={(e) => setRegisterForm(prev => ({ ...prev, businessName: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select
              value={registerForm.category}
              onValueChange={(value) => setRegisterForm(prev => ({ ...prev, category: value }))}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder="Select business category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Beauty & Wellness">Beauty & Wellness</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Automotive">Automotive</SelectItem>
                <SelectItem value="Home Services">Home Services</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Legal">Legal</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='flex gap-4'>
          <div className="flex flex-col gap-2">
            <Label htmlFor='opening-hours'>Open</Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                name='opening-hours'
                defaultValue={dayjs('2022-04-17T15:30')}
                onChange={(value) => {
                  console.log(value);
                  setRegisterForm(prev => ({ ...prev, openingHours: String(value) }))
                }}
                className={cn(
                  "bg-input/30 max-h-9 rounded-md !border !border-white/20 transition-[color,box-shadow]",
                )}
                sx={{
                  "& .MuiPickersSectionList-root": {
                    maxHeight: '30px !important',
                    display: 'flex !important',
                    alignItems: 'center',
                  },
                  "& .MuiPickersOutlinedInput-notchedOutline": {
                    outline: 'none !important',
                    border: 'white !important',
                    maxHeight: '30px !important',
                    display: 'flex !important',
                    alignItems: 'center',
                    padding: '0 8px',
                  },
                  "& .MuiIconButton-edgeEnd": {
                    color: 'white !important',
                  },
                  '& .MuiSvgIcon-fontSizeMedium': {
                    fontSize: '1rem !important',
                  },
                  // for options
                  "& .MuiPaper-root": {
                    backgroundColor: '#000000 !important',
                  }
                }}
                slotProps={{
                  popper: {
                    sx: {
                      "& .MuiPaper-root": {
                        backgroundColor: "#333333", // 🎯 works for the dropdown
                        borderRadius: "10px"
                      },
                      "& .MuiMenuItem-root": {
                        color: "white", // option text color
                        "&.Mui-selected": {
                          backgroundColor: "gray", // selected option
                          // borderRadius: "50%",
                          // width: "40px"
                        },
                        "&:hover": {
                          backgroundColor: "#444444", // hover effect
                          borderRadius: "10px"
                        },
                      },
                    },
                  },
                }}
              />
            </LocalizationProvider>
            {/* <p className="mt-2">Selected: {registerForm.workingHours || "None"}</p> */}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor='closing-hours'>Close</Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                name='closing-hours'
                defaultValue={dayjs('2022-04-17T15:30')}
                onChange={(value) => {
                  console.log(value);
                  setRegisterForm(prev => ({ ...prev, closingHours: String(value) }))
                }}
                className={cn(
                  "bg-input/30 max-h-9 rounded-md !border !border-white/20 transition-[color,box-shadow]",
                )}
                sx={{
                  "& .MuiPickersSectionList-root": {
                    maxHeight: '30px !important',
                    display: 'flex !important',
                    alignItems: 'center',
                  },
                  "& .MuiPickersOutlinedInput-notchedOutline": {
                    outline: 'none !important',
                    border: 'white !important',
                    maxHeight: '30px !important',
                    display: 'flex !important',
                    alignItems: 'center',
                    padding: '0 8px',
                  },
                  "& .MuiIconButton-edgeEnd": {
                    color: 'white !important',
                  },
                  '& .MuiSvgIcon-fontSizeMedium': {
                    fontSize: '1rem !important',
                  },
                  // for options
                  "& .MuiPaper-root": {
                    backgroundColor: '#000000 !important',
                  }
                }}
                slotProps={{
                  popper: {
                    sx: {
                      "& .MuiPaper-root": {
                        backgroundColor: "#333333", // 🎯 works for the dropdown
                        borderRadius: "10px"
                      },
                      "& .MuiMenuItem-root": {
                        color: "white", // option text color
                        "&.Mui-selected": {
                          backgroundColor: "gray", // selected option
                          // borderRadius: "50%",
                          // width: "40px"
                        },
                        "&:hover": {
                          backgroundColor: "#444444", // hover effect
                          borderRadius: "10px"
                        },
                      },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </div>
          </div>
          <Button type="submit" className="w-full cursor-pointer">
            Register Business
          </Button>
        </form>
      </CardContent>
    </Card></div>
  )
}

export default RegisterBusiness;