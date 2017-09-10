<template>
	<div id="public-opinion-analysis">
		<div style="padding: 10px 0px;">
			<el-date-picker
		        v-model="searchTime"
		        type="date"
		        placeholder="选择日期">
		    </el-date-picker>
		    <span style="margin-left: 20px;"><el-button>搜索</el-button></span>
		</div>
		<div>
			<div style="padding: 20px; border: 1px solid #dfe6ec;">
				<el-button :type="tradingType1" @click="selectTradingBoard">涨停板</el-button>
				<el-button :type="tradingType2" @click="unselectTradingBoard">涨停回调</el-button>
			</div>
			<el-table
		        :data="tradingBoardData"
		        style="width: 100%">
		        <el-table-column
		            prop="name"
		        	label="名称"
		        	width="180">
		        </el-table-column>
		        <el-table-column
		        	prop="code"
		        	label="代码"
		        	width="180">
		      	</el-table-column>
		      	<el-table-column
		        	prop="price"
		        	label="价格">
		      	</el-table-column>
		      	<el-table-column
		        	prop="predictedGains"
		        	label="预测涨幅">
		      	</el-table-column>
		    </el-table>
		</div>
		<div style="padding: 10px;">
			
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			searchTime: new Date(),
			tradingBoardSelected: true,
			tradingBoardData: [
				{name: '银龙股份', code: '603969', price: '17.54', predictedGains: '14.11'},
				{name: '博天环境', code: '6033603', price: '40.16', predictedGains: '14.55'},
				{name: '唐山港', code: '601000', price: '5.1', predictedGains: '17.18'},
				{name: '300491', code: '300491', price: '29.91', predictedGains: '16.02'},
				{name: '京汉股份', code: '000615', price: '12.14', predictedGains: '16.14'}
			]
		}
	},
	methods: {
		selectTradingBoard: function() {
			this.tradingBoardSelected = true;
		},
		unselectTradingBoard: function() {
			this.tradingBoardSelected = false;
		}
	},
	computed: {
		tradingType1: function() {
			return this.tradingBoardSelected ? "primary" : "default";
		},
		tradingType2: function() {
			return this.tradingBoardSelected ? "default" : "primary";
		}
	}
}
</script>

<style lang="scss">
	#public-opinion-analysis {

	}

</style>