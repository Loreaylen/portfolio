<script lang="ts">
  import '../styles/app.css';
</script>

<style>
  :global(*){
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
a { 
  font-family: 'NunitoSans-VariableFont_YTLC,opsz,wdth,wght';
}
</style>

<header>
  <slot/>
</header>
<body>
  <slot/>
</body>