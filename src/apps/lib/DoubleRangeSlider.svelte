<div class="double-range-container">
	<div class="slider" bind:this={slider}>
		<div
			class="body"
			bind:this={body}
			use:draggable
			
			style="
				left: {percentLeftHandle}%;
				right: {100 - percentRightHandle}%;
			"
			></div>
		<button
			class="handle"
			bind:this={leftHandle}
			data-which="start"
			use:draggable
			on:dragmove|preventDefault|stopPropagation="{setHandlePosition('start')}"
			style="
        left: {percentLeftHandle}%;
			"
		></button>
		<button
			class="handle"
			data-which="end"
			use:draggable
			on:dragmove|preventDefault|stopPropagation="{setHandlePosition('end')}"
			style="
        left: {percentRightHandle}%;
			"
		></button>
	</div>
</div>

<script>
  import { onMount } from "svelte";

	export let start = 10;
	export let end = 90;
  export let min = 0;
  export let max = 100;
	
  let leftHandle;
	let body;
	let slider;

  let percentLeftHandle;
  let percentRightHandle;

  onMount(() => {
    percentLeftHandle = (start - min) / (max - min) * 100;
    percentRightHandle = (end - min) / (max - min) * 100;
  });

	function draggable(node) {
		let x;
		let y;

		function handleMousedown(event) {
			if (event.type === 'touchstart') {
				event = event.touches[0];
			}
			x = event.clientX;
			y = event.clientY;
			node.dispatchEvent(new CustomEvent('dragstart', {
				detail: { x, y }
			}));
			window.addEventListener('mousemove', handleMousemove);
			window.addEventListener('mouseup', handleMouseup);
			window.addEventListener('touchmove', handleMousemove);
			window.addEventListener('touchend', handleMouseup);
		}

		function handleMousemove(event) {
			if (event.type === 'touchmove') {
				event = event.changedTouches[0];
			}
			const dx = event.clientX - x;
			const dy = event.clientY - y;
			x = event.clientX;
			y = event.clientY;
			node.dispatchEvent(new CustomEvent('dragmove', {
				detail: { x, y, dx, dy }
			}));
		}
		
    function handleMouseup(event) {
			x = event.clientX;
			y = event.clientY;
			node.dispatchEvent(new CustomEvent('dragend', {
				detail: { x, y }
			}));
			window.removeEventListener('mousemove', handleMousemove);
			window.removeEventListener('mouseup', handleMouseup);
			window.removeEventListener('touchmove', handleMousemove);
			window.removeEventListener('touchend', handleMouseup);
		}

		node.addEventListener('mousedown', handleMousedown);
		node.addEventListener('touchstart', handleMousedown);
		
    return {
			destroy() {
				node.removeEventListener('mousedown', handleMousedown);
				node.removeEventListener('touchstart', handleMousedown);
			}
		};
	}
	
  function setHandlePosition (which) {
		return function (evt) {
			const { left, width } = slider.getBoundingClientRect();
			const percentX = Math.min(Math.max((evt.detail.x - left) / width, 0), 1);
      
      if (which === 'start') {
				percentLeftHandle = percentX * 100;
				percentRightHandle = Math.max(percentLeftHandle, percentRightHandle);
			} else {
        percentRightHandle = percentX * 100;
				percentLeftHandle = Math.min(percentLeftHandle, percentRightHandle);
			}
      
      start = Math.round((percentLeftHandle * (max - min) / 100) + min);
      end = Math.round((percentRightHandle * (max - min) / 100) + min);
		}
	}
</script>

<style>
	.double-range-container {
		user-select: none;
		box-sizing: border-box;
		white-space: nowrap;
    padding-inline: 0.75rem;
	}
	.slider {
		position: relative;
		height: 6px;
		top: 50%;
		transform: translate(0, -50%);
		background-color: #e2e2e2;
		border-radius: 0.25rem;
	}
	.handle {
		position: absolute;
		top: 50%;
    width: 1.5rem;
		height: 1.5rem;
    outline: none;
    border: none;
    border-radius: 50%;
    background-color: #21466a;
    transform: translate(-50%, -50%);
	}

  .handle:active,
  .handle:hover {
    outline: rgba(33, 70, 106, 0.1) solid 0.5rem;
    z-index: 9;
  }
	
	.body {
		top: 0;
		position: absolute;
		background-color: #21466a;
		bottom: 0;
	}
</style>