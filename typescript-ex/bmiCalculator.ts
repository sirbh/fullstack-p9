import {parseArguments} from './utils';


export const calculateBmi = (height: number, weight: number): number => {
  const heightInMeter = height/100;
  const BMI = weight / (heightInMeter * heightInMeter);
  return BMI;
//   if (BMI < 16.0) {
//     return "Underweight (Severe thinness)";
//   } else if (BMI < 16.9) {
//     return "Underweight (Moderate thinness)";
//   } else if (BMI < 18.4) {
//     return "Underweight (Mild thinness)";
//   } else if (BMI < 24.9) {
//     return "Normal range";
//   } else if (BMI < 29.9) {
//     return "Overweight (Pre-obese)";
//   } else if (BMI < 34.9) {
//     return "Obese (Class I)";
//   } else if (BMI < 39.9) {
//     return "Obese (Class II)";
//   } else {
//     return "Obese (Class III)";
//   }
};



try {
    const {height,weight} = parseArguments(process.argv);
    const output = calculateBmi(height, weight);
    console.log(output);
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }

