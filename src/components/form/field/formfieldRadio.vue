<template>
    <div class="form_radio_container">
        <el-col :span="24">
            <el-form class="form"   label-width="100px">
                <el-form-item :label="radiodata.name">
                    <el-radio-group v-model="checkedLists">
                        <el-radio
                                v-for="(item, index) in list"
                                :label="item.name"
                        >{{item.name +1}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: 'formfieldRadio',
        data() {
            let checkedList =1
            return {
                list: [
                    {id: 1, pid: 1, name: "1"},
                    {id: 2, pid: 2, name: 'radio测试1'},
                    {id: 3, pid: 3, name: 'radio测试2'},
                    {id: 4, pid: 4, name: 'ninhao'}
                ],
                checkedLists:"1"
            };
        },
        props: {
            radiodata: {
                type: Object,
                default(){
                    return {}
                }
            },
              //数据从props传过来或在mounted里获取数据
        },
        created(){
        },
        mounted(){

        },
        methods: {
            changeData(){

            }
        }
    }
</script>

<style lang="less" scoped>

</style>



