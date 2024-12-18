export default {
    root: ({ props }) => ({
        class: [
            'inline-block relative',
            'w-16 h-[30px]',
            'rounded-2xl',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    slider: ({ props }) => ({
        class: [
            // Position
            'absolute top-0 left-0 right-0 bottom-0',
            { 'before:transform before:translate-x-10': props.modelValue == props.trueValue },

            // Shape
            'rounded-2xl',

            // Before:
            'before:absolute before:top-[55%] before:-left-1',
            'before:-mt-4',
            'before:h-[30px] before:w-[30px]',
            'before:rounded-full',
            'before:duration-200',
            'before:bg-gray-400 before:dark:bg-surface-500',

            // Colors
            'border',
            {
                'bg-surface-300 dark:bg-surface-800': !(props.modelValue == props.trueValue),
                'bg-gray-300': props.modelValue == props.trueValue,
                'before:dark:bg-surface-950': props.modelValue == props.trueValue,
                'border-transparent': !props.invalid
            },

            // Invalid State
            { 'border-red-500 dark:border-red-400': props.invalid },

            // States
            { 'peer-hover:bg-surface-100 dark:peer-hover:bg-surface-700': !(props.modelValue == props.trueValue) && !props.disabled && !props.invalid },
            { 'peer-hover:bg-primary-hover': props.modelValue == props.trueValue && !props.disabled && !props.invalid },
            'peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400',

            // Transition
            'transition-colors duration-200',

            // Misc
            'cursor-pointer'
        ]
    }),
    input: {
        class: [
            'peer',

            // Size
            'w-full ',
            'h-full',

            // Position
            'absolute',
            'top-0 left-0',
            'z-10',

            // Spacing
            'p-0',
            'm-0',

            // Shape
            'opacity-0',
            'rounded-2xl',
            'outline-none',

            // Misc
            'appearance-none',
            'cursor-pointer'
        ]
    }
};
