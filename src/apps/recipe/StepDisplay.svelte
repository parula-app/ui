<CheckCircle bind:checked={step.done} />
{#if step.duration && !step.done}
  {#if !timerRunning}
    <button on:click={startTimer}><Timer size={24} /></button>
  {:else}
    <button on:click={stopTimer}><TimerPlay size={24} /></button>
  {/if}
{:else}
  <hbox class="dummy-button" />
{/if}
<span class="label" class:done={step.done}>{step.description}</span>

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
      stopTimer();
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
  .label {
    max-width: 40em;
  }
  .label.done {
    opacity: 50%;
  }
  button {
    border: none;
  }
  .dummy-button {
    width: 25px;
    padding: 2px;
  }
  button, .dummy-button {
    margin-top: -1px;
    margin-left: -4px;
    margin-right: 4px;
  }
</style>
