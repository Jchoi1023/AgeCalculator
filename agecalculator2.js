let el = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');

const today = new Date();

function calculateAge() {
  let birthDate = new Date(el.value);

  let age;

  if (isNaN(birthDate)) {
    elResult.innerText = 'Choose a date please!';
  } else if (
    (today.getMonth() == birthDate.getMonth() &&
      today.getDate() < birthDate.getDate() &&
      today.getFullYear() == birthDate.getFullYear()) ||
    today.getFullYear < birthDate.getFullYear()
  ) {
    elResult.innerText = 'Choose correct date!';
  } else if(birthDate === today) {
   elResult.innerText = `You are zero-year-old.`
    } else if(today.getFullYear() -1 == birthDate.getFullYear() &&
    today.getMonth() == birthDate.getMonth() && 
    today.getDate() == birthDate.getDate()
    ){
      elResult.innerText == `You are one year old.`
    }
    //생일이 지난 경우.
    else if (
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() == birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate())
    ) {
      age = today.getFullYear() - birthDate.getFullYear();
      elResult.innerText = `You are ${age} years old.`;
    } else {
      //생일이 안 지난 경우.
      age = today.getFullYear() - birthDate.getFullYear() - 1;
      elResult.innerText = `You are ${age} years old.`;
    }
    elResult.innerText = `You are ${age} years old.`;
    return age;
  }


elSubmit.addEventListener('click', calculateAge);
