"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return (
    <footer className="bg-gray-900 text-white overflow-hidden">
      <div
        className="container mx-auto px-4 py-12 transform-gpu"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-xl font-bold">MediCare Hospital</h3>
            <p className="mb-4 text-gray-400">
              Providing quality healthcare services for over 25 years. Your
              health is our priority.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about/profile" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/departments/cardiology"
                  className="hover:text-white"
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/facilities/icu" className="hover:text-white">
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/patients/visiting-hours"
                  className="hover:text-white"
                >
                  Patient Information
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services/emergency" className="hover:text-white">
                  24/7 Emergency Care
                </Link>
              </li>
              <li>
                <Link href="/services/diagnostics" className="hover:text-white">
                  Diagnostic Services
                </Link>
              </li>
              <li>
                <Link href="/services/surgery" className="hover:text-white">
                  Surgical Procedures
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consultation"
                  className="hover:text-white"
                >
                  Online Consultation
                </Link>
              </li>
              <li>
                <Link href="/services/pharmacy" className="hover:text-white">
                  Pharmacy Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/rehabilitation"
                  className="hover:text-white"
                >
                  Rehabilitation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-blue-500" />
                <span>
                  123 Healthcare Avenue, Medical District, City, Country - 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-blue-500" />
                <span>info@medicarehospital.com</span>
              </li>
              <li>
                <Link href="/admin">
                  <button className="mt-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition duration-300">
                    Admin Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} MediCare Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
