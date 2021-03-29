<template>
  <div class="hero2 jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">SJB CARPENTRY</h1>
      <p class="lead">CARPENTRY | CONSTRUCTION | JOINERY</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero2',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero2{
  background-image: url("../../assets/hero.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  height: 700px;
  margin-top: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 5rem;
    letter-spacing: 0.6rem;
    font-weight: 200;
  }

  p {
    font-size: 1.7rem;
    font-weight: 400;
    letter-spacing: 0.3rem;
  }

  .container {
    margin-top: -200px;
    background: rgba(255,255,255,0.5);
    padding: 25px;
    max-width: 100%;
  }
}
</style>
