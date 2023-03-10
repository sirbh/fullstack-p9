import { useEffect, useState } from "react";
import Diaries from "./components/diaries";
import { addDiary, getDiaries } from "./services";
import { Diary, NewDiary } from "./types";
import AddDiary from "./components/addDiary";
import axios from 'axios'

function App() {
  const [diaries, setDiaries] = useState<Diary[]>([])
  const [error,setError] = useState('')

  useEffect(() => {
    getDiaries().then(diaries => {
      setDiaries(diaries)
    })
  }, [])
  const createDiary = (newDiary:NewDiary)=>{
    addDiary(newDiary).then(diary=>{
      const updatedDiaries = diaries.concat({
        date:diary.date,
        visibility:diary.visibility,
        weather:diary.weather,
        id:diary.id
      })
      setDiaries(updatedDiaries)
    }).catch(error=>{
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data
        setError(errorMessage)
        setTimeout(()=>{
          setError('')
        },5000)
      } else {
        console.error(error);
      }
    })
  }
  return (
    <div>
      <AddDiary createDiary={createDiary} error={error}/>
      <Diaries diaries={diaries} />
    </div>
  );
}

export default App;
