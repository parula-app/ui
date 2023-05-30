<hbox class="task">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <hbox class="checked button" on:click={() => task.toggleDone()}>
    {#if $task.done}
      <Checked size={24} />
    {:else}
      <Unchecked size={24} />
    {/if}
  </hbox>
  <hbox class="name">{$task.name}</hbox>
</hbox>

<script lang="ts">
  import type { Task } from "./TODO";
  import Checked from "svelte-material-icons/CheckCircleOutline.svelte";
  import Unchecked from "svelte-material-icons/CircleOutline.svelte";

  export let task: Task;

  $: console.log("task", task);
</script>

<style>
  .task {
    align-items: start;
  }
  .checked.button {
    margin-right: 7px;
  }
</style>
