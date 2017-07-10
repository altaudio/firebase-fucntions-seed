import * as functions from 'firebase-functions'

// A function triggered by onWrite event to /projectQueries directory
export const onProjectQuery = functions.database.ref('/projectQueries').onWrite(event => {
  const data = event.data.val()
  console.log(data)
})

// A HTTP triggered function
export const logRequest = functions.https.onRequest(request => {
  console.log(request)
})
