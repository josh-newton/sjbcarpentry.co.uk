<template>
  <div class="under-construction">
    <img class="fadeInDown" src="../assets/sjb-carpentry-dark-transparent.png" />
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
  name: 'UnderConstruction',
};
</script>

<style scoped lang="scss">
.under-construction {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  text-align: center;

  img {
    max-width: 500px;
    opacity: 0;
    margin-bottom: 70px;
    margin-top: -30px;
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
    img {
      max-width: 500px;
    }
  }
  @media screen and (max-width : 510px) {
    font-size: 0.6rem;
    img {
      max-width: 75%;
    }
    i {
      font-size: 1.5rem;
    }
  }
}
</style>
