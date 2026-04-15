"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Navigation from '@/components/Navigation'

const Dashboard = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@company.com",
    avatar: "JD",
    role: "Senior QA Engineer",
    company: "Tech Solutions Inc."
  }

  const stats = [
    {
      title: "Total Projects",
      value: "24",
      change: "+12%",
      trend: "up",
      description: "from last month"
    },
    {
      title: "Tests Automated",
      value: "1,847",
      change: "+23%",
      trend: "up",
      description: "this quarter"
    },
    {
      title: "Defect Detection Rate",
      value: "94.2%",
      change: "+5.8%",
      trend: "up",
      description: "vs last quarter"
    },
    {
      title: "Time Saved",
      value: "156h",
      change: "+18%",
      trend: "up",
      description: "through automation"
    }
  ]

  const recentProjects = [
    {
      id: 1,
      name: "E-commerce Platform",
      status: "In Progress",
      progress: 75,
      team: 8,
      deadline: "2026-05-15",
      priority: "High"
    },
    {
      id: 2,
      name: "Mobile Banking App",
      status: "Testing",
      progress: 90,
      team: 6,
      deadline: "2026-04-25",
      priority: "Critical"
    },
    {
      id: 3,
      name: "Healthcare Dashboard",
      status: "Planning",
      progress: 25,
      team: 5,
      deadline: "2026-06-30",
      priority: "Medium"
    }
  ]

  const recentActivities = [
    {
      id: 1,
      action: "Completed test automation for login module",
      project: "E-commerce Platform",
      timestamp: "2 hours ago",
      type: "test"
    },
    {
      id: 2,
      action: "Found critical security vulnerability",
      project: "Mobile Banking App",
      timestamp: "4 hours ago",
      type: "bug"
    },
    {
      id: 3,
      action: "Updated CI/CD pipeline configuration",
      project: "Healthcare Dashboard",
      timestamp: "1 day ago",
      type: "config"
    },
    {
      id: 4,
      action: "Reviewed and approved test plan",
      project: "E-commerce Platform",
      timestamp: "2 days ago",
      type: "review"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Complete': return 'bg-green-500'
      case 'In Progress': return 'bg-blue-500'
      case 'Testing': return 'bg-yellow-500'
      case 'Planning': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'border-red-500 text-red-600 dark:text-red-400'
      case 'High': return 'border-orange-500 text-orange-600 dark:text-orange-400'
      case 'Medium': return 'border-yellow-500 text-yellow-600 dark:text-yellow-400'
      case 'Low': return 'border-green-500 text-green-600 dark:text-green-400'
      default: return 'border-gray-500 text-gray-600 dark:text-gray-400'
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'test':
        return <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      case 'bug':
        return <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 9a3 3 0 10-6 0 3 3 0 006 0z"/><path d="M7 12a5 5 0 1010 0v3a3 3 0 11-6 0v-3z"/></svg>
      case 'config':
        return <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
      case 'review':
        return <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      default:
        return <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back, {user.name.split(' ')[0]}!</h1>
              <p className="text-gray-600 dark:text-gray-300">Here's what's happening with your projects today.</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{user.role}</div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-[#FF00FF] to-[#008080] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">{user.avatar}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardDescription className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {stat.title}
                </CardDescription>
                <svg className="h-4 w-4 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  <span className={`${stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {stat.change}
                  </span>{' '}
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Projects */}
          <div className="lg:col-span-2">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Recent Projects</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Your active projects and their current status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-gray-900 dark:text-white">{project.name}</h3>
                          <Badge className={`${getPriorityColor(project.priority)} bg-transparent`}>
                            {project.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                          <span className="flex items-center">
                            <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)} mr-2`}></div>
                            {project.status}
                          </span>
                          <span>{project.team} team members</span>
                          <span>Due {new Date(project.deadline).toLocaleDateString()}</span>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-300 mb-1">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-[#FF00FF] to-[#008080] h-2 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Recent Activity</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Your latest actions and updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex space-x-3">
                      <div className="flex-shrink-0">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 dark:text-white font-medium">
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {activity.project} • {activity.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Quick Actions</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Frequently used actions to boost your productivity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Button className="bg-gradient-to-r from-[#FF00FF] to-[#008080] hover:from-[#E600E6] hover:to-[#006666] text-white">
                New Project
              </Button>
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                Run Tests
              </Button>
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                Generate Report
              </Button>
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                Schedule Review
              </Button>
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                Team Chat
              </Button>
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default Dashboard