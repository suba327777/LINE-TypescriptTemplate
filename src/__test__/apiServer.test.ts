/* packages */
import request from "supertest"
/* linebot */
import {app} from "../linebot/index"

describe("APIテスト",()=>{
    it("expressサーバー上でapiの結果を受け取るテスト",async()=>{
        const response=await request(app).get("/");
         expect(response.status).toBe(200);
    })
})