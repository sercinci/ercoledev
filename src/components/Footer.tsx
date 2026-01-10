export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-6">
        <p>© {new Date().getFullYear()} Federico Ercole. All rights reserved.</p>
        <div className="mt-2 text-xs opacity-50">Built with Next.js & Tailwind CSS</div>
      </div>
    </footer>
  );
};
