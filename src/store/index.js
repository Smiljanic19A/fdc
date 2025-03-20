import { createStore } from 'vuex'

export default createStore({
  state: {
    wallet: null,
    provider: null,
    walletButtonText: 'Connect Wallet'
  },
  getters: {
    isWalletConnected: state => !!state.wallet
  },
  mutations: {
    setWallet(state, wallet) {
      state.wallet = wallet;
      // Update button text based on wallet state
      if (wallet) {
        state.walletButtonText = 'Disconnect Wallet';
      } else {
        state.walletButtonText = 'Connect Wallet';
      }
    },
    setProvider(state, provider) {
      state.provider = provider;
    }
  },
  actions: {
    async connectWallet({ commit, state }) {
      try {
        // First check if wallet is already connected
        if (state.provider && state.wallet) {
          // Try to disconnect
          try {
            await state.provider.disconnect();
          } catch (err) {
            console.log('Disconnect error:', err);
          }
          commit('setProvider', null);
          commit('setWallet', null);
          localStorage.removeItem('walletConnected');
          return;
        }

        // Check if on mobile
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        // Handle mobile deep linking
        if (isMobile) {
          // Check if Phantom is installed by trying to open it
          const phantomLink = 'https://phantom.app/ul/browse/';
          window.location.href = `${phantomLink}${window.location.href}`;
          return;
        }

        // Desktop flow continues as normal
        if (!window.phantom?.solana) {
          window.open('https://phantom.app/', '_blank');
          alert('Please install Phantom wallet from phantom.app');
          return;
        }

        // Get provider
        const provider = window.phantom?.solana;

        if (!provider?.isPhantom) {
          window.open('https://phantom.app/', '_blank');
          alert('Please install Phantom wallet from phantom.app');
          return;
        }

        try {
          // Connect to wallet
          const resp = await provider.connect();
          const publicKey = resp.publicKey.toString();

          // Store connection info
          commit('setProvider', provider);
          commit('setWallet', publicKey);
          localStorage.setItem('walletConnected', 'true');

        } catch (err) {
          if (err.code === 4001) {
            console.log('User rejected the connection');
          } else if (err.code === -32002) {
            alert('Connection request already pending. Please check your Phantom wallet.');
          } else {
            console.error('Connection error:', err);
            alert('Failed to connect to wallet. Please try again.');
          }
          commit('setWallet', null);
          localStorage.removeItem('walletConnected');
        }

      } catch (error) {
        console.error('Wallet setup error:', error);
        commit('setWallet', null);
        localStorage.removeItem('walletConnected');
      }
    }
  },
  modules: {
  }
})
