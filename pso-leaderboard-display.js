const MESSAGEBUS = new BroadcastChannel("MESSAGEBUS")
const LOCALSTORE = window.localStorage
const leaderBoardEl = document.querySelector("#leaderBoard")


MESSAGEBUS.onmessage = mssg => {
    
}
    

    //  received.innerHTML = 
    //     data.map(person => 
    //         `<div class="business-card">
    //             <div>name: ${person.name}</div>
    //             <div>email: ${person.email}</div>
    //         </div>`
    //     ).join("")