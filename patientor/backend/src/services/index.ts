import diagnoses from "../../data/diagnoses";
import patients from "../../data/patients";
import { Diagnose, NonSensitivePatient, Patient } from "../types";
import { v1 as uuid } from "uuid";

const getDiagnoses = (): Diagnose[] => {
  return diagnoses;
};

const addDiagnoses = () => {
  return null;
};

const getDiagnosesData = (code:string):Diagnose|undefined => {
  const diagnoseData = diagnoses.find(diagnose=>{
    return diagnose.code === code;
  });

  if(diagnoseData){
    return diagnoseData;
  }

  return undefined;
};

const getPatient = (): NonSensitivePatient[] => {
  return patients.map((patient) => {
    return {
      dateOfBirth: patient.dateOfBirth,
      gender: patient.gender,
      id: patient.id,
      name: patient.name,
      occupation: patient.occupation,
    };
  });
};

const getSinglePatient = (id:string):Patient|undefined => {
  const patient = patients.find(patient=>{
    return patient.id === id;
  });

  if(patient){
    return patient;
  }

  return undefined;
};
const addPatient = (patient: Omit<Patient, "id">) => {
  const newPatient = {
    ...patient,
    id: uuid(),
  };

  patients.push(newPatient);

  return newPatient;
};

export default {
  getDiagnoses,
  addDiagnoses,
  getPatient,
  addPatient,
  getSinglePatient,
  getDiagnosesData
};
