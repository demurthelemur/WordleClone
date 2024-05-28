<template>
  <h1>Wordle Clone</h1>
  <div class="words">
    <wordItem :arrays="guess1" :Word="guess1.text.toUpperCase()" />
    <wordItem :arrays="guess2" :Word="guess2.text.toUpperCase()" />
    <wordItem :arrays="guess3" :Word="guess3.text.toUpperCase()" />
    <wordItem :arrays="guess4" :Word="guess4.text.toUpperCase()" />
    <wordItem :arrays="guess5" :Word="guess5.text.toUpperCase()" />
    <wordItem :arrays="guess6" :Word="guess6.text.toUpperCase()" />
  </div>
  <div>
    <keyboard @select-letter="letterReceived" />
  </div>
</template>

<script>
import wordsList from './helpers/words.js'
import wordItem from './components/wordItem.vue'
import keyboard from './components/keyboard.vue'

export default {
  components: {
    wordItem,
    keyboard
  },
  data() {
    return {
      selectedWord: '',
      currentWord: '',
      guess1: {
        text: '',
        placementList: [0, 0, 0, 0, 0],
        wrongList: [0, 0, 0, 0, 0],
        correctList: [0, 0, 0, 0, 0]
      },
      guess2: {
        text: '',
        placementList: [0, 0, 0, 0, 0],
        wrongList: [0, 0, 0, 0, 0],
        correctList: [0, 0, 0, 0, 0]
      },
      guess3: {
        text: '',
        placementList: [0, 0, 0, 0, 0],
        wrongList: [0, 0, 0, 0, 0],
        correctList: [0, 0, 0, 0, 0]
      },
      guess4: {
        text: '',
        placementList: [0, 0, 0, 0, 0],
        wrongList: [0, 0, 0, 0, 0],
        correctList: [0, 0, 0, 0, 0]
      },
      guess5: {
        text: '',
        placementList: [0, 0, 0, 0, 0],
        wrongList: [0, 0, 0, 0, 0],
        correctList: [0, 0, 0, 0, 0]
      },
      guess6: {
        text: '',
        placementList: [0, 0, 0, 0, 0],
        wrongList: [0, 0, 0, 0, 0],
        correctList: [0, 0, 0, 0, 0]
      },
      guessNo: 1
    }
  },
  created() {
    this.selectedWord = wordsList[Math.floor(Math.random() * wordsList.length)].toUpperCase()
    console.log(this.selectedWord)
  },
  methods: {
    letterReceived(letter) {
      if (letter === 'SUBMIT') {
        if (this.guessNo >= 6) {
          this.gameEndLost()
          return
        } else if (this.currentWord.length !== 5) {
          alert('Word too short')
          return
        } else {
          this.checkResult()
        }
      } else if (letter === 'CLEAR') {
        this.currentWord = ''
      } else {
        this.currentWord += letter
      }
    },
    checkResult() {
      let tempCorrectList = [0, 0, 0, 0, 0]
      let tempPlacementList = [0, 0, 0, 0, 0]
      let tempWrongList = [0, 0, 0, 0, 0]
      let correctLetterList = this.selectedWord.split('')
      console.log(correctLetterList)
      for (let i = 0; i < 5; i++) {
        if (this.currentWord[i] === correctLetterList[i]) {
          tempCorrectList[i] = 1
          correctLetterList[i] = ''
        }
      }
      for (let i = 0; i < 5; i++) {
        if (correctLetterList.includes(this.currentWord[i])) {
          tempPlacementList[i] = 1
          console.log('incorrect placement', i)
          correctLetterList[correctLetterList.indexOf(this.currentWord[i])] = ''
        } else if (correctLetterList[i] !== '') {
          console.log(correctLetterList)
          tempWrongList[i] = 1
        } else if (tempCorrectList[i] === 0 && tempPlacementList[i] === 0) {
          tempWrongList[i] = 1
        }
      }

      if (this.guessNo === 1) {
        this.guess1.correctList = tempCorrectList
        this.guess1.placementList = tempPlacementList
        this.guess1.wrongList = tempWrongList
      } else if (this.guessNo === 2) {
        this.guess2.correctList = tempCorrectList
        this.guess2.placementList = tempPlacementList
        this.guess2.wrongList = tempWrongList
      } else if (this.guessNo === 3) {
        this.guess3.correctList = tempCorrectList
        this.guess3.placementList = tempPlacementList
        this.guess3.wrongList = tempWrongList
      } else if (this.guessNo === 4) {
        this.guess4.correctList = tempCorrectList
        this.guess4.placementList = tempPlacementList
        this.guess4.wrongList = tempWrongList
      } else if (this.guessNo === 5) {
        this.guess5.correctList = tempCorrectList
        this.guess5.placementList = tempPlacementList
        this.guess5.wrongList = tempWrongList
      } else if (this.guessNo === 6) {
        this.guess6.correctList = tempCorrectList
        this.guess6.placementList = tempPlacementList
        this.guess6.wrongList = tempWrongList
      }

      if (this.currentWord === this.selectedWord) {
        this.gameEndWin()
      }
      this.currentWord = ''
      this.guessNo++
    },
    gameEndLost() {
      alert('You lose!')
      this.resetColors()
      this.selectedWord = wordsList[Math.floor(Math.random() * wordsList.length)].toUpperCase()
      this.guess1.text = ''
      this.guess2.text = ''
      this.guess3.text = ''
      this.guess4.text = ''
      this.guess5.text = ''
      this.guess6.text = ''
      this.guessNo = 1
    },
    gameEndWin() {
      alert('You win!')
      window.location.reload()
    },
    resetColors() {
      this.guess1.correctList = [0, 0, 0, 0, 0]
      this.guess1.placementList = [0, 0, 0, 0, 0]
      this.guess1.wrongList = [0, 0, 0, 0, 0]
      this.guess2.correctList = [0, 0, 0, 0, 0]
      this.guess2.placementList = [0, 0, 0, 0, 0]
      this.guess2.wrongList = [0, 0, 0, 0, 0]
      this.guess3.correctList = [0, 0, 0, 0, 0]
      this.guess3.placementList = [0, 0, 0, 0, 0]
      this.guess3.wrongList = [0, 0, 0, 0, 0]
      this.guess4.correctList = [0, 0, 0, 0, 0]
      this.guess4.placementList = [0, 0, 0, 0, 0]
      this.guess4.wrongList = [0, 0, 0, 0, 0]
      this.guess5.correctList = [0, 0, 0, 0, 0]
      this.guess5.placementList = [0, 0, 0, 0, 0]
      this.guess5.wrongList = [0, 0, 0, 0, 0]
      this.guess6.correctList = [0, 0, 0, 0, 0]
      this.guess6.placementList = [0, 0, 0, 0, 0]
      this.guess6.wrongList = [0, 0, 0, 0, 0]
    }
  },
  watch: {
    currentWord() {
      if (this.currentWord.length > 5) {
        this.currentWord = this.currentWord.slice(0, 5)
      }
      if (this.guessNo === 1) {
        this.guess1.text = this.currentWord
      } else if (this.guessNo === 2) {
        this.guess2.text = this.currentWord
      } else if (this.guessNo === 3) {
        this.guess3.text = this.currentWord
      } else if (this.guessNo === 4) {
        this.guess4.text = this.currentWord
      } else if (this.guessNo === 5) {
        this.guess5.text = this.currentWord
      } else if (this.guessNo === 6) {
        this.guess6.text = this.currentWord
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');

body {
  font-family: 'Poetsen One', sans-serif;
  font-size: 35px;
  background-color: rgb(78, 95, 80);
}
h1 {
  text-align: center;
  color: white;
}
.words {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
div {
  width: '40%';
}
</style>
