import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  Palette, 
  Code, 
  Megaphone, 
  Share2, 
  Music, 
  FileImage, 
  TrendingUp, 
  BarChart, 
  Users, 
  CheckCircle, 
  ChevronRight,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Header />
      <Hero />
      <Services />
      <GrowBusiness />
      <WorkSmarter />
      <Team />
      <Clients />
      <Testimonials />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <span className="ml-2 text-xl font-bold text-primary">MAWJA Production</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
          <a href="#team" className="text-gray-700 hover:text-primary transition-colors">Team</a>
          <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Portfolio</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
        </nav>
        <Button className="hidden md:block">Get Started</Button>
        <Button variant="ghost" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

const Logo = () => {
  return (
    <div className="relative w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
      <div className="absolute w-8 h-6 overflow-hidden">
        <div className="w-full h-1 bg-white rounded-full absolute top-1"></div>
        <div className="w-full h-1 bg-white rounded-full absolute top-3"></div>
        <div className="w-full h-1 bg-white rounded-full absolute top-5"></div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 bg-gradient-to-b from-primary to-primary/80 text-white overflow-hidden">
      <div className="container mx-auto px-4 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            DIGITAL SOLUTIONS FOR YOUR CREATIVE IDEAS
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MAWJA PRODUCTION PROVIDES COMPREHENSIVE DIGITAL MARKETING SOLUTIONS TO BRING YOUR CREATIVE IDEAS TO LIFE. WE HELP BUSINESSES TRANSFORM THEIR DIGITAL PRESENCE WITH CUTTING-EDGE DESIGN, DEVELOPMENT, AND MARKETING STRATEGIES.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="hero-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      {children}
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Design",
      description: "Creative design solutions that help your brand stand out. We create visually stunning designs that capture your brand's essence.",
      icon: <Palette className="h-8 w-8" />
    },
    {
      title: "Development",
      description: "Custom web and app development with cutting-edge technologies. We build responsive, user-friendly digital solutions.",
      icon: <Code className="h-8 w-8" />
    },
    {
      title: "Marketing",
      description: "Strategic digital marketing campaigns that drive results. We help you reach your target audience and achieve your business goals.",
      icon: <Megaphone className="h-8 w-8" />
    },
    {
      title: "Social Media",
      description: "Comprehensive social media management to boost your online presence. We create engaging content and build your community.",
      icon: <Share2 className="h-8 w-8" />
    },
    {
      title: "Audio Visual",
      description: "Professional audio and video production services. We create high-quality multimedia content that tells your story.",
      icon: <Music className="h-8 w-8" />
    },
    {
      title: "Printing Services",
      description: "High-quality printing solutions for all your marketing materials. From business cards to banners, we've got you covered.",
      icon: <FileImage className="h-8 w-8" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-center mb-4 text-primary">WHAT WE DO</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-gray-600">
            Our comprehensive range of services is designed to help your business thrive in the digital landscape.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <div className="service-card h-full">
                <div className="mb-4 text-secondary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const GrowBusiness = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-center mb-12 text-primary">WE HELP YOU TO GROW YOUR BUSINESS</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 mr-4 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Online Presence</h3>
                  <p className="text-gray-700">Establish a strong digital footprint with our comprehensive online presence solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 mr-4 text-white">
                  <BarChart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Marketing Strategy</h3>
                  <p className="text-gray-700">Develop effective marketing strategies that align with your business goals and target audience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 mr-4 text-white">
                  <Share2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Promote Social Media</h3>
                  <p className="text-gray-700">Leverage the power of social media to connect with your audience and build brand loyalty.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="relative">
              <img  className="rounded-lg shadow-xl" alt="Digital marketing strategy illustration" src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const WorkSmarter = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-center mb-12 text-primary">WORK SMARTER, NOT HARDER</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative">
              <img  className="rounded-lg shadow-xl" alt="Mobile app interface design" src="https://images.unsplash.com/photo-1701680853149-1b5240a95eeb" />
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 mr-4 text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Digital Agency & Consulting</h3>
                  <p className="text-gray-700">Expert guidance and solutions to help your business thrive in the digital landscape.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 mr-4 text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Planning To Delivery</h3>
                  <p className="text-gray-700">Comprehensive project management from initial concept to final implementation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 mr-4 text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Content Management</h3>
                  <p className="text-gray-700">Streamlined content creation and management to keep your digital presence fresh and engaging.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const team = [
    {
      name: "Ahmed Hassan",
      position: "Creative Director",
      image: "team-member-1"
    },
    {
      name: "Sara Ahmed",
      position: "Lead Developer",
      image: "team-member-2"
    },
    {
      name: "Mohammed Ali",
      position: "Marketing Specialist",
      image: "team-member-3"
    }
  ];

  return (
    <section id="team" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-center mb-4">MEET OUR TEAM</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-white/80">
            Our talented team of professionals is dedicated to delivering exceptional results for our clients. With years of experience and a passion for what we do, we're here to help your business succeed.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <AnimatedSection key={index}>
              <div className="text-center">
                <div className="mb-4 mx-auto rounded-full overflow-hidden w-48 h-48 border-4 border-white/20">
                  <img  className="w-full h-full object-cover" alt={`${member.name}, ${member.position} at MAWJA Production`} src="https://images.unsplash.com/photo-1592878863518-0357779ebc6a" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-white/80">{member.position}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const Clients = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-center mb-12 text-primary">THEY TRUST US</h2>
        </AnimatedSection>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          {[1, 2, 3, 4, 5].map((index) => (
            <AnimatedSection key={index}>
              <div className="grayscale hover:grayscale-0 transition-all duration-300">
                <img  className="h-12 md:h-16" alt={`Client logo ${index}`} src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-center mb-12 text-primary">WHAT THEY SAY ABOUT US</h2>
        </AnimatedSection>
        
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="testimonial-card text-center">
              <div className="mb-4">
                <img  className="w-16 h-16 rounded-full mx-auto" alt="Client testimonial avatar" src="https://images.unsplash.com/photo-1544212408-c711b7c19b92" />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Working with MAWJA Production has been a game-changer for our business. Their creative approach and technical expertise helped us achieve our digital marketing goals beyond our expectations."
              </p>
              <p className="font-bold text-primary">Amina Rahman</p>
              <p className="text-sm text-gray-500">CEO, Innovate Tech</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-center mb-4 text-primary">INNOVATION ON DISPLAY</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-gray-600">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <AnimatedSection key={index}>
              <div className="group relative overflow-hidden rounded-lg">
                <img  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" alt={`Portfolio project ${index}`} src="https://images.unsplash.com/photo-1495224814653-94f36c0a31ea" />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold mb-2">Project Title</h3>
                    <p className="mb-4">Web Design / Development</p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary text-white hover:bg-primary/90">
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-center mb-12 text-primary">LET'S CREATE TOGETHER</h2>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-primary p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p>info@mawjaproduction.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4" />
                  <div>
                    <p className="font-bold">Phone</p>
                    <p>+123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 mr-4" />
                  <div>
                    <p className="font-bold">Social Media</p>
                    <div className="flex space-x-4 mt-2">
                      {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                        <a key={social} href="#" className="hover:text-secondary transition-colors">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="sr-only">{social}</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Logo />
              <span className="ml-2 text-xl font-bold">MAWJA Production</span>
            </div>
            <p className="mt-2 text-white/60 max-w-md">
              Digital solutions for your creative ideas. We help businesses transform their digital presence.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'github'].map((social) => (
              <a key={social} href="#" className="hover:text-secondary transition-colors">
                <span className="sr-only">{social}</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
          <p>Copyright © 2025 MAWJA Production. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default App;