(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var em = new Vue({
		el: "#app",
		data: {
			list: [{
					text: '吃饭',
					status: true
				},
				{
					text: '睡觉',
					status: false
				},
				{
					text: '打豆豆',
					status: false
				}
			],
			newtext: '',
			editlist: '',
			listStatus: 'all'
		},
		methods: {
			//添加数据
			addText() {
				if (this.newtext.trim() == '') {
					alert('数据不能为空')
					this.newtext = ''
					return
				}
				this.list.push({
					text: this.newtext,
					status: false
				})
				this.newtext = ''
			},
			//筛选数据事件
			isShow(valStatus) {
				switch (this.listStatus) {
					case 'all':
						return true
						break;
					case 'Active':
						return !valStatus
						break;
					case 'Completed':
						return valStatus
						break;
					default:
						return true
						break;
				}
			}
		},
		computed: {
			checkAll: {
				//设置
				set(value) {
					//传入的值返回的是true跟false
					// console.log(value)
					this.list.forEach(val => {
						val.status = value
					})
				},
				//获取
				get() {
					var staArr = this.list.filter(val => {
						//filter这个循环得到结果return出去的会放回一个数组
						return !val.status
					})
					// console.log(staArr)
					return !staArr.length
				}
			}
		},
		updated() {
			localStorage.setItem('listData',JSON.stringify(this.list))
		},
		mounted() {
			if (!localStorage.getItem('listData')) {
				console.log('哈哈哈')
				return
			}
			this.list = JSON.parse(localStorage.getItem('listData'))
		}
	})
})(window);
