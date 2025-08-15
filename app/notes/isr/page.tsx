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
// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3
 
export default async function Page({
}) {
  const notes : Notes = await fetch(`https://service.pace11.my.id/api/notes/`).then(
    (res) => res.json()
  )
  return (
    <main>
      <ul>
        {notes.data.map((note) => (
            <li key={note.id} style = {{ border: '1px solid black', marginBottom:'10px', padding: '10px'}}>
                <a href={`/notes/isr/${note.id}`}>{note.title}</a>
                </li>
        ))}
      </ul>
    </main>
  )
}