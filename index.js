var Peer = require('simple-peer');
var peer = new Peer({
	initiator: location.hash === '#init',
	trickle: false
	
})

peer.on('signal',function(data)
{
	document.getElementById('YourId').value = JSON.stringify(data);
	
})

document.getElementById('connect').addEventListener('click',function()
{
	var otherId = JSON.parse(document.getElementById('OtherId').value);
	peer.signal(otherId);
});

document.getElementById('send').addEventListener('click',function()
{
	
	var MyMessage = document.getElementById('myMessage').value;
	peer.send(MyMessage);
	alert('Sending');
});

peer.on('data',function(data)
{
	alert('Receiving');
	document.getElementById('messages').textContent += data + '\n';
	
});