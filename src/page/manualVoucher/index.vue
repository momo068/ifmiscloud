<template>
  	<div class="shareContainer" ref="shareContainer">
		<edit-buttons></edit-buttons>
		<account-voucher></account-voucher>
		<aux-account></aux-account>
  	</div>
</template>

<script>
    import * as mutils from '@/utils/mUtils';
	import {
		EditButtons,
		AccountVoucher,
		AuxAccount,
		CurrencyType
	} from "./components";

	export default {
	  data(){
			return {

			}
		},
		components:{
			EditButtons,
			AccountVoucher,
			AuxAccount,
			CurrencyType
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.shareContainer{
		padding: 10px;
	}
</style>
