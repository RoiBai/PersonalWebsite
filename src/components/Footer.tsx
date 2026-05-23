import { Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-mist/65 text-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-lg font-semibold">Ruiyuan Bai / Roi</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-graphite">
            HCI research, interaction design, creative coding, games, tangible
            prototypes, and reflective systems.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link className="text-sm text-graphite hover:text-ink" to="/contact">
            Contact
          </Link>
          <a
            className="inline-flex items-center gap-2 text-sm text-graphite hover:text-ink"
            href="https://github.com/RoiBai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
