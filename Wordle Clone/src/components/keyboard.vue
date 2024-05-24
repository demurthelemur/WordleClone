<template>
  <div class="keyboard">
    <button class="key" @click="selectLetter('A')">A</button>
    <button class="key" @click="selectLetter('B')">B</button>
    <button class="key" @click="selectLetter('C')">C</button>
    <button class="key" @click="selectLetter('D')">D</button>
    <button class="key" @click="selectLetter('E')">E</button>
    <button class="key" @click="selectLetter('F')">F</button>
    <button class="key" @click="selectLetter('G')">G</button>
    <button class="key" @click="selectLetter('H')">H</button>
    <button class="key" @click="selectLetter('I')">I</button>
    <button class="key" @click="selectLetter('J')">J</button>
    <button class="key" @click="selectLetter('K')">K</button>
    <button class="key" @click="selectLetter('L')">L</button>
    <button class="key" @click="selectLetter('M')">M</button>
    <button class="key" @click="selectLetter('N')">N</button>
    <button class="key" @click="selectLetter('O')">O</button>
    <button class="key" @click="selectLetter('P')">P</button>
    <button class="key" @click="selectLetter('Q')">Q</button>
    <button class="key" @click="selectLetter('R')">R</button>
    <button class="key" @click="selectLetter('S')">S</button>
    <button class="key" @click="selectLetter('T')">T</button>
    <button class="key" @click="selectLetter('U')">U</button>
    <button class="key" @click="selectLetter('V')">V</button>
    <button class="key" @click="selectLetter('W')">W</button>
    <button class="key" @click="selectLetter('X')">X</button>
    <button class="key" @click="selectLetter('Y')">Y</button>
    <button class="key" @click="selectLetter('Z')">Z</button>
    <button class="key" id="submit" @click="selectLetter('SUBMIT')">SUBMIT</button>
    <button class="key" id="clear" @click="selectLetter('CLEAR')">CLEAR</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    selectLetter(letter) {
      this.$emit('select-letter', letter)
    }
  }
}
</script>

<style scoped>
.keyboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  padding-left: 15%;
  margin-top: 8vh;
}
.key {
  width: 1.4rem;
  text-align: center;
  background-color: #2b2a2a;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 15px;
  margin: 5px;
  border-radius: 8px;
  font-size: 30px;
  color: white;
}
#submit {
  width: 7rem;
}
#clear {
  width: 7rem;
}
button {
  all: unset;
}
button:focus {
  outline: revert;
}
</style>
