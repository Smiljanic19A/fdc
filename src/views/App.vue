<script>
export default {
  name: 'App',
  computed: {
    walletButtonText() {
      return this.$store.state.walletButtonText;
    }
  },
  mounted() {
    if (localStorage.getItem('walletConnected') === 'true') {
      setTimeout(() => {
        this.$store.dispatch('connectWallet');
      }, 500);
    }
  },
  methods: {
    connectWallet() {
      this.$store.dispatch('connectWallet');
    }
  }
}
</script> 