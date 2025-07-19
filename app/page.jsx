import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Stethoscope } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { creditBenefits, features, testimonials } from "@/lib/data"; // Adjust the import path as necessary
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30
             py-2 px-4 text-emerald-400 text-sm font-medium shadow-md shadow-emerald-900/20"
              >
                Healthcare made easy
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  text-white leading-tight mt-4">
                Connect with doctors
                <br />
                <span className="gradient-title">anytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Book appointments, access medical records, and get prescriptions
                online with our easy-to-use platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
                >
                  <Link href={"/onboarding"}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant={"outline"}
                  className="border-emerald-400 hover:bg-muted/95 text-emerald-400 font-semibold"
                >
                  <Link href={"/doctors"}>
                    Find doctors
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/banner.png"
                alt="Healthcare Banner"
                fill
                priority
                className="object-cover md:pt-14 rounded-xl shadow-lg shadow-emerald-900/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className=" text-3xl md:text-4xl font-bold text-white mb-4">
              How it works?
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto text-center">
              our platform simplifies healthcare by connecting you with verified
              doctors for online consultations. You can book appointments,
              access medical records, and get prescriptions online, all from the
              comfort of your home. Our user-friendly interface makes it easy to
              manage your healthcare needs efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className=" border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-emerald-900/20 bg-muted/50 backdrop-blur-md border-2"
                >
                  <CardHeader className="pb-2">
                    <div className="bg-emerald-900/30 border-emerald-700/30 rounded-lg p-4 mb-4 inline-flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-emerald-900/30 border-emerald-700/30
             py-2 px-4 text-emerald-400 text-sm font-medium shadow-md shadow-emerald-900/20"
            >
              Affordable Healthcare
            </Badge>
            <br />
            <br />
            <h2 className=" text-3xl md:text-4xl font-bold text-white mb-4">
              Consultation Packages
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto text-center">
              Choose from our flexible consultation packages designed to fit
              your healthcare needs. we have options that work for you. Our
              packages are affordable and easy to manage, ensuring you get the
              care you need without hassle.
            </p>
          </div>

          <div>
            {/*pricing table */}
            <Pricing />

            <Card className="mt-12 bg-muted/20 border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-emerald-900/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 mr-2 text-emerald-400" />
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  {creditBenefits.map((benefits, index) => {
                    return (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full">
                          <Check className="h-4 w-4 text-emerald-400" />
                        </div>
                        <p
                          className="text-muted-foreground ml-2"
                          dangerouslySetInnerHTML={{ __html: benefits }}
                        ></p>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-emerald-900/30 border-emerald-700/30
             py-2 px-4 text-emerald-400 text-sm font-medium shadow-md shadow-emerald-900/20"
            >
              Success Stories
            </Badge>
            <br />
            <br />
            <h2 className=" text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto text-center">
              Our users love the convenience and quality of care they receive
              through our platform. Here are some testimonials from patients and
              doctors who have experienced the benefits of online healthcare.
            </p>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => {
              return (
                <Card
                  key={index}
                  className=" border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-emerald-900/20 bg-muted/50 backdrop-blur-md border-2"
                >
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-900/20 text-emerald-400 rounded-full flex items-center justify-center text-xl font-semibold mr-4">
                        <span className="text-emerald-400 font-bold">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-900/20 ">
            <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Healthcare Experience?
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
                  Join our platform today and take the first step towards
                  convenient, accessible, and affordable healthcare. Whether you
                  need to book an appointment, consult with a doctor, or manage
                  your medical records, we have you covered.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button
                    size="lg"
                    className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
                    asChild
                  >
                    <Link href="/sign-up"> Sign Up Now</Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
                    asChild
                  >
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
