<template>
  <div class="coin" @click="clickRemove(crypto)">
    <span class="name">{{ crypto.name }}</span>
    <span class="symbol">({{ crypto.symbol }})</span>
    <span class="price">{{ crypto.price | toUSD }}</span>
  </div>
</template>

<script src="./CryptoCoin.js"></script>
<style src="./CryptoCoin.css" scoped></style>
