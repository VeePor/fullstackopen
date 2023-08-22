const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = (props) => {
  console.log(props.course.name)
  return (
    <div>
      <Header course={props.course} />
      <Content parts={props.course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>
        {props.course.name}
      </h1>
    </>
  )
}

const Content = ({ parts }) => {
  console.log("Content", parts)
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Part = (props) => {
  const part = props.part
  console.log('part test', part)
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  )
}

export default App