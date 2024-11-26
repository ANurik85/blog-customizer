import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { Separator } from 'src/ui/separator';
import { Select } from 'src/ui/select';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Text } from 'src/ui/text';
import { useState } from 'react';

interface ArticleParamsFormProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	setFontSize: (fontSize: string) => void;
	setFontFamily: (fontFamily: string) => void;
	setFontColor: (fontColor: string) => void;
	setBgColor: (bgColor: string) => void;
	setContentWidth: (contentWidth: string) => void;
}

export const ArticleParamsForm = ({
	isOpen,
	setIsOpen,
	setFontSize,
	setFontFamily,
	setFontColor,
	setBgColor,
	setContentWidth,
}: ArticleParamsFormProps) => {
	const [localFontSize, setLocalFontSize] = useState(fontSizeOptions[0]);
	const [localFontFamily, setLocalFontFamily] = useState(fontFamilyOptions[0]);
	const [localFontColor, setLocalFontColor] = useState(fontColors[0]);
	const [localBgColor, setLocalBgColor] = useState(backgroundColors[0]);
	const [localContentWidth, setLocalContentWidth] = useState(
		contentWidthArr[0]
	);

	const handleArrowClick = () => {
		setIsOpen(!isOpen);
	};
	const handleFontSizeChange = (option: OptionType) => {
		setLocalFontSize(option);
	};
	const handleFontFamilyChange = (option: OptionType) => {
		setLocalFontFamily(option);
	};
	const handleFontColorChange = (option: OptionType) => {
		setLocalFontColor(option);
	};
	const handleBgColorChange = (option: OptionType) => {
		setLocalBgColor(option);
	};
	const handleContentWidthChange = (option: OptionType) => {
		setLocalContentWidth(option);
	};
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setFontSize(localFontSize.value);
		setFontFamily(localFontFamily.value);
		setFontColor(localFontColor.value);
		setBgColor(localBgColor.value);
		setContentWidth(localContentWidth.value);
		setIsOpen(false);
	};
	const handleReset = () => {
		setLocalFontSize(fontSizeOptions[0]);
		setLocalFontFamily(fontFamilyOptions[0]);
		setLocalFontColor(fontColors[0]);
		setLocalBgColor(backgroundColors[0]);
		setLocalContentWidth(contentWidthArr[0]);
	};
	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleArrowClick} />
			<aside
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
						selected={localFontFamily}
						options={fontFamilyOptions}
						title='Шрифт'
						onChange={handleFontFamilyChange}
					/>
					<RadioGroup
						name='radio'
						title='Размер шрифта'
						options={fontSizeOptions}
						selected={localFontSize}
						onChange={handleFontSizeChange}
					/>
					<Select
						selected={localFontColor}
						options={fontColors}
						title='Цвет шрифта'
						onChange={handleFontColorChange}
					/>
					<Separator />
					<Select
						selected={localBgColor}
						options={backgroundColors}
						title='Цвет фона'
						onChange={handleBgColorChange}
					/>
					<Select
						selected={localContentWidth}
						options={contentWidthArr}
						title='Ширина контента'
						onChange={handleContentWidthChange}
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
