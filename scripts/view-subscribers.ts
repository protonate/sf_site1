#!/usr/bin/env node

import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

const SUBSCRIBERS_FILE = join(process.cwd(), 'data', 'subscribers.json')

const viewSubscribers = (): void => {
  if (!existsSync(SUBSCRIBERS_FILE)) {
    console.log('No subscribers file found. No one has subscribed yet.')
    return
  }

  try {
    const data = readFileSync(SUBSCRIBERS_FILE, 'utf8')
    const subscribers: string[] = JSON.parse(data)
    
    console.log(`\n📧 Total Subscribers: ${subscribers.length}\n`)
    
    if (subscribers.length > 0) {
      console.log('Recent subscribers:')
      subscribers.slice(-10).forEach((email, index) => {
        console.log(`${index + 1}. ${email}`)
      })
      
      if (subscribers.length > 10) {
        console.log(`\n... and ${subscribers.length - 10} more`)
      }
    }
    
    console.log('\n')
  } catch (error) {
    console.error('Error reading subscribers:', error)
  }
}

// Run if called directly
if (require.main === module) {
  viewSubscribers()
}

export { viewSubscribers }
