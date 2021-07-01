//액션을 출력하고 다음으로 넘기는 미들웨어 작업

const myLogger = store => next => action => {
  console.log(action);//액션을 먼저 출력한다.
  const result = next(action);//다음 미들웨어나 리듀서에게 액션을 전달한다
  
  console.log('\t', store.getState());//업데이트 이후의 상태 조회

  return result; //이곳에서 반환하는 값은 dispatch(action)의 결과물이 됨
}

export default myLogger;