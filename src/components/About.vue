<template>
  <div class="container page">
    <h2>The story behind Recruitment Ipsum</h2>

    <p>
      In 2011 I started working at a consultancy company as a Front-end
      Developer. Since the first week, I immediately got lots of messages from
      recruiters to convince me that the grass is greener somewhere else.
      Frontend developers are hot, they say...
    </p>

    <p>
      After a couple of years I realized that I still have all those messages
      received by e-mail and LinkedIn in my inbox. Some of them are absolutely
      brilliant! But what to do with it? Well, I created a tool to create random
      placeholder text just like
      <a href="http://lipsum.com" title="Lorem Ipsum">Lorem Ipsum</a>. A lot of
      designers and developers use it when they don't have all the content they
      need. And, of course, we need a name for the random recruitment bingo,
      it's called:
      <a
        href="http://recruitmentipsum.com"
        title="Recruitment Ipsum"
        target="_blank"
        >Recruitment Ipsum!</a
      >
    </p>

    <p>
      The Recruitment Ipsum text is based on all the recruitment e-mails I've
      ever received. I didn't change the text at all. I only removed names of
      companies and recruiters and left the typo's for extra entertainment. The
      Recruitment Ipsum tool will randomize the sentences. This will give
      awesome results like:
    </p>

    <blockquote>
      Recruitment ipsum first of all I want to apologise for contacting you
      randomly out of the blue. Now this will sound a little generic because
      every man and his dog will tell you there looking for a guy with a set of
      skills like yours?
    </blockquote>

    <p>
      I also received some beauties in Dutch. So I made a Dutch version of
      Recruitment Ipsum too. It will look like this:
    </p>

    <blockquote>
      Recruitment ipsum ik weet dat je me niet kent, maar zou jij misschien
      contact met me op kunnen nemen via onderstaand nummer? Kom toch man! Je
      krijgt er een spijtgarantie-certificaat bij van mij. Je zult ongetwijfeld
      constant gebombardeerd worden met berichten, echter ik zal je vertellen
      waarom dit het bericht is dat telt. Wij hebben geen concurrenten.
    </blockquote>

    <p>
      I hope you enjoy Recruitment Ipsum, even if you are a recruiter. And if
      you are a recruiter, feel free to contact me. But maybe your message will
      be used in Recruitment Ipsum ;-)
    </p>

    <section>
      <h2>Statistics</h2>

      <p>
        These are some statistics about the content that Recruitment Ipsum
        contains.
      </p>

      <div class="stats">
        <div class="stat">
          <span class="number">{{ countWords() }}</span
          ><span class="description">words</span>
        </div>
        <div class="stat">
          <span class="number">{{ countLines() }}</span
          ><span class="description">sentences</span>
        </div>
        <div class="stat">
          <span class="number">{{ countListItems() }}</span
          ><span class="description">list items</span>
        </div>
        <div class="stat">
          <span class="number">{{ countStartsWithI() }}</span
          ><span class="description">sentences starting with "I"</span>
        </div>
        <div class="stat">
          <span class="number">{{ countWordsInContent(["?"]) }}</span
          ><span class="description">questions</span>
        </div>
        <div class="stat">
          <span class="number">{{ countWordsInContent(["!"]) }}</span
          ><span class="description">exclamation marks</span>
        </div>
        <div class="stat">
          <span class="number">{{
            countWordsInContent(["interesting", "interessant"])
          }}</span
          ><span class="description">"interesting" mentions </span>
        </div>
        <div class="stat">
          <span class="number">{{
            countWordsInContent([
              "your profile",
              "interesting profile",
              "je profiel",
              "jouw profiel",
              "interessant profiel",
            ])
          }}</span
          ><span class="description">"your profile" mentions</span>
        </div>
        <div class="stat">
          <span class="number">{{
            countWordsInContent([
              "opportunity",
              "opportunities",
              "challenge",
              "challenges",
              "uitdaging",
              "mogelijkheid",
              "mogelijkheden",
            ])
          }}</span
          ><span class="description">"opportunity" mentions</span>
        </div>
        <div class="stat">
          <span class="number">{{
            countWordsInContent(["coffee", "koffie"])
          }}</span
          ><span class="description">coffee mentions</span>
        </div>
        <div class="stat">
          <span class="number">{{
            countWordsInContent(["scrum", "agile"])
          }}</span
          ><span class="description">agile mentions</span>
        </div>
        <div class="stat">
          <span class="number">{{ countWordsInContent(["tesla"]) }}</span
          ><span class="description">Tesla mentions</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      json: require("../assets/content.json"),
    };
  },
  methods: {
    getContent(options) {
      const content = [
        ...this.json["en"]["openers"],
        ...this.json["en"]["closers"],
        ...this.json["en"]["sentences"],
        ...this.json["nl"]["openers"],
        ...this.json["nl"]["closers"],
        ...this.json["nl"]["sentences"],
      ];

      if (options?.listitems) {
        content.push(...this.json["nl"]["listitems"]);
        content.push(...this.json["en"]["listitems"]);
      }
      return content;
    },
    countWordsInContent(queries) {
      const content = this.getContent({ listitems: true });
      const matches = content.filter((sentence) => {
        let match = false;
        queries.forEach((query) => {
          if (sentence.toLowerCase().includes(query.toLowerCase()))
            match = true;
        });
        return match;
      });
      return new Intl.NumberFormat("en").format(matches.length);
    },
    countLines() {
      const content = this.getContent();
      return new Intl.NumberFormat("en").format(content.length);
    },
    countListItems() {
      const count = [
        ...this.json["en"]["listitems"],
        ...this.json["nl"]["listitems"],
      ].length;
      return new Intl.NumberFormat("en").format(count);
    },
    countWords() {
      const content = this.getContent({ listitems: true });
      const words = content.join(" ").split(" ");
      return new Intl.NumberFormat("en").format(words.length);
    },
    countStartsWithI() {
      const content = this.getContent({ listitems: true });
      const startsWithI = content.filter(
        (sentence) => sentence.startsWith("I ") || sentence.startsWith("Ik ")
      );
      return new Intl.NumberFormat("en").format(startsWithI.length);
    },
  },
};
</script>

<style lang="scss" scoped>
.stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 0;

  .stat {
    padding: 1rem;
    border: 1px solid #3fb0ac;
    flex: 0 0 30%;
    margin-bottom: 2rem;
    text-align: center;
    border-radius: 10px;

    .number {
      font-weight: bold;
      font-size: 1.4rem;
      display: block;
      margin-bottom: 0.5rem;

      @media (min-width: 900px) {
        font-size: 2rem;
      }
    }

    .description {
      font-size: 0.7rem;
      display: block;

      @media (min-width: 900px) {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
