const data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

let indice = 0
let highestNumber = Math.max(
  data[0].amount,
  data[1].amount,
  data[2].amount,
  data[3].amount,
  data[4].amount,
  data[5].amount,
  data[6].amount
)

for (i in data) {
  if (data[i].amount == highestNumber) {
    indice = Number(i)
  }
}

// set height based on highest valeu of 'data' array

for (i = 0; i < weekDays.children.length; i++) {
  console.log(i)
  weekDays.children[i].querySelector('.bar').style.height = (data[i].amount * 100) / highestNumber + '%'

  if (data[i].amount == highestNumber) {
    weekDays.children[i].classList.add('highest')
  }

  weekDays.children[i].querySelector('.value').innerText = '$' + data[i].amount
}