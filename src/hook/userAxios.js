import axios from 'axios';
import { isRef, ref, unref, watchEffect } from 'vue';

// 전체 axios의 baseURL에 index.js에 있던 환경변수를 가져옴
axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

const defaultConfig = {
  method: 'get',
};
const defaultOptions = {
  immediate: true,
};
export const useAxios = (url, config = {}, options = {}) => {
  const response = ref(null);
  const data = ref([]);
  const error = ref(null);
  const loading = ref(false);

  const { onSuccess, onError, immediate } = {
    ...defaultOptions,
    ...options,
  };

  const { params } = config;
  const execute = body => {
    data.value = null;
    error.value = null;
    loading.value = true;
    axios(url, {
      ...defaultConfig,
      ...config,
      params: unref(params), //파람즈는 언래핑 해주어야 넘어간다.
      data: typeof body === 'object' ? body : {},
      //watcheffect로 실행하면 함수가 넘어오는데 그땐 빈값을 넘겨줌
    })
      .then(res => {
        response.value = res; //헤더(totalCount)를 사용하기 위해
        data.value = res.data;
        if (onSuccess) {
          onSuccess(res);
        }
      })
      .catch(err => {
        error.value = err;
        if (onError) {
          onError(err);
        }
      })
      .finally(() => {
        loading.value = false;
      });
  };

  if (isRef(params)) {
    //만약 isRef로 정의한 함수(반응형)
    watchEffect(execute);
  } else {
    //일반 변수라면 한번만 실행
    if (immediate) {
      //속성이 true일때만 실행
      execute();
    }
  }
  return { response, data, error, loading, execute };
};
