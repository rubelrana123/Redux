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
import { useAppDispatch } from "@/redux/hooks";
import { addToTask } from "@/redux/features/tasks/taskSlice";
import type { ITask } from "@/types";
export function AddTaskModal() {
    const form = useForm();
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<FieldValues> = (data)  =>{
        console.log(data)
        dispatch(addToTask(data as ITask))

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

        {/* calendar */}
              <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
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
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
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
