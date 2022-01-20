<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-contnent-child">
        <div class="footer-logo">
          <img
            src="https://cdn.shopify.com/s/files/1/2213/2375/files/logo_medium.png?v=1500972950"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam
            possimus doloribus dolorem perferendis.
          </p>
          <ul class="footer-social">
            <li>
              <a target="blank" href="https://www.facebook.com"
                ><font-awesome-icon
                  class="footer-social-i"
                  :icon="['fab', 'facebook-f']"
              /></a>
            </li>
            <li>
              <a target="blank" href="https://www.twitter.com"
                ><font-awesome-icon
                  class="footer-social-i"
                  :icon="['fab', 'twitter']"
              /></a>
            </li>
            <li>
              <a target="blank" href="https://www.google.com"
                ><font-awesome-icon
                  class="footer-social-i"
                  :icon="['fab', 'google-plus-g']"
              /></a>
            </li>
            <li>
              <a target="blank" href="https://www.linkedin.com"
                ><font-awesome-icon
                  class="footer-social-i"
                  :icon="['fab', 'linkedin-in']"
              /></a>
            </li>
            <li>
              <a target="blank" href="https://www.instagram.com"
                ><font-awesome-icon
                  class="footer-social-i"
                  :icon="['fab', 'instagram']"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-contnent-child">
        <h5>SUPPORT</h5>
        <ul class="ul-links">
          <li>Careers</li>
          <li><a>Sale products </a></li>
          <li><a> Terms &amp; Condition </a></li>
          <li><a>Delivery Information</a></li>
        </ul>
      </div>
      <div class="footer-contnent-child">
        <h5>QUICK LINKS</h5>
        <ul class="ul-links">
          <li><router-link to="/account">Login</router-link></li>
          <li>
            <router-link to="/create-account">Create Account</router-link>
          </li>
          <li><router-link to="/cart">My Cart</router-link></li>
          <li><router-link to="/wish-list">Wishlist</router-link></li>
        </ul>
      </div>
      <div class="footer-contnent-child">
        <h5>INSTAFEED</h5>
      </div>
    </div>
    <div class="footer-foot">
      <p>
        &copy; copyright <a href="https://99shopify.com/"> 99Shopify </a> All
        Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.footer {
  padding: 0 50px;
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    .footer-contnent-child {
      padding: 15px;
      margin-bottom: 50px;
      h5 {
        margin-bottom: 20px;
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: 400;
      }
      .footer-social {
        display: flex;
        width: 120px;
        justify-content: space-between;
        .footer-social-i {
          font-size: 15px;
          color: #626262;
          cursor: pointer;
          &:hover {
            color: #333;
          }
        }
      }
      p {
        font-size: 14px;
        line-height: 1.7;
        color: #626262;
      }
      .ul-links {
        display: flex;
        flex-direction: column;
        height: 100%;
        li {
          padding-bottom: 12px;
          a {
            color: #626262;
            display: block;
            font-size: 14px;
            cursor: pointer;
            transition: 0.3s;
            &:hover {
              color: #333;
            }
          }
        }
      }
    }
  }
  .footer-foot {
    border-top: 1px solid #f6f6f6;
    padding: 20px 0;
    // margin-top: 70px;
    p {
      text-align: center;
      color: #626262;
      font-size: 14px;
      a {
        color: #000;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media (max-width: 991px) {
    padding: 0 15px;
  }
}
</style>