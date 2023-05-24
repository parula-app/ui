<main>
  <h2>Hotels <span>in <u>Madrid</u></span></h2>
  <vbox>
    <MainFilterBar />
    <CustomFilterBar />
    <Results />
  </vbox>
  <div class="prompt">
    <Prompt>
      Parula, I need your help!
    </Prompt>
  </div>
</main>

<script lang="ts">
  import Prompt from "./Prompt.svelte";
  import MainFilterBar from "./MainFilterBar.svelte";
  import CustomFilterBar from "./CustomFilterBar.svelte";
  import Results from "./Results.svelte";
</script>

<style>
  main {
    padding: 4rem;
  }

  vbox {
    gap: 2rem;
  }
  .prompt {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    right: 2rem;
    max-width: 560px;
    margin-inline: auto;
  }

  h2 span {
    font-weight: 300;
  }
</style>