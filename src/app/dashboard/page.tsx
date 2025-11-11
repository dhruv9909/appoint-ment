import { BusinessDashboard } from "@/components/dashboards/businessDashboard";
import { CustomerDashboard } from "@/components/dashboards/customerDashboard";
import { redirect } from "next/navigation";
import { handleServerSession } from "@/lib/auth";

export default async function DashboardPage() {
    const session = await handleServerSession();
    if(!session){
        redirect("/login");
    }
    console.log("session2", session)
    return (
        <>
        {
            (session?.user?.role === "business")
                ?
                <BusinessDashboard session={session} />
                :
                <CustomerDashboard session={session} />
        }
        </>
    )
}