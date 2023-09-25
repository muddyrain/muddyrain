import { Button } from 'antd';
import React, { useState } from 'react';
import Dialog from '..';

const Demo1 = () => {
	const [visible, setVisible] = useState(false);
	return (
		<>
			<Dialog
				visible={visible}
				openText="打开"
				changeVisible={(value) => {
					setVisible(value);
				}}
				footer={() => null}
			>
				哈哈哈
				<Button
					onClick={() => {
						console.log('关闭');
						setVisible(false);
					}}
				>
					关闭
				</Button>
			</Dialog>
		</>
	);
};

export default Demo1;
