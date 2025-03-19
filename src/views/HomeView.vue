<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Full Degen Coin</h1>
        <p class="tagline">The Ultimate Cryptocurrency for True Degens</p>
        <div class="cta-buttons">
          <a href="#" class="primary-btn" @click.prevent="connectWallet">{{ walletButtonText }}</a>
          <!--a href="#" class="secondary-btn">View Whitepaper</a> -->
        </div>
      </div>
      <div class="hero-image">
        <img src="/logo_transparent.png" alt="Full Degen Coin" class="coin-logo">
        <div class="glow-effect"></div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Why Choose Full Degen Coin?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Moon Potential</h3>
          <p>Designed for explosive growth with our innovative tokenomics model.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">👥</div>
          <h3>Built for the trenches</h3>
          <p>Built for the trenches by the trenches - we will defend this shit</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💰</div>
          <h3>GM</h3>
          <p>Get money just by HODL-ing with our reward mechanisms</p>
        </div>
      </div>
    </section>

    <!-- FBGM Button -->
    <div class="fbgm-container">
      <button class="fbgm-btn" @click="showFbgmModal = true">FBGM</button>
    </div>

    <!-- Tokenomics Preview -->
    <section class="tokenomics-preview">
      <h2>Tokenomics at a Glance</h2>
      <div class="tokenomics-cards">
        <div class="tokenomics-card">
          <h3>1 Billion</h3>
          <p>Total Supply</p>
        </div>
        <div class="tokenomics-card">
          <h3>42.5%</h3>
          <p>Treasury Management</p>
        </div>
        <div class="tokenomics-card">
          <h3>2.5%</h3>
          <p>Community Rewards</p>
        </div>
        <div class="tokenomics-card">
          <h3>20%</h3>
          <p>Partnerships</p>
        </div>
      </div>
      <router-link to="/tokenomics" class="learn-more">Learn More About Tokenomics</router-link>
    </section>

    <!-- How to Buy Section -->
    <section class="how-to-buy">
      <h2>How to Buy Full Degen Coin</h2>
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Create Wallet</h3>
          <p>Download and set up Phantom</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Buy BNB/ETH</h3>
          <p>Purchase SOL from an exchange</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>Swap for FDC</h3>
          <p>Swap your SOL for Full Degen Coin</p>
        </div>
      </div>
      <a href="#" class="primary-btn" @click.prevent="connectWallet">{{ walletButtonText }}</a>
    </section>

    <!-- Community Section -->
    <section class="community">
      <h2>Join Our Community</h2>
      <p>Be part of the fastest growing crypto community. Connect with fellow degens and stay updated.</p>
      <div class="social-buttons">
        <a href="#" class="social-btn twitter">Twitter</a>
        <a href="#" class="social-btn telegram">Telegram</a>
      </div>
    </section>

    <!-- FBGM Modal -->
    <div v-if="showFbgmModal" class="modal-overlay" @click="showFbgmModal = false">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="showFbgmModal = false">×</button>
        <div class="modal-body game-container">
          <div class="game-world">
            <div class="score-container">
              <div class="score">Score: {{ score }}</div>
              <div class="high-score">High Score: {{ highScore || 'Set your high score!' }}</div>
            </div>
            
            <!-- Game Over Screen -->
            <div v-if="gameOver" class="game-over">
              <h2>GAME OVER</h2>
              <p>Final Score: {{ score }}</p>
              <p class="high-score-text" v-if="isNewHighScore">New High Score! 🏆</p>
              <button class="retry-btn" @click="startGame">Play Again</button>
            </div>

            <div 
              v-if="!gameOver"
              class="player" 
              :style="{ 
                left: playerX + 'px', 
                bottom: playerY + 'px',
                transform: `scaleX(${playerDirection})`
              }"
            >
              <img src="/lexa.png" alt="Player" class="player-sprite">
            </div>

            <div 
              v-for="(dollar, index) in dollars" 
              :key="'dollar-'+index" 
              class="dollar-sign"
              :style="{
                left: dollar.x + 'px',
                bottom: dollar.y + 'px'
              }"
            >
              <img class="dollar-sign" src="/logo_transparent.png">
            </div>

            <div 
              v-for="(lady, index) in ladies" 
              :key="'lady-'+index" 
              class="lady-bonus"
              :style="{
                left: lady.x + 'px',
                bottom: lady.y + 'px'
              }"
            >
              <img class="lady-bonus" src="/not boobs.png"/>
            </div>

            <div 
              v-for="(skull, index) in skulls" 
              :key="'skull-'+index" 
              class="skull-danger"
              :style="{
                left: skull.x + 'px',
                bottom: skull.y + 'px'
              }"
            >
              ☠️
            </div>

            <div class="ground"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      showFbgmModal: false,
      playerX: 50,
      playerY: 0,
      playerVelocityY: 0,
      playerDirection: 1,
      isJumping: false,
      gameLoop: null,
      score: 0,
      highScore: 0,
      isNewHighScore: false,
      gameOver: false,
      dollars: [],
      ladies: [],
      skulls: [],
      dollarSpawnTimer: null,
      ladySpawnTimer: null,
      skullSpawnTimer: null,
      difficultyLevel: 1,
      keys: {
        left: false,
        right: false,
        up: false
      },
      touchStartX: 0,
      touchStartY: 0,
      walletButtonText: 'Connect Wallet',
      provider: null,
      wallet: null,
    }
  },
  mounted() {
    // Load high score when component is mounted
    this.loadHighScore();
    
    // Check if wallet was previously connected
    if (localStorage.getItem('walletConnected') === 'true') {
      this.$nextTick(() => {
      this.connectWallet();
      });
    }
  },
  methods: {
    loadHighScore() {
      const savedHighScore = localStorage.getItem('fbgmHighScore');
      if (savedHighScore) {
        this.highScore = parseInt(savedHighScore);
      }
    },
    saveHighScore() {
      if (this.score > this.highScore) {
        this.highScore = this.score;
        localStorage.setItem('fbgmHighScore', this.score.toString());
        this.isNewHighScore = true;
      }
    },
    getDifficultyLevel() {
      return Math.floor(this.score / 20) + 1;
    },
    getRandomDiagonalAngle() {
      // Generate random diagonal angles based on difficulty
      const angles = [];
      const baseAngles = [-45, -30, 0, 30, 45];
      const difficulty = this.getDifficultyLevel();
      
      // Add more extreme angles as difficulty increases
      if (difficulty >= 3) angles.push(-60, 60);
      if (difficulty >= 4) angles.push(-75, 75);
      
      return baseAngles[Math.floor(Math.random() * baseAngles.length)] * (Math.PI / 180);
    },
    calculateVelocities(baseSpeed) {
      const angle = this.getRandomDiagonalAngle();
      return {
        vx: Math.sin(angle) * baseSpeed,
        vy: -Math.cos(angle) * baseSpeed
      };
    },
    startGame() {
      this.gameOver = false;
      this.isNewHighScore = false;
      this.setupEventListeners();
      this.gameLoop = requestAnimationFrame(this.updateGame);
      this.startDollarSpawning();
      this.startLadySpawning();
      this.startSkullSpawning();
      this.score = 0;
      this.dollars = [];
      this.ladies = [];
      this.skulls = [];
      this.playerX = 50;
      this.playerY = 0;
    },
    stopGame() {
      if (this.gameLoop) {
        cancelAnimationFrame(this.gameLoop);
      }
      if (this.dollarSpawnTimer) {
        clearInterval(this.dollarSpawnTimer);
      }
      if (this.ladySpawnTimer) {
        clearInterval(this.ladySpawnTimer);
      }
      if (this.skullSpawnTimer) {
        clearInterval(this.skullSpawnTimer);
      }
      this.removeEventListeners();
      this.resetGame();
    },
    resetGame() {
      this.playerX = 50;
      this.playerY = 0;
      this.playerVelocityY = 0;
      this.isJumping = false;
      this.dollars = [];
      this.ladies = [];
      this.skulls = [];
      this.score = 0;
      this.gameOver = false;
    },
    startDollarSpawning() {
      this.dollarSpawnTimer = setInterval(() => {
        this.spawnDollar();
      }, 2000); // Spawn a new dollar every 2 seconds
    },
    startLadySpawning() {
      this.ladySpawnTimer = setInterval(() => {
        this.spawnLady();
      }, 3000); // Spawn a new lady bonus every 3 seconds
    },
    startSkullSpawning() {
      this.skullSpawnTimer = setInterval(() => {
        const difficulty = this.getDifficultyLevel();
        const spawnInterval = Math.max(4000 - (difficulty * 500), 1500); // Decrease interval with difficulty, min 1.5s
        clearInterval(this.skullSpawnTimer);
        this.skullSpawnTimer = setInterval(() => this.spawnSkull(), spawnInterval);
        this.spawnSkull();
      }, 4000);
    },
    spawnDollar() {
      const worldWidth = 800;
      const worldHeight = 500;
      const difficulty = this.getDifficultyLevel();
      const baseSpeed = 2 + Math.random() * 2 + (difficulty * 0.5);
      const velocities = this.calculateVelocities(baseSpeed);
      
      this.dollars.push({
        x: Math.random() * (worldWidth - 30),
        y: worldHeight,
        vx: velocities.vx,
        vy: velocities.vy
      });
    },
    spawnLady() {
      const worldWidth = 800;
      const worldHeight = 500;
      const difficulty = this.getDifficultyLevel();
      const baseSpeed = 1.5 + Math.random() * 1.5 + (difficulty * 0.3);
      const velocities = this.calculateVelocities(baseSpeed);
      
      this.ladies.push({
        x: Math.random() * (worldWidth - 30),
        y: worldHeight,
        vx: velocities.vx,
        vy: velocities.vy
      });
    },
    spawnSkull() {
      const worldWidth = 800;
      const worldHeight = 500;
      const difficulty = this.getDifficultyLevel();
      const baseSpeed = 3 + Math.random() * 2 + (difficulty * 0.7);
      const velocities = this.calculateVelocities(baseSpeed);
      
      // Spawn multiple skulls based on difficulty
      const skullCount = Math.min(difficulty, 3); // Max 3 skulls at once
      
      for (let i = 0; i < skullCount; i++) {
        this.skulls.push({
          x: Math.random() * (worldWidth - 30),
          y: worldHeight,
          vx: velocities.vx,
          vy: velocities.vy
        });
      }
    },
    checkCollision(item) {
      const playerWidth = 60;
      const playerHeight = 60;
      const itemWidth = 30;
      const itemHeight = 30;

      return (
        this.playerX < item.x + itemWidth &&
        this.playerX + playerWidth > item.x &&
        this.playerY < item.y + itemHeight &&
        this.playerY + playerHeight > item.y
      );
    },
    setupEventListeners() {
      window.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('keyup', this.handleKeyUp);
      
      // Add touch event listeners
      const gameWorld = document.querySelector('.game-world');
      if (gameWorld) {
        gameWorld.addEventListener('touchstart', this.handleTouchStart);
        gameWorld.addEventListener('touchmove', this.handleTouchMove);
        gameWorld.addEventListener('touchend', this.handleTouchEnd);
      }
    },
    removeEventListeners() {
      window.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('keyup', this.handleKeyUp);
      
      // Remove touch event listeners
      const gameWorld = document.querySelector('.game-world');
      if (gameWorld) {
        gameWorld.removeEventListener('touchstart', this.handleTouchStart);
        gameWorld.removeEventListener('touchmove', this.handleTouchMove);
        gameWorld.removeEventListener('touchend', this.handleTouchEnd);
      }
    },
    handleKeyDown(event) {
      switch(event.key.toLowerCase()) {
        case 'arrowleft':
        case 'a':
          this.keys.left = true;
          this.playerDirection = -1;
          break;
        case 'arrowright':
        case 'd':
          this.keys.right = true;
          this.playerDirection = 1;
          break;
        case 'arrowup':
        case 'w':
        case ' ':
          if (!this.isJumping) {
            this.keys.up = true;
            this.playerVelocityY = 15;
            this.isJumping = true;
          }
          break;
      }
    },
    handleKeyUp(event) {
      switch(event.key.toLowerCase()) {
        case 'arrowleft':
        case 'a':
          this.keys.left = false;
          break;
        case 'arrowright':
        case 'd':
          this.keys.right = false;
          break;
        case 'arrowup':
        case 'w':
        case ' ':
          this.keys.up = false;
          break;
      }
    },
    handleTouchStart(event) {
      event.preventDefault(); // Prevent scrolling while playing
      const touch = event.touches[0];
      this.touchStartX = touch.clientX;
      this.touchStartY = touch.clientY;
      
      // Calculate initial swipe direction
      const deltaX = touch.clientX - this.touchStartX;
      const deltaY = touch.clientY - this.touchStartY;
      
      // Minimum swipe distance threshold
      const minSwipeDistance = 30;
      
      // Determine initial movement direction
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal movement
        if (deltaX > 0) {
          this.keys.right = true;
          this.playerDirection = 1;
        } else {
          this.keys.left = true;
          this.playerDirection = -1;
        }
      } else if (deltaY < -minSwipeDistance && !this.isJumping) {
        // Vertical movement (jump)
        this.keys.up = true;
        this.playerVelocityY = 15;
        this.isJumping = true;
      }
    },
    handleTouchMove(event) {
      event.preventDefault(); // Prevent scrolling while playing
      const touch = event.touches[0];
      const deltaX = touch.clientX - this.touchStartX;
      const deltaY = touch.clientY - this.touchStartY;
      
      // Minimum swipe distance threshold
      const minSwipeDistance = 30;
      
      // Update movement based on current touch position
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal movement
        if (deltaX > 0) {
          this.keys.right = true;
          this.keys.left = false;
          this.playerDirection = 1;
        } else {
          this.keys.left = true;
          this.keys.right = false;
          this.playerDirection = -1;
        }
      } else if (deltaY < -minSwipeDistance && !this.isJumping) {
        // Vertical movement (jump)
        this.keys.up = true;
        this.playerVelocityY = 15;
        this.isJumping = true;
      }
    },
    handleTouchEnd(event) {
      event.preventDefault(); // Prevent scrolling while playing
      // Reset all movement keys
      this.keys.left = false;
      this.keys.right = false;
      this.keys.up = false;
    },
    handleGameOver() {
      this.gameOver = true;
      this.saveHighScore();
      if (this.gameLoop) {
        cancelAnimationFrame(this.gameLoop);
      }
      if (this.dollarSpawnTimer) {
        clearInterval(this.dollarSpawnTimer);
      }
      if (this.ladySpawnTimer) {
        clearInterval(this.ladySpawnTimer);
      }
      if (this.skullSpawnTimer) {
        clearInterval(this.skullSpawnTimer);
      }
    },
    updateGame() {
      if (this.gameOver) return;

      // Movement speed
      const speed = 7;
      
      // Horizontal movement
      if (this.keys.left && this.playerX > 0) {
        this.playerX -= speed;
      }
      if (this.keys.right && this.playerX < 740) {
        this.playerX += speed;
      }
      
      // Gravity and jumping
      this.playerVelocityY -= 0.8;
      this.playerY += this.playerVelocityY;
      
      // Ground collision
      if (this.playerY <= 0) {
        this.playerY = 0;
        this.playerVelocityY = 0;
        this.isJumping = false;
      }

      // Update dollars with diagonal movement
      for (let i = this.dollars.length - 1; i >= 0; i--) {
        const dollar = this.dollars[i];
        dollar.x += dollar.vx;
        dollar.y += dollar.vy;

        if (this.checkCollision(dollar)) {
          this.score++;
          this.dollars.splice(i, 1);
          continue;
        }

        if (dollar.y < -30 || dollar.x < -30 || dollar.x > 830) {
          this.dollars.splice(i, 1);
        }
      }

      // Update ladies with diagonal movement
      for (let i = this.ladies.length - 1; i >= 0; i--) {
        const lady = this.ladies[i];
        lady.x += lady.vx;
        lady.y += lady.vy;

        if (this.checkCollision(lady)) {
          this.score += 2;
          this.ladies.splice(i, 1);
          continue;
        }

        if (lady.y < -30 || lady.x < -30 || lady.x > 830) {
          this.ladies.splice(i, 1);
        }
      }

      // Update skulls with diagonal movement
      for (let i = this.skulls.length - 1; i >= 0; i--) {
        const skull = this.skulls[i];
        skull.x += skull.vx;
        skull.y += skull.vy;

        if (this.checkCollision(skull)) {
          this.handleGameOver();
          return;
        }

        if (skull.y < -30 || skull.x < -30 || skull.x > 830) {
          this.skulls.splice(i, 1);
        }
      }
      
      this.gameLoop = requestAnimationFrame(this.updateGame);
    },
    async connectWallet() {
      try {
        // First check if wallet is already connected
        if (this.provider && this.wallet) {
          // Try to disconnect first
          try {
            await this.provider.disconnect();
          } catch (err) {
            console.log('Disconnect error:', err);
          }
          this.provider = null;
          this.wallet = null;
          this.walletButtonText = 'Connect Wallet';
          localStorage.removeItem('walletConnected');
          return;
        }

        // Check if Phantom is installed
        if (!('phantom' in window)) {
          alert('Phantom wallet is not installed! Please install it from phantom.app');
          window.open('https://phantom.app/', '_blank');
          return;
        }

        // Get provider
        const provider = window.phantom?.solana;

        if (!provider?.isPhantom) {
          alert('Phantom wallet is not installed! Please install it from phantom.app');
          window.open('https://phantom.app/', '_blank');
          return;
        }

        try {
          // Request connection to wallet with explicit network
          const resp = await provider.connect({
            onlyIfTrusted: false // This will always prompt the user
          });

          // Store connection info
          this.provider = provider;
          this.wallet = resp.publicKey.toString();
          this.walletButtonText = this.wallet.slice(0, 4) + '...' + this.wallet.slice(-4);
          localStorage.setItem('walletConnected', 'true');

        } catch (err) {
          if (err.code === 4001) {
            // User rejected the connection
            console.log('User rejected the connection');
          } else if (err.code === -32002) {
            // Connection request already pending
            alert('Connection request already pending. Please check your Phantom wallet.');
          } else {
            console.error('Connection error:', err);
            alert('Failed to connect to wallet. Please try again.');
          }
          this.walletButtonText = 'Connect Wallet';
          localStorage.removeItem('walletConnected');
        }

      } catch (error) {
        console.error('Wallet setup error:', error);
        this.walletButtonText = 'Connect Wallet';
        localStorage.removeItem('walletConnected');
      }
    },
  },
  watch: {
    showFbgmModal(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.startGame();
        });
      } else {
        this.stopGame();
      }
    }
  }
}
</script>

