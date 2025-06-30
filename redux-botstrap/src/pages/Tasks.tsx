import { AddTaskModal } from '@/components/modules/tasks/AddTaskModal';
import TaskCard from '@/components/modules/tasks/TaskCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { selectFilter, selectTasks, updateFilter } from '@/redux/features/tasks/taskSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
 

export default function Tasks() {
    const tasks = useAppSelector(selectTasks);
    const taskFilter = useAppSelector(selectFilter);
    const dispatch = useAppDispatch();

  return (
    <div>
         <div className=''>
        <h1 className='font-semibold flex justify-center'>Daily Task</h1>
         </div>
         <div className='flex justify-end gap-2'>
           <Tabs defaultValue='All'>
           <TabsList>
          <TabsTrigger onClick={()=> dispatch(updateFilter("All"))}  value="All">All</TabsTrigger>
          <TabsTrigger  onClick={()=> dispatch(updateFilter("High"))} value="High">High</TabsTrigger>
          <TabsTrigger  onClick={()=> dispatch(updateFilter("Low"))} value="Low">Low</TabsTrigger>
          <TabsTrigger  onClick={()=> dispatch(updateFilter("Medium"))} value="Medium">Medium</TabsTrigger>
        </TabsList>
          
        </Tabs>
        <AddTaskModal/>
         </div>

        <div className='space-y-5 mt-5'>
          
            {
                tasks.map((task)=> 
                    <TaskCard key={task.id} task={task}/>
             )
            }
            

        </div>
    </div>

  )
}
