const InputEl = document.querySelector('.side-menu>.offcanvas>.offcanvas-body>.test>.todolist-text>.todo-text>input');
const TodoListEl = document.querySelector('.side-menu>.offcanvas>.offcanvas-body>.test>.todolist-text>.a>ul');

const todo = () => {

  // 비어있을때는 추가x
  if (InputEl.value == '') {
    alert("할 일을 적어주세요..");
    return;
  }
  const liEl = document.createElement('li');
  let code = '';
  code += '<div><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></div>';
  code += '<div><span>' + InputEl.value + '</span></div>';
  code += '<div>';
  code += '<div><i class="bi bi-trash"></i></div>';
  code += '';

  liEl.innerHTML = code;
  TodoListEl.append(liEl);
  InputEl.value = '';
};

// 엔터키에 대한 이벤트
InputEl.addEventListener('keydown', function () {
  // console.log(event.keyCode);
  if (event.keyCode == 13) {
    todo();
  }
})


