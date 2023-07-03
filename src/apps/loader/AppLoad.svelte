{#if context?.app == "clock"}
  <Clock {context} />
{:else if context?.app == "timer"}
  <Timer {context} />
{:else if context?.app == "todolist"}
  <TODOList {context} />
{:else if context?.app == "recipe"}
  <RecipeApp {context} />
{:else if context?.app == "sample"}
  <SampleCard {context} />
{:else if context?.app == "hotel"}
  <HotelApp {context} />
{/if}
<script lang="ts">
  import Clock from "../clock/Clock.svelte";
  import TODOList from "../todo/TODOList.svelte";
  import RecipeApp from "../recipe/RecipeApp.svelte";
  import SampleCard from "../home/SampleCard.svelte";
  import HotelApp from "../hotel/HotelApp.svelte";
  import Timer from "../clock/Timer.svelte";
  import type { Context } from "../../logic/chat/Context";

  export let context: Context;
</script>
