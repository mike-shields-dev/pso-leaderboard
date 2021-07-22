const MESSAGEBUS = new BroadcastChannel("MESSAGEBUS")
const leaderBoardEl = document.querySelector("#leaderBoard")


MESSAGEBUS.onmessage = mssg => {
    if(mssg === "update") {
        console.log("update received")
    }
}
    

    //  received.innerHTML = 
    //     data.map(person => 
    //         `<div class="business-card">
    //             <div>name: ${person.name}</div>
    //             <div>email: ${person.email}</div>
    //         </div>`
    //     ).join("")