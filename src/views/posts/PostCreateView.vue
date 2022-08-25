<template>
  <div>
    <h2>게시글 등록</h2>
    <hr />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      v-on:submit.prevent="save"
    >
      <template #actions>
        <button type="button" class="btn btn-outline-dark" @click="goListPage">
          목록
        </button>
        <button class="btn btn-primary">저장</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert';

const { vAlert, vSuccess } = useAlert();

const router = useRouter();
const form = ref({
  title: null,
  content: null,
});
const goListPage = () => router.push({ name: 'PostList' });
const save = () => {
  try {
    createPost({
      ...form.value,
      createdAt: Date.now(),
    });
    // router.push({ name: 'PostList' });
    vSuccess('등록이 완료되었습니다.');
  } catch (error) {
    vAlert(error.message);
  }
};
</script>

<style lang="scss" scoped></style>
