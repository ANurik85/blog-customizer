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
}

export const ArticleParamsForm = ({
	isOpen,
	setIsOpen,
	setFontSize,
}: ArticleParamsFormProps) => {
	const [localFontSize, setLocalFontSize] = useState(fontSizeOptions[0]);
	const handleArrowClick = () => {
		setIsOpen(!isOpen);
	};
	const handleFontSizeChange = (option: OptionType) => {
		setLocalFontSize(option);
	};
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setFontSize(localFontSize.value);
		setIsOpen(false);
	};
	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleArrowClick} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form} onSubmit={handleSubmit}>
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
						// className={styles.select}
						selected={fontFamilyOptions[0]}
						options={fontFamilyOptions}
						title='Шрифт'
					/>
					<RadioGroup
						name='radio'
						title='Размер шрифта'
						options={fontSizeOptions}
						selected={localFontSize}
						onChange={handleFontSizeChange}
					/>
					<Select
						selected={fontColors[0]}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={backgroundColors[0]}
						options={backgroundColors}
						title='Цвет фона'
					/>
					<Select
						selected={contentWidthArr[0]}
						options={contentWidthArr}
						title='Ширина контента'
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
