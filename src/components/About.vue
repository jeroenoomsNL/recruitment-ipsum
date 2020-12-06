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

    <h2>Statistics</h2>
    <div class="stats">
      <div class="stat">
        <span class="number">{{ numLines }}</span
        ><span class="description">sentences</span>
      </div>
      <div class="stat">
        <span class="number">{{ numListItems }}</span
        ><span class="description">list items</span>
      </div>
      <div class="stat">
        <span class="number">{{ numReceived }}</span
        ><span class="description">received messages</span>
      </div>
      <div class="stat">
        <span class="number">{{ numReplied }}</span
        ><span class="description">replied messages</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      json: require("../assets/content.json"),
    };
  },
  created: function() {
    this.numLines = this.countLines();
    this.numListItems = this.countListItems();
    this.numReplied = this.repliedRecruiters();
    this.numReceived = this.receivedRecruiters();
  },
  methods: {
    countLines() {
      return [
        ...this.json["en"]["openers"],
        ...this.json["en"]["closers"],
        ...this.json["en"]["sentences"],
        ...this.json["nl"]["openers"],
        ...this.json["nl"]["closers"],
        ...this.json["nl"]["sentences"],
      ].length;
    },
    countListItems() {
      return [...this.json["en"]["listitems"], ...this.json["nl"]["listitems"]]
        .length;
    },
    receivedRecruiters() {
      return Math.round(this.numLines / 2);
    },
    repliedRecruiters() {
      return Math.round(this.numLines / 6);
    },
  },
};
</script>

<style lang="scss" scoped>
.stats {
  display: flex;

  .stat {
    flex: 1 1 25%;
    text-align: center;

    .number {
      font-weight: bold;
      font-size: 2rem;
      display: block;
    }
  }
}
</style>
