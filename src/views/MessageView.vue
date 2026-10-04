<script setup>
import { computed, ref, watch } from "vue";
import content, { LANGUAGES } from "@/lib/content";
import { generateMail, mailToText } from "@/lib/generator";
import { pickDifferent } from "@/lib/random";
import BuzzText from "@/components/BuzzText";
import MailWindow from "@/components/MailWindow.vue";
import SegmentedControl from "@/components/SegmentedControl.vue";

const to = ref("");
const from = ref("");
const language = ref("en");

const mail = ref(null);
const subject = ref(content.en.resultMailTitles[0]);
const version = ref(0);

const plainText = computed(() => (mail.value ? mailToText(mail.value) : ""));

function generate() {
  const corpus = content[language.value];
  mail.value = generateMail(corpus, { to: to.value, from: from.value });
  subject.value = pickDifferent(corpus.resultMailTitles, subject.value);
  version.value++;
}

watch(language, generate);
generate();
</script>

<template>
  <div class="wrap">
    <section class="page-intro">
      <p class="eyebrow">
        For recruiters
      </p>
      <h1>Write a recruitment message in one click.</h1>
      <p class="lead">
        Thousands of recruitment messages have been written already, so why
        reinvent the wheel? Fill in the names and borrow the experience of your
        colleagues. It's 100% legit.
      </p>
    </section>

    <MailWindow
      :from="from.trim() || 'You, the recruiter'"
      :to="to.trim() || 'A developer who did not ask for this'"
      :subject="subject"
      :plain-text="plainText"
      :version="version"
      @regenerate="generate"
    >
      <template #controls>
        <form
          class="compose"
          @submit.prevent="generate"
        >
          <label>
            <span>To</span>
            <input
              v-model="to"
              type="text"
              placeholder="Candidate's name"
              maxlength="30"
              autocomplete="off"
            >
          </label>
          <label>
            <span>From</span>
            <input
              v-model="from"
              type="text"
              placeholder="Your name"
              maxlength="30"
              autocomplete="off"
            >
          </label>
          <SegmentedControl
            v-model="language"
            label="Language"
            :options="LANGUAGES"
          />
          <button
            type="submit"
            class="button"
          >
            Write message
          </button>
        </form>
      </template>

      <template
        v-if="mail"
        #default="{ highlight }"
      >
        <p>{{ mail.salutation }}</p>
        <p v-if="mail.opener">
          <BuzzText
            :text="mail.opener"
            :highlight="highlight"
          />
        </p>
        <p>
          <BuzzText
            :text="mail.message"
            :highlight="highlight"
          />
        </p>
        <p v-if="mail.closer">
          <BuzzText
            :text="mail.closer"
            :highlight="highlight"
          />
        </p>
        <p>
          {{ mail.signoff }}<br>
          {{ mail.signature }}
        </p>
      </template>
    </MailWindow>
  </div>
</template>

<style scoped>
.compose {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 16px;
  width: 100%;

  label {
    display: flex;
    align-items: center;
    flex: 1 1 200px;
    min-height: 44px;
    padding-left: 14px;
    border: 1px solid var(--field-line);
    border-radius: 999px;
    background: var(--field);

    &:focus-within {
      border-color: var(--accent);
      box-shadow: 0 0 0 2px var(--accent);
    }
  }

  span {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--muted);
  }

  input {
    flex: 1;
    min-width: 0;
    height: 42px;
    padding: 0 14px 0 10px;
    border: 0;
    background: none;
    outline: none;
  }
}
</style>
