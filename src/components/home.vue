<template>
  <div class="home">
    <div class="jumbotron">
      <h4 class="display-4">Mestrado em Engenharia Informática e Tecnologia Web</h4>
      <p class="lead">PWA | Programação Web Avançada 2021/2022</p>
      <hr class="my-4">
      <p class="lead">
      {{ msg }} 
      </p>
      <p>
      <i>Uma SPA é uma aplicação ou um site Web incluso numa única página com o objetivo de fornecer uma experiência semelhante à de uma aplicação nativa (ou desktop). No modelo SPA, todos os recursos (por exemplo, HTML, Javascript e CSS) são inicialmente carregados, ficando agregados num único ficheiro. </i>
    </p>      
    <h5 class="display-5">Trabalho realizado por Marco Pacheco, aluno n.º 905048</h5>


  </div>



    
    


  </div>
</template><script>
export default {
  name: 'home',
  data () {
    return {
       
      msg:'Atividade 2.2 - Construção de uma Single Page Application (SPA)'
    }
  }
}
</script><!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>