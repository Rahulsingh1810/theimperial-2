"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Inter } from "next/font/google"
import type React from "react"



export default function ResumeSubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resume: null as File | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      // Handle form submission here
      console.log(formData)
    } finally {
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        coverLetter: "",
        resume: null,
      })
    }
  }

  return (
    <div className={`min-h-screen bg-[#08225a] text-white p-4 sm:p-6 md:p-8 `}>
      <div className="m-w-full  mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 pl-32 lg:gap-12  items-start">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm tracking-wider">CAREER OPPORTUNITIES</p>
                <div className="w-12 h-0.5 bg-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light ">
                Submit your application and join our team.
              </h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name *"
                  className="bg-transparent border-0 border-b border-white/30 rounded-none px-0 h-12 
                    placeholder:text-white/50 focus-visible:ring-0 focus-visible:border-white
                    transition-colors hover:border-white"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address *"
                  className="bg-transparent border-0 border-b border-white/30 rounded-none px-0 h-12 
                    placeholder:text-white/50 focus-visible:ring-0 focus-visible:border-white
                    transition-colors hover:border-white"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number *"
                  className="bg-transparent border-0 border-b border-white/30 rounded-none px-0 h-12 
                    placeholder:text-white/50 focus-visible:ring-0 focus-visible:border-white
                    transition-colors hover:border-white"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  placeholder="Position Applied For *"
                  className="bg-transparent border-0 border-b border-white/30 rounded-none px-0 h-12 
                    placeholder:text-white/50 focus-visible:ring-0 focus-visible:border-white
                    transition-colors hover:border-white"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Cover Letter"
                  className="bg-transparent border-0 border-b border-white/30 rounded-none px-0 
                    placeholder:text-white/50 focus-visible:ring-0 focus-visible:border-white
                    transition-colors hover:border-white min-h-[100px] resize-none"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="resume" className="block text-sm font-light mb-2">
                  Upload Resume *
                </Label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="bg-transparent file:bg-transparent file:border file:border-white/30 
                    file:text-white file:rounded-full file:px-4  file:hover:bg-white 
                    file:hover:text-[#08225a] file:transition-all file:duration-300 file:mr-4
                    border border-white/30 rounded-none px-4 mb-2 hover:border-white"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-transparent text-white hover:bg-white hover:text-[#08225a] 
                rounded-full text-base px-8 py-6 h-auto transition-all duration-300 ease-in-out
                hover:border-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

