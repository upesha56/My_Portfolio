import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "../utils/dataBase";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Button from "../components/Button"; // adjust path as needed

function HeroSection() {
  const renderSocialIcons = () =>
    socialLinks.map(({ href, icon, label }) => (
      <Link
        key={label}
        href={href}
        aria-label={label}
        target="_blank"
        className="text-[#10adad] transition hover:text-[#0B7474] duration-300"
      >
        {icon}
      </Link>
    ));

  const paraText = `Project Management involves planning, organizing, and leading projects 
  to successful completion. I excel in team coordination, resource management, and delivering 
  results aligned with business goals in dynamic environments.`;

  return (
    <section
      id="home"
      className="grid max-w-6xl gap-8 mx-auto my-6 md:my-12 md:grid-cols-2"
    >
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center text-center md:text-left">
        <TextGenerateEffect
          className="text-base font-semibold md:text-xl -z-10 relative"
          duration={2}
          filter={true}
          words="Hi, I am"
        />
        <TextGenerateEffect
          className="text-[#10adad] md:text-xl"
          duration={2}
          filter={false}
          words="Imandi Upesha"
        />
        <TextGenerateEffect
          className="text-3xl font-extrabold md:text-5xl"
          duration={2}
          filter={false}
          words="Project Manager"
        />
        <TextGenerateEffect
          className="mb-4 text-black/60 max-w-lg"
          duration={1}
          filter={false}
          words={paraText}
        />
        <Button className="text-white bg-[#7c64f6] hover:bg-[#a594f9] mt-4">
          Hire Me
        </Button>

        {/* Social Icons for Mobile */}
        <div className="flex items-center gap-4 mt-4 md:hidden">
          {renderSocialIcons()}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center md:items-end md:justify-center overflow-hidden relative">
        <Image
          src="/profile.png"
          alt="Profile image"
          height={50}
          width={270}
          quality={100}
          className="rounded-lg md:scale-125 md:translate-x-[-10px]" // Adjust scale and position for alignment
          priority
        />
        {/* Social Icons for Desktop */}
        <div className="hidden mt-4 gap-4 md:flex items-center justify-center w-full">
          {renderSocialIcons()}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
