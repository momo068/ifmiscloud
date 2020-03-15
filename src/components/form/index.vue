<template>
    <div class="form_container">
        <h1>我是field里的form</h1>
        <el-row class="autocomplete">
            <div class="formfield"  v-for="(item,index) of formDataList">
                <!--{{item.type}}-->
                    <el-col v-if="item.isvisiable" :span="12">
                        <!--字符串-->
                        <div v-if="item.type === 's'">
                            <FormfieldText  :textdata="item"></FormfieldText>
                        </div>
                        <!--复选框-->
                        <div v-else-if="item.type === 'checkbox'">
                            <FormfieldCheckBox  :comboboxdata="item"></FormfieldCheckBox>
                        </div>
                        <!--多选框-->
                        <div v-else-if="item.type === 'radio'">
                            <FormfieldRadio  :radiodata="item"></FormfieldRadio>
                        </div>
                        <!--大文本-->
                        <div v-else-if="item.type === 'textarea'">
                           <FormfieldTextarea  :textareadata="item"></FormfieldTextarea>
                        </div>
                        <!--数字-->
                        <div v-else-if="item.type === 'i'">
                            <FormfieldNumber  :numberdata="item"></FormfieldNumber>
                        </div>
                        <!--查询选择器-->
                        <div v-else-if="item.type === 'select'">
                            <formfieldSelect  :selectdata="item"></formfieldSelect>
                        </div>
                        <!--日期选择器-->
                        <div v-else-if="item.type === 'date'">
                            <FormfieldDate  :datedata="item"></FormfieldDate>
                        </div>
                        <!--日期区间选择器-->
                        <div v-else-if="item.type === 'intervaldate'">
                            <formfieldIntervalDate  :intervaldatedata="item"></formfieldIntervalDate>
                        </div>
                        <!--日期区间选择器-->
                        <div v-else-if="item.type === 'tree'">
                            <trees :treedata="item"></trees>
                        </div>
                  </el-col >
            </div>
        </el-row>

    </div>
</template>

<script>
    import FormfieldText from './field/formfieldText.vue'
    import FormfieldCheckBox from './field/formfieldCheckBox.vue'
    import FormfieldNumber from './field/formfieldNumber.vue'
    import FormfieldRadio from './field/formfieldRadio.vue'
    import FormfieldTextarea from './field/formfieldTextarea.vue'
    import formfieldSelect from './field/formfieldSelect.vue'
    import FormfieldDate from './field/formfieldDate.vue'
    import formfieldIntervalDate from './field/formfieldIntervalDate.vue'
    import FormfieldTreepanel from './field/formfieldTreepanel.vue'
    import trees from './field/tree.vue'
    export default {
        name:'forms',
        data() {
            return {
//                textdata:{'aaaa':1111},
//                comboboxdata:{},
//                checkedList:['地区','性别']
            }
        },
        components:{
            FormfieldText,
            FormfieldCheckBox,
            FormfieldNumber,
            FormfieldRadio,
            FormfieldTextarea,
            formfieldSelect,
            FormfieldDate,
            formfieldIntervalDate,
            FormfieldTreepanel,
            trees,
        },
        props:{
            formDataList: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        created(){
        },
        methods:{

        }
    }
</script>

<style lang="less" scoped>
    .form_container{
        margin-bottom: 20px;
        .autocomplete{
            text-align: center;
        }
    }
</style>
