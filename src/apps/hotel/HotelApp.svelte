<main>
  <h2>Hotels <span>in <u>{args?.city || "Wiesbaden"}</u></span></h2>
  <vbox>
    <MainFilterBar />
    <CustomFilterBar />
    <Results />
  </vbox>
</main>

<script lang="ts">
  import MainFilterBar from "./MainFilterBar.svelte";
  import CustomFilterBar from "./CustomFilterBar.svelte";
  import Results from "./Results.svelte";
  import type { Context } from "../../logic/chat/Context";

  export let context: Context;

  $: console.log("hotel", context?.args);
</script>

<style>
  main {
    padding: 4rem;
  }

  vbox {
    gap: 1rem;
  }

  h2 span {
    font-weight: 300;
  }
</style>
