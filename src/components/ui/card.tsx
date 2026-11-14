import * as React from 'react';
import {cn} from '@/lib/utils';
export function Card({className,...props}:React.ComponentProps<'div'>) {return <div data-slot="card" className={cn('rounded-[24px] border border-slate-200 bg-white shadow-sm',className)} {...props}/>}
export function CardHeader({className,...props}:React.ComponentProps<'div'>){return <div data-slot="card-header" className={cn('flex flex-col gap-2 p-6',className)} {...props}/>}
export function CardTitle({className,...props}:React.ComponentProps<'h3'>){return <h3 data-slot="card-title" className={cn('text-xl font-extrabold tracking-tight',className)} {...props}/>}
export function CardDescription({className,...props}:React.ComponentProps<'p'>){return <p data-slot="card-description" className={cn('text-sm leading-relaxed text-slate-600',className)} {...props}/>}
export function CardContent({className,...props}:React.ComponentProps<'div'>){return <div data-slot="card-content" className={cn('px-6 pb-6',className)} {...props}/>}
