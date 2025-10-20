import { NextRequest, NextResponse } from 'next/server'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'

const SUBSCRIBERS_FILE = join(process.cwd(), 'data', 'subscribers.json')

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = join(process.cwd(), 'data')
  if (!existsSync(dataDir)) {
    require('fs').mkdirSync(dataDir, { recursive: true })
  }
}

// Load subscribers from file
const loadSubscribers = (): string[] => {
  ensureDataDir()
  if (!existsSync(SUBSCRIBERS_FILE)) {
    return []
  }
  try {
    const data = readFileSync(SUBSCRIBERS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error loading subscribers:', error)
    return []
  }
}

// Save subscribers to file
const saveSubscribers = (subscribers: string[]): void => {
  ensureDataDir()
  try {
    writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2))
  } catch (error) {
    console.error('Error saving subscribers:', error)
    throw error
  }
}

// Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const subscribers = loadSubscribers()
    const normalizedEmail = email.toLowerCase().trim()

    if (subscribers.includes(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      )
    }

    subscribers.push(normalizedEmail)
    saveSubscribers(subscribers)

    // Log subscription for monitoring
    console.log(`New subscriber: ${normalizedEmail} (Total: ${subscribers.length})`)

    return NextResponse.json(
      { 
        message: 'Successfully subscribed',
        totalSubscribers: subscribers.length 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const subscribers = loadSubscribers()
    return NextResponse.json(
      { 
        totalSubscribers: subscribers.length,
        subscribers: subscribers.slice(0, 10) // Only return first 10 for privacy
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching subscribers:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
