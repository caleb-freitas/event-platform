import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query GetLessons {
    lessons {
      id
      title
    }
  }
`

type Lesson = {
  id: string
  title: string

}

export function App() {
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)
  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}
