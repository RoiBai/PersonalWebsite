import { Github, Mail, Send } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

export default function Contact() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Contact"
        title="Let's talk about reflective systems, HCI projects, and playable prototypes."
        description="For collaborations, research conversations, project questions, or demo feedback, email is the easiest place to reach me."
      />
      <div className="grid gap-5 md:grid-cols-3">
        <a className="contact-card" href="mailto:roibai0405@gmail.com">
          <Mail className="h-6 w-6 text-ember" aria-hidden="true" />
          <h2>Email</h2>
          <p>roibai0405@gmail.com</p>
        </a>
        <a
          className="contact-card"
          href="https://github.com/RoiBai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-6 w-6 text-ember" aria-hidden="true" />
          <h2>GitHub</h2>
          <p>github.com/RoiBai</p>
        </a>
        <a className="contact-card" href="https://ruiyuanbai.com">
          <Send className="h-6 w-6 text-ember" aria-hidden="true" />
          <h2>Domain</h2>
          <p>ruiyuanbai.com</p>
        </a>
      </div>
    </section>
  );
}
