const rules = {
	username: {
		pattern: /^[a-zA-Z][a-zA-Z0-9_]{3,16}$/,
		message: '请输入字母开头的4到16位用户名，支持字母、数字、下划线',
	},
	password: {
		pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*?_-]{6,20}$/,
		message: '请输入至少包含1个字母、1个数字的6~20位密码',
	},
	mobile: {
		pattern: /(^[0][1-9]{2,3}-[0-9]{5,10}$)|(^0?(1[3-9])[0-9]{9}$)/,
		message: '手机号不正确',
	},
	captcha: {
		pattern: /^[a-zA-Z\d]{6}$/,
		message: '验证码不正确',
	},
	mail: {
		pattern: /^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
		message: '邮箱不正确',
	},
	text: {
		pattern: /^[A-Za-z0-9_\u4e00-\u9fa5]+$/,
		message: '支持中文、英文、数字、下划线',
	},
	identityCard: {
		pattern:
			/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,
		message: '身份证号不正确',
	},
	mobileTelephone: {
		pattern:
			/^([0][1-9]{2,3}-[0-9]{5,10}$)|(^0?(1[3-9])[0-9]{9})|(0\d{2,3}-)?(\d{7,8})$/,
		message: '固话或手机号不正确',
	},
	telephone: {
		pattern: /^(0\d{2,3}-)?(\d{7,8})$/,
		message: '固话号码不正确',
	},
	positiveInteger: {
		pattern: /(^[1-9]$)|(^[1-9][\d]+$)/,
		message: '请输入正整数',
	},
	integer: {
		pattern: /(^[0-9]$)|(^[1-9][\d]+$)/,
		message: '请输入整数',
	},
	amount: {
		pattern: /^(?!0*\.0*$)\d{1,16}(\.\d{1,2})?$/,
		message: '请输入小数位不超过2位的正整数',
	},
	bankCard: {
		pattern: /^([1-9]{1})(\d{12,18})$/,
		message: '银行卡号不正确',
	},
	postalCode: {
		pattern: /^[0-8][0-7]\d{4}$/,
		message: '邮政编码不正确',
	},
};

export default rules;
