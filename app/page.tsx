import { redirect } from "next/navigation";

export default function Home() {
  // Redirect root to dashboard since this is an app
  redirect("/dashboard");
}
