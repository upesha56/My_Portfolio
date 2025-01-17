import Image from "next/image";
import Progress from "../components/Progress";  // Ensure the correct path to Progress component

const skills = [
    { name: "Microsoft Project", value: 80 },
    { name: "Power BI", value: 75 },
    { name: "Trello", value: 85 },
    // Add more skills as needed
];

function AboutSection() {
    return (
        <section
            id="about-me"
            className="flex flex-col max-w-6xl mx-auto md:flex-row items-center justify-center md:gap-[3rem] md:my-[6rem]"
        >
            <Image
                className="hidden md:block md:scale-150"
                src="/profile.png"
                alt="about-cection-photo"
                height={300}
                width={150}
                quality={100}
            />

            <div className="self-center justify-self-center">
                <h2 className="mb-4 text-3xl font-bold">About Me</h2>
                <p className="mb-4 text-black/60">
                    
I firmly believe that project management is an integral part of our daily lives, 
even in situations where we don't consciously recognize it. Everyday activities such
 as organizing an event, completing a personal project, or managing household chores
  involve key project management principles like setting timelines, resource allocation,
   risk assessment, and ensuring quality outcomes. These experiences demonstrate how closely
    project management is tied to achieving objectives effectively.

Throughout my life, I have encountered numerous scenarios where applying project management
 techniques was essential to success.I feel confident in my inherent understanding of fundamental 
 project management practices and
 my ability to implement these methods systematically in a professional context.
                </p>
                {skills.map((skill, index)=> (
                    <Progress
                        key={index}
                        name={skill.name}
                        value={skill.value}
                    />
                ))}

                
            </div>
        </section>
    );
}

export default AboutSection;
