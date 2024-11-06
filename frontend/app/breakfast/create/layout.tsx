export default function CreatePage({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex flex-col items-center justify-center gap-4  md:py-0 py-5">
        <div className="text-center justify-center">
          {children}
        </div>
      </section>
    );
  }
  