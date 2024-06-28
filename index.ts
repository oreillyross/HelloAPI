import express from "express"

const app = express()

app.get("/", (_, res) => {
  res.json({"Message": "Hello API!"})
})


app.listen(3000, () => {
  console.log("Listening on port 3000")
})