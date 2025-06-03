import styles from "./project.module.css";
import data from "./data.json";
import { useState } from "react";
const Project1_2 = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;
	const handlePrev = () => {
		if (!isFirstStep) {
			setActiveIndex(activeIndex - 1);
		}
	};

	const handleNext = () => {
		if (isLastStep) {
			setActiveIndex(0);
		} else {
			setActiveIndex(activeIndex + 1);
		}
	};
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles["steps-list"]}>
						{steps.map(({ title }, index) => (
							<li
								key={steps[index].id}
								className={
									styles["steps-item"] +
									" " +
									(index === activeIndex ? styles.done : "")
								}
							>
								{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
								<button
									className={styles["steps-item-button"]}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>
								{/* При клике на кнопку установка выбранного шага в качестве активного */}
								{title}
							</li>
						))}
					</ul>
					<div className={styles["buttons-container"]}>
						<button
							className={styles.button}
							onClick={handlePrev}
							disabled={isFirstStep}
						>
							Назад
						</button>
						<button className={styles.button} onClick={handleNext}>
							{isLastStep ? "Начать сначала" : "Далее"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project1_2;
