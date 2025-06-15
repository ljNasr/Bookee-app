"use client"

import type React from "react"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { format, addDays } from "date-fns"
import { cn } from "@/lib/utils"
import {
  CalendarIcon,
  Clock,
  MapPin,
  DollarSign,
  Music,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Upload,
} from "lucide-react"

export default function BookingRequest() {
  const router = useRouter()
  const { slug } = useParams()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    // Step 1: Event Details
    eventName: "",
    eventType: "club",
    venueName: "",
    venueAddress: "",
    city: "",
    country: "",
    capacity: "",

    // Step 2: Performance Details
    date: undefined as Date | undefined,
    startTime: "",
    endTime: "",
    setDuration: "",
    ticketPrice: "",

    // Step 3: Offer & Requirements
    offer: "",
    offerCurrency: "EUR",
    accommodation: false,
    travel: false,
    equipment: "",
    additionalInfo: "",

    // Step 4: Contact Information
    organizerName: "",
    organizerEmail: "",
    organizerPhone: "",
    companyName: "",
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, date }))
  }

  const nextStep = () => {
    window.scrollTo(0, 0)
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    window.scrollTo(0, 0)
    setStep((prev) => prev - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, this would call an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSuccess(true)
      window.scrollTo(0, 0)
    } catch (error) {
      console.error("Error submitting booking request:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Artist data (in a real app, this would come from an API)
  const artist = {
    name: "DJ Niotech",
    image: "/placeholder.svg?height=300&width=300",
    location: "Berlin, Germany",
    genre: "Techno",
    fee: "€1,000 - €1,500",
    setDuration: "1.5 - 2 hours",
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navigation />

      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4 md:px-6">
          {success ? (
            <Card className="max-w-3xl mx-auto text-center p-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold font-heading mb-2">Booking Request Sent!</h2>
              <p className="text-muted-foreground mb-6">
                Your booking request for {artist.name} has been submitted successfully. The artist will review your
                request and respond shortly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" onClick={() => router.push(`/book/${slug}`)}>
                  Return to Artist Profile
                </Button>
                <Button onClick={() => router.push("/dashboard")}>View Your Requests</Button>
              </div>
            </Card>
          ) : (
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Main Form */}
                <div className="flex-1">
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold font-heading">Book {artist.name}</h1>
                    <p className="text-muted-foreground mt-2">Fill out the form below to request a booking</p>
                  </div>

                  {/* Progress Steps */}
                  <div className="mb-8">
                    <div className="flex justify-between">
                      {["Event Details", "Performance", "Offer", "Contact"].map((label, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center"
                          onClick={() => step > index + 1 && setStep(index + 1)}
                        >
                          <div
                            className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center mb-2 cursor-pointer",
                              step > index
                                ? "bg-primary text-white"
                                : step === index + 1
                                  ? "bg-primary/10 text-primary border-2 border-primary"
                                  : "bg-gray-200 text-gray-500",
                            )}
                          >
                            {step > index ? <CheckCircle className="h-5 w-5" /> : <span>{index + 1}</span>}
                          </div>
                          <span
                            className={cn(
                              "text-xs hidden md:block",
                              step === index + 1 ? "text-primary font-medium" : "text-gray-500",
                            )}
                          >
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="relative mt-2">
                      <div className="absolute top-0 left-5 right-5 h-1 bg-gray-200"></div>
                      <div
                        className="absolute top-0 left-5 h-1 bg-primary transition-all duration-300"
                        style={{ width: `${(step - 1) * 33.33}%` }}
                      ></div>
                    </div>
                  </div>

                  <Card>
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit}>
                        {/* Step 1: Event Details */}
                        {step === 1 && (
                          <div className="space-y-6">
                            <h2 className="text-xl font-bold font-heading">Event Details</h2>

                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="eventName">Event Name*</Label>
                                <Input
                                  id="eventName"
                                  name="eventName"
                                  value={formData.eventName}
                                  onChange={handleChange}
                                  placeholder="e.g., Techno Night, Summer Festival"
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="eventType">Event Type*</Label>
                                <Select
                                  value={formData.eventType}
                                  onValueChange={(value) => handleSelectChange("eventType", value)}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select event type" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="club">Club Night</SelectItem>
                                    <SelectItem value="festival">Festival</SelectItem>
                                    <SelectItem value="private">Private Event</SelectItem>
                                    <SelectItem value="corporate">Corporate Event</SelectItem>
                                    <SelectItem value="concert">Concert</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="venueName">Venue Name*</Label>
                                <Input
                                  id="venueName"
                                  name="venueName"
                                  value={formData.venueName}
                                  onChange={handleChange}
                                  placeholder="e.g., Club XYZ, Festival Grounds"
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="venueAddress">Venue Address*</Label>
                                <Input
                                  id="venueAddress"
                                  name="venueAddress"
                                  value={formData.venueAddress}
                                  onChange={handleChange}
                                  placeholder="Street address"
                                  required
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="city">City*</Label>
                                  <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="country">Country*</Label>
                                  <Input
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="capacity">Venue Capacity*</Label>
                                <Input
                                  id="capacity"
                                  name="capacity"
                                  type="number"
                                  value={formData.capacity}
                                  onChange={handleChange}
                                  placeholder="e.g., 500"
                                  required
                                />
                              </div>
                            </div>

                            <div className="flex justify-end">
                              <Button type="button" onClick={nextStep}>
                                Next Step
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}

                        {/* Step 2: Performance Details */}
                        {step === 2 && (
                          <div className="space-y-6">
                            <h2 className="text-xl font-bold font-heading">Performance Details</h2>

                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="date">Event Date*</Label>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Button
                                      variant="outline"
                                      className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !formData.date && "text-muted-foreground",
                                      )}
                                    >
                                      <CalendarIcon className="mr-2 h-4 w-4" />
                                      {formData.date ? format(formData.date, "PPP") : "Select date"}
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0">
                                    <CalendarComponent
                                      mode="single"
                                      selected={formData.date}
                                      onSelect={handleDateChange}
                                      initialFocus
                                      disabled={(date) => date < addDays(new Date(), 1)}
                                    />
                                  </PopoverContent>
                                </Popover>
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="startTime">Start Time*</Label>
                                  <Input
                                    id="startTime"
                                    name="startTime"
                                    type="time"
                                    value={formData.startTime}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="endTime">End Time*</Label>
                                  <Input
                                    id="endTime"
                                    name="endTime"
                                    type="time"
                                    value={formData.endTime}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="setDuration">Set Duration*</Label>
                                <Select
                                  value={formData.setDuration}
                                  onValueChange={(value) => handleSelectChange("setDuration", value)}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select set duration" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1h">1 hour</SelectItem>
                                    <SelectItem value="1.5h">1.5 hours</SelectItem>
                                    <SelectItem value="2h">2 hours</SelectItem>
                                    <SelectItem value="2.5h">2.5 hours</SelectItem>
                                    <SelectItem value="3h">3 hours</SelectItem>
                                    <SelectItem value="3+h">3+ hours</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="ticketPrice">Average Ticket Price*</Label>
                                <div className="relative">
                                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <span className="text-muted-foreground">€</span>
                                  </div>
                                  <Input
                                    id="ticketPrice"
                                    name="ticketPrice"
                                    value={formData.ticketPrice}
                                    onChange={handleChange}
                                    className="pl-8"
                                    placeholder="e.g., 15-20"
                                    required
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-between">
                              <Button type="button" variant="outline" onClick={prevStep}>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Previous
                              </Button>
                              <Button type="button" onClick={nextStep}>
                                Next Step
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}

                        {/* Step 3: Offer & Requirements */}
                        {step === 3 && (
                          <div className="space-y-6">
                            <h2 className="text-xl font-bold font-heading">Offer & Requirements</h2>

                            <div className="space-y-4">
                              <div className="grid grid-cols-4 gap-4">
                                <div className="col-span-3 space-y-2">
                                  <Label htmlFor="offer">Your Offer*</Label>
                                  <Input
                                    id="offer"
                                    name="offer"
                                    type="number"
                                    value={formData.offer}
                                    onChange={handleChange}
                                    placeholder="e.g., 1500"
                                    required
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="offerCurrency">Currency</Label>
                                  <Select
                                    value={formData.offerCurrency}
                                    onValueChange={(value) => handleSelectChange("offerCurrency", value)}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Currency" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="EUR">EUR (€)</SelectItem>
                                      <SelectItem value="USD">USD ($)</SelectItem>
                                      <SelectItem value="GBP">GBP (£)</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label>Additional Provisions</Label>
                                <div className="flex items-center space-x-2 pt-2">
                                  <Checkbox
                                    id="accommodation"
                                    checked={formData.accommodation}
                                    onCheckedChange={(checked) =>
                                      handleCheckboxChange("accommodation", checked as boolean)
                                    }
                                  />
                                  <label
                                    htmlFor="accommodation"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Accommodation provided
                                  </label>
                                </div>

                                <div className="flex items-center space-x-2 pt-2">
                                  <Checkbox
                                    id="travel"
                                    checked={formData.travel}
                                    onCheckedChange={(checked) => handleCheckboxChange("travel", checked as boolean)}
                                  />
                                  <label
                                    htmlFor="travel"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Travel expenses covered
                                  </label>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="equipment">Equipment Provided</Label>
                                <Textarea
                                  id="equipment"
                                  name="equipment"
                                  value={formData.equipment}
                                  onChange={handleChange}
                                  placeholder="List any equipment you will provide (e.g., CDJs, mixer, monitors)"
                                  rows={3}
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="additionalInfo">Additional Information</Label>
                                <Textarea
                                  id="additionalInfo"
                                  name="additionalInfo"
                                  value={formData.additionalInfo}
                                  onChange={handleChange}
                                  placeholder="Any other details about your event, requirements, etc."
                                  rows={4}
                                />
                              </div>

                              <div className="space-y-2">
                                <Label>Upload Event Information (Optional)</Label>
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

                            <div className="flex justify-between">
                              <Button type="button" variant="outline" onClick={prevStep}>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Previous
                              </Button>
                              <Button type="button" onClick={nextStep}>
                                Next Step
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}

                        {/* Step 4: Contact Information */}
                        {step === 4 && (
                          <div className="space-y-6">
                            <h2 className="text-xl font-bold font-heading">Contact Information</h2>

                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="organizerName">Your Name*</Label>
                                <Input
                                  id="organizerName"
                                  name="organizerName"
                                  value={formData.organizerName}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="organizerEmail">Email*</Label>
                                <Input
                                  id="organizerEmail"
                                  name="organizerEmail"
                                  type="email"
                                  value={formData.organizerEmail}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="organizerPhone">Phone Number*</Label>
                                <Input
                                  id="organizerPhone"
                                  name="organizerPhone"
                                  value={formData.organizerPhone}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="companyName">Company/Organization Name</Label>
                                <Input
                                  id="companyName"
                                  name="companyName"
                                  value={formData.companyName}
                                  onChange={handleChange}
                                />
                              </div>

                              <div className="flex items-center space-x-2 pt-4">
                                <Checkbox
                                  id="agreeToTerms"
                                  checked={formData.agreeToTerms}
                                  onCheckedChange={(checked) =>
                                    handleCheckboxChange("agreeToTerms", checked as boolean)
                                  }
                                  required
                                />
                                <label
                                  htmlFor="agreeToTerms"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  I agree to the{" "}
                                  <a href="/terms" className="text-primary hover:underline">
                                    terms and conditions
                                  </a>
                                </label>
                              </div>
                            </div>

                            <div className="flex justify-between">
                              <Button type="button" variant="outline" onClick={prevStep}>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Previous
                              </Button>
                              <Button type="submit" disabled={isLoading || !formData.agreeToTerms}>
                                {isLoading ? "Submitting..." : "Submit Booking Request"}
                              </Button>
                            </div>
                          </div>
                        )}
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Artist Info Sidebar */}
                <div className="md:w-80">
                  <div className="sticky top-24">
                    <Card>
                      <CardHeader>
                        <CardTitle>Artist Information</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col items-center mb-4">
                          <div className="h-32 w-32 rounded-full overflow-hidden mb-3">
                            <Image
                              src={artist.image || "/placeholder.svg"}
                              alt={artist.name}
                              width={128}
                              height={128}
                              className="object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold">{artist.name}</h3>
                          <p className="text-muted-foreground">{artist.genre}</p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">{artist.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">Set time: {artist.setDuration}</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">Typical fee: {artist.fee}</span>
                          </div>
                          <div className="flex items-center">
                            <Music className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">Genre: {artist.genre}</span>
                          </div>
                        </div>

                        <div className="mt-6 pt-6 border-t">
                          <h4 className="font-medium mb-2">Booking Tips</h4>
                          <ul className="text-sm space-y-2 text-muted-foreground">
                            <li>• Book at least 4-6 weeks in advance</li>
                            <li>• Provide clear event details</li>
                            <li>• Specify your budget upfront</li>
                            <li>• Include technical requirements</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

