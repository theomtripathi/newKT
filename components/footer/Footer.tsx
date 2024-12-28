import Link from 'next/link';
import { Heart } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 justify-items-center text-center">
          {/* Logo and Description */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/logo.png"
              alt="Krishna Test"
              width={70} // Specify dimensions
              height={70}
              className="h-14 brightness-0 invert mb-4"
            />
            <p className="text-blue-200 max-w-xs">
              Strengthening relationships through understanding.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/support"
                  className="text-blue-200 hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-blue-200 hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-blue-200 hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-blue-200 hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-200 flex items-center justify-center gap-2">
            Made with
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            by Krishna Test © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}