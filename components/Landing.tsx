"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { Spotlight } from './ui/Spotlight'
import userInfo from '@/data/userInfo.json'

const Landing = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spotlight Effects */}
      <div className="absolute inset-0">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]" fill="#FF00FF" />
        <Spotlight className="-top-28 -left-80 h-[80vh] w-[50vw]" fill="#008080" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#008080] rounded-full animate-pulse"></div>
                <Badge variant="outline" className="text-[#008080] border-[#008080]/30">
                  {userInfo.status}
                </Badge>
              </div>
              <Badge variant="secondary" className="bg-[#FF00FF]/20 text-white border-[#FF00FF]/30">{userInfo.experience} Experience</Badge>
            </div>

            {/* Name and Position */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                <span className="block">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-[#FF00FF] via-[#008080] to-[#FF00FF] bg-clip-text text-transparent typing-demo">
                  {userInfo.fullName}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-medium">
                {userInfo.position}
              </h2>
            </div>

            {/* Bio */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              {userInfo.bio}
            </p>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {userInfo.techStack.map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="px-4 py-2 text-sm bg-[#008080]/20 border-[#008080]/50 text-white hover:bg-[#008080]/30 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Recent Project */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">Latest Project</h3>
              <p className="text-[#FF00FF] font-medium">{userInfo.recentProject}</p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-gradient-to-r from-[#FF00FF] to-[#008080] hover:from-[#E600E6] hover:to-[#006666] text-white">
                <Link href={`mailto:${userInfo.email}`} className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Get in Touch
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="border-[#008080]/50 text-white hover:bg-[#008080]/20 hover:border-[#008080]">
                <Link href={`https://${userInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" />
                  </svg>
                  View GitHub
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF00FF] via-white to-[#008080] p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-black"></div>
              </div>
              
              {/* Profile Image */}
              <div className="relative p-4">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative rounded-full overflow-hidden bg-gradient-to-br from-[#FF00FF]/20 to-[#008080]/20 backdrop-blur-sm">
                  <Image
                    src="/avatar.png"
                    alt={userInfo.fullName}
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#008080]/80 rounded-full flex items-center justify-center animate-bounce">
                    <span className="text-white font-bold text-sm">JS</span>
                  </div>
                  <div className="absolute bottom-8 left-4 w-10 h-10 bg-[#FF00FF]/80 rounded-full flex items-center justify-center animate-bounce delay-1000">
                    <span className="text-white font-bold text-xs">⚛️</span>
                  </div>
                  <div className="absolute top-1/2 left-0 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center animate-bounce delay-500">
                    <span className="text-[#FF00FF] font-bold text-xs">✨</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-[#008080]/30">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF00FF] to-[#008080] bg-clip-text text-transparent">
              {userInfo.experience}
            </div>
            <div className="text-gray-300 mt-2">Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF00FF] to-[#008080] bg-clip-text text-transparent">
              {userInfo.techStack.length}+
            </div>
            <div className="text-gray-300 mt-2">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF00FF] to-[#008080] bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-gray-300 mt-2">Projects</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Landing