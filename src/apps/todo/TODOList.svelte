<vbox class="todo">
  {#each $TODOList.each as task }
    <TaskDisplay {task} />
  {/each}
</vbox>

<script lang="ts">
  import { TODOList, Task } from "./Task";
  import TaskDisplay from "./TaskDisplay.svelte";
  import type { Context } from "../../logic/chat/Context";

  export let context: Context;

  $: tasks = context?.results as unknown as string[];
  $: tasks && setResults();
  function setResults() {
    console.log("todo list contained", TODOList.join(", "), "TODO tasks", tasks);
    TODOList.clear();
    for (let task of tasks) {
      TODOList.add(new Task(task));
    }
    console.log("todo list now contains", TODOList.join(", "));
  }
</script>
