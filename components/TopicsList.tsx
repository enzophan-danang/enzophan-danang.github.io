"use client"

import React, { useState, useMemo } from 'react'
import { Input } from './ui/Input'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import TopicCard from './TopicCard'

interface Topic {
  idArticle: string
  title: string
  image: string
  url: string
}

interface TopicsListProps {
  topics: Topic[]
}

const TopicsList: React.FC<TopicsListProps> = ({ topics }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'withImages' | 'external'>('all')
  const [sortBy, setSortBy] = useState<'title' | 'recent'>('title')

  const filteredAndSortedTopics = useMemo(() => {
    let filtered = topics.filter(topic => 
      topic.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Apply filters
    if (filter === 'withImages') {
      filtered = filtered.filter(topic => topic.image && topic.image.length > 0)
    } else if (filter === 'external') {
      filtered = filtered.filter(topic => topic.url.includes('dev.to'))
    }

    // Sort
    if (sortBy === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title))
    }
    // For 'recent', we'll keep the original order as it seems to be chronological

    return filtered
  }, [topics, searchTerm, filter, sortBy])

  const clearFilters = () => {
    setSearchTerm('')
    setFilter('all')
    setSortBy('title')
  }

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="bg-card rounded-lg p-6 border">
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Search topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-4"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm font-medium text-muted-foreground">Filter:</span>
            <div className="flex gap-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('all')}
              >
                All ({topics.length})
              </Button>
              <Button
                variant={filter === 'withImages' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('withImages')}
              >
                With Images ({topics.filter(t => t.image).length})
              </Button>
              <Button
                variant={filter === 'external' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('external')}
              >
                Dev.to ({topics.filter(t => t.url.includes('dev.to')).length})
              </Button>
            </div>
          </div>

          {/* Sort */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm font-medium text-muted-foreground">Sort:</span>
            <div className="flex gap-2">
              <Button
                variant={sortBy === 'title' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSortBy('title')}
              >
                A-Z
              </Button>
              <Button
                variant={sortBy === 'recent' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSortBy('recent')}
              >
                Recent
              </Button>
            </div>
            
            {(searchTerm || filter !== 'all' || sortBy !== 'title') && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="ml-auto"
              >
                Clear All
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="outline">
            {filteredAndSortedTopics.length} result{filteredAndSortedTopics.length !== 1 ? 's' : ''}
          </Badge>
          {searchTerm && (
            <span className="text-sm text-muted-foreground">
              for "{searchTerm}"
            </span>
          )}
        </div>
      </div>

      {/* Topics Grid */}
      {filteredAndSortedTopics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedTopics.map((topic, index) => (
            <TopicCard 
              key={topic.idArticle} 
              topic={topic}
              className="animate-in fade-in-50 duration-500"
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/20 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">No topics found</h3>
          <p className="text-muted-foreground mb-4">
            {searchTerm 
              ? `No topics match "${searchTerm}". Try adjusting your search or filters.`
              : 'No topics match the selected filters.'
            }
          </p>
          {(searchTerm || filter !== 'all') && (
            <Button onClick={clearFilters} variant="outline">
              Clear filters
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

export default TopicsList