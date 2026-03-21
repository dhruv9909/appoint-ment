"use client"
import { Users } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { toast } from 'sonner';

function Login() {
  const [loginForm, setLoginForm] = useState({ identifier: '', password: '', role: 'customer' });

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        identifier: loginForm.identifier,
        password: loginForm.password,
        redirect: true, // prevent auto redirect
        callbackUrl: "/dashboard"
      });
      if (result?.ok) {
        console.log("result-data", result)
        toast.success("Login successful!");
        // router.push("/dashboard");
      }
      if (result?.error) {
        toast.error(result.error);
        console.error("errors", result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div> <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Login
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="identifier">Email / Phone</Label>
            <Input
              id="identifier"
              type="text"
              placeholder="Enter your email or phone"
              value={loginForm.identifier}
              onChange={(e) => setLoginForm(prev => ({ ...prev, identifier: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={loginForm.password}
              onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
              required
            />
          </div>
          <Button type="submit" className="w-full cursor-pointer">
            Login
          </Button>
        </form>
      </CardContent>
    </Card></div>
  )
}

export default Login