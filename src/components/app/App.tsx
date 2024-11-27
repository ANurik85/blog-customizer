import { CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { defaultArticleState } from '../../constants/articleProps';

import '../../styles/index.scss';
import styles from '../../styles/index.module.scss';

const App = () => {
	const [fontSize, setFontSize] = useState(
		defaultArticleState.fontSizeOption.value
	);
	const [fontFamily, setFontFamily] = useState(
		defaultArticleState.fontFamilyOption.value
	);
	const [fontColor, setFontColor] = useState(
		defaultArticleState.fontColor.value
	);
	const [bgColor, setBgColor] = useState(
		defaultArticleState.backgroundColor.value
	);
	const [contentWidth, setContentWidth] = useState(
		defaultArticleState.contentWidth.value
	);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': fontFamily,
					'--font-size': fontSize,
					'--font-color': fontColor,
					'--container-width': contentWidth,
					'--bg-color': bgColor,
				} as CSSProperties
			}>
			<ArticleParamsForm
				setFontSize={setFontSize}
				setFontFamily={setFontFamily}
				setFontColor={setFontColor}
				setBgColor={setBgColor}
				setContentWidth={setContentWidth}
			/>
			<Article />
		</main>
	);
};
export default App;
