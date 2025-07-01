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
    <div className="flex flex-col min-h-screen bg-[#222222]">
      <Navigation />

      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4 md:px-6">
          {success ? (
            <Card className="max-w-3xl mx-auto text-center p-8 bg-[#333333] border-[#22b5f3]/20">
              <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/20">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold font-heading mb-2 text-white">Booking Request Sent!</h2>
              <p className="text-gray-300 mb-6">
                Your booking request for {artist.name} has been submitted successfully. The artist will review your
                request and respond shortly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" onClick={() => router.push(`/book/${slug}`)} className="border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                  Return to Artist Profile
                </Button>
                <Button onClick={() => router.push("/dashboard")} className="bg-[#22b5f3] hover:bg-[#0071bc]">View Your Requests</Button>
              </div>
            </Card>
          ) : (
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Main Form */}
                <div className="flex-1">
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold font-heading text-white">Book {artist.name}</h1>
                    <p className="text-gray-300 mt-2">Fill out the form below to request a booking</p>
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
                                ? "bg-[#22b5f3] text-white"
                                : step === index + 1
                                  ? "bg-[#22b5f3]/10 text-[#22b5f3] border-2 border-[#22b5f3]"
                                  : "bg-gray-600 text-gray-400",
                            )}
                          >
                            {step > index ? <CheckCircle className="h-5 w-5" /> : <span>{index + 1}</span>}
                          </div>
                          <span
                            className={cn(
                              "text-xs hidden md:block",
                              step === index + 1 ? "text-[#22b5f3] font-medium" : "text-gray-400",
                            )}
                          >
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="relative mt-2">
                      <div className="absolute top-0 left-5 right-5 h-1 bg-gray-600"></div>
                      <div
                        className="absolute top-0 left-5 h-1 bg-[#22b5f3] transition-all duration-300"
                        style={{ width: `${(step - 1) * 33.33}%` }}
                      ></div>
                    </div>
                  </div>

                  <Card className="bg-[#333333] border-[#22b5f3]/20">
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit}>
                        {/* Step 1: Event Details */}
                        {step === 1 && (
                          <div className="space-y-6">
                            <h2 className="text-xl font-bold font-heading text-white">Event Details</h2>

                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="eventName" className="text-gray-300">Event Name*</Label>
                                <Input
                                  id="eventName"
                                  name="eventName"
                                  value={formData.eventName}
                                  onChange={handleChange}
                                  placeholder="e.g., Techno Night, Summer Festival"
                                  required
                                  className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="eventType" className="text-gray-300">Event Type*</Label>
                                <Select
                                  value={formData.eventType}
                                  onValueChange={(value) => handleSelectChange("eventType", value)}
                                >
                                  <SelectTrigger className="bg-[#222222] border-gray-600 text-white focus:border-[#22b5f3]">
                                    <SelectValue placeholder="Select event type" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-[#333333] border-[#22b5f3]/20">
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
                                <Label htmlFor="venueName" className="text-gray-300">Venue Name*</Label>
                                <Input
                                  id="venueName"
                                  name="venueName"
                                  value={formData.venueName}
                                  onChange={handleChange}
                                  placeholder="e.g., Club XYZ, Festival Grounds"
                                  required
                                  className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="venueAddress" className="text-gray-300">Venue Address*</Label>
                                <Input
                                  id="venueAddress"
                                  name="venueAddress"
                                  value={formData.venueAddress}
                                  onChange={handleChange}
                                  placeholder="Street address"
                                  required
                                  className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="city" className="text-gray-300">City*</Label>
                                  <Input id="city" name="city" value={formData.city} onChange={handleChange} required className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]" />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="country" className="text-gray-300">Country*</Label>
                                  <Input
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="capacity" className="text-gray-300">Venue Capacity*</Label>
                                <Input
                                  id="capacity"
                                  name="capacity"
                                  type="number"
                                  value={formData.capacity}
                                  onChange={handleChange}
                                  placeholder="e.g., 500"
                                  required
                                  className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                                />
                              </div>
                            </div>

                            <div className="flex justify-end">
                              <Button type="button" onClick={nextStep} className="bg-[#22b5f3] hover:bg-[#0071bc]">
                                Next Step
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}

                        {/* Step 2: Performance Details */}
                        {step === 2 && (
                          <div className="space-y-6">
                            <h2 className="text-xl font-bold font-heading text-white">Performance Details</h2>

                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="date" className="text-gray-300">Event Date*</Label>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Button
                                      variant="outline"
                                      className={cn(
                                        "w-full justify-start text-left font-normal border-gray-600 text-gray-300 hover:bg-[#22b5f3] hover:text-white",
                                        !formData.date && "text-gray-400",
                                      )}
                                    >
                                      <CalendarIcon className="mr-2 h-4 w-4" />
                                      {formData.date ? format(formData.date, "PPP") : "Select date"}
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0 bg-[#333333] border-[#22b5f3]/20">
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
                                  <Label htmlFor="startTime" className="text-gray-300">Start Time*</Label>
                                  <Input
                                    id="startTime"
                                    name="startTime"
                                    type="time"
                                    value={formData.startTime}
                                    onChange={handleChange}
                                    required
                                    className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="endTime" className="text-gray-300">End Time*</Label>
                                  <Input
                                    id="endTime"
                                    name="endTime"
                                    type="time"
                                    value={formData.endTime}
                                    onChange={handleChange}
                                    required
                                    className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="setDuration" className="text-gray-300">Set Duration*</Label>
                                <Select
                                  value={formData.setDuration}
                                  onValueChange={(value) => handleSelectChange("setDuration", value)}
                                >
                                  <SelectTrigger className="bg-[#222222] border-gray-600 text-white focus:border-[#22b5f3]">
                                    <SelectValue placeholder="Select set duration" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-[#333333] border-[#22b5f3]/20">
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
                                <Label htmlFor="ticketPrice" className="text-gray-300">Average Ticket Price*</Label>
                                <div className="relative">
                                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <span className="text-gray-400">€</span>
                                  </div>
                                  <Input
                                    id="ticketPrice"
                                    name="ticketPrice"
                                    value={formData.ticketPrice}
                                    onChange={handleChange}
                                    className="pl-8 bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                                    placeholder="e.g., 15-20"
                                    required
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-between">
                              <Button type="button" variant="outline" onClick={prevStep} className="border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Previous
                              </Button>
                              <Button type="button" onClick={nextStep} className="bg-[#22b5f3] hover:bg-[#0071bc]">
                                Next Step
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}

                        {/* Step 3: Offer & Requirements */}
                        {step === 3 && (
                          <div className="space-y-6">
                            <h2 className="text-xl font-bold font-heading text-white">Offer & Requirements</h2>

                            <div className="space-y-4">
                              <div className="grid grid-cols-4 gap-4">
                                <div className="col-span-3 space-y-2">
                                  <Label htmlFor="offer" className="text-gray-300">Your Offer*</Label>
                                  <Input
                                    id="offer"
                                    name="offer"
                                    type="number"
                                    value={formData.offer}
                                    onChange={handleChange}
                                    placeholder="e.g., 1500"
                                    required
                                    className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="offerCurrency" className="text-gray-300">Currency</Label>
                                  <Select
                                    value={formData.offerCurrency}
                                    onValueChange={(value) => handleSelectChange("offerCurrency", value)}
                                  >
                                    <SelectTrigger className="bg-[#222222] border-gray-600 text-white focus:border-[#22b5f3]">
                                      <SelectValue placeholder="Currency" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#333333] border-[#22b5f3]/20">
                                      <SelectItem value="EUR">EUR (€)</SelectItem>
                                      <SelectItem value="USD">USD ($)</SelectItem>
                                      <SelectItem value="GBP">GBP (£)</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label className="text-gray-300">Additional Provisions</Label>
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
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
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
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                                  >
                                    Travel expenses covered
                                  </label>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="equipment" className="text-gray-300">Equipment Provided</Label>
                                <Textarea
                                  id="equipment"
                                  name="equipment"
                                  value={formData.equipment}
                                  onChange={handleChange}
                                  placeholder="List any equipment you will provide (e.g., CDJs, mixer, monitors)"
                                  rows={3}
                                  className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="additionalInfo" className="text-gray-300">Additional Information</Label>
                                <Textarea
                                  id="additionalInfo"
                                  name="additionalInfo"
                                  value={formData.additionalInfo}
                                  onChange={handleChange}
                                  placeholder="Any other details about your event, requirements, etc."
                                  rows={4}
                                  className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label className="text-gray-300">Upload Event Information (Optional)</Label>
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

                            <div className="flex justify-between">
                              <Button type="button" variant="outline" onClick={prevStep} className="border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Previous
                              </Button>
                              <Button type="button" onClick={nextStep} className="bg-[#22b5f3] hover:bg-[#0071bc]">
                                Next Step
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}

                        {/* Step 4: Contact Information */}
                        {step === 4 && (
                          <div className="space-y-6">
                            <h2 className="text-xl font-bold font-heading text-white">Contact Information</h2>

                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="organizerName" className="text-gray-300">Your Name*</Label>
                                <Input
                                  id="organizerName"
                                  name="organizerName"
                                  value={formData.organizerName}
                                  onChange={handleChange}
                                  required
                                  className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="organizerEmail" className="text-gray-300">Email*</Label>
                                <Input
                                  id="organizerEmail"
                                  name="organizerEmail"
                                  type="email"
                                  value={formData.organizerEmail}
                                  onChange={handleChange}
                                  required
                                  className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="organizerPhone" className="text-gray-300">Phone Number*</Label>
                                <Input
                                  id="organizerPhone"
                                  name="organizerPhone"
                                  value={formData.organizerPhone}
                                  onChange={handleChange}
                                  required
                                  className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="companyName" className="text-gray-300">Company/Organization Name</Label>
                                <Input
                                  id="companyName"
                                  name="companyName"
                                  value={formData.companyName}
                                  onChange={handleChange}
                                  className="bg-[#222222] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#22b5f3]"
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
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                                >
                                  I agree to the{" "}
                                  <a href="/terms" className="text-[#22b5f3] hover:underline">
                                    terms and conditions
                                  </a>
                                </label>
                              </div>
                            </div>

                            <div className="flex justify-between">
                              <Button type="button" variant="outline" onClick={prevStep} className="border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Previous
                              </Button>
                              <Button type="submit" disabled={isLoading || !formData.agreeToTerms} className="bg-[#22b5f3] hover:bg-[#0071bc]">
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
                    <Card className="bg-[#333333] border-[#22b5f3]/20">
                      <CardHeader>
                        <CardTitle className="text-white">Artist Information</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col items-center mb-4">
                          <div className="h-32 w-32 rounded-full overflow-hidden mb-3 border border-gray-600">
                            <Image
                              src={artist.image || "/placeholder.svg"}
                              alt={artist.name}
                              width={128}
                              height={128}
                              className="object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-white">{artist.name}</h3>
                          <p className="text-gray-300">{artist.genre}</p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-[#22b5f3] mr-2" />
                            <span className="text-sm text-gray-300">{artist.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-[#22b5f3] mr-2" />
                            <span className="text-sm text-gray-300">Set time: {artist.setDuration}</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 text-[#22b5f3] mr-2" />
                            <span className="text-sm text-gray-300">Typical fee: {artist.fee}</span>
                          </div>
                          <div className="flex items-center">
                            <Music className="h-4 w-4 text-[#22b5f3] mr-2" />
                            <span className="text-sm text-gray-300">Genre: {artist.genre}</span>
                          </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-600">
                          <h4 className="font-medium mb-2 text-white">Booking Tips</h4>
                          <ul className="text-sm space-y-2 text-gray-300">
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

