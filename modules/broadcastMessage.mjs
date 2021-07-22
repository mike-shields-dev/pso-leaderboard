const broadcastMessage = message => {
    const channel = new BroadcastChannel("ui&display")
    channel.postMessage("store updated")
} 

export default broadcastMessage