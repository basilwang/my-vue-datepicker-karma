<template>
  <div class="place">
    <div class="from">
      <span class="title">出发地<br><i>From</i></span>
      <input type="text" @focus="isActive=true" name="" v-bind:value="fromCity" id="fromCity">
    </div>
    <i id="transform" class="transform"></i>
    <div class="to">
      <span class="title">到达地<br><i>To</i></span>
      <input type="text" name="" value="上海" id="toCity">
    </div>
    <div id="cityPicker" class="city-picker" :class="{open:isActive}">
      <i id="closeCityPicker" class="close"><img src="images/close.png" width="20" alt="" @click="isActive=false"></i>
      <ul id="tagName" class="option-title clearfix">
        <li v-for="item in tabList" @click="filterCity(item)">
          {{item}}
        </li>
      </ul>
      <div class="option-content">
        <!-- <div id="hot" class="hot">
                        </div> -->
        <ul id="areaList" class="area-list clearfix">
          <li v-for="item in filteredCityList" v-on:click="fromCity=item.city">
            {{item.city}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
var Vue = require('vue');
module.exports = {
  name: 'citypicker',
  data: function () {
    return {
      isActive: false,
      fromCity: '北京',
      filteredCityList: [],
      cityList: [{
        city: '北京',
        pinyin: 'B'
      }, {
        city: '武汉',
        pinyin: 'W'
      }, {
        city: '上海',
        pinyin: 'S'
      }, {
        city: '天津',
        pinyin: 'T'
      }, {
        city: '广州',
        pinyin: 'G'
      }, {
        city: '开封',
        pinyin: 'K'
      }],
      tabList: [
        '全部',
        'ABCDE',
        'FGHIJ',
        'KLMNO',
        'PQRST',
        'UVWXYZ'
      ]

    };
  },
  methods: {
    filterCity: function (letter) {
      var newCityArray = this.cityList.filter(function (item, index, array) {
        return (letter.indexOf(item['pinyin'])) > -1;
      });
      this.filteredCityList = newCityArray;
    }
  }
};
</script>
