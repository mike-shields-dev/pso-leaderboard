const broadcastMessageOnChannel = (message, channelId) => {
    const channel = new BroadcastChannel(channelId)
    channel.postMessage(message)
} 

export default broadcastMessageOnChannel