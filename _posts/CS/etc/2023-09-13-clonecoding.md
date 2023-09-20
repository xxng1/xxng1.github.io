---
title:  "Recoil와 atom"
# excerpt: "spring"

categories:
  - react
tags:
  - [react]

toc: true
toc_sticky: false
 
date: 2023-09-20
#last_modified_at: 2023-09-10
sidebar_main: true
---

## Recoil

> React 애플리케이션에서 상태 관리를 효과적으로 수행하기 위한 라이브러리로, 
전역 상태를 관리하고 컴포넌트 간에 상태를 공유할 수 있게 해준다.
> 

## Atom

> Recoil에서 사용되는 상태 단위(컴포넌트 간에 공유할 수 있는 상태 값)
각각의 전역 상태에 대한 atom이 생성되고 해당 상태를 구독하는 구성 요소만 리렌더링
(= 불필요한 리렌더링을 방지)
>

### 예시

```jsx
// Recoil 상태 관리 설정
import { atom, RecoilRoot, useRecoilState } from 'recoil';
```

```jsx
// Atom 정의
const todoListState = atom({
key: 'todoListState',
default: [],
});
```

```jsx
// React 컴포넌트
function TodoApp() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
// useRecoilState 훅을 사용하여 컴포넌트 내에서 해당 상태를 읽고 업데이트

  const addTodo = (newTodo) => {
// addTodo 함수를 통해 새로운 할 일을 목록에 추가
    setTodoList([...todoList, newTodo]);
  };

// ...생략
```

- Atoms는 상태 단위이며, 업데이트와 참조가 가능하다.
- atom이 업데이트되면 각각의 컴포넌트들은 새로운 값을 반영하여 리렌더링 된다.
- atoms는 컴포넌트 내부의 상태 대신 사용될 수 있다.
- 동일한 atom이 여러 컴포넌트에서 사용되는 경우 그 **컴포넌트들은 상태**를 공유한다.
- Atoms는 atom 함수를 사용해 생성한다.
- atom의 키 값은 전역적으로 고유해야 한다.