<style scoped>
.home {
  color: #ffffff;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  z-index: 2;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #a627a8, #9bf6fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.primary-btn, .secondary-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
}

.primary-btn {
  background-color: #a627a8;
  color: #ffffff;
}

.primary-btn:hover {
  background-color: #f0c225;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(166, 39, 168, 0.4);
}

.secondary-btn {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #a627a8;
}

.secondary-btn:hover {
  background-color: rgba(166, 39, 168, 0.1);
  transform: translateY(-3px);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease-out;
}

.coin-logo {
  max-width: 300px;
  animation: circleFloat 8s linear infinite;
  z-index: 2;
  transform-origin: center;
  transition: transform 0.3s ease-out;
}

.coin-logo:hover {
  transform: scale(1.2);
  background-color: #a526a6;
  border-radius: 18px
}

@keyframes circleFloat {
  0% {
    transform: rotate(0deg) translateX(30px) rotate(0deg);
  }
  25% {
    transform: rotate(90deg) translateX(30px) rotate(-90deg);
  }
  50% {
    transform: rotate(180deg) translateX(30px) rotate(-180deg);
  }
  75% {
    transform: rotate(270deg) translateX(30px) rotate(-270deg);
  }
  100% {
    transform: rotate(360deg) translateX(30px) rotate(-360deg);
  }
}

