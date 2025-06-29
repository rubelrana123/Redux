import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { DialogDescription } from "@radix-ui/react-dialog";
import { Textarea } from "@/components/ui/textarea";
export function AddTaskModal() {
    const form = useForm();
    const onSubmit = (data : any)  =>{
        console.log(data)
    }
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Add New Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogDescription className="sr-only">Fill here your task</DialogDescription>
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
          </DialogHeader>
          //form here 
    <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)}>
        {/*title  */}
          <FormField
    control={form.control}
    name="title"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
         <Input {...field} value={field.value || ""}/>
        </FormControl>
        <FormDescription />
      
      </FormItem>
    )}
  />
  {/* discription */}
            <FormField
    control={form.control}
    name="discription"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
         <Textarea {...field} value={field.value || ""}/>
        </FormControl>
        <FormDescription />
      
      </FormItem>
    )}
  />
  {/* duedate */}

          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
     </form>
</Form>
        </DialogContent>
      </form>
    </Dialog>
  )
}
