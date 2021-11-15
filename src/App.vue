<template>
  <div id="app">
      <!-- navbar -->
      <div class="navbar navbar-expand fixed-top navbar-dark bg-primary">

        
        
        <router-link to="/" class="navbar-brand">PWA | Tarefa 2.2</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav  ml-auto">
      
            <li class="nav-item">
              <router-link class="nav-link" to="/quemsou">Quem sou eu?</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/oquefaco">O que faço?</router-link>
            </li>
            <li class="nav-item">
             <router-link class="nav-link" to="/hobbies">Hobbies</router-link>
            </li>
          </ul>
        </div>
        </div>
      

    <router-view/>

<footer>
  <a href="https://www.linkedin.com/" target="_blank"><img src="../src/assets/in.png" height="25"></a> 
  <a href="https://www.facebook.com/" target="_blank"><img src="../src/assets/fb.png" height="25"></a> 
  <a href="https://www.twitter.com/" target="_blank"><img src="../src/assets/t.png" height="25" ></a>
</footer>
    
  </div>
</template><script>
export default {
  name: 'App',
    data () {
    return {
      title: 'footer_images'
    
    }
  }
}
</script><style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
  margin-top: 60px;
}
footer {
	clear:both;
	background-color: #c9c9c9;
	color: white;
	padding: 5px 20px;
	text-align: center;
	font-family: 'Oswald';
  width: 99.9%;
  position:fixed;
  bottom:0;
}
#foto {
  border-radius: 50%;
      width:128px;
    margin: 10px;
    border:10px rgb(43, 40, 40);
}
</style>
