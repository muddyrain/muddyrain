"use strict";(self.webpackChunkmuddyrain=self.webpackChunkmuddyrain||[]).push([[508],{58090:function(_,o,t){t.r(o),t.d(o,{demos:function(){return A}});var P=t(15009),f=t.n(P),O=t(99289),T=t.n(O),E=t(67294),r=t(23602),A={"tabler-demo-demo1":{component:E.memo(E.lazy(function(){return t.e(380).then(t.bind(t,81834))})),asset:{type:"BLOCK",id:"tabler-demo-demo1",refAtomIds:["tabler"],dependencies:{"index.tsx":{type:"FILE",value:t(67442).Z},react:{type:"NPM",value:"18.3.1"},"...tsx":{type:"FILE",value:t(14124).Z},ahooks:{type:"NPM",value:"3.8.0"},antd:{type:"NPM",value:"5.19.2"},"./type.ts":{type:"FILE",value:t(41228).Z},"./index.module.less":{type:"FILE",value:t(54988).Z}},entry:"index.tsx"},context:{react:t(67294),"...tsx":t(20588),ahooks:t(27562),antd:t(93989),"./type.ts":t(19958),"./index.module.less":t(70509)},renderOpts:{compile:function(){var w=T()(f()().mark(function S(){var C,H=arguments;return f()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,t.e(335).then(t.bind(t,37335));case 2:return u.abrupt("return",(C=u.sent).default.apply(C,H));case 3:case"end":return u.stop()}},S)}));function B(){return w.apply(this,arguments)}return B}()}}}},20588:function(_,o,t){t.r(o);var P=t(19632),f=t.n(P),O=t(5574),T=t.n(O),E=t(97857),r=t.n(E),A=t(96638),w=t(42075),B=t(86738),S=t(14726),C=t(83062),H=t(7513),R=t(67294),u=t(70509),i=t(85893),Z=function(e,a,h){return Array.isArray(e)?[r()({title:"\u64CD\u4F5C",width:a||200,align:"center",render:function(p,l,d){return(0,i.jsx)(w.Z,{style:{padding:"0 10px"},children:e.map(function(n,s){var x=n.key||s;return typeof n.visible=="function"&&!n.visible(l,d)||n.visible===!1?null:typeof(n==null?void 0:n.content)=="function"?(0,i.jsx)("div",{children:n==null?void 0:n.content(l,d)},x):n.confirm?(0,i.jsx)(B.Z,r()(r()({title:"\u63D0\u793A",description:typeof n.confirm=="string"?n.confirm:n.confirm(l,d),disabled:!!n.disabled,okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onConfirm:function(){var v;(v=n.onClick)===null||v===void 0||v.call(n,l,d)}},n.confirmProps),{},{children:(0,i.jsx)(S.ZP,r()(r()({disabled:!!n.disabled,loading:!!n.loading,type:"primary"},n.props),{},{children:n.content||""}))}),x):(0,i.jsx)(S.ZP,r()(r()({loading:!!n.loading,disabled:!!n.disabled,type:"primary",onClick:function(){var v;(v=n.onClick)===null||v===void 0||v.call(n,l,d)}},n.props),{},{children:n.content}),x)})})}},h)]:[]},F=function(e){var a=e.fixed,h=e.columns,c=e.scroll,p=0,l=function d(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];n.forEach(function(s){p=p+(Number(s==null?void 0:s.width)||0),s!=null&&s.children&&d(s.children)})};return l(h),a?{scroll:r()({x:p},c)}:{}},$=function(e,a){return[r()({title:e.sortTitle||"\u5E8F\u53F7",width:e.sortWidth||80,render:function(c,p,l){return a?l+1+(((a==null?void 0:a.current)||1)-1)*((a==null?void 0:a.pageSize)||10):l+1}},e.sortProps)]},G=function(e){return e.map(function(a){return r()(r()({},a),{},{render:function(c,p,l){var d,n=((d=a.render)===null||d===void 0?void 0:d.call(a,c,p,l))||c||"-";return typeof a.ellipsis=="boolean"&&a.ellipsis?(0,i.jsx)(C.Z,r()(r()({title:c},a.ellipsisProps),{},{children:(0,i.jsx)("div",{style:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:n})})):(0,i.jsx)(i.Fragment,{children:n})}})})},J=function(e){var a=e.columns,h=a===void 0?[]:a,c=e.dataSource,p=c===void 0?[]:c,l=e.actions,d=l===void 0?null:l,n=e.onPageChange,s=e.actionsWidth,x=e.actionsProps,M=e.fixed,v=M===void 0?!0:M,j=e.showSort,V=j===void 0?!0:j,Y=(0,A.Z)({current:1,pageSize:10}),k=T()(Y,2),K=k[0],Q=k[1],I=R.useRef(null),X=R.useState(0),z=T()(X,2),U=z[0],q=z[1],N=typeof e.pagination=="boolean"?e.pagination:r()({current:K.current,pageSize:K.pageSize,total:p.length,showTotal:function(m){return"\u5171 ".concat(m," \u6761")},onChange:function(m,g){Q({current:m,pageSize:g}),n==null||n({page:m,size:g,pageSize:g})}},e.pagination),L=function(){if(I.current){var m,g=I.current.getBoundingClientRect(),tt=g.height,nt=((m=I.current.querySelector(".ant-table-thead"))===null||m===void 0?void 0:m.clientHeight)||0,b=I.current.querySelector(".ant-pagination"),W=(b==null?void 0:b.clientHeight)||0;if(b){var et=parseInt(window.getComputedStyle(b).marginTop),ot=parseInt(window.getComputedStyle(b).marginBottom);W=W+et+ot}var at=tt-nt-W;q(at)}};return(0,R.useEffect)(function(){if(I.current&&e.autoHeight){var y=new IntersectionObserver(function(m){m.forEach(function(g){g.isIntersecting&&L()})});return y.observe(I.current),window.addEventListener("resize",L),function(){window.removeEventListener("resize",L),y.disconnect()}}},[I.current,e.loading,e.dataSource,e.autoHeight]),(0,i.jsx)("div",{className:"".concat(u.default.tabler_container," ").concat(e.autoHeight?u.default.autoHeight:""),ref:I,children:(0,i.jsx)(H.Z,r()(r()(r()({},e),{},{className:"".concat(u.default.tabler)},F({fixed:v,scroll:e.scroll,columns:h})),{},{columns:[].concat(f()(V?$(e,N)||[]:[]),f()(G(h)||[]),f()(Z(d,s,x)||[])),scroll:r()(r()({},e.autoHeight&&U?{y:U}:{}),e.scroll),pagination:N,dataSource:p}))})};o.default=J},19958:function(_,o,t){t.r(o)},70509:function(_,o,t){t.r(o),o.default={tabler_container:"g6N8LsMxSEw1Tvv6FSbq",autoHeight:"Ycel2EdgRGwcoiNaMLq9",tabler:"fVD9OLL07IUTtpS1Gl6k"}},10488:function(_,o,t){t.r(o),t.d(o,{texts:function(){return f}});var P=t(23602);const f=[{value:"\u53C2\u6570",paraId:0,tocIndex:1},{value:"\u8BF4\u660E",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u63CF\u8FF0\u4FE1\u606F",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"className",paraId:0,tocIndex:1},{value:"\u7C7B\u540D",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"''",paraId:0,tocIndex:1},{value:"style",paraId:0,tocIndex:1},{value:"\u6837\u5F0F",paraId:0,tocIndex:1},{value:"React.CSSProperties",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"{}",paraId:0,tocIndex:1},{value:"rowKey",paraId:0,tocIndex:1},{value:"\u884Ckey",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"'key'",paraId:0,tocIndex:1},{value:"actions",paraId:0,tocIndex:1},{value:"\u64CD\u4F5C\u9879",paraId:0,tocIndex:1},{value:"`TablerActionsProps[]",paraId:0,tocIndex:1},{value:"null`",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"actionsProps",paraId:0,tocIndex:1},{value:"\u64CD\u4F5C\u9879\u53C2\u6570",paraId:0,tocIndex:1},{value:"TablerProps['columns'][number]",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"{}",paraId:0,tocIndex:1},{value:"actionsWidth",paraId:0,tocIndex:1},{value:"\u64CD\u4F5C\u5217\u5BBD\u5EA6",paraId:0,tocIndex:1},{value:"number",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"200",paraId:0,tocIndex:1},{value:"sortTitle",paraId:0,tocIndex:1},{value:"\u6392\u5E8F\u6807\u9898",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"'\u5E8F\u53F7'",paraId:0,tocIndex:1},{value:"sortWidth",paraId:0,tocIndex:1},{value:"\u6392\u5E8F\u5BBD\u5EA6",paraId:0,tocIndex:1},{value:"number",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"80",paraId:0,tocIndex:1},{value:"showSort",paraId:0,tocIndex:1},{value:"\u663E\u793A\u5BBD\u5EA6",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"true",paraId:0,tocIndex:1},{value:"autoHeight",paraId:0,tocIndex:1},{value:"\u9AD8\u5EA6\u81EA\u9002\u5E94",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"false",paraId:0,tocIndex:1},{value:"sortProps",paraId:0,tocIndex:1},{value:"\u6392\u5E8F\u53C2\u6570",paraId:0,tocIndex:1},{value:"TablerProps['columns'][number]",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"{}",paraId:0,tocIndex:1},{value:"columns",paraId:0,tocIndex:1},{value:"\u8868\u683C\u5217\u7684\u914D\u7F6E",paraId:0,tocIndex:1},{value:"(ColumnType<RecordType> & { ellipsis?: boolean; ellipsisProps?: TooltipProps;)[]",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"[]",paraId:0,tocIndex:1},{value:"onPageChange",paraId:0,tocIndex:1},{value:"\u76D1\u542C\u5206\u9875",paraId:0,tocIndex:1},{value:" (props: { page: number; pageSize: number; size: number;}) => void",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"{}",paraId:0,tocIndex:1},{value:"tableProps",paraId:0,tocIndex:1},{value:"antd \u8868\u683C\u6240\u6709\u53C2\u6570",paraId:0,tocIndex:1},{value:"TableProps",paraId:0,tocIndex:1},{value:"\u53EF\u7528\u4E8E antd-\u8868\u683C\u7EC4\u4EF6\u6240\u6709\u7684\u53C2\u6570",paraId:0,tocIndex:1},{value:"{}",paraId:0,tocIndex:1}]},67442:function(_,o){o.Z=`import React, { useEffect } from 'react';
import Tabler from '..';

const Demo1 = () => {
	// const [loading, setLoading] = React.useState<boolean>(true);
	const [list] = React.useState<any[]>(
		Array.from({ length: 50 }).map((_, index) => ({
			key: index + 1,
			name: 'John Brown' + index + 1,
			age: 32,
			address:
				'\u7F6E\u56FD\u6BDB\u5230\u65B9\u7CFB\u6B64\u6307\u59CB\u5929\u52A8\u52B3\u7C7B\u515A\u7B49\u7A76\u58F0\u5305\u56FD\u548C\u5B89\u76F8\u95F4\u793A\u533A\u7167\u5341\u5F8B\u7EA2\u6CD5\u9752\u3002\u7EBF\u4EFB\u53EF\u4E14\u53F7\u7B49\u5173\u8868\u5C40\u897F\u4E2D\u5E9C\u6C42\u8BC1\u6761\u5374\u5386\u3002\u4E49\u53C2\u6D88\u65AD\u53EA\u5668\u5E7F\u9009\u4EEC\u4E25\u6613\u79F0\u4E4B\u7B2C\u6784\u534A\u9645\u3002\u6587\u5185\u5219\u8BA1\u7CBE\u53C2\u5343\u4F46\u63D0\u82B1\u90FD\u5982\u56E0\u3002\u653F\u53CA\u4E8C\u8EAB\u524D\u88C5\u9002\u8282\u4E07\u53D1\u7EF4\u5929\u5236\u4E24\u7535\u592A\u3002',
		}))
	);
	useEffect(() => {}, []);
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				height: '65vh',
				margin: 16,
				overflow: 'hidden',
			}}
		>
			<Tabler
				style={{ width: '100%' }}
				fixed={true}
				actions={[
					{
						content: '\u54C8\u54C8',
						visible: () => Math.random() > 0.5,
						onClick(record, index) {
							console.log('\u4FEE\u6539', record, index);
						},
						confirm: '\u662F\u5426\u5220\u9664?',
						confirmProps: {
							title: '\u54C8\u54C8\u54C8',
						},
					},
					{
						content: '\u5220\u9664',
						onClick(record, index) {
							console.log('\u5220\u9664', record, index);
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
							return <>{text + '\u5C81'}</>;
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
`},54988:function(_,o){o.Z=`.tabler_container {
  &.autoHeight {
    .tabler {
      :global {
        .ant-spin-nested-loading {
          height: 100%;

          .ant-spin-container {
            .ant-table {
              .ant-table-container {
                height: 100%;

                .ant-table-content {
                  height: 100%;

                  // table {
                  //   height: 100%;
                  // }
                }
              }

              flex: 1;
            }

            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .ant-table-body {
            &::-webkit-scrollbar {
              width: 6px;
              height: 6px;
            }

            &::-webkit-scrollbar-track {
              background-color: #f1f1f1;
            }

            &::-webkit-scrollbar-thumb {
              background-color: #c1c1c1;
              border-radius: 8px;
            }
          }
        }
      }

      height: 100%;
      width: 100%;
    }

    width: 100%;
    height: 100%;

  }
}`},14124:function(_,o){o.Z=`import { useSetState } from 'ahooks';
import { Button, Popconfirm, Space, Table, Tooltip } from 'antd';
import React, { FC, useEffect } from 'react';
import styles from './index.module.less';
import { TablerProps } from './type';
const handleActions = (
	actions: TablerProps['actions'],
	actionsWidth?: TablerProps['actionsWidth'],
	actionsProps?: TablerProps['columns'][number]
): TablerProps['columns'] => {
	if (Array.isArray(actions)) {
		return [
			{
				title: '\u64CD\u4F5C',
				width: actionsWidth || 200,
				align: 'center',
				render: (_, record, index) => {
					return (
						<Space style={{ padding: '0 10px' }}>
							{actions.map((action, _index) => {
								const key = action.key || _index;
								/**
								 * \u51FD\u6570\u8FD4\u56DE\u65F6\u662F\u5426\u663E\u793A
								 */
								if (
									typeof action.visible === 'function' &&
									!action.visible(record, index)
								)
									return null;
								/**
								 * \u662F\u5426\u663E\u793A
								 */
								if (action.visible === false) {
									return null;
								}
								/**
								 * \u81EA\u5B9A\u4E49\u51FD\u6570\u7EC4\u4EF6\u5F0F\u65B9\u5F0F
								 */
								if (typeof action?.content === 'function') {
									return <div key={key}>{action?.content(record, index)}</div>;
								}
								if (action.confirm) {
									return (
										<Popconfirm
											title="\u63D0\u793A"
											key={key}
											description={
												typeof action.confirm === 'string'
													? action.confirm
													: action.confirm(record, index)
											}
											disabled={!!action.disabled}
											okText="\u786E\u5B9A"
											cancelText="\u53D6\u6D88"
											onConfirm={() => {
												action.onClick?.(record, index);
											}}
											{...action.confirmProps}
										>
											<Button
												disabled={!!action.disabled}
												loading={!!action.loading}
												type="primary"
												{...action.props}
											>
												{action.content || ''}
											</Button>
										</Popconfirm>
									);
								}
								/**
								 * \u666E\u901A\u65B9\u5F0F - \u5C55\u793A\u5185\u5BB9\u6309\u94AE
								 */
								return (
									<Button
										key={key}
										loading={!!action.loading}
										disabled={!!action.disabled}
										type="primary"
										onClick={() => {
											action.onClick?.(record, index);
										}}
										{...action.props}
									>
										{action.content}
									</Button>
								);
							})}
						</Space>
					);
				},
				...actionsProps,
			},
		];
	}
	return [];
};
// \u5904\u7406\u56FA\u5B9A\u5217
const procedureFixed = ({
	fixed,
	columns,
	scroll,
}: {
	fixed?: boolean;
	columns?: TablerProps['columns'];
	scroll?: TablerProps['scroll'];
}) => {
	let total = 0;

	// \u8BA1\u7B97\u5185\u5BB9\u9700\u8981\u5BBD\u5EA6 [Begin]
	const recursion = (list: TablerProps['columns'] = []) => {
		list.forEach((item: any) => {
			total = total + (Number(item?.width) || 0);
			if (item?.children) {
				recursion(item.children);
			}
		});
	};
	// \u8BA1\u7B97\u5185\u5BB9\u9700\u8981\u5BBD\u5EA6 [End]

	recursion(columns);

	return fixed ? { scroll: { x: total, ...scroll } } : {};
};

const handleSort = (
	props: TablerProps,
	pagination: TablerProps['pagination']
): TablerProps['columns'] => {
	return [
		{
			title: props.sortTitle || '\u5E8F\u53F7',
			width: props.sortWidth || 80,
			render(_, __, index) {
				if (pagination) {
					return (
						index +
						1 +
						((pagination?.current || 1) - 1) * (pagination?.pageSize || 10)
					);
				} else {
					return index + 1;
				}
			},
			...props.sortProps,
		},
	];
};

const handleCell = (
	columns: TablerProps['columns']
): TablerProps['columns'] => {
	return columns.map((column) => {
		return {
			...column,
			render: (text, record, index) => {
				const content = column.render?.(text, record, index) || text || '-';
				if (typeof column.ellipsis === 'boolean' && column.ellipsis) {
					return (
						<Tooltip title={text} {...column.ellipsisProps}>
							<div
								style={{
									width: '100%',
									textOverflow: 'ellipsis',
									overflow: 'hidden',
								}}
							>
								{content}
							</div>
						</Tooltip>
					);
				} else {
					return <>{content}</>;
				}
			},
		};
	});
};

const Tabler: FC<TablerProps> = (props) => {
	const {
		columns = [],
		dataSource = [],
		actions = null,
		onPageChange,
		actionsWidth,
		actionsProps,
		fixed = true,
		showSort = true,
	} = props;
	const [state, setState] = useSetState({
		current: 1,
		pageSize: 10,
	});
	const tableRef = React.useRef<HTMLDivElement>(null);
	const [tableHeight, setTableHeight] = React.useState<number>(0);
	const pagination: TablerProps['pagination'] =
		typeof props.pagination === 'boolean'
			? props.pagination
			: {
					current: state.current,
					pageSize: state.pageSize,
					total: dataSource.length,
					showTotal: (value) => \`\u5171 \${value} \u6761\`,
					onChange(page, pageSize) {
						setState({
							current: page,
							pageSize,
						});
						onPageChange?.({ page, size: pageSize, pageSize });
					},
					...props.pagination,
			  };
	const computedTableHeight = () => {
		if (tableRef.current) {
			const { height } = tableRef.current.getBoundingClientRect();
			const theadHeight =
				tableRef.current.querySelector('.ant-table-thead')?.clientHeight || 0;
			const paginationElement =
				tableRef.current.querySelector('.ant-pagination');
			let paginationHeight = paginationElement?.clientHeight || 0;
			if (paginationElement) {
				let marginTop = parseInt(
					window.getComputedStyle(paginationElement).marginTop
				);
				let marginBottom = parseInt(
					window.getComputedStyle(paginationElement).marginBottom
				);
				paginationHeight = paginationHeight + marginTop + marginBottom;
			}
			const tHeight = height - theadHeight - paginationHeight;
			setTableHeight(tHeight);
		}
	};

	useEffect(() => {
		if (tableRef.current && props.autoHeight) {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						computedTableHeight();
					}
				});
			});
			observer.observe(tableRef.current);
			window.addEventListener('resize', computedTableHeight);
			return () => {
				window.removeEventListener('resize', computedTableHeight);
				observer.disconnect();
			};
		}
	}, [tableRef.current, props.loading, props.dataSource, props.autoHeight]);

	return (
		<div
			className={\`\${styles.tabler_container} \${
				props.autoHeight ? styles.autoHeight : ''
			}\`}
			ref={tableRef}
		>
			<Table
				{...props}
				className={\`\${styles.tabler}\`}
				{...procedureFixed({ fixed, scroll: props.scroll, columns })}
				columns={[
					...(showSort ? handleSort(props, pagination) || [] : []),
					...(handleCell(columns) || []),
					...(handleActions(actions, actionsWidth, actionsProps) || []),
				]}
				scroll={{
					...(props.autoHeight && tableHeight ? { y: tableHeight } : {}),
					...props.scroll,
				}}
				pagination={pagination}
				dataSource={dataSource}
			/>
		</div>
	);
};

export default Tabler;
export * from './type.d';
`},41228:function(_,o){o.Z=`import { ButtonProps, PopconfirmProps, TooltipProps } from 'antd';
import type { ColumnType, TableProps } from 'antd/es/table';

export type RecordType = any;

export interface TablerActionsProps {
	key?: string;
	confirm?: string | ((record: RecordType, index: number) => string);
	visible?: boolean | ((record: RecordType, index: number) => boolean);
	loading?: boolean | ((record: RecordType, index: number) => boolean);
	disabled?: boolean | ((record: RecordType, index: number) => boolean);
	props?: ButtonProps;
	confirmProps?: PopconfirmProps;
	content:
		| React.ReactNode
		| ((record: RecordType, index: number) => React.ReactNode);
	onClick?: (record: RecordType, index: number) => void;
}

export interface TablerProps extends TableProps<RecordType> {
	/**
	 * \u7C7B\u540D
	 */
	className?: string;
	/**
	 * \u6837\u5F0F
	 */
	style?: React.CSSProperties;
	/**
	 * \u884Ckey
	 */
	rowKey?: string;
	/**
	 * \u9AD8\u5EA6\u81EA\u9002\u5E94
	 * default: \u5426
	 */
	autoHeight?: boolean;
	/**
	 * \u64CD\u4F5C\u9879
	 */
	actions?: TablerActionsProps[] | null;
	/**
	 * \u64CD\u4F5C\u9879\u53C2\u6570
	 * @default {}
	 */
	actionsProps?: TablerProps['columns'][number];
	/**
	 * \u663E\u793A
	 * default: \u662F\u5426\u663E\u793A\u6392\u5E8F
	 */
	showSort?: boolean;
	/**
	 * \u6392\u5E8F\u6807\u9898
	 * default: \u5E8F\u53F7
	 */
	sortTitle?: string;
	/**
	 * \u6392\u5E8F\u5BBD\u5EA6
	 * default: 80
	 */
	sortWidth?: number;
	/**
	 * \u6392\u5E8F\u53C2\u6570
	 * default: {}
	 */
	sortProps?: TablerProps['columns'][number];
	/**
	 * \u64CD\u4F5C\u5217\u5BBD\u5EA6
	 * default: 200
	 */
	actionsWidth?: string | number | undefined;
	/**
	 * \u662F\u5426\u56FA\u5B9A
	 * default: true
	 */
	fixed?: boolean;
	/**
	 * \u8868\u683C\u5217\u7684\u914D\u7F6E
	 */
	columns: (ColumnType<RecordType> & {
		ellipsis?: boolean;
		ellipsisProps?: TooltipProps;
	})[];
	/**
	 * \u76D1\u542C\u5206\u9875
	 */
	onPageChange?: (props: {
		page: number;
		pageSize: number;
		size: number;
	}) => void;
}
`}}]);
