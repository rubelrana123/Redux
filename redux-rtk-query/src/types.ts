export interface ITask {
  _id: string;
  title: string;
  discription: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
 
}


export interface IUser {
  id : string,
  name : string
}