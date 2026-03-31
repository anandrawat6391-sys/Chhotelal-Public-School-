import SchoolERP from "../SchoolERP";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-900 px-4 py-4 text-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-lg font-bold md:text-2xl">Chhotelal Public School ERP</h1>
          <a href="#erp-suite" className="rounded bg-blue-600 px-3 py-2 text-sm font-semibold">
            Open Dashboard
          </a>
        </div>
      </header>
      <main>
        <SchoolERP />
      </main>
    </div>
  );
}
