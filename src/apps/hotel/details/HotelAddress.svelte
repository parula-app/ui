<script lang="ts">
  export let address: string[];
  
  $: addressString = address.join(", ");
</script>

<span>{addressString}</span>
