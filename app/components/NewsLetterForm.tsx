"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type React from "react"

export default function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      email: formData.get('email'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      company: formData.get('company'),
      jobTitle: formData.get('jobTitle'),
    }
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        console.log('Subscription successful')
        form.reset()
      } else {
        console.error('Error subscribing')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`min-h-screen bg-[#08225a] text-white p-4 sm:p-6 md:p-8  font-sans`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm tracking-wider">STAY UP-TO-DATE</p>
                <div className="w-12 h-0.5 bg-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                Sign up for our latest insights and firm announcements.
              </h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address *"
                  className="bg-transparent border-0 border-b border-white/30 rounded-none px-0 h-12 
                    placeholder:text-white/50 focus-visible:ring-0 focus-visible:border-white
                    transition-colors hover:border-white"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="firstName"
                  required
                  placeholder="First Name *"
                  className="bg-transparent border-0 border-b border-white/30 rounded-none px-0 h-12 
                    placeholder:text-white/50 focus-visible:ring-0 focus-visible:border-white
                    transition-colors hover:border-white"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="lastName"
                  required
                  placeholder="Last Name *"
                  className="bg-transparent border-0 border-b border-white/30 rounded-none px-0 h-12 
                    placeholder:text-white/50 focus-visible:ring-0 focus-visible:border-white
                    transition-colors hover:border-white"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="company"
                  placeholder="Company"
                  className="bg-transparent border-0 border-b border-white/30 rounded-none px-0 h-12 
                    placeholder:text-white/50 focus-visible:ring-0 focus-visible:border-white
                    transition-colors hover:border-white"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="jobTitle"
                  placeholder="Job Title"
                  className="bg-transparent border-0 border-b border-white/30 rounded-none px-0 h-12 
                    placeholder:text-white/50 focus-visible:ring-0 focus-visible:border-white
                    transition-colors hover:border-white"
                />
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="privacy"
                className="rounded-none border-white/30 hover:border-white data-[state=checked]:bg-white data-[state=checked]:text-[#08225a] mt-1 transition-colors"
                required
              />
              <Label htmlFor="privacy" className="text-sm font-light">
                By submitting this request, you consent to receive email from Blackstone. For information on our privacy
                practices see our{" "}
                <a href="#" className="underline hover:text-white/70 transition-colors">
                  Privacy Policy
                </a>
                .
              </Label>
            </div>

            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-transparent text-white border border-white/30 hover:bg-white hover:text-[#08225a] 
                  rounded-full text-base px-8 py-6 h-auto transition-all duration-300 ease-in-out
                  hover:border-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}