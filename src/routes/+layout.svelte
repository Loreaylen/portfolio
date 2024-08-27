<script lang="ts">
  import '@fontsource-variable/nunito/wght.css';
  import { onMount } from 'svelte';
  import { lightTheme } from '../lib/stores/preferencesStore';

  let lightTheme_value;
  let root;

 $: {
    if (root) {
      // Aplicar el estilo basado en el valor del store
      if ($lightTheme) {
        root.style.setProperty('--background', '#F5F5F5');
      } else {
        root.style.setProperty('--background', '#000');
      }
    }
  }

  // Establecer root cuando el componente se monta
  onMount(() => {
    root = document.documentElement;
  });

</script>


<style>

  /*
PALETA CLARA
links: #125688
titulos, texto: #2F2F31
resaltado:  #2F2F31
fondo: #F5F5F5
*/

/*
PALETA OSCURA
links: #6EABD4
titulos, texto: #F5F5F5
resaltado: #F5C43E
fondo: #000000
*/

:root {
  --background: #F5F5F5;
}

  :global(*){
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
  }

  :global(body) {
    background-color:var(--background);
    transition: all 500ms ease-in;
  }

  :global(a, span) {
  font-family: 'Nunito Variable', sans-serif;
  font-weight: 800;
  text-decoration: none;
  color: #125688;
}

</style>
<slot/>
