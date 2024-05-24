<template>
  <div class="letters">
    <letterItem
      :Letter="letter1"
      :class="{
        correct: this.arrays.correctList[0],
        placement: this.arrays.placementList[0],
        incorrect: this.arrays.wrongList[0]
      }"
    />
    <letterItem
      :Letter="letter2"
      :class="{
        correct: this.arrays.correctList[1],
        placement: this.arrays.placementList[1],
        incorrect: this.arrays.wrongList[1]
      }"
    />
    <letterItem
      :Letter="letter3"
      :class="{
        correct: this.arrays.correctList[2],
        placement: this.arrays.placementList[2],
        incorrect: this.arrays.wrongList[2]
      }"
    />
    <letterItem
      :Letter="letter4"
      :class="{
        correct: this.arrays.correctList[3],
        placement: this.arrays.placementList[3],
        incorrect: this.arrays.wrongList[3]
      }"
    />
    <letterItem
      :Letter="letter5"
      :class="{
        correct: this.arrays.correctList[4],
        placement: this.arrays.placementList[4],
        incorrect: this.arrays.wrongList[4]
      }"
    />
  </div>
</template>

<script>
import letterItem from './letterItem.vue'

export default {
  props: {
    arrays: {
      type: Object,
      required: true
    },
    Word: {
      type: String,
      required: true
    }
  },
  components: {
    letterItem
  },
  computed: {
    isActive() {
      return this.arrays.correctList[0] === 1
    }
  },
  data() {
    return {
      letter1: this.Word[0],
      letter2: this.Word[1],
      letter3: this.Word[2],
      letter4: this.Word[3],
      letter5: this.Word[4]
    }
  },
  watch: {
    Word() {
      this.letter1 = this.Word[0]
      this.letter2 = this.Word[1]
      this.letter3 = this.Word[2]
      this.letter4 = this.Word[3]
      this.letter5 = this.Word[4]
    }
  }
}
</script>

<style>
.correct {
  background-color: green;
}
.incorrect {
  background-color: red;
}
.placement {
  background-color: rgb(140, 140, 3);
}
.letters {
  display: flex;
}
</style>
