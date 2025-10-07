import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Logo />
        <a
          href="https://pay.cakto.com.br/oma9ji5_598300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="font-headline font-bold"
            variant="default"
          >
            Quero Acesso
          </Button>
        </a>
      </div>
    </header>
  );
}
