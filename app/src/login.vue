<template>
    <v-container class="d-flex justify-center align-center" style="height: 100vh;">
        <v-card width="420" class="pa-6">
            <h2 class="text-center mb-6">เข้าสู่ระบบ</h2>

                <v-text-field
                v-model="email"
                type="email"
                label="อีเมล"
                variant="outlined"
                class="mb-3"
                prepend-inner-icon="mdi-email"
                />

                <v-text-field
                v-model="password"
                label="รหัสผ่าน"
                type="password"
                variant="outlined"
                class="mb-4"
                prepend-inner-icon="mdi-lock"
                />
            <v-btn color="primary" block class="mt-2" @click="login"> เข้าสู่ระบบ</v-btn>
            <div class="text-center mt-4">
                ยังไม่มีบัญชีผู้ใช้? <RouterLink to="/register">สร้างบัญชีผู้ใช้</RouterLink>
            </div>
        </v-card>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter()

const email = ref("");
const password = ref("");



async function login() {
    const data = {
        email:email.value,
        password:password.value,
    }
    console.log(data)
    try{
        const respone = await axios.post('',data)
        
        const res = respone.data 

       if(res.success){
            localStorage.getItem('token' ,res.token)
            if(res.role === 'admin'){
                router.push('/admin')
            }if(res.role === 'evaluator'){
                router.push('/assessor')
            }if(res.role === 'evaluatee'){
                router.push('/user')
            }
        }
    }catch(err){
        console.log(err)
    }
}

</script>
