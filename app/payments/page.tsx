"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Download, CreditCard, CheckCircle } from "lucide-react"

export default function Payments() {
  const [paymentMethod, setPaymentMethod] = useState("card")

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 pt-16">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold font-heading">Payments</h1>
              <p className="text-muted-foreground">Manage your payments and transactions</p>
            </div>
            <Button>Request Payment</Button>
          </div>

          <Tabs defaultValue="upcoming">
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="history">Payment History</TabsTrigger>
              <TabsTrigger value="settings">Payment Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Upcoming Payments</CardTitle>
                  <CardDescription>Payments scheduled for your upcoming events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-bold">Rad Project</h3>
                          <p className="text-sm text-muted-foreground">venue74, Istanbul, Turkey</p>
                          <div className="flex items-center mt-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>December 28, 2024</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="text-lg font-bold">€1,500</div>
                          <div className="text-sm text-muted-foreground">Deposit: €750 (Due: Nov 28)</div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-end">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">Request Payment</Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-bold">Overdrive</h3>
                          <p className="text-sm text-muted-foreground">Cube Club, Belgrade, Serbia</p>
                          <div className="flex items-center mt-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>October 18, 2024</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="text-lg font-bold">€1,200</div>
                          <div className="text-sm text-muted-foreground">Deposit: €600 (Due: Sep 18)</div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-end">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">Request Payment</Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-bold">L'Espace Club</h3>
                          <p className="text-sm text-muted-foreground">Rennes, France</p>
                          <div className="flex items-center mt-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>March 7, 2024</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="text-lg font-bold">€1,200</div>
                          <div className="text-sm text-green-600 font-medium">Deposit Received: €600</div>
                          <div className="text-sm text-muted-foreground">Balance: €600 (Due: Mar 7)</div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-end">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">Request Balance</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Make a Payment</CardTitle>
                  <CardDescription>Process a payment for an upcoming event</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="event">Select Event</Label>
                      <Select defaultValue="rad-project">
                        <SelectTrigger>
                          <SelectValue placeholder="Select an event" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rad-project">Rad Project - Dec 28, 2024</SelectItem>
                          <SelectItem value="overdrive">Overdrive - Oct 18, 2024</SelectItem>
                          <SelectItem value="espace">L'Espace Club - Mar 7, 2024</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="amount">Payment Amount</Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span className="text-muted-foreground">€</span>
                        </div>
                        <Input id="amount" type="number" placeholder="0.00" className="pl-8" defaultValue="750" />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="payment-type">Payment Type</Label>
                      <Select defaultValue="deposit">
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="deposit">Deposit</SelectItem>
                          <SelectItem value="balance">Balance</SelectItem>
                          <SelectItem value="full">Full Payment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label>Payment Method</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          type="button"
                          variant={paymentMethod === "card" ? "default" : "outline"}
                          className="flex flex-col items-center justify-center h-20"
                          onClick={() => setPaymentMethod("card")}
                        >
                          <CreditCard className="h-6 w-6 mb-1" />
                          <span className="text-xs">Credit Card</span>
                        </Button>
                        <Button
                          type="button"
                          variant={paymentMethod === "bank" ? "default" : "outline"}
                          className="flex flex-col items-center justify-center h-20"
                          onClick={() => setPaymentMethod("bank")}
                        >
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
                            className="h-6 w-6 mb-1"
                          >
                            <rect x="2" y="5" width="20" height="14" rx="2" />
                            <line x1="2" y1="10" x2="22" y2="10" />
                          </svg>
                          <span className="text-xs">Bank Transfer</span>
                        </Button>
                        <Button
                          type="button"
                          variant={paymentMethod === "paypal" ? "default" : "outline"}
                          className="flex flex-col items-center justify-center h-20"
                          onClick={() => setPaymentMethod("paypal")}
                        >
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
                            className="h-6 w-6 mb-1"
                          >
                            <path d="M7 11l5-5 5 5" />
                            <path d="M7 13l5 5 5-5" />
                          </svg>
                          <span className="text-xs">PayPal</span>
                        </Button>
                      </div>
                    </div>

                    {paymentMethod === "card" && (
                      <div className="space-y-4 p-4 border rounded-md">
                        <div className="grid gap-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="name">Name on Card</Label>
                          <Input id="name" placeholder="John Doe" />
                        </div>
                      </div>
                    )}

                    {paymentMethod === "bank" && (
                      <div className="space-y-4 p-4 border rounded-md">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Account Name:</span>
                            <span className="text-sm font-medium">DJ Niotech</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Bank Name:</span>
                            <span className="text-sm font-medium">International Bank</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">IBAN:</span>
                            <span className="text-sm font-medium">DE89 3704 0044 0532 0130 00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">BIC/SWIFT:</span>
                            <span className="text-sm font-medium">DEUTDEDBXXX</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Reference:</span>
                            <span className="text-sm font-medium">RAD-PROJECT-DEC2024</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Please include the reference in your transfer</span>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "paypal" && (
                      <div className="space-y-4 p-4 border rounded-md">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-2">Send payment to:</p>
                          <p className="font-medium">dj.niotech@example.com</p>
                          <Button className="mt-4">Continue to PayPal</Button>
                        </div>
                      </div>
                    )}

                    <Button className="w-full" size="lg">
                      Process Payment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Payment History</CardTitle>
                  <CardDescription>Record of all your past transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-bold">L'Espace Club</h3>
                          <p className="text-sm text-muted-foreground">Rennes, France</p>
                          <div className="flex items-center mt-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>February 7, 2024</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="text-lg font-bold text-green-600">€600 Received</div>
                          <div className="text-sm text-muted-foreground">Deposit Payment</div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-end">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download Receipt
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-bold">Club XYZ</h3>
                          <p className="text-sm text-muted-foreground">Amsterdam, Netherlands</p>
                          <div className="flex items-center mt-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>January 15, 2024</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="text-lg font-bold text-green-600">€1,400 Received</div>
                          <div className="text-sm text-muted-foreground">Full Payment</div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-end">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download Receipt
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-bold">Techno Festival</h3>
                          <p className="text-sm text-muted-foreground">Berlin, Germany</p>
                          <div className="flex items-center mt-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>December 10, 2023</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="text-lg font-bold text-green-600">€2,000 Received</div>
                          <div className="text-sm text-muted-foreground">Full Payment</div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-end">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download Receipt
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Payment Methods</CardTitle>
                  <CardDescription>Manage your payment methods and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                          <CreditCard className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">Credit Card</h3>
                          <p className="text-sm text-muted-foreground">Visa ending in 4242</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive">
                          Remove
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
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
                            <rect x="2" y="5" width="20" height="14" rx="2" />
                            <line x1="2" y1="10" x2="22" y2="10" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Bank Account</h3>
                          <p className="text-sm text-muted-foreground">International Bank ****0000</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive">
                          Remove
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full">Add Payment Method</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Payment Preferences</CardTitle>
                  <CardDescription>Configure your payment settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="default-method">Default Payment Method</Label>
                      <Select defaultValue="bank">
                        <SelectTrigger>
                          <SelectValue placeholder="Select default method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                          <SelectItem value="card">Credit Card</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="deposit">Default Deposit Percentage</Label>
                      <Select defaultValue="50">
                        <SelectTrigger>
                          <SelectValue placeholder="Select percentage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30%</SelectItem>
                          <SelectItem value="50">50%</SelectItem>
                          <SelectItem value="70">70%</SelectItem>
                          <SelectItem value="100">100% (Full Payment)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="currency">Preferred Currency</Label>
                      <Select defaultValue="eur">
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="w-full">Save Preferences</Button>
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

