
document.getElementById('convertBtn').addEventListener('click', function() {
    const sourceCurrency = document.getElementById('sourceCurrency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;
    const amount = document.getElementById('amount').value;
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${sourceCurrency}`)
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.rates[targetCurrency];
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        document.getElementById('result').textContent = `${amount} ${sourceCurrency} = ${convertedAmount} ${targetCurrency}`;
      })
      .catch(error => console.log(error));
  });
  