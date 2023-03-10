import express from "express";
import services from "../services/index";
import { toNewPatient } from "../util";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(services.getPatient());
});

router.get("/:id", (_req, res) => {
  const id = _req.params.id;
  const patient = services.getSinglePatient(id);
  if (patient) {
    return res.send(patient);
  }
  return res.sendStatus(404).send({ error: "not found" });
});

router.post("/", (_req, res) => {
  try {
    const newPatient = toNewPatient(_req.body);
    const addedEntry = services.addPatient(newPatient);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
