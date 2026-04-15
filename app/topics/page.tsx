import React from 'react'
import { Metadata } from 'next'
import TopicsList from '@/components/TopicsList'
import Navigation from '@/components/Navigation'
import topicsData from '@/data/topics.json'
import { Spotlight } from '@/components/ui/Spotlight'

export const metadata: Metadata = {
  title: 'Topics | Portfolio',
  description: 'Explore our collection of technology and development topics',
}

interface Topic {
  idArticle: string
  title: string
  image: string
  url: string
}

const TopicsPage = () => {
  const topics: Topic[] = topicsData

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
      {/* Hero Section with Spotlights */}
      <section className="relative py-20 px-4">
        <div>
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
          <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]" fill="purple" />
          <Spotlight className="-top-28 -left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technology Topics
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Explore our curated collection of {topics.length} articles covering testing, development, and technology insights
            </p>
          </div>
        </div>
      </section>

      {/* Topics with Search and Filters */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <TopicsList topics={topics} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">{topics.length}</h3>
              <p className="text-muted-foreground">Total Articles</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">
                {topics.filter(topic => topic.image).length}
              </h3>
              <p className="text-muted-foreground">With Images</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">
                {topics.filter(topic => topic.url.includes('dev.to')).length}
              </h3>
              <p className="text-muted-foreground">Dev.to Articles</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default TopicsPage