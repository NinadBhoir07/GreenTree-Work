
import ThemeToggle from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <ThemeToggle/>
      </div>
    </main>
  );
}
