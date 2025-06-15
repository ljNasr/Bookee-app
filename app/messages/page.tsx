"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Paperclip, Send, Calendar } from "lucide-react"
import { BookingRequestModal } from "@/components/booking-request-modal"

export default function Messages() {
  const [activeChat, setActiveChat] = useState("antoine")
  const [message, setMessage] = useState("")

  const contacts = [
    {
      id: "antoine",
      name: "Antoine",
      organization: "Collectif Osmoz",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "We would be very interested in your artist Niotech.",
      time: "2h ago",
      unread: true,
    },
    {
      id: "aleksandar",
      name: "Aleksandar",
      organization: "Overdrive",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thank you for your response. We're looking forward to the event!",
      time: "Yesterday",
      unread: false,
    },
    {
      id: "batuhan",
      name: "Batuhan Ozdemir",
      organization: "Rad Project",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I am very happy. Are you available on 28.12.2024?",
      time: "2d ago",
      unread: false,
    },
  ]

  const messages = {
    antoine: [
      {
        sender: "them",
        content: "Hope you are well. My name is Antoine, from Collectif Osmoz in Rennes (France).",
        time: "10:30 AM",
      },
      {
        sender: "them",
        content:
          "I'm contacting you to discuss a potential booking for our upcoming event. We would be very interested in your artist Niotech.",
        time: "10:31 AM",
      },
      {
        sender: "them",
        content:
          "Here are the infos about the gig:\nDate: Friday 07th March\nCity: Rennes - France\nClub: L'Espace Club\nMaximum capacity: 1000\nDuration of set: 1h30",
        time: "10:32 AM",
      },
      {
        sender: "them",
        content:
          "Can you please let me know if this artist is available on this date and what would be the conditions?",
        time: "10:33 AM",
      },
      {
        sender: "me",
        content:
          "Hi Antoine, thanks for reaching out! I'll check Niotech's availability for March 7th and get back to you shortly with the conditions.",
        time: "11:15 AM",
      },
      {
        sender: "me",
        content:
          "Good news! Niotech is available on March 7th. The fee would be €1200 plus travel and accommodation. Would that work for your budget?",
        time: "12:45 PM",
      },
      {
        sender: "them",
        content:
          "That sounds good! We can cover the fee and travel expenses. For accommodation, we have partnerships with local hotels. Would that be acceptable?",
        time: "1:20 PM",
      },
    ],
    aleksandar: [
      {
        sender: "them",
        content:
          "Thank you Nico, My name is Aleksandar, I go by my stage name and nickname Amon - you can call me like this. In my crew there is also Novak, stage name Berlaced.",
        time: "Yesterday",
      },
      {
        sender: "them",
        content:
          "We are young as an organization but we had a big event this year with MZPERX and he was very happy with working with us.",
        time: "Yesterday",
      },
      {
        sender: "me",
        content:
          "Hi Aleksandar, thanks for the information! It's great to hear about your successful event with MZPERX. I'd be happy to discuss the potential booking for Niotech at your venue.",
        time: "Yesterday",
      },
      {
        sender: "them",
        content: "Great! We're looking at October 18th or 25th. Which date would work better for Niotech?",
        time: "Yesterday",
      },
      {
        sender: "me",
        content:
          "After checking the calendar, October 18th would work best for Niotech. Let's proceed with that date if it works for you.",
        time: "Yesterday",
      },
      {
        sender: "them",
        content:
          "Perfect! October 18th it is. We'll send over the formal booking request with all the details through the platform.",
        time: "Yesterday",
      },
    ],
    batuhan: [
      {
        sender: "them",
        content:
          "DJ REQUESTED: niotech\nDAY & DATE: 28-12-2024\nCITY & COUNTRY: istanbul turkiye\nEVENT NAME: Rad Project\nVENUE NAME: venue74\nVENUE ADDRESS: bakirkoy istanbul",
        time: "2 days ago",
      },
      {
        sender: "them",
        content:
          "PROMOTER NAME: Batuhan Ozdemir\nPROMOTER MOBILE: +90 535 459 71 53\nVENUE INSTAGRAM PAGE: sahne74bakirkoy\nPROMOTERS INSTAGRAM: @radprojectt @batuhanozdemr.21",
        time: "2 days ago",
      },
      {
        sender: "them",
        content: "NUMBER OF STAGES: 1\nSTAGE CAPACITY: 1700\nTICKET PRICE: 15$\nOFFER/DEAL: 1500€+++",
        time: "2 days ago",
      },
      {
        sender: "them",
        content:
          "I am very happy. Are you available on 28.12.2024? We can agree on 1500€. If you wish, we can negotiate if you send us the price of the job.",
        time: "2 days ago",
      },
      {
        sender: "me",
        content:
          "Hi Batuhan, thank you for your interest in booking Niotech for your event. December 28th, 2024 is currently available. The offer of 1500€ sounds good as a starting point.",
        time: "2 days ago",
      },
      {
        sender: "me",
        content:
          "In addition to the fee, we would need flights from Berlin and hotel accommodation for one night. Could you confirm if these are included in your offer?",
        time: "2 days ago",
      },
      {
        sender: "them",
        content:
          "Yes, we can cover the flights and accommodation. We'll book a 4-star hotel near the venue. Would you like us to send a formal contract?",
        time: "2 days ago",
      },
    ],
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // In a real app, this would send the message to the backend
      setMessage("")
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 pt-16">
        <div className="container h-[calc(100vh-4rem)] flex flex-col">
          <div className="py-4">
            <h1 className="text-2xl font-bold font-heading">Messages</h1>
            <p className="text-muted-foreground">Communicate with event organizers and artists</p>
          </div>

          <div className="flex flex-1 overflow-hidden rounded-lg border">
            <div className="w-full md:w-80 border-r overflow-y-auto">
              <div className="p-4 border-b">
                <Input placeholder="Search conversations..." />
              </div>

              <Tabs defaultValue="all">
                <div className="px-4 pt-2">
                  <TabsList className="w-full">
                    <TabsTrigger value="all" className="flex-1">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="unread" className="flex-1">
                      Unread
                    </TabsTrigger>
                    <TabsTrigger value="bookings" className="flex-1">
                      Bookings
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="m-0">
                  <div className="divide-y">
                    {contacts.map((contact) => (
                      <div
                        key={contact.id}
                        className={`p-4 cursor-pointer hover:bg-muted transition-colors ${
                          activeChat === contact.id ? "bg-muted" : ""
                        }`}
                        onClick={() => setActiveChat(contact.id)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <div className="h-10 w-10 rounded-full overflow-hidden">
                              <Image
                                src={contact.avatar || "/placeholder.svg"}
                                alt={contact.name}
                                width={40}
                                height={40}
                                className="object-cover"
                              />
                            </div>
                            {contact.unread && (
                              <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-primary" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium truncate">{contact.name}</h3>
                              <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                                {contact.time}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">{contact.organization}</p>
                            <p className="text-sm truncate mt-1">{contact.lastMessage}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="unread" className="m-0">
                  <div className="divide-y">
                    {contacts
                      .filter((contact) => contact.unread)
                      .map((contact) => (
                        <div
                          key={contact.id}
                          className={`p-4 cursor-pointer hover:bg-muted transition-colors ${
                            activeChat === contact.id ? "bg-muted" : ""
                          }`}
                          onClick={() => setActiveChat(contact.id)}
                        >
                          <div className="flex items-start gap-3">
                            <div className="relative">
                              <div className="h-10 w-10 rounded-full overflow-hidden">
                                <Image
                                  src={contact.avatar || "/placeholder.svg"}
                                  alt={contact.name}
                                  width={40}
                                  height={40}
                                  className="object-cover"
                                />
                              </div>
                              <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start">
                                <h3 className="font-medium truncate">{contact.name}</h3>
                                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                                  {contact.time}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground">{contact.organization}</p>
                              <p className="text-sm truncate mt-1">{contact.lastMessage}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="bookings" className="m-0">
                  <div className="p-8 text-center text-muted-foreground">
                    <p>Booking-related messages will appear here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="hidden md:flex flex-col flex-1">
              {activeChat && (
                <>
                  <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src={contacts.find((c) => c.id === activeChat)?.avatar || ""}
                          alt={contacts.find((c) => c.id === activeChat)?.name || ""}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{contacts.find((c) => c.id === activeChat)?.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {contacts.find((c) => c.id === activeChat)?.organization}
                        </p>
                      </div>
                    </div>
                    <div>
                      <Button variant="outline" size="sm">
                        View Booking
                      </Button>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages[activeChat as keyof typeof messages].map((msg, index) => (
                      <div key={index} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            msg.sender === "me" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <div className="whitespace-pre-line">{msg.content}</div>
                          <div
                            className={`text-xs mt-1 ${
                              msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                            }`}
                          >
                            {msg.time}
                          </div>
                        </div>
                      </div>
                    ))}

                    {activeChat === "antoine" && (
                      <div className="flex justify-start">
                        <Card className="max-w-[80%] p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="font-medium">Booking Request</span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <p className="font-medium">L'Espace Club, Rennes</p>
                            <p className="text-muted-foreground">March 7th, 2024</p>
                          </div>
                          <BookingRequestModal
                            request={{
                              id: "antoine-request",
                              event: "Collectif Osmoz Event",
                              venue: "L'Espace Club",
                              location: "Rennes, France",
                              date: "Friday, March 7th, 2024",
                              time: "22:00 - 23:30",
                              duration: "1h30",
                              capacity: "1000",
                              ticketPrice: "10-15€",
                              offer: "€1200 + travel & accommodation",
                              organizer: {
                                name: "Antoine",
                                company: "Collectif Osmoz",
                                email: "antoine@collectifosmoz.fr",
                                phone: "+33 6 12 34 56 78",
                              },
                            }}
                            onAccept={(id) => console.log("Accepted", id)}
                            onDecline={(id) => console.log("Declined", id)}
                            onNegotiate={(id) => console.log("Negotiating", id)}
                          />
                        </Card>
                      </div>
                    )}
                  </div>

                  <div className="p-4 border-t">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                      <Button type="button" size="icon" variant="ghost" className="shrink-0">
                        <Paperclip className="h-5 w-5" />
                      </Button>
                      <Input
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1"
                      />
                      <Button type="submit" size="icon" className="shrink-0">
                        <Send className="h-5 w-5" />
                      </Button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

