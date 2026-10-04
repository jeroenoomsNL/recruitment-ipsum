<script setup>
import { computed, ref, watch } from "vue";
import content, { LANGUAGES } from "@/lib/content";
import { clampAmount, generateIpsum, ipsumToText, MAX_AMOUNT } from "@/lib/generator";
import { pickDifferent } from "@/lib/random";
import { getStats } from "@/lib/stats";
import BuzzText from "@/components/BuzzText";
import InboxStack from "@/components/InboxStack.vue";
import MailWindow from "@/components/MailWindow.vue";
import SegmentedControl from "@/components/SegmentedControl.vue";

const TYPES = [
  { value: "sentences", label: "Paragraphs" },
  { value: "listitems", label: "Lists" },
];

const unread = new Intl.NumberFormat("en").format(getStats(content).sentences);

const type = ref("sentences");
const language = ref("en");
const amount = ref(4);
const startWith = ref(true);

const output = ref([]);
const outputType = ref(type.value);
const subject = ref(content.en.resultTitles[0]);
const version = ref(0);
const payoff = ref(content.payoffs[0]);

const plainText = computed(() => ipsumToText(output.value, outputType.value));

function generate() {
  const corpus = content[language.value];
  output.value = generateIpsum(corpus, {
    type: type.value,
    amount: amount.value,
    startWith: startWith.value,
  });
  outputType.value = type.value;
  subject.value = pickDifferent(corpus.resultTitles, subject.value);
  version.value++;
}

function normalizeAmount() {
  amount.value = clampAmount(amount.value);
}

function step(delta) {
  amount.value = clampAmount(clampAmount(amount.value) + delta);
}

watch([type, language, startWith], generate);
watch(amount, (value) => {
  if (clampAmount(value) === Number(value)) generate();
});

generate();
</script>

<template>
  <div class="wrap">
    <section class="page-intro hero">
      <div>
        <p class="eyebrow unread">
          Inbox · {{ unread }} unread
        </p>
        <h1>Lorem Ipsum, ghostwritten by recruiters.</h1>
        <p class="lead">
          Placeholder text made from real recruitment messages, received by
          e-mail and on LinkedIn over more than ten years. Names removed, typos
          kept.
        </p>
        <button
          type="button"
          class="payoff"
          title="Show another slogan"
          @click="payoff = pickDifferent(content.payoffs, payoff)"
        >
          {{ payoff }}
        </button>
      </div>
      <InboxStack class="hero-inbox" />
    </section>

    <MailWindow
      from="Recruitment Ipsum"
      :subject="subject"
      :plain-text="plainText"
      :version="version"
      @regenerate="generate"
    >
      <template #controls>
        <SegmentedControl
          v-model="type"
          label="Format"
          :options="TYPES"
        />
        <SegmentedControl
          v-model="language"
          label="Language"
          :options="LANGUAGES"
        />
        <div class="amount">
          <label for="amount">{{ type === "listitems" ? "Lists" : "Paragraphs" }}</label>
          <div class="stepper">
            <button
              type="button"
              aria-label="Fewer"
              :disabled="amount <= 1"
              @click="step(-1)"
            >
              −
            </button>
            <input
              id="amount"
              v-model.number="amount"
              type="number"
              inputmode="numeric"
              min="1"
              :max="MAX_AMOUNT"
              @blur="normalizeAmount"
            >
            <button
              type="button"
              aria-label="More"
              :disabled="amount >= MAX_AMOUNT"
              @click="step(1)"
            >
              +
            </button>
          </div>
        </div>
        <label class="check">
          <input
            v-model="startWith"
            type="checkbox"
          >
          Start with “Recruitment ipsum…”
        </label>
      </template>

      <template #default="{ highlight }">
        <template v-if="outputType === 'listitems'">
          <ul
            v-for="(list, index) in output"
            :key="index"
          >
            <li
              v-for="(item, itemIndex) in list"
              :key="itemIndex"
            >
              <BuzzText
                :text="item"
                :highlight="highlight"
              />
            </li>
          </ul>
        </template>
        <template v-else>
          <p
            v-for="(paragraph, index) in output"
            :key="index"
          >
            <BuzzText
              :text="paragraph"
              :highlight="highlight"
            />
          </p>
        </template>
      </template>
    </MailWindow>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  gap: 40px;
  align-items: center;

  @media (min-width: 880px) {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 56px;
  }
}

.hero-inbox {
  max-width: 440px;

  @media (max-width: 879px) {
    display: none;
  }
}

.payoff {
  margin-top: 1.5rem;
  padding: 0.35em 0.9em;
  border: 0;
  border-radius: 999px;
  background: var(--badge);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  transform: rotate(-2deg);
  transition: transform 0.15s;

  &:hover {
    transform: rotate(2deg) scale(1.05);
  }
}

.amount {
  display: flex;
  align-items: center;
  gap: 10px;

  label {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--muted);
  }
}

.stepper {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--field-line);
  border-radius: 999px;
  background: var(--field);

  button {
    width: 40px;
    height: 42px;
    border: 0;
    background: none;
    font-size: 1.25rem;
    cursor: pointer;
    border-radius: 999px;

    &:disabled {
      opacity: 0.35;
      cursor: default;
    }
  }

  input {
    width: 3ch;
    border: 0;
    background: none;
    text-align: center;
    font-family: var(--font-mono);
    font-weight: 500;
    appearance: textfield;
    -moz-appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}

.check {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  font-size: 0.9375rem;
  cursor: pointer;

  input {
    width: 18px;
    height: 18px;
    accent-color: var(--accent);
  }
}
</style>
