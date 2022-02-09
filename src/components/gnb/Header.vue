<template>
  <header>
    <p>Header</p>
    <nav>
      <ul>
        <li>
          <router-link to="/">홈</router-link>
        </li>
        <li>
          <router-link to="/my-page">테스트</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>