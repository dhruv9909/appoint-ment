"use client";
import { BusinessDashboard } from "@/components/dashboards/businessDashboard";
import { CustomerDashboard } from "@/components/dashboards/customerDashboard";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
    const { data: session } = useSession();
    console.log(session);
    return (
        <>{
        (session?.user?.role === "business")
        ?
        <BusinessDashboard
            appointments={[]}
            onAppointmentUpdate={() => { }}
        />
        :
        <CustomerDashboard
          user={session?.user}
          businesses={[]}
          appointments={[]}
          onAppointmentBook={() => { }}
        />
        }
        </>
    )
}