<hbox class="step">
  {#if step.duration && !step.done}
    {#if !timerRunning}
      <button on:click={startTimer}><Timer size={24} /></button>
    {:else}
      <button on:click={stopTimer}><TimerPlay size={24} /></button>
    {/if}
  {:else}
    <hbox class="dummy-button" />
  {/if}
  <CheckCircle bind:checked={step.done} label={step.description} />
</hbox>

<script lang="ts">
  import type { CookingStep } from "./Recipe";
  import CheckCircle from "../lib/CheckCircle.svelte";
  import Timer from "svelte-material-icons/TimerOutline.svelte";
  import TimerPlay from "svelte-material-icons/TimerPlay.svelte";

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

  let timerRunning = false;

  function startTimer() {
    timerRunning = true;
  }
  function stopTimer() {
    timerRunning = false;
  }
</script>

<style>
  .step {
    align-items: start;
  }
  button {
    border: none;
    margin-right: 1em;
  }
  .dummy-button {
    width: 25px;
    padding: 2px;
    margin-right: 1em;
  }
</style>
