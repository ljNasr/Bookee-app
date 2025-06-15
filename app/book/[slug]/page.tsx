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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navigation />

      <main className="flex-1 pt-16">
        <div className="container px-4 md:px-6 py-8">
          <div className="max-w-4xl mx-auto">
            {!submitted ? (
              <>
                <div className="mb-8">
                  <h1 className="text-3xl font-bold font-heading">Book DJ Niotech</h1>
                  <p className="text-muted-foreground mt-2">
                    Fill out the form below to request a booking for your event
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Event Details</CardTitle>
                        <CardDescription>Provide information about your event</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="company">Company/Organization Name</Label>
                                <Input id="company" placeholder="Your company name" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="legal-form">Legal Form</Label>
                                <Input id="legal-form" placeholder="e.g., LLC, Ltd" required />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="registration">Company Registration Number</Label>
                              <Input id="registration" placeholder="Registration number" />
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="event-name">Event Name</Label>
                                <Input id="event-name" placeholder="Name of your event" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="event-date">Event Date</Label>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Button
                                      variant="outline"
                                      className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !date && "text-muted-foreground",
                                      )}
                                    >
                                      <CalendarIcon className="mr-2 h-4 w-4" />
                                      {date ? format(date, "PPP") : "Select date"}
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0">
                                    <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                                  </PopoverContent>
                                </Popover>
                              </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="venue">Venue Name</Label>
                                <Input id="venue" placeholder="Name of the venue" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="address">Venue Address</Label>
                                <Input id="address" placeholder="Full address of venue" required />
                              </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                              <div className="space-y-2">
                                <Label htmlFor="capacity">Venue Capacity</Label>
                                <Input id="capacity" type="number" placeholder="e.g., 500" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="ticket-price">Average Ticket Price</Label>
                                <Input id="ticket-price" placeholder="e.g., 10-15€" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="set-time">Set Time</Label>
                                <Input id="set-time" placeholder="e.g., 01-03h" required />
                              </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="set-duration">Set Duration</Label>
                                <Input id="set-duration" placeholder="e.g., 1.5/2h" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="offer">Your Offer</Label>
                                <Input id="offer" placeholder="e.g., 1500€" required />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="additional">Additional Information</Label>
                              <Textarea
                                id="additional"
                                placeholder="Any other details about your event, requirements, etc."
                                rows={4}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label>Upload Contract (Optional)</Label>
                              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                                <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                                <p className="text-sm text-muted-foreground mb-1">
                                  Drag and drop files here or click to browse
                                </p>
                                <p className="text-xs text-muted-foreground">Supports PDF, DOC, DOCX (Max 5MB)</p>
                                <Input type="file" className="hidden" id="file-upload" accept=".pdf,.doc,.docx" />
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="mt-4"
                                  onClick={() => document.getElementById("file-upload")?.click()}
                                >
                                  Select File
                                </Button>
                              </div>
                            </div>
                          </div>

                          <Button type="button" onClick={() => router.push(`/book/${slug}/request`)} className="w-full">
                            Submit Booking Request
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>DJ Niotech</CardTitle>
                        <CardDescription>Techno DJ & Producer</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-square relative rounded-md overflow-hidden mb-4">
                          <Image
                            src="/placeholder.svg?height=300&width=300"
                            alt="DJ Niotech"
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">Berlin, Germany</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">1.5 - 2 hour sets</span>
                          </div>
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">Check availability calendar</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">€1000 - €1500 typical fee</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </>
            ) : (
              <Card className="text-center p-8">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold font-heading mb-2">Booking Request Sent!</h2>
                <p className="text-muted-foreground mb-6">
                  Your booking request for DJ Niotech has been submitted successfully. The artist will review your
                  request and respond shortly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Submit Another Request
                  </Button>
                  <Button>View Your Requests</Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

