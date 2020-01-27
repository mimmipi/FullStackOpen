import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const StatisticLine = (props) => (
    <tr>
    <th>{props.text}</th>
    <th>{props.value}</th>
    </tr>
)


const Average = (props) => {
    const average = (((1 * props.good) + (-1 * props.bad) + (0 * props.neutral)) / props.all);
    return ( 
        <>{average}</>
    )
}

const Percent = (props) => {
    const percent = props.good / props.all * 100
    return (
        <>{percent}%</>
    )
}
const App = (props) => {
    const [good, setGood] = React.useState(0)
    const [neutral, setNeutral] = React.useState(0)
    const [bad, setBad] = React.useState(0)
    const [all, setAll] = React.useState(0)

    const settingGood = goodValue => {
        setGood(good + 1);
        setAll(all + 1);

    };

    const settingNeutral = neutralValue => {
        setNeutral(neutral + 1);
        setAll(all + 1);
    }

    const settingBad = badValue => {
        setBad(bad + 1);
        setAll(all + 1);
    }


    if (all > 0) {
        return (
            <div>
                <h1> Give feedback </h1>

                <Button handleClick={() => settingGood(1)} text="Good" />
                <Button handleClick={() => settingNeutral(1)} text="Neutral" />
                <Button handleClick={() => settingBad(1)} text="Bad" />

                <h2>Statistics</h2>
                <table>
                    <tbody>
                        <StatisticLine text="Good" value={good} />
                        <StatisticLine text="Neutral" value={neutral} />
                        <StatisticLine text="Bad" value={bad} />
                        <StatisticLine text="All" value={all} />
                        <StatisticLine text ="Average" value={<Average good={good}bad={bad}neutral={neutral}all={all}/>}/>
                        <StatisticLine text="Positive" value={<Percent good={good} all={all} />} />
                    </tbody>
                </table>
            </div>
        );

    } else {
        return (
            <div>
                <h1> Give feedback </h1>

                <Button handleClick={() => settingGood(1)} text="Good" />
                <Button handleClick={() => settingNeutral(1)} text="Neutral" />
                <Button handleClick={() => settingBad(1)} text="Bad" />

                <h2>Statistics</h2>

                <p> No feedback given. </p>
            </div>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById('root')
)