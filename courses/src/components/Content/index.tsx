import { CoursePart } from "../../types"
import Part from "../Part"

interface ContentProps {
    courseParts: CoursePart[]
}

const Content = (props: ContentProps): JSX.Element => {
    return <>{props.courseParts.map(course => {
        return <Part part={course} key={course.name}/>
    })}</>
}

export default Content