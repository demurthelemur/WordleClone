<template>
  <h1>Wordle Clone</h1>
  <h1>{{ test }}</h1>
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
        placementList: [],
        wrongList: [],
        correctList: [0, 0, 0, 0, 0]
      },
      guess2: {
        text: '',
        placementList: [],
        wrongList: [],
        correctList: []
      },
      guess3: {
        text: '',
        placementList: [],
        wrongList: [],
        correctList: []
      },
      guess4: {
        text: '',
        placementList: [],
        wrongList: [],
        correctList: []
      },
      guess5: {
        text: '',
        placementList: [],
        wrongList: [],
        correctList: []
      },
      guess6: {
        text: '',
        placementList: [],
        wrongList: [],
        correctList: []
      },
      guessNo: 1
    }
  },
  computed: {
    test() {
      return this.$store.state.test
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
        } else if (this.currentWord === this.selectedWord) {
          this.gameEndWin()
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
      this.currentWord = ''
      this.guessNo++
    },
    gameEndLost() {
      alert('You lose!')
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
      // if (this.guessNo === 1) {
      //   this.guess1.correctList = [1, 1, 1, 1, 1]
      // } else if (this.guessNo === 2) {
      //   this.guess2.correctList = [1, 1, 1, 1, 1]
      // } else if (this.guessNo === 3) {
      //   this.guess3.correctList = [1, 1, 1, 1, 1]
      // } else if (this.guessNo === 4) {
      //   this.guess4.correctList = [1, 1, 1, 1, 1]
      // } else if (this.guessNo === 5) {
      //   this.guess5.correctList = [1, 1, 1, 1, 1]
      // } else if (this.guessNo === 6) {
      //   this.guess6.correctList = [1, 1, 1, 1, 1]
      // }
      this.selectedWord = wordsList[Math.floor(Math.random() * wordsList.length)].toUpperCase()
      this.guess1.text = ''
      this.guess2.text = ''
      this.guess3.text = ''
      this.guess4.text = ''
      this.guess5.text = ''
      this.guess6.text = ''
      this.guessNo = 1
    }
  },
  watch: {
    currentWord() {
      console.log(this.currentWord)
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
