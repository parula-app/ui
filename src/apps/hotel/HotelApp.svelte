<main>
  <h2>Hotels <span>in <u>Madrid</u></span></h2>
  <vbox>
    <MainFilterBar />
    <CustomFilterBar />
    <Results />
  </vbox>
  <div class="prompt">
    <Prompt />
  </div>
</main>

<script lang="ts">
  import Prompt from "../lib/Prompt.svelte";
  import MainFilterBar from "./MainFilterBar.svelte";
  import CustomFilterBar from "./CustomFilterBar.svelte";
  import Results from "./Results.svelte";
</script>

<style>
  main {
    padding: 4rem;
  }

  vbox {
    gap: 1rem;
  }
  .prompt {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    right: 2rem;
    max-width: 35rem;
    margin-inline: auto;
  }

  h2 span {
    font-weight: 300;
  }
</style>
