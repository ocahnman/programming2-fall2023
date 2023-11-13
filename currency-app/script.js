document.addEventListener('DOMContentLoaded', function () {
    const usdAmount = prompt("Enter amount in USD:");
    if (usdAmount) {
        const rates = {
            EUR: 0.92,
            GBP: 0.81,
            CAD: 1.28,
            CHF: 0.95,
            JPY: 130.12
        };

        document.getElementById('usd-amount').innerText = `USD Amount: ${usdAmount}`;
        document.getElementById('eur-amount').innerText = `EUR Amount: ${(usdAmount * rates.EUR).toFixed(2)}`;
        document.getElementById('gbp-amount').innerText = `GBP Amount: ${(usdAmount * rates.GBP).toFixed(2)}`;
        document.getElementById('cad-amount').innerText = `CAD Amount: ${(usdAmount * rates.CAD).toFixed(2)}`;
        document.getElementById('chf-amount').innerText = `CHF Amount: ${(usdAmount * rates.CHF).toFixed(2)}`;
        document.getElementById('jpy-amount').innerText = `JPY Amount: ${(usdAmount * rates.JPY).toFixed(2)}`;
    }
});
