"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, DollarSign, Users, Music, CalendarIcon } from "lucide-react"
// Import the new BookingRequestModal component
import { BookingRequestModal } from "@/components/booking-request-modal"

export default function Dashboard() {
  const [userType, setUserType] = useState<"artist" | "organizer">("artist")

  return (
    <div className="flex flex-col min-h-screen bg-[#222222]">
      <Navigation />

      <main className="flex-1 pt-16">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold font-heading text-white">Dashboard</h1>
              <p className="text-gray-300">
                Welcome back, {userType === "artist" ? "DJ Niotech" : "Event Organizer"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => setUserType("artist")} className="border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                Artist View
              </Button>
              <Button variant="outline" onClick={() => setUserType("organizer")} className="border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                Organizer View
              </Button>
            </div>
          </div>

          {userType === "artist" ? <ArtistDashboard /> : <OrganizerDashboard />}
        </div>
      </main>
    </div>
  )
}

function ArtistDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-[#333333] border-[#22b5f3]/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium font-heading text-white">Upcoming Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">3</div>
            <p className="text-xs text-gray-300">+1 from last month</p>
            <div className="mt-4">
              <Button variant="link" className="p-0 h-auto text-sm text-[#22b5f3] hover:text-[#22b5f3]/80">
                View all bookings
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#333333] border-[#22b5f3]/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium font-heading text-white">Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">€4,550</div>
            <p className="text-xs text-gray-300">+€1,200 from last month</p>
            <div className="mt-4">
              <Button variant="link" className="p-0 h-auto text-sm text-[#22b5f3] hover:text-[#22b5f3]/80">
                View earnings
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#333333] border-[#22b5f3]/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium font-heading text-white">Profile Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">245</div>
            <p className="text-xs text-gray-300">+32% from last month</p>
            <div className="mt-4">
              <Button variant="link" className="p-0 h-auto text-sm text-[#22b5f3] hover:text-[#22b5f3]/80">
                View analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-[#333333] border-[#22b5f3]/20">
          <CardHeader>
            <CardTitle className="font-heading text-white">Upcoming Events</CardTitle>
            <CardDescription className="text-gray-300">Your next scheduled performances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 rounded-lg bg-[#222222] border border-[#22b5f3]/20">
                <div className="h-12 w-12 rounded-md bg-[#22b5f3]/20 text-[#22b5f3] flex items-center justify-center">
                  <CalendarIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-white">Rad Project</h3>
                      <p className="text-sm text-gray-300">venue74, Istanbul</p>
                    </div>
                    <div className="text-sm font-medium text-white">Dec 28, 2024</div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center text-xs text-gray-300">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Set time: 2h</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-300">
                      <DollarSign className="h-3 w-3 mr-1" />
                      <span>€1,500</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-300">
                      <Users className="h-3 w-3 mr-1" />
                      <span>Capacity: 1700</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-lg bg-[#222222] border border-[#22b5f3]/20">
                <div className="h-12 w-12 rounded-md bg-[#22b5f3]/20 text-[#22b5f3] flex items-center justify-center">
                  <CalendarIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-white">Overdrive</h3>
                      <p className="text-sm text-gray-300">Cube Club, Belgrade</p>
                    </div>
                    <div className="text-sm font-medium text-white">Oct 18, 2024</div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center text-xs text-gray-300">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Set time: 1.5h</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-300">
                      <DollarSign className="h-3 w-3 mr-1" />
                      <span>€1,200</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-300">
                      <Users className="h-3 w-3 mr-1" />
                      <span>Capacity: 400</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-lg bg-[#222222] border border-[#22b5f3]/20">
                <div className="h-12 w-12 rounded-md bg-[#22b5f3]/20 text-[#22b5f3] flex items-center justify-center">
                  <CalendarIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-white">L'Espace Club</h3>
                      <p className="text-sm text-gray-300">Rennes, France</p>
                    </div>
                    <div className="text-sm font-medium text-white">Mar 7, 2024</div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center text-xs text-gray-300">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Set time: 1.5h</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-300">
                      <DollarSign className="h-3 w-3 mr-1" />
                      <span>€1,200</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-300">
                      <Users className="h-3 w-3 mr-1" />
                      <span>Capacity: 1000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <Button variant="outline" asChild className="border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                <Link href="/calendar">View Full Calendar</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#333333] border-[#22b5f3]/20">
          <CardHeader>
            <CardTitle className="font-heading text-white">Recent Booking Requests</CardTitle>
            <CardDescription className="text-gray-300">New requests requiring your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 rounded-lg bg-[#222222] border border-[#22b5f3]/20">
                <div className="h-12 w-12 rounded-md bg-[#22b5f3]/20 text-[#22b5f3] flex items-center justify-center">
                  <Music className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="font-bold font-heading text-white">Rad Project</h3>
                      <p className="text-sm text-gray-300">venue74, Istanbul</p>
                    </div>
                    <div className="text-sm font-medium text-white">Dec 28, 2024</div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center text-xs text-gray-300">
                      <DollarSign className="h-3 w-3 mr-1" />
                      <span>Offer: €1,500</span>
                    </div>
                  </div>
                  <BookingRequestModal
                    request={{
                      id: "rad-project",
                      event: "Rad Project",
                      venue: "venue74",
                      location: "Istanbul, Turkey",
                      date: "December 28, 2024",
                      time: "22:00 - 00:00",
                      duration: "2h",
                      capacity: "1700",
                      ticketPrice: "15€",
                      offer: "€1,500",
                      organizer: {
                        name: "Batuhan Ozdemir",
                        company: "Rad Project",
                        email: "batuhan@radproject.com",
                        phone: "+90 535 459 71 53",
                      },
                    }}
                    onAccept={(id) => console.log("Accepted", id)}
                    onDecline={(id) => console.log("Declined", id)}
                    onNegotiate={(id) => console.log("Negotiating", id)}
                  />
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-lg bg-[#222222] border border-[#22b5f3]/20">
                <div className="h-12 w-12 rounded-md bg-[#22b5f3]/20 text-[#22b5f3] flex items-center justify-center">
                  <Music className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="font-bold font-heading text-white">Techno Fusion</h3>
                      <p className="text-sm text-gray-300">Club XYZ, Amsterdam</p>
                    </div>
                    <div className="text-sm font-medium text-white">Nov 15, 2024</div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center text-xs text-gray-300">
                      <DollarSign className="h-3 w-3 mr-1" />
                      <span>Offer: €1,300</span>
                    </div>
                  </div>
                  <BookingRequestModal
                    request={{
                      id: "techno-fusion",
                      event: "Techno Fusion",
                      venue: "Club XYZ",
                      location: "Amsterdam, Netherlands",
                      date: "November 15, 2024",
                      time: "23:00 - 01:00",
                      duration: "2h",
                      capacity: "600",
                      ticketPrice: "12-18€",
                      offer: "€1,300",
                      organizer: {
                        name: "Jan Visser",
                        company: "XYZ Events",
                        email: "jan@xyzevents.com",
                      },
                    }}
                    onAccept={(id) => console.log("Accepted", id)}
                    onDecline={(id) => console.log("Declined", id)}
                    onNegotiate={(id) => console.log("Negotiating", id)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <Button variant="outline" asChild className="border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                <Link href="/requests">View All Requests</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#333333] border-[#22b5f3]/20">
        <CardHeader>
          <CardTitle className="font-heading text-white">Calendar & Availability</CardTitle>
          <CardDescription className="text-gray-300">Manage your schedule and availability</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-[#222222] h-64 rounded-md flex items-center justify-center border border-[#22b5f3]/20">
            <p className="text-gray-300">Calendar view will be displayed here</p>
          </div>
          <div className="mt-4 flex justify-between">
            <Button variant="outline" asChild className="border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
              <Link href="/calendar">Manage Calendar</Link>
            </Button>
            <Button asChild className="bg-[#22b5f3] hover:bg-[#22b5f3]">
              <Link href="/calendar/sync">Sync with Google Calendar</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function OrganizerDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-[#333333] border-[#22b5f3]/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2</div>
            <p className="text-xs text-gray-300">+1 from last month</p>
            <div className="mt-4">
              <Button variant="link" className="p-0 h-auto text-sm text-[#22b5f3] hover:text-[#22b5f3]/80">
                View all events
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#333333] border-[#22b5f3]/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white">Total Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">€5,700</div>
            <p className="text-xs text-gray-300">Allocated for upcoming events</p>
            <div className="mt-4">
              <Button variant="link" className="p-0 h-auto text-sm text-[#22b5f3] hover:text-[#22b5f3]/80">
                View budget details
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#333333] border-[#22b5f3]/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white">Artist Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">5</div>
            <p className="text-xs text-gray-300">3 pending responses</p>
            <div className="mt-4">
              <Button variant="link" className="p-0 h-auto text-sm text-[#22b5f3] hover:text-[#22b5f3]/80">
                View all requests
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-[#333333] border-[#22b5f3]/20">
          <CardHeader>
            <CardTitle className="text-white">Upcoming Events</CardTitle>
            <CardDescription className="text-gray-300">Your scheduled events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 rounded-lg bg-[#222222] border border-[#22b5f3]/20">
                <div className="h-12 w-12 rounded-md bg-[#22b5f3]/20 text-[#22b5f3] flex items-center justify-center">
                  <CalendarIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-white">Overdrive</h3>
                      <p className="text-sm text-gray-300">Cube Club, Belgrade</p>
                    </div>
                    <div className="text-sm font-medium text-white">Oct 18, 2024</div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center text-xs text-gray-300">
                      <Music className="h-3 w-3 mr-1" />
                      <span>DJ Niotech (Confirmed)</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-300">
                      <Users className="h-3 w-3 mr-1" />
                      <span>Capacity: 400</span>
                    </div>
                  </div>
                  <Button size="sm" variant="link" className="mt-1 h-auto p-0 text-[#22b5f3] hover:text-[#22b5f3]/80">
                    View Details
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-lg bg-[#222222] border border-[#22b5f3]/20">
                <div className="h-12 w-12 rounded-md bg-[#22b5f3]/20 text-[#22b5f3] flex items-center justify-center">
                  <CalendarIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-white">Techno Night</h3>
                      <p className="text-sm text-gray-300">Club XYZ, Amsterdam</p>
                    </div>
                    <div className="text-sm font-medium text-white">Nov 15, 2024</div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center text-xs text-gray-300">
                      <Music className="h-3 w-3 mr-1" />
                      <span>DJ Niotech (Pending)</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-300">
                      <Users className="h-3 w-3 mr-1" />
                      <span>Capacity: 600</span>
                    </div>
                  </div>
                  <Button size="sm" variant="link" className="mt-1 h-auto p-0 text-[#22b5f3] hover:text-[#22b5f3]/80">
                    View Details
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <Button asChild className="bg-[#22b5f3] hover:bg-[#22b5f3]">
                <Link href="/events/create">Create New Event</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#333333] border-[#22b5f3]/20">
          <CardHeader>
            <CardTitle className="text-white">Artist Search</CardTitle>
            <CardDescription className="text-gray-300">Find and book artists for your events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 rounded-lg bg-[#222222] border border-[#22b5f3]/20">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="DJ Niotech"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-white">DJ Niotech</h3>
                      <p className="text-sm text-gray-300">Techno DJ & Producer</p>
                    </div>
                    <div className="text-sm font-medium text-white">Berlin, Germany</div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-[#22b5f3]/20 text-[#22b5f3] rounded-full text-xs">Techno</span>
                    <span className="px-2 py-0.5 bg-[#22b5f3]/20 text-[#22b5f3] rounded-full text-xs">Minimal</span>
                    <span className="px-2 py-0.5 bg-[#22b5f3]/20 text-[#22b5f3] rounded-full text-xs">Electronic</span>
                  </div>
                  <Button size="sm" variant="link" className="mt-1 h-auto p-0 text-[#22b5f3] hover:text-[#22b5f3]/80">
                    View Profile
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-lg bg-[#222222] border border-[#22b5f3]/20">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="DJ Example"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-white">DJ Example</h3>
                      <p className="text-sm text-gray-300">House DJ</p>
                    </div>
                    <div className="text-sm font-medium text-white">London, UK</div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-[#22b5f3]/20 text-[#22b5f3] rounded-full text-xs">House</span>
                    <span className="px-2 py-0.5 bg-[#22b5f3]/20 text-[#22b5f3] rounded-full text-xs">Deep House</span>
                    <span className="px-2 py-0.5 bg-[#22b5f3]/20 text-[#22b5f3] rounded-full text-xs">Progressive</span>
                  </div>
                  <Button size="sm" variant="link" className="mt-1 h-auto p-0 text-[#22b5f3] hover:text-[#22b5f3]/80">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <Button variant="outline" asChild className="border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                <Link href="/artists">Browse All Artists</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

