<template>
    <v-container class="d-flex justify-center align-center" style="height: 100vh;">
        <v-card width="520" class="pa-6">
            <h2 class="text-center mb-3">สร้างบัญชีผู้ใช้</h2>
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
            class="mb-3"
            prepend-inner-icon="mdi-lock"
            />
            <v-text-field
            v-model="name_id"
            label="ชื่อผู้ใช้"
            type="text"
            variant="outlined"
            class="mb-3"
            prepend-inner-icon="mdi-account"
            />
            <v-select
            v-model="department_id"
            :item="department"
            item-title="name"
            item-value="id"
            variant="outlined"
            label="เเผนก"
            />
            <v-select
            v-model="group_id"
            :item="group"
            item-title="name"
            item-value="id"
            variant="outlined"
            label="กลุ่ม"
            />
            <v-btn color="primary" block class="text-center mt-2" @click="register">สร้างบัญชีผู้ใช้</v-btn>
            <div class="text-center mt-4">มีบัญชีอยู่เเล้ว
                <RouterLink to="/">เข้าสู่ระบบ</RouterLink>
            </div>
        </v-card>
    </v-container>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const name_id = ref("");
const department_id = ref([])
const group_id = ref([])

const department = ref([])
const group = ref([])


async function loaddata() {
    const dapt = await axios.get('')
    department = dapt.data
    const grop = await axios.get('')
    group = grop.data
}

async function  register () {
    payload = {
        email:email.value,
        password:password.value,
        name_id:name_id.value,
        department_id:department_id.value,
        group_id:group_id.value,
    }
    try{
        const respone = await axios.post('', payload)

        res = respone.data
        if(res.succes){
            router.push('/')
        }else{
            alert('สร้างบัญชีไม่สำเร็จ')
        }
    }catch(err){
        console.log(err)
    }
}


onMounted(() =>{
    loaddata()
})

</script>

