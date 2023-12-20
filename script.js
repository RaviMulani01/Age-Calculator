function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const resultElement = document.getElementById('result');

    const birthdate = luxon.DateTime.fromISO(birthdateInput.value);
    const today = luxon.DateTime.now();

    if (!birthdate.isValid) {
        resultElement.innerHTML = 'Please enter a valid birthdate.';
        return;
    }

    const diff = today.diff(birthdate, ['years', 'months', 'days']);
    const age = {
        years: diff.years,
        months: diff.months,
        days: diff.days,
    };

    resultElement.innerHTML = `You are ${age.years} years, ${age.months} months, and ${Math.floor(age.days)} days old.`;
}
