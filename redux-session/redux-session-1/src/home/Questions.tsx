import { setAnswer } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default function Questions() {
    const dispatch = useAppDispatch();
    const {questions, currentQuestionIndex ,userAnswer}  = useAppSelector((state) => state.quiz)
    const currentQuestion = questions[currentQuestionIndex];
    const currentAnswer = userAnswer[currentQuestionIndex];

    const handleAnswerChange = (ans : string) =>{
        dispatch(setAnswer(ans))
        console.log(ans)
    }
    return (
    <Card>
  <CardHeader>
    <CardTitle>{currentQuestion.question}</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  )
}
