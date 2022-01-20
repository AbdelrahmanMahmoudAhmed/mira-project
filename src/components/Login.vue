<template>
  <div class="account-sec">
    <h3>Login</h3>
    <p>Please login using account detail bellow.</p>
    <form class="log-in-form">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <div class="button-container">
        <input type="submit" value="sign in" @click.prevent="" />
        <span class="button-container-link" @click="toggleComp"
          >Forgot your password?</span
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["togglee"],
  setup(props, { emit }) {
    const toggleComp = () => {
      emit("togglee");
      console.log("eshta3'alet");
    };
    return {
      toggleComp,
    };
  },
};
</script>

<style  lang="scss">
.account-sec {
  background: #f5f5f5 none repeat scroll 0 0;
  padding: 37px 40px;
  width: 80%;
  margin: 0 auto 100px;
  @media (max-width: 991px) {
    width: 96%;
  }
  @media (min-width: 1199px) {
    width: 30%;
  }
  h3 {
    color: #444;
    font-size: 30px;
    margin-bottom: 5px;
    text-transform: capitalize;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
  }
  p {
    text-align: center;
  }
  .log-in-form {
    display: flex;
    flex-direction: column;
    input {
      background: #fff none repeat scroll 0 0;
      color: #333;
      margin-bottom: 20px;
      font-size: 14px;
      height: 40px;
      padding-left: 10px;
      border: none;
      outline: none;
    }
    .button-container {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      input {
        border-radius: 20px;
        border: 1px solid;
        background-color: transparent;
        padding: 4px 40px;
        text-transform: uppercase;
        font-size: 12px;
        transition: 0.3s;
        &:hover {
          background-color: #222;
          color: #fff;
        }
      }
      .button-container-link {
        color: #222;
        cursor: pointer;
        &:hover {
          color: gray;
        }
      }
    }
  }
}
</style>