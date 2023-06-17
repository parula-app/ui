<vbox class="todo">
  {#each $TODOList.each as task }
    <TaskDisplay {task} />
  {/each}
</vbox>

<script lang="ts">
  import { TODOList } from "./Task";
  import TaskDisplay from "./TaskDisplay.svelte";
</script>
