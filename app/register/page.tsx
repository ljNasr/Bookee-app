"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Register() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultType = searchParams.get("type") || "artist"

  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState<"artist" | "organizer">(defaultType as "artist" | "organizer")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    artistName: "",
    companyName: "",
    genre: "",
    customGenre: "",
    artistType: "",
    customArtistType: "",
    organizerType: "",
    customOrganizerType: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === "confirmPassword" || name === "password") {
      if (name === "confirmPassword") {
        setPasswordsMatch(formData.password === value)
      } else {
        setPasswordsMatch(formData.confirmPassword === value)
      }
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (step < 3) {
      if (step === 1 && !passwordsMatch) {
        setError("Passwords do not match")
        return
      }
      setError(null)
      setStep((prev) => prev + 1)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // In a real app, this would call an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate successful registration
      router.push("/dashboard")
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignup = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // In a real app, this would initiate Google OAuth flow
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate successful registration
      router.push("/dashboard")
    } catch (err) {
      setError("Google signup failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center font-heading">Create your account</CardTitle>
            <CardDescription className="text-center">
              Join Bookee to connect with artists and event organizers
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Tabs defaultValue={userType} onValueChange={(value) => setUserType(value as "artist" | "organizer")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="artist">I'm an Artist</TabsTrigger>
                <TabsTrigger value="organizer">I'm an Organizer</TabsTrigger>
              </TabsList>
            </Tabs>

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    {!passwordsMatch && formData.confirmPassword && (
                      <p className="text-sm text-destructive">Passwords do not match</p>
                    )}
                    {passwordsMatch && formData.confirmPassword && (
                      <div className="flex items-center gap-1 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span>Passwords match</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                  </div>

                  {userType === "artist" && (
                    <div className="space-y-2">
                      <Label htmlFor="artistName">Artist/DJ Name</Label>
                      <Input
                        id="artistName"
                        name="artistName"
                        value={formData.artistName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  )}

                  {userType === "organizer" && (
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company/Organization Name</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  {userType === "artist" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="genre">Music Genre</Label>
                        <Select value={formData.genre} onValueChange={(value) => handleSelectChange("genre", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your primary genre" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="techno">Techno</SelectItem>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="trance">Trance</SelectItem>
                            <SelectItem value="drum-and-bass">Drum & Bass</SelectItem>
                            <SelectItem value="hip-hop">Hip Hop</SelectItem>
                            <SelectItem value="rnb">R&B</SelectItem>
                            <SelectItem value="pop">Pop</SelectItem>
                            <SelectItem value="rock">Rock</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {formData.genre === "other" && (
                        <div className="space-y-2">
                          <Label htmlFor="customGenre">Specify Genre</Label>
                          <Input
                            id="customGenre"
                            name="customGenre"
                            value={formData.customGenre}
                            onChange={handleChange}
                            placeholder="Enter your genre"
                            required
                          />
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="artistType">Artist Type</Label>
                        <Select
                          value={formData.artistType}
                          onValueChange={(value) => handleSelectChange("artistType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your artist type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dj">DJ</SelectItem>
                            <SelectItem value="producer">Producer</SelectItem>
                            <SelectItem value="live-act">Live Act</SelectItem>
                            <SelectItem value="band">Band</SelectItem>
                            <SelectItem value="vocalist">Vocalist</SelectItem>
                            <SelectItem value="instrumentalist">Instrumentalist</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {formData.artistType === "other" && (
                        <div className="space-y-2">
                          <Label htmlFor="customArtistType">Specify Artist Type</Label>
                          <Input
                            id="customArtistType"
                            name="customArtistType"
                            value={formData.customArtistType}
                            onChange={handleChange}
                            placeholder="Enter your artist type"
                            required
                          />
                        </div>
                      )}
                    </>
                  )}

                  {userType === "organizer" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="organizerType">Organizer Type</Label>
                        <Select
                          value={formData.organizerType}
                          onValueChange={(value) => handleSelectChange("organizerType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your organizer type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="venue">Venue</SelectItem>
                            <SelectItem value="promoter">Promoter</SelectItem>
                            <SelectItem value="festival">Festival</SelectItem>
                            <SelectItem value="club">Club</SelectItem>
                            <SelectItem value="agency">Agency</SelectItem>
                            <SelectItem value="private-events">Private Events</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {formData.organizerType === "other" && (
                        <div className="space-y-2">
                          <Label htmlFor="customOrganizerType">Specify Organizer Type</Label>
                          <Input
                            id="customOrganizerType"
                            name="customOrganizerType"
                            value={formData.customOrganizerType}
                            onChange={handleChange}
                            placeholder="Enter your organizer type"
                            required
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Processing..." : step < 3 ? "Continue" : "Create Account"}
              </Button>
            </form>

            {step === 1 && (
              <>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  type="button"
                  className="w-full"
                  onClick={handleGoogleSignup}
                  disabled={isLoading}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" aria-hidden="true">
                    <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                      fill="#34A853"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </>
            )}
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <div className="flex items-center justify-center space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-2 w-2 rounded-full ${step === i ? "bg-primary" : "bg-gray-300"}`} />
              ))}
            </div>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

