import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
export const buttonVariants = cva('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 disabled:pointer-events-none disabled:opacity-50', {
 variants: {
   variant: { default:'bg-[var(--cyan)] text-[var(--navy)] hover:bg-[#82eff8]', navy:'bg-[var(--navy)] text-white hover:bg-[#2648a2]', outline:'border border-[var(--navy)] bg-white text-[var(--navy)] hover:bg-sky-50', ghost:'text-[var(--navy)] hover:bg-sky-50' },
   size: { default:'h-11 px-6', sm:'h-9 px-4 text-xs', lg:'h-13 px-8', icon:'h-11 w-11' }
 }, defaultVariants: {variant:'default',size:'default'}
});
export type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {asChild?:boolean};
export function Button({className,variant,size,asChild=false,...props}:ButtonProps) {
 const Comp = asChild?Slot:'button';
 return <Comp data-slot="button" className={cn(buttonVariants({variant,size,className}))} {...props}/>;
}