@keyframes circleFloatHover {
  0% {
    transform: rotate(0deg) translateX(40px) rotate(0deg) scale(1.2);
  }
  25% {
    transform: rotate(90deg) translateX(40px) rotate(-90deg) scale(1.2);
  }
  50% {
    transform: rotate(180deg) translateX(40px) rotate(-180deg) scale(1.2);
  }
  75% {
    transform: rotate(270deg) translateX(40px) rotate(-270deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) translateX(40px) rotate(-360deg) scale(1.2);
  }
}

/* Add glow effect on hover */
.hero-image:hover .glow-effect {
  background: radial-gradient(circle, rgba(166, 39, 168, 0.6) 0%, rgba(166, 39, 168, 0) 70%);
  transform: scale(1.2);
}

.glow-effect {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(166, 39, 168, 0.4) 0%, rgba(166, 39, 168, 0) 70%);
  border-radius: 50%;
  animation: pulse 4s ease-in-out infinite;
  transition: all 0.3s ease-out;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.3;
  }
}

/* Features Section */
.features {
  padding: 4rem 0;
  text-align: center;
}

.features h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
}

.features h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #a627a8, #9bf6fd);
  border-radius: 2px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.08);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f0c225;
}

/* Tokenomics Preview */
.tokenomics-preview {
  padding: 4rem 0;
  text-align: center;
  background-color: rgba(166, 39, 168, 0.05);
  border-radius: 10px;
  margin: 2rem 0;
}

