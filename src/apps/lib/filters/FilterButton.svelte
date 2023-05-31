<div use:clickoutside={{ enabled: mounted, callback: () => mounted = false }}>
  <Button 
    class="filterButton"
    bind:element={reference} 
    on:click={() => (mounted = !mounted)} 
    color={mounted ? '#1f476a' : 'white'} 
    variant="filled" 
  >
    <vbox style={mounted ? 'color: white' : 'color: #333'}>
      <slot name="icon"/>
      <Text size="sm" color="inherit">
        <slot name="label"/>
      </Text>
    </vbox>
  </Button>
  <Popper {reference} {mounted} withArrow={true} placement="center" position="bottom" arrowSize={4}>
    <Paper shadow="md" withBorder>
      <Center><slot name="settings"/></Center>
    </Paper>
  </Popper>
</div>

<script lang="ts">
  import { Popper, Button, Text, Paper, Center } from '@svelteuidev/core';
  import { clickoutside } from '@svelteuidev/composables';
  let mounted = false;
  let reference;
</script>

<style>
  vbox {
    gap: 0.25rem;
    min-height: 3rem;
    min-width: 3.5rem;
    align-items: center;
  }
</style>