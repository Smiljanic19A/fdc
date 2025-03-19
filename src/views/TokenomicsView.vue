<template>
  <div class="tokenomics">
    <section class="tokenomics-hero">
      <h1>Tokenomics</h1>
      <p class="subtitle">Understanding the Economics of Full Degen Coin</p>
    </section>

    <section class="tokenomics-section">
      <h2>Token Distribution</h2>
      <div class="distribution-container">
        <div class="distribution-chart">
          <canvas ref="tokenChart" width="400" height="400"></canvas>
        </div>
        <div class="distribution-details">
          <div class="distribution-item">
            <div class="color-indicator ci-1"></div>
            <div class="distribution-text">
              <h3>Treasury Management: 42.5%</h3>
              <p>425,000,000 FDC tokens for treasury and operational management</p>
            </div>
          </div>
          <div class="distribution-item">
            <div class="color-indicator ci-2"></div>
            <div class="distribution-text">
              <h3>Team: 30%</h3>
              <p>300,000,000 FDC tokens allocated to the team (vested over 2 years)</p>
            </div>
          </div>
          <div class="distribution-item">
            <div class="color-indicator ci-3"></div>
            <div class="distribution-text">
              <h3>Partnerships: 20%</h3>
              <p>200,000,000 FDC tokens for strategic partnerships</p>
            </div>
          </div>
          <div class="distribution-item">
            <div class="color-indicator ci-4"></div>
            <div class="distribution-text">
              <h3>Advertising: 5%</h3>
              <p>50,000,000 FDC tokens for marketing and advertising initiatives</p>
            </div>
          </div>
          <div class="distribution-item">
            <div class="color-indicator ci-5"></div>
            <div class="distribution-text">
              <h3>Ecosystem Rewards: 2.5%</h3>
              <p>25,000,000 FDC tokens for ecosystem development and rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tokenomics-section alt-bg">
      <h2>Transaction Taxes</h2>
      <p class="section-intro">Full Degen Coin implements a strategic tax system on each transaction to support the ecosystem's growth and reward holders.</p>
      
      <div class="tax-cards">
        <div class="tax-card">
          <div class="tax-percentage">5%</div>
          <h3>Reflection to Holders</h3>
          <p>5% of every transaction is redistributed to all FDC holders proportional to their holdings, rewarding long-term investors.</p>
        </div>
        <div class="tax-card">
          <div class="tax-percentage">2.5%</div>
          <h3>Liquidity Pool</h3>
          <p>2.5% of every transaction is added to the liquidity pool, ensuring stable trading and increasing the price floor over time.</p>
        </div>
        
      </div>
    </section>

    <section class="tokenomics-section">
      <h2>Token Utility</h2>
      <div class="utility-grid">
        <div class="utility-card">
          <div class="utility-icon">🏆</div>
          <h3>Governance</h3>
          <p>Use your FDC tokens to vote on important project decisions and proposals.</p>
        </div>
        <div class="utility-card">
          <div class="utility-icon">🔒</div>
          <h3>NFT Access</h3>
          <p>Hold FDC tokens to gain exclusive access to limited NFT drops and collections.</p>
        </div>
        <div class="utility-card">
          <div class="utility-icon">🎮</div>
          <h3>Play-to-Earn</h3>
          <p>Use FDC tokens in our upcoming play-to-earn games and metaverse projects.</p>
        </div>
      </div>
    </section>

    <section class="tokenomics-section">
      <h2>Token Details</h2>
      <div class="token-details">
        <div class="detail-item">
          <h3>Token Name</h3>
          <p>Full Degen Coin</p>
        </div>
        <div class="detail-item">
          <h3>Token Symbol</h3>
          <p>FDC</p>
        </div>
        <div class="detail-item">
          <h3>Total Supply</h3>
          <p>1,000,000,000 FDC</p>
        </div>
        <div class="detail-item">
          <h3>Blockchain</h3>
          <p>Binance Smart Chain (BSC)</p>
        </div>
      
        <div class="detail-item">
          <h3>Decimals</h3>
          <p>18</p>
        </div>
      </div>
      <div class="contract-address">
        <h3>Contract Address</h3>
        <div class="address-box">
          <p class="address">0x1234...5678</p>
          <button class="copy-btn">Copy</button>
        </div>
      </div>
    </section>

    <section class="tokenomics-section">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-container">
        <div class="faq-item">
          <h3>What makes Full Degen Coin different from other tokens?</h3>
          <p>FDC is a coin built for the trenches by the trenches. We refuse to lose - refuse to lose our money, refuse to lose our time, refuse to lose our community. We are a community coin, built by the community, for the community.</p>
        </div>
        <div class="faq-item">
          <h3>How do I earn passive income with FDC?</h3>
          <p>Simply by holding FDC tokens in your wallet, you automatically receive a portion of the 5% reflection fee from every transaction, proportional to your holdings.</p>
        </div>
        <div class="faq-item">
          <h3>Is the liquidity pool locked?</h3>
          <p>Yes, the initial liquidity pool is locked for 2 years to ensure stability and build trust with our community. The LP tokens are permanently burned.</p>
        </div>
        <div class="faq-item">
          <h3>How can I participate in governance?</h3>
          <p>FDC holders can vote on proposals through our governance portal, which will be launched in Q3 2023. Voting power is proportional to token holdings.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'TokenomicsView',
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const ctx = this.$refs.tokenChart.getContext('2d')
      
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Treasury Management', 'Team', 'Partnerships', 'Advertising', 'Ecosystem Rewards'],
          datasets: [{
            data: [42.5, 30, 20, 5, 2.5],
            backgroundColor: [
              '#e01a4f', // Treasury Management - Red
              '#545776', // Blue
              '#dddef2', // Yellow
              '#f1e940', // Light Blue
              '#66ff66'  // Dark Blue
            ],
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            hoverOffset: 20
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: true,
              bodyFont: {
                size: 40,
                weight: 'bold'
              },
              padding: 20,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              titleFont: {
                size: 40
              },
              callbacks: {
                label: (context) => {
                  const value = context.raw
                  return `${value}%`
                }
              }
            }
          },
          animation: {
            animateRotate: true,
            animateScale: true,
            duration: 1000,
            easing: 'easeInOutQuart'
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.tokenomics {
  color: #ffffff;
}

.tokenomics-hero {
  text-align: center;
  padding: 4rem 0;
  position: relative;
}

.tokenomics-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #a627a8, #9bf6fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
}

