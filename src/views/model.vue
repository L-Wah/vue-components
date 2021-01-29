<template>
  <div>
    <index></index>
    <h1>modal组件:</h1>
    <button @click="modal()" class="btn">按钮文字</button>
    <modal
      title="提示"
      sureText="查看"
      btnType="1"
      modalType="middle"
      :showModal="showModal"
      @submit="goTo"
      @cancel="showModal = false"
    >
      <template v-slot:body>
        <p>提示文字！</p>
      </template>
    </modal>
  </div>
</template>
<script>
import Index from "./index";
import Modal from "../components/Modal.vue";
export default {
  components: {
    Modal,
    Index,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    // 普通提示框
    modal() {
      this.showModal = true;
    },
    goTo() {
      console.log("触发事件/跳转");
    },
  },
};
</script>