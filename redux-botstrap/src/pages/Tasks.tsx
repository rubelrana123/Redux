import { AddTaskModal } from '@/components/modules/tasks/AddTaskModal';
import TaskCard from '@/components/modules/tasks/TaskCard';
import { selectFilter, selectTasks } from '@/redux/features/tasks/taskSlice';
import { useAppSelector } from '@/redux/hooks';

export default function Tasks() {
    const tasks = useAppSelector(selectTasks);
    const taskFilter = useAppSelector(selectFilter)

  return (
    <div>
        <h1 className='font-semibold flex justify-center'>Daily Task</h1>
        <AddTaskModal/>
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
