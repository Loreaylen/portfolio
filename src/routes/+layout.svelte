<script lang="ts">
  import '@fontsource-variable/nunito/wght.css';
  import palette from '$lib/data/palette.json'
  import { onMount } from 'svelte';
  import { lightTheme } from '../lib/stores/preferencesStore';
  
  let root;

  $: {
      if (root) {

        if ($lightTheme) {
          setTheme(palette.light)
        } else {
          setTheme(palette.dark)
        }
      }
    }

  const setTheme = (theme) => {
    for(let prop of theme){
      root.style.setProperty(prop.name, prop.color);
    }
    return
  }

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
  --titles-text: #2F2F31;
  --links: #125688;
  --highlight: #2F2F31;
  --navbar: #F5F5F5;
  --hover: rgb(255, 255, 255, 0.5);
  --border-shadow: rgb(0, 0, 0, 0.5)
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
  color: var(--links);
}

</style>
<slot/>
