import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Badge } from './ui/Badge'
import { cn } from '@/utils/cn'

interface Topic {
  idArticle: string
  title: string
  image: string
  url: string
}

interface TopicCardProps {
  topic: Topic
  className?: string
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, className }) => {
  const isExternalLink = topic.url.startsWith('http')
  const cleanUrl = topic.url.replace('https://dev.tohttps://dev.to/', 'https://dev.to/')
  
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (isExternalLink) {
      return (
        <a 
          href={cleanUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block transition-transform hover:scale-105"
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={cleanUrl} className="block transition-transform hover:scale-105">
        {children}
      </Link>
    )
  }

  return (
    <CardWrapper>
      <Card className={cn("h-full overflow-hidden hover:shadow-lg transition-shadow", className)}>
        {topic.image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={topic.image}
              alt={topic.title}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        )}
        
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg leading-tight line-clamp-2">
              {topic.title}
            </CardTitle>
            {isExternalLink && (
              <Badge variant="outline" className="shrink-0 text-xs">
                External
              </Badge>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="text-xs font-mono opacity-60">
              {topic.idArticle.slice(0, 20)}...
            </span>
            <span className="text-xs">
              {isExternalLink ? '↗ dev.to' : 'Read more →'}
            </span>
          </div>
        </CardContent>
      </Card>
    </CardWrapper>
  )
}

export default TopicCard