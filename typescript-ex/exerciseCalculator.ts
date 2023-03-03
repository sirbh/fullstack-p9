interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}


const ratingWithText = (
  average: number,
  target: number
): { rating: number; text: string } => {
  if (average - target > 0) {
    return {
      rating: 3,
      text: "Very Good",
    };
  } else if (target - average < 1) {
    return {
      rating: 2,
      text: "Good",
    };
  } else {
    return {
      rating: 1,
      text: "Bad",
    };
  }
};

interface ExcerciseValue {
  dailyHours:number[],
  targetHour:number
}
export const parseArguments = (args: string[]): ExcerciseValue  => {
  if (args.length < 4) throw new Error('Not enough arguments');
  const all_args = [...process.argv];

  process.argv.forEach(number=>{
    if(isNaN(Number(number))){
      throw new Error('Not a number in arguements');
    }
  });
  
  const dailyHours = all_args.slice(3).map(hour=>Number(hour));
  const targetHour = all_args.slice(2,3).map(hour=>Number(hour))[0];

  return {
    dailyHours,
    targetHour
  };
    
};

export const calculateExercises = (
  dailyHours: Array<number>,
  targetHours: number
): Result => {
  const totalDailyHours = dailyHours.reduce((totalHours, hour) => {
    totalHours = totalHours + hour;
    return totalHours;
  }, 0);

  const trainingDays = dailyHours.reduce((trainHour, hour) => {
    if (hour > 0) {
      trainHour = trainHour + 1;
    }
    return trainHour;
  }, 0);

  const average = totalDailyHours / dailyHours.length;
  return {
    average,
    periodLength: dailyHours.length,
    rating: ratingWithText(average,targetHours).rating,
    ratingDescription: ratingWithText(average,targetHours).text,
    success: average >= targetHours,
    target: targetHours,
    trainingDays: trainingDays,
  };
};


try {
  const {dailyHours,targetHour} = parseArguments(process.argv);
  const output = calculateExercises(dailyHours,targetHour);
  console.log(output);
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}