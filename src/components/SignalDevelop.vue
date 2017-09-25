<template>
	<div>
		<nav-bar :navMenuItems="signalDevelopMenu"></nav-bar>

		<div class="signal-develop">
			<div class="banner">
				<div>
					<div style="padding-top: 34px;"><img class="user-image" src="/static/SignalDevelop/user-photo.jpg"></div>
					<div class="user-name">不二咚</div>
					<div class="user-signature">行情总在绝望中产生，猜疑中成长，欢乐中死亡。</div>
				</div>
				<div class="banner-tabs">
					<span class="banner-tab" style="background-color: #00AEFC; z-index: 999;">我的信号</span>
					<span class="banner-tab" style="width: 180px; margin-left: -34px;">开发优化模型</span>
					<span class="banner-tab" style="margin-left: -34px;">信号征集</span>
				</div>
			</div>
			<div class="signal-table">
				<div>
					<el-dropdown trigger="click">
				      <el-button type="primary">
					    + 新建信号
					  </el-button>
				      <el-dropdown-menu slot="dropdown" class="signalCategory">
				      	<el-dropdown-item v-for="cat in signalCategories">
				      		<router-link to="/AICommunity/myStrategy">{{cat.label}}</router-link>
				      	</el-dropdown-item>
				      </el-dropdown-menu>
				    </el-dropdown>
				    <el-button type="warning" style="margin-left: 20px;" :disabled="optimizeButtonDisabled">优化信号</el-button>
				    <el-button v-if="showDelete">删除</el-button>
				</div>
				<div>
					<div style="color: #666666; padding: 24px 0px 16px;">全部文件</div>
					<div>
						<template>
						    <el-table
						      :data="signalListData"
						      style="width: 100%" @selection-change="selectSignalItem">
						      <el-table-column
						        prop="id"
						        label="id"
						        type="selection">
						      </el-table-column>
						      <el-table-column
						        prop="name"
						        label="名称"
						        width="180">
						      </el-table-column>
						      <el-table-column
						        prop="category"
						        label="分类"
						        width="175">
						      </el-table-column>
						      <el-table-column
						        prop="lastModTime"
						        width="204"
						        label="最后修改时间">
						      </el-table-column>
						      <el-table-column
						        prop="compileHistory"
						        label="历史编译运行"
						        width="204">
						      </el-table-column>
						      <el-table-column
						        prop="backTestHistory"
						        label="历史回测"
						        width="180">
						        <template scope="scope">
						        	<template v-if="parseInt(scope.row.backTestHistory) > 0">
						        		<router-link to="/AICommunity/MyStrategy">{{scope.row.backTestHistory}}</router-link>
						        	</template>
						        	<template v-else>
						        		<span>{{scope.row.backTestHistory}}</span>
						        	</template>
							      </template>
						      </el-table-column>
						      <el-table-column
						        prop=""
						        label="上架策略">
						        	<template scope="scope">
								        <router-link to="">上架</router-link>
								    </template>
						      </el-table-column>
						    </el-table>
						</template>
					</div>
				</div>

				<div style="padding-top: 22px; height: 20px;">
					<div style="float: right;">
						<el-pagination
						  small
						  layout="prev, pager, next"
						  :total="50">
						</el-pagination>
					</div>
				</div>
			</div>
			<div class="signal-city">
				<div class="signal-city-header">
					<span style="display: block; font-size: 30px; color: #333333;">我的信号商城</span>
					<span style="display: block; text-align: center;"><span style="display: inline-block; border-top: 2px solid #C8C8C8; width: 50px;"></span></span>
				</div>
				<div class="signal-city-list">
					<div style="color: #666666; padding: 43px 0px 26px;">
						<span>信号实盘收益展示（2）</span>
						<span style="padding-left: 26px;">信号进入模拟交易系统统计（1）</span>
					</div>
					<div style="border: 1px solid black; width: 100%; margin: 0 auto;">
						<div style="display: inline-block; background-color: white; width: 380px; height: 442px;">
							<div>
								<span>银行轮动</span>
								<span>信号实盘</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<footer-bar></footer-bar>
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar"
import FooterBar from "@/components/layout/FooterBar"
export default {
	components: {
		NavBar,
		FooterBar
	},
	data() {
		return {
			signalDevelopMenu: [
				{title: "首页", link: "/", selected: false},
				{title: "智能投顾", link: "/AIadvisor/assetsSteward", selected: false},
				{title: "AI社区",
					link: "",
					selected: false,
					subMenus: [
						{title: "我的策略", link: "/AICommunity/myStrategy"}
					]
				},
				{title: "清华量协", link: "", selected: false},
				{title: "个人账号", link: "", selected: false}
			],
			signalCategories: [
				{value: "stock", label: "股票"},
				{value: "futures", label: "期货"},
				{value: "forex", label: "外汇"},
				{value: "bond", label: "债券"},
				{value: "options", label: "期权"}
			],
			signalListData: [
				{id: 1, name: "小市值策略", category: "股票", lastModTime: "2017-09-01", compileHistory: "每天", backTestHistory: 1},
				{id: 2, name: "小市值策略", category: "期货", lastModTime: "2017-09-01", compileHistory: "每天", backTestHistory: 2},
				{id: 3, name: "小市值策略", category: "股票", lastModTime: "2017-09-01", compileHistory: "每天", backTestHistory: 0},
				{id: 4, name: "小市值策略", category: "股票", lastModTime: "2017-09-01", compileHistory: "每天", backTestHistory: 2},
				{id: 5, name: "小市值策略", category: "股票", lastModTime: "2017-09-01", compileHistory: "每天", backTestHistory: 0}
			],
			optimizeButtonDisabled: true,
			showDelete: false

		};
	},
	methods: {
		selectSignalItem: function(selection, row) {
			console.log("***");
			console.log(selection);
			if(selection.length > 0) {
				this.showDelete = true;
			}else {
				this.showDelete = false;
			}

			if(selection.length > 1) {
				this.optimizeButtonDisabled = false;
			}else {
				this.optimizeButtonDisabled = true;
			}
		}
	}
}
</script>

<style lang="scss">
	.signal-develop {
		.banner {
			background: url(/static/SignalDevelop/signal-develop-banner.png) no-repeat center center;
			color: white;
			text-align: center;
			.user-image {
				height: 142px;
				width: 142px;
				border: 6px solid rgba(255, 255, 255, 0.2);
				border-radius: 71px;
			}

			.user-name {
				padding-top: 30px;
				font-size: 20px
			}

			.user-signature {
				padding-top: 18px;
				font-size: 14px;
				color: #8F9399;
			}

			.banner-tabs {
				padding-top: 44px;
				padding-bottom: 60px;
				font-size: 18px; 
				height: 34px;
				line-height: 34px;

				.banner-tab {
					display: inline-block;
					border-radius: 17px;
					width: 132px;
					background-color: #FFFFFF;
					color: #000000;
					position: relative;

					&:hover {
						cursor: pointer;
					}
				}
			}
		}

		.signal-table {
			padding: 20px 0px 50px;
			width: 1200px;
			margin: 0 auto;
			font-size: 14px;

			a {
				color: #00AEFC;
				text-decoration: none;
			}
		}

		.signal-city {
			background-color: #E6E6E6;
			width: 100%;
			height: 300px;
			margin: 0 auto;
			padding: 50px 0px 70px;

			.signal-city-header {
				text-align: center;
			}

			.signal-city-list {
				width: 1200px;
				margin: 0 auto;
			}
			
		}
	}
	
	.signalCategory {
		a {
			color: #000000;
			text-decoration: none;
		}
	}
</style>