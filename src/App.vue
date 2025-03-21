<template>
  <div id="app">
    <InitialLoader v-if="showLoader" @animation-complete="hideLoader" />
    <header>
      <div class="logo-container">
        <img src="/logo.png" alt="Full Degen Coin Logo" class="logo">
        <h1>Full Degen Coin</h1>
      </div>
      <div class="menu-toggle" @click="toggleNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="nav-overlay" :class="{ active: isNavOpen }" @click="closeNav"></div>
      <nav :class="{ active: isNavOpen }">
        <router-link to="/" @click="closeNav">Home</router-link>
        <router-link to="/about" @click="closeNav">About</router-link>
        <router-link to="/tokenomics" @click="closeNav">Tokenomics</router-link>
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
      showLoader: true,
      isNavOpen: false
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
    },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
      document.body.style.overflow = this.isNavOpen ? 'hidden' : '';
    },
    closeNav() {
      this.isNavOpen = false;
      document.body.style.overflow = '';
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

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1000;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #ffffff;
  transition: all 0.3s;
}

.nav-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 98;
}

.nav-overlay.active {
  display: block;
}

@media (max-width: 768px) {
  header {
    flex-direction: row;
    padding: 1rem;
    position: relative;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  nav {
    position: fixed;
    top: 0;
    right: -280px;
    width: 280px;
    height: 100vh;
    background-color: #1a1a1a;
    flex-direction: column;
    padding: 80px 2rem 2rem;
    transition: right 0.3s ease;
    z-index: 99;
  }
  
  nav.active {
    right: 0;
  }
  
  nav a {
    margin: 1rem 0;
  }
  
  .logo-container {
    margin-bottom: 0;
  }
}
</style>
