<template>
  <div class="generator page" id="generator">
    <div class="generator-form container">
      <div class="new" @click="payoff = newPayoff()">
        v3<span>{{ payoff }}</span>
      </div>
      <h2 class="generator-heading">
        <span
          >Recruitment Ipsum is a collection of real recruitment mails.</span
        >
        <span>They're finally getting useful as placeholder text!</span>
      </h2>
      <form v-on:submit.prevent="generateRecruitmentIpsum">
        <div class="columns">
          <div class="column first">
            <div class="form-input">
              <input
                v-model="amount"
                type="text"
                name="amount"
                maxlength="3"
                min="1"
                max="999"
              />
              <label>Amount</label>
            </div>
          </div>
          <div class="column">
            <div class="form-radio">
              <input
                v-model="type"
                type="radio"
                name="type"
                id="typeParagraphs"
                value="sentences"
              /><label for="typeParagraphs"
                ><span>paragraphs</span> <i class="fas fa-angle-right"></i
              ></label>
            </div>
            <div class="form-radio">
              <input
                v-model="type"
                type="radio"
                name="type"
                id="typeLists"
                value="listitems"
              /><label for="typeLists"
                ><span>lists</span> <i class="fas fa-angle-right"></i
              ></label>
            </div>
          </div>
          <div class="column">
            <div class="form-radio">
              <input
                v-model="language"
                type="radio"
                name="language"
                id="languageEN"
                value="en"
              /><label for="languageEN"
                ><span>english</span> <i class="fas fa-angle-right"></i
              ></label>
            </div>
            <div class="form-radio">
              <input
                v-model="language"
                type="radio"
                name="language"
                id="languageNL"
                value="nl"
              /><label for="languageNL"
                ><span>dutch</span> <i class="fas fa-angle-right"></i
              ></label>
            </div>
          </div>
          <div class="column last">
            <button type="submit">
              generate <i class="far fa-thumbs-up"></i>
            </button>
          </div>
          <div class="startwith">
            <input
              v-model="startwith"
              type="checkbox"
              name="startwith"
              id="startWith"
              value="true"
            /><label for="startWith"
              ><div class="checkbox">
                <i class="fas fa-check" v-if="startwith"></i>
              </div>
              <span>Start with "Recruiment Ipsum ..."</span></label
            >
          </div>
        </div>
      </form>
    </div>
    <div id="result">
      <div class="container generated" v-if="ipsum">
        <h2>{{ resultTitle }}</h2>
        <div v-if="ipsum.type === 'sentences'">
          <p v-for="(content, index) in ipsum.output" :key="index">
            {{ content }}
          </p>
        </div>
        <div v-if="ipsum.type === 'listitems'">
          <ul v-for="(content, index) in ipsum.output" :key="index">
            <li v-for="(item, subindex) in content" v-bind:key="subindex">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { shuffleItems, randomBetween, newItemFromArray } from "./utils";

