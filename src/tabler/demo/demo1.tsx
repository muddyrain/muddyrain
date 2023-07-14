import React from 'react';
import Tabler from '..';

const Demo1 = () => {
	return (
		<div>
			<Tabler
				actions={[
					{
						content: '哈哈',
						onClick(record, index) {
							console.log('修改', record, index);
						},
						confirm: '是否删除?',
						confirmProps: {
							title: '哈哈哈',
						},
					},
					{
						content: '删除',
						onClick(record, index) {
							console.log('删除', record, index);
						},
						props: {
							danger: true,
						},
					},
				]}
				dataSource={Array.from({ length: 50 }).map((_, index) => ({
					key: index + 1,
					name: 'John Brown' + index + 1,
					age: 32,
					address: 'New York No. 1 Lake Park',
				}))}
				columns={[
					{
						title: 'Name',
						dataIndex: 'name',
						key: 'name',
						ellipsis: true,
						ellipsisProps: {},
					},
					{
						title: 'Age',
						dataIndex: 'age',
						key: 'age',
						ellipsis: true,
						render(text) {
							return <>{text + '岁'}</>;
						},
					},
					{
						title: 'Address',
						dataIndex: 'address',
						key: 'address',
					},
				]}
			/>
		</div>
	);
};

export default Demo1;
