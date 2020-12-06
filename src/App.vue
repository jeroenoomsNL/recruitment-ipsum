<template>
  <div>
    <header>
      <nav>
        <div class="nav-wrapper">
          <h1>
            <router-link :to="{ name: 'Home' }" title="Recruitment Ipsum"
              >Recruitment Ipsum</router-link
            >
          </h1>
          <ul>
            <li>
              <router-link
                :to="{ name: 'MessageGenerator' }"
                title="Recruitment mail generator for recruiters"
                >Message generator
                <span class="long-link-text">for recruiters</span
                ><span class="new-flag">new</span></router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'About' }"
                title="About Recruitment Ipsum"
                >About
                <span class="long-link-text"
                  >Recruitment Ipsum</span
                ></router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <router-view />
    <footer>
      <p>
        Created by
        <a href="https://twitter.com/jeroenooms" target="_blank"
          ><span>Jeroen Ooms</span> <i class="fab fa-twitter"></i
        ></a>
        with
        <a href="https://vuejs.org" target="_blank"
          ><span>Vue.js</span> <i class="fab fa-vuejs"></i></a
        >,
        <a href="https://fontawesome.com/" target="_blank"
          ><span>Font Awesome</span> <i class="fab fa-font-awesome-flag"></i
        ></a>
        and
        <a href="https://pexels.com/" target="_blank"
          ><span>Pexels</span> <i class="fas fa-image"></i
        ></a>
      </p>
      <p>
        View the source code on
        <a
          href="https://github.com/jeroenoomsNL/recruitment-ipsum"
          target="_blank"
          ><span>Github</span> <i class="fab fa-github"></i
        ></a>
      </p>
      <p>
        Special thanks to all those creative recruiters out there!
        <i class="fas fa-heart"></i>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
body {
  background: #dddfd4;
  color: #173e43;
  margin: 0;
  line-height: 1.4;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

a {
  color: #173e43;
  font-weight: bold;
}

h2 {
  font-size: 2em;
  margin-top: 0;
}

blockquote {
  font-family: Georgia, Source Serif Pro, serif;
  font-style: italic;
  font-size: 1.2em;
  max-width: 70%;
  margin: 2em auto;
  text-align: center;
}

header {
  background-color: #173e43;
  background: url("./assets/background.jpg");
  background-size: cover;
  height: 200px;

  @media (min-width: 900px) {
    height: 500px;
  }
}

nav {
  background-color: #3fb0ac;
  border-bottom: 1px solid darken(#3fb0ac, 8);

  .nav-wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px;
    max-width: 900px;
  }

  h1 {
    font-size: 1rem;

    @media (min-width: 900px) {
      font-size: 1.5rem;
    }
  }

  h1,
  ul {
    color: #f1f1f1;
    display: inline-block;
    margin: 0;

    a {
      color: white;
      text-decoration: none;
      white-space: nowrap;
    }
  }

  ul {
    list-style: none;
    font-size: 0.8em;
    padding: 0;

    @media (min-width: 375px) {
      display: flex;
    }

    a {
      font-weight: normal;

      .new-flag {
        background: #fae596;
        color: #173e43;
        display: none;
        font-size: 8px;
        margin-left: 0.5em;
        border-radius: 3px;
        padding: 4px 2px 2px;
        text-transform: uppercase;
        line-height: 1;
        font-family: Helvetica, sans-serif;
        font-weight: normal;

        @media (min-width: 900px) {
          display: inline-block;
        }
      }

      &.router-link-active {
        font-weight: bold;
      }
    }

    li {
      margin-left: 3em;
      margin-bottom: 1em;

      &:last-child {
        margin-bottom: 0;
      }

      @media (min-width: 375px) {
        margin-bottom: 0;
      }
    }

    .long-link-text {
      display: none;

      @media (min-width: 900px) {
        display: inline;
      }
    }
  }
}

section {
  margin: 4rem 0;
}

.page {
  @media (min-width: 900px) {
    margin-top: -250px;
  }
}

.container {
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  padding: 20px;
  position: relative;

  @media (min-width: 900px) {
    padding: 50px;
  }
}

h2 {
  font-size: 1.2em;
  line-height: 1.6;
  margin: 0 0 1em;

  @media (min-width: 900px) {
    font-size: 1.6em;
  }
}

.generator-heading {
  font-size: 1.2rem;
  margin-bottom: 1em;
  text-align: left;

  @media (min-width: 900px) {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;

    span {
      display: block;
    }
  }
}

.generator-explanation {
  margin: 0 auto 2em;

  @media (min-width: 900px) {
    max-width: 90%;
  }
}

footer {
  background: #173e43;
  color: white;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  max-width: 900px;

  @media (min-width: 900px) {
    margin-top: 30px;
    padding: 50px;
  }

  a {
    color: white;
    text-decoration: none;
    white-space: nowrap;

    span {
      text-decoration: underline;
    }
  }
}
</style>
