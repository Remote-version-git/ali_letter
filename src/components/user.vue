<template>
  <div class="user">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row>
      <el-col :span="2" style="margin-right:10px">
        <el-button type="primary" round @click="addDialogVisible = true"
          >添加用户</el-button
        >
      </el-col>
      <el-col :span="4">
        <el-input v-model="query.keyword" placeholder="请输入内容">
          <el-button
            icon="el-icon-search"
            circle
            slot="append"
            @click="getUsersList"
          ></el-button>
        </el-input>
      </el-col>
    </el-row>

    <el-card>
      <!-- tab表格 -->
      <el-table :data="usersList" stripe style="width: 100%">
        <el-table-column type="index" label="#" width="100"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="phone" label="用户电话"></el-table-column>
        <el-table-column prop="book_coin" label="书豆余额"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scoped">
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="deleteUsersList(scoped.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="50%">
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usersList: [],
      query: {
        keyword: "",
        per_page: 5,
        page: 1
      },
      addDialogVisible: false
    };
  },
  methods: {
    async getUsersList() {
      const { data: res } = await this.$http.get("users", {
        params: this.query
      });
      this.usersList = res.data;
    },
    addUser() {},
    deleteUsersList(id) {
      console.log(id);
    }
  },
  created() {
    this.getUsersList();
  }
};
</script>

<style lang="less" scoped>
.user {
  // margin: 0 0 0 15px;
  padding: 15px;
}
.el-breadcrumb {
  margin-top: 20px;
}

.el-row {
  margin-top: 20px;
}

.el-card {
  margin-top: 15px;
}

.el-table__header {
  height: 10px;
}
</style>
