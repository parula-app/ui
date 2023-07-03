{#if app == "clock"}
  <Clock {intent} {args} {results} />
{:else if app == "timer"}
  <Timer {intent} {args} {results} />
{:else if app == "todolist"}
  <TODOList {intent} {args} {results} />
{:else if app == "recipe"}
  <RecipeApp {intent} {args} {results} />
{:else if app == "sample"}
  <SampleCard {intent} {args} {results} />
{:else if app == "hotel"}
  <HotelApp {intent} {args} {results} />
{/if}
<script lang="ts">
  import Clock from "../clock/Clock.svelte";
  import TODOList from "../todo/TODOList.svelte";
  import RecipeApp from "../recipe/RecipeApp.svelte";
  import SampleCard from "../home/SampleCard.svelte";
  import HotelApp from "../hotel/HotelApp.svelte";
  import Timer from "../clock/Timer.svelte";

  export let app: string;
  export let intent: string;
  export let args: { [prop in string]: any };
  export let results: { any };
</script>
