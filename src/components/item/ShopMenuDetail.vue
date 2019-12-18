<template>
    <div class="card border-primary m-2">
        <!-- <img src="/static/images/shop_img/rice_200X250.png" alt="" class="card-img-top"> -->
        <div class="card-header">
            詳細菜單
        </div>
        <div class="card-body">

            <div class="menu-category" v-for="cate in shopDetail" :key="cate.category_name">
                <div class="category-title bg-primary text-light py-1">        
                       {{cate.category_name}}
                </div>
                <div class="list-group mb-5">
                        <ul class="menu-item-list">
                          <li class="list-group-item" v-for="(item,idx) in cate.sub_list" :key="idx">

                            <div class="row menu-item ">
                                <div class="col-9">
                                  <span @click.stop="orderDetailMenu(item)"></span>{{item.item_name}}

                                </div>
                      
                                <span class="badge badge-primary badge-pill col-1 align-middle"> 
                                  ${{item.item_price[0]}}
                                </span>
                            </div>

                            <div class="row bg-light order-detail" v-if="item.id == editMeal">
                              <div class="close-detail"> <i class="material-icons" @click.stop="editMeal='';item.number='';item.note='';">close</i></div>

                              <div class="item-detail col-10">
                                <div class="form-group row pt-2 text-primary">
                                    <label class="col-2 col-form-label">數量</label>
                                    <div class="col-10"><input type="number" value="0" v-model.number="item.number"></div>
                                </div>
                                <div class="form-group row pt-2 text-primary">
                                    <div class="col-2 col-form-label">備註</div>
                                    <div class="col-10"><textarea class="form-control" rows="2" v-model="item.note"></textarea></div>
                                </div>
                                <div class="form-group  row">
                                    <div class="col-8"></div>
                                    <div class="col-4">
                                         <button type="button" class="btn btn-secondary right" @click.stop="addToMyOrder(item,item.number,item.note)">加入『我的訂單』</button>
                                    </div>
                                </div>
                              </div>

                            </div>
                          </li>
                        </ul>
                </div>    

            </div>
        </div>
    </div>
</template>

<style  lang="scss" scoped>
    .card-body{
        .info{
          font-size: 12px;
          i{
            font-size: 12px;
          }
        
        }
        .menu-category{
            .category-title{
                font-size: 16px;
                margin:15px  0  8px 0;
                padding-left:8px;
                border-left:10px solid var(--secondary);
            }
            .menu-item-list{
              padding:0;
            }
            .menu-item{
              .order-edit{
                font-size:16px;
                vertical-align: middle;
                margin-right: 10px;
                padding:2px;
                cursor: pointer;
                color:var(--primary);
                background: var(--light);
                &:hover{
                  color:var(--white);
                  background:var(--primary);
                }

              }
              .badge{
                line-height: 30px;
              }
              .order-one{
                color:var(--primary);
                cursor:pointer;
                border-radius: 5px;
                padding:3px;
                &:hover{
                  color:var(--danger);
                  background-color:var(--light)
                }

              }
            }
        }
        .order-detail{
          display: block;
          min-height:100px;
          clear: both;
          position: relative;
          .item-detail{
            height: 100%;
          }
          .close-detail{
            position: absolute;
            right:10px;
            top:8px;
            cursor: pointer;
          }

        }

    }

</style>

<script>

// 假資料 item_price 有可能有多筆，大中小。
var MenuData = [
  {
    category_id: 1,
    category_name: "咖哩飯",
    sub_list: [
      {
        id: 1,
        item_name: "竹筴魚咖哩飯(辣)",
        item_price: [140]
      },
      {
        id: 2,
        item_name: "牛奶豬排咖哩飯(限量)",
        item_price: [120]
      },
      {
        id: 3,
        item_name: "牛奶雞排咖哩飯(帶骨)",
        item_price: [120]
      },
      {
        id: 4,
        item_name: "特製雞肉咖哩飯(辣)",
        item_price: [100]
      },
      {
        id: 5,
        item_name: "肉丸子咖哩飯(豬肉)",
        item_price: [90]
      },
      {
        id: 6,
        item_name: "田園蔬菜咖哩丼(無肉含蛋)",
        item_price: [90]
      },
      {
        id: 7,
        item_name: "卡滋蝦排咖哩飯(辣)",
        item_price: [80]
      }
    ]
  },
  {
    category_id: 2,
    category_name: "丼飯",
    sub_list: [
      {
        id: 21,
        item_name: "韓式泡菜丼(豬肉)",
        item_price: [130]
      },
      {
        id: 22,
        item_name: "韓式泡菜丼(牛肉)",
        item_price: [120]
      },
      {
        id: 23,
        item_name: "咖哩丼(豬肉)",
        item_price: [120]
      },
      {
        id: 24,
        item_name: "咖哩丼(牛肉)",
        item_price: [120]
      },
      {
        id: 25,
        item_name: "月見青蔥丼(豬肉)",
        item_price: [110]
      },
      {
        id: 26,
        item_name: "月見青蔥丼(牛肉)",
        item_price: [110]
      },
      {
        id: 27,
        item_name: "元氣丼(豬肉)",
        item_price: [95]
      },
      {
        id: 28,
        item_name: "元氣丼(牛肉)",
        item_price: [95]
      }
    ]
  },

  {
    category_id: 3,
    category_name: "髒咖哩",
    sub_list: [
      {
        id: 31,
        item_name: "炸鱈魚條滷肉咖哩飯",
        item_price: [120]
      },
      {
        id: 32,
        item_name: "黑胡椒豬滷肉咖哩飯",
        item_price: [110]
      },
      {
        id: 33,
        item_name: "滷肉咖哩飯",
        item_price: [90]
      }
    ]
  },
  {
    category_id: 4,
    category_name: "其他的美味配菜",
    sub_list: [
      {
        id: 41,
        item_name: "雞排",
        item_price: [65]
      },
      {
        id: 42,
        item_name: "起司可樂餅",
        item_price: [60]
      },
      {
        id: 43,
        item_name: "鮮蝦排",
        item_price: [50]
      },
      {
        id:44,
        item_name: "肉丸子<附有咖哩醬汁>",
        item_price: [50]
      },
      {
        id: 45,
        item_name: "龍蝦沙拉",
        item_price: [50]
      },
      {
        id: 46,
        item_name: "韓式泡菜",
        item_price: [40]
      },
      {
        id: 47,
        item_name: "日式牛蒡絲",
        item_price: [30]
      },
      {
        id: 48,
        item_name: "起司片<加在咖哩醬汁上>",
        item_price: [30]
      },
      {
        id: 49,
        item_name: "薯餅",
        item_price: [25]
      },
      {
        id: 410,
        item_name: "蔬菜湯",
        item_price: [30]
      },
      {
        id: 411,
        item_name: "白飯",
        item_price: [15]
      }
    ]
  }
];

export default {
  name: "ShopMenuDetail",
  data() {
    return {
      shopDetail: MenuData,
      editMeal:''
    };
  },
  methods:{

  },
  created() {
    var vs = this;
  }
};
</script>


