import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 bg-black text-white">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-4">
          {/* Fixed logomark using inline SVG */}
          <div className="flex h-8 w-8 items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
              <path fill="#f7f7f7" d="m30.26,78.45v.08l.03-.03s-.03-.03-.03-.05Z" />
              <path fill="#f7f7f7" d="m30.27,87l-.02.02v-.03s0,.01.02.02Z" />
              <g>
                <path fill="#f7f7f7" d="m77.66,82.48l.02.02h-.03s.01,0,.02-.02Z" />
                <path
                  fill="#f7f7f7"
                  d="m75.01,85.29s-2.77-2.76-2.8-2.79c-.41-.41-.82-.83-1.23-1.26-4.84,3.68-10.02,6.49-16.15,7.16-.98.11-1.99.17-3,.17s-2.02-.06-3-.17c-8.02-.89-15.45-5.38-19.96-12.08-2.6-3.86-4.25-8.41-4.63-13.3-.03-.31-.04-.62-.05-.92-.02-.3-.02-.62-.02-.92,0-1.02.05-2.01.16-3.01.67-6.19,3.39-11.78,7.48-16.06,2.58-2.69,5.62-4.76,8.9-6.18v-6.35c-3.17,1.18-6.2,2.82-9.24,4.76-2.12,1.34-3.86,3.07-5.48,4.99-4.89,5.85-7.84,13.37-7.84,21.58,0,.09,0,.18,0,.28,0,.4,0,.8.03,1.19.02.61.06,1.21.11,1.81.62,7.03,3.42,13.46,7.72,18.58,11.22,13.36,32.17,15.83,46.14,5.23.48-.36.94-.73,1.39-1.12.55-.46,1.08-.94,1.6-1.44l-.15-.15Zm-44.75-6.75v-.08s.02.03.03.05l-.03.03Z"
                />
                <path
                  fill="#f7f7f7"
                  d="m77.83,6.03l-4.28,4.28c-.09-.07-.19-.14-.28-.2-2.52-1.71-5.56-2.7-8.83-2.7-2.41,0-4.69.53-6.73,1.51-1.86.88-3.51,2.11-4.89,3.61-1.94,2.11-3.31,4.73-3.87,7.66-.19.97-.11,1.51-.11,2.53s-.08,2.02,0,3.07v40.87l-6,5.54v-23.17l.02-.02s0,0-.02,0v-8.46l.03-.03s-.02-.03-.03-.04v-14.28h.03c0-.05,0-.1-.02-.16-.13-.92-.19-1.87-.19-2.84s.07-2.02.2-3c.64-4.58,2.7-8.7,5.71-11.9,1.38-1.47,2.97-2.75,4.7-3.79,3.26-1.96,7.08-3.08,11.16-3.08,4.92,0,9.46,1.64,13.12,4.41.09.06.18.14.28.21Z"
                />
                <path
                  fill="#f7f7f7"
                  d="m77.67,39.6l-4.27,4.27c-.04-.06-.09-.11-.14-.17-1.22-1.51-2.6-2.87-4.11-4.08-5.51-4.42-12.36-6.37-19.07-5.93-.56.03-1.12.08-1.68.16v-6.13c.56-.07,1.12-.12,1.68-.15.58-.03,1.17-.05,1.76-.05,8.2,0,15.73,2.95,21.57,7.84,1.54,1.29,2.96,2.71,4.25,4.24Z"
                />
                <path fill="#f7f7f7" d="m30.29,78.5l-.03.03v-.08s.02.03.03.05Z" />
              </g>
            </svg>
          </div>
          <p className="text-sm font-mono">&copy; {new Date().getFullYear()} Springboard. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/about" className="text-sm font-mono uppercase tracking-wide hover:text-gray-300">
            About Us
          </Link>
          <Link
            href="mailto:contact@springboard.org"
            className="text-sm font-mono uppercase tracking-wide hover:text-gray-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
