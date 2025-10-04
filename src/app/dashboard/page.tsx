import { BusinessDashboard } from "@/components/dashboards/businessDashboard";
import { CustomerDashboard } from "@/components/dashboards/customerDashboard";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);
    if(!session){
        redirect("/login");
    }
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