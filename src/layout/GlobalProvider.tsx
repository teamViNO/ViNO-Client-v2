"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Header";
import Footer from "./Footer";

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Footer />
    </>
  );
}
