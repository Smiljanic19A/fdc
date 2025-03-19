<template>
  <div id="app">
    <InitialLoader v-if="showLoader" @animation-complete="hideLoader" />
    <header>
      <div class="logo-container">
        <img src="/logo.png" alt="Full Degen Coin Logo" class="logo">
        <h1>Full Degen Coin</h1>
      </div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/tokenomics">Tokenomics</router-link>
        <!-- <router-link to="/roadmap">Roadmap</router-link> -->
        <a href="#" class="buy-button" @click.prevent="connectWallet">{{ walletButtonText }}</a>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <p>&copy; 2023 Full Degen Coin. All rights reserved.</p>
      <div class="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Telegram</a>
      </div>
    </footer>
  </div>
</template>

<script>
import InitialLoader from './components/InitialLoader.vue'

export default {
  name: 'App',
  components: {
    InitialLoader
  },
  data() {
    return {
      showLoader: true
    }
  },
  computed: {
    walletButtonText() {
      return this.$store.state.walletButtonText;
    }
  },
  mounted() {
    if (localStorage.getItem('walletConnected') === 'true') {
      this.$store.dispatch('connectWallet');
    }
  },
  methods: {
    connectWallet() {
      this.$store.dispatch('connectWallet');
    },
    hideLoader() {
      this.showLoader = false
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #121212;
  color: #ffffff;
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #1a1a1a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  margin-right: 1rem;
}

h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f0c225; /* Updated from #f7931a to gold/yellow */
}

nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

nav a:hover {
  color: #f0c225; /* Updated from #f7931a to gold/yellow */
}

nav a.router-link-exact-active {
  color: #f0c225; /* Updated from #f7931a to gold/yellow */
}

.buy-button {
  background-color: #a627a8; /* Updated from #f7931a to purple */
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 700;
  transition: all 0.3s;
}

.buy-button:hover {
  background-color: #f0c225; /* Updated from #ffffff to gold/yellow */
  color: #000000;
  transform: translateY(-2px);
}

main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

footer {
  background-color: #1a1a1a;
  padding: 1.5rem 2rem;
  text-align: center;
  margin-top: auto;
}

.social-links {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-links a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #f0c225; /* Updated from #f7931a to gold/yellow */
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    padding: 1rem;
  }
  
  .logo-container {
    margin-bottom: 1rem;
  }
  
  nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
