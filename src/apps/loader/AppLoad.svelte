{#if app == "clock"}
  <Clock />
{:else if app == "sample"}
  <SampleCard {args} />
{:else if app == "hotel"}
  <HotelApp {args} />
{/if}
<script lang="ts">
  import Clock from "../clock/Clock.svelte";
  import SampleCard from "../home/SampleCard.svelte";
  import HotelApp from "../hotel/HotelApp.svelte";

  export let app: string;
  export let args: { [prop in string]: any };
</script>