.tokenomics-preview h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.tokenomics-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.tokenomics-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  min-width: 200px;
}

.tokenomics-card h3 {
  font-size: 2rem;
  color: #f0c225;
  margin-bottom: 0.5rem;
}

.learn-more {
  display: inline-block;
  margin-top: 1rem;
  color: #f0c225;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.learn-more:hover {
  color: #ffffff;
}

/* How to Buy Section */
.how-to-buy {
  padding: 4rem 0;
  text-align: center;
}

.how-to-buy h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.step {
  flex: 1;
  min-width: 200px;
  position: relative;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #a627a8;
  color: #ffffff;
  border-radius: 50%;
  font-weight: 700;
  margin: 0 auto 1rem;
}

.step h3 {
  margin-bottom: 0.5rem;
  color: #f0c225;
}

/* Community Section */
.community {
  padding: 4rem 0;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  margin: 2rem 0;
}

.community h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.community p {
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.social-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  min-width: 150px;
}

.twitter {
  background-color: #a627a8;
  color: #ffffff;
}

.telegram {
  background-color: #f0c225;
  color: #000000;
}

.discord {
  background-color: #9bf6fd;
  color: #000000;
}

.social-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .hero {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .cta-buttons {
    justify-content: center;
  }
  
  .coin-logo {
    max-width: 250px;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .tagline {
    font-size: 1.2rem;
  }
  
  .tokenomics-cards {
    flex-direction: column;
    align-items: center;
  }
  
  .tokenomics-card {
    width: 100%;
    max-width: 300px;
  }
}

/* FBGM Button */
.fbgm-container {
  text-align: center;
  margin: 2rem 0;
}

.fbgm-btn {
  padding: 1rem 2rem;
  background-color: #a627a8;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.2rem;
}

.fbgm-btn:hover {
  background-color: #f0c225;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(166, 39, 168, 0.4);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.modal-content {
  background-color: #1a1a1a;
  border-radius: 10px;
  position: relative;
  width: 80%;
  height: 50VH;
  overflow: hidden;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  padding: 5px 10px;
  z-index: 1002;
}

.modal-body {
  padding: 20px;
  height: 100%;
  overflow-y: auto;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .modal-content {
    width: 100%;
    height: calc(100vh - 60px); /* Assuming nav height is 60px */
    border-radius: 0;
  }
}

/* Game Styles */
.game-container {
  padding: 0;
  background-color: #000;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.game-world {
  width: 800px;
  height: 500px;
  position: relative;
  margin: 0 auto;
  background-color: #111;
  border: 2px solid #a627a8;
}

.score-container {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
}

.score {
  color: #f0c225;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 5px;
}

.high-score {
  color: #9bf6fd;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.high-score-text {
  color: #f0c225;
  font-size: 1.8rem;
  margin: 1rem 0;
  text-shadow: 0 0 10px rgba(240, 194, 37, 0.5);
  animation: pulse-highlight 1s ease-in-out infinite;
}

@keyframes pulse-highlight {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.dollar-sign {
  position: absolute;
  font-size: 24px;
  width: 60;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin 5s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.player {
  position: absolute;
  width: 90;
  height: 90px;
  transition: transform 0.1s;
}

.player-sprite {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.ground {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #a627a8;
}

/* Update Modal Styles */
.modal-content {
  width: 900px;
  height: 600px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90vw;
  max-height: 80vh;
}

@media (max-width: 768px) {
  .modal-content {
    width: 100%;
    height: calc(100vh - 60px);
    max-width: 100%;
    max-height: none;
  }
  
  .game-world {
    width: 100%;
    height: 100%;
  }
}

.lady-bonus {
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse-danger 1s ease-in-out infinite;
}


@keyframes float {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}

.skull-danger {
  position: absolute;
  font-size: 30px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse-danger 1s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(255, 0, 0, 0.7));
}

@keyframes pulse-danger {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.game-over {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid #ff0000;
  z-index: 1000;
}

.game-over h2 {
  color: #ff0000;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
}

.game-over p {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.retry-btn {
  background-color: #a627a8;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.retry-btn:hover {
  background-color: #f0c225;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(166, 39, 168, 0.4);
}
</style>
