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
      state.walletButtonText = wallet ? 'Disconnect Wallet' : 'Connect Wallet';
    },
    setProvider(state, provider) {
      state.provider = provider;
    }
  },
  actions: {
    // Call this action on app load to update state if Phantom is already connected
    initializeWallet({ commit }) {
      if (window.phantom?.solana && window.phantom.solana.isConnected) {
        const provider = window.phantom.solana;
        commit('setProvider', provider);
        commit('setWallet', provider.publicKey.toString());
        localStorage.setItem('walletConnected', 'true');
      }
    },
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
        
        // Detect mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        // Mobile deep linking: redirect to Phantom's connect URL scheme.
        if (isMobile) {
          const dappUrl = encodeURIComponent(window.location.href);
          const phantomConnectUrl = `https://phantom.app/ul/v1/connect?app_url=${dappUrl}&redirect_url=${dappUrl}`;
          window.location.href = phantomConnectUrl;
          return;
        }

        // Desktop flow: Check if Phantom is installed
        if (!window.phantom?.solana) {
          window.open('https://phantom.app/', '_blank');
          alert('Please install Phantom wallet from phantom.app');
          return;
        }

        const provider = window.phantom.solana;
        if (!provider.isPhantom) {
          window.open('https://phantom.app/', '_blank');
          alert('Please install Phantom wallet from phantom.app');
          return;
        }

        // Set up event listeners so that when Phantom connects/disconnects, we update the store.
        provider.on('connect', () => {
          // Phantom does not pass publicKey in the event so use provider.publicKey
          commit('setWallet', provider.publicKey.toString());
          localStorage.setItem('walletConnected', 'true');
        });
        provider.on('disconnect', () => {
          commit('setWallet', null);
          localStorage.removeItem('walletConnected');
        });

        try {
          // Attempt to connect (this will trigger Phantom's connection prompt)
          const resp = await provider.connect();
          // When the user approves, the 'connect' event will fire.
          const publicKey = resp.publicKey.toString();
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
  modules: {}
});
