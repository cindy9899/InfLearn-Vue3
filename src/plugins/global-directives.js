import focus from '@/directive/focus';
import color from '@/directive/color';
export default {
  install(app) {
    app.directive('focus', focus);
    app.directive('color', color);
  },
};
