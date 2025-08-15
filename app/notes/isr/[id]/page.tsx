import { ReactNode } from "react"

type listNotes = {
    description: ReactNode
    id: string
    title: string
    content: string
    created_at: string
    updated_at: string
}


type Notes = {
    sucsess: boolean
    massage: string
    data : listNotes[]
}

type DetailNotes = {
    sucsess: boolean
    massage: string
    data : listNotes
}
// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3

// We'll Prerender only the params from `generateStaticParams` at the build time.
//if a request come in for a path that hasn't been generated,
// Next.js will server-render the page on-demand 


export async function generateStaticParams() {
  const notes: Notes = await fetch('https://service.pace11.my.id/api/notes ').then((res) =>
    res.json()
  )
  return notes.data.map((note : listNotes    ) => ({
    id: String(note.id),
  }))
}
 
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const notes : DetailNotes = await fetch(`https://service.pace11.my.id/api/notes/${id}`).then(
    (res) => res.json()
  )
  return (
    <main>
      <h1>{notes.data.title}</h1>
      <p>{notes.data.description}</p>
    </main>
  )
}