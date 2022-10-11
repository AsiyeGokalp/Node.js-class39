
import supertest from 'supertest'
import app from '../server.js'

describe("POST/weather", () => {
  describe("given a cityname", () => {
    test("should respond with a 200 status code", async () => {
    const response = await request(app).post("/weather").send({
      cityname : "cityname"
    })
    expect(response.statusCode).toBe(200)
    })
    test("should specify json in the content type header",async () => {
      const response = await request(app).post("/weather").send({
        cityname : "cityname"
      })
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
      })
  } )
  describe("when cityname is missing", () => {
test("should respond with a status code of 400", async () => {

  const bodyData = [
    {cityname:cityname},
    {}
  ]
   for (const body of bodyData) {
    const response = await request(app).post("/weather").send(body)
    expect(response.statusCode).toBe(400)
   }
  })
  })
})