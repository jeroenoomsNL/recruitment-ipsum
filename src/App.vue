<template>
  <div id="app">
    <header>
      <nav>
        <div class="nav-wrapper">
          <h1><a href="/#/" title="Recruitment Ipsum">Recruitment Ipsum</a></h1>
          <ul>
            <li><a href="/#/about" title="About Recruitment Ipsum">About <span class="long-about">Recruitment Ipsum</span></a></li>
          </ul>
        </div>
      </nav>
    </header>
    <router-view/>
    <footer>
      <p>
        Created by <a href="https://twitter.com/jeroenooms" target="_blank"><span>Jeroen Ooms</span> <i class="fab fa-twitter"></i></a> with 
        <a href="https://vuejs.org" target="_blank"><span>Vue.js</span> <i class="fab fa-vuejs"></i></a>,
        <a href="https://fontawesome.com/" target="_blank"><span>Font Awesome</span> <i class="fab fa-font-awesome-flag"></i></a> and
        <a href="https://pexels.com/" target="_blank"><span>Pexels</span> <i class="fas fa-image"></i></a>
      </p>
      <p>View the source code on <a href="https://github.com/jeroenoomsNL/recruitment-ipsum" target="_blank"><span>Github</span> <i class="fab fa-github"></i></a></p>
      <p>Special thanks to all those creative recruiters out there! <i class="fas fa-heart"></i></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
body {
  background: #dddfd4;
  color: #173e43;
  margin: 0;
  line-height: 1.4;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

*:focus {
    outline: none;
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
  font-family: Georgia,Source Serif Pro,serif;
  font-style: italic;
  font-size: 1.2em;
  max-width: 70%;
  margin: 2em auto;
  text-align: center;
}

#app {

  header {
    background-color: #173e43; 

    @media (min-width: 900px) {
      background: url('./assets/background.jpg');
      background-size: cover;
      height: 500px;
    }
  }

  nav {
    background-color: #3fb0ac;
    border-bottom: 1px solid darken(#3fb0ac,8);

    .nav-wrapper {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      padding: 20px;
      max-width: 900px;
    }

    h1, ul {
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
      padding: 0;

      .long-about {
        display: none;

        @media (min-width: 900px) {
          display: inline;
        }
      }
    }
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
}
</style>
