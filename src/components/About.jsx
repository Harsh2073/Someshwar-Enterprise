import React from "react";
import aboutImg from "../assets/aboutImg.jpg";
import { CheckCircle2, Clock, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
    },
    {
      icon: Users,
      title: "Expert Team",
    },
  ];
  return (
    <section id="about" className="bg-gray-50 py-10 md:py-20">
      <div className="flex flex-col gap-10 lg:flex-row px-4 m-auto items-center justify-center max-w-7xl">
        {/*Image */}
        <div className="lg:w-1/2">
          <img
            src={aboutImg}
            className="w-full h-auto max-h-[500px] object-cover rounded-3xl"
          />
        </div>
        {/*Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 p-4 lg:p-0">
          <h1 className="bg-red-100 text-red-500 rounded-2xl px-4 py-1 w-fit font-semibold">
            About Ous
          </h1>
          <div className="flex flex-col gap-2 text-left">
            <h3 className="font-bold text-2xl md:text-3xl">
              Your Trusted Construction Partner
            </h3>
            <p className="text-gray-600">
              Since 1998, Someshwar Enterprise has been at the forefront of
              India's construction industry, transforming visions into
              architectural masterpieces. We specialize in residential and
              commercial in Ahmedabad.
            </p>
            <p className="text-gray-600">
              Our commitment to excellence, safety, and innovation has made us
              the preferred choice for clients seeking reliability and quality.
              We leverage cutting-edge technology and sustainable practices to
              deliver projects that stand the test of time.
            </p>
          </div>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex space-x-4 items-center">
                <div className="bg-red-100 p-2 rounded-lg shrink-0">
                  <feature.icon className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">{feature.title}</h4>

                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 text-left">
            <CheckCircle2 className="text-green-400 mt-0.5 shrink-0" />
            <p className="text-gray-600">
              Certified by the Real Estate Regulatory Authority (RERA) for
              sustainable construction practices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
