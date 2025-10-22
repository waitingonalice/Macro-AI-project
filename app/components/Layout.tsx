interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="flex flex-col items-center h-screen w-screen bg-[url('/images/background.svg')] p-4 bg-no-repeat bg-center">
      <h1 className="text-5xl font-bold text-white text-center font-conthrax-sb mt-[0.5%]">
        {title}
      </h1>
      <div className="m-4 size-full">{children}</div>
    </div>
  );
}
