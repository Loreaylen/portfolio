<script lang="ts">
  import '@fontsource-variable/nunito/wght.css';
</script>


<style>

  /*
PALETA CLARA
links: #145789
titulos, texto: #2F2F31
resaltado:  #2F2F31
fondo: #E9E9EB
*/

/*
PALETA OSCURA
links: #6EABD4
titulos, texto: #F5F5F5
resaltado: #F5C43E
fondo: #000000
*/

  :global(*){
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
  }

  :global(body) {
    background-color:#E9E9EB;
  }

  :global(a) {
  font-family: 'Nunito Variable', sans-serif;
  font-weight: 600;
  text-decoration: none;
  color: #145789;
}

</style>
<slot/>
