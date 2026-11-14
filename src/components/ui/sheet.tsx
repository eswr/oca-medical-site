import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
export const Sheet = DialogPrimitive.Root;
export const SheetClose = DialogPrimitive.Close;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetTitle = DialogPrimitive.Title;
export const SheetDescription = DialogPrimitive.Description;
export function SheetContent({className,children,...props}:React.ComponentProps<typeof DialogPrimitive.Content>){
 return <DialogPrimitive.Portal>
   <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-slate-950/60 data-[state=open]:animate-in" />
   <DialogPrimitive.Content className={cn('fixed inset-y-0 right-0 z-50 flex h-full w-[min(88vw,360px)] flex-col bg-white p-6 shadow-2xl outline-none',className)} {...props}>
     {children}
     <DialogPrimitive.Close className="absolute right-5 top-5 rounded-full p-2 text-slate-600 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-sky-600" aria-label="Close navigation"><X size={21}/></DialogPrimitive.Close>
   </DialogPrimitive.Content>
 </DialogPrimitive.Portal>;
}
