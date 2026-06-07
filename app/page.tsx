import { Header } from "@/components/Header";



export default function Home() {
  return (
    <div className="w-full max-w-292.5 mx-auto mt-5 sm:mt-6 lg:mt-10 space-y-10 lg:space-y-16">
      <Header />
      <main className="space-y-8">
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl/8.5 tracking-[-1px]">Extensions List</h1>
        </div>
      </main>
    </div>
  );
}
