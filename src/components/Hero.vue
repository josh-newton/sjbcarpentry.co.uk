<template>
  <div class="hero">
    <img class="fadeInDown" src="../assets/sjb-carpentry.png" />
    <div class="fadeIn">
      <h1>Under construction</h1>
    </div>
    <div class="fadeIn socials">
      <a
        href="https://www.facebook.com/SJB-Carpentry-and-construction-100721135219247/"
        target="_blank">
          <i class="fab fa-facebook-f"></i>
      </a>
      <a
        href="https://www.instagram.com/sjb_carpentry_and_construction/"
        target="_blank">
          <i class="fab fa-instagram"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  height: 100vh;
  width: 100vw;
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  text-align: center;

  img {
    width: 100%;
    max-width: 840px;
    opacity: 0;
    margin-bottom: -50px;
  }

  .fadeIn {
    animation-delay: 1.7s;
    opacity: 0;
  }
  h1 {
    font-weight: 300;
    color: #eae6da;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 0 20px;
  }
  i {
    color: #eae6da;
    font-size: 2rem;
  }
  .socials {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80px;
    margin-top: 30px;
    a, a:visited, a:active {
      color: #eae6da;

      i {
        font-size: 24px;
      }
    }
  }

  @media screen and (max-width : 720px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width : 510px) {
    font-size: 0.6rem;
    i {
      font-size: 1.5rem;
    }
  }
}
</style>
