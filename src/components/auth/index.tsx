import { Building2, Store, UserPlus, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import Login from './login';
import RegisterBusiness from './registerBusiness';
import RegisterUser from './registerUser';

export function AuthPage() {

    return (
        <div className="min-h-screen flex justify-center bg-muted/30 pt-10">
            <div className="w-fit">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Building2 className="h-8 w-8 text-primary" />
                        <h1 className="text-2xl font-semibold">BookingHub</h1>
                    </div>
                    <p className="text-muted-foreground">
                        Connect businesses with customers through seamless appointment booking
                    </p>
                </div>

                <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="login" className="cursor-pointer flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Login
                        </TabsTrigger>
                        <TabsTrigger value="register-business" className="cursor-pointer flex items-center gap-2">
                            <Store className="h-4 w-4" />
                            Register Business
                        </TabsTrigger>
                        <TabsTrigger value="register-user" className="cursor-pointer flex items-center gap-2">
                            <UserPlus className="h-4 w-4" />
                            Register as User
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="login">
                        <Login />
                    </TabsContent>

                    <TabsContent value="register-business">
                        <RegisterBusiness />
                    </TabsContent>

                    <TabsContent value="register-user">
                        <RegisterUser />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}