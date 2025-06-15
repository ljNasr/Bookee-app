"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar, Clock, MapPin, DollarSign, Users, Music, CheckCircle, X } from "lucide-react"

interface BookingRequestProps {
  request: {
    id: string
    event: string
    venue: string
    location: string
    date: string
    time: string
    duration: string
    capacity: string
    ticketPrice: string
    offer: string
    organizer: {
      name: string
      company: string
      email: string
      phone?: string
    }
  }
  onAccept: (id: string) => void
  onDecline: (id: string) => void
  onNegotiate: (id: string) => void
}

export function BookingRequestModal({ request, onAccept, onDecline, onNegotiate }: BookingRequestProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<"pending" | "accepted" | "declined" | "negotiating">("pending")

  const handleAccept = () => {
    onAccept(request.id)
    setStatus("accepted")
    setTimeout(() => setIsOpen(false), 2000)
  }

  const handleDecline = () => {
    onDecline(request.id)
    setStatus("declined")
    setTimeout(() => setIsOpen(false), 2000)
  }

  const handleNegotiate = () => {
    onNegotiate(request.id)
    setStatus("negotiating")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          View Booking Request
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        {status === "pending" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading">Booking Request</DialogTitle>
              <DialogDescription>You've received a booking request for {request.event}</DialogDescription>
            </DialogHeader>

            <div className="grid gap-6 py-4">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Music className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold font-heading">{request.event}</h3>
                  <p className="text-sm text-muted-foreground">
                    {request.venue}, {request.location}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Date</h4>
                    <p className="text-sm text-muted-foreground">{request.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Set Time</h4>
                    <p className="text-sm text-muted-foreground">
                      {request.time} ({request.duration})
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Venue</h4>
                    <p className="text-sm text-muted-foreground">
                      {request.venue}, {request.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Capacity</h4>
                    <p className="text-sm text-muted-foreground">{request.capacity} people</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Ticket Price</h4>
                    <p className="text-sm text-muted-foreground">{request.ticketPrice}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Offer</h4>
                    <p className="text-sm text-muted-foreground font-bold">{request.offer}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Organizer Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">{request.organizer.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Company</p>
                    <p className="font-medium">{request.organizer.company}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{request.organizer.email}</p>
                  </div>
                  {request.organizer.phone && (
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">{request.organizer.phone}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" className="sm:flex-1" onClick={handleDecline}>
                <X className="h-4 w-4 mr-2" />
                Decline
              </Button>
              <Button variant="outline" className="sm:flex-1" onClick={handleNegotiate}>
                Negotiate
              </Button>
              <Button className="sm:flex-1" onClick={handleAccept}>
                <CheckCircle className="h-4 w-4 mr-2" />
                Accept
              </Button>
            </DialogFooter>
          </>
        )}

        {status === "accepted" && (
          <div className="py-12 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2 font-heading">Booking Accepted!</h2>
            <p className="text-muted-foreground mb-6">
              You've accepted the booking request for {request.event}. The organizer will be notified.
            </p>
          </div>
        )}

        {status === "declined" && (
          <div className="py-12 text-center">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <X className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2 font-heading">Booking Declined</h2>
            <p className="text-muted-foreground mb-6">
              You've declined the booking request for {request.event}. The organizer will be notified.
            </p>
          </div>
        )}

        {status === "negotiating" && (
          <div className="py-6">
            <h2 className="text-2xl font-bold mb-4 font-heading">Negotiate Terms</h2>
            <p className="text-muted-foreground mb-6">
              You can now message the organizer to negotiate the terms of this booking.
            </p>
            <Button className="w-full">Open Chat with {request.organizer.name}</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

