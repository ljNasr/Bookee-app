"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Music, Share2, Edit, Instagram, Twitter, Globe } from "lucide-react"

export default function ArtistProfile() {
  const [copied, setCopied] = useState(false)

  const copyBookingLink = () => {
    navigator.clipboard.writeText("https://bookee.app/book/dj-niotech")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#222222]">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Profile Header */}
        <div className="relative">
          <div className="h-48 bg-gradient-to-r from-[#0071bc] to-[#22b5f3]" />
          <div className="container px-4 md:px-6">
            <div className="relative -mt-20 mb-6 flex flex-col items-center sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col items-center sm:flex-row sm:items-center">
                <div className="relative h-32 w-32 rounded-full border-4 border-[#333333] bg-[#333333] overflow-hidden">
                  <Image src="/placeholder.svg?height=128&width=128" alt="DJ Niotech" fill className="object-cover" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                  <h1 className="text-2xl font-bold font-heading text-white">DJ Niotech</h1>
                  <p className="text-gray-300">Techno DJ & Producer</p>
                  <div className="flex items-center justify-center sm:justify-start mt-2 space-x-2">
                    <MapPin className="h-4 w-4 text-gray-300" />
                    <span className="text-sm text-gray-300">Berlin, Germany</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-3">
                <Button onClick={copyBookingLink} className="flex items-center gap-2 bg-[#22b5f3] hover:bg-[#0071bc]">
                  <Share2 className="h-4 w-4" />
                  {copied ? "Copied!" : "Share Booking Link"}
                </Button>
                <Button variant="outline" asChild className="border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                  <Link href="/profile/edit" className="flex items-center gap-2">
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="container px-4 md:px-6 py-6">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-[#333333] border border-[#22b5f3]/20">
              <TabsTrigger value="about" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-[#22b5f3]">About</TabsTrigger>
              <TabsTrigger value="stats" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-[#22b5f3]">Stats</TabsTrigger>
              <TabsTrigger value="media" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-[#22b5f3]">Media</TabsTrigger>
              <TabsTrigger value="calendar" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-[#22b5f3]">Calendar</TabsTrigger>
              <TabsTrigger value="bookings" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-[#22b5f3]">Bookings</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                  <Card className="bg-[#333333] border-[#22b5f3]/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold font-heading text-white">Bio</h3>
                      <p className="text-gray-300">
                        DJ Niotech is a Berlin-based techno DJ and producer known for energetic sets that blend classic
                        techno with modern elements. With over 10 years of experience performing at clubs and festivals
                        across Europe, Niotech has established a reputation for creating unforgettable dance floor
                        experiences.
                      </p>

                      <h3 className="text-xl font-bold font-heading text-white">Music Style</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#22b5f3]/20 text-[#22b5f3] rounded-full text-sm">Techno</span>
                        <span className="px-3 py-1 bg-[#22b5f3]/20 text-[#22b5f3] rounded-full text-sm">Minimal</span>
                        <span className="px-3 py-1 bg-[#22b5f3]/20 text-[#22b5f3] rounded-full text-sm">Progressive</span>
                        <span className="px-3 py-1 bg-[#22b5f3]/20 text-[#22b5f3] rounded-full text-sm">Electronic</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#333333] border-[#22b5f3]/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold font-heading text-white">Past Events</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-md bg-[#22b5f3]/20 flex items-center justify-center">
                            <Music className="h-6 w-6 text-[#22b5f3]" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white">The Nexus Zone</h4>
                            <p className="text-sm text-gray-300">Cube, Belgrade</p>
                            <div className="flex items-center mt-1 text-sm text-gray-300">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>December 20, 2024</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-md bg-[#22b5f3]/20 flex items-center justify-center">
                            <Music className="h-6 w-6 text-[#22b5f3]" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white">Overdrive</h4>
                            <p className="text-sm text-gray-300">Cube Club, Belgrade</p>
                            <div className="flex items-center mt-1 text-sm text-gray-300">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>October 25, 2024</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-md bg-[#22b5f3]/20 flex items-center justify-center">
                            <Music className="h-6 w-6 text-[#22b5f3]" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white">L'Espace Club</h4>
                            <p className="text-sm text-gray-300">Rennes, France</p>
                            <div className="flex items-center mt-1 text-sm text-gray-300">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>March 7, 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="bg-[#333333] border-[#22b5f3]/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold font-heading text-white">Booking Information</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-300">Set Duration</h4>
                          <p className="flex items-center mt-1 text-white">
                            <Clock className="h-4 w-4 mr-2 text-[#22b5f3]" />
                            1.5 - 2 hours
                          </p>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-300">Typical Fee Range</h4>
                          <p className="flex items-center mt-1 text-white">
                            <span className="mr-2 text-[#22b5f3] font-bold">€</span>
                            1000 - 1500
                          </p>
                        </div>

                        <Button className="w-full mt-2 bg-[#22b5f3] hover:bg-[#0071bc]" asChild>
                          <Link href="/book/dj-niotech/request">Request Booking</Link>
                        </Button>
                      </div>

                      <div className="mt-6 pt-6 border-t border-[#22b5f3]/20">
                        <h4 className="font-bold font-heading mb-3 text-white">Connect</h4>
                        <div className="flex space-x-3">
                          <Button variant="outline" size="icon" className="rounded-full border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                            <Instagram className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                            <Twitter className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                            <Globe className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="stats" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                  <Card className="bg-[#333333] border-[#22b5f3]/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold font-heading mb-4 text-white">Monthly Listeners</h3>
                      <div className="h-64 bg-[#222222] rounded-md p-4 border border-[#22b5f3]/20">
                        <div className="h-full w-full bg-gradient-to-r from-[#22b5f3]/10 to-[#0071bc]/10 rounded-md flex items-center justify-center relative overflow-hidden">
                          {/* Placeholder for chart - in a real app, this would be a proper chart component */}
                          <div className="absolute inset-0">
                            <svg viewBox="0 0 400 150" className="w-full h-full">
                              <path
                                d="M0,150 L20,145 L40,140 L60,138 L80,135 L100,120 L120,100 L140,80 L160,70 L180,65 L200,60 L220,40 L240,35 L260,40 L280,45 L300,30 L320,25 L340,20 L360,15 L380,10 L400,5"
                                fill="none"
                                stroke="#22b5f3"
                                strokeWidth="3"
                              />
                              <path
                                d="M0,150 L20,145 L40,140 L60,138 L80,135 L100,120 L120,100 L140,80 L160,70 L180,65 L200,60 L220,40 L240,35 L260,40 L280,45 L300,30 L320,25 L340,20 L360,15 L380,10 L400,5"
                                fill="url(#gradient)"
                                fillOpacity="0.2"
                              />
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#22b5f3" stopOpacity="0.8" />
                                  <stop offset="100%" stopColor="#22b5f3" stopOpacity="0.1" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="absolute top-4 left-4 z-10">
                            <div className="text-4xl font-bold text-white">247.8K</div>
                            <div className="text-sm text-gray-300">Monthly listeners across platforms</div>
                            <div className="flex items-center mt-1 text-sm text-green-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-4 h-4 mr-1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>+12.4% from last month</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="bg-[#222222] p-4 rounded-lg border border-[#22b5f3]/20">
                          <div className="text-sm text-gray-300">Spotify</div>
                          <div className="text-2xl font-bold text-white">142.5K</div>
                          <div className="text-xs text-green-400">+8.3%</div>
                        </div>
                        <div className="bg-[#222222] p-4 rounded-lg border border-[#22b5f3]/20">
                          <div className="text-sm text-gray-300">SoundCloud</div>
                          <div className="text-2xl font-bold text-white">78.2K</div>
                          <div className="text-xs text-green-400">+15.7%</div>
                        </div>
                        <div className="bg-[#222222] p-4 rounded-lg border border-[#22b5f3]/20">
                          <div className="text-sm text-gray-300">YouTube</div>
                          <div className="text-2xl font-bold text-white">27.1K</div>
                          <div className="text-xs text-green-400">+5.2%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#333333] border-[#22b5f3]/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold font-heading mb-4 text-white">Performance History</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="text-gray-300">Total Events Played</div>
                          <div className="font-bold text-xl text-white">187</div>
                        </div>
                        <div className="h-2 bg-[#222222] rounded-full">
                          <div className="h-2 bg-[#22b5f3] rounded-full" style={{ width: "75%" }}></div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="text-gray-300">Countries Performed In</div>
                          <div className="font-bold text-xl text-white">14</div>
                        </div>
                        <div className="h-2 bg-[#222222] rounded-full">
                          <div className="h-2 bg-[#22b5f3] rounded-full" style={{ width: "56%" }}></div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="text-gray-300">Festival Appearances</div>
                          <div className="font-bold text-xl text-white">23</div>
                        </div>
                        <div className="h-2 bg-[#222222] rounded-full">
                          <div className="h-2 bg-[#22b5f3] rounded-full" style={{ width: "46%" }}></div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="text-gray-300">Club Residencies</div>
                          <div className="font-bold text-xl text-white">3</div>
                        </div>
                        <div className="h-2 bg-[#222222] rounded-full">
                          <div className="h-2 bg-[#22b5f3] rounded-full" style={{ width: "30%" }}></div>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-[#22b5f3]/20">
                        <h4 className="font-bold mb-3 text-white">Performance Breakdown</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-[#22b5f3]"></div>
                            <div className="text-sm text-gray-300">Club Events (65%)</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-[#0071bc]"></div>
                            <div className="text-sm text-gray-300">Festivals (20%)</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                            <div className="text-sm text-gray-300">Private Events (10%)</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="text-sm text-gray-300">Radio Shows (5%)</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <div className="space-y-6">
                    <Card className="bg-[#333333] border-[#22b5f3]/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold font-heading mb-4 text-white">Social Media</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Instagram className="h-5 w-5 text-[#22b5f3] mr-2" />
                              <span className="text-gray-300">Instagram</span>
                            </div>
                            <div className="font-bold text-white">24.7K</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Twitter className="h-5 w-5 text-[#22b5f3] mr-2" />
                              <span className="text-gray-300">Twitter</span>
                            </div>
                            <div className="font-bold text-white">18.3K</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5 text-[#22b5f3] mr-2"
                              >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                              </svg>
                              <span className="text-gray-300">Facebook</span>
                            </div>
                            <div className="font-bold text-white">12.5K</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5 text-[#22b5f3] mr-2"
                              >
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                              </svg>
                              <span className="text-gray-300">YouTube</span>
                            </div>
                            <div className="font-bold text-white">8.9K</div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-[#22b5f3]/20">
                          <div className="text-sm text-gray-300">Total Social Reach</div>
                          <div className="text-2xl font-bold text-white">64.4K</div>
                          <div className="text-xs text-green-400">+7.2% growth in last 30 days</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#333333] border-[#22b5f3]/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold font-heading mb-4 text-white">Career Highlights</h3>
                        <div className="space-y-3">
                          <div className="bg-[#222222] p-3 rounded-md border border-[#22b5f3]/20">
                            <div className="font-medium text-white">Boiler Room Berlin</div>
                            <div className="text-sm text-gray-300">Featured Artist, 2023</div>
                          </div>
                          <div className="bg-[#222222] p-3 rounded-md border border-[#22b5f3]/20">
                            <div className="font-medium text-white">Beatport Top 10</div>
                            <div className="text-sm text-gray-300">"Neon Dreams" EP, 2022</div>
                          </div>
                          <div className="bg-[#222222] p-3 rounded-md border border-[#22b5f3]/20">
                            <div className="font-medium text-white">Tresor Berlin Residency</div>
                            <div className="text-sm text-gray-300">Quarterly, 2021-Present</div>
                          </div>
                          <div className="bg-[#222222] p-3 rounded-md border border-[#22b5f3]/20">
                            <div className="font-medium text-white">Mixmag Feature</div>
                            <div className="text-sm text-gray-300">"Artists to Watch", 2021</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#333333] border-[#22b5f3]/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold font-heading mb-4 text-white">Audience Demographics</h3>
                        <div className="space-y-6">
                          <div>
                            <div className="flex justify-between mb-3">
                              <span className="text-sm font-medium text-gray-300">Age Groups</span>
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                              <div className="flex flex-col items-center">
                                <div className="h-20 w-full bg-[#222222] rounded-md relative border border-[#22b5f3]/20 mb-2">
                                  <div
                                    className="absolute bottom-0 left-0 right-0 bg-[#22b5f3] rounded-b-md"
                                    style={{ height: "20%" }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-300 text-center">18-24</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="h-20 w-full bg-[#222222] rounded-md relative border border-[#22b5f3]/20 mb-2">
                                  <div
                                    className="absolute bottom-0 left-0 right-0 bg-[#22b5f3] rounded-b-md"
                                    style={{ height: "65%" }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-300 text-center">25-34</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="h-20 w-full bg-[#222222] rounded-md relative border border-[#22b5f3]/20 mb-2">
                                  <div
                                    className="absolute bottom-0 left-0 right-0 bg-[#22b5f3] rounded-b-md"
                                    style={{ height: "45%" }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-300 text-center">35-44</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="h-20 w-full bg-[#222222] rounded-md relative border border-[#22b5f3]/20 mb-2">
                                  <div
                                    className="absolute bottom-0 left-0 right-0 bg-[#22b5f3] rounded-b-md"
                                    style={{ height: "15%" }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-300 text-center">45-54</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="h-20 w-full bg-[#222222] rounded-md relative border border-[#22b5f3]/20 mb-2">
                                  <div
                                    className="absolute bottom-0 left-0 right-0 bg-[#22b5f3] rounded-b-md"
                                    style={{ height: "5%" }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-300 text-center">55+</span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-[#22b5f3]/20">
                            <div className="text-sm font-medium text-gray-300 mb-3">Top Listener Locations</div>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-300 min-w-[80px]">Germany</span>
                                <div className="flex-1 mx-3 bg-[#222222] rounded-full h-2">
                                  <div className="bg-[#22b5f3] h-2 rounded-full" style={{ width: "75%" }}></div>
                                </div>
                                <span className="text-sm text-gray-300 min-w-[30px] text-right">35%</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-300 min-w-[80px]">UK</span>
                                <div className="flex-1 mx-3 bg-[#222222] rounded-full h-2">
                                  <div className="bg-[#22b5f3] h-2 rounded-full" style={{ width: "60%" }}></div>
                                </div>
                                <span className="text-sm text-gray-300 min-w-[30px] text-right">25%</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-300 min-w-[80px]">USA</span>
                                <div className="flex-1 mx-3 bg-[#222222] rounded-full h-2">
                                  <div className="bg-[#22b5f3] h-2 rounded-full" style={{ width: "40%" }}></div>
                                </div>
                                <span className="text-sm text-gray-300 min-w-[30px] text-right">15%</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-300 min-w-[80px]">Netherlands</span>
                                <div className="flex-1 mx-3 bg-[#222222] rounded-full h-2">
                                  <div className="bg-[#22b5f3] h-2 rounded-full" style={{ width: "25%" }}></div>
                                </div>
                                <span className="text-sm text-gray-300 min-w-[30px] text-right">10%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="media" className="mt-6">
              <Card className="bg-[#333333] border-[#22b5f3]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-heading text-white">Media</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="aspect-video bg-[#222222] rounded-md overflow-hidden relative border border-[#22b5f3]/20">
                        <Image
                          src="/placeholder.svg?height=720&width=1280"
                          alt="DJ Set Video"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button variant="secondary" size="icon" className="rounded-full bg-white/80 hover:bg-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6 text-[#22b5f3]"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Button>
                        </div>
                      </div>
                      <p className="font-medium text-white">Live at Tresor Berlin</p>
                      <p className="text-sm text-gray-300">June 2023</p>
                    </div>

                    <div className="space-y-2">
                      <div className="aspect-video bg-[#222222] rounded-md overflow-hidden relative border border-[#22b5f3]/20">
                        <Image
                          src="/placeholder.svg?height=720&width=1280"
                          alt="DJ Set Video"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button variant="secondary" size="icon" className="rounded-full bg-white/80 hover:bg-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6 text-[#22b5f3]"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Button>
                        </div>
                      </div>
                      <p className="font-medium text-white">Boiler Room Set</p>
                      <p className="text-sm text-gray-300">September 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calendar" className="mt-6">
              <Card className="bg-[#333333] border-[#22b5f3]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-heading text-white">Availability Calendar</h3>
                  <p className="text-gray-300 mb-6">
                    Check DJ Niotech's availability for your event. Green dates are available, red dates are booked.
                  </p>
                  <div className="bg-[#222222] h-96 rounded-md flex items-center justify-center border border-[#22b5f3]/20">
                    <p className="text-gray-300">Calendar view will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bookings" className="mt-6">
              <Card className="bg-[#333333] border-[#22b5f3]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-heading text-white">Upcoming Bookings</h3>
                  <div className="space-y-4">
                    <div className="p-4 border border-[#22b5f3]/20 rounded-lg bg-[#222222]">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h4 className="font-bold text-white">Rad Project</h4>
                          <p className="text-sm text-gray-300">venue74, Istanbul, Turkey</p>
                          <div className="flex items-center mt-1 text-sm text-gray-300">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>December 28, 2024</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                            View Details
                          </Button>
                          <Button size="sm" className="bg-[#22b5f3] hover:bg-[#0071bc]">Message Organizer</Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border border-[#22b5f3]/20 rounded-lg bg-[#222222]">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h4 className="font-bold text-white">Overdrive</h4>
                          <p className="text-sm text-gray-300">Cube Club, Belgrade, Serbia</p>
                          <div className="flex items-center mt-1 text-sm text-gray-300">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>October 18, 2024</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                            View Details
                          </Button>
                          <Button size="sm" className="bg-[#22b5f3] hover:bg-[#0071bc]">Message Organizer</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

