const assert = require('assert')

const singleton = (function(){
  function globalState() {
    this.loggedInUsers = 0
    this.connections = 0
    this.Admin = ""

    this.addConnection = () => {
      this.connections++
    }

    this.removeConnection = () => {
      if (this.connections === 0) return
      this.connections--
    }

    this.addLoggedInUser = () => {
      this.loggedInUsers++
    }

    this.removeLoggedInUser = () => {
      if (this.loggedInUsers === 0) return
      this.loggedInUsers--
    }

    this.setAdmin = (admin) => {
      this.admin = admin
    }
  }

  let state

  function createState() {
    state = new globalState()
    return state
  }

  return {
    getState: () => {
      if (!state) {
        this.state = createState()
      }
      return state
    }
  }
})()

const firstState = singleton.getState()
const secondState = singleton.getState()

if (firstState === secondState) {
  console.log("both are the same")
}

// modify singleton with firstState
firstState.addConnection()
firstState.addLoggedInUser()
firstState.addLoggedInUser()
firstState.setAdmin("John Wick")

// assert singleton with secondState
console.assert(secondState.connections === 1, "connections not equal to 1")
console.assert(secondState.loggedInUsers === 2, "loggedInUsers not equal to 2")
console.assert(secondState.admin === "John Wick", "adming not equal to John Wick")
