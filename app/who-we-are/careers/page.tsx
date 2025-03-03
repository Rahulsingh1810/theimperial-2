import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import ResumeSubmissionForm from "../../components/resume-submission-form";

export default function Careers() {
  const jobOpenings = [
    {
      title: "Quantitative Analyst",
      department: "Research",
      location: "Gurugram",
    },
    { title: "Data Scientist", department: "Technology", location: "Gurugram" },
    {
      title: "Software Engineer",
      department: "Technology",
      location: "Gurugram",
    },
    {
      title: "Risk Manager",
      department: "Risk Management",
      location: "Gurugram",
    },
    { title: "Trader", department: "Trading", location: "Gurugram" },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py">
        <h1 className="text-4xl text-center mb-12">Careers</h1>
        <div className="flex justify-center w-full bg-white-100">
          <section className="relative h-[664px] bg-gray-900 text-white w-[1400px]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/Careers.jpg"
                alt="Careers at Alpha Investments"
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            <div className="absolute md:w-[95%] bottom-0 left-0 right-0 bg-blue-900 bg-opacity-30 backdrop-blur-sm md:py-16 py-8  z-20">
              <div className="container mx-auto px-6">
                <div className="md:pl-10 ">
                  {/* <h3 className="text-xl font-bold mb-2">:</h3> */}
                  <p className="text-sm pt-4">
                    Join Our Elite Team: Where Top Talent Drives Investment
                    Excellence
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/*  <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 !leading-snug">
          Join Our Elite Team: Where Top Talent Drives Investment Excellence
        </h1> */}

          <section className="mb-16">
            <p className="text-xl mb-6">
              At our investment firm, we believe that our success is driven by
              the caliber of our team. We are constantly seeking top-tier
              professionals—individuals with a passion for excellence, a keen
              understanding of financial markets, and a drive to achieve
              meaningful impact. Whether you're an expert in global markets,
              quantitative analysis, or portfolio management, your expertise can
              help shape the future of investing.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl  mb-6">Current Openings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobOpenings.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Department: {job.department}</p>
                    <p>Location: {job.location}</p>
                    
                      <Link
                        className="text-blue-900 underline"
                        href={`/careers/${job.title.toLowerCase().replace(/ /g, "-")}`}
                      >
                        View Details
                      </Link>
                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl  mb-6">Why Join Us?</h2>
            <p className="text-xl mb-6">
              At our investment firm, we don't just hire employees—we invest in
              future leaders. If you're a driven, innovative, and highly skilled
              professional ready to elevate your career and make an impact in
              the world of investment, we want to hear from you. You'll be part
              of a dynamic team that pushes the boundaries of what's possible in
              financial markets, collaborates on high-stakes projects, and
              develops transformative investment strategies.
            </p>
            <h2 className="text-2xl  mb-4">We offer you:</h2>
            <ul className=" list-inside text-xl space-y-2 mb-6">
              <li>
                hallenging and Rewarding Work: Tackle complex
                challenges and take ownership of projects that influence the
                firm's success.
              </li>
              <li>
                Professional Growth:Continuous learning
                through mentorship, training, and access to industry-leading
                resources.
              </li>
              <li>
                Competitive Compensation: Attractive salary
                packages, bonuses, and benefits that reflect the value you bring
                to the firm.
              </li>
              <li>
                Collaborative Culture: A work environment where
                every team member is respected, supported, and encouraged to
                contribute their unique perspectives.
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6">Apply Now</h2>
            <p className="text-xl mb-6">
              If you're ready to join a firm where your talent is valued, your
              ideas matter, and your career can thrive, we encourage you to
              apply today. Use the form below to submit your application and
              take the next step in your career.
            </p>
            
          </section>
          
        </div>
        
      </div>
      <div className="w-full">
              <ResumeSubmissionForm />
            </div>
    </div>
  );
}
