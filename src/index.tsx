import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
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
				isOpen={isOpen}
				setIsOpen={setIsOpen}
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

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
