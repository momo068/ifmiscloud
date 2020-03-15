<template>
    <div class="form_checkbox_container">
        <el-col :span="24">
            <el-form class="form" label-width="100px">
                <el-form-item :label="comboboxdata.name">
                    <el-checkbox-group v-model="checkedLists" >
                        <!--disabled是针对整队全局-->
                        <el-checkbox v-for="(item, index) in list"
                                     :label="item.name"
                                :disabled="comboboxdata.isedit==0?true:false"
                        >{{item.name}}
                        </el-checkbox>

                    </el-checkbox-group>

                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: 'formfieldComboBox',
        data() {
          let checkedList =['one','three']
            return {
                list: [],
                checkedLists:checkedList
            };
        },
        props: {
            comboboxdata: {
                type: Object,
                default(){
                    return {}
                }
            },
//            checkedList:Array //数据从props传过来或在mounted里获取数据
        },
        created(){
        },
        mounted(){
            console.log(this.checkedList)
            this.getChekList()
        },
        methods: {
            getChekList(){
                this.list = [  //这里let定义allTags
                    {id: 1, pid: 1, name: 'one'},
                    {id: 2, pid: 2, name: 'two'},
                    {id: 3, pid: 4, name: 'three'}
                ]
            },
            changeData(){

            }
        }
    }
</script>

<style lang="less" scoped>

</style>