.tokenomics-section {
  padding: 4rem 0;
}

.alt-bg {
  background-color: rgba(166, 39, 168, 0.05);
  border-radius: 10px;
  margin: 2rem 0;
}

.tokenomics-section h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.tokenomics-section h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #a627a8, #9bf6fd);
  border-radius: 2px;
}

.section-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Distribution Chart */
.distribution-container {
  display: flex;
  align-items: flex-start;
  gap: 6rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  padding: 40px;
}

.distribution-chart {
  flex: 1;
  min-width: 400px;
  margin-right: 60px;
  height: 400px;
  position: relative;
  transform: perspective(1000px) rotateX(30deg);
  transform-style: preserve-3d;
  filter: drop-shadow(0 20px 20px rgba(0, 0, 0, 0.3));
}

canvas {
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

canvas:hover {
  transform: scale(0.95);
}

.distribution-details {
  flex: 1;
  min-width: 300px;
  margin-top: 20px;
}

.distribution-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.color-indicator {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: 12px;
}

.ci-1 { background-color: #e01a4f; } /* Treasury Management - Red */
.ci-2 { background-color: #545776; } /* Team - Blue */
.ci-3 { background-color: #dddef2; } /* Partnerships - Yellow */
.ci-4 { background-color: #f1e940; } /* Advertising - Light Blue */
.ci-5 { background-color: #66ff66; } /* Ecosystem Rewards - Dark Blue */

.distribution-text h3 {
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
  color: #ffffff;
  font-weight: 500;
}

.distribution-text p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4px;
}

/* Tax Cards */
.tax-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.tax-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.tax-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.tax-percentage {
  font-size: 3rem;
  font-weight: 700;
  color: #f0c225;
  margin-bottom: 1rem;
}

.tax-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.tax-card p {
  line-height: 1.6;
}

/* Utility Grid */
.utility-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.utility-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.utility-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.08);
}

.utility-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.utility-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f0c225;
}

/* Deflationary Mechanism */
.deflationary-content {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;
}

.deflationary-text {
  flex: 2;
}

.deflationary-text p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.deflationary-list {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

.deflationary-list li {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.highlight {
  color: #f0c225;
  font-weight: 600;
}

.deflationary-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.burn-animation {
  position: relative;
  width: 150px;
  height: 150px;
  background-color: rgba(166, 39, 168, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.coin-icon {
  font-size: 4rem;
  animation: burn 3s infinite;
}

@keyframes burn {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Token Details */
.token-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.detail-item {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
}

.detail-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #f0c225;
}

.contract-address {
  margin-top: 3rem;
  text-align: center;
}

.contract-address h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f0c225;
}

.address-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.address {
  font-family: monospace;
  font-size: 1.1rem;
}

.copy-btn {
  background-color: #a627a8;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.copy-btn:hover {
  background-color: #f0c225;
  transform: translateY(-2px);
}

/* Vesting Timeline */
.vesting-timeline {
  max-width: 800px;
  margin: 3rem auto 0;
  position: relative;
}

.vesting-timeline:before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #a627a8, #9bf6fd);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.timeline-point {
  width: 20px;
  height: 20px;
  background-color: #a627a8;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.timeline-content {
  width: 300px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  position: relative;
  text-align: center;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-right: 50%;
  margin-left: 2rem;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: 50%;
  margin-right: 2rem;
}

.timeline-content h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #f0c225;
}

/* FAQ Section */
.faq-container {
  max-width: 800px;
  margin: 2rem auto 0;
}

.faq-item {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.faq-item h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #f0c225;
}

.faq-item p {
  line-height: 1.6;
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .distribution-container {
    flex-direction: column;
  }
  
  .deflationary-content {
    flex-direction: column;
  }
  
  .vesting-timeline:before {
    left: 20px;
  }
  
  .timeline-point {
    left: 20px;
  }
  
  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    margin-left: 50px;
    margin-right: 0;
    width: calc(100% - 70px);
  }
}

@media (max-width: 768px) {
  .tokenomics-hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .distribution-container {
    padding: 20px;
    gap: 2rem;
  }

  .distribution-chart {
    min-width: unset;
    width: 100%;
    margin-right: 0;
    height: 400px;
    transform: perspective(1000px) rotateX(30deg) scale(0.9);
  }
  
  .tax-cards {
    flex-direction: column;
    align-items: center;
  }
  
  .tax-card {
    width: 100%;
  }
  
  .address-box {
    flex-direction: column;
  }
  
  .color-indicator {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    margin-right: 20px;
  }

  .distribution-text h3 {
    font-size: 1.2rem;
  }
}
</style> 