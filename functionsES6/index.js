import * as functions from "firebase-functions"

export let onProjectQuery = functions.database.ref('/projectQueries')
  .onWrite((event) => {
    const data = event.data.val()

})
