import AppLayout from '../components/AppLayout';

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
