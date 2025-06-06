import { getIdeaBySlug } from "@/app/actions/idea-actions"
import IdeaDetail from "./idea-detail"

// Use static rendering for these pages
export const dynamic = "force-static"
export const revalidate = 3600 // Revalidate once per hour

export default async function IdeaDetailPage({ params }: { params: { slug: string } }) {
  // Await params according to Next.js 15 requirements
  const { slug } = await params
  
  // Fetching idea by slug
  const idea = await getIdeaBySlug(slug)
  
  // Idea fetched and processed

  return <IdeaDetail idea={idea} slug={slug} />
}
