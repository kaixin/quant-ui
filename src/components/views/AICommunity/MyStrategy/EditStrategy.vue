<template>
	<div>
		<el-row class="edit-strategy-pane">
			<el-col :span="IDECols" :class="{'hide-pane': shouldHideIDEPane}">
				<el-row class="IDE-toolbar">
					<el-col :span="12">
						<el-button class="toolbar-icon" :disabled="isSaveDisabled" v-text="saveLabel" @click="saveEditorHandler()"></el-button>
						<el-button class="toolbar-icon" @click="startBuild">编译运行</el-button>
						<el-button class="toolbar-icon toolbar-icon-link"><router-link to="/AICommunity/myStrategy/funcLib" style="text-decoration: none;">函数库</router-link></el-button>
					</el-col>
					<el-col :span="8" :offset="2">
						<div style="float: right;">
							<el-button class="toolbar-icon toolbar-icon-link"><router-link to="/AICommunity/myStrategy/strategyAPI" style="text-decoration: none;">API</router-link></el-button>
							<el-button icon="search" class="toolbar-icon"></el-button>
							<el-button icon="setting" class="toolbar-icon"></el-button>
							<el-button class="toolbar-icon" @click="dialogVisible = true"><i class="keyboard"></i></el-button>
							<el-dialog title="快捷键" :visible.sync="dialogVisible">
								<span>
									<el-row v-for="shortcutKey in shortcutKeys" style="margin: 5px;">
										<el-col :span="6">
											<span v-text="shortcutKey.keyName" style="float: right; background-color: #f9f2f4;"></span>
										</el-col>
										<el-col :span="18" v-text="'：' + shortcutKey.keyDesc"></el-col>
									</el-row>
								</span>
								<span slot="footer">
									<el-button @click="dialogVisible = false">关闭</el-button>
								</span>
							</el-dialog>
						</div>
					</el-col>
					<el-col :span="1" :offset="1">
						<img :src="toggleIDEIcon" style="float: right; margin: 5px 0px;" @click="toggleIDE">
					</el-col>
				</el-row>
				<el-row>
					<div>
						<ace-editor :content="strategyCode" :height="IDEHeight" :theme="'twilight'" :lang="'python'" :options="editorOptions" v-on:editor-update="editorUpdate"></ace-editor>
					</div>
				</el-row>
			</el-col>
			<el-col :span="12" :class="{'hide-pane': shouldHideBuildPane}">
				<el-row class="build-toolbar">
					<div :class="{'hide-pane': shouldHideBuildToolbar}">
						<el-col :span="20">
							<div>
								<el-date-picker class="quant-date" v-model="startDate" type="date" placeholder="选择日期"></el-date-picker>
								<span>至</span>
								<el-date-picker class="quant-date" v-model="endDate" type="date" placeholder="选择日期"></el-date-picker>

								<span>￥</span>
								<el-input v-model="amountMoney" style="width: 80px;"></el-input>
								<el-select v-model="frequency" placeholder="请选择" style="width: 84px;">
									<el-option v-for="fre in freOptions" :key="fre.value" :label="fre.label" :value="fre.value"></el-option>
								</el-select>
							</div>
						</el-col>
						<el-col :span="4" style="float: right;">
							<el-button type="primary" @click="runBackTest">运行回测</el-button>
						</el-col>
					</div>
					<div :class="{'hide-pane': shouldHideBuildProgress}">
						<el-col :span="8" style="padding-top: 15px;">
							<el-progress :percentage="progressVal" :show-text="false"></el-progress>
						</el-col>
						<el-col :span="4" style="margin-left: 20px">
							<el-button @click="cancelBuild">取消编译</el-button>
						</el-col>
					</div>
				</el-row>
				<el-row :class="{'hide-pane': shouldHideBuildChartPane}">
					<div style="height: 320px; background: white; padding: 10px;">
						<div style="height: 35px;">
							<div class="char-status" style="color: #255da8;">
								<div>策略收益</div>
								<div>{{strategyBenefit | formatBenefit}}</div>
							</div>
							<div class="char-status" style="color: #aa4643;">
								<div>基准收益</div>
								<div>{{benchmarkBenefit | formatBenefit}}</div>
							</div>
							<div class="char-status">
								<div>Alpha</div>
								<div>{{alpha | formatBenefit}}</div>
							</div>
							<div class="char-status">
								<div>Beta</div>
								<div>{{beta | formatBenefit}}</div>
							</div>
							<div class="char-status">
								<div>Sharpe</div>
								<div>{{sharp | formatBenefit}}</div>
							</div>
							<div class="char-status">
								<div>最大回撤</div>
								<div>{{maxDrawBack | formatBenefit}}</div>
							</div>
							<div class="char-status">
								<div>半衰期</div>
								<div>{{halfDecay}}</div>
							</div>
						</div>
						<div style="height: 265px;">
							<div :class="{'hide-pane': shouldHideToolTip}" style="height: 100%; padding-top: 50px; text-align: center">
								<div><img :src="toolTipIcon"></div>
								<div style="color: grey; font-size: 16px; padding: 5px;">点击"编译运行"进行快速回测或者点击"运行回测"进行详细回测</div>
							</div>
							<div :class="{'hide-pane': shouldHideChart}">
								<div id="benefitChart"></div>
							</div>
						</div>
					</div>
				</el-row>
				<el-row>
					<div :style="{height: logHeight}">
						<el-row>
							<span class="log-tab" @click="showLogMsg">日志</span>
							<span class="log-tab" @click="showErrorMsg">错误</span>
							<span style="float: right; padding: 10px"><img :src="toggleMsgPaneIcon" @click="toggleMsgPane"></span>
						</el-row>
						<el-row style="height: 100%; width: 100%;">
							<div class="log-pane" v-text="outputMsg"></div>
						</el-row>
					</div>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import AceEditor from 'vue2-ace'
