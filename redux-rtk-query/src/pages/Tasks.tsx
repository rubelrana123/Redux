import { AddTaskModal } from '@/components/modules/tasks/AddTaskModal';
import TaskCard from '@/components/modules/tasks/TaskCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGetTasksQuery } from '@/redux/api/baseApi';
 
import type { ITask } from '@/types';
 

export default function Tasks() {
  
    const {data, isError, isLoading} = useGetTasksQuery(undefined, {
      // pollingInterval : 1000,
      refetchOnFocus : true,
      refetchOnMountOrArgChange : true,
      refetchOnReconnect : true
    });
    console.log({data, isError, isLoading});

  return (
    <div>
         <div className=''>
        <h1 className='font-semibold flex justify-center'>Daily Task</h1>
         </div>
         <div className='flex justify-end gap-2'>
           <Tabs defaultValue='All'>
           <TabsList>
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger  value="High">High</TabsTrigger>
          <TabsTrigger  value="Low">Low</TabsTrigger>
          <TabsTrigger  value="Medium">Medium</TabsTrigger>
        </TabsList>
          
        </Tabs>
        <AddTaskModal/>
         </div>

        <div className='space-y-5 mt-5'>
          
            {
               !isLoading &&

                data.tasks.map((task : ITask)=> 
                    <TaskCard key={task._id} task={task}/>
             )
            }
            

        </div>
    </div>

  )
}
