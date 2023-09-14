import { TablerProps } from '@/tabler';
import ReactDOMServer, { renderToString } from 'react-dom/server';
import { template } from './template';
const uri = 'data:application/vnd.ms-excel;base64,';

const useExportExcel = (fileName = '文件') => {
	const exportToExcel = (table: string, name: string) => {
		// 编码要用utf-8不然默认gbk会出现中文乱码
		const ctx = {
			worksheet: name,
			table,
		};
		const base64 = function (s: string) {
			return window.btoa(unescape(encodeURIComponent(s)));
		};
		const link = document.createElement('a');
		const formateContent = (s: string, c: typeof ctx) => {
			return s.replace(/{(\w+)}/g, (m, p: keyof typeof ctx) => {
				return c[p];
			});
		};
		link.setAttribute('href', uri + base64(formateContent(template, ctx)));
		link.setAttribute('download', name);
		link.click();
	};
	const exportExcel = (
		column: TablerProps['columns'],
		tbodyData: Record<string, any>[]
	) => {
		const th_len = column.length; // 表头的长度
		const tb_len = tbodyData.length; // 记录条数
		let thead = '<thead><tr>';
		for (let i = 0; i < th_len; i++) {
			thead += '<th>' + column[i]?.title + '</th>';
		}
		thead += '</tr></thead>';

		let tbody = '<tbody>';
		for (let i = 0; i < tb_len; i++) {
			tbody += '<tr>';
			const row = tbodyData[i]; // 获取每一行数据
			for (let i = 0; i < th_len; i++) {
				const key = column[i]?.dataIndex as string;
				const render = column[i]?.render;
				if (key) {
					const text = render ? render(row[key], row, i) : row[key];
					const cell = row[key];
					// 如果是react元素且为 img 元素
					if (
						cell &&
						typeof cell === 'object' &&
						'$$typeof' in cell &&
						cell['type'] === 'img'
					) {
						const { width, height } = cell.props as HTMLImageElement;
						tbody += `<td style="width:${width}px;height:${height}px;text-align: center; vertical-align: middle"><div style="display:inline">${renderToString(
							row[key] as JSX.Element
						)}</div></td>`;
					} else {
						// render 返回出来的是 element 对象
						if (typeof text === 'object' && '$$typeof' in text) {
							const container = document.createElement('div');
							container.innerHTML = ReactDOMServer.renderToString(text);
							tbody +=
								'<td style="text-align:center">' +
								container.textContent +
								'</td>';
						} else {
							tbody += '<td style="text-align:center">' + text + '</td>';
						}
					}
				}
			}
			tbody += '</tr>';
		}
		tbody += '</tbody>';
		const table = thead + tbody;
		// 导出表格
		exportToExcel(table, fileName);
	};
	return {
		exportExcel,
	};
};

export default useExportExcel;
