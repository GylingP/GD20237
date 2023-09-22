<template>
    <h3>Flag尝试</h3>
    <p>--本表单为占位样式 无效果--</p>
    <el-form label-position="top" :model="form">
        <el-form-item label="提交者名称">
            <el-input v-model="form._nickname" placeholder="十泉浩12138" />
        </el-form-item>
        <el-form-item label="Flag序号">
            <el-select v-model="form.flag_index" placeholder="Select" size="large">
                <el-option label="flag1" value="1"></el-option>
                <el-option label="flag2" value="2"></el-option>
            </el-select> 
        </el-form-item>
        <el-form-item label="Flag值">
            <el-input v-model="form.flag_value" placeholder="{flag_value}" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
    </el-form>
    <h3>全部记录</h3>
    <p>--本表格为占位样式 无效果--</p>
    <el-table :data="submitData">
        <el-table-column property="date" label="Date" width="111" />
        <el-table-column property="name" label="Name" />
        <el-table-column property="flag_index" label="Flag_Index" />
        <el-table-column property="attempts" label="Attempts" />
    </el-table>
</template>
<script>
import { ElMessage } from 'element-plus'

function onSubmit(){
    ElMessage('这只皊皊很懒并没来得及写提交响应')
}

export default {
    name: "FlagSumbit",
    data() {
        return {
            submitData: [{
                date: '2023-08-16',
                name: 'Alice',
                flag_index: 'flag1',
                attempts: 2
            },
            {
                date: '2023-08-15',
                name: 'Bob',
                flag_index: 'flag2',
                attempts: 2
            },
            {
                date: '2023-08-13',
                name: 'Carol',
                flag_index: 'flag1',
                attempts: 1
            }
            ],
            form: {
                _nickname:'',
                flag_index: '',
                flag_value: ''
            }
        }
    },
    methods:{
        onSubmit
    }
}
</script>