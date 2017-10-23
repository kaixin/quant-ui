<template>
	<div class="customtable-header">
		<div class="tab-header">
			<div class="tab-back">
				<img src="../../../../static/Buyersignal/icon_fanhui.png" />
				<span>小市值策略</span>
				<img src="" />
			</div>
			<ul class="tab-list">
				<li>编辑策略</li>
				<li>回测详情</li>
				<li>编辑运行列表</li>
				<li>回测列表</li>
			</ul>
		</div>
		<div class="back-bottom"></div>
		<div class="set-header">
			<div class="set-back">
				设置：<span class="start-time">2017-10-1</span>到
				<span class="end-time">2017-10-10</span>, ￥
				<span class="set-money">1000每天</span> 状态
				<span class="set-img"><img src="/static/back-test-success.png"/>回测完成，耗时3.5s</span>
			</div>
			<ul class="set-list">
				<li class="transaction">
					<img src="/static/AICommunity/position-info-unselected.png" alt="" /> 模拟交易
				</li>
				<li class="analysis">
					<img src="/static/AICommunity/log-info-unselected.png" alt="" /> 归因分析
				</li>
				<li class="community">
					<img src="/static/share.png" alt="" /> 分享到社区
				</li>
				<li class="check">
					查看代码
				</li>
				<li class="export" >
					导出
					<img src="/static/Buyersignal/icon_xiangxia.png" />
				</li>
				<li class="submit" @click="dialogVisible = true">
					报名提交
				</li>
				<el-dialog
					  :visible.sync="dialogVisible"
				   	  size="tiny"
				   	  custom-class="sumbit-text"
					  >
					  <div class="submit-img">
					  	<img src="/static/Customsignaler/icon_baomingchgenggong.png"/>
					  </div>
					  <div class="submit-img-text">你已报名成功</div>
					  <p>我们会在第一时间通知发布定制需求的需求者</p>
					  <p>尽快选择报名者，结果会在第一时间通过短信通知到你</p>
					  <p>或在个人账户消息中心查看</p>
					  <div class="submit-slider"></div>
					  <span slot="footer" class="dialog-footer">
					    <el-button type="primary" @click="dialogVisible = false">返回定制列表</el-button>
					  </span>
				</el-dialog>
			</ul>
		</div>
		<div class="bottom-line"></div>
		<div class="share-content">
			<div class="share-left">
				<ul class="share-left-list">
					<li><span class="share-img"><img src="/static/AICommunity/general-info-unselected.png"/></span>收益概论</li>
					<li><span class="share-img"><img src="/static/AICommunity/log-info-unselected.png"/></span>交易详情</li>
					<li><span class="share-img"><img src="/static/AICommunity/position-info-unselected.png"/></span>每日持仓&收益</li>
					<li><span class="share-img"><img src="/static/AICommunity/log-info-unselected.png"/></span>日志输出</li>
					<li><span class="share-img"><img src="/static/AICommunity/perf-info-unselected.png"/></span>性能分析</li>
					<div class="set-slider"></div>
					<li><span class="share-img"><img src="/static/AICommunity/strategy-return-unselected.png"/></span>策略收益</li>
					<li><span class="share-img"><img src="/static/AICommunity/base-return-unselected.png"/></span>基准收益</li>
					<li><span class="share-block"></span>Alpha</li>
					<li><span class="share-block"></span>Beta</li>
					<li><span class="share-block"></span>Sharpe</li>
					<li><span class="share-block"></span>Sertino</li>
					<li><span class="share-block"></span>Information Ratio</li>
					<li><span class="share-block"></span>Volitity</li>
					<li><span class="share-block"></span>Benchmark Volitity</li>
					<li><span class="share-block"></span>Max Drawdown</li>
				</ul>
			</div>
			<div class="share-right">
				<div class="share-right-top">
					<img src="/static/AICommunity/general-info-unselected.png" alt="" /> 收益概论
				</div>
				<div class="share-slider"></div>
				<ul class="share-right-list">
					<li v-for="share in shareContent">
						<span class="share-name">{{share.name}}</span>
						<span class="share-num">{{share.num}}</span>
					</li>
				</ul>
				<div style="clear: both;"></div>
				<div class="share-right-box">
					<div class="share-right-box-time">
						<span>缩放：</span>
						<span>一个月</span>
						<span>半年</span>
						<span>一年</span>
					</div>
					<div class="share-right-box-color">
						<p style="color: #1b84dd;"><span style="background:#1b84dd ;"></span>策略收益</p>
						<p style="color: #cf403b;"><span style="background:#cf403b ;"></span>精准收益</p>
						<p style="color: #ffa042;"><span style="background:#ffa042 ;"></span>超额收益</p>
					</div>
					<p class="share-right-box-power">Powered by joinquant.com</p>
					<div class="share-right-box-radio">
						<el-radio class="radio" v-model="radio" label="1">普通轴</el-radio>
						<el-radio class="radio" v-model="radio" label="2">对数轴</el-radio>
						<el-radio class="radio" v-model="radio" label="3">超额收益</el-radio>
					</div>
					<div class="share-right-box-clock">
						时间：
						<el-date-picker v-model="value3" type="datetimerange" placeholder="选择时间范围">
						</el-date-picker>
					</div>
					<div class="share-right-table-one">
						
					</div>
					<div class="share-right-table-two">
						
					</div>
					<div class="share-right-table-three">
						
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				dialogVisible:false,
				radio: '1',
				pickerOptions2: {
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
				value4: '',
				shareContent: [
					{ name: '策略收益', num: '-6.51%' },
					{ name: '策略年化收益', num: '-72.61' },
					{ name: '基准收益', num: '1.39%' },
					{ name: 'Alpha', num: '-1.385' },
					{ name: 'Beta', num: '2.399%' },
					{ name: 'Sharpe', num: '2.399%' },
					{ name: 'Sertino', num: '2.399%' },
					{ name: 'Information Ratio', num: '2.399%' },
					{ name: 'Algorithm Volitity', num: '2.399%' },
					{ name: 'Benchmark Volitity', num: '2.399%' },
					{ name: '胜率', num: '2.399%' },
					{ name: '日胜率', num: '2.399%' },
					{ name: '盈亏比', num: '2.399%' },
					{ name: '盈利次数', num: '3' },
					{ name: '亏损次数', num: '3' },
					{ name: '最大回撤', num: '2.399%' },
				]
			}
		},
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	
	.customtable-header {
		background: #fff;
		/*padding: 0 5%;*/
		/*margin-bottom: 50px;*/
		.tab-header {
			width: 100%;
			height: 62px;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			.tab-back {
				display: inline-block;
				cursor: pointer;
				margin-left: 5%;
				margin-top: 18px;
				span {
					display: inline-block;
					line-height: 20px;
					font-size: 18px;
					color: #B4B4B4;
					margin-left: 10px;
					margin-right: 10px;
				}
			}
			.tab-list {
				display: inline-block;
				list-style: none;
				margin-left: 55%;
				li {
					float: left;
					width: 120px;
					margin-top: 18px;
				}
				li:hover {
					color: #14AAFF;
				}
			}
		}
		.back-bottom {
			width: 100%;
			height: 1px;
			background: #B4B4B4;
		}
		.set-header {
			width: 100%;
			height: 60px;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			.set-back {
				width: 50%;
				margin-left: 5%;
				font-size: 16px;
				color: #666;
				line-height: 60px;
				.set-money {
					margin-right: 30px;
				}
				.set-img {
					img {
						display: inline-block;
						margin-left: 30px;
						margin-right: 10px;
					}
				}
			}
			.set-list {
				width: 40%;
				list-style: none;
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				li {
					width: 100px;
					height: 30px;
					border-radius: 4px;
					text-align: center;
					line-height: 30px;
					margin-left: 20px;
					font-size: 14px;
					margin-top: 15px;
					cursor: pointer;
				}
				.transaction {
					background: #cf403b;
					color: #fff;
				}
				.analysis {
					background: #1b84dd;
					color: #fff;
				}
				.community {
					border: 1px solid #B4B4B4;
				}
				.check {
					border: 1px solid #B4B4B4;
				}
				.export {
					width: 60px;
					height: 30px;
					border: 1px solid #B4B4B4;
				}
				.submit {
					background: #00aefc;
					color: #fff;
				}
			}
		}
		.share-content {
			width: 100%;
			height: 700px;
			background: #e6e6e6;
			padding-top: 20px;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			.share-left {
				width: 15%;
				height: 600px;
				background: #fff;
				margin-right: 1%;
				.share-left-list {
					list-style: none;
					margin-top: 5%;
					margin-left: 15%;
					.set-slider {
						width: 80%;
						height: 2px;
						background: #e6e6e6;
						margin: 20px 0 20px;
					}
					li {
						height: 30px;
						line-height: 35px;
						font-size: 16px;
						color: #666;
						display: flex;
						flex-wrap: wrap;
						justify-content: flex-start;
						.share-img {
							display: inline-block;
							width: 16px;
							height: 16px;
							margin-right: 10px;
							margin-top: 2px;
							img {
								width: 100%;
								height: 100%;
							}
						}
						.share-block {
							display: inline-block;
							width: 5px;
							height: 5px;
							background: #999999;
							margin-right: 10px;
							margin-top: 15px;
						}
					}
					li:hover {
						color: #54c8ed;
						cursor: pointer;
					}
				}
			}
			.share-right {
				width: 84%;
				height: 600px;
				background: #fff;
				/*padding:10px 1%;*/
				.share-right-top {
					margin-top: 10px;
					margin-left: 30px;
					img {
						display: inline-block;
						width: 16px;
						height: 16px;
						margin-right: 15px;
					}
				}
				.share-slider {
					width: 100%;
					height: 1px;
					background: #E6E6E6;
					margin-top: 5px;
					margin-bottom: 15px;
				}
				.share-right-list {
					width: 98%;
					height: 50px;
					margin: 0;
					padding: 0;
					list-style: none;
					margin-left: 30px;
					li {
						width: 5%;
						float: left;
						text-align: center;
						span {
							display: block;
							line-height: 25px;
							font-size: 16px;
						}
						.share-name {
							color: #666;
						}
						.share-num {
							color: #333;
						}
					}
					li:nth-child(2) {
						width: 9%;
					}
					li:nth-child(8) {
						width: 9%;
					}
					li:nth-child(9) {
						width: 9%;
					}
					li:nth-child(10) {
						width: 10%;
					}
				}
				.share-right-box {
					display: flex;
					flex-wrap: wrap;
					justify-content: flex-start;
					width: 98%;
					height: 30px;
					margin-top: 10px;
					margin-left: 30px;
					.share-right-box-time {
						font-size: 14px;
						color: #B4B4B4;
						line-height: 30px;
						span {
							display: inline-block;
							margin-right: 10px;
						}
					}
					.share-right-box-color {
						display: flex;
						flex-wrap: wrap;
						justify-content: flex-start;
						p {
							width: 100px;
							font-size: 16px;
							line-height: 30px;
							span {
								display: inline-block;
								width: 16px;
								height: 16px;
								background: red;
								margin-top: 7px;
								float: left;
								margin-right: 5px;
							}
						}
					}
					.share-right-box-power {
						width: 220px;
						line-height: 30px;
						color: #333;
					}
					.share-right-box-clock {
						line-height: 30px;
						font-size: 16px;
						margin-left: 120px;
					}
					.share-right-table-one{
						width: 100%;
						height: 150px;
						background: #D3DCE6;
						margin-top: 10px;
						margin-bottom: 10px;
					}
					.share-right-table-two{
						width: 100%;
						height: 100px;
						background: #D3DCE6;
						margin-top: 10px;
						margin-bottom: 10px;
					}
					.share-right-table-three{
						width: 100%;
						height: 100px;
						background: #D3DCE6;
						margin-top: 10px;
						margin-bottom: 10px;
					}	
				}
			}
		}
	}
	.sumbit-text{
		width: 416px;
		height: 334px;
		border-radius: 6px;
		.submit-img{
			width: 100%;
			height: 60px;
			margin-top:-10px;
			margin-bottom:14px;
			img{
				display: inline-block;
				margin-left: 150px;
			}
		}
		.submit-img-text{
			width: 100%;
			line-height: 30px;
			font-size: 20px;
			color: #00AEFC;
			text-align: center;
			margin-bottom: 20px;
		}
		p{
			width: 100%;
			text-align: center;
			font-size: 14px;
			color: #666;
			line-height: 20px;
		}
		.submit-slider{
			width: 100%;
			height: 1px;
			background: #666;
			margin-top: 34px;
			margin-bottom: 20px;
		}
		.el-dialog__footer{
			margin-top: -45px;
			text-align: center;
			.el-button--primary{
				color:#00AEFC ;
				font-size: 16px;
				border:none;
				background: #fff;
			}
		}
	}
</style>