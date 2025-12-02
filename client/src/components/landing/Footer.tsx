export function Footer() {
  return (
    <footer className="py-12 bg-black/40 border-t border-white/5 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-sm" />
            <span className="font-heading font-bold text-lg text-white">SourceChain AI</span>
          </div>
          
          <div className="flex gap-8 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Platform</a>
            <a href="#" className="hover:text-primary transition-colors">Security</a>
            <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="text-muted-foreground/60">
            © 2025 SourceChain AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
