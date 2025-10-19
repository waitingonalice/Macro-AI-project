interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="flex flex-col items-center h-screen bg-[url('/images/background.svg')] p-4 w-screen">
      <h1 className="text-7xl font-bold text-white text-center font-conthrax-sb">
        {title}
      </h1>
      <div className="m-4 size-full">{children}</div>
    </div>
  );
}
