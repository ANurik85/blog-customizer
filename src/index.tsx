import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState /* , useCallback */ } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
// import { useEffect } from 'react';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [fontSize, setFontSize] = useState(
		defaultArticleState.fontSizeOption.value
	);

	const handleOutsideClick = (event: React.MouseEvent<HTMLElement>): void => {
		const main = document.querySelector(`.${styles.main}`);
		// console.log('closestContainer:', main);
		if (main && !main.contains(event.target as Node)) {
			setIsOpen(true);
		}
	};
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': defaultArticleState.fontFamilyOption.value,
					'--font-size': fontSize,
					'--font-color': defaultArticleState.fontColor.value,
					'--container-width': defaultArticleState.contentWidth.value,
					'--bg-color': defaultArticleState.backgroundColor.value,
				} as CSSProperties
			}
			onClick={handleOutsideClick}>
			<ArticleParamsForm
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				setFontSize={setFontSize}
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
