<template>
  <div id="app">
    <div class="content">
      <h1 class="example">Example</h1>
      <div class="item">
        <h1>default</h1>
        <slider class="innlineblock" v-bind="setting"></slider>
        <div class="code">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import slider from 'vue-image-scroll'
  export default {
    name: 'app',
    components: {
      slider
    },
    data () {
      return {
        setting: {
          image: [
            'static/img/1-1.jpg',
            'static/img/1-2.jpg',
            'static/img/1-3.jpg',
            'static/img/1-4.jpg',
            'static/img/1-5.jpg'
          ]
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .header{
    height: 340px;
    background-color: #159957;
    background-image: linear-gradient(120deg, #155799, #159957);
    padding: 140px 0;
    color: white;
    font-weight: bolder;
    font-size: 3rem;
  }

  .content{
    margin: 0 auto;
    width: 750px;

  }

  .btn {
    text-decoration: none;
    box-sizing: content-box;
    font-size: 1.1rem;
    display: inline-block;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    border-style: solid;
    border-width: 1px;
    border-radius: 0.3rem;
    transition: color 0.2s, background-color 0.2s, border-color 0.2s;
    padding: 0.75rem 1rem;
  }

  .btn:hover {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .innlineblock{
    display: inline-block;
  }

  .code{
    text-align: left;
    background-color: rgb(51,51,51);
    color: #ffd400;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .keyword{
    color: #2ecc71;
  }

  .white{
    color: white;
  }

  pre{
    padding: 0px;
  }

  .item{
    background-color: white;
    box-shadow: 0px 5px 100px black;
    padding: 10px 0px;
    margin: 20px 0;
  }

  .item h1{
    padding: 10px 30px;
    text-align: left;
    color: #f05b72;
  }

  .start h1{
    margin: 20px 0px;
  }

  .start h2{
    text-align: left;
    margin: 10px 0;
  }

  .gray{
    color: rgb(224,224,224);
  }

  .example{
    margin: 50px 0;
  }
</style>
