import { logsMessage } from "./logs.mjs"
export const handler = async (event) => {

  const returnMessage = JSON.stringify({ message: 'Hello from lambda', data: event })
  logsMessage(returnMessage)

  const response = {
    statusCode: 200,
    body: returnMessage
  }
  return response
}