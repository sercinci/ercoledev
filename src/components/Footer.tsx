export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-6">
        <div className="mb-4">
          <a
            href="https://www.buymeacoffee.com/ercole.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me a Coffee"
              style={{ height: "60px", width: "217px" }}
            />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Federico Ercole. All rights reserved.</p>
        <div className="mt-2 text-xs opacity-50">Built with Next.js & Tailwind CSS</div>
      </div>
    </footer>
  );
};
