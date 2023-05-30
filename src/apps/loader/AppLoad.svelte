{#if app == "clock"}
  <Clock {args} />
{:else if app == "hotel"}
  <HotelApp {args} />
{/if}
<script lang="ts">
  import Clock from "../clock/Clock.svelte";
  import HotelApp from "../hotel/HotelApp.svelte";

  export let app: string;
  export let args: [];
</script>
