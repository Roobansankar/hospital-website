"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar, Clock, GraduationCap, Award } from "lucide-react"

interface Doctor {
  id: number
  name: string
  specialty: string
  image: string
  education: string
  experience: string
  description: string
}

interface DoctorCardProps {
  doctor: Doctor
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative h-64 w-full">
          <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
        </div>
        <CardHeader className="pb-2">
          <CardTitle>{doctor.name}</CardTitle>
          <CardDescription className="text-blue-600 dark:text-blue-400">{doctor.specialty}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-400">{doctor.description}</p>
        </CardContent>
        <CardFooter>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{doctor.name}</DialogTitle>
                <DialogDescription className="text-blue-600 dark:text-blue-400">{doctor.specialty}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full">
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">{doctor.description}</p>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{doctor.education}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{doctor.experience}</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h4 className="mb-2 font-medium">Consultation Hours</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">Monday - Friday</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">9:00 AM - 5:00 PM</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">Saturday</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">9:00 AM - 1:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Book Appointment</Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  )
}

export default DoctorCard
