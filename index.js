// https://www.w3.org/TR/html5-diff/#obsolete-elements
module.exports = {
	disallowSpecificAttributes: [
		{
			'link': [
				'rev',
				'charset',
				'target',
			],
			'a': [
				'rev',
				'charset',
				'shape',
				'coords',
				'name',
			],
			'iframe': [
				'longdesc',
				'align',
				'frameborder',
				'marginheight',
				'marginwidth',
				'scrolling',
			],
			'area': [
				'nohref',
			],
			'head': [
				'profile',
			],
			'html': [
				'version',
			],
			'img': [
				'name',
				'align',
				'hspace',
				'vspace',
				'border',
			],
			'meta': [
				'scheme',
			],
			'object': [
				'archive',
				'classid',
				'codebase',
				'codetype',
				'declare',
				'standby',
				'align',
				'border',
				'hspace',
				'vspace',
			],
			'param': [
				'valuetype',
				'type',
			],
			'table': [
				'summary',
				'align',
				'bgcolor',
				'cellpadding',
				'cellspacing',
				'frame',
				'rules',
				'width',
			],
			'form': [
				'accept',
			],
			'input': [
				'usemap',
				'align',
			],
			'caption': [
				'align',
			],
			'legend': [
				'align',
			],
			'hr': [
				'align',
				'noshade',
				'size',
				'width',
			],
			'div': [
				'align',
			],
			'h1': [
				'align',
			],
			'h2': [
				'align',
			],
			'h3': [
				'align',
			],
			'h4': [
				'align',
			],
			'h5': [
				'align',
			],
			'h6': [
				'align',
			],
			'p': [
				'align',
			],
			'colgroup': [
				'align',
				'char',
				'charoff',
				'width',
				'valign',
			],
			'tfoot': [
				'align',
				'char',
				'charoff',
				'valign',
			],
			'tr': [
				'align',
				'bgcolor',
				'char',
				'charoff',
				'valign',
			],
			'body': [
				'alink',
				'link',
				'text',
				'vlink',
				'background',
				'bgcolor',
			],
			'col': [
				'char',
				'charoff',
				'align',
				'width',
				'valign',
			],
			'tbody': [
				'char',
				'charoff',
				'align',
				'valign',
			],
			'td': [
				'char',
				'charoff',
				'axis',
				'abbr',
				'scope',
				'align',
				'bgcolor',
				'height',
				'nowrap',
				'width',
				'valign',
			],
			'th': [
				'char',
				'charoff',
				'axis',
				'align',
				'bgcolor',
				'height',
				'nowrap',
				'width',
				'valign',
			],
			'thead': [
				'char',
				'charoff',
				'align',
				'valign',
			],
			'br': [
				'clear',
			],
			'dl': [
				'compact',
			],
			'ol': [
				'compact',
			],
			'ul': [
				'compact',
				'type',
			],
			'li': [
				'type',
			],
			'pre': [
				'width',
			],
			'script': [
				'language',
			],
		},
	],
	disallowSpecificTags: [
		'basefont',
		'big',
		'center',
		'font',
		'strike',
		'tt',
		'frame',
		'frameset',
		'noframes',
		'acronym',
		'applet',
		'isindex',
		'dir',
	],
}
