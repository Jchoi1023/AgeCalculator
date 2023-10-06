
const birthday = document.getElementById('birthday');
const result = document.getElementById('result');
const submit = document.getElementById('submit');
const today = new Date();

const ageCalculator = function () {
const dateOfToday = Date.parse(today);
const dateOfBirth = Date.parse(birthday.value);
const one_day = 1000 * 60 * 60 * 24;
const days = (dateOfToday - dateOfBirth) / one_day;
const age = Math.floor(days / 365);

result.innerText = `귀하의 만 나이는 ${age}입니다.`;
return age;
};

submit.addEventListener('click', ageCalculator);
