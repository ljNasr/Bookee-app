import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { User, Calendar, MessageSquare, DollarSign } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter font-heading">
                  Smarter Bookings, Seamless Events
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-[600px]">
                  Bookee streamlines the booking process for DJs and event organizers with customized profiles,
                  real-time availability, and secure payments.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button asChild size="lg" className="bg-[#0071bc] text-white hover:bg-[#005a94] border-0">
                    <Link href="/register">Get Started</Link>
                  </Button>
                  <Button asChild size="lg" className="bg-transparent border-2 border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                    <Link href="/how-it-works">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative lg:ml-auto">
                {/* Booking Request Screenshot */}
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl flex items-center justify-center">
                  <div className="relative w-[350px] h-auto">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Xnip2025-03-28_15-59-22.jpg-hk49ob5N5uhpFZZdpglBrpDm1uIBfL.jpeg"
                      alt="Booking Request Example"
                      width={350}
                      height={380}
                      className="rounded-lg shadow-lg"
                      priority
                    />
                    {/* Overlay to ensure all buttons are visible */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-b-lg p-2 flex justify-between">
                      <Button variant="outline" size="sm" className="text-gray-700">
                        Decline
                      </Button>
                      <Button variant="outline" size="sm" className="text-gray-700">
                        Negotiate
                      </Button>
                      <Button size="sm" className="bg-primary text-white">
                        Accept
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">How Bookee Works</h2>
              <p className="text-muted-foreground mt-4 max-w-[700px] mx-auto">
                Our platform connects artists and event organizers through a streamlined booking process
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-blue-50 rounded-full">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading">Create Your Profile</h3>
                <p className="text-muted-foreground mt-2">
                  Artists create customized profiles with media, rates, and a shareable booking link
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-blue-50 rounded-full">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading">Manage Availability</h3>
                <p className="text-muted-foreground mt-2">
                  Sync with Google Calendar to show real-time availability to potential bookers
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-blue-50 rounded-full">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading">Communicate Directly</h3>
                <p className="text-muted-foreground mt-2">
                  Built-in messaging system for quick and efficient communication
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-blue-50 rounded-full">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading">Secure Payments</h3>
                <p className="text-muted-foreground mt-2">
                  Process deposits and payments directly through the platform with flexible schedules
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#424141]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Get Started?</h2>
              <p className="text-muted-foreground max-w-[600px]">
                Join Bookee today and transform how you book or get booked for events
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild size="lg" className="bg-[#0071bc] text-white hover:bg-[#005a94] border-0">
                  <Link href="/register">Sign Up as Artist</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-[#22b5f3] text-[#22b5f3] hover:bg-[#22b5f3] hover:text-white">
                  <Link href="/register?type=organizer">Sign Up as Organizer</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#424141] py-12 md:py-16 bg-[#222222]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="Bookee" width={40} height={40} className="w-10 h-10" />
                <span className="text-xl font-bold font-heading">Bookee</span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                Connecting event organizers with artists through a seamless booking experience.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full">
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
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
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
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
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-sm uppercase tracking-wider font-heading">Platform</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/for-djs" className="text-muted-foreground hover:text-foreground">
                      For DJs
                    </Link>
                  </li>
                  <li>
                    <Link href="/for-venues" className="text-muted-foreground hover:text-foreground">
                      For Venues
                    </Link>
                  </li>
                  <li>
                    <Link href="/for-agencies" className="text-muted-foreground hover:text-foreground">
                      For Agencies
                    </Link>
                  </li>
                  <li>
                    <Link href="/for-organizers" className="text-muted-foreground hover:text-foreground">
                      For Event Organizers
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-sm uppercase tracking-wider font-heading">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/help" className="text-muted-foreground hover:text-foreground">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/success-stories" className="text-muted-foreground hover:text-foreground">
                      Success Stories
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-sm uppercase tracking-wider font-heading">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-foreground">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-sm uppercase tracking-wider font-heading">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/gdpr" className="text-muted-foreground hover:text-foreground">
                      GDPR
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bookee. All rights reserved.
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
              <Link href="/cookies" className="hover:underline">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

