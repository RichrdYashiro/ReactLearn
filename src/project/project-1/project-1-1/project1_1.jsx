import "../../../styles/index.css";
import styles from "./project.module.css";
import { useState } from "react";
export default function Project1_1() {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);
	const [error, setError] = useState("");

	function onInputButtonClick() {
		let promptValue = prompt();
		console.log(promptValue);
		setValue(promptValue);
		if (promptValue.length < 3) {
			setError("Введенное значение должно содержать минимум 3 символа");
		} else {
			setError("");
		}
	}

	function onAddButtonClick() {
		let isValueValid = value.length >= 3;
		if (isValueValid) {
			const newItem = {
				id: Date.now(),
				value: value,
			};
			setList([...list, newItem]);
			setValue("");
			setError("");
		}
	}
	return (
		<>
			<div className={styles.app}>
				<h1 className={styles["page-heading"]}>Ввод значения</h1>
				<p className={styles["no-margin-text"]}>
					Текущее значение <code>value</code>: "
					<output className={styles["current-value"]}>{value}</output>
					"
				</p>
				{error && <div className={styles.error}>{error}</div>}

				<div className={styles["buttons-container"]}>
					<button
						className={styles.button}
						onClick={onInputButtonClick}
					>
						Ввести новое
					</button>
					<button
						className={styles.button}
						disabled={value.length < 3}
						onClick={onAddButtonClick}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles["list-container"]}>
					<h2 className={styles["list-heading"]}>Список:</h2>
					{list.length === 0 && (
						<p className={styles["no-margin-text"]}>
							Нет добавленных элементов
						</p>
					)}

					<ul className={styles.list}>
						{list.map((item) => (
							<li className={styles["list-item"]} key={item.id}>
								{item.value}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
