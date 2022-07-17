<template>
  <el-row>
    <el-row style="padding-left: 20px;">
      <div style="padding-top: 40px">
        <img src="../../assets/toutiao.png" style="padding-left: 20px">
        <span style="padding-left:20px; font-size: 22px;font-weight: bold;font-style: italic">关于</span><span style="font-size: 25px;font-weight: bold;color: #f36663;font-style: italic"> 雷锋热线</span>
        <p style="padding-left: 80px;padding-right: 80px;padding-top: 20px">每年3月5日是学雷锋纪念日。为积极培育和深入践行社会主义核心价值观，大力弘扬“奉献、友爱、互助、进步”的志愿服务精神，按照中央文明办有关要求，进一步建立健全学雷锋志愿服务工作机制，持续推动全国学雷锋志愿服务活动常态化开展，中央文明办联合有关部门在3月5日开展“雷锋热线”百万志愿者百个社区行志愿服务活动。文明办指导全国志愿者全媒体平台，推出汇集全城爱心、长期为人民服务的“雷锋热线”，倡议全市百万志愿者共同参与，并征集、组织100个公益组织、100支共产党员服务队、100个爱心企业、100名道德模范、100名企业家加入热线成为“雷锋热线”首批爱心成员，共同参与“雷锋热线百万志愿者百个社区行”大型志愿服务活动。</p>
      </div>
    </el-row>
    <el-row style="padding-top: 30px">
      <el-row style="padding-left: 20px">
      <img src="../../assets/toutiao.png" style="padding-left: 20px">
      <span style="padding-left:20px; font-size: 22px;font-weight: bold;font-style: italic">联系我们</span>
      </el-row>
      <el-col :span="8" offset="2" style="padding-top: 10px"><i class="el-icon-phone"></i><span>+86 18905254185</span></el-col>
      <el-col :span="8" style="padding-top: 10px"><i class="el-icon-message"></i><span> 1726423134@qq.com</span></el-col>
    </el-row>
    <el-row style="padding-top: 50px">
      <el-row style="padding-left: 20px">
        <img src="../../assets/toutiao.png" style="padding-left: 20px">
        <span style="padding-left:20px; font-size: 22px;font-weight: bold;font-style: italic">我要求助</span>
      </el-row>
      <el-row style="padding-left: 80px;padding-right: 80px;padding-top: 20px">
        <el-col :span="16">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="姓名" style="width: 480px">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="所在地">
            <el-select v-model="form.region" placeholder="请选择所在地">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="求助时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="求助性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="经济援助" name="type"></el-checkbox>
              <el-checkbox label="法律援助" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="求助内容">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item style="padding-left: 300px">
            <el-button type="danger" plain round @click="onSubmit">立即求助</el-button>
          </el-form-item>
        </el-form>
        </el-col>
      </el-row>
    </el-row>
    <el-row style="padding-top: 50px">
      <el-row style="padding-left: 20px">
        <img src="../../assets/toutiao.png" style="padding-left: 20px">
        <span style="padding-left:20px; font-size: 22px;font-weight: bold;font-style: italic">我要帮扶</span>
      </el-row>
      <el-row style="padding-left: 80px;padding-right: 80px;padding-top: 20px">
        <el-col :span="16">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名" style="width: 480px">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="所在地">
              <el-select v-model="form.region" placeholder="请选择所在地">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="意向时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="帮扶性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="经济援助" name="type"></el-checkbox>
                <el-checkbox label="法律援助" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="帮扶理由及技能">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item style="padding-left: 300px">
              <el-button type="danger" plain round @click="onSubmit">意向帮扶</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: "weHelp",
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        type: [],
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
h1{
  width: 100%;
  padding-top: 12px;
  padding-left: 20px;
  font-size: 20px;
}
</style>
