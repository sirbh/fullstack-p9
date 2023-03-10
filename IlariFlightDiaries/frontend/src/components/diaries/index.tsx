import { Fragment } from "react"
import { Diary } from "../../types"


interface DiariesProps {
    diaries: Diary[]
}

const Diaries = (props: DiariesProps) => {
    return <div>
        <h3>Diary Entries</h3>
        {props.diaries.map(diary => {
            return <Fragment key={diary.id}>
                <h4>{diary.date}</h4>
                <p>visibility:{diary.visibility}<br/>weather:{diary.weather}</p>
            </Fragment>
        })}
    </div>
}

export default Diaries