document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'hamburger',
      img: 'images/hamburger.jpeg'
    },
    {
      name: 'hamburger',
      img: 'images/hamburger.jpeg'
    },
    {
      name: 'beef',
      img: 'images/beef.jpeg'
    },
    {
      name: 'beef',
      img: 'images/beef.jpeg'
    },
    {
      name: 'chicken',
      img: 'images/chicken.jpeg'
    },
    {
      name: 'chicken',
      img: 'images/chicken.jpeg'
    },
    {
      name: 'noodles',
      img: 'images/noodles.jpeg'
    },
    {
      name: 'noodles',
      img: 'images/noodles.jpeg'
    },
    {
      name: 'pizza',
      img: 'images/pizza.jpeg'
    },
    {
      name: 'pizza',
      img: 'images/pizza.jpeg'
    },
    {
      name: 'pork-feet',
      img: 'images/pork-feet.jpeg'
    },
    {
      name: 'pork-feet',
      img: 'images/pork-feet.jpeg'
    },
    {
      name: 'pork',
      img: 'images/pork.jpeg'
    },
    {
      name: 'pork',
      img: 'images/pork.jpeg'
    },
    {
      name: 'ramen',
      img: 'images/ramen.jpeg'
    },
    {
      name: 'ramen',
      img: 'images/ramen.jpeg'
    },
  ]

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardChosen = []
  let cardChosenId = []
  let cardsWon = []

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/gold-key.jpeg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }

  cardArray.sort(() => 0.5 - Math.random())


  function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]

    if (cardChosen[0] === cardChosen[1]) {
      cards[optionOneId].setAttribute('src', 'images/good.jpeg')
      cards[optionTwoId].setAttribute('src', 'images/good.jpeg')
      cards[optionOneId].removeEventListener('click', flipcard)
      cards[optionTwoId].removeEventListener('click', flipcard)
      cardsWon.push(cardChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/sad.jpeg')
      cards[optionTwoId].setAttribute('src', 'images/sad.jpeg')
      setTimeout(cardRollback, 400)
    }

    function cardRollback() {
      cards[optionOneId].setAttribute('src', 'images/gold-key.jpeg')
      cards[optionTwoId].setAttribute('src', 'images/gold-key.jpeg')
    }

    cardChosen = []
    cardChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congraturation!!'
    }
  }


  function flipcard() {
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2) {
      setTimeout(checkMatch, 500)
    }
  }

  createBoard()
})

