// 플로그인은 클래스를 제작함
// 플로그인 작업이 완료되는 시점에 로그를 찍는 함수
class CompletionLog {
  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    compiler.hooks.done.tap('completionLog', (stats) => {
      console.log('completionLog: done');
    });
  }
}

module.exports = CompletionLog;
