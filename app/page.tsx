import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, Star, Zap, Info } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto bg-background relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl float-animation" />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl float-animation"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl float-animation"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="relative inline-block">
            <div className="overflow-hidden w-48 h-48 border-3 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent mystical-glow flex items-center justify-center">
              <img className="w-48 h-48 text-primary-foreground" src="/avatar.jpg" alt="Trieu Vo" />
              <img className="absolute right-[-8px] bottom-8 border-3 border-box shadow-2xl mx-auto bg-transparent rounded-[7px]" style={{
                width: "64px",
                height: "48px",
                boxSizing: "border-box",
                objectFit: "cover",
                objectPosition: "center center",
              }} src="/vietnam-flag.svg" alt="Vietnam Flag" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Trieu Vo
          </h1>
          <p className="text-xl text-muted-foreground mb-2">Full Stack Software Engineer</p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            A full-stack engineer specializing in building scalable web applications and engaging user experiences.
            Specializing in Javascript, Ruby on Rails, and React.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card className="p-8 ornate-border bg-card/80 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Info className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">About Me</h2>
              </div>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  I'm a passionate developer who thrives on challenges and continuous learning. With over 4 years of experience in the tech industry, I've built strong expertise across both frontend and backend development.
                </p>
                <p>
                  Currently, I work as an <span className="text-primary font-bold">Intermediate Software Engineer</span> at{" "}
                  <span className="text-primary font-bold">Employment Hero</span>, where I focus on creating accessible, high-performance web applications using modern technologies.
                </p>
                <p>
                  Outside of work, I enjoy exploring new technologies, photography, travelling, and gaming. I also have a deep passion for game development.
                </p>
              </div>
            </Card>

            {/* Experience Section */}
            <Card className="p-8 bg-card/80 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Experience</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">Intermediate Software Engineer</h3>
                    <span className="text-sm text-muted-foreground">2024 — Present</span>
                  </div>
                  <p className="text-primary font-medium mb-2">Employment Hero • Remote</p>
                  <ul className="ml-4 list-disc text-foreground/80 leading-relaxed space-y-1 mb-2">
                    <li>
                      Winner of the 2024 ”Rookie of the Year” award for outstanding newcomer.
                    </li>
                    <li>
                      Lead the development of new features for many important services in both Frontend and Backend that greatly affect product revenue.
                    </li>
                    <li>
                      Identify and resolve long-standing hidden issues in the system, including security vulnerabilities, critical workflow bugs, and more.
                    </li>
                    <li>
                      Improve system performance by using Multi-threading, caching and bulk-actions.
                    </li>
                    <li>
                      Achieve a 2x increase in frontend development speed by introducing a workflow that supports hot reloading of embedded components directly on partner websites, removing the need to wait for a full JavaScript bundle build before previewing changes.
                    </li>
                    <li>
                      Write unit tests for both Frontend and Backend to ensure system reliability.
                    </li>
                    <li>
                      Write SQL queries to generate reports for various internal purposes, including analysis, revenue reports, performance, and more.
                    </li>
                    <li>
                      Write solution document for complex tasks with Confluence.
                    </li>
                    <li>
                      Utilize Cursor, Github Copilot and other AI tools for improving development speed.
                    </li>
                    <li>
                      Collaborated with various teams in Vietnam, UK, South East Asia, and Australia.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge className="bg-accent/20 text-accent border-accent/30">Ruby on Rails</Badge>
                    <Badge className="bg-accent/20 text-accent border-accent/30">Node.Js</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">React.Js</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">Javascript</Badge>
                    <Badge className="bg-accent/20 text-accent border-accent/30">SQL</Badge>
                    <Badge variant="outline">DataDog</Badge>
                    <Badge variant="outline">MixPanel</Badge>
                    <Badge variant="outline">Periscope</Badge>
                    <Badge variant="outline">AWS</Badge>
                  </div>
                </div>

                <div className="border-l-2 border-primary/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">Software Engineer</h3>
                    <span className="text-sm text-muted-foreground">2022 — 2024</span>
                  </div>
                  <p className="text-primary font-medium mb-2">Kite Metric • Ho Chi Minh City</p>
                  <ul className="ml-4 list-disc text-foreground/80 leading-relaxed space-y-1 mb-2">
                    <li>
                      Developed new features for the Frontend and Backend of a coaching system designed to help people land a job.
                    </li>
                    <li>
                      Implemented a payment gateway for use in Shopify and standalone stores.
                    </li>
                    <li>
                      Collaborated with various teams using Notion for technical documentation.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge className="bg-accent/20 text-accent border-accent/30">Python</Badge>
                    <Badge className="bg-accent/20 text-accent border-accent/30">Node.Js</Badge>
                    <Badge className="bg-accent/20 text-accent border-accent/30">Django</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">React.Js</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">Next.Js</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">Javascript</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">Chakra UI</Badge>
                  </div>
                </div>

                <div className="border-l-2 border-primary/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-destructive rounded-full"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">Backend Engineer</h3>
                    <span className="text-sm text-muted-foreground">2021 — 2022</span>
                  </div>
                  <p className="text-primary font-medium mb-2">Phenikaa MaaS • Ho Chi Minh City</p>
                  <ul className="ml-4 list-disc text-foreground/80 leading-relaxed space-y-1 mb-2">
                    <li>
                      Recognized as one of the most talented personnel in the company in 2021.
                    </li>
                    <li>
                      Developed new features for a school management system that facilitates communication between teachers, students, and parents.
                    </li>
                    <li>
                      Developed and maintained APIs and Portals for the Timekeeping module (MaaS Connect) used in companies and schools.
                    </li>
                    <li>
                      Developed data importing/exporting features for both Frontend and Backend of the Bus Management System.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge className="bg-accent/20 text-accent border-accent/30">Golang</Badge>
                    <Badge className="bg-accent/20 text-accent border-accent/30">Qor</Badge>
                    <Badge className="bg-accent/20 text-accent border-accent/30">Gin</Badge>
                    <Badge className="bg-accent/20 text-accent border-accent/30">Restify</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">Angular.Js</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">Javascript</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">Material UI</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Projects Section */}
            <Card className="p-8 bg-card/80 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">PET Projects</h2>
              </div>
              <p className="text-foreground/80 font-medium mb-2">
                Outside of work, I channel my passion for technology into personal projects that allow me to experiment with new ideas and technologies.
                Especially in game development, where I can combine my love for coding and creativity to build engaging experiences.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group p-6 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground">Quote Quest</h3>
                    <a href="https://play.google.com/store/apps/details?id=com.trieuvo.quotequest" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  </div>
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                    A simple game that challenges users to guess famous quotes. Built with React Native and Firebase.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      React Native
                    </Badge>
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      Firebase
                    </Badge>
                  </div>
                </div>

                <div className="group p-6 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground">Spartan Saga</h3>
                    <a href="https://play.google.com/store/apps/details?id=com.trieuvo.spartansaga" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  </div>
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                    A hardcore platformer game inspired by classic titles. Developed using Unity and C#.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      Unity
                    </Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      C#
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills Card */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-foreground">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-accent/20 text-accent border-accent/30">React</Badge>
                    <Badge className="bg-accent/20 text-accent border-accent/30">TypeScript</Badge>
                    <Badge className="bg-accent/20 text-accent border-accent/30">Next.js</Badge>
                    <Badge className="bg-accent/20 text-accent border-accent/30">Tailwind</Badge>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Backend</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/20 text-primary border-primary/30">Node.js</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">Python</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">Ruby on Rails</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">Python</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">Nest.Js</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">PostgreSQL</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">GraphQL</Badge>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Tools & Cloud</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">Git</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Card */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-foreground">Let's Connect</h3>
              <div className="space-y-3">
                <a href="https://github.com/vominhtrieu" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:bg-primary/10 hover:border-primary/50 bg-transparent"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/vominhtrieu" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 hover:bg-primary/10 hover:border-primary/50 bg-transparent"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </a>
                <a href="mailto:vominhtrieu@gmail.com" className="block cursor-pointer">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 hover:bg-primary/10 hover:border-primary/50 bg-transparent"
                  >
                    <Mail className="w-4 h-4" />
                    minhtrieuvo600@gmail.com
                  </Button>
                </a>
              </div>
            </Card>

            {/* Status Card */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <p className="text-sm font-medium text-foreground">I'm not currently open to work</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
