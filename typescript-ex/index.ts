import express, { Request } from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

const app = express();

interface ExcerciseRequestBody {
  "daily_exercises": number[],
  "target": number
}

app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!!");
});

app.post('/exercises', (req: Request<object, object, ExcerciseRequestBody>, res) => {
  const {daily_exercises,target} = req.body;
  if(!daily_exercises||!target){
    return res.status(404).send({
      error: "parameters missing"
    });
  }
  let response;
  daily_exercises.forEach(hour=>{
    if(isNaN(Number(hour))){
      response = res.status(404).send({
        error: "malformatted parameters"
      });
    }
  });
  if(response){
    return response;
  }
  if(isNaN(Number(target))){
    return res.status(404).send({
      error: "malformatted parameters"
    });
  }
  return res.status(200).send(calculateExercises(daily_exercises,target));
});

app.get("/bmi", (req, res) => {
    const { height, weight } = req.query;
    const heightNum = Number(height);
    const weightNum = Number(weight);
    if (!heightNum || !weightNum) {
        res.status(404).send({
            error: "malformatted parameters",
        });
    }
    const bmi = calculateBmi(heightNum, weightNum);
    res.status(200).send({
        height,
        weight,
        bmi
    });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
