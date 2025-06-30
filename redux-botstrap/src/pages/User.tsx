import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUser, deleteUser } from "@/redux/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { IUser } from "@/types";
import { Trash2 } from "lucide-react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

export default function User() {
  const form = useForm();
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.userList.users);
  console.log("userssss", users);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Submitted Data:", data);
    dispatch(addUser(data));
  };

  return (
    <div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add User</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add User</DialogTitle>
            </DialogHeader>

            {/* ✅ Only one form tag here */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* name input */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          placeholder="Enter Name"
                        />
                      </FormControl>
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
        </Dialog>
      </div>
      {users.map((user) => {
        return (
          <div className="border-2 p-4">
            <h1>{user.name}</h1>
            <Button
              onClick={() => dispatch(deleteUser(user.id))}
              variant="link"
              className="p-0 text-red-500"
            >
              <Trash2 />
            </Button>
          </div>
        );
      })}
    </div>
  );
}
