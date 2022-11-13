<script setup lang="ts">
import { ref } from "vue";
import { Delete, Edit, Share } from "@element-plus/icons-vue";
import { ElMessageBox } from "element-plus";
import { store } from '../stores/counter';

const dialogVisible = ref(false);

const handleOk = () => {
  dialogVisible.value = false;
  store.commit('increment')
  console.log(store.state.count)
};
const handleClose = (done: () => void) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};

const input = ref("");
const forminput = ref("");

</script>

<template>
  <div>
    <div class="wrapper">
      <el-input v-model="input" placeholder="Please input" />
      <el-space wrap>
        <el-button type="primary" @click="dialogVisible = true">新建</el-button>
        <el-button-group class="ml-4">
          <el-button type="primary" :icon="Edit" />
          <el-button type="primary" :icon="Share" />
          <el-button type="primary" :icon="Delete" />
        </el-button-group>
      </el-space>
      <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="30%"
        :before-close="handleClose"
      >
        <span>This is a message</span>
        <el-input v-model="forminput" placeholder="Please input" />
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="handleOk">Confirm</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}
.wrapper .el-input {
  width: 240px;
}
</style>
