const widthBtn = document.querySelector('.cal-amt');
widthBtn.style.width = '17rem';
document.querySelector('#loan-cal').addEventListener("submit", function (e) {
    document.querySelector('.loader').style.display = "block";
    document.querySelector('.result-row').style.display = "none";
    setTimeout(calculate, 2000);
    e.preventDefault();
});
// document.getElementById('loan-cal').addEventListener('submit', calculate);
function calculate(e) {
    const amount = document.getElementById('amount');
    const interst = document.getElementById('intrest');
    const years = document.getElementById('year-repay');
    const monthlyPayment = document.getElementById('month-pay');
    const yearlyPayment = document.getElementById('year-pay');
    const totalPayment = document.getElementById('total-pay');
    const totalIntrest = document.getElementById('total-int');
    const principal = parseFloat(amount.value);
    const calculatedIntrest = parseFloat(interst.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;
    const x = Math.pow(1 + calculatedIntrest, calculatedPayment);
    const monthly = (principal * x * calculatedIntrest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalIntrest.value = (monthly * calculatedPayment - principal).toFixed(2);
        yearlyPayment.value = (monthly * 12).toFixed(2);
        document.querySelector('.result-row').style.display = "block";
        document.querySelector('.loader').style.display = "none";
    } else {
        document.querySelector('.card h4').style.display = 'block';
        document.querySelector('.loader').style.display = "none";
        setTimeout(function() {
            document.querySelector('.card h4').style.display = 'none';
        }, 3000);
    }
}