import Login from "../login/page";
import { createClient } from '@/utils/supabase/server'

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <Login />;
  }

  return <div className="flex w-full flex-col px-4 lg:px-40">{children}</div>;
}