export default {
  data: function() {
    return {
      json: require("../assets/content.json"),
      ipsum: null,
      type: "sentences",
      language: "en",
      amount: 15,
      minListItems: 4,
      maxListItems: 7,
      maxParagraphLength: 400,
      startwith: true,
      payoff: null,
      resultTitle: null,
    };
  },
  created: function() {
    this.payoff = this.json.payoffs[0];
  },
  methods: {
    getResultTitle(language) {
      return newItemFromArray(
        this.json[language].resultTitles,
        this.resultTitle
      );
    },
    newPayoff() {
      return newItemFromArray(this.json.payoffs, this.payoff);
    },
    generateRecruitmentIpsum() {
      const result = { output: [], type: this.type };
      const content = this.json[this.language];
      const items = content[this.type];
      let shuffled = shuffleItems(items);

      // handle invalid amount
      if (isNaN(this.amount) || this.amount < 1) this.amount = 1;

      // add start sentence when requested
      if (this.startwith) {
        this.type === "sentences"
          ? shuffled.unshift(content.startSentence)
          : shuffled.unshift(content.startListitem);
      }

      if (this.type === "sentences") {
        // create paragraphs
        while (result.output.length < this.amount) {
          const lines = [];

          while (lines.join(" ").length < this.maxParagraphLength) {
            lines.push(shuffled.splice(0, 1));
          }

          result.output.push(lines.join(" "));

          if (shuffled.length < 10) {
            shuffled = shuffleItems(items);
          }
        }
      } else {
        // create lists
        while (result.output.length < this.amount) {
          const size = randomBetween(this.minListItems, this.maxListItems);
          const listItems = shuffled.splice(0, size);

          result.output.push(listItems);

          if (shuffled.length < 10) {
            shuffled = shuffleItems(items);
          }
        }
      }

      // set new recruitment ipsum to view
      this.resultTitle = this.getResultTitle(this.language);
      this.ipsum = result;

      // scroll to result container
      var VueScrollTo = require("vue-scrollto");
      VueScrollTo.scrollTo("#result", 500, {
        easing: "ease-out",
        offset: -250,
        x: false,
        y: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.generator {
  .generator-form {
    @media (min-width: 900px) {
      margin-bottom: 30px;
    }
  }

  .new {
    background: #fae596;
    cursor: pointer;
    display: none;
    font-weight: bold;
    font-size: 3.4em;
    text-align: center;
    padding-top: 10px;
    line-height: 1;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: absolute;
    transform: rotate(30deg);
    user-select: none;
    right: 20px;
    top: -150px;

    @media (min-width: 900px) {
      display: block;
    }

    @media (min-width: 1000px) {
      right: -40px;
      top: -40px;
    }

    span {
      display: block;
      font-size: 14px;
      line-height: 1.2;
      margin: 0 auto;
      max-width: 90%;
    }
  }

  .columns {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 18px;
    margin: 0 auto;

    @media (min-width: 900px) {
      flex-direction: row;
      width: 90%;
    }

    .column {
      margin-bottom: 20px;
      order: 1;
      width: 100%;

      @media (max-width: 899px) {
        display: flex;
        justify-content: space-between;

        &.last,
        &.first {
          justify-content: center;
        }

        &.last {
          order: 3;
        }
      }

      @media (min-width: 900px) {
        padding: 0 20px;
        width: 30%;

        &.last,
        &.first {
          width: 20%;
        }

        &.last {
          order: 2;
        }
      }
    }
  }

  .form-input {
    position: relative;
    text-align: right;

    input {
      border: 1px solid #173e43;
      border-radius: 5px;
      font-size: 18px;
      text-align: center;
      width: 60px;
      height: 60px;

      &:not(:placeholder-shown) {
        padding-top: 1em;
      }

      @media (min-width: 900px) {
        width: 100%;
      }
    }

    label {
      display: none;
    }

    input:not(:placeholder-shown) + label {
      display: block;
      width: 100%;
      font-size: 10px;
      position: absolute;
      text-align: center;
      left: 0;
      top: 6px;
    }
  }

  .startwith {
    font-size: 0.8em;
    margin-bottom: 20px;
    order: 2;
    width: 100%;

    @media (min-width: 900px) {
      font-size: 1em;
      margin-bottom: 0;
      order: 3;
      text-align: center;
    }

    input {
      display: none;
    }

    label {
      align-items: center;
      cursor: pointer;
      display: flex;
      justify-content: center;
    }

    .checkbox {
      align-items: center;
      border: 1px solid #173e43;
      border-radius: 5px;
      display: flex;
      height: 20px;
      justify-content: center;
      font-size: 0.6em;
      margin-right: 10px;
      width: 20px;

      @media (min-width: 900px) {
        height: 24px;
        width: 24px;
      }
    }
  }

  .form-radio {
    display: inline-block;
    width: 47%;

    @media (min-width: 900px) {
      width: 100%;
    }

    input {
      display: none;
    }

    i {
      display: none;
    }

    input:checked + label {
      background: #173e43;
      color: white;
      position: relative;

      i {
        display: inline-block;
      }
    }

    label {
      align-items: center;
      border: 1px solid #173e43;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      font-size: 0.8em;
      height: 40px;
      justify-content: space-between;
      padding: 0 10px;
      width: 100%;

      @media (min-width: 900px) {
        font-size: 1em;
        height: 60px;
        margin-bottom: 20px;
        padding: 0 20px;
      }
    }
  }

  button {
    background-color: #3fb0ac;
    border: 1px solid darken(#3fb0ac, 8);
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    height: 40px;
    text-align: center;
    width: 140px;

    @media (min-width: 900px) {
      height: 60px;
    }

    &:active {
      background-color: white;
      border: 1px solid darken(#3fb0ac, 8);
      color: #3fb0ac;
    }
  }
}
</style>
