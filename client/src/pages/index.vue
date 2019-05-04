<template lang="pug">
.page-index
  h1 PROJECT KARVAN
  ul
    li
      router-link(:to="{ name: 'game:base' }") base
</template>
