import { Menu, ArrowUpRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {nav} from '@/config/site';
import {pathTo} from '@/lib/paths';
export default function MobileNav(){
 return <Sheet>
   <SheetTrigger aria-label="Open navigation" className="mobile-menu-trigger"><Menu size={25}/></SheetTrigger>
   <SheetContent>
     <SheetTitle className="mt-9 text-2xl font-extrabold text-[#122f83]">Explore OCA</SheetTitle>
     <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1">
       {nav.map(item=><SheetClose asChild key={item.href}><a className="mobile-nav-link" href={pathTo(item.href)}>{item.text}<ArrowUpRight size={16}/></a></SheetClose>)}
       <SheetClose asChild><a className="mobile-nav-link" href={pathTo('/contact/')}>Contact<ArrowUpRight size={16}/></a></SheetClose>
       <SheetClose asChild><a className="mobile-nav-link" href={pathTo('/insurance/')}>Verify insurance<ArrowUpRight size={16}/></a></SheetClose>
     </nav>
     <SheetClose asChild><a className="button-primary mt-6 text-center" href={pathTo('/book/')}>Request an appointment</a></SheetClose>
   </SheetContent>
 </Sheet>;
}
