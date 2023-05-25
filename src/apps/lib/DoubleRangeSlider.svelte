<div class="double-range-container">
	<div class="slider" bind:this={slider}>
		<div
			class="body"
			bind:this={body}
			use:draggable
			on:dragmove|preventDefault|stopPropagation="{setHandlesFromBody}"
			style="
				left: {100 * start / max}%;
				right: {100 - (100 * end / max)}%;
			"
			></div>
		<button
			class="handle"
			bind:this={leftHandle}
			data-which="start"
			use:draggable
			on:dragmove|preventDefault|stopPropagation="{setHandlePosition('start')}"
			style="
        left: {100 * start / max}%;
			"
		></button>
		<button
			class="handle"
			data-which="end"
			use:draggable
			on:dragmove|preventDefault|stopPropagation="{setHandlePosition('end')}"
			style="
        left: {100 * end / max}%;
			"
		></button>
	</div>
</div>

<script>
  import { clamp } from "../../utils/clamp";
	export let start = 10;
	export let end = 90;
  export let min = 0;
  export let max = 100;
	
  let leftHandle;
	let body;
	let slider;

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
			const { left, right } = slider.getBoundingClientRect();
			const parentWidth = right - left;
			const p = Math.min(Math.max((evt.detail.x - left) / parentWidth, 0), 1);
			
      if (which === 'start') {
				start = ((max - min) * p) + min;
				end = Math.max(start, end);
			} else {
        end = ((max - min) * p) + min;
				start = Math.min(start, end);
			}
		}
	}
	
  function setHandlesFromBody (event) {
		const { width } = body.getBoundingClientRect();
		const { left, right } = slider.getBoundingClientRect();
		const parentWidth = right - left;
		const leftHandleLeft = leftHandle.getBoundingClientRect().left;
		const pxStart = clamp((leftHandleLeft + event.detail.dx) - left, 0, parentWidth - width);
		const pxEnd = clamp(pxStart + width, width, parentWidth);
    console.log('pxStart',pxStart);
    console.log('pxEnd',pxEnd);
		const pStart = pxStart / parentWidth;
		const pEnd = pxEnd / parentWidth;
		start = pStart;
		end = pEnd;
	}

</script>



<style>
	.double-range-container {
		height: 20px;
		user-select: none;
		box-sizing: border-box;
		white-space: nowrap;
	}
	.slider {
		position: relative;
		height: 6px;
		top: 50%;
		transform: translate(0, -50%);
		background-color: #e2e2e2;
		box-shadow: inset 0 7px 10px -5px #4a4a4a, inset 0 -1px 0px 0px #9c9c9c;
		border-radius: 1px;
	}
	.handle {
		position: absolute;
		top: 50%;
    width: 16px;
		height: 16px;
    outline: none;
    border: none;
    border-radius: 0.25rem;
	}

  .handle::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 50%;
  }
	
  .handle[data-which="start"] {
    transform: translateY(-50%);
	}
	.handle[data-which="end"] {
    transform: translate(-100%, -50%);
	}
	.handle:active:after {
		background-color: #ddd;
		z-index: 9;
	}
	.body {
		top: 0;
		position: absolute;
		background-color: #34a1ff;
		bottom: 0;
	}
</style>