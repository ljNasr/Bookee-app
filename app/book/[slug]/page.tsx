"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Clock, MapPin, DollarSign, Upload } from "lucide-react"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function BookingRequest() {
  const { slug } = useParams()
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the booking request to the backend
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#222222]">
      <Navigation />

      <main className="flex-1 pt-16">
        <div className="container px-4 md:px-6 py-8">
          <div className="max-w-4xl mx-auto">
            {!submitted ? (
              <>
                <div className="mb-8">
                  <h1 className="text-3xl font-bold font-heading text-white">Book DJ Niotech</h1>
                  <p className="text-gray-300 mt-2">
                    Fill out the form below to request a booking for your event
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <Card className="bg-[#333333] border-[#22b5f3]/20">
                      <CardHeader>
                        <CardTitle className="text-white">Event Details</CardTitle>
                        <CardDescription className="text-gray-300">Provide information about your event</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="company" className="text-gray-300">Company/Organization Name</Label>
                                <Input id="company" placeholder="Your company name" required className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="legal-form" className="text-gray-300">Legal Form</Label>
                                <Input id="legal-form" placeholder="e.g., LLC, Ltd" required className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]" />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="registration" className="text-gray-300">Company Registration Number</Label>
                              <Input id="registration" placeholder="Registration number" className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]" />
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="event-name" className="text-gray-300">Event Name</Label>
                                <Input id="event-name" placeholder="Name of your event" required className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="event-date" className="text-gray-300">Event Date</Label>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Button
                                      variant="outline"
                                      className={cn(
                                        "w-full justify-start text-left font-normal border-gray-600 text-gray-300 hover:bg-[#22b5f3] hover:text-white",
                                        !date && "text-gray-400",
                                      )}
                                    >
                                      <CalendarIcon className="mr-2 h-4 w-4" />
                                      {date ? format(date, "PPP") : "Select date"}
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0 bg-[#333333] border-[#22b5f3]/20">
                                    <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                                  </PopoverContent>
                                </Popover>
                              </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="venue" className="text-gray-300">Venue Name</Label>
                                <Input id="venue" placeholder="Name of the venue" required className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="address" className="text-gray-300">Venue Address</Label>
                                <Input id="address" placeholder="Full address of venue" required className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]" />
                              </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                              <div className="space-y-2">
                                <Label htmlFor="capacity" className="text-gray-300">Venue Capacity</Label>
                                <Input id="capacity" type="number" placeholder="e.g., 500" required className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="ticket-price" className="text-gray-300">Average Ticket Price</Label>
                                <Input id="ticket-price" placeholder="e.g., 10-15€" required className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="set-time" className="text-gray-300">Set Time</Label>
                                <Input id="set-time" placeholder="e.g., 01-03h" required className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]" />
                              </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="set-duration" className="text-gray-300">Set Duration</Label>
                                <Input id="set-duration" placeholder="e.g., 1.5/2h" required className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="offer" className="text-gray-300">Your Offer</Label>
                                <Input id="offer" placeholder="e.g., 1500€" required className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]" />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="additional" className="text-gray-300">Additional Information</Label>
                              <Textarea
                                id="additional"
                                placeholder="Any other details about your event, requirements, etc."
                                rows={4}
                                className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label className="text-gray-300">Upload Contract (Optional)</Label>
                              <div className="border-2 border-dashed border-gray-600 rounded-md p-6 flex flex-col items-center justify-center bg-[#222222]">
                                <Upload className="h-8 w-8 text-gray-400 mb-2" />
                                <p className="text-sm text-gray-300 mb-1">
                                  Drag and drop files here or click to browse
                                </p>
                                <p className="text-xs text-gray-400">Supports PDF, DOC, DOCX (Max 5MB)</p>
                                <Input type="file" className="hidden" id="file-upload" accept=".pdf,.doc,.docx" />
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="mt-4 border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white"
                                  onClick={() => document.getElementById("file-upload")?.click()}
                                >
                                  Select File
                                </Button>
                              </div>
                            </div>
                          </div>

                          <Button type="button" onClick={() => router.push(`/book/${slug}/request`)} className="w-full bg-[#22b5f3] hover:bg-[#0071bc]">
                            Submit Booking Request
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card className="bg-[#333333] border-[#22b5f3]/20">
                      <CardHeader>
                        <CardTitle className="text-white">DJ Niotech</CardTitle>
                        <CardDescription className="text-gray-300">Techno DJ & Producer</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-square relative rounded-md overflow-hidden mb-4 border border-gray-600">
                          <Image
                            src="/placeholder.svg?height=300&width=300"
                            alt="DJ Niotech"
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-[#22b5f3] mr-2" />
                            <span className="text-sm text-gray-300">Berlin, Germany</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-[#22b5f3] mr-2" />
                            <span className="text-sm text-gray-300">1.5 - 2 hour sets</span>
                          </div>
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 text-[#22b5f3] mr-2" />
                            <span className="text-sm text-gray-300">Check availability calendar</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 text-[#22b5f3] mr-2" />
                            <span className="text-sm text-gray-300">€1000 - €1500 typical fee</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </>
            ) : (
              <Card className="text-center p-8 bg-[#333333] border-[#22b5f3]/20">
                <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold font-heading mb-2 text-white">Booking Request Sent!</h2>
                <p className="text-gray-300 mb-6">
                  Your booking request for DJ Niotech has been submitted successfully. The artist will review your
                  request and respond shortly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" onClick={() => setSubmitted(false)} className="border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                    Submit Another Request
                  </Button>
                  <Button className="bg-[#22b5f3] hover:bg-[#0071bc]">View Your Requests</Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

