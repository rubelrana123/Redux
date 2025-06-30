import { SquarePen, Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ITask } from "@/types";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hooks";
import { deleteTask, toggleCompleteState, updateTask } from "@/redux/features/tasks/taskSlice";
interface IProps {
  task : ITask
}
export default function TaskCard({task} : IProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="border-2 rounded-md py-3 px-5">
    
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className={cn("size-3 rounded-full" ,{
              "bg-green-500" : task.priority === "High",
              "bg-red-500" : task.priority === "Low",
              "bg-yellow-500" : task.priority === "Medium",

            })}></div>
            <h1 className={cn({"line-through" : task.isCompleted}) }>{task.title}</h1>
          </div>
          <div className="flex gap-3 items-center">
            <Button onClick={() => dispatch(deleteTask(task.id))} variant="link" className="p-0 text-red-500">
              <Trash2 />
    
            </Button>
             <Button variant="link" className="p-0 text-green-500">
             <SquarePen/>
    
            </Button>
            <Checkbox checked={task.isCompleted} onClick={() => dispatch(toggleCompleteState(task.id))} />
          </div>
        </div>
        <div>
          <p className="mt-5">{task.discription}</p>
        </div>
  
    </div>
  );
}
