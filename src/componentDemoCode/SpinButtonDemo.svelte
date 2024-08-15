<script>

import { SpinButton } from 'svaria-toolkit';

let values = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

</script>

<SpinButton
{values}
value = 0
className = 'flex flex-col items-center'
id = 'spinButtonContainer'
increaseButtonContent = '+'
increaseButtonId = 'increase'
increaseButtonClass = 'h-8 w-8 bg-green-500 text-black text-sm p-0'
currentValueId = 'currentValue'
currentValueClass = 'text-blue-800 text-xl'
decreaseButtonContent = '-'
decreaseButtonId = 'decrease'
decreaseButtonClass = 'h-8 w-8 bg-red-500 text-sm text-white p-0'
/>