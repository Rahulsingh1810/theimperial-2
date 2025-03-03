'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center text-blue-950">Get in Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue-950">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:border-transparent"
                />
              </div>
              <div>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:border-transparent"
                />
              </div>
              <div>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={13}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:border-transparent"
                />
              </div>
              <Button 
              type="submit" 
              className="w-full bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-300"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>

            </form>
          </div>
          
          <div>
            <div className="mb-8 bg-white rounded-lg p-8">
              <h2 className="text-3xl font-semibold mb-6 text-blue-950">Our Location</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412634965804!2d-73.98784368459377!3d40.75838197932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1560412335495!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-md"
                ></iframe>
              </div>
            </div>
            <div className="space-y-4 bg-white rounded-lg p-8">
              <div className="flex items-center text-gray-700">
                <MapPin className="w-6 h-6 mr-2 text-blue-900" />
                <p>123 Finance Street, New York, NY 10001</p>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="w-6 h-6 mr-2 text-blue-900" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="w-6 h-6 mr-2 text-blue-900" />
                <p>info@alphainvestments.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

