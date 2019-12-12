<template>
  <div id="subscribed-coins">
    <CryptoCoin
      v-for="crypto in subscribedCryptos"
      :key="crypto.name"
      :crypto="crypto"
    />
  </div>
</template>

<script src="./CryptoList.js"></script>
<style src="./CryptoList.css" scoped></style>
