// webchat.js
function initializeWebChat(botId, a8f4835e-089c-44f8-84a8-30d42ce44464) {
    const directLine = window.WebChat.createDirectLine({
        token: 'FOsEAcBeDQ8.-BndB_I-313qOSm0w9BF715q0Of7BrXMZQANHTiuoBg', // Replace with your Direct Line secret
        webSocket: true
    });

    window.WebChat.renderWebChat({
        directLine,
        userID: 'user',
        username: 'User',
        botAvatarInitials: 'Bot',
        userAvatarInitials: 'You',
        locale: 'en-US',
        styleOptions: {
            bubbleBackground: '#F4F4F4',
            bubbleFromUserBackground: '#E5E5E5'
        }
    }, document.getElementById('webchat'));
}