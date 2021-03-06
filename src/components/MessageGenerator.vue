<template>
  <div class="generator page" id="generator">
    <div class="generator-form container">
      <h2 class="generator-heading">
        <span>Generating recruitment messages has never been so easy!</span>
      </h2>
      <p class="generator-explanation">
        There are millions of recruitment messages written in the last couple of
        years. So why should your reinvent the wheel nowadays. Take advantage of
        the experience of your recruiment colleages by using this mail
        generator! It's 100% legit.
      </p>
      <form v-on:submit.prevent="generateRecruitmentMail">
        <div class="columns">
          <div class="form-input">
            <input
              v-model="victim"
              type="text"
              name="victim"
              placeholder="Name victim (to)"
              maxlength="30"
            />
            <label>Name victim</label>
          </div>
          <div class="form-input">
            <input
              v-model="recruiter"
              type="text"
              name="recruiter"
              placeholder="Name recruiter (from)"
              maxlength="30"
            />
            <label>Name recruiter</label>
          </div>
          <button type="submit">
            generate <i class="far fa-thumbs-up"></i>
          </button>
        </div>
      </form>
    </div>
    <div id="result">
      <div class="container generated" v-if="result">
        <h2>{{ resultTitle }}</h2>
        <p>{{ result.salutation }}</p>
        <p v-if="result.showOpener">{{ result.opener }}</p>
        <p>{{ result.message }}</p>
        <p v-if="result.showCloser">{{ result.closer }}</p>
        <p>{{ result.signoff }}</p>
        <p>{{ result.recruiterName }}</p>
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
      language: "en",
      recruiter: null,
      victim: null,
      result: null,
      minListItems: 4,
      maxListItems: 7,
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
    generateRecruitmentMail: function() {
      const content = this.json[this.language];

      // salutation, shuffle real name with fake names
      const victimNames = this.victim
        ? shuffleItems([
            ...content.names,
            ...Array(200).fill(this.victim),
            ...Array(10).fill(this.recruiter),
          ])
        : shuffleItems(content.placeholderNames);
      const salutations = shuffleItems(content.salutation);
      const salutation = `${salutations[0]} ${victimNames[0]},`;

      // starter (95% change of seeing it)
      const showOpener = Math.random() < 0.95;
      const opener = showOpener ? shuffleItems(content.openers)[0] : false;

      // the message
      const sentences = shuffleItems(content.sentences);
      const size = randomBetween(this.minListItems, this.maxListItems);
      const message = sentences.splice(0, size).join(" ");

      // closer (95% change of seeing it)
      const showCloser = Math.random() < 0.95;
      const closer = showCloser ? shuffleItems(content.closers)[0] : false;

      // signoffs, shuffle real name with fake names
      const recruiterName = this.recruiter
        ? shuffleItems([
            ...content.names,
            ...Array(200).fill(this.recruiter),
            ...Array(10).fill(this.victim),
          ])[0]
        : shuffleItems(content.placeholderNames)[0];
      const signoff = shuffleItems(content.signoffs)[0];

      // set new recruitment ipsum to view
      this.resultTitle = this.getResultTitle(this.language);

      this.result = {
        salutation,
        showOpener,
        opener,
        message,
        showCloser,
        closer,
        recruiterName,
        signoff,
      };

      // scroll to result container
      var VueScrollTo = require("vue-scrollto");
      VueScrollTo.scrollTo("#result", 500, {
        easing: "ease-out",
        offset: -160,
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

  .columns {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    }
  }

  .form-input {
    position: relative;

    input {
      border: 1px solid #173e43;
      border-radius: 5px;
      height: 60px;
      font-size: 18px;
      width: 250px;
      padding-left: 1em;
      margin-bottom: 1em;

      &:not(:placeholder-shown) {
        padding-top: 1em;
      }

      @media (min-width: 900px) {
        margin-bottom: 0;
      }
    }

    label {
      display: none;
    }

    input:not(:placeholder-shown) + label {
      display: inline-block;
      font-size: 10px;
      position: absolute;
      left: 18px;
      top: 6px;
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
    width: 250px;
    margin-bottom: 1em;

    @media (min-width: 900px) {
      height: 60px;
      width: 140px;
      margin-bottom: 0;
    }

    &:active {
      background-color: white;
      border: 1px solid #3fb0ac;
      color: #3fb0ac;
    }
  }
}
</style>
