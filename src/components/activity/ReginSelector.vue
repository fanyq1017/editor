<template>
  <div id="app">
    <el-cascader
      size="large"
      :options="options"
      v-model="selectedOptions"
      @change="handleChange">
    </el-cascader>
  </div>
</template>
 
<script>
  import { regionData, CodeToText, TextToCode } from 'element-china-area-data'
  export default {
    data () {
      return {
        options: regionData,
        selectedOptions: []
      }
    },
 
    methods: {
     // 在获取详情信息接口中使用 TextToCode 将字符串转换成编码赋给 selectedOptions 
    projectInfo () {
      var that = this;
      getProjectInfo({ token: getToken(), id: that.id }).then(res => {
        this.addForm = {
          id: res.id,
          // 基础信息
          p_name: res.p_name,   //项目名
          p_message: res.p_message,   //项目信息
          area: res.area,   //地区
          remark: res.remark,   //备注
        }
        this.selectedOptions = TextToCode[this.addForm.area.split('/')[0]][this.addForm.area.split('/')[1]][this.addForm.area.split('/')[2]].code;

      }).catch(err => {
        Message.error(err)
      })
    },
      handleChange (value) {
	      console.log(value)
	      this.getCodeToText(null, value)
	    },
	   getCodeToText (codeStr, codeArray) {
	      if (null === codeStr && null === codeArray) {
	        return null;
	      } else if (null === codeArray) {
	        codeArray = codeStr.split(",");
	      }
	      let area = "";
	      switch (codeArray.length) {
	        case 1:
	          area += CodeToText[codeArray[0]];
	          break;
	        case 2:
	          area += CodeToText[codeArray[0]] + "/" + CodeToText[codeArray[1]];
	          break;
	        case 3:
	          area +=
	            CodeToText[codeArray[0]] +
	            "/" +
	            CodeToText[codeArray[1]] +
	            "/" +
	            CodeToText[codeArray[2]];
	          break;
	        default:
	          break;
	      }
	      console.log(area)
	      this.addForm.area = area
	      return area;
	    }
    }
  }
</script>

<style>
#app {
    height: auto;
}
</style>