"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Calendar, MapPin, Check, X, DollarSign, Music } from "lucide-react"
// Import the new BookingRequestModal component
import { BookingRequestModal } from "@/components/booking-request-modal"

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "booking_request",
      title: "New Booking Request",
      message: "Batuhan Ozdemir has requested to book you for Rad Project on December 28, 2024",
      time: "2 hours ago",
      read: false,
      data: {
        organizer: "Batuhan Ozdemir",
        event: "Rad Project",
        venue: "venue74",
        location: "Istanbul, Turkey",
        date: "December 28, 2024",
        offer: "1500€",
      },
    },
    {
      id: 2,
      type: "booking_accepted",
      title: "Booking Confirmed",
      message: "Your booking request for Overdrive on October 18, 2024 has been accepted",
      time: "Yesterday",
      read: false,
      data: {
        organizer: "Aleksandar",
        event: "Overdrive",
        venue: "Cube Club",
        location: "Belgrade, Serbia",
        date: "October 18, 2024",
      },
    },
    {
      id: 3,
      type: "message",
      title: "New Message",
      message: "Antoine from Collectif Osmoz sent you a message about your booking",
      time: "2 days ago",
      read: true,
      data: {
        sender: "Antoine",
        organization: "Collectif Osmoz",
      },
    },
    {
      id: 4,
      type: "payment",
      title: "Payment Received",
      message: "You received a deposit payment of €750 for your booking at L'Espace Club",
      time: "1 week ago",
      read: true,
      data: {
        amount: "€750",
        event: "L'Espace Club",
        date: "March 7, 2024",
      },
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#222222]">
      <Navigation />

      <main className="flex-1 pt-16">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold font-heading text-white">Notifications</h1>
              <p className="text-gray-400">Stay updated with booking requests and messages</p>
            </div>
            <Button variant="outline" onClick={markAllAsRead} className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
              Mark All as Read
            </Button>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6 bg-[#222222] border border-blue-500 rounded-lg">
              <TabsTrigger value="all" className="text-gray-400 hover:bg-[#222b36] hover:text-white data-[state=active]:bg-blue-500 data-[state=active]:text-white">All</TabsTrigger>
              <TabsTrigger value="unread" className="text-gray-400 hover:bg-[#222b36] hover:text-white data-[state=active]:bg-blue-500 data-[state=active]:text-white">Unread ({notifications.filter((n) => !n.read).length})</TabsTrigger>
              <TabsTrigger value="bookings" className="text-gray-400 hover:bg-[#222b36] hover:text-white data-[state=active]:bg-blue-500 data-[state=active]:text-white">Bookings</TabsTrigger>
              <TabsTrigger value="messages" className="text-gray-400 hover:bg-[#222b36] hover:text-white data-[state=active]:bg-blue-500 data-[state=active]:text-white">Messages</TabsTrigger>
              <TabsTrigger value="payments" className="text-gray-400 hover:bg-[#222b36] hover:text-white data-[state=active]:bg-blue-500 data-[state=active]:text-white">Payments</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border rounded-lg ${!notification.read ? "bg-[#232b36] border-blue-500" : "bg-[#222222] border-gray-700"}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          notification.type === "booking_request" || notification.type === "booking_accepted"
                            ? "bg-blue-500/20 text-blue-400"
                            : notification.type === "message"
                              ? "bg-blue-400/20 text-blue-300"
                              : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {notification.type === "booking_request" || notification.type === "booking_accepted" ? (
                          <Calendar className="h-5 w-5" />
                        ) : notification.type === "message" ? (
                          <Bell className="h-5 w-5" />
                        ) : (
                          <DollarSign className="h-5 w-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-white">{notification.title}</h3>
                            <p className="text-gray-400">{notification.message}</p>

                            {notification.type === "booking_request" && (
                              <div className="mt-3">
                                <div className="p-3 bg-[#2a2a2a] rounded-md text-sm mb-2 border border-gray-600">
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4 text-gray-500" />
                                      <span className="text-gray-300">{notification.data.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <MapPin className="h-4 w-4 text-gray-500" />
                                      <span className="text-gray-300">{notification.data.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Music className="h-4 w-4 text-gray-500" />
                                      <span className="text-gray-300">{notification.data.event}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <DollarSign className="h-4 w-4 text-gray-500" />
                                      <span className="text-gray-300">{notification.data.offer}</span>
                                    </div>
                                  </div>
                                </div>
                                <BookingRequestModal
                                  request={{
                                    id: notification.id.toString(),
                                    event: notification.data.event || "Event",
                                    venue: notification.data.venue || "Venue",
                                    location: notification.data.location || "Location",
                                    date: notification.data.date || "Date",
                                    time: "22:00 - 00:00",
                                    duration: "2h",
                                    capacity: "1700",
                                    ticketPrice: "15€",
                                    offer: notification.data.offer || "Offer",
                                    organizer: {
                                      name: notification.data.organizer || "Organizer",
                                      company: "Event Company",
                                      email: `${(notification.data.organizer || "organizer").toLowerCase().replace(" ", ".")}@example.com`,
                                      phone: "+1234567890",
                                    },
                                  }}
                                  onAccept={(id) => {
                                    markAsRead(notification.id)
                                    console.log("Accepted", id)
                                  }}
                                  onDecline={(id) => {
                                    markAsRead(notification.id)
                                    console.log("Declined", id)
                                  }}
                                  onNegotiate={(id) => {
                                    markAsRead(notification.id)
                                    console.log("Negotiating", id)
                                  }}
                                />
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                            <div className="flex">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-blue-400 hover:bg-blue-500 hover:text-white"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-gray-400 hover:bg-red-500 hover:text-white"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Bell className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium font-heading text-white">No notifications</h3>
                  <p className="text-gray-400">You're all caught up! New notifications will appear here.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="unread" className="space-y-4">
              {notifications.filter((n) => !n.read).length > 0 ? (
                notifications
                  .filter((n) => !n.read)
                  .map((notification) => (
                    <div key={notification.id} className={`p-4 border rounded-lg ${!notification.read ? "bg-[#232b36] border-blue-500" : "bg-[#222222] border-gray-700"}`}>
                      <div className="flex items-start gap-4">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center ${
                            notification.type === "booking_request" || notification.type === "booking_accepted"
                              ? "bg-blue-500/20 text-blue-400"
                              : notification.type === "message"
                                ? "bg-blue-400/20 text-blue-300"
                                : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {notification.type === "booking_request" || notification.type === "booking_accepted" ? (
                            <Calendar className="h-5 w-5" />
                          ) : notification.type === "message" ? (
                            <Bell className="h-5 w-5" />
                          ) : (
                            <DollarSign className="h-5 w-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-bold text-white">{notification.title}</h3>
                              <p className="text-gray-400">{notification.message}</p>

                              {notification.type === "booking_request" && (
                                <div className="mt-3">
                                  <div className="p-3 bg-[#2a2a2a] rounded-md text-sm mb-2 border border-gray-600">
                                    <div className="grid grid-cols-2 gap-2">
                                      <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4 text-gray-500" />
                                        <span className="text-gray-300">{notification.data.date}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4 text-gray-500" />
                                        <span className="text-gray-300">{notification.data.location}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Music className="h-4 w-4 text-gray-500" />
                                        <span className="text-gray-300">{notification.data.event}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <DollarSign className="h-4 w-4 text-gray-500" />
                                        <span className="text-gray-300">{notification.data.offer}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <BookingRequestModal
                                    request={{
                                      id: notification.id.toString(),
                                      event: notification.data.event || "Event",
                                      venue: notification.data.venue || "Venue",
                                      location: notification.data.location || "Location",
                                      date: notification.data.date || "Date",
                                      time: "22:00 - 00:00",
                                      duration: "2h",
                                      capacity: "1700",
                                      ticketPrice: "15€",
                                      offer: notification.data.offer || "Offer",
                                      organizer: {
                                        name: notification.data.organizer || "Organizer",
                                        company: "Event Company",
                                        email: `${(notification.data.organizer || "organizer").toLowerCase().replace(" ", ".")}@example.com`,
                                        phone: "+1234567890",
                                      },
                                    }}
                                    onAccept={(id) => {
                                      markAsRead(notification.id)
                                      console.log("Accepted", id)
                                    }}
                                    onDecline={(id) => {
                                      markAsRead(notification.id)
                                      console.log("Declined", id)
                                    }}
                                    onNegotiate={(id) => {
                                      markAsRead(notification.id)
                                      console.log("Negotiating", id)
                                    }}
                                  />
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500 whitespace-nowrap">
                                {notification.time}
                              </span>
                              <div className="flex">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-blue-400 hover:bg-blue-500 hover:text-white"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-gray-400 hover:bg-red-500 hover:text-white"
                                  onClick={() => deleteNotification(notification.id)}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
              ) : (
                <div className="text-center py-12">
                  <Check className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium font-heading text-white">No unread notifications</h3>
                  <p className="text-gray-400">You've read all your notifications!</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="bookings" className="space-y-4">
              {notifications
                .filter((n) => n.type === "booking_request" || n.type === "booking_accepted")
                .map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border rounded-lg ${!notification.read ? "bg-[#232b36] border-blue-500" : "bg-[#222222] border-gray-700"}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-white">{notification.title}</h3>
                            <p className="text-gray-400">{notification.message}</p>

                            {notification.type === "booking_request" && (
                              <div className="mt-3">
                                <div className="p-3 bg-[#2a2a2a] rounded-md text-sm mb-2 border border-gray-600">
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4 text-gray-500" />
                                      <span className="text-gray-300">{notification.data.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <MapPin className="h-4 w-4 text-gray-500" />
                                      <span className="text-gray-300">{notification.data.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Music className="h-4 w-4 text-gray-500" />
                                      <span className="text-gray-300">{notification.data.event}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <DollarSign className="h-4 w-4 text-gray-500" />
                                      <span className="text-gray-300">{notification.data.offer}</span>
                                    </div>
                                  </div>
                                </div>
                                <BookingRequestModal
                                  request={{
                                    id: notification.id.toString(),
                                    event: notification.data.event || "Event",
                                    venue: notification.data.venue || "Venue",
                                    location: notification.data.location || "Location",
                                    date: notification.data.date || "Date",
                                    time: "22:00 - 00:00",
                                    duration: "2h",
                                    capacity: "1700",
                                    ticketPrice: "15€",
                                    offer: notification.data.offer || "Offer",
                                    organizer: {
                                      name: notification.data.organizer || "Organizer",
                                      company: "Event Company",
                                      email: `${(notification.data.organizer || "organizer").toLowerCase().replace(" ", ".")}@example.com`,
                                      phone: "+1234567890",
                                    },
                                  }}
                                  onAccept={(id) => {
                                    markAsRead(notification.id)
                                    console.log("Accepted", id)
                                  }}
                                  onDecline={(id) => {
                                    markAsRead(notification.id)
                                    console.log("Declined", id)
                                  }}
                                  onNegotiate={(id) => {
                                    markAsRead(notification.id)
                                    console.log("Negotiating", id)
                                  }}
                                />
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                            <div className="flex">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-blue-400 hover:bg-blue-500 hover:text-white"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-gray-400 hover:bg-red-500 hover:text-white"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="messages" className="space-y-4">
              {notifications
                .filter((n) => n.type === "message")
                .map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border rounded-lg ${!notification.read ? "bg-[#232b36] border-blue-500" : "bg-[#222222] border-gray-700"}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-400/20 text-blue-300 flex items-center justify-center">
                        <Bell className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-white">{notification.title}</h3>
                            <p className="text-gray-400">{notification.message}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                            <div className="flex">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-blue-400 hover:bg-blue-500 hover:text-white"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-gray-400 hover:bg-red-500 hover:text-white"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Button variant="link" className="p-0 h-auto mt-1 text-blue-400 hover:text-blue-300">
                          View Message
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="payments" className="space-y-4">
              {notifications
                .filter((n) => n.type === "payment")
                .map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border rounded-lg ${!notification.read ? "bg-[#232b36] border-blue-500" : "bg-[#222222] border-gray-700"}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                        <DollarSign className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-white">{notification.title}</h3>
                            <p className="text-gray-400">{notification.message}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                            <div className="flex">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-blue-400 hover:bg-blue-500 hover:text-white"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-gray-400 hover:bg-red-500 hover:text-white"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Button variant="link" className="p-0 h-auto mt-1 text-blue-400 hover:text-blue-300">
                          View Payment Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

