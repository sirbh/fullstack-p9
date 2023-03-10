import React, { useState } from "react";
import { NewDiary } from "../../types";
import ErrorMessage from "../ErrorMessage";

interface AddDiaryProps {
    createDiary: (newDiary: NewDiary) => void,
    error: string
}

const AddDiary = (props: AddDiaryProps) => {
    const [date, setDate] = useState("");
    const [visibility, setVisibility] = useState("");
    const [weather, setWeather] = useState("");
    const [comment, setComment] = useState("");

    return (
        <form
            onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault()
                props.createDiary({
                    date,
                    visibility,
                    weather,
                    comment
                })
                console.log({
                    date,
                    visibility,
                    weather,
                    comment
                })
                setDate('')
                setComment('')
                setVisibility('')
                setWeather('')
            }}
        >
            <h3>Add new diary</h3>
            <ErrorMessage message={props.error} />
            <div>
                date
                <input
                    type={"date"}
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}
                ></input>
            </div>


            <div>
                Visibility<br />
                <input type="radio" value="good" name="visibility" onChange={(e) => { setVisibility(e.target.value) }}></input>
                <label>Good</label><br />
                <input type="radio" value="great" name="visibility" onChange={(e) => { setVisibility(e.target.value) }}></input>
                <label>Great</label><br />
                <input type="radio" value="ok" name="visibility" onChange={(e) => { setVisibility(e.target.value) }}></input>
                <label>Ok</label><br />
                <input type="radio" value="poor" name="visibility" onChange={(e) => { setVisibility(e.target.value) }}></input>
                <label>Poor</label><br />
            </div>

            <div>
                Weather<br />
                <input type="radio" value="sunny" name="weather" onChange={(e) => { setWeather(e.target.value) }}></input>
                <label>Sunny</label><br />
                <input type="radio" value="rainy" name="weather" onChange={(e) => { setWeather(e.target.value) }}></input>
                <label>Rainy</label><br />
                <input type="radio" value="cloudy" name="weather" onChange={(e) => { setWeather(e.target.value) }}></input>
                <label>Cloudy</label><br />
                <input type="radio" value="stormy" name="weather" onChange={(e) => { setWeather(e.target.value) }}></input>
                <label>Stormy</label><br />
                <input type="radio" value="windy" name="weather" onChange={(e) => { setWeather(e.target.value) }}></input>
                <label>Windy</label><br />
            </div>
            <div>
                comment
                <input
                    type={"text"}
                    value={comment}
                    onChange={(e) => {
                        setComment(e.target.value);
                    }}
                ></input>
            </div>
            <button type="submit">submit</button>
        </form>
    );
};

export default AddDiary;
