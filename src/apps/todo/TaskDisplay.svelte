<hbox class="task">
  <CheckCircle bind:checked={task.done} label={$task.name} />
</hbox>

<script lang="ts">
  import type { Task } from "./Task";
  import CheckCircle from "../lib/CheckCircle.svelte";

export let task: Task;
</script>

<style>
  .task {
    align-items: start;
  }
</style>
