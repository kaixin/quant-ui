<template>
	<div id="economic-forecaset">
		<el-row>
			<el-col :span="7">
				<span>请选择国家</span>
				<el-select v-model="selectedCountry" plcaholder="请选择">
					<el-option 
						v-for="country in countries"
						:key="country.value" 
						:label="country.label" 
						:value="country.value"></el-option>
				</el-select>
			</el-col>
			<el-col :span="12">
				<span>请选择预测的周期时间</span>
				 <el-date-picker
			      v-model="start"
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
				<span>至</span>
				<el-date-picker
			      v-model="end"
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
			</el-col>
			<el-col :span="5">
				<el-row>
					<el-col :span="4" style="line-height: 36px;">频率</el-col>
					<el-col :span="20">
					<el-select v-model="freqValue" plcaholder="请选择">
						<el-option 
							v-for="freq in freqs"
							:key="freq.value" 
							:label="freq.label" 
							:value="freq.value"></el-option>
					</el-select>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
		<el-row>
			<el-table :data="strategyData" style="width: 100%;"  max-height="300">
			    <el-table-column prop="Date" label="日期"></el-table-column>
			    <el-table-column prop="1" label="策略一"></el-table-column>
			    <el-table-column prop="2" label="策略二"></el-table-column>
			    <el-table-column prop="3" label="策略三"></el-table-column>
			    <el-table-column prop="4" label="策略四"></el-table-column>
			    <el-table-column prop="state" label="状态"></el-table-column>
		    </el-table>
		</el-row>
		<el-row>
			<div id="economyChart"></div>
		</el-row>		
	</div>
</template>

<script>
import Highstock from 'highcharts/highstock'

var economyURL = "http://166.111.17.111:5002/economy/";

export default {
	data() {
		return {
			countries: [
				{value: "China", label: "中国"},
				{value: "America", label: "美国"},
			],
			selectedCountry: "China",
			start: new Date(new Date() - 30*24*60*60*1000),
			end: new Date(),
			freqs: [
				{value: 1, label: "1"},
				{value: 2, label: "2"},
				{value: 3, label: "3"}
			],
			freqValue: 1,
			strategyData: []
		}
	},
	mounted: function() {
		this.$nextTick(function() {
			this.loadEconomicForecastData();
		})
	},
	methods: {
		loadEconomicForecastData: function() {
			this.$http.get(economyURL + "china").then(function(resp) {
				resp.data.shift();
				this.strategyData = resp.data;
				this.loadEconomyChart();
			});
		},
		loadEconomyChart: function() {
			Highstock.StockChart({
				chart: {
					renderTo: 'economyChart'
				},
				title: {
					text: '策略状态图'
				},
				data: this.strategyData,
				series: [{
					name: '状态',
					data: [[1,2], [3,4]]
				}]
			});
		}
	}
}
</script>

<style lang="scss">
	#economic-forecaset {
		.el-row {
			margin-bottom: 20px;
		}
	}

</style>