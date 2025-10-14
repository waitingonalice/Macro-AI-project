interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-700 p-10 w-screen">
      <h1 className="text-8xl font-bold text-white text-center">{title}</h1>
      <div className="m-4 size-full">{children}</div>
    </div>
  );
}
