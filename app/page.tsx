'use client'

import { useState } from 'react'
import { ArrowRight, Shield, Zap, Users, TrendingUp, CheckCircle } from 'lucide-react'

type SubscriptionStatus = 'idle' | 'loading' | 'success' | 'error'

const LandingPage = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubscriptionStatus>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('You\'re on the list! We\'ll be in touch soon.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  const features = [
    {
      icon: Shield,
      title: 'Privacy by Design',
      description: 'Zero third-party cookies, zero surveillance, maximum privacy protection'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Edge computing delivers ads in <50ms with superior performance'
    },
    {
      icon: Users,
      title: 'Creator First',
      description: '70%+ revenue share for creators vs 45-55% industry standard'
    },
    {
      icon: TrendingUp,
      title: 'Better Results',
      description: '32% higher engagement with contextual targeting vs behavioral'
    }
  ]

  const stats = [
    { value: '$278B', label: 'Market Opportunity' },
    { value: '30-55%', label: 'Current Intermediary Tax' },
    { value: '70%+', label: 'Creator Revenue Share' },
    { value: '<50ms', label: 'Ad Response Time' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-background-pulse">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-white">PrivacyAd</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#stats" className="text-gray-300 hover:text-white transition-colors">Impact</a>
            <a href="#waitlist" className="text-gray-300 hover:text-white transition-colors">Waitlist</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Google Privacy Sandbox Failed • We're Building the Solution
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Privacy-First Advertising
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            While Google's Privacy Sandbox collapsed after 6 years and billions invested, 
            we're building the privacy-preserving ad platform that actually works. 
            <span className="text-primary-400 font-medium"> No cookies, no surveillance, maximum performance.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>

          {message && (
            <div className={`max-w-md mx-auto p-4 rounded-lg ${
              status === 'success' 
                ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}>
              <div className="flex items-center justify-center">
                {status === 'success' && <CheckCircle className="w-5 h-5 mr-2" />}
                {message}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="px-6 py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for the Post-Cookie Era
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our edge-computing architecture delivers superior performance while respecting user privacy. 
              No compromises, no surveillance, just better advertising.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-primary-500/50 transition-colors">
                <feature.icon className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="px-6 py-20 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            The $278B Problem
          </h2>
          <div className="text-lg text-gray-300 space-y-6">
            <p>
              Google's Privacy Sandbox failure left a massive void in the advertising ecosystem. 
              Publishers lose 30-55% of ad revenue to intermediaries, creators get only 45-55% 
              of platform revenue, and users face invasive tracking.
            </p>
            <p className="text-primary-400 font-medium">
              We're building the solution that works for everyone: creators, advertisers, and users.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be First to Know
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join 1,000+ creators, advertisers, and privacy advocates already on our waitlist. 
            Early access coming Q2 2025.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary-500 rounded-md flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">PrivacyAd</span>
          </div>
          <p className="text-gray-400 text-sm">
            Privacy-first advertising technology. Coming Q2 2025.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
