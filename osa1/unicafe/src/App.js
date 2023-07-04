import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

const Statistics = ({ good, neutral, bad, all }) => {

  if (all == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  const countAverage = () => {
    if (all == 0) {
      return 0
    }
    return (
      (good - bad) / all
    )
  }

  const countPositive = () => {
    if (all == 0) {
      return 0
    }
    return (
      (good / all) * 100
    )
  }

  return (
    <table>
      <tbody align='left'>
        <tr>
          <th>good</th>
          <th>{good}</th>
        </tr>
        <tr>
          <th>neutral</th>
          <th>{neutral}</th>
        </tr>
        <tr>
          <th>bad</th>
          <th>{bad}</th>
        </tr>
        <tr>
          <th>all</th>
          <th>{all}</th>
        </tr>
        <tr>
          <th>average</th>
          <th>{countAverage()}</th>
        </tr>
        <tr>
          <th>positive</th>
          <th>{countPositive() + " %"}</th>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App