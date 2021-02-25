<template>
  <div class="hero">
    <img class="fadeInDown" src="../assets/sjb-carpentry.png" />
    <h1 class="fadeIn">Under construction</h1>
    <i class="fas fa-hammer fadeIn"></i>
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  text-align: center;

  img {
    width: 100%;
    max-width: 840px;
    opacity: 0;
  }
  h1 {
    margin-top: 0px;
    font-weight: 300;
    color: #eae6da;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 0 20px;
    animation-delay: 1.5s;
    opacity: 0;
  }
  i {
    color: #eae6da;
    font-size: 2rem;
    animation-delay: 1.5s;
    opacity: 0;
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
