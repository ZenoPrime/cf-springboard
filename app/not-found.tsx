import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-6xl font-bold text-primary mb-4">404</CardTitle>
          <CardDescription className="text-xl">
            Page Not Found
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button asChild>
              <Link href="/">
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/ideas">
                Browse Ideas
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}