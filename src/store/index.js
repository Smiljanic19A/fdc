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
      state.walletButtonText = wallet ? 'Disconnect Wallet' : 'Connect Wallet';
    },
    setProvider(state, provider) {
      state.provider = provider;
    }
  },
  actions: {
    async connectWallet({ commit, state }) {
      try {
        // If already connected, disconnect first
        if (state.provider && state.wallet) {
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

        // Determine if the user is on mobile
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        // Handle mobile deep linking using Phantom's URL scheme
        if (isMobile) {
          const dappUrl = encodeURIComponent(window.location.href);
          const phantomConnectUrl = `https://phantom.app/ul/v1/connect?app_url=${dappUrl}&redirect_url=${dappUrl}`;
          window.location.href = phantomConnectUrl;
          return;
        }

        // For desktop, verify that Phantom is installed
        if (!window.phantom?.solana) {
          window.open('https://phantom.app/', '_blank');
          alert('Please install Phantom wallet from phantom.app');
          return;
        }

        const provider = window.phantom.solana;

        // Check if the provider is indeed Phantom
        if (!provider.isPhantom) {
          window.open('https://phantom.app/', '_blank');
          alert('Please install Phantom wallet from phantom.app');
          return;
        }

        try {
          // Trigger the connection prompt
          const resp = await provider.connect();
          const publicKey = resp.publicKey.toString();

          // Save the provider and wallet details
          commit('setProvider', provider);
          commit('setWallet', publicKey);
          localStorage.setItem('walletConnected', 'true');
        } catch (err) {
          // Handle known error codes
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
  modules: {}
});
