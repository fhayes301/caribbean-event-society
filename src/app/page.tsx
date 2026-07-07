export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-4 text-center px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Caribbean Event Society
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A curated network for event and creative professionals in Trinidad
          &amp; Tobago.
        </p>
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
          Coming Soon
        </p>
      </main>
    </div>
  );
}
