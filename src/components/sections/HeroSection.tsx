import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { FileText, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text content */}
          <div>
            {/* Eyebrow */}
            <p className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase mb-4">
              Cloud &amp; Solution Architecture
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] tracking-tight leading-tight">
              Carlos David Duarte
            </h1>

            {/* Title */}
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-[var(--muted)]">
              Senior Software Engineer
              <span className="block text-lg sm:text-xl font-medium mt-1">
                Technical Lead &amp; Application Owner
              </span>
            </p>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              Building and modernizing enterprise applications through Java,
              Spring Boot, Azure and DevOps. Helping organizations transform
              legacy systems through engineering excellence and cloud technologies.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                href="/cv/cv-carlos-duarte.pdf"
                external
                variant="primary"
                size="md"
              >
                <FileText size={16} />
                View Resume
              </Button>

              <Button href="/contact" variant="secondary" size="md">
                <Mail size={16} />
                Contact Me
              </Button>

              <Button
                href="https://www.linkedin.com/in/dav-gill"
                external
                variant="ghost"
                size="md"
                ariaLabel="LinkedIn profile"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </Button>

              <Button
                href="https://github.com/RamRider89"
                external
                variant="ghost"
                size="md"
                ariaLabel="GitHub profile"
              >
                <GitHubIcon size={16} />
                GitHub
              </Button>
            </div>
          </div>

          {/* Right: hero portrait */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              <Image
                src="/brand/a01-hero.jpg"
                alt="Carlos David Duarte — Senior Software Engineer"
                fill
                priority
                sizes="(max-width: 1280px) 320px, 384px"
                className="rounded-2xl object-cover object-center"
              />
              {/* Subtle Azure Blue border accent */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-[var(--color-primary)] ring-opacity-30 pointer-events-none" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
