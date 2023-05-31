<script lang="ts">
  import MapMarker from "svelte-material-icons/MapMarker.svelte";
  import { Title } from "@svelteuidev/core";
  import HotelAddress from "./HotelAddress.svelte";

  export let name: string;
  export let address: string[];

  function openMap() {
    const url = `https://www.google.com/maps/search/?api=1&query=${address.join(
      ","
    )}`;
    window.open(url, "_blank");
  }
</script>

<vbox>
  <Title order={2} override={{fontWeight: 700}}>{name}</Title>
  <button on:click={openMap}>
    <MapMarker size={16} />
    <HotelAddress {address} />
    <span>See on map</span>
  </button>
</vbox>

<style>
  vbox {
    gap: 0.5rem;
  }
  button {
    border: none;
    padding: 0;
    background: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  span {
    color: red;
  }
</style>
