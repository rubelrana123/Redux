export interface ITask {
  id: string;
  title: string;
  discription: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
  assignTo : string | null
}


export interface IUser {
  id : string,
  name : string
}