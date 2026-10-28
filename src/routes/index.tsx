import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HardHat,
  Images,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const portraitSrc = "/farid-abdel-nasser.jpg";
const logoMonogramSrc = "/farid-monogram.png";
import { projects, categories, type Project, type ProjectImage } from "@/data/projects";
import { cn } from "@/lib/utils";

const skillGroups = [
  {
    icon: HardHat,
    number: "01",
    title: "Site Execution & Finishing",
    skills: [
      "Interior Fit-out",
      "Gypsum & Ceiling Systems",
      "Flooring & Marble Installation",
      "Woodwork & Joinery",
      "Painting & Coating Techniques",
      "HVAC & MEP Coordination",
    ],
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Project Management & Control",
    skills: [
      "BOQ & Cost Estimation",
      "Value Engineering",
      "Subcontractor Management",
      "Site Safety & HSE",
      "Quality Assurance & Control (QA/QC)",
      "Material Procurement",
    ],
  },
  {
    icon: Ruler,
    number: "03",
    title: "Engineering Software & Tools",
    skills: [
      "AutoCAD (Shop Drawings)",
      "Revit (BIM Integration)",
      "Primavera P6",
      "MS Project",
      "SketchUp",
      "MS Office",
    ],
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farid Abdel Nasser | Senior Architect & Finishing" },
      {
        name: "description",
        content:
          "Portfolio of Farid Abdel Nasser, a senior architect specializing in high-end finishing, delivering luxury residential and commercial spaces in Cairo.",
      },
      { property: "og:title", content: "Farid Abdel Nasser | Senior Architect & Finishing" },
      {
        property: "og:description",
        content: "Luxury finishing execution, site supervision, MEP coordination, and BOQ optimization.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function mediaUrl(path: string) {
  return path.startsWith("http") ? path : `/${path}`;
}

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modal, setModal] = useState<{ project: Project; gallery: boolean } | null>(null);
  const filteredProjects = useMemo(
    () => projects.filter((project) => activeCategory === "ALL" || project.categories.includes(activeCategory)),
    [activeCategory],
  );

  useEffect(() => {
    if (!modal) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);

  const navItems = ["about", "expertise", "projects", "contact"];

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="page-shell flex h-20 items-center justify-between">
          <button className="group flex items-center gap-3" onClick={() => scrollToSection("home")} aria-label="Back to top">
            <img src={logoMonogramSrc} alt="Farid Architect logo" className="size-10 border border-primary/50 object-cover" width={44} height={44} />
            <span className="hidden text-left sm:block">
              <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground">Farid Abdel Nasser</span>
              <span className="block text-[0.62rem] uppercase tracking-[0.15em] text-muted-foreground">Senior Architect & Finishing</span>
            </span>
          </button>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button key={item} className="nav-link" onClick={() => scrollToSection(item)}>{item}</button>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button variant="outline" size="sm" onClick={() => scrollToSection("contact")}>Discuss a project <ArrowRight /></Button>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen((open) => !open)} aria-label="Toggle menu">
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {mobileOpen && (
          <nav className="page-shell flex flex-col border-t border-border py-4 lg:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button key={item} className="py-3 text-left text-sm uppercase tracking-[0.15em] text-muted-foreground" onClick={() => { scrollToSection(item); setMobileOpen(false); }}>{item}</button>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="relative flex min-h-[760px] scroll-mt-20 items-center border-b border-border pt-28 md:min-h-screen">
        <div className="blueprint-grid absolute inset-0 opacity-35" />
        <div className="page-shell relative grid items-center gap-12 pb-16 md:grid-cols-[1.12fr_0.88fr] md:gap-16 md:pb-12">
          <div className="order-2 animate-fade-up md:order-1">
            <p className="eyebrow"><span /> Cairo, Egypt · Available for select projects</p>
            <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[0.98] text-foreground sm:text-6xl lg:text-8xl">
              Hi, I&apos;m <em className="font-normal text-primary">Farid</em><br />Abdel Nasser
            </h1>
            <p className="mt-6 border-l border-primary pl-5 text-sm font-semibold uppercase leading-relaxed tracking-[0.15em] text-stone-light sm:text-base">
              Senior Architect<br className="hidden sm:block" /> &amp; Finishing
            </p>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Transforming architectural blueprints into flawless, high-end real-world spaces. Over 10 years of expertise in luxury residential, commercial turnkey execution, site supervision, and BOQ optimization.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => scrollToSection("projects")}>Explore Projects <ArrowDown /></Button>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-border py-5">
              <Stat value="10+" label="Years experience" />
              <Stat value="35+" label="Projects delivered" />
              <Stat value="100%" label="Detail driven" />
            </div>
          </div>
          <div className="order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-lg">
            <div className="portrait-frame relative">
              <div className="absolute -left-5 top-10 hidden h-[70%] w-px bg-primary/55 sm:block" />
              <div className="absolute -left-8 top-10 hidden h-px w-6 bg-primary/55 sm:block" />
              <img src={portraitSrc} alt="Farid Abdel Nasser, Senior Architect & Finishing" className="aspect-[4/5] w-full object-cover object-[50%_28%] grayscale-[18%]" width={768} height={1664} fetchPriority="high" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-portrait-caption px-5 py-4 sm:px-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Precision in every detail</span>
                <span className="font-display text-3xl text-primary">10+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-space scroll-mt-20 border-b border-border bg-surface">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <SectionLabel number="01" label="About Me" />
            <h2 className="section-title mt-6">Built on craft.<br /><em>Driven by detail.</em></h2>
          </div>
          <div className="relative border-t border-primary pt-7 lg:mt-12">
            <p className="font-display text-2xl leading-relaxed text-stone-light sm:text-3xl">
              With over 10 years of hands-on experience in interior finishing, MEP coordination, and site management, I specialize in delivering turnkey residential and commercial projects on time and within budget.
            </p>
            <p className="mt-7 text-base leading-8 text-muted-foreground">
              My expertise spans site execution, premium material selection, subcontractor oversight, quality control (QA/QC), and budget management. Known for meticulous attention to structural and aesthetic detail, I bridge the gap between complex architectural design and practical, flawless site execution.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Value icon={Building2} title="Turnkey Delivery" text="From first drawing to final handover." />
              <Value icon={Award} title="Premium Quality" text="Exacting control of every finish." />
              <Value icon={CheckCircle2} title="Commercial Focus" text="Time, cost, and quality aligned." />
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="section-space scroll-mt-20 border-b border-border">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><SectionLabel number="02" label="Capabilities" /><h2 className="section-title mt-6">Key expertise &<br /><em>technical skills.</em></h2></div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">End-to-end technical capability for exacting spaces, from pre-construction planning to snag-free handover.</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
            {skillGroups.map(({ icon: Icon, number, title, skills }) => (
              <article key={title} className="group bg-background p-7 transition-colors hover:bg-surface sm:p-9">
                <div className="flex items-center justify-between"><Icon className="size-6 text-primary" /><span className="text-xs text-muted-foreground">{number}</span></div>
                <h3 className="mt-10 min-h-14 font-display text-2xl text-stone-light">{title}</h3>
                <div className="mt-7 flex flex-wrap gap-2">
                  {skills.map((skill) => <span key={skill} className="skill-badge">{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-space scroll-mt-20 border-b border-border bg-surface">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div><SectionLabel number="03" label="Selected Work" /><h2 className="section-title mt-6">Projects built to<br /><em>endure.</em></h2></div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Documented execution from real sites — browse by category, open the specifications, or walk each photo gallery.</p>
          </div>
          <div className="mt-10 flex gap-2 overflow-x-auto pb-3" role="tablist" aria-label="Project categories">
            {categories.map((category) => (
              <Button key={category} role="tab" aria-selected={activeCategory === category} variant={activeCategory === category ? "default" : "outline"} size="sm" className="shrink-0" onClick={() => setActiveCategory(category)}>{category === "ALL" ? "All" : category}</Button>
            ))}
          </div>
          <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => {
              const cover = project.images[0];
              return (
                <article key={`${activeCategory}-${project.id}`} className="project-card animate-fade-up">
                  <div className="relative overflow-hidden">
                    <SmartImage src={cover ? mediaUrl(cover.thumb || cover.src) : ""} alt={cover?.alt ?? project.title} className="aspect-[16/10] w-full object-cover transition duration-700 hover:scale-[1.03]" />
                    <span className="absolute left-4 top-4 border border-foreground/20 bg-background/85 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur-md">{project.categories.join(" · ")}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl text-stone-light">{project.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
                    <div className="mb-6 mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}</div>
                    <div className="mt-auto flex gap-2 border-t border-border pt-5">
                      <Button variant="ghost" size="sm" className="flex-1" onClick={() => setModal({ project, gallery: false })}>View Specs <ArrowRight /></Button>
                      <Button variant="outline" size="sm" className="flex-1" onClick={() => setModal({ project, gallery: true })}><Images /> Photo Gallery</Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="section-space scroll-mt-20">
        <div className="page-shell">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionLabel number="04" label="Contact" />
              <h2 className="section-title mt-6">Let&apos;s build<br /><em>with purpose.</em></h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">Have a residential, commercial, or turnkey project in mind? Share the brief and I&apos;ll get back to you.</p>
              <div className="mt-9 divide-y divide-border border-y border-border">
                <ContactLink icon={Phone} label="Phone" value="+20 10 97296171" href="tel:+201097296171" />
                <ContactLink icon={MessageCircle} label="WhatsApp" value="+20 10 97296171" href="https://wa.me/201097296171" external />
                <ContactLink icon={Mail} label="Email" value="fridnasser11@gmail.com" href="mailto:fridnasser11@gmail.com" />
                <div className="flex items-center gap-4 py-4"><span className="grid size-10 place-items-center border border-border text-primary"><MapPin className="size-4" /></span><span><span className="block text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">Location</span><span className="mt-1 block text-sm text-stone-light">Cairo, Egypt</span></span></div>
              </div>
            </div>
            <div className="border border-border bg-surface p-6 sm:p-9">
              <div className="flex items-center justify-between border-b border-border pb-5"><div><p className="eyebrow"><span /> Project inquiry</p><h3 className="mt-2 font-display text-2xl text-stone-light">Tell me about your project</h3></div><span className="hidden text-xs text-muted-foreground sm:block">Typically replies within 24h</span></div>
              <form name="contact" method="POST" data-netlify="true" className="mt-7 grid gap-5" action="/?submitted=true#contact">
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name"><Input id="name" name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Your full name" /></Field>
                  <Field label="Email" htmlFor="email"><Input id="email" name="email" type="email" required maxLength={255} autoComplete="email" placeholder="you@email.com" /></Field>
                  <Field label="Phone / WhatsApp" htmlFor="phone"><Input id="phone" name="phone" type="tel" required minLength={8} maxLength={20} pattern="[+0-9()\- ]{8,20}" autoComplete="tel" placeholder="+20" /></Field>
                  <Field label="Project Type" htmlFor="project-type">
                    <select id="project-type" name="projectType" required defaultValue="" className="form-select">
                      <option value="" disabled>Select project type</option><option>Villa</option><option>Apartment</option><option>Commercial</option><option>Office</option>
                    </select>
                  </Field>
                </div>
                <Field label="Message" htmlFor="message"><Textarea id="message" name="message" required minLength={10} maxLength={1500} rows={6} placeholder="Scope, location, area, and target timeline..." /></Field>
                <Button type="submit" size="lg" className="mt-1 w-full sm:w-auto sm:justify-self-start">Send Inquiry <Send /></Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-7"><div className="page-shell flex flex-col items-center gap-5 text-xs text-muted-foreground sm:flex-row sm:justify-between"><div className="flex items-center gap-3"><img src={logoMonogramSrc} alt="Farid Architect logo" className="size-11 border border-primary/50 object-cover" width={44} height={44} loading="lazy" /><p>© 2026 Farid Abdel Nasser. All rights reserved.</p></div><p className="uppercase tracking-[0.15em]">Precision · Quality · Delivery</p></div></footer>

      {modal && <ProjectModal project={modal.project} gallery={modal.gallery} onClose={() => setModal(null)} />}
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="border-r border-border px-3 first:pl-0 last:border-0 sm:px-5"><strong className="block font-display text-2xl font-normal text-primary sm:text-3xl">{value}</strong><span className="mt-1 block text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">{label}</span></div>;
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary"><span className="text-muted-foreground">{number}</span><span className="h-px w-8 bg-primary/60" />{label}</p>;
}

function Value({ icon: Icon, title, text }: { icon: typeof Building2; title: string; text: string }) {
  return <div className="border-l border-border pl-4"><Icon className="size-5 text-primary" /><h3 className="mt-4 text-sm font-semibold text-stone-light">{title}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground">{text}</p></div>;
}

function ContactLink({ icon: Icon, label, value, href, external = false }: { icon: typeof Phone; label: string; value: string; href: string; external?: boolean }) {
  return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="group flex items-center gap-4 py-4"><span className="grid size-10 place-items-center border border-border text-primary transition-colors group-hover:border-primary"><Icon className="size-4" /></span><span className="min-w-0 flex-1"><span className="block text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">{label}</span><span className="mt-1 block truncate text-sm text-stone-light">{value}</span></span><ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" /></a>;
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return <label htmlFor={htmlFor} className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone-light">{label}{children}</label>;
}

function SmartImage({ src, alt, className, eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return (
      <div className={cn("grid place-items-center border border-border bg-surface", className)} role="img" aria-label={alt}>
        <span className="font-display text-3xl text-muted-foreground">FA</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} loading={eager ? "eager" : "lazy"} onError={() => setFailed(true)} />;
}

function ProjectModal({ project, gallery, onClose }: { project: Project; gallery: boolean; onClose: () => void }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const cover: ProjectImage | undefined = project.images[0];
  const totalMedia = project.images.length + project.videos.length;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (lightboxIndex !== null) setLightboxIndex(null);
        else onClose();
        return;
      }
      if (lightboxIndex === null || project.images.length === 0) return;
      if (event.key === "ArrowRight") setLightboxIndex((index) => ((index ?? 0) + 1) % project.images.length);
      if (event.key === "ArrowLeft") setLightboxIndex((index) => ((index ?? 0) - 1 + project.images.length) % project.images.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxIndex, onClose, project.images.length]);

  const lightboxImage = lightboxIndex === null ? undefined : project.images[lightboxIndex];

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-overlay p-4" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-border bg-background shadow-modal animate-scale-in">
        <Button variant="secondary" size="icon" className="absolute right-3 top-3 z-10" onClick={onClose} aria-label="Close project details"><X /></Button>
        {cover && <SmartImage src={mediaUrl(cover.thumb || cover.src)} alt={cover.alt} className="aspect-[16/8] w-full object-cover" eager />}
        <div className="p-6 sm:p-8">
          <p className="eyebrow"><span /> {gallery ? `Photo gallery · ${totalMedia} items` : project.categories.join(" · ")}</p>
          <h2 id="project-dialog-title" className="mt-4 font-display text-3xl text-stone-light">{project.title}</h2>
          {gallery ? (
            <>
              {project.videos.length > 0 && (
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {project.videos.map((video) => (
                    <figure key={video.src} className="min-w-0">
                      <video controls preload="metadata" src={mediaUrl(video.src)} poster={video.poster ? mediaUrl(video.poster) : undefined} className="aspect-video w-full border border-border bg-black" />
                      <figcaption className="mt-2 text-xs text-muted-foreground">{video.title}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
              <div className="mt-7 columns-1 gap-4 sm:columns-2 lg:columns-3">
                {project.images.map((image, index) => (
                  <figure key={image.src} className="mb-4 break-inside-avoid">
                    <button type="button" onClick={() => setLightboxIndex(index)} className="block w-full cursor-zoom-in border border-border" aria-label={`Enlarge photo: ${image.alt}`}>
                      <SmartImage src={mediaUrl(image.thumb || image.src)} alt={image.alt} className="w-full" />
                    </button>
                    <figcaption className="mt-2 text-xs text-muted-foreground">{image.alt}</figcaption>
                  </figure>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">{project.description}</p>
              <ul className="mt-7 grid gap-3">
                {project.specs.map((spec) => <li key={spec} className="flex gap-3 border-l border-primary pl-3 text-sm text-stone-light"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />{spec}</li>)}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}</div>
            </>
          )}
          <Button className="mt-8" onClick={() => { onClose(); scrollToSection("contact"); }}>Discuss a similar project <ArrowRight /></Button>
        </div>
      </div>
      {lightboxImage && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-overlay p-6" role="dialog" aria-modal="true" aria-label="Enlarged photo" onMouseDown={(event) => event.target === event.currentTarget && setLightboxIndex(null)}>
          <Button variant="secondary" size="icon" className="absolute right-4 top-4 z-10" onClick={() => setLightboxIndex(null)} aria-label="Close enlarged photo"><X /></Button>
          <Button variant="secondary" size="icon" className="absolute left-4 top-1/2 z-10 -translate-y-1/2" onClick={() => setLightboxIndex((index) => ((index ?? 0) - 1 + project.images.length) % project.images.length)} aria-label="Previous photo"><ChevronLeft /></Button>
          <Button variant="secondary" size="icon" className="absolute right-4 top-1/2 z-10 -translate-y-1/2" onClick={() => setLightboxIndex((index) => ((index ?? 0) + 1) % project.images.length)} aria-label="Next photo"><ChevronRight /></Button>
          <figure className="flex max-h-full max-w-5xl animate-scale-in flex-col items-center">
            <SmartImage src={mediaUrl(lightboxImage.src)} alt={lightboxImage.alt} className="max-h-[78vh] w-auto max-w-full object-contain" eager />
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-xs text-muted-foreground"><span>{lightboxImage.alt}</span><span className="shrink-0">{(lightboxIndex ?? 0) + 1} / {project.images.length}</span></figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
