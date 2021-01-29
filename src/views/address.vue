<template>
  <div class="item-address">
    <index></index>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="position: absolute; width: 0px; height: 0px; overflow: hidden"
    >
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path
            d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"
            class="path1"
          ></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path
            d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"
            class="path1"
          ></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path
            d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"
            class="path1"
          ></path>
          <path
            d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path2"
          ></path>
          <path
            d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path3"
          ></path>
          <path
            d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path4"
          ></path>
        </symbol>
      </defs>
    </svg>
    <div class="addr-title">收货地址</div>
    <div class="addr-list clearfix">
      <div
        class="addr-info"
        v-for="(item, index) in list"
        :class="{ checked: index == checkIndex }"
        @click="checkIndex = index"
        :key="index"
      >
        <h2>{{ item.receiverName }}</h2>
        <div class="phone">{{ item.receiverMobile }}</div>
        <div class="street">
          {{
            item.receiverProvince +
            " " +
            item.receiverCity +
            " " +
            item.receiverDistrict +
            " " +
            item.receiverAddress
          }}
        </div>
        <div class="action">
          <a href="javascript:;" class="fl" @click.stop="delAddress(index)">
            <svg class="icon icon-del">
              <use xlink:href="#icon-del"></use>
            </svg>
          </a>
          <a href="javascript:;" class="fr" @click="editAddressModal(item)">
            <svg class="icon icon-edit">
              <use xlink:href="#icon-edit"></use>
            </svg>
          </a>
        </div>
      </div>
      <div class="addr-add" @click="openAddressModal">
        <div class="icon-add"></div>
        <div>添加新地址</div>
      </div>
    </div>
    <modal
      title="新增确认"
      btnType="1"
      :showModal="showEditModal"
      @cancel="showEditModal = false"
      @submit="submitAddress"
    >
      <template v-slot:body>
        <div class="edit-wrap">
          <div class="item">
            <input
              type="text"
              class="input"
              placeholder="姓名"
              v-model="checkedItem.receiverName"
            />
            <input
              type="text"
              class="input"
              placeholder="手机号"
              v-model="checkedItem.receiverMobile"
              maxlength="11"
            />
          </div>
          <div class="item">
            <select name="province" v-model="checkedItem.receiverProvince">
              <option disabled selected>Select your province</option>
              <option
                v-for="(item, index) in address"
                :key="index"
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>
            <select name="city" v-model="checkedItem.receiverCity">
              <option disabled selected>Select your city</option>
              <option
                v-for="(item, index) in city"
                :key="index"
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>
            <select name="district" v-model="checkedItem.receiverDistrict">
              <option disabled selected>Select your district</option>
              <option
                v-for="(item, index) in district"
                :key="index"
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="item">
            <textarea
              name="street"
              v-model="checkedItem.receiverAddress"
            ></textarea>
          </div>
          <div class="item">
            <input
              type="text"
              class="input"
              placeholder="邮编"
              maxlength="6"
              v-model="checkedItem.receiverZip"
            />
          </div>
        </div>
      </template>
    </modal>
  </div>
