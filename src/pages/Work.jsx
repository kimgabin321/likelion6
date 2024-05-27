import {useState} from "react";
import styled from 'styled-components';

const H1 = styled.h1`
  color: #036635; 
  font-size: 35px;
  font-weight: bold;
`;

const Body = styled.div`
//   margin-left: 100px;
//   margin-top: -300px;
`;

const ToDoInput = styled.input`
  font-size: 20px;
  border: none;
  width: 270px;
`;

const Button = styled.button`
  color: white;
  font-weight: bold;
  background-color: #036635;
  border: none;
`;

const ToDoItem = styled.div`
  background-color: #f1f3f5;
  margin-top: 10px;
  width:400px;
  height: 60px;
  border-radius: 5%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  display: flex; 
  align-items: center; 
  justify-content: space-between;
  position: relative;
`;

const DeleteButton = styled.button`
  color: white;
  font-weight: bold;
  font-size: 15px;
  background-color: #db4455;
  border: none;
  height: 30px;
  width: 80px;
  display: flex; 
  align-items: center; 
  position: absolute; 
  right: 20px;
  top: 50%; 
  transform: translateY(-50%); 
`;

export default function WorkPage() {

const [todos, setTodos] = useState([]); // 투두 리스트의 항목 저장
const [inputValue, setInputValue] = useState(""); // 사용자 입력 값 저장

const handleChange = (event) => { // 입력 필드의 값이 변경될 때 호출
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => { // 입력값 추가
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleDeleteTodo = (todoToDelete) => {
    setTodos(todos.filter(todo => todo !== todoToDelete));
  };    

  return (
    <>
<Body>
      <H1>My Starbucks Todo List</H1>
      <ToDoInput id="to-do-input" placeholder="Enter your todo" value={inputValue} onChange={handleChange}/>
      <Button onClick={handleAddTodo}>Add Todo</Button>

      <div>
      {todos.map((todo) => (
        <ToDoItem key={todo}>
          {todo}
          <DeleteButton onClick={() => handleDeleteTodo(todo)}>
            Delete
          </DeleteButton>
        </ToDoItem>
      ))}
    </div>
    </Body>  
    </>
  );
}

