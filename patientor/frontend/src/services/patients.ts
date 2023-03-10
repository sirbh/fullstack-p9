import axios from "axios";
import { Diagnosis, Patient, PatientFormValues, PatientWithEntries } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(
    `${apiBaseUrl}/patients`
  );

  return data;
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(
    `${apiBaseUrl}/patients`,
    object
  );

  return data;
};

const getSinglePatient = async (id:string) => {
  const {data} = await axios.get<PatientWithEntries>( `${apiBaseUrl}/patients/${id}`)
  return data
}

const getDiagnoseCodesData = async (codes:string[]) => {
  // if(codes.length===0||!codes) return []
  const reqs = codes.map(async code => {
    return axios.get<Diagnosis>(`${apiBaseUrl}/diagnoses/${code}`).then(res=>res.data)
  })
  
  const data = await axios.all(reqs)

  return data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll, create, getSinglePatient, getDiagnoseCodesData
};

