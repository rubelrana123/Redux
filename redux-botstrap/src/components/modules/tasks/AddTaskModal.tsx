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
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToTask } from "@/redux/features/tasks/taskSlice";
import type { ITask } from "@/types";
import { selectUsers } from "@/redux/features/users/userSlice";
import { useState } from "react";
export function AddTaskModal() {
  const [open, setOpen] = useState(false);
    const form = useForm();
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers)
    const onSubmit: SubmitHandler<FieldValues> = (data)  =>{
        console.log(data)
        dispatch(addToTask(data as ITask))
        setOpen(false);
        form.reset();

    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
  {/* select pririty */}
    <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>priority</FormLabel>
              <Select  onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified priority to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* addign to */}
 
    <FormField
          control={form.control}
          name="assignTo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assign to</FormLabel>
              <Select  onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified assigned user to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    users.map((user) => <SelectItem value={user.id}>{user.name}</SelectItem>)
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* calendar */}
              <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>due Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
 
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
 
              <FormMessage />
            </FormItem>
          )}
        />
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