import 'brace/mode/python'
import 'brace/theme/twilight'
import Highstock from 'highcharts/highstock'

var globalMenuHeight = 62;
var navSubMenuHeight = 56;
var IDEtoolbarHeight = 56;
var IDEHeight = 320;
var logToolbarHeight = 42;
var editorHeight = window.innerHeight - globalMenuHeight - navSubMenuHeight - IDEtoolbarHeight;
var strategyBaseURL = "http://166.111.17.78:8000/";
var submitTaskURL = "regression/task/submit/";
var getTaskStateURL = "regression/task/state/";
var strategySessionKey = "strategy_data";

export default {
	components: {
		AceEditor,
		Highstock
	},
	props: ['activeTabChanged'],
	data() {
		return {
			toggleIDEIcon: './static/right-expand.png',
			toggleMsgPaneIcon: './static/up-expand.png',
			toolTipIcon: './static/tooltip.png',
			editorOptions: {fontSize: '16px'},
			IDECols: 12,
			IDEHeight: editorHeight + 'px',
			logHeight: (editorHeight - IDEHeight - logToolbarHeight) > 0 ? (editorHeight - IDEHeight - logToolbarHeight+ 'px') : '0px',
			shouldHideIDEPane: false,
			shouldHideBuildPane: false,
			shouldHideBuildChartPane: false,
			shouldHideBuildToolbar: false,
			shouldHideBuildProgress: true,
			shouldHideToolTip: false,
			shouldHideChart: true,
			progressVal: 0,
			startDate: new Date("2017-01-01"),
			endDate: new Date("2017-12-31"),
			amountMoney: 100000,
			frequency: 'day',
			freOptions: [
				{value: 'day', label: '每天'},
				{value: 'minute', label: '分钟'}
			],
			activeMsg: 'log',
			logMsg: "logs message",
			errorMsg: "error message",
			outputMsg: '',
			msgPaneState: 'not-expanded',
			isSaveDisabled: true,
			saveLabel: "已保存",
			dialogVisible: false,
			shortcutKeys: [
				{keyName: "F2", keyDesc: "折叠当前"},
				{keyName: "Alt-0", keyDesc: "折叠其他"},
				{keyName: "Alt-Shift-0", keyDesc: "展开所有"},
				{keyName: "Ctrl-/", keyDesc: "注释"},
				{keyName: "Ctrl-[", keyDesc: "块反缩进"},
				{keyName: "Ctrl-]", keyDesc: "块缩进"},
				{keyName: "Ctrl-A", keyDesc: "选择全部"},
				{keyName: "Ctrl-L", keyDesc: "跳转到"},
				{keyName: "Ctrl-F", keyDesc: "查找"},
				{keyName: "Ctrl-Alt-K", keyDesc: "查找全部"},
				{keyName: "Alt-Shift-K", keyDesc: "选择并查找上一个"},
				{keyName: "Ctrl-D", keyDesc: "删除当前行"},
				{keyName: "Ctrl-Shift-D", keyDesc: "复制并粘贴当前行"},
				{keyName: "Ctrl-H", keyDesc: "替换"},
				{keyName: "Alt-Up", keyDesc: "上移行"},
				{keyName: "Alt-Down", keyDesc: "下移行"},
				{keyName: "Ctrl-Shift-Left", keyDesc: "选择左侧单词"},
				{keyName: "Ctrl-Shift-Right", keyDesc: "选择右侧单词"},
				{keyName: "Alt-Shift-Left", keyDesc: "选择到行起始"},
				{keyName: "Alt-Shift-Right", keyDesc: "选择到行结束"},
				{keyName: "Ctrl-Home", keyDesc: "跳转到开始"},
				{keyName: "Ctrl-End", keyDesc: "跳转到结尾"},
				{keyName: "Ctrl-Left", keyDesc: "跳到单词左侧"},
				{keyName: "Ctrl-Right", keyDesc: "跳到单词右侧"},
				{keyName: "Alt-Left|Home", keyDesc: "跳转到行起始"},
				{keyName: "Alt-Right|End", keyDesc: "跳转到行结束"}
			],
			strategyCode: '',
			strategyBenefit: "--",
			benchmarkBenefit: "--",
			alpha: "--",
			beta: "--",
			sharp: "--",
			maxDrawBack: "--",
			halfDecay: "--",
			benefitData: []
		}
	},
	mounted() {
		const that = this;
		window.onresize = function() {
			that.IDEHeight = that.getIDEHeight(window.innerHeight) + 'px';
			that.logHeight = that.getLogHeight(window.innerHeight) + 'px';
		}
		document.body.style.overflow = "hidden";
	},
	methods: {
		toggleIDE: function() {
			if(this.IDECols !== 24) {
				this.IDECols = 24;
				this.toggleIDEIcon = "./static/left-expand.png";
				self.shouldHideIDEPane = false;
				this.shouldHideBuildPane = true;
			}else {
				this.IDECols = 12;
				this.toggleIDEIcon = "./static/right-expand.png";
				self.shouldHideIDEPane = false;
				this.shouldHideBuildPane = false;
			}
		},
		showLogMsg: function() {
			this.outputMsg = this.logMsg;
		},
		showErrorMsg: function() {
			this.outputMsg = this.errorMsg;
		},
		toggleMsgPane: function() {
			if(this.msgPaneState === "not-expanded") {
				this.shouldHideBuildChartPane = true;
				this.msgPaneState = "expanded";
				this.toggleMsgPaneIcon = "./static/down-expand.png";
				this.logHeight = this.getIDEHeight(window.innerHeight) + 'px';
			}else {
				this.shouldHideBuildChartPane = false;
				this.msgPaneState = "not-expanded";
				this.toggleMsgPaneIcon = "./static/up-expand.png";
				this.logHeight = this.getLogHeight(window.innerHeight) + 'px';
			}
		},
		getIDEHeight: function(_windowHeight) {
			return _windowHeight - globalMenuHeight - navSubMenuHeight - IDEtoolbarHeight;
		},
		getLogHeight: function(_windowHeight) {
			var _editorHeight = _windowHeight - globalMenuHeight - navSubMenuHeight - IDEtoolbarHeight;
			return (_editorHeight - IDEHeight - logToolbarHeight) > 0 ? (_editorHeight - IDEHeight - logToolbarHeight) : 0
		},
		startBuild: function() {
			//TO DO: get code and send to back end
			var taskData = {
				code: this.strategyCode,
				task_type: 0,
				user_id: "test_user",
				start_time: this.startDate.getTime()/1000,
				end_time: this.endDate.getTime()/1000,
				symbol: 'rb1801'
			};
			console.log(taskData);
			var self = this;
			this.$http.post(strategyBaseURL + submitTaskURL, taskData).then(
				function(res) {
					var stateIntervalID = setInterval(function() {
						self.$http.post(strategyBaseURL + getTaskStateURL, res.data.data).then(
							function(stateRes) {
								 if(stateRes.data && stateRes.data.data && stateRes.data.data.report && stateRes.data.data.report.final_status) {
								 	clearInterval(stateIntervalID);
								 	//TO DO: show data and chart in UI according to data returned from server side
								 	var output = stateRes.data.data.report.output;
								 	output.total_benefits && (self.strategyBenefit = parseFloat(output.total_benefits) * 100);
								 	output.alpha && (self.alpha = output.alpha);
								 	output.beta && (self.beta = output.beta);
								 	output.max_retracement && (self.maxDrawBack = parseFloat(output.max_retracement) * 100);
								 	output.half_decay && (self.halfDecay = parseFloat(output.half_decay));
								 	if(output.net_values) {
								 		this.formatNetValues(output.net_values);
								 	}
								 	self.loadBenefitData();

								 }
							}, function(stateRes) {

							}
							);
					}, 1000);
				}, function(res) {
					console.log("***fail");
				});
			// this.$http({url: strategyBaseURL + submitTaskURL, method: 'POST', data: taskData, {}}).then(function(res) {
			// 	console.log(res);
			// }, function(res) {

			// });
			this.shouldHideBuildToolbar = true;
			this.shouldHideBuildProgress = false;
			//TO DO: get progress from back end and update progress bar
			var self = this;
			var intervalID = setInterval(function() {
				self.progressVal = self.progressVal + 10;
				if(self.progressVal === 100) {
					//TO DO: hide tooltip and show chart
					self.cancelBuild();
					clearInterval(intervalID);
				}
			}, 100);
		},
		cancelBuild: function() {
			this.shouldHideBuildToolbar = false;
			this.shouldHideBuildProgress = true;
			this.progressVal = 0;
		},
		runBackTest: function() {
			//Use sessionStorage to pass params to BackTestDetail page
			this.storeStrategyData();
			//Send message to tell parent component to show back-test-detail tab
			this.$emit("message", "SHOW_BACK_TEST_DETAIL_TAB");
		},
		editorUpdate: function(editorContent) {
			var self = this;
			self.isSaveDisabled = false;
			self.saveLabel = "保存";
			self.strategyCode = editorContent;

			if(self.saveEditorTimer) {
				clearTimeout(self.saveEditorTimer);
			}

			self.saveEditorTimer = setTimeout(function() {
				self.saveEditorContent();
			}, 5000);
		},
		saveEditorHandler: function() {
			var self = this;
			if(self.saveEditorTimer) {
				clearTimeout(self.saveEditorTimer);
			}
			self.saveEditorContent();
		},
		saveEditorContent: function() {
			//TO DO: save editor content to server
			var self = this;
			self.isSaveDisabled = true;
			self.saveLabel = "保存中";
			setTimeout(function() {
				self.saveLabel = "已保存";
				// console.log("***save editor content to server " + self.strategyCode);
			}, 500);
			
		},
		storeStrategyData: function() {
			var strategySessionData = {
				strategyCode: this.strategyCode,
				startDate: this.startDate,
				endDate: this.endDate,
				amountMoney: this.amountMoney,
				frequency: this.frequency
			}
			window.sessionStorage[strategySessionKey] = JSON.stringify(strategySessionData);
		},
		formatNetValues: function(netValues) {
			self.benefitData = [];
			for(var i=0; i<netValues.length; i++) {
				var _ts = netValues[i].ts * 1000;
				var _v = netValues[i].v;
				self.benefitData.push([_ts, _v]);
			} 
		},
		loadBenefitData: function() {
			Highstock.StockChart({
				chart: {
					renderTo: 'benefitChart'
				},
				series: [{
					name: '净值',
					data: self.benefitData //[[1,2], [3,4]]
				}]
			});
			this.shouldHideToolTip = true;
			this.shouldHideChart = false;
		}
	},
	watch: {
		activeTabChanged: function() {
			this.storeStrategyData();
		}
	},
	filters: {
		formatBenefit: function(val) {
			if(val === "--" || !val) {
				return "--";
			}
			return parseFloat(val).toFixed(2) + "%";
		}
	}

}
</script>

<style lang="scss">
	.edit-strategy-pane {
		background-color: #EDF0F2;

				.IDE-toolbar {
					padding: 15px 20px 15px 50px;

					.toolbar-icon {
						padding: 5px;
					}

					.toolbar-icon-link a:link, a:hover, a:visited, a:active {
						color: black;
					}

					.keyboard:before {
						content: url(/static/keyboard.png)
					}
				}

				.build-toolbar {
					padding: 10px;
				}

				.char-status {
					display: inline-block;
					width: calc(100%/7.5);
					text-align: center;
				}

				.log-tab {
					display: inline-block;
					padding: 10px;

					&:hover {
						background-color: #666666;
					}
				}

				.log-pane {
					height: 100%;
					min-height: 200px;
					margin: 0 auto;
					background-color: black;
					color: white;
					padding: 10px;
				}

				.hide-pane {
					display: none;
				}

				.quant-date {
					width: 134px;
				}
	}

</style>