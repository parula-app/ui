<vbox class="todo">
  {#each $TODOList.each as task }
    <TaskDisplay {task} />
  {/each}
</vbox>

<script lang="ts">
  import { TODOList, Task } from "./Task";
  import TaskDisplay from "./TaskDisplay.svelte";

  export let intent: string;
  export let args: { [prop in string]: any };
  export let results: { any };

  $: tasks = results as unknown as string[];
  $: setResults(tasks);
  function setResults(_dummy: any) {
    console.log("todo list contained", TODOList.join(", "));
    console.log("TODO tasks", tasks, results);
    TODOList.clear();
    for (let task of tasks) {
      TODOList.add(new Task(task));
    }
    console.log("todo list now contains", TODOList.join(", "));
  }
</script>
