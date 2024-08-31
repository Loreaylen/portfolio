<script>
  
  import languages from '../data/languages.json'
  export let showNavbar = false;
  export let language = 'ES';

  let langData;
  let menu;

$: {
  langData = languages[language]
  menu = langData.menu
}




</script>
<style>
li {
  list-style-type: none;
}

nav {
  height: auto;
  width: auto;
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;

}

ul {
  width: auto;
  display: flex;
  gap: 5px;
  flex-direction: row;
  align-items: center;
}

a {
  display: block;
  padding: 10px;
  transition: all 100ms ease-in;
  font-size: 0.7rem;
}

a:hover {
  background-color: var(--hover);
  transform: translate(1px, -3px);
  color: var(--titles-text);
  box-shadow:  -1px -8px 0px -4px  var(--titles-text) inset;
}



/*hover oscuro -> background-color: #384247; color: #51F0FF;*/

@media (width <= 900px) {
  
  nav {
    position: absolute;
    max-width: 350px;
    top: 100%;
    left: 0;
    height: calc(100vh - 50px);
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 5px 3px 7px -1px var(--titles-text);
  }



  ul {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 15px;
    gap: 3px;

  }
  
  li {
    width: 100%;

  }

  a {
    padding: 10px 30px;
  }

  a:hover {
  box-shadow: 12px -1px  0px -4px  var(--titles-text) inset;
}
}

</style>

<nav style={showNavbar ? 'display:flex;' : 'display:none;'}>
  <ul>
    <li><a href='#aboutMe'>{menu.about.toUpperCase()}</a></li>
    <li><a href='#projects'>{menu.projects.toUpperCase()}</a></li>
    <li><a href='#technologies'>{menu.stack.toUpperCase()}</a></li>
    <li><a href='#workingExperience'>{menu.exp.toUpperCase()}</a></li>
    <li><a href='#contact'>{menu.contact.toUpperCase()}</a></li>
  </ul>
</nav>
