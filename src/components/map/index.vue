<template>
<!--  高德地图热点图-->
  <div class="task">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-form-item label="最大故障点数量" prop="pageSize">
        <el-select size="small" v-model="dataForm.pageSize" clearable placeholder="请选择最大故障点数量">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="开始时间" prop="startTime">
        <el-date-picker v-model="dataForm.startTime" type="date" size="small" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间" prop="endTime">
        <el-date-picker v-model="dataForm.endTime" type="date" size="small" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button @click="getAllocaData()" size="small" type="primary">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-upload
          action=""
          :show-file-list="false"
          :beforeUpload="importHandlecs">
          <el-button slot="trigger" type="warning"  size="small">导入</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="map" id="container"></div>
  </div>
</template>

<script>
  // import {importrd} from '../../../../api/modules/sys/pwzs'
  export default {
    name: "index",
    data () {
      return {
        dataForm: {
          type: '',
          startTime: '',
          endTime: '',
          pageSize: 10
        },
        allocUpdateVisible: false,
        daterange: null,
        dataList: [],
        value: '',
        index: 0,
        myGeo: '',
        map: '',
        adds: [
          {cljg: "【非供电产权】下发为一户无电，经现场查勘实际为用户内部故障。由宁波供电公司江北供电所抢修班徐国瑞赶赴现场进行故障抢修，经查此户的故障点在表后处，故障现象是一户停电，非供电企业抢修范围，属用户产权，于16日8点25分跟客户解释。客户表示认可。处理人：徐国瑞.",
            createTime: "2019-12-20 16:46:17",
            dw: null,
            ejfl: "居民客户内部故障",
            gdbh: "181216302188",
            gddw: "宁波供电公司",
            gwgdbh: "2018121698927801",
            gzdz: "浙江省宁波市江北区庄桥街道广厦社区榭嘉路广厦怡庭北区小区395号",
            hfnr: "尊敬的客户您好，您于12月16日来电反映的关于浙江省宁波市江北区庄桥街道广厦社区榭嘉路广厦怡庭北区小区395号的故障报修已处理，请回复数字对我们的服务进行评价：1非常满意；2满意；3一般；以下为不满意选项（可多选）：4服务态度；5抢修质量；6到达时间；7抢修速度；8现场未修复；9其他。你用电，我用心，感谢您的积极参与，祝您生活愉快！（本信息1小时内回复有效）",
            id: 3968,
            lxdh: "13959031936",
            slnr: "【一户无电】低压居民客户报修一户无电，无法判断设备故障及其资产归属，请现场查处。",
            slsj: "2018-12-16 07:46",
            status: 0,
            updateTime: "2019-12-20 16:46:16",
            yhbh: "5001519604",
            yjfl: "客户内部故障",
            ywlx: "故障报修",
            ywzl: "居民客户内部故障"},
          {
            cljg: "【单户停电】下发为缺相，经现场查勘实际为单户停电。由宁波供电公司慈城事故班史翔赶赴现场进行故障抢修，经查此户是熔断器故障，于16日07点56分抢修完毕，恢复供电。客户表示认可。处理人：史翔。",
            createTime: "2019-12-20 16:46:17",
            dw: null,
            ejfl: "低压设备",
            gdbh: "181216302139",
            gddw: "宁波供电公司",
            gwgdbh: "2018121698925869",
            gzdz: "浙江省宁波市江北区慈城镇苗山桥路12号",
            hfnr: "尊敬的客户您好，您于12月16日来电反映的关于浙江省宁波市江北区慈城镇苗山桥路12号的故障报修已处理，请回复数字对我们的服务进行评价：1非常满意；2满意；3一般；以下为不满意选项（可多选）：4服务态度；5抢修质量；6到达时间；7抢修速度；8现场未修复；9其他。你用电，我用心，感谢您的积极参与，祝您生活愉快！（本信息1小时内回复有效）",
            id: 3969,
            lxdh: "13805898066",
            slnr: "【缺相】客户报修单户缺相，请处理。",
            slsj: "2018-12-16 06:43",
            status: 0,
            updateTime: "2019-12-20 16:46:16",
            yhbh: null,
            yjfl: "低压故障",
            ywlx: "故障报修",
            ywzl: "熔断器",
          },
          {
            cljg: null,
            createTime: "2019-12-20 16:46:16",
            dw: null,
            ejfl: "低压故障",
            gdbh: "181229333433",
            gddw: "宁波供电公司",
            gwgdbh: "2018122901515655",
            gzdz: "Z--浙江省宁波市江北区庄桥街道30加油站",
            hfnr: null,
            id: 3848,
            lxdh: "13566342795",
            slnr: "【井盖故障】客户报修此处有电力井盖遗失、严重破损，已危及行人、车辆安全，请处理。",
            slsj: "2018-12-29 08:06",
            status: 0,
            updateTime: "2019-12-20 16:46:15",
            yhbh: null,
            yjfl: "低压故障",
            ywlx: "故障报修",
            ywzl: "低压故障",
          },
        ],
        markers: [],
        pointList: [],
        infoWindow: '',
        options: [
          {label: '10个点', value: 10},
          {label: '20个点', value: 20},
          {label: '30个点', value: 30},
          {label: '50个点', value: 50},
          {label: '100个点', value: 100},
        ],
      }
    },
    mounted () {
      let myDate = new Date()
      let nowYear = myDate.getFullYear()
      let lastMonth = myDate.getMonth()
      let nowData = myDate.getDate()
      if(lastMonth === 0){
        nowYear = nowYear -1;
        lastMonth = 12;
      }
      this.dataForm.startTime = nowYear + '-' + lastMonth.toString().padStart(2, '0') + '-' + nowData.toString().padStart(2, '0')
      this.dataForm.endTime = myDate
      this.getAllocaData()
    },
    methods:{
      showMap () {
        this.map = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 12,
          center: [121.524349, 29.919178]
        });
        this.map.clearMap();
        this.geocoder = new AMap.Geocoder();
        for(let i = 0 ; i< this.adds.length;i++){
          this.changeAddress(this.adds[i].gzdz,this.adds[i])
        }
      },
      changeAddress (address,content) {
        let that = this
        that.geocoder.getLocation(address, function(status, result) {
          if (status === 'complete' && result.geocodes.length) {
            var lnglat = result.geocodes[0].location
            that.pointList.push({
              lng: lnglat.lng,
              lat: lnglat.lat,
              gdbh: content.gdbh,
              gwgdbh: content.gwgdbh,
              ywlx: content.ywlx,
              slsj: content.slsj,
              yjfl: content.yjfl,
              ejfl: content.ejfl,
              ywzl: content.ywzl
            })
            that.showPoint();
          }else{
            console.error('根据地址查询位置失败');
          }
        });
      },
      showPoint () {
        let that = this
        var marker;
        var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)})
        for(var i=0 ; i< that.pointList.length;i++){
          var jfong = [ that.pointList[i].lng,that.pointList[i].lat];
          marker = new AMap.Marker({
            position: jfong,
            map:that.map
          });
          marker.setMap(this.map);
          marker.gdbh=this.pointList[i].gdbh;
          marker.gwgdbh=this.pointList[i].gwgdbh;
          marker.ywlx=this.pointList[i].ywlx;
          marker.slsj=this.pointList[i].slsj;
          marker.yjfl=this.pointList[i].yjfl;
          marker.ejfl=this.pointList[i].ejfl;
          marker.ywzl=this.pointList[i].ywzl;
          marker.content  = "" +
            "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>工单编号："+marker.gdbh+"</h4>"+
            "<p style='margin:0;line-height:1.5;font-size:13px'>国网工单编号：" + marker.gwgdbh +"</p>"+
            "<p style='margin:0;line-height:1.5;font-size:13px'>业务类型：" + marker.ywlx +"</p>"+
            "<p style='margin:0;line-height:1.5;font-size:13px'>受理时间：" + marker.slsj +"</p>"+
            "<p style='margin:0;line-height:1.5;font-size:13px'>一级分类：" + marker.yjfl +"</p>"+
            "<p style='margin:0;line-height:1.5;font-size:13px'>二级分类：" + marker.ejfl +"</p>"+
            "<p style='margin:0;line-height:1.5;font-size:13px'>业务子类：" + marker.ywzl +"</p>";
          marker.on('click', markerClick);
          marker.emit('click', {target: marker});
        }
        function markerClick(e) {
          infoWindow.setContent(e.target.content);
          infoWindow.open(that.map, e.target.getPosition());
        }
          that.map.setFitView();
      },
      getAllocaData () {
        let that = this
        that.index = 0
        that.pointList = []
        that.showMap()
        // this.$http({
        //   url: this.$http.adornUrl('/pb/pbtroubleticket/list'),
        //   method: 'get',
        //   params: this.$http.adornParams({
        //     limit: this.dataForm.pageSize,
        //     startTime: this.dataForm.startTime,
        //     endTime: this.dataForm.endTime
        //   })
        // }).then(({data}) => {
        //   if (data && data.code === 0) {
        //     loading.close()
        //     that.adds = data.page.list || []
        //     setTimeout(function(){
        //       that.showMap();
        //       },200);
        //   } else {
        //     loading.close()
        //     that.$message.error(data.msg)
        //   }
        // })
      },
      importHandlecs (file) {
        // let formData = new FormData()
        // formData.append('file', file)
        // const loading = this.$loading({
        //   lock: true,
        //   text: 'Loading',
        //   spinner: 'el-icon-loading',
        //   background: 'rgba(255, 255, 255, 0.7)',
        //   target: document.querySelector('.map')
        // })
        // importrd(formData).then(({data})=>{
        //   if(data && data.code === 0){
        //     loading.close()
        //     this.$message.success('导入成功')
        //     this.getAllocaData()
        //   }else{
        //     loading.close()
        //     this.$message.error(data.msg)
        //   }
        // })
      },
    }
  }
</script>

<style>
  .map {
    width: 100%;
    min-height: 600px;
    z-index: 1;
  }
  .anchorBL {
    display: none;
  }
</style>
