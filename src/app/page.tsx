import { Users, Heart, Terminal, Sparkles, Shield, Cpu } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  initials: string;
  tags: string[];
  links?: {
    github?: string;
    twitter?: string;
  };
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Subhankar",
    role: "Founder & Chief Architect",
    bio: "Obsessed with bare-metal performance, custom Linux hypervisors, and building cloud infrastructure without extortionate egress fees.",
    avatar: "",
    initials: "SB",
    tags: ["Systems", "Kernel", "Distributed DB", "Rust"],
    links: {
      github: "https://github.com/zer-node",
      twitter: "https://x.com/nodezed",
    },
  },
  {
    name: "Core Systems Team",
    role: "Hypervisor & Network Engine",
    bio: "Engineers responsible for maintaining the global NVMe NVLink fabric, Anycast routing nodes, and sub-10ms packet dispatch.",
    avatar: "",
    initials: "CS",
    tags: ["eBPF", "WireGuard", "BGP", "C/Go"],
  },
  {
    name: "Developer Experience",
    role: "CLI & Console Guild",
    bio: "Crafting single-click deployment workflows, ergonomic APIs, and developer tools that eliminate cloud friction entirely.",
    avatar: "",
    initials: "DX",
    tags: ["Next.js", "TypeScript", "Tailwind", "IaC"],
  },
  {
    name: "Security & Trust",
    role: "Zero-Trust Infrastructure",
    bio: "Auditing memory boundaries, KMS encryption enclaves, and maintaining strict cryptographic tenant isolation.",
    avatar: "",
    initials: "ST",
    tags: ["KMS", "Hardware Enclaves", "Audit", "Cryptography"],
  },
];

export default function HumansPage() {
  return (
    <div className="relative min-h-[calc(100vh-120px)] w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
          <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
          <span>The Human Element</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          The Humans Behind Nodezed
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          We are a tight-knit collective of systems engineers, infrastructure builders, and design purists.
          We believe compute should be high-performance, transparent, and built for developers.
        </p>
      </div>

      {/* 2. Manifesto Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-neutral-50/50 dark:bg-neutral-900/40 space-y-3">
          <div className="h-9 w-9 rounded-lg bg-neutral-200/70 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
            <Cpu className="h-5 w-5" />
          </div>
          <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Zero Egress Extortion</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Your data belongs to you. We refuse to monetize network egress fees or trap your architecture in proprietary walled gardens.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-neutral-50/50 dark:bg-neutral-900/40 space-y-3">
          <div className="h-9 w-9 rounded-lg bg-neutral-200/70 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
            <Terminal className="h-5 w-5" />
          </div>
          <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Bare Metal Speed</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Direct PCIe Gen4 NVMe throughput and AMD EPYC™ power without bloated virtualization overhead or artificial throttles.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-neutral-50/50 dark:bg-neutral-900/40 space-y-3">
          <div className="h-9 w-9 rounded-lg bg-neutral-200/70 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
            <Shield className="h-5 w-5" />
          </div>
          <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Radical Transparency</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Human-first engineering. Open communication, documented hardware primitives, and per-second metered billing clarity.
          </p>
        </div>
      </div>

      {/* 3. Team Cards */}
      <div className="space-y-6">
        <div className="border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white">The Engineering Team</h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            The individuals writing kernel code, operating the points of presence, and answering your late-night tickets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="p-5 rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-[#111114] hover:border-black/[0.14] dark:hover:border-white/[0.16] transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-sm flex items-center justify-center shrink-0">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white">{member.name}</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{member.role}</p>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {member.links && (
                  <div className="flex items-center gap-2">
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                    {member.links.twitter && (
                      <a
                        href={member.links.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        aria-label="Twitter / X"
                      >
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Join the Mission Callout */}
      <div className="p-8 sm:p-10 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-neutral-950 text-white text-center space-y-4">
        <Sparkles className="h-6 w-6 mx-auto text-amber-400" />
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Want to build cloud hardware and software with us?</h2>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
          We are always searching for gifted systems developers, network architects, and kernel hackers.
          No corporate bureaucracy, just high-impact engineering.
        </p>
        <div className="pt-2">
          <a
            href="mailto:careers@nodezed.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-neutral-950 text-xs font-semibold hover:bg-neutral-100 transition-colors"
          >
            <span>Write to the Founders</span>
          </a>
        </div>
      </div>
    </div>
  );
}
