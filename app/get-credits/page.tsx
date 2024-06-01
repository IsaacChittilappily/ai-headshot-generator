import { createClient } from '@/utils/supabase/server'
import { redirect } from "next/navigation";
import StripePricingTable from "@/components/stripe/StripeTable";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <StripePricingTable user={user} />
  );
}
