import * as functions from 'firebase-functions'
import _ from 'lodash'
import request from 'superagent'

export const onProjectQuery = functions.database.ref('/projectQueries').onWrite(event => {
  const data = event.data.val()
  let newestTimestamp = 0
  _.mapKeys(data, (value, key) => {
    if (key > newestTimestamp) {
      newestTimestamp = key
    }
  })

  const newMessage = data[newestTimestamp]

  request
    .post('https://slack.com/api/chat.postMessage')
    .type('form')
    .send({ token: 'xoxp-12518494951-128887104496-193423764374-aa5823c692e4657ceba1d18b13c27656' })
    .send({ channel: 'C5NJ698US' })
    .send({ text: `New Message from ${newMessage.userName} - ${newMessage.userEmail}: \n${newMessage.userMessage}` })
    .end((error, response) => {
      if (error) {
        console.log(error)
      } else {
        console.log(response)
      }
    })
})
