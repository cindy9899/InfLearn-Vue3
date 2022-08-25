const objPlugins = {
  install(app, options) {
    console.log('objPlugins app: ', app);
    console.log('objPlugins options: ', options);
    //app.component() 전역 컴포넌트
    //app.config.globalProperties //전역 앱 인스턴스에 속성 추가
    //app.directive 커스텀 디렉티브
    //app.provide() 다양한 리소스를 자체 컴포넌트에서 사용할 수 있다.
  },
};

export default objPlugins;
