<template>
  <AppLoading v-if="loading" />
  <AppError v-else-if="error" :message="'Error!'" />
  <div v-else>
    <h2>게시글 수정</h2>
    <hr />
    <AppError v-if="editError" :message="editError.message" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="edit"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary" :disabled="editLoading">
          <template v-if="editLoading">
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Loading...</span>
          </template>
          <template v-else> 수정 </template>
        </button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert';
import { useAxios } from '@/hook/userAxios';

const { vAlert, vSuccess } = useAlert();

const route = useRoute();
const router = useRouter();
const id = route.params.id;

//fetch용 axios
const { data: form, error, loading } = useAxios(`/posts/${id}`);

//edit용 axios
const {
  error: editError,
  loading: editLoading,
  execute,
} = useAxios(
  `/posts/${id}`,
  { method: 'patch' },
  {
    immediate: false,
    onSuccess: () => {
      router.push({ name: 'PostDetail', params: { id } });
      vSuccess('수정이 완료되었습니다.', 'success');
    },
    onError: err => {
      vAlert(err.message);
      editError.value = err;
    },
  },
);

const edit = () => {
  execute({
    ...form.value,
  });
};
const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });
</script>

<style lang="scss" scoped></style>
