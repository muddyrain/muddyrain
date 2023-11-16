import React, { useEffect } from 'react';
import Tabler from '..';

const Demo1 = () => {
	// const [loading, setLoading] = React.useState<boolean>(true);
	const [list] = React.useState<any[]>(
		Array.from({ length: 50 }).map((_, index) => ({
			key: index + 1,
			name: 'John Brown' + index + 1,
			age: 32,
			address:
				'置国毛到方系此指始天动劳类党等究声包国和安相间示区照十律红法青。线任可且号等关表局西中府求证条却历。义参消断只器广选们严易称之第构半际。文内则计精参千但提花都如因。政及二身前装适节万发维天制两电太。',
		}))
	);
	useEffect(() => {}, []);
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				height: '40vh',
				margin: 16,
				overflow: 'hidden',
			}}
		>
			<Tabler
				style={{ width: '100%' }}
				fixed={true}
				showSort={false}
				actions={[
					{
						content: '哈哈',
						visible: () => Math.random() > 0.5,
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
				autoHeight
				// loading={loading}
				dataSource={list}
				columns={[
					{
						title: 'Name',
						dataIndex: 'name',
						key: 'name',
						ellipsis: true,
						width: 200,
						ellipsisProps: {},
					},
					{
						title: 'Age',
						dataIndex: 'age',
						key: 'age',
						ellipsis: true,
						width: 200,
						render(text) {
							return <>{text + '岁'}</>;
						},
					},
					{
						title: 'Address',
						dataIndex: 'address',
						width: 200,
						key: 'address',
						ellipsis: true,
					},
				]}
			/>
		</div>
	);
};

export default Demo1;