</template>
<script>
import Index from "./index";
import Modal from "../components/Modal.vue";
import address from "../util/address.js";
import session from "../util/session";
export default {
  components: {
    Modal,
    Index,
  },
  inject: ["reload"],
  data() {
    return {
      showEditModal: false,
      address: address,
      city: "",
      district: "",
      // 现存地址列表
      list: {},
      // 编辑的地址
      checkedItem: {},
      checkIndex: 0,
      // 区分新增or编辑
      userAction: "",
    };
  },
  mounted() {
    if (session.getItem(address)) {
      console.log(session.getItem(address));
      this.list = session.getItem(address);
    }
  },
  watch: {
    "checkedItem.receiverProvince": function (val) {
      if (val) {
        this.address.forEach((item) => {
          if (item.name == val) {
            this.city = item.children;
          }
        });
      }
    },
    "checkedItem.receiverCity": function (val) {
      if (val) {
        this.city.forEach((item) => {
          if (item.name == val) {
            this.district = item.children;
          }
        });
      }
    },
  },
  methods: {
    openAddressModal() {
      this.showEditModal = true;
      this.userAction = 0;
    },
    editAddressModal(item) {
      this.showEditModal = true;
      console.log(item);
      this.checkedItem = item;
      this.userAction = 1;
      this.checkedId = item.id;
    },
    delAddress(index) {
      // 保存当前选中的地址
      var checked = this.checkIndex;
      // 让点击的选项设为选中
      this.checkIndex = index;
      console.log("删除逻辑");
      for (var k in this.list) {
        if (k == this.checkIndex) {
          delete this.list[k];
        }
      }
      // 若删除项是当前选中的，选中的值变为第一个
      if (checked == this.checkIndex) {
        this.checkIndex = 0;
      } else {
        // 否则不变
        this.checkIndex = checked;
      }
      // 若当前值就只有一个且删除了，发出提示
      var arr = Object.keys(this.list);
      if (arr.length == 0) this.$message.warning("还没选择地址");
      console.log(this.list);
    },
    submitAddress() {
      let { checkedItem, userAction } = this;
      if (userAction == 0 || userAction == 1) {
        console.log("进入正则");
        let {
          receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip,
        } = checkedItem;
        let errMsg = "";
        if (!receiverName) {
          errMsg = "请输入收货人名称";
        } else if (
          !/^1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(
            receiverMobile
          )
        ) {
          errMsg = "请输入正确格式的手机号";
        } else if (!receiverProvince) {
          errMsg = "请选择省份";
        } else if (!receiverCity) {
          errMsg = "请选择对应的城市";
        } else if (!receiverAddress || !receiverDistrict) {
          errMsg = "请输入收货地址";
        } else if (!/^\d{6}$/.test(receiverZip)) {
          console.log("错误捕获");
          errMsg = "请输入六位邮编";
        }
        if (errMsg) {
          this.$message.error(errMsg);
          return;
        }
        if (userAction == 0) {
          console.log("进入新增");
          this.extend(this.list, this.checkedItem);
        } else if (userAction == 1) {
          console.log("进入编辑");
          console.log("当前选中--" + this.checkIndex);
          this.list[this.checkIndex] = this.checkedItem;
        }
        this.showEditModal = false;
        this.checkedItem = {};
      }
    },
    // 实际开发中该将checkedItem提交给服务器保存到数据库中，再读取list
    extend(target, source) {
      console.log(target);
      let a = {};
      // for in遍历键名
      for (let obj in source) {
        a[obj] = source[obj];
      }
      //Object.keys(target)判断对象是否为空对象
      var arr = Object.keys(target);
      if (arr.length == 0) {
        target[0] = a;
      } else {
        for (let i in target) {
          var count = i;
        }
        target[Number(count) + 1] = a;
        console.log(count);
      }
      session.setItem(address, target);
      return target;
    },
  },
};
</script>
<style lang="scss">
.addr-title {
  font-size: 20px;
  color: #333333;
  font-weight: 200;
  margin-bottom: 21px;
}
.item-address {
  .addr-list {
    .addr-info,
    .addr-add {
      box-sizing: border-box;
      float: left;
      width: 271px;
      height: 180px;
      border: 1px solid #e5e5e5;
      margin-right: 15px;
      padding: 15px 24px;
      font-size: 14px;
      color: #757575;
    }
    .addr-info {
      cursor: pointer;
      h2 {
        height: 27px;
        font-size: 18px;
        font-weight: 300;
        color: #333;
        margin-bottom: 10px;
      }
      .street {
        height: 50px;
      }
      .action {
        height: 50px;
        line-height: 50px;
        .icon {
          width: 20px;
          height: 20px;
          fill: #666666;
          vertical-align: middle;
          &:hover {
            fill: #ff6700;
          }
        }
      }
      &.checked {
        border: 1px solid #ff6700;
      }
    }
    .addr-add {
      text-align: center;
      color: #999999;
      cursor: pointer;
      .icon-add {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: url("/imgs/icon-add.png") #e0e0e0 no-repeat center;
        background-size: 14px;
        margin: 0 auto;
        margin-top: 45px;
        margin-bottom: 10px;
      }
    }
  }
}
.edit-wrap {
  font-size: 14px;
  .item {
    margin-bottom: 15px;
    .input {
      display: inline-block;
      box-sizing: border-box;
      width: 283px;
      height: 40px;
      line-height: 40px;
      padding-left: 15px;
      border: 1px solid #e5e5e5;
      & + .input {
        margin-left: 14px;
      }
    }
    select {
      height: 40px;
      line-height: 40px;
      border: 1px solid #e5e5e5;
      margin-right: 15px;
    }
    textarea {
      height: 62px;
      width: 100%;
      padding: 13px 15px;
      box-sizing: border-box;
      border: 1px solid #e5e5e5;
    }
  }
}
</style>