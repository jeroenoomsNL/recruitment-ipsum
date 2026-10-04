<script setup>
import content from "@/lib/content";
import { getStats } from "@/lib/stats";

const format = new Intl.NumberFormat("en").format;
const stats = getStats(content);

const totals = [
  { label: "words", value: stats.words },
  { label: "sentences", value: stats.sentences },
  { label: "list items", value: stats.listItems },
];
</script>

<template>
  <div class="wrap">
    <section class="page-intro">
      <p class="eyebrow">
        About
      </p>
      <h1>The story behind Recruitment Ipsum.</h1>
    </section>

    <div class="about">
      <div class="story">
        <p>
          In 2011 I started working at a consultancy company as a front-end
          developer. From the very first week, recruiters sent me messages to
          convince me that the grass is greener somewhere else. Front-end
          developers are hot, they say…
        </p>
        <p>
          After a couple of years I realized I still had all those messages in
          my inbox. Some of them are absolutely brilliant! So I turned them
          into a placeholder text generator, just like
          <a href="https://lipsum.com">Lorem Ipsum</a>. Designers and
          developers use it when they don't have all the content they need yet.
        </p>
        <p>
          The text is taken from the recruitment messages I received by e-mail
          and on LinkedIn. I didn't change a thing. I only removed the names of
          companies and recruiters, and left the typos for extra entertainment.
          The generator shuffles the sentences, with awesome results like:
        </p>
        <blockquote lang="en">
          Recruitment ipsum first of all I want to apologise for contacting you
          randomly out of the blue. Now this will sound a little generic because
          every man and his dog will tell you there looking for a guy with a set
          of skills like yours?
        </blockquote>
        <p>
          I received some beauties in Dutch as well, so there's also a Dutch
          version:
        </p>
        <blockquote lang="nl">
          Recruitment ipsum ik weet dat je me niet kent, maar zou jij misschien
          contact met me op kunnen nemen via onderstaand nummer? Kom toch man!
          Je krijgt er een spijtgarantie-certificaat bij van mij.
        </blockquote>
        <p>
          I hope you enjoy Recruitment Ipsum, even if you are a recruiter. And
          if you are, feel free to contact me. Just know that your message
          might end up in here. ;-)
        </p>
        <p class="signature">
          Jeroen
        </p>
      </div>

      <aside
        class="folders"
        aria-labelledby="stats-title"
      >
        <h2
          id="stats-title"
          class="eyebrow"
        >
          What's inside
        </h2>
        <dl class="totals">
          <div
            v-for="total in totals"
            :key="total.label"
          >
            <dt>{{ total.label }}</dt>
            <dd>{{ format(total.value) }}</dd>
          </div>
        </dl>
        <dl class="counters">
          <div
            v-for="counter in stats.counters"
            :key="counter.label"
          >
            <dt>{{ counter.label }}</dt>
            <dd>{{ format(counter.value) }}</dd>
          </div>
        </dl>
        <p class="note">
          Counted per sentence, in English and Dutch.
        </p>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: grid;
  gap: 48px;

  @media (min-width: 880px) {
    grid-template-columns: minmax(0, 1fr) 340px;
    gap: 72px;
    align-items: start;
  }
}

.story {
  max-width: 64ch;
  font-size: 1.125rem;
}

.signature {
  margin-top: 1.5em;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
}

blockquote {
  margin: 1.75em 0;
  padding: 0.25em 0 0.25em 1.25em;
  border-left: 3px solid var(--marker);
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: -0.01em;
}

.folders {
  position: sticky;
  top: 24px;
  padding: 24px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

dl {
  margin: 0;
}

.totals {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding-bottom: 20px;
  margin-bottom: 12px;
  border-bottom: 1px solid var(--line);

  div {
    display: flex;
    flex-direction: column-reverse;
  }

  dd {
    margin: 0;
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 1.75rem;
    letter-spacing: -0.03em;
    line-height: 1.1;
  }

  dt {
    color: var(--muted);
    font-size: 0.8125rem;
  }
}

.counters div {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 8px 0;
  font-size: 0.9375rem;

  & + div {
    border-top: 1px dashed var(--line);
  }

  dd {
    margin: 0;
    min-width: 2.5em;
    padding: 0 0.6em;
    border-radius: 999px;
    background: var(--surface-sunken);
    border: 1px solid var(--line);
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    font-weight: 500;
    text-align: center;
  }
}

.note {
  margin: 16px 0 0;
  color: var(--muted);
  font-size: 0.8125rem;
}
</style>
