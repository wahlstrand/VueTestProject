<template>
  <div id="coin-selector">
    <select v-model="selection" @change="addCrypto()">
      <option value="">SELECT CURRENCY TO ADD IT TO YOUR WATCH LIST</option>
      <option
        v-for="crypto in nonSubscribedCryptos"
        :key="crypto.id"
        :value="crypto"
      >
        {{ crypto.name }} ({{ crypto.symbol }})
      </option>
    </select>
  </div>
</template>

<script src="./CryptoSelector.js"></script>
<style src="./CryptoSelector.css" scoped></style>
