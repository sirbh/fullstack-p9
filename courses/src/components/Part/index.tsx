import { CoursePart } from "../../types"
import { assertNever } from "../../utils"

interface PartInterface {
    part: CoursePart
}

const Part = (props: PartInterface) => {
    switch (props.part.kind) {
        case "background": {
            return <>
                <p>
                    <b> {props.part.name} {props.part.exerciseCount}</b>
                </p>
                <p>
                    {props.part.backroundMaterial}
                </p>
                <p>
                    {props.part.description}
                </p>
            </>
        }
        case "basic": {
            return <>
                <p>
                    <b> {props.part.name} {props.part.exerciseCount}</b>
                </p>
                <p>
                    {props.part.description}
                </p>
            </>
        }
        case "group": {
            return <>
                <p>
                    <b> {props.part.name} {props.part.exerciseCount}</b>
                </p>
                <p>
                    {props.part.groupProjectCount}
                </p>
            </>
        }
        case "special": {
            return <>
                <p>
                    <b> {props.part.name} {props.part.exerciseCount}</b>
                </p>
                <p>
                    required skills: {props.part.requirements.map(skill => <span key={skill}>{skill+" "}</span>)}
                </p>
            </>
        }
        // default : return null
        default:
            return assertNever(props.part);

    }
}

export default Part