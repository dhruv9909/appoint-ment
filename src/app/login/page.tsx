import { AuthPage } from "@/components/auth";
// import { redirect } from "next/navigation";
// import { handleServerSession } from "@/lib/auth";

export default async function LoginPage() {
  // const session = await handleServerSession();
  // if (session) {
  //   redirect("/dashboard");
  // }
  return <div>
    <AuthPage />
  </div>;
}