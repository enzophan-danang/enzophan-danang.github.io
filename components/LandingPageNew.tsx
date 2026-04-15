"use client"

import React from 'react'
import { Button } from './ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'
import { Badge } from './ui/Badge'
import { Spotlight } from './ui/Spotlight'

const LandingPage = () => {
  const valuePropositions = [
    {
      metric: "Defect Detection",
      improvement: "+45%",
      context: "Early-stage detection through Shift-Left implementation."
    },
    {
      metric: "Time-to-Market", 
      improvement: "-30%",
      context: "Streamlined QA pipelines and automated regression suites."
    },
    {
      metric: "Cost of Quality",
      improvement: "-25%", 
      context: "Reducing \"rework\" hours by stabilizing core architectures."
    }
  ]

  const coreServices = [
    {
      title: "TMMi Assessment & Strategy",
      description: "Gap analysis of your current maturity level and a roadmap to international certification."
    },
    {
      title: "Test Automation Transformation", 
      description: "Transitioning from brittle manual testing to scalable, AI-driven automation frameworks."
    },
    {
      title: "CI/CD Quality Gates",
      description: "Integrating automated \"go/no-go\" checkpoints into your DevOps pipeline."
    },
    {
      title: "Performance & Scalability Lab",
      description: "Stress-testing infrastructures to ensure stability during peak traffic loads."
    }
  ]

  const frameworkSteps = [
    {
      title: "Diagnostic", 
      description: "360-degree audit of code quality, team culture, and tooling."
    },
    {
      title: "Strategy",
      description: "Tailored SQM blueprint aligned with your business KPIs."
    },
    {
      title: "Implementation", 
      description: "Hands-on integration of tools (Selenium, Playwright, SonarQube, etc.)."
    },
    {
      title: "Optimization",
      description: "Continuous monitoring and refinement of quality metrics."
    }
  ]

  const testimonials = [
    {
      quote: "Their consulting didn't just give us a tool; it changed our culture. We went from monthly buggy releases to bi-weekly stable deployments in under six months.",
      author: "Le Minh Tam",
      title: "CTO of Nexus Fintech"
    },
    {
      quote: "The ROI was evident by the second quarter. Our support tickets dropped by 60% because the quality was 'baked in' from the start.",
      author: "Sarah Chen", 
      title: "Head of Engineering at CloudScale Solutions"
    }
  ]

  const faqs = [
    {
      question: "Do you work with legacy systems?",
      answer: "Yes, we specialize in modernizing QA for legacy monoliths while transitioning to microservices."
    },
    {
      question: "How long does a typical engagement last?",
      answer: "Initial audits take 2 weeks; full transformation projects typically span 3 to 6 months."
    },
    {
      question: "Which industries do you serve?",
      answer: "We have deep expertise in Fintech, Healthcare, and high-scale E-commerce."
    }
  ]

  const techStack = {
    "Static Analysis": ["SonarQube", "ESLint", "Checkstyle"],
    "Automation": ["Playwright", "Cypress", "Selenium", "Appium"],
    "Performance": ["JMeter", "k6", "Gatling"],
    "Management": ["Jira", "TestRail", "Zephyr"]
  }

  return (
    <div className="relative bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spotlight Effects */}
        <div className="absolute inset-0 opacity-40 dark:opacity-100">
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
          <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]" fill="#FF00FF" />
          <Spotlight className="-top-28 -left-80 h-[80vh] w-[50vw]" fill="#008080" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Elevate Your Engineering Standards with Expert{' '}
              <span className="bg-gradient-to-r from-[#FF00FF] to-[#008080] bg-clip-text text-transparent">
                SQM Consulting
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We help enterprise teams reduce technical debt, automate testing lifecycles, and achieve 99.9% deployment reliability through data-driven quality frameworks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                className="px-8 py-4 bg-gradient-to-r from-[#FF00FF] to-[#008080] hover:from-[#E600E6] hover:to-[#006666] text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Book a Quality Audit
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-4 border-2 border-[#008080] text-[#008080] hover:bg-[#008080] hover:text-white font-semibold text-lg rounded-lg transition-all duration-300"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Proven Results That Matter
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our data-driven approach delivers measurable improvements across key quality metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePropositions.map((item, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-[#008080]/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{item.metric}</CardTitle>
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#FF00FF] to-[#008080] bg-clip-text text-transparent">
                    {item.improvement}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{item.context}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Consulting Services */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Core Consulting Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to transform your quality management approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-[#FF00FF]/50 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#FF00FF]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Framework */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Framework
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A proven 4-step process that ensures sustainable quality transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworkSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF]/20 to-[#008080]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Card className="relative bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-[#008080]/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FF00FF] to-[#008080] rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real results from real transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-[#FF00FF]/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-[#008080] mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FF00FF] to-[#008080] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                      <div className="text-gray-500 dark:text-gray-400">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get answers to common questions about our consulting approach
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-[#008080]/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#008080]">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Integration Stack */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Technical Integration Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We consult on and implement industry-leading tools and frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, tools], index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-[#FF00FF]/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#FF00FF] text-center">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="bg-[#008080]/20 text-[#008080] hover:bg-[#008080]/30 mr-2 mb-2 dark:bg-[#008080]/30 dark:text-[#008080]">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#FF00FF]/10 to-[#008080]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Quality Management?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven framework can elevate your engineering standards and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="px-8 py-4 bg-gradient-to-r from-[#FF00FF] to-[#008080] hover:from-[#E600E6] hover:to-[#006666] text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Schedule a Consultation
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-4 border-2 border-[#008080] text-[#008080] hover:bg-[#008080] hover:text-white font-semibold text-lg rounded-lg transition-all duration-300"
            >
              Download Our Framework Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage