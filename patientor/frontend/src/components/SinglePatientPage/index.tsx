import { Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { Fragment, useEffect, useState } from 'react'
import services from '../../services/patients'
import { Diagnosis, PatientWithEntries } from "../../types"
import { Female, Male } from "@mui/icons-material"


const SinglePatientPage = () => {
    const { id } = useParams()
    const [patient, setPatient] = useState<PatientWithEntries>()
    const [codesData, setCodesData] = useState<Diagnosis[]>()

    useEffect(() => {
        if (!id) return
        const getPatient = async () => {
            const patient = await services.getSinglePatient(id)
            if (patient) {
                setPatient(patient)
            }
        }

        getPatient()

    }, [id])

    useEffect(() => {
        if (!patient) return
        if (!patient.entries) return
        let codes: string[] = []
        const getData = async () => {
            patient.entries.forEach(entry => {
                if (entry.diagnosisCodes) {
                    entry.diagnosisCodes.forEach(code => {
                        if (!codes.includes(code)) {
                            codes.push(code)
                        }
                    })
                }
            })
            if (codes.length > 0) {
                const data = await services.getDiagnoseCodesData(codes)
                setCodesData(data)
            }
        }

        getData()

    }, [patient])

    if (!patient) {
        return null
    }
    console.log(patient)
    let Gender = () => <span></span>;
    if (patient.gender === "male") {
        Gender = () => <Male />
    }
    if (patient.gender === "female") {
        Gender = () => <Female />
    }
    return <Box>
        <Typography variant="h4">{patient.name} <Gender /></Typography>
        <Typography variant="body1">ssn: {patient.ssn}</Typography>
        <Typography variant="body1">occupation: {patient.occupation}</Typography>
        <br />
        <br />
        {patient.entries.length > 0 ? <Typography variant="h5">entries</Typography> : null}
        <br />
        {patient.entries.map(entry => {
            return <Fragment key={entry.id}>
                <Typography variant="body1">{entry.date} {entry.description}</Typography>
                <br />
                {codesData && codesData.length > 0 && <ul>
                    {codesData.map(codeDetails => {
                        return <li key={codeDetails.code}>{codeDetails.code} {codeDetails.name}</li>
                    })}
                </ul>}
            </Fragment>
        })}
    </Box>
}

export default SinglePatientPage