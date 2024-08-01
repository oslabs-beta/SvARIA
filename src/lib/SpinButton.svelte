<script lang='ts'>
	export let values: string[] = [];
	export let value: number = 0;
	export let min:number = 0;
	export let max:number = values.length - 1;
    export let className:string | undefined = ''
    export let style:string | undefined = ''
    export let id:string | undefined = ''
    export let contentClass:string | undefined = "flex flex-col items-center"
	export let contentStyle:string | undefined = ''
	export let contentId:string | undefined = ''
	export let increaseButtonContent:string | undefined = '+'
	export let decreaseButtonContent:string | undefined = '-'
	export let increaseButtonClass:string | undefined = ''
	export let increaseButtonId:string | undefined = ''
	export let increaseButtonStyle:string | undefined = ''
	export let currentValueId:string | undefined = ''
	export let currentValueClass:string | undefined = ''
	export let currentValueStyle:string | undefined = ''
	export let decreaseButtonId:string | undefined = ''
	export let decreaseButtonClass:string | undefined = ''
	export let decreaseButtonStyle:string | undefined = ''

	let currentValue = values[value];

	function increment() {
		if (value < max) {
			value++;
			currentValue = values[value];
		}
	}

	function decrement() {
		if (value > min) {
			value--;
			currentValue = values[value];
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowUp') {
			increment();
			event.preventDefault();
		} else if (event.key === 'ArrowDown') {
			decrement();
			event.preventDefault();
		}
	}

</script>

<div
	role="spinbutton"
	aria-valuenow={value}
	aria-valuemin={min}
	aria-valuemax={max}
	aria-valuetext={`Value: ${value}`}
	tabindex="0"
	on:keydown={handleKeydown}
	class={className}
    {id}
    {style}
>
	<div class={contentClass} style={contentStyle} id={contentId}>
        <button on:click={increment} aria-label="Increase value" class={increaseButtonClass} style={increaseButtonStyle} id={increaseButtonId}>{increaseButtonContent}</button>
		<span class={currentValueClass} id={currentValueId} style={currentValueStyle}>{currentValue}</span>
        <button on:click={decrement} aria-label="Decrease value" class={decreaseButtonClass} style={decreaseButtonStyle} id={decreaseButtonId}>{decreaseButtonContent}</button>
	</div>
</div>

<!-- <style>
.spinbutton {
  display: flex;
  align-items: center;
}
button {
  margin: 0 5px;
  padding: 5px;
  font-size: 16px;
}
span {
  width: 40px;
  text-align: center;
}
</style> -->
