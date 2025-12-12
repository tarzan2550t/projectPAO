<template>
  <v-app>

    <!-- Navbar -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>ยินดีต้อนรับ ผู้ประเมิน</v-toolbar-title>

      <v-spacer />

      <v-btn color="red" @click="logout">
        ออกจากระบบ
      </v-btn>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer app v-model="drawer" :permanent="!isMobile">
      <v-list>

        <v-list-item link to="/admin/dashboard">
          <v-list-item-title>แดชบอร์ด</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/admin/users">
          <v-list-item-title>ตารางผู้ใช้</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/admin/topic">
          <v-list-item-title>หัวข้อการประเมินหลัก</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/admin/Subtopic">
          <v-list-item-title>หัวข้อตัวชี้วัด</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/admin/Indicator">
          <v-list-item-title>หัวข้อการประเมินย่อย</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/admin/evaluatorrole">
          <v-list-item-title>กำหนดผู้ประเมิน</v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <!-- เนื้อหา -->
    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(true)
const isMobile = ref(false)

function updateScreen() {
  isMobile.value = window.innerWidth <= 900
  drawer.value = !isMobile.value
}

onMounted(() => {
  updateScreen()
  window.addEventListener('resize', updateScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreen)
})

function logout() {
  localStorage.removeItem('token')
  router.replace('/')
}
</script>
