
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
        <h2>
          {props.course.name}
        </h2>
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
    const arr = parts
    var sum = arr.reduce((s, p) => s + p.exercises, 0)
    console.log('sum', sum)
    return (
      <>
        <b>
          Total of {sum} exercises
        </b>
      </>
    )
  }

  export default Course
  