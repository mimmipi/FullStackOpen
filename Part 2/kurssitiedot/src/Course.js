import React from 'react'

const Course = ({ course }) => {

    const exercisesTotal =
        course.parts.reduce((total, part) => { return total + part.exercises }, 0)


    return (
        <div>
            <h2>{course.name}</h2>
            <ul>
                {course.parts.map((parts) =>
                    <li key={parts.id}>
                        {parts.name} {parts.exercises}
                    </li>
                )}
                <li>Total of {exercisesTotal} exercises</li>
            </ul>

        </div>
    )
}

export default Course