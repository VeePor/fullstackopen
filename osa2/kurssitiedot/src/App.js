import { useState } from 'react'



const App = () => {

  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      {courses.map(course =>
        <Course course={course} />
      )}
    </div>
  )
}

const Course = (props) => {
  console.log(props.course.name)
  return (
    <div>
      <Header course={props.course} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
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
  let sum = 0
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Part = ({ part }) => {
  console.log('part test', part)
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  )
}

const Total = ({ parts }) => {
  var sum = 0
  const arr = parts
  sum = arr.reduce((s, p) => s + p.exercises, 0)
  console.log('sum', sum)
  return (
    <>
      <b>
        Total of {sum} exercises
      </b>
    </>
  )
}

export default App