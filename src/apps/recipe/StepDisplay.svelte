<hbox class="step">
  <CheckCircle bind:checked={step.done} label={step.description} />
</hbox>

<script lang="ts">
  import type { CookingStep } from "./Recipe";
  import CheckCircle from "../lib/CheckCircle.svelte";

  export let step: CookingStep;

  $: changedOngoing(step.ongoing);
  function changedOngoing(_dummy: any) {
    if (step.ongoing) {
      step.done = false;
    }
  }
  $: changedDone(step.done);
  function changedDone(_dummy: any) {
    if (step.done) {
      step.ongoing = false;
    }
  }
</script>

<style>
  .step {
    align-items: start;
  }
</style>
