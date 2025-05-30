import { getIdeaBySlug } from "@/app/actions/idea-actions"
import IdeaDetail from "./idea-detail"

// Use static rendering for these pages
export const dynamic = "force-static"
export const revalidate = 3600 // Revalidate once per hour

export default async function IdeaDetailPage({ params }: { params: { slug: string } }) {
  console.log("🚀 IdeaDetailPage called with slug:", params.slug)

  const idea = await getIdeaBySlug(params.slug)

  console.log("💡 Idea result:", idea ? "Found" : "Not found")
  if (idea) {
    console.log("📋 Idea title:", idea.title || idea.fields?.title)
  }

  return <IdeaDetail idea={idea} slug={params.slug} />
}
