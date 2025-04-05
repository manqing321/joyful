<script setup>
    import Header from '@/components/Header.vue'
    import Content from '@/components/Content.vue'
    import Footer from '@/components/Footer.vue'
</script>

<template>
   <div class="common-layout">
    <el-container>
      <el-header style="height: 10%;"><Header /></el-header>
      <el-main><Content /></el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
</template>

<style scoped></style>
