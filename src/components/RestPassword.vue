<template>
  <div class="account-sec">
    <h3>Reset Your Password</h3>
    <p>We will send you an email to reset your password.</p>
    <form class="log-in-form">
      <input type="email" placeholder="Email" />
      <div class="button-container">
        <input type="submit" value="submit" @click.prevent="" />
        <span class="button-container-link" @click="$emit('togglee')"
          >cancel</span
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style  lang="scss">
</style>