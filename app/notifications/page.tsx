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
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 pt-16">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold font-heading">Notifications</h1>
              <p className="text-muted-foreground">Stay updated with booking requests and messages</p>
            </div>
            <Button variant="outline" onClick={markAllAsRead}>
              Mark All as Read
            </Button>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread ({notifications.filter((n) => !n.read).length})</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border rounded-lg ${!notification.read ? "bg-blue-50 border-blue-100" : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          notification.type === "booking_request" || notification.type === "booking_accepted"
                            ? "bg-primary/10 text-primary"
                            : notification.type === "message"
                              ? "bg-secondary/10 text-secondary"
                              : "bg-green-100 text-green-600"
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
                            <h3 className="font-bold">{notification.title}</h3>
                            <p className="text-muted-foreground">{notification.message}</p>

                            {notification.type === "booking_request" && (
                              <div className="mt-3">
                                <div className="p-3 bg-muted rounded-md text-sm mb-2">
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4 text-muted-foreground" />
                                      <span>{notification.data.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <MapPin className="h-4 w-4 text-muted-foreground" />
                                      <span>{notification.data.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Music className="h-4 w-4 text-muted-foreground" />
                                      <span>{notification.data.event}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                                      <span>{notification.data.offer}</span>
                                    </div>
                                  </div>
                                </div>
                                <BookingRequestModal
                                  request={{
                                    id: notification.id.toString(),
                                    event: notification.data.event,
                                    venue: notification.data.venue || "Venue",
                                    location: notification.data.location,
                                    date: notification.data.date,
                                    time: "22:00 - 00:00",
                                    duration: "2h",
                                    capacity: notification.data.capacity || "1700",
                                    ticketPrice: notification.data.ticketPrice || "15€",
                                    offer: notification.data.offer,
                                    organizer: {
                                      name: notification.data.organizer,
                                      company: notification.data.company || "Event Company",
                                      email: `${notification.data.organizer.toLowerCase().replace(" ", ".")}@example.com`,
                                      phone: notification.data.phone,
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
                            <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.time}</span>
                            <div className="flex">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
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
                  <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium font-heading">No notifications</h3>
                  <p className="text-muted-foreground">You're all caught up! New notifications will appear here.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="unread" className="space-y-4">
              {notifications.filter((n) => !n.read).length > 0 ? (
                notifications
                  .filter((n) => !n.read)
                  .map((notification) => (
                    <div key={notification.id} className="p-4 border rounded-lg bg-blue-50 border-blue-100">
                      <div className="flex items-start gap-4">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center ${
                            notification.type === "booking_request" || notification.type === "booking_accepted"
                              ? "bg-primary/10 text-primary"
                              : notification.type === "message"
                                ? "bg-secondary/10 text-secondary"
                                : "bg-green-100 text-green-600"
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
                              <h3 className="font-bold">{notification.title}</h3>
                              <p className="text-muted-foreground">{notification.message}</p>

                              {notification.type === "booking_request" && (
                                <div className="mt-3">
                                  <div className="p-3 bg-muted rounded-md text-sm mb-2">
                                    <div className="grid grid-cols-2 gap-2">
                                      <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        <span>{notification.data.date}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4 text-muted-foreground" />
                                        <span>{notification.data.location}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Music className="h-4 w-4 text-muted-foreground" />
                                        <span>{notification.data.event}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                                        <span>{notification.data.offer}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <BookingRequestModal
                                    request={{
                                      id: notification.id.toString(),
                                      event: notification.data.event,
                                      venue: notification.data.venue || "Venue",
                                      location: notification.data.location,
                                      date: notification.data.date,
                                      time: "22:00 - 00:00",
                                      duration: "2h",
                                      capacity: notification.data.capacity || "1700",
                                      ticketPrice: notification.data.ticketPrice || "15€",
                                      offer: notification.data.offer,
                                      organizer: {
                                        name: notification.data.organizer,
                                        company: notification.data.company || "Event Company",
                                        email: `${notification.data.organizer.toLowerCase().replace(" ", ".")}@example.com`,
                                        phone: notification.data.phone,
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
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                {notification.time}
                              </span>
                              <div className="flex">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
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
                  <Check className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium font-heading">No unread notifications</h3>
                  <p className="text-muted-foreground">You've read all your notifications!</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="bookings" className="space-y-4">
              {notifications
                .filter((n) => n.type === "booking_request" || n.type === "booking_accepted")
                .map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border rounded-lg ${!notification.read ? "bg-blue-50 border-blue-100" : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold">{notification.title}</h3>
                            <p className="text-muted-foreground">{notification.message}</p>

                            {notification.type === "booking_request" && (
                              <div className="mt-3">
                                <div className="p-3 bg-muted rounded-md text-sm mb-2">
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4 text-muted-foreground" />
                                      <span>{notification.data.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <MapPin className="h-4 w-4 text-muted-foreground" />
                                      <span>{notification.data.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Music className="h-4 w-4 text-muted-foreground" />
                                      <span>{notification.data.event}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                                      <span>{notification.data.offer}</span>
                                    </div>
                                  </div>
                                </div>
                                <BookingRequestModal
                                  request={{
                                    id: notification.id.toString(),
                                    event: notification.data.event,
                                    venue: notification.data.venue || "Venue",
                                    location: notification.data.location,
                                    date: notification.data.date,
                                    time: "22:00 - 00:00",
                                    duration: "2h",
                                    capacity: notification.data.capacity || "1700",
                                    ticketPrice: notification.data.ticketPrice || "15€",
                                    offer: notification.data.offer,
                                    organizer: {
                                      name: notification.data.organizer,
                                      company: notification.data.company || "Event Company",
                                      email: `${notification.data.organizer.toLowerCase().replace(" ", ".")}@example.com`,
                                      phone: notification.data.phone,
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
                            <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.time}</span>
                            <div className="flex">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
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
                    className={`p-4 border rounded-lg ${!notification.read ? "bg-blue-50 border-blue-100" : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                        <Bell className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold">{notification.title}</h3>
                            <p className="text-muted-foreground">{notification.message}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.time}</span>
                            <div className="flex">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Button variant="link" className="p-0 h-auto mt-1">
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
                    className={`p-4 border rounded-lg ${!notification.read ? "bg-blue-50 border-blue-100" : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <DollarSign className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold">{notification.title}</h3>
                            <p className="text-muted-foreground">{notification.message}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.time}</span>
                            <div className="flex">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Button variant="link" className="p-0 h-auto mt-1">
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

