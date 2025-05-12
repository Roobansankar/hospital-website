"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div data-animation="fade-right">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Send Us a Message</h2>
      <div className="mb-6 h-1 w-24 bg-blue-600"></div>

      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center rounded-lg bg-green-50 p-8 text-center dark:bg-green-900/20">
          <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Message Sent Successfully!</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Thank you for contacting us. We'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
                Full Name *
              </label>
              <Input id="name" type="text" placeholder="John Doe" required className="w-full" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
                Email Address *
              </label>
              <Input id="email" type="email" placeholder="john.doe@example.com" required className="w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
                Phone Number
              </label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="w-full" />
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
                Subject *
              </label>
              <Select>
                <SelectTrigger id="subject" className="w-full">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="appointment">Appointment Inquiry</SelectItem>
                  <SelectItem value="general">General Information</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="billing">Billing Question</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
              Message *
            </label>
            <Textarea
              id="message"
              placeholder="Please type your message here..."
              required
              className="min-h-[150px] w-full"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  )
}

export default ContactForm
