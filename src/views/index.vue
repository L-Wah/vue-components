<template>
  <div>
    <button @click="a" class="btn btn-success">提示框</button>
    <button @click="b" class="btn btn-success">地址框</button>
  </div>
</template>
<script>
export default {
  methods: {
    a() {
      this.$router.push("/model");
    },
    b() {
      this.$router.push("/address");
    },
  },
};
</script>
<style lang="scss" scoped >
@import "../assets/scss/reset.scss";
@import "../assets/scss/base.scss";
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 110px;
}
.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  margin: 20px;
}
.btn-success:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}
</style>