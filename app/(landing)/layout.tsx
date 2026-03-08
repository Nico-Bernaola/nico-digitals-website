// app/(landing)/layout.tsx
// Landings have NO navbar/footer — each is a standalone conversion page

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
