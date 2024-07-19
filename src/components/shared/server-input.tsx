// import React from "react";
// import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
// import { UseFormReturn } from "react-hook-form";
// import { Popover, PopoverTrigger } from "../ui/popover";
// import { Button } from "../ui/button";
// import { cn } from "@/lib/utils";
// import { servers } from "@/constants";

// export default function ServerInput({
//   form,
// }: {
//   form: UseFormReturn<
//     {
//       server: string;
//     },
//     any,
//     undefined
//   >;
// }) {
//   return (
//     <FormField
//       control={form.control}
//       name="server"
//       render={({ field }) => (
//         <FormItem className="flex flex-col">
//           <FormLabel>Server</FormLabel>
//           <Popover>
//             <PopoverTrigger asChild>
//               <FormControl>
//                 <Button
//                   variant="outline"
//                   role="combobox"
//                   className={cn(
//                     "w-[200px] justify-between",
//                     !field.value && "text-muted-foreground"
//                   )}
//                 >
//                   {field.value
//                     ? servers.find((server) => language.value === field.value)
//                         ?.label
//                     : "Select language"}
//                   <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                 </Button>
//               </FormControl>
//             </PopoverTrigger>
//             <PopoverContent className="w-[200px] p-0">
//               <Command>
//                 <CommandInput
//                   placeholder="Search framework..."
//                   className="h-9"
//                 />
//                 <CommandList>
//                   <CommandEmpty>No framework found.</CommandEmpty>
//                   <CommandGroup>
//                     {languages.map((language) => (
//                       <CommandItem
//                         value={language.label}
//                         key={language.value}
//                         onSelect={() => {
//                           form.setValue("language", language.value);
//                         }}
//                       >
//                         {language.label}
//                         <CheckIcon
//                           className={cn(
//                             "ml-auto h-4 w-4",
//                             language.value === field.value
//                               ? "opacity-100"
//                               : "opacity-0"
//                           )}
//                         />
//                       </CommandItem>
//                     ))}
//                   </CommandGroup>
//                 </CommandList>
//               </Command>
//             </PopoverContent>
//           </Popover>
//           <FormDescription>
//             This is the language that will be used in the dashboard.
//           </FormDescription>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   );
// }
