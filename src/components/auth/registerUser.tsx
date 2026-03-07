"use client"
import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { UserPlus } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { registerUser } from '@/services/httpServices';

function RegisterUser() {

  const [registerForm, setRegisterForm] = useState({
    name: '',
    phone: '',
    password: ''
  });

  const handleSubmit = async(e:React.FormEvent) =>{
    e.preventDefault();
    const res = await registerUser(registerForm);
    console.log("res2",res);
  }

  return (
    <div><Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  Register as User
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="owner-name">Your Name</Label>
                    <Input
                      id="owner-name"
                      placeholder="Enter your full name"
                      value={registerForm.name}
                      onChange={(e) => setRegisterForm(prev => ({ ...prev, name: e.target.value }))}
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
                  <Button type="submit" className="w-full">
                    Register
                  </Button>
                </form>
              </CardContent>
            </Card></div>
  )
}

export default RegisterUser;