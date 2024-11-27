import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { Separator } from 'src/ui/separator';
import { Select } from 'src/ui/select';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Text } from 'src/ui/text';
import { useEffect, useRef, useState } from 'react';

interface ArticleParamsFormProps {
	setFontSize: (fontSize: string) => void;
	setFontFamily: (fontFamily: string) => void;
	setFontColor: (fontColor: string) => void;
	setBgColor: (bgColor: string) => void;
	setContentWidth: (contentWidth: string) => void;
}

export const ArticleParamsForm = ({
	setFontSize,
	setFontFamily,
	setFontColor,
	setBgColor,
	setContentWidth,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [formState, setFormState] = useState({
		fontSize: defaultArticleState.fontSizeOption,
		fontFamily: defaultArticleState.fontFamilyOption,
		fontColor: defaultArticleState.fontColor,
		bgColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	});
	const handleChange = (name: string) => (value: OptionType) => {
		setFormState((prevState) => ({ ...prevState, [name]: value }));
	};
	const sidebarRef = useRef<HTMLElement>(null);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, setIsOpen]);

	const handleArrowClick = () => {
		setIsOpen(!isOpen);
	};
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setFontSize(formState.fontSize.value);
		setFontFamily(formState.fontFamily.value);
		setFontColor(formState.fontColor.value);
		setBgColor(formState.bgColor.value);
		setContentWidth(formState.contentWidth.value);
	};
	const handleReset = () => {
		setFormState({
			fontSize: defaultArticleState.fontSizeOption,
			fontFamily: defaultArticleState.fontFamilyOption,
			fontColor: defaultArticleState.fontColor,
			bgColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
		});
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleArrowClick} />
			<aside
				ref={sidebarRef}
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text
						as='div'
						size={22}
						weight={800}
						fontStyle='normal'
						uppercase={true}
						align='left'
						family='open-sans'>
						Задайте параметры
					</Text>

					<Select
						selected={formState.fontFamily}
						options={fontFamilyOptions}
						title='Шрифт'
						onChange={handleChange('fontFamily')}
					/>
					<RadioGroup
						name='radio'
						title='Размер шрифта'
						options={fontSizeOptions}
						selected={formState.fontSize}
						onChange={handleChange('fontSize')}
					/>
					<Select
						selected={formState.fontColor}
						options={fontColors}
						title='Цвет шрифта'
						onChange={handleChange('fontColor')}
					/>
					<Separator />
					<Select
						selected={formState.bgColor}
						options={backgroundColors}
						title='Цвет фона'
						onChange={handleChange('bgColor')}
					/>
					<Select
						selected={formState.contentWidth}
						options={contentWidthArr}
						title='Ширина контента'
						onChange={handleChange('contentWidth')}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
