import {reactive, toRefs} from "vue";

export const useStorage = () => { //로컬스토리지 저장 및 불러오기
    const KEY = 'my-todo-list'
    const storage_obj = reactive({storage_id:0})
    const loadTodos = (initTodos) => { //로컬 스토리지에 저장된 데이터 불러오기
        let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]') //JSON
        temp_todos.forEach((todo,idx) => {
            todo.id=idx
        })
        storage_obj.storage_id = temp_todos.length
        initTodos(temp_todos)
    }
    const saveTodos=(todos)=>{ //로컬 스토리지에 저장하기
        localStorage.setItem(KEY, JSON.stringify(todos.value)) //JSON으로 변환 하여 저장
    }
    return {...toRefs(storage_obj), loadTodos, saveTodos}
